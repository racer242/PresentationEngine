import { Component } from 'react';
import XLSX from 'xlsx';

import settings from '../configuration/settings.js';
import { setStoreData, loadStoreDataError } from '../actions/appActions.js';
import { callLater } from '../core/helpers.js';

import DataParser from './DataParser.js';

// import content from '../content/presentation.xlsx'


class DataManager extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      isLoading:false,
      isLoaded:false,
    }
    this.loader=null;
    this.result=null;
    this.dataParser = new DataParser();
  }

/* ++++ React methods ++++ */

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.load();
    this.mounted=true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  componentDidUpdate(prevProps, prevState) {
  }

  onStoreChange() {
    // if (this.mounted) {
    //   let state=this.store.getState();
    // }
  }

  /* ++++ Logic methods ++++ */

  load() {

    if (this.state.isLoading) return;
    this.setState(
      {
        ...this.state,
        isLoading:true,
        isLoaded:false,
      }
    )

    if ((settings.useEmbeddedContent)&&(settings.content)) {
      console.log("Extracting embedded content");
      callLater(()=>{
        let wb;
        try {
          wb = XLSX.read(settings.content, {type: 'base64'});
        } catch (e) {
          this.onContentLoadError({
            lastError:{
              source:settings.contentUrl,
              location:window.location.href,
              error:e.message,
            }
          });
          return
        }
        let data = this.convertSheetsToTables(wb.Sheets);
        if (data) {
          data = this.dataParser.parse(data);
          if (data) {
            this.onContentLoad(data);
          } else {
            this.onContentLoadError({
              lastError:{
                source:settings.contentUrl,
                location:window.location.href,
                error:"Parse XLSX error",
              }
            });
          }
        } else {
          this.onContentLoadError({
            lastError:{
              source:settings.contentUrl,
              location:window.location.href,
              error:"Convert XLSX error"
            }
          });
        }
      },1000);

    } else {

      this.loadXlsx(settings.contentUrl,(data)=>{
        if (data) {
          data = this.dataParser.parse(data);
          this.onContentLoad(data);
        } else {
          this.onContentLoadError({
            lastError:{
              source:settings.contentUrl,
              location:window.location.href,
            }
          });
        }
      });

    }
  }


  onContentLoad(data) {
    this.setState(
      {
        ...this.state,
        isLoading:false,
        isLoaded:true,
      }
    )

    this.store.dispatch(
      setStoreData(data)
    );

  }

  onContentLoadError(data) {
    this.setState(
      {
        ...this.state,
        isLoading:false,
        isLoaded:false,
      }
    )
    this.store.dispatch(
      loadStoreDataError(data)
    );
  }

/* ++++ Load methods ++++ */

  loadXlsx(url,callback) {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = (e) => {
      let arraybuffer = oReq.response;
      let data = arraybuffer;
      let wb;
      let arr = this.fixXlsx(data);
      let btoaValue=btoa(arr);
      if (settings.outContentToConsole) {
        console.log("CONTENT XLSX COPY:");
        console.log("-----------------------------------------------------------");
        console.log("window.content=\""+btoaValue+"\"");
        console.log("-----------------------------------------------------------");
      }
      try {
        wb = XLSX.read(btoaValue, {type: 'base64'});
      } catch (e) {
        callback(null);
        return;
      }
      callback(this.convertSheetsToTables(wb.Sheets));
    }
    oReq.send();
  }

/* ++++ Processing methods ++++ */

  fixXlsx(data) {
    let o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
  }

  convertSheetsToTables(data) {
    let result={};
    for (let id in data) {
      let rows=[];
      result[id]=rows;
      let cells=data[id];
      for (let cellId in cells) {
        let y=cellId.substr(1)-1;
        let x=cellId.substr(0,1);
        if (rows[y]==null) {
          rows[y]=[]
        }
        rows[y][x]=cells[cellId].v;
      }
    }
    return result;
  }

  render () {
    return null;
  }

}
export default DataManager;
