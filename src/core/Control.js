import { Component } from 'react';

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

    this.actionMap={
    }

    this.appStartDelay=500;

    // console.log("Control constructor");

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

  //--------------------------------------------------------------------------
  //
  // Own methods
  //
  //--------------------------------------------------------------------------

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState(state);
      if (state.dataLoaded) {

      } else
      if (state.loadDataError) {
        
      }
    }
  }

  render () {
    return null;
  }

}

export default Control;
