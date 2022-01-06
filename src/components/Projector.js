import React, { Component } from 'react';
// import settings from '../configuration/settings.js'

import ScrollableLayer from './ScrollableLayer.js';


import '../css/projector.css';

class Layer extends Component {

  render() {

    let state=this.props.state;
    let currentSlide=state.sequence[state.position];
    // let targetSlide=state.sequence[state.target];

    return (
      <div
        id="Projector"
        className="projector"
        style={this.props.bounds.style}
      >
        {
          state.layers.map((v,i) => {
            let layer=currentSlide.layers[v.name];
              return (
                <ScrollableLayer
                  key={v.name}
                  layer={layer}
                  slide={currentSlide}
                  // target={targetSlide}
                  sequence={state.sequence}
                  bounds={this.props.bounds}
                  position={state.viewPosition}
                />
              )
            // }
          })
        }
      </div>
    )
  }
}

export default Layer;
