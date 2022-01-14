const checkSlideLoaded = (layers) => {
  let ready = true;
  for (let layerName in layers) {
    let layer = layers[layerName];
    if ((!layer.loaded)&&(!layer.ignore)) {
      ready = false;
      break;
    }
  }
  return ready;
}

const updateCacheStack = (index,state) => {
  let cacheStack=state.cacheStack;
  let cacheIndex=cacheStack.indexOf(index);
  if (cacheIndex>=0) {
    cacheStack.splice(cacheIndex,1);
  }
  cacheStack.push(index);
  if (cacheStack.length>state.settings.cacheSize) {
    let deleted=cacheStack.splice(0,cacheStack.length-state.settings.cacheSize);
    deleted.map((v)=>{
      let slide=state.sequence[v];
      Object.values(slide.layers).map( (layer) => {
        layer.loaded=false;
        layer.included=false;
        layer.visible=false;
        return null;
      });
      return null;
    });
  }
}

export const resetIncludedLayers = (state,index) => {
  let slide=state.sequence[index];
  if (slide) {
    for (let layerName in slide.layers) {
      let layer=slide.layers[layerName];
      layer.included=true;
      layer.hiddenNow=layer.hidden;
      if (layer.ignore) layer.loaded=true;
    }
  }
  state.blockInteraction=true;

  if (checkSlideLoaded(slide.layers)) {
    updateCacheStack(index,state);
    state.readyToInit=true;
  }

  return state;
}



export const reduceViewLoaded = (state,slideIndex,layerId) => {

  let layers=state.sequence[slideIndex].layers;
  layers[layerId].loaded=true;

  let readyToInit=checkSlideLoaded(layers);
  if (readyToInit) {
    updateCacheStack(slideIndex,state);
  }

  return {
    ...state,
    blockRender:true,
    readyToInit,
  }

}

export const reduceReady = (state) => {
  state.sequence.map((v,i)=>{
    Object.values(v.layers).map( (layer) => {
      if (layer.loaded) {
        layer.visible=true;
        if (layer.static) {
          layer.visible=(i===state.position);
        }
      }
      return null;
    })
    return null;
  });


  if (state.position===state.lastPosition) {
    state.blockInteraction=false;
    state.readyToPlay=true;
  }

  return {
    ...state,
    viewPosition:state.position,
    readyToInit:false,
    blockRender:false,
  }
}
