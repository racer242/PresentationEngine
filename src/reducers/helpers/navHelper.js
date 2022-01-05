import {resetIncludedLayers} from './assetHelper.js'

export const reduceToSlideIndex = (state,index) => {
  resetIncludedLayers(state,index);
  return {
    ...state,
    position:index,
  }
}

export const reduceToSlideId = (state,id) => {
  let position=state.position;
  let slide=state.sequence.find(v => v.id===id);
  if (slide) {
    resetIncludedLayers(state,slide.index);
    position=slide.index;
  }
  return {
    ...state,
    position,
  }
}
