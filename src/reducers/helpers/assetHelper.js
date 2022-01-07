import settings from '../../configuration/settings.js'

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
  if (cacheStack.length>settings.cacheSize) {
    let deleted=cacheStack.splice(0,cacheStack.length-settings.cacheSize);
    deleted.map((v)=>{
      let slide=state.sequence[v];
      Object.values(slide.layers).map( (layer) => {
        layer.loaded=false;
        layer.included=false;
        layer.visible=false;
      });
    });
  }
}

export const resetIncludedLayers = (state,index) => {
  let included={};
  let target=state.sequence[index];
  if (target) {
    included[target.id]=true;
  }
  state.sequence.map((v)=>{
    let isIncluded=included[v.id];
    for (let layerName in v.layers) {
      let layer=v.layers[layerName];
      if (isIncluded) {
        layer.included=true;
        if (layer.ignore) layer.loaded=true;
      }
    }
  });

  state.blockInteraction=true;

  if (checkSlideLoaded(target.layers)) {
    updateCacheStack(index,state);
    state.readyToInit=true;
  }

  return state;
}

export const reduceViewLoaded = (state,slideIndex,layerId) => {

  let layers=state.sequence[slideIndex].layers;
  layers[layerId].loaded=true;

  state.readyToInit=checkSlideLoaded(layers);
  if (state.readyToInit) {
    updateCacheStack(slideIndex,state);
  }

  state.blockRender=true;

  return state;

}

export const reduceReady = (state) => {
  state.sequence.map((v,i)=>{
    Object.values(v.layers).map( (layer) => {
      if (layer.loaded) {
        layer.included=true;
        layer.visible=true;
        if (layer.static) {
          layer.visible=(i===state.position);
        }
      }
    })
  });

  state.viewPosition=state.position;
  state.readyToInit=false;
  state.blockRender=false;

  if (state.position===settings.startPosition) {
    state.blockInteraction=false;
  }


  return state;
}
