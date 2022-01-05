export const resetIncludedLayers = (state,index) => {
  let included={};
  let target=state.sequence[index];
  if (target) {
    included[target.id]=true;
    // if (target.next) {
    //   included[target.next]=true;
    // }
    // if (target.prev) {
    //   included[target.prev]=true;
    // }
    // if (index+1<state.sequence.length) {
    //   included[state.sequence[index+1].id]=true;
    // }
    // if (index>0) {
    //   included[state.sequence[index-1].id]=true;
    // }
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

  if (checkSlideLoaded(target.layers)) {
    state.readyToInit=true;
  }


}

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

export const reduceViewLoaded = (state,slideIndex,layerId) => {

  let layers=state.sequence[slideIndex].layers;
  layers[layerId].loaded=true;

  state.readyToInit=checkSlideLoaded(layers);

  return {
    ...state,
    blockRender:true,
  }

}

export const reduceReady = (state) => {
  state.sequence.map((v)=>{
    Object.values(v.layers).map( (layer) => {
      // if (layer.static) {
      //     layer.included=(v.index===state.position);
      //     layer.loaded=(v.index===state.position);
      //     layer.visible=(v.index===state.position);
      // } else {
        if (layer.loaded) {
          layer.included=true;
          layer.visible=true;
        }
      // }
    })
  });

  return {
    ...state,
    viewPosition:state.position,
    readyToInit:false,
    blockRender:false,
  }

}
