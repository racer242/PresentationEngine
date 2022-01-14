import {reduceToSlideIndex, reduceToSlideId, reduceNextSlide, reducePrevSlide} from './helpers/navHelper.js'

const navReducer = (state={}, action) => {

  // console.log("navReducer",action);

  switch (action.type) {

    case 'START_PLAYBACK':
    {
      state={
        ...reduceToSlideIndex(state,state.position,true),
        isWorking:true,
      }
      break;
    }

    case 'NEXT_SLIDE': {
      state=reduceNextSlide(state);
      break;
    }

    case 'PREV_SLIDE': {
      state=reducePrevSlide(state);
      break;
    }

    case 'GOTO_SLIDE_INDEX': {
      state=reduceToSlideIndex(state,action.index);
      break;
    }

    case 'GOTO_SLIDE': {
      state=reduceToSlideId(state,action.id);
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

    case 'TRANSITION_FINISHED': {
      state={
        ...state,
        blockInteraction:false,
        readyToPlay:true,
      }
      break;
    }

    case 'PLAYBACK_IS_DONE': {
      state={
        ...state,
        readyToPlay:false,
      }
      break;
    }

    case 'HIDE_LAYER': {
      let slide=state.sequence[action.index];
      if (slide) {
        let layer=slide.layers[action.name];
        if (layer) {
          layer.hiddenNow=true;
          state={
            ...state,
          }
        }
      }
      break;
    }

    case 'SHOW_LAYER': {
      let slide=state.sequence[action.index];
      if (slide) {
        let layer=slide.layers[action.name];
        if (layer) {
          layer.hiddenNow=false;
          state={
            ...state,
          }
        }
      }
      break;
    }

    case 'SWITCH_LAYER': {
      let slide=state.sequence[action.index];
      if (slide) {
        let layer=slide.layers[action.name];
        if (layer) {
          if (layer.hiddenNow)
            layer.hiddenNow=false;
          else
            layer.hiddenNow=true;
          state={
            ...state,
          }
        }
      }
      break;
    }

    default:{}
  }
  return state
}


export default navReducer
