import { Component } from 'react';
import settings from '../configuration/settings.js'
import { startPlayback } from '../actions/navActions.js';


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
      if ((state.dataLoaded)&&(!state.playbackStarted)) {
        this.store.dispatch(startPlayback());
      } else
      if (state.loadDataError) {
        console.log("Presentation data load error...",state.lastError);
      }
    }
  }

  //--------------------------------------------------------------------------
  //
  // Own methods
  //
  //--------------------------------------------------------------------------

  initInteractions() {
    window.addEventListener("message", (event) => {
  		let eventType=event.data.event;
      let eventSource=event.data.source;
      console.log("Received Message:",eventType,eventSource);
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

    targetWindow.postMessage(
      {
        event:eventType,
        source:settings.parentWindowId,
        target:targetName,
        data,
      },
      "*"
    );
  }


  processInteraction(eventType,data,slide,layer) {
    console.log("Process interaction:",eventType,data,slide,layer);
    switch (eventType) {
      case "complete": {
        this.sendMessage("init",{
          source:layer.source,
          params:slide.params,
          data:this.state.extraData,
        },slide,layer);
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
