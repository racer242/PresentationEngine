export const viewLoaded = (slideIndex,layerName) => {
  return {
    type: 'VIEW_LOADED',
    slideIndex,
    layerName,
  }
}

export const initIsDone = () => {
  return {
    type: 'INIT_IS_DONE',
  }
}
