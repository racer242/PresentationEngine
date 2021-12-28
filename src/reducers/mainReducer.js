import settings from '../configuration/settings.js'
import navReducer from './navReducer.js'
import assetReducer from './assetReducer.js'


let mainReducerController = (state={}, action) => {

  console.log("mainReducer",action);

  switch (action.type) {

    case 'APP_INIT': {
      state = {
        ...state,
        ...settings.defaultState,
      }
      break;
    }

    case 'SET_STORE_DATA':
    case 'LOAD_STORE_DATA_ERROR':
    {
      state={
        ...state,
        ...action.data,
      }
      break;
    }

    default: {}
  }
  return state;
}


const mainReducer = (state={}, action) => {

  if (action.extraAction) {
    state = mainReducer(state,action.extraAction);
  }

  state = mainReducerController(state,action);
  state = navReducer(state,action);
  state = assetReducer(state,action);


  return state;
}


export default mainReducer
