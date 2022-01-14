import React, { Component } from 'react';

import View from './View.js';

import '../css/layer.css';

class ScrollableLayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      from:props.position,
      to:props.position,
      fromOffset:props.position,
      toOffset:props.position,
      scrollOffset:props.position,
    };
    this.scrollOffset=props.position;
    this.transition=false;
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
      this.transition=true;
      this.setState({
        ...this.state,
        from,
        to,
        fromOffset,
        toOffset,
        scrollOffset:this.scrollOffset,
      });
    }
  }

  transitionReady() {
    if (this.transition) {
      this.transition=false;
      if (this.props.layer.master) {
        this.props.onTransitionReady();
      }
    }
  }

  render() {
    let sequence=this.props.sequence;
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
          transition: (isntStatic&&this.transition)?`left ${this.props.transitionDuration}s ${this.props.transitionEasing} ${this.props.transitionDelay}s`:null,
        }}
        onTransitionEnd={()=>{this.transitionReady();}}
      >
      {
        sequence.map((v,i) => {
          let layer=v.layers[this.props.layer.name];
          if ((layer.included)&&(!layer.ignore)) {
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
