import settings from './../configuration/settings.js'

let mainReducerController = (state={}, action) => {

  console.log("mainReducer",action);

  switch (action.type) {

    case 'APP_INIT': {
      return {
        ...state,
        ...settings.defaultState,
      }
    }

    case 'SET_STORE_DATA':
    case 'LOAD_STORE_DATA_ERROR': {
      return {
        ...state,
        ...action.data,
      }
    }

    default: {
      return state
    }
  }
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
