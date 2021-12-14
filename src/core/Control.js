import { Component } from 'react';

import { startPlayback } from '../actions/navActions.js';


class Control extends Component {

  //--------------------------------------------------------------------------
	//
	// Constructor
	//
	//--------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {};
    this.store = this.props.store;
  }

  //--------------------------------------------------------------------------
  //
  // React methods
  //
  //--------------------------------------------------------------------------

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState(state);
      if ((state.dataLoaded)&&(!state.playbackStarted)) {
        this.store.dispatch(startPlayback());
      } else
      if (state.loadDataError) {
        console.log("Presentation data load error...");
      }
    }
  }

  //--------------------------------------------------------------------------
  //
  // Own methods
  //
  //--------------------------------------------------------------------------

  goFirstSlide() {


  }

  render () {
    return null;
  }

}

export default Control;
