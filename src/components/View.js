import React, { Component } from 'react';
import path from 'path';
import settings from '../configuration/settings.js'

import '../css/view.css';

class View extends Component {

  render() {
    let source="./"+path.join(this.props.source.path,settings.indexHtmlFile);
    // console.log(source);
    return (
      <div
        className="layer"
        style={this.props.bounds.style}
      >
        <iframe
          title={this.props.title}
          src={source}
          className='viewContainer'
          // width={this.props.bounds.native.width+"px"}
          // height={this.props.bounds.native.height+"px"}
          style={{
            width:this.props.bounds.native.width+"px",
            height:this.props.bounds.native.height+"px",
            // ...this.props.bounds.native,
            left:(-(this.props.bounds.native.width-this.props.bounds.size.width)/2),
            top:(-(this.props.bounds.native.height-this.props.bounds.size.height)/2),
            transform:`scale(${this.props.bounds.scale})`,
          }}
        />
      </div>
    )
  }
}

export default View;
