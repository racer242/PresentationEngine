import React, { Component } from 'react';
// import settings from '../configuration/settings.js'
import '../css/container.css';

class Container extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state={};
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
      this.setState(state);
    }
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

    if (this.state.currentSlide) {
      // console.log("------",this.state.currentSlide);
      // console.log(this.props);

      let {boxWidth,boxHeight,boxLeft,boxTop,boxScale,boxFontSize}=this.getViewPort(this.props.windowWidth,this.props.windowHeight,this.state.settings);
      if (boxScale) {

        this.updateGlobalFontSize(boxFontSize);

        return (
          <div
            id="Container"
            className="globalContainer"
            style={{
              background:this.state.settings.globalBg,
            }}
          >
            <div
              className="contentContainer"
              style={{
                width:boxWidth+"px",
                height:boxHeight+"px",
                left:boxLeft+"px",
                top:boxTop+"px",
                background:this.state.settings.containerBg,
              }}
            >Данные загружены!</div>
            {children}
          </div>
        )
      }
    }

    return children;
  }
}

export default Container;
