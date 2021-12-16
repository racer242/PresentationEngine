export const reduceToSlideIndex = (state,index) => {

  return {
    ...state,
    currentSlide:state.sequence[index],
  }
}
