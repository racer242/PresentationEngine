export const reduceToSlideIndex = (state,index) => {

  return {
    ...state,
    currentSlide:state.sequence[0],
  }
}
