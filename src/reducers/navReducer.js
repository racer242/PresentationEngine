import {reduceToSlideIndex, reduceToSlideId} from './helpers/navHelper.js'

const navReducer = (state={}, action) => {

  console.log("navReducer",action);

  switch (action.type) {

    case 'START_PLAYBACK':
    {
      state={
        ...reduceToSlideIndex(state,0),
        playbackStarted:true,
      }
      break;
    }


    case 'NEXT_SLIDE': {
      let index=state.position;
      if (index<state.sequence.length-1) {
        state={
          ...reduceToSlideIndex(state,index+1),
        }
      }
      break;
    }

    case 'PREV_SLIDE': {
      let index=state.position;
      if (index>0) {
        state={
          ...reduceToSlideIndex(state,index-1),
        }
      }
      break;
    }

    case 'GOTO_SLIDE_INDEX': {
      state={
        ...reduceToSlideIndex(state,action.index),
      }
      break;
    }

    case 'GOTO_SLIDE': {
      state={
        ...reduceToSlideId(state,action.id),
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

    case 'BLOCK_INTERACTION': {
      state={
        ...state,
        blockInteraction:true,
      }
      break;
    }

    case 'UNBLOCK_INTERACTION': {
      state={
        ...state,
        blockInteraction:false,
      }
      break;
    }

    default:{}
  }
  return state
}


export default navReducer
