import React, { Component } from 'react';
import path from 'path';
import settings from '../configuration/settings.js'

import '../css/layer.css';

class Layer extends Component {

  render() {
    let children = [];
    children.push(this.props.children);
    let state=this.props.state;
    return (
      <div
        id="Container"
        className="container"
        style={{
          background:this.state.settings.globalBg,
        }}
      >
        <iframe
          key={state.name}
          src={path.join(state.source.path,settings.indexHtmlFile)}
          className='layer'
          style={
            {
              width:this.props.width+"px",
              height:this.props.height+"px",
            }
          }
        />
        {children}
      </div>
    )
  }
}

export default Layer;
