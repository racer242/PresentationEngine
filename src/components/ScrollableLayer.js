import React, { Component } from 'react';
import settings from '../configuration/settings.js'

import View from './View.js';

import '../css/layer.css';

class ScrollableLayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transition:false,
      from:0,
      to:0,
      fromOffset:0,
      toOffset:0,
      scrollOffset:0,
    };
    this.scrollOffset=0;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.position!==this.props.position) {
      let from=prevProps.position;
      let to=this.props.position;

      let fromOffset=0;
      let toOffset=0;

      if (from>to) {
        fromOffset=this.scrollOffset;
        toOffset=this.scrollOffset-1;
        this.scrollOffset--;
      } else
      if (from<to) {
        fromOffset=this.scrollOffset;
        toOffset=this.scrollOffset+1;
        this.scrollOffset++;
      }

      this.setState({
        ...this.state,
        transition:true,
        from,
        to,
        fromOffset,
        toOffset,
        scrollOffset:this.scrollOffset,
      })
    }
  }

  render() {
    let sequence=this.props.sequence;
    let slide=this.props.slide;
    let isHidden=false;
    let isntStatic=!this.props.layer.static;

    let scrollPosition=0;
    let fromPosition=0;
    let toPosition=0;

    if (isntStatic) {
      fromPosition=this.state.fromOffset*this.props.bounds.size.width;
      toPosition=this.state.toOffset*this.props.bounds.size.width;
      scrollPosition=-this.state.scrollOffset*this.props.bounds.size.width;
    }

    return (
      <div
        className="layer"
        style={{
          ...this.props.bounds.style,
          ...this.props.style,
          left:scrollPosition,
          transition: (isntStatic&&this.state.transition)?`left ${settings.transition.duration}s ${settings.transition.easing} ${settings.transition.delay}s`:null,
        }}
        onTransitionEnd={()=>{this.setState({...this.state,transition:false})}}
      >
      {
        sequence.map((v,i) => {
          let layer=v.layers[this.props.layer.name];
          let xPosition=0;
          let hide=false;
          if (isntStatic) {
            if (i===this.state.from) {
              xPosition=fromPosition;
            } else
            if (i===this.state.to) {
              xPosition=toPosition;
            } else
            if (this.state.from===-1) {
              xPosition=0;
            } else {
              hide=true;
            }
          }
          if ((layer.included)&&(!layer.ignore)) {
            return (
              <View
                name={v.id+"|"+layer.name+"|"+i}
                key={"Slide"+i}
                layer={layer}
                bounds={this.props.bounds}
                hidden={layer.hiddenNow}
                invisible={((!layer.visible)||hide)}
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
