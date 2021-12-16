import React, { Component } from 'react';
import path from 'path';
import settings from '../configuration/settings.js'

import '../css/view.css';

class View extends Component {

  render() {
    let layer=this.props.layer;
    let source="./"+path.join(layer.source.path,settings.indexHtmlFile);

    let left=(-(this.props.bounds.native.maxWidth-this.props.bounds.size.width)/2);
    let top=(-(this.props.bounds.native.maxHeight-this.props.bounds.size.height)/2);

    let containerLeft;
    let containerTop;
    let containerRight;
    let containerBottom;

    if (layer.align?.indexOf("top")>=0) {
      if (Math.round(this.props.bounds.native.maxHeight*this.props.bounds.scale)>this.props.bounds.size.height) {
        top=(this.props.bounds.native.maxHeight*this.props.bounds.scale-this.props.bounds.native.maxHeight)/2;
        containerTop=0;
      }
    } else
    if (layer.align?.indexOf("bottom")>=0) {
      if (Math.round(this.props.bounds.native.maxHeight*this.props.bounds.scale)>this.props.bounds.size.height) {
        top=((this.props.bounds.native.maxHeight*this.props.bounds.scale-this.props.bounds.native.maxHeight)/2)-(this.props.bounds.native.maxHeight*this.props.bounds.scale-this.props.bounds.size.height);
      }
      containerBottom=0;
    }
    top=Math.round(top);

    if (layer.align?.indexOf("left")>=0) {
      if (Math.round(this.props.bounds.native.maxWidth*this.props.bounds.scale)>this.props.bounds.size.width) {
        left=(this.props.bounds.native.maxWidth*this.props.bounds.scale-this.props.bounds.native.maxWidth)/2;
      }
      containerLeft=0;
    } else
    if (layer.align?.indexOf("right")>=0) {
      if (Math.round(this.props.bounds.native.maxWidth*this.props.bounds.scale)>this.props.bounds.size.width) {
        left=((this.props.bounds.native.maxWidth*this.props.bounds.scale-this.props.bounds.native.maxWidth)/2)-(this.props.bounds.native.maxWidth*this.props.bounds.scale-this.props.bounds.size.width);
      }
      containerRight=0;
    }
    left=Math.round(left);


    let containerWidth=this.props.bounds.native.maxWidth;
    let containerHeight=this.props.bounds.native.maxHeight;

    if (layer.width) {
      containerWidth=layer.width;
    }
    if (layer.height) {
      containerHeight=layer.height;
    }

    return (
      <div
        className="view"
        style={this.props.bounds.style}
      >
        <div
          className="viewScaler"
          style={{
            width:this.props.bounds.native.maxWidth,
            height:this.props.bounds.native.maxHeight,
            left,
            top,
            transform:`scale(${this.props.bounds.scale})`,
          }}
        >
          <iframe
            title={this.props.title}
            src={source}
            className='viewContainer'
            style={{
              width:containerWidth,
              height:containerHeight,
              left:containerLeft,
              top:containerTop,
              right:containerRight,
              bottom:containerBottom,
            }}
          />
        </div>
      </div>
    )
  }
}

export default View;
