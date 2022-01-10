import { Component } from 'react';
import settings from '../configuration/settings.js'
import { startPlayback, nextSlide, prevSlide, gotoSlide, hideLayer, showLayer, switchLayer, playbackIsDone } from '../actions/navActions.js';
import { viewLoaded, initIsDone } from '../actions/assetActions.js';


class Control extends Component {

  //--------------------------------------------------------------------------
	//
	// Constructor
	//
	//--------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {};
    this.store = this.props.store;
  }

  //--------------------------------------------------------------------------
  //
  // React methods
  //
  //--------------------------------------------------------------------------

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
    this.initInteractions();
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState(state);

      if ((state.dataLoaded)&&(!state.isWorking)) {
        this.store.dispatch(startPlayback());
      } else
      if (state.loadDataError) {
        console.log("Presentation data load error...",state.lastError);
      } else
      if (state.readyToInit) {
        this.sendInit();
        setTimeout(()=>{
          this.store.dispatch(initIsDone());
        },200)
      } else
      if (state.readyToPlay) {
        this.sendPlay();
        setTimeout(()=>{
          this.store.dispatch(playbackIsDone());
        },200)
      }

    }
  }

  //--------------------------------------------------------------------------
  //
  // Own methods
  //
  //--------------------------------------------------------------------------


  sendInit() {
    // this.state.sequence.map((v)=>{
    let slide=this.state.sequence[this.state.position];
    Object.values(slide.layers).map((layer)=>{
      if (layer.loaded) {
        this.sendMessage("init",{
          source:layer.source,
          params:slide.params,
          menus:this.state.menus,
          data:this.state.extraData,
        },slide,layer);
      }
    });
    // });
  }

  sendPlay() {
    let slide=this.state.sequence[this.state.position];
    Object.values(slide.layers).map((layer)=>{
      if (!layer.hiddenNow) {
        this.sendMessage("play",{},slide,layer);
      }
    });
  }

  initInteractions() {
    window.addEventListener("message", (event) => {
  		let eventType=event.data.event;
      let eventSource=event.data.source;
      console.log("Received Message:",eventType,eventSource,event);
      if ((eventSource)&&(eventSource!==settings.parentWindowId)) {
        let parseSource=eventSource.split("|");
        let sourceId=parseSource[0];
        let slideLayer=parseSource[1];
        let slideIndex=parseSource[2];
        if ((this.state)&&(this.state.sequence)) {
          let slide=this.state.sequence[slideIndex];
          if (slide) {
            let layer=slide.layers[slideLayer];
            if (layer) {
              this.processInteraction(eventType,event.data,slide,layer);
            }
          }
        }
      }
  	})
  }

  sendMessage(eventType,data,slide,layer) {
    console.log("Send message:",eventType,data,slide,layer);
    let targetWindow;
    let targetName;
    if (slide==="broadcast") {
      targetName=slide;
      targetWindow=window;
    } else {
      targetName=slide.id+"|"+layer.name+"|"+slide.index;
      targetWindow = window.frames[targetName];
    }
    if (targetWindow) {
      targetWindow.postMessage(
        {
          event:eventType,
          source:settings.parentWindowId,
          target:targetName,
          data,
        },
        "*"
      );
    } else {
      console.log("NO TARGET WINDOW",targetName);
    }
  }

  processInteraction(eventType,data,slide,layer) {
    console.log("Process interaction:",eventType,data,slide,layer);

    switch (eventType) {
      case "complete": {
        this.store.dispatch(viewLoaded(slide.index,layer.name));
        break;
      }
      case "next": {
        if (this.state.blockInteraction) {
          return;
        }
        this.store.dispatch(nextSlide());
        break;
      }
      case "prev": {
        if (this.state.blockInteraction) {
          return;
        }
        this.store.dispatch(prevSlide());
        break;
      }
      case "goto": {
        if (this.state.blockInteraction) {
          return;
        }
        let slideId;
        if (data.params)
          slideId=data.params[0];
        else
          if (data) slideId=data.id;
        this.store.dispatch(gotoSlide(slideId));
        break;
      }
      case "hide": {
        this.store.dispatch(hideLayer(slide.index,data.name));
        break;
      }
      case "show": {
        this.store.dispatch(showLayer(slide.index,data.name));
        this.sendMessage("play",{},slide,slide.layers[data.name]);
        break;
      }
      case "switch": {
        this.store.dispatch(switchLayer(slide.index,data.name));
        let targetLayer=slide.layers[data.name];
        if (targetLayer) {
          if (targetLayer.hiddenNow) {
            this.sendMessage("play",{},slide,slide.layers[data.name]);
          }
        }
        break;
      }
      case "stop": {
        this.sendMessage("stop",{},slide,layer);
        break;
      }
      default:{}
    }
  }

  render () {
    return null;
  }

}

export default Control;
