import React, { Component } from 'react';
// import settings from '../configuration/settings.js'

import View from './View.js';

import '../css/layer.css';

class ScrollableLayer extends Component {

  render() {
    let state=this.props.state;
    let slide=this.props.slide;
    return (
      <div
        className="layer"
        style={this.props.bounds.style}
      >
      {
        state.sequence.map((v,i) => {
          let layer=v.layers[this.props.layer.name];
          // console.log(layer.source);
          if (layer.source.path) {
            return (
              <View
                title={slide.id+"_"+layer.name}
                key={"Slide"+i}
                source={layer.source}
                bounds={this.props.bounds}
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
