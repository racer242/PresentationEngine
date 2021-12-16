import React, { Component } from 'react';
// import settings from '../configuration/settings.js'

import View from './View.js';

import '../css/layer.css';

class ScrollableLayer extends Component {

  getVisibleIds(slide,slides) {
    let result=[];
    result.push(slide.id);
    if (slide.index>0) {
      result.push(slides[slide.index-1].id);
    }
    if (slide.index<slides.length-1) {
      result.push(slides[slide.index+1].id);
    }
    if (slide.next) {
      result.push(slide.next);
    }
    if (slide.prev) {
      result.push(slide.prev);
    }
    return result;
  }

  render() {
    let state=this.props.state;
    let slide=this.props.slide;
    let isHidden=false;
    let slideXPosition=-slide.index*this.props.bounds.size.width;
    let visibleIds=this.getVisibleIds(slide,state.sequence);
    return (
      <div
        className="layer"
        style={{
          ...this.props.bounds.style,
          ...this.props.style,
          left:slideXPosition,
        }}
      >
      {
        state.sequence.map((v,i) => {
          let layer=v.layers[this.props.layer.name];
          let xPosition=i*this.props.bounds.size.width;
          if (layer.source.path) {
            return (
              <View
                name={slide.id+"|"+layer.name+"|"+slide.index}
                key={"Slide"+i}
                layer={layer}
                bounds={this.props.bounds}
                hidden={isHidden}
                invisible={visibleIds.indexOf(v.id)<0}
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
