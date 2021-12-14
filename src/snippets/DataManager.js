import EventDispatcher from '../core/EventDispatcher';

import { callLater } from '../helpers';

import Dispatcher from './Dispatcher';
import settings from '../Settings';

import DataParser from './DataParser';

import preloader from 'preloader';


import XLSX from 'xlsx';

class DataManager extends EventDispatcher {

  constructor(props) {
    super(props);
    this.state = {
      template:null,
      dialogues:null,
      imagesAreLoading:false,
      imagesLoaded:false,
    }
    this.loader=null;
    this.completed=false;
    this.result=null;
  }

/* ++++ React methods ++++ */

  componentDidMount() {
    Dispatcher.subscribe("onAppLoad",this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.completed) return;
    this.checkComplete(this.state);
  }

/* ++++ Own methods ++++ */

/*  Загрузка xlsx */
  loadXlsx(url,callback) {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = (e) => {
      var arraybuffer = oReq.response;
      var data = arraybuffer;
      var wb;
      var arr = this.fixXlsx(data);
      var btoaValue=btoa(arr);

      if (window.settings.outTemplateToConsole) {//!!!
        console.log("TEMPLATE XLSX COPY:");
        console.log("-----------------------------------------------------------");
        console.log("window.template=\""+btoaValue+"\"");
        console.log("-----------------------------------------------------------");
      }

      wb = XLSX.read(btoaValue, {type: 'base64'});
      callback(this.convertSheetsToTables(wb.Sheets));
    }
    oReq.send();
  }

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
        let x=cellId.substr(0,1);//cellId.charCodeAt(0)-("A").charCodeAt(0);
        if (rows[y]==null) {
          rows[y]=[]
        }
        rows[y][x]=cells[cellId].v;
      }
      rows.splice(0,1);
    }
    return result;
  }

/*  Загрузка json */

  loadJSON(url,callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = (e) => {
      console.log("XMLHttpRequest:",xobj.readyState,xobj.status);
      if ((xobj.readyState === 4) && (xobj.status === 200)) {
        if (xobj.responseText.substr(0,1)!=="<") {
          callback(xobj.responseText);
          console.log("JSON load complete:",url);
        } else {
          console.log("JSON load error:",url);
          callback(null);
        }
      } else {
        let isError=false;
        if (xobj.readyState === 0) isError=true;
        if ((xobj.readyState === 4)&&(xobj.status===0)) isError=true;
        if (xobj.status >= 400) isError=true;
        if (isError)
        {
          console.log("JSON load error:",url);
          callback(null);
        }
      }
    };
    xobj.send(null);
  }



  loadDialogues(dialogues) {
    this.dialoguesSource=dialogues;
    this.dialoguesCount=dialogues.length;
    this.dialoguesData={length:0};
    this.loadingDialogueIndex=0;
    this.loadDialogue();
  }

  loadDialogue() {
    if (this.dialoguesSource[this.loadingDialogueIndex]) {
      let dialogueId = this.dialoguesSource[this.loadingDialogueIndex].A;
      this.loadJSON(settings.dialogueUrl.replace("{id}",dialogueId),(data)=>{
        let jsonObject = null;
        try {
          jsonObject = JSON.parse(data);
        } catch (e) {
          console.log("Json failed parsing",dialogueId,":",e);
        }
        this.dialoguesData[dialogueId]=jsonObject;
        this.dialoguesData.length++;
        if (this.dialoguesData.length===this.dialoguesCount) {
          this.setState(
            {
              ...this.state,
              dialogues:this.dialoguesData
            }
          );
        } else {
          this.loadingDialogueIndex++;
          this.loadDialogue();
        }
      });
    }
  }


