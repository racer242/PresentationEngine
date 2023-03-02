import React, { Component } from "react";

import settings from "./configuration/settings.js";

import mainReducer from "./reducers/mainReducer";
import Container from "./core/Container";
import DataManager from "./core/DataManager.js";
import Control from "./core/Control";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { appInit } from "./actions/appActions.js";

import "./css/app.css";

const Store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  constructor(props) {
    super(props);

    console.log(settings.startAppText);

    this.state = {};

    this.initHandler = this.initHandler.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);

    this.isInitialized = false;
  }

  updateLayout() {
    let windowInnerWidth =
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      window.innerWidth;
    let windowInnerHeight =
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      window.innerHeight;

    this.setState({
      ...this.state,
      windowWidth: windowInnerWidth,
      windowHeight: windowInnerHeight,
    });
  }

  initHandler(event) {
    this.updateLayout();
  }

  resizeHandler(event) {
    this.updateLayout();
  }

  componentDidMount() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    Store.dispatch(appInit());
    window.addEventListener("load", this.initHandler);
    window.addEventListener("resize", this.resizeHandler);
  }

  render() {
    return (
      <Provider store={Store}>
        <Container
          id="Container"
          windowWidth={this.state.windowWidth}
          windowHeight={this.state.windowHeight}
          store={Store}
        >
          <DataManager store={Store} />
          <Control store={Store} />
        </Container>
      </Provider>
    );
  }
}

export default App;
