import {resetIncludedLayers} from './assetHelper.js'

export const reduceNextSlide = (state) => {
  let index=state.position;
  let slide=state.sequence[index];

  if (slide?.next) {
    return reduceToSlideId(state,slide.next);
  }

  if (index<state.sequence.length-1) {
    return reduceToSlideIndex(state,index+1);
  }

  return state;
}

export const reducePrevSlide = (state) => {
  let index=state.position;
  let slide=state.sequence[index];

  if (slide?.prev) {
    return reduceToSlideId(state,slide.prev);
  }

  if (index>0) {
    return reduceToSlideIndex(state,index-1);
  }

  return state;
}

export const reduceToSlideIndex = (state,index,firstTime) => {
  if ((state.position===index)&&(!firstTime)) {
    return state;
  }
  state=resetIncludedLayers(state,index);
  return {
    ...state,
    lastPosition:state.position,
    position:index,
  }
}

export const reduceToSlideId = (state,id) => {
  let slide=state.sequence.find(v => v.id===id);
  let position=state.position;
  if (slide) {
    position=slide.index;
    if (state.position===position) {
      return state;
    }

    state=resetIncludedLayers(state,slide.index);
  }
  return {
    ...state,
    lastPosition:state.position,
    position,
  }
}
