import React, { Component } from 'react';

import Projector from '../components/Projector.js';
import { unblockInteraction } from '../actions/navActions.js';


import '../css/container.css';

class Container extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state={};
    this.transitionReadyHandler=this.transitionReadyHandler.bind(this);
  }

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      if (state.blockRender) return;
      this.setState(state);
    }
  }

  transitionReadyHandler() {
    this.store.dispatch(unblockInteraction());
  }

  getViewPort(windowWidth,windowHeight,conf) {

    let boxScale=Math.min(windowWidth/conf.minWidth,windowHeight/conf.minHeight);

    let boxWidth=conf.minWidth*boxScale;
    let boxHeight=conf.minHeight*boxScale;

    let maxWidth=conf.maxWidth*boxScale;
    let maxHeight=conf.maxHeight*boxScale;

    if (windowHeight<maxHeight) boxHeight=windowHeight; else boxHeight=maxHeight;
    if (windowWidth<maxWidth) boxWidth=windowWidth; else boxWidth=maxWidth;

    let boxLeft=(windowWidth-boxWidth)*.5+conf.offsetX;
    let boxTop=(windowHeight-boxHeight)*.5+conf.offsetY;

    let boxFontSize = boxScale*conf.nominalFontSize;

    boxWidth=Math.round(boxWidth);
    boxHeight=Math.round(boxHeight);
    boxLeft=Math.round(boxLeft);
    boxTop=Math.round(boxTop);
    boxFontSize=Math.round(boxFontSize);
    return {boxWidth,boxHeight,boxLeft,boxTop,boxScale,boxFontSize};
  }


  updateGlobalFontSize(fontSize) {
    document.getElementsByTagName('html')[0].style['font-size']=fontSize+'px';
  }

  render() {

    let children = [];
    children.push(this.props.children);

    if (this.state.position>=0) {

      let {boxWidth,boxHeight,boxLeft,boxTop,boxScale,boxFontSize}=this.getViewPort(this.props.windowWidth,this.props.windowHeight,this.state.settings);
      if (boxScale) {

        let bounds={
          size:{
            width:boxWidth,
            height:boxHeight,
            top:boxTop,
            left:boxLeft,
          },
          style:{
            width:boxWidth+"px",
            height:boxHeight+"px",
          },
          native:{
            minWidth:this.state.settings.minWidth,
            minHeight:this.state.settings.minHeight,
            maxWidth:this.state.settings.maxWidth,
            maxHeight:this.state.settings.maxHeight,
          },
          scale:boxScale,
        };

        this.updateGlobalFontSize(boxFontSize);

        children.push(
          <div
            id="Container"
            key="Container"
            className="globalContainer"
            style={{
              background:this.state.settings.globalBg,
            }}
          >
            <div
              className="contentContainer"
              style={{
                ...bounds.style,
                left:boxLeft+"px",
                top:boxTop+"px",
                background:this.state.settings.containerBg,
              }}
            >
              <Projector
                state={this.state}
                bounds={bounds}
                onTransitionReady={this.transitionReadyHandler}
              />
            </div>
          </div>
        )
      }
    }

    return children;
  }
}

export default Container;
