export const startPlayback = () => {
  return {
    type: 'START_PLAYBACK',
    data:{
      playbackStarted:true,
    },
  }
}

export const nextSlide = () => {
  return {
    type: 'GOTO_NEXT_SLIDE',
  }
}

export const prevSlide = () => {
  return {
    type: 'GOTO_PREV_SLIDE',
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
