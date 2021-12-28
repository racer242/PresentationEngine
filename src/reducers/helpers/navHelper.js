import {resetIncludedLayers} from './assetHelper.js'

export const reduceToSlideIndex = (state,index) => {
  resetIncludedLayers(state,index);
  return {
    ...state,
    position:index,
  }
}

export const reduceToSlideId = (state,id) => {
  resetIncludedLayers(state);
  let slide=state.sequence.find(v => v.id===id);
  let position=state.position;
  if (slide) {
    position=slide.index;
  }
  return {
    ...state,
    position,
  }
}
