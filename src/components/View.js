import React, { Component } from "react";
// import path from 'path';
import settings from "../configuration/settings.js";

import "../css/view.css";

class View extends Component {
  constructor(props) {
    super(props);
    this.image_loadHandler = this.image_loadHandler.bind(this);
    this.image_touchStartHandler = this.image_touchStartHandler.bind(this);
    this.image_touchEndHandler = this.image_touchEndHandler.bind(this);
    this.image_touchMoveHandler = this.image_touchMoveHandler.bind(this);
    this.imageXDownPosition = null;
    this.imageXMovePosition = null;
  }

  sendMessage(data) {
    console.log("SEND MESSAGE:", this.props.name, data);
    data.source = this.props.name;
    window.postMessage(data, "*");
  }

  image_loadHandler(event) {
    this.sendMessage({ event: "complete" });
  }

  image_touchStartHandler(event) {
    this.imageXDownPosition = event.touches[0].clientX;
  }

  image_touchMoveHandler(event) {
    this.imageXMovePosition = event.touches[0].clientX;
  }

  image_touchEndHandler(event) {
    if (!this.imageXDownPosition) {
      return;
    }
    if (this.imageXDownPosition - this.imageXMovePosition > 0) {
      this.sendMessage({ event: "next" });
    } else {
      this.sendMessage({ event: "prev" });
    }
    this.imageXDownPosition = null;
  }

  render() {
    let layer = this.props.layer;

    if (!layer.source.path) {
      return null;
    }

    let source = "./" + layer.source.path + "/" + settings.indexHtmlFile;

    let left =
      -(this.props.bounds.native.maxWidth - this.props.bounds.size.width) / 2;
    let top =
      -(this.props.bounds.native.maxHeight - this.props.bounds.size.height) / 2;

    let containerLeft;
    let containerTop;
    let containerRight;
    let containerBottom;

    if (layer.align?.indexOf("top") >= 0) {
      if (
        Math.round(
          this.props.bounds.native.maxHeight * this.props.bounds.scale
        ) > this.props.bounds.size.height
      ) {
        top =
          (this.props.bounds.native.maxHeight * this.props.bounds.scale -
            this.props.bounds.native.maxHeight) /
          2;
      }
      containerTop = 0;
    } else if (layer.align?.indexOf("bottom") >= 0) {
      if (
        Math.round(
          this.props.bounds.native.maxHeight * this.props.bounds.scale
        ) > this.props.bounds.size.height
      ) {
        top =
          (this.props.bounds.native.maxHeight * this.props.bounds.scale -
            this.props.bounds.native.maxHeight) /
            2 -
          (this.props.bounds.native.maxHeight * this.props.bounds.scale -
            this.props.bounds.size.height);
      }
      containerBottom = 0;
    }
    top = Math.round(top);

    if (layer.align?.indexOf("left") >= 0) {
      if (
        Math.round(
          this.props.bounds.native.maxWidth * this.props.bounds.scale
        ) > this.props.bounds.size.width
      ) {
        left =
          (this.props.bounds.native.maxWidth * this.props.bounds.scale -
            this.props.bounds.native.maxWidth) /
          2;
      }
      containerLeft = 0;
    } else if (layer.align?.indexOf("right") >= 0) {
      if (
        Math.round(
          this.props.bounds.native.maxWidth * this.props.bounds.scale
        ) > this.props.bounds.size.width
      ) {
        left =
          (this.props.bounds.native.maxWidth * this.props.bounds.scale -
            this.props.bounds.native.maxWidth) /
            2 -
          (this.props.bounds.native.maxWidth * this.props.bounds.scale -
            this.props.bounds.size.width);
      }
      containerRight = 0;
    }
    left = Math.round(left);

    let containerWidth = this.props.bounds.native.maxWidth;
    let containerHeight = this.props.bounds.native.maxHeight;

    if (layer.width) {
      if (containerLeft == null && containerRight == null) {
        containerLeft = (containerWidth - layer.width) / 2;
      }
      containerWidth = layer.width;
    }
    if (layer.height) {
      if (containerTop == null && containerBottom == null) {
        containerTop = (containerHeight - layer.height) / 2;
      }
      containerHeight = layer.height;
    }
    if (layer.margin) {
      if (layer.margin.l) {
        if (!containerLeft) containerLeft = layer.margin.l;
        else containerLeft += layer.margin.l;
      } else if (layer.margin.r) {
        if (!containerRight) containerRight = layer.margin.r;
        else containerRight += layer.margin.r;
      }
      if (layer.margin.t) {
        if (!containerTop) containerTop = layer.margin.t;
        else containerTop += layer.margin.t;
      } else if (layer.margin.b) {
        if (!containerBottom) containerBottom = layer.margin.b;
        else containerBottom += layer.margin.b;
      }
    }

    return (
      <div
        className="view"
        style={{
          ...this.props.bounds.style,
          ...this.props.style,
          visibility:
            this.props.hidden || this.props.invisible ? "hidden" : "visible",
        }}
      >
        <div
          className="viewScaler"
          style={{
            width: this.props.bounds.native.maxWidth,
            height: this.props.bounds.native.maxHeight,
            left,
            top,
            transform: `scale(${this.props.bounds.scale})`,
          }}
        >
          {!layer.image && (
            <iframe
              title={this.props.name}
              name={this.props.name}
              src={source}
              className="iframeContainer"
              style={{
                width: containerWidth,
                height: containerHeight,
                left: containerLeft,
                top: containerTop,
                right: containerRight,
                bottom: containerBottom,
              }}
            />
          )}
          {layer.image && (
            <img
              src={"./" + layer.source.path + "/" + layer.source.clip}
              className="imageContainer"
              onLoad={this.image_loadHandler}
              onError={this.image_loadHandler}
              onTouchStart={this.image_touchStartHandler}
              onTouchMove={this.image_touchMoveHandler}
              onTouchEnd={this.image_touchEndHandler}
              draggable={false}
              alt=""
              style={{
                width: containerWidth,
                height: containerHeight,
                left: containerLeft,
                top: containerTop,
                right: containerRight,
                bottom: containerBottom,
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default View;
