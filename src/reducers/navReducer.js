import {reduceToSlideIndex, reduceToSlideId} from './helpers/navHelper.js'

const navReducer = (state={}, action) => {

  console.log("navReducer",action);

  switch (action.type) {

    case 'START_PLAYBACK':
    {
      state={
        ...reduceToSlideIndex(state,0),
        ...action.data,
      }
      break;
    }


    case 'GOTO_NEXT_SLIDE': {
      let index=state.position;
      if (index<state.sequence.length-1) {
        state={
          ...reduceToSlideIndex(state,index+1),
          ...action.data,
        }
      }
      break;
    }

    case 'GOTO_PREV_SLIDE': {
      let index=state.position;
      if (index>0) {
        state={
          ...reduceToSlideIndex(state,index-1),
          ...action.data,
        }
      }
      break;
    }

    case 'GOTO_SLIDE_INDEX': {
      state={
        ...reduceToSlideIndex(state,action.index),
        ...action.data,
      }
      break;
    }

    case 'GOTO_SLIDE': {
      state={
        ...reduceToSlideId(state,action.id),
        ...action.data,
      }
      break;
    }

    case 'APPLY_VIEW_POSITION': {
      state={
        ...state,
        viewPosition:state.position,
      }
      break;
    }

    default:{}
  }
  return state
}


export default navReducer
