import React, { Component } from 'react';
// import settings from '../configuration/settings.js'

import View from './View.js';

import '../css/layer.css';

class StaticLayer extends Component {

  render() {
    let slide=this.props.slide;
    let layer=this.props.layer;
    return (
      <div
        className="layer"
        style={this.props.bounds.style}
      >
        <View
          title={slide.id+"_"+layer.name}
          layer={layer}
          bounds={this.props.bounds}
        />
      </div>
    )
  }
}

export default StaticLayer;
