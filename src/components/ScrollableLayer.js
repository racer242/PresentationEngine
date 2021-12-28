import React, { Component } from 'react';
// import settings from '../configuration/settings.js'

import View from './View.js';

import '../css/layer.css';

class ScrollableLayer extends Component {

  render() {
    let sequence=this.props.sequence;
    let slide=this.props.slide;
    let target=this.props.target;
    let isHidden=false;
    let isntStatic=!this.props.layer.static;

    let slideXPosition=0;
    if (isntStatic) {
      slideXPosition=-this.props.position*this.props.bounds.size.width;
    }

    return (
      <div
        className="layer"
        style={{
          ...this.props.bounds.style,
          ...this.props.style,
          left:slideXPosition,
          transition: "left 1s ease-out",
        }}
      >
      {
        sequence.map((v,i) => {
          let layer=v.layers[this.props.layer.name];
          let xPosition=0;
          if (isntStatic) {
            xPosition=i*this.props.bounds.size.width;
          }
          if ((layer.included)&&(!layer.ignore)) {
            return (
              <View
                name={v.id+"|"+layer.name+"|"+i}
                key={"Slide"+i}
                layer={layer}
                bounds={this.props.bounds}
                hidden={layer.hiddenNow}
                invisible={!layer.visible}
                style={{
                  left:xPosition,
                }}
              />
            )
          } else {
            return null;
          }
        })
      }
      </div>
    )
  }
}

export default ScrollableLayer;
