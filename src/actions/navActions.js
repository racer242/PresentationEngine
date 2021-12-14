export const startPlayback = () => {
  return {
    type: 'START_PLAYBACK',
    data:{
      playbackStarted:true,
    },
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
