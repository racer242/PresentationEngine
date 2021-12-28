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
        style={{
          ...this.props.bounds.style,
          ...this.props.style,
        }}
      >
        <View
          name={slide.id+"|"+layer.name+"|"+slide.index}
          layer={layer}
          bounds={this.props.bounds}
          hidden={layer.hiddenNow}
          invisible={!layer.visible}
        />
      </div>
    )
  }
}

export default StaticLayer;
