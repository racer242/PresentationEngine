import React, { Component } from "react";

import ScrollableLayer from "./ScrollableLayer.js";

import "../css/projector.css";

class Layer extends Component {
  render() {
    let state = this.props.state;
    let currentSlide = state.sequence[state.position];

    return (
      <div id="Projector" className="projector" style={this.props.bounds.style}>
        {state.layers.map((v, i) => {
          let layer = currentSlide.layers[v.name];
          return (
            <ScrollableLayer
              key={v.name}
              layer={layer}
              slide={currentSlide}
              sequence={state.sequence}
              bounds={this.props.bounds}
              position={state.viewPosition}
              transition={state.settings.transition}
              transitionDelay={state.settings.transitionDelay}
              transitionDuration={state.settings.transitionDuration}
              transitionEasing={state.settings.transitionEasing}
              onTransitionReady={this.props.onTransitionReady}
            />
          );
        })}
      </div>
    );
  }
}

export default Layer;
