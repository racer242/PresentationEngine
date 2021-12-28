import {reduceViewLoaded, reduceReady} from './helpers/assetHelper.js'

const assetReducer = (state={}, action) => {

  console.log("assetReducer",action);

  switch (action.type) {

    case 'VIEW_LOADED': {
      state={
        ...reduceViewLoaded(state,action.slideIndex,action.layerName),
      }
      break;
    }

    case 'INIT_IS_DONE':
    {
      state={
        ...reduceReady(state),
      }
      break;
    }

    default:{}
  }
  return state
}


export default assetReducer