/*  Preload images */

  getManifest(data) {
    let manifest=[];
    manifest = data.locations.list.reduce((a,v,i)=>{
      a.push(v.src);
      for (let id in v.decorations) {
        a.push(v.decorations[id]);
      }
      return a;
    },manifest);

    manifest = data.dialogueObjects.list.reduce((a,v,i)=>{
      if (!v.runOnStart) {
        a.push(v.src);
      }
      a.push(v.dialogue.src);
      for (let i = 0; i < v.dialogue.questions.list.length; i++) {
        let question = v.dialogue.questions.list[i];
        if (question.speakSrc!=="") {
          a.push(settings.dialogueImagePath()+v.dialogue.person.id+"/"+question.speakSrc);
        }
        if (question.waitSrc!=="") {
          a.push(settings.dialogueImagePath()+v.dialogue.person.id+"/"+question.waitSrc);
        }
      }
      return a;
    },manifest);

    manifest = data.hiddenObjects.list.reduce((a,v,i)=>{
      for (let id in v.srcMap) {
        if (v.statusToActionIdMap[id]) {
          a.push(v.srcMap[id]);
        }
      }
      for (let id in v.photoSrcMap) {
        if (v.statusToActionIdMap[id]) {
          a.push(v.photoSrcMap[id]);
        }
      }
      return a;
    },manifest);

    manifest = data.actions.list.reduce((a,v,i)=>{
      if (v.type==="Dialogue") {
        a.push(v.dialogue.src);
      }
      return a;
    },manifest);

    manifest.push(settings.developerIconUrl);
    manifest.push(settings.welcomeScreenBg());
    manifest.push(settings.mapScreenBg());
    manifest.push(settings.workScreenBg());
    manifest.push(settings.phoneUrl());
    console.log("Manifest:",manifest);
    return manifest;
  }

  preloadImages(manifest) {

    this.setState(
      {
        ...this.state,
        imagesAreLoading:true,
      }
    )

    this.loader=new preloader( {
      xhrImages: false,
    });

    this.loader.on('complete',() => {
      console.log("Preload complete");

      this.setState(
        {
          ...this.state,
          imagesLoaded:true,
        }
      )
    });

    manifest.forEach((v,i)=>{
      if ((v)&&(v!=="")&&(v.length>6)) {
        this.loader.addImage(v);
      }
    });

    this.loader.load();

  }


/*  Load checking */

  checkComplete(checkingData) {
    if (
      (checkingData.template)&&
      (checkingData.dialogues)
    ) {
      if (!checkingData.imagesAreLoading) {
        let dataParser=new DataParser();
        this.result=dataParser.parse(checkingData);
        this.preloadImages(this.getManifest(this.result));
      } else
      if (checkingData.imagesLoaded)
      {
        this.completed=true;

        if (window.settings.outDialoguesToConsole) { //!!!
          console.log("DIALOGUES JSON COPY:");
          console.log("-----------------------------------------------------------");
          console.log("window.dialogues="+JSON.stringify(checkingData.dialogues));
          console.log("-----------------------------------------------------------");
        }
        this.dispatchEvent("onComplete",this.result);
      }
    }
  }


/*  Загрузка данных */

  load() {
    this.completed=false;


    console.log("Use embedded content:",window.settings.useEmbeddedContent,"\ntemplate =",window.template!==null,"\ndialogues =",window.dialogues!==null);

    if ((window.settings)&&(window.settings.useEmbeddedContent)&&(window.template)&&(window.dialogues)) {
      console.log("Extracting embedded content");
      callLater(()=>{
        let wb = XLSX.read(window.template, {type: 'base64'});
        this.setState(
          {
            ...this.state,
            template:this.convertSheetsToTables(wb.Sheets),
            dialogues:window.dialogues,
          }
        );
      },1000);
      return;
    }

    this.loadXlsx(settings.templateUrl,(data)=>{
      this.setState(
        {
          ...this.state,
          template:data
        }
      );
      console.log("Data:",data);
      this.loadDialogues(data.DIALOGUE.concat(data.PHONE));
    });
  }

  /* ++++ Dispatcher event handlers ++++ */

  onAppLoad() {
    this.load();
  }

  /* ++++ RENDER ++++ */

  render () {
    return null;
  }

}
export default DataManager;
