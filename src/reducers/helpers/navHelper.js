import {resetIncludedLayers} from './assetHelper.js'

export const reduceToSlideIndex = (state,index) => {
  resetIncludedLayers(state,index);
  return {
    ...state,
    position:index,
  }
}

export const reduceToSlideId = (state,id) => {
  let slide=state.sequence.find(v => v.id===id);
  resetIncludedLayers(state,slide.index);
  let position=state.position;
  if (slide) {
    position=slide.index;
  }
  return {
    ...state,
    position,
  }
}
