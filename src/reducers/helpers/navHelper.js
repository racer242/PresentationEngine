import {resetIncludedLayers} from './assetHelper.js'

export const reduceToSlideIndex = (state,index) => {
  state=resetIncludedLayers(state,index);
  return {
    ...state,
    position:index,
    lastPosition:state.position,
  }
}

export const reduceToSlideId = (state,id) => {
  let position=state.position;
  let slide=state.sequence.find(v => v.id===id);
  if (slide) {
    state=resetIncludedLayers(state,slide.index);
    position=slide.index;
  }
  return {
    ...state,
    position,
    lastPosition:state.position,
  }
}
