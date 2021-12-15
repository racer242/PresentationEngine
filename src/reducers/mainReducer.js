import settings from '../configuration/settings.js'
import {reduceToSlideIndex} from './helpers/navigationHelper.js'

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

    case 'START_PLAYBACK':
    {
      state={
        ...reduceToSlideIndex(state,0),
        ...action.data,
      }
      break;
    }

    case 'GOTO_SLIDE_INDEX': {
      break;
    }

    case 'GOTO_SLIDE': {
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
  // state = feedEditorReducer(state,action);

  return state;
}


export default mainReducer
