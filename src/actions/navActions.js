export const startPlayback = () => {
  return {
    type: 'START_PLAYBACK',
  }
}

export const nextSlide = () => {
  return {
    type: 'NEXT_SLIDE',
  }
}

export const prevSlide = () => {
  return {
    type: 'PREV_SLIDE',
  }
}

export const gotoHome = () => {
  return {
    type: 'GOTO_HOME',
  }
}

export const gotoSlideIndex = (index) => {
  return {
    type: 'GOTO_SLIDE_INDEX',
    index,
  }
}

export const gotoSlide = (id) => {
  return {
    type: 'GOTO_SLIDE',
    id,
  }
}

export const applyViewPosition = () => {
  return {
    type: 'APPLY_VIEW_POSITION',
  }
}

export const blockInteraction = () => {
  return {
    type: 'BLOCK_INTERACTION',
  }
}

export const unblockInteraction = () => {
  return {
    type: 'UNBLOCK_INTERACTION',
  }
}

export const transitionFinished = () => {
  return {
    type: 'TRANSITION_FINISHED',
  }
}

export const playbackIsDone = () => {
  return {
    type: 'PLAYBACK_IS_DONE',
  }
}

export const hideLayer = (index,name) => {
  return {
    type: 'HIDE_LAYER',
    index,
    name,
  }
}

export const showLayer = (index,name) => {
  return {
    type: 'SHOW_LAYER',
    index,
    name,
  }
}

export const switchLayer = (index,name) => {
  return {
    type: 'SWITCH_LAYER',
    index,
    name,
  }
}
