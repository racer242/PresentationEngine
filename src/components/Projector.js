import React, { Component } from 'react';
// import settings from '../configuration/settings.js'

import StaticLayer from './StaticLayer.js';
import ScrollableLayer from './ScrollableLayer.js';


import '../css/projector.css';

class Layer extends Component {

  render() {
    let state=this.props.state;
    return (
      <div
        id="Projector"
        className="projector"
        style={this.props.bounds.style}
      >
        {
          state.layers.map((v,i) => {
            let layer=state.currentSlide.layers[v.name];
            if (v.static) {
              return (
                <StaticLayer
                  key={v.name}
                  layer={layer}
                  slide={state.currentSlide}
                  bounds={this.props.bounds}
                />
              )
            } else {
              return (
                <ScrollableLayer
                  key={v.name}
                  state={state}
                  layer={layer}
                  slide={state.currentSlide}
                  bounds={this.props.bounds}
                />
              )
            }
          })
        }
      </div>
    )
  }
}

export default Layer;
