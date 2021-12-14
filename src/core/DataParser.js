// import settings from '../configuration/settings.js'
import { concatObjects } from '../helpers/objectTools.js'
import { applyMacrosObject } from '../helpers/macrosTools.js'


import dirtyJson from 'dirty-json'


class DataParser {

  parseSettings(sheet) {
    if (!sheet) {
      return null;
    }
    return sheet.reduce((a,v,i)=>{
      if ((v)&&(i>0)) {
        a[v.A]=v.B;
      }
      return a;
    },{});
  }

  parseSource(source) {
    let result={};
    if (source) {
      let parseLayer=source.split("#");
      if (parseLayer.length>1) {
        result.frame=parseLayer[1];
      } else {
        result.frame=null;
      }
      parseLayer=parseLayer[0].split(">");
      if (parseLayer.length>1) {
        result.path=parseLayer[0];
        result.clip=parseLayer[1];
      } else {
        result.path=parseLayer[0];
        result.clip=null;
      }
    }
    return result;
  }

  parseLayers(sheet) {
    if (!sheet) {
      return null;
    }
    let index = sheet[0];
    let layers = sheet.reduce((a,v,i)=>{
      if ((v)&&(i>0)) {
        let layer={};
        for (let name in index) {
          layer[index[name]]=v[name];
        }
        layer.source=this.parseSource(layer.source);
        if (!layer.level) layer.level=0;
        a.push(layer);
      }
      return a;
    },[]);

    layers.sort((a,b)=>{
      if (a.level>b.level) return 1;
      if (a.level<b.level) return -1;
      return 0;
    })

    let layerIndex = layers.reduce((a,v,i)=>{
      a[v.name]=i;
      return a;
    },{});

    return { layers, layerIndex};
  }

  parseTemplates(sheet,layerIndex) {
    if (!sheet) {
      return null;
    }
    let index=sheet[0];
    return sheet.reduce((a,v,i)=>{
      if ((v)&&(i>0)) {
        let template={ layers:{} };
        for (let name in index) {
          if (index[name] in layerIndex) {
            if (!template.layers[index[name]]) template.layers[index[name]]={source:{}};
            template.layers[index[name]].source=this.parseSource(v[name]);
          } else {
            template[index[name]]=v[name];
          }
        }
        a[template.template]=template;
      }
      return a;
    },{});
  }


  parseSequence(sheet,layerIndex) {
    if (!sheet) {
      return null;
    }
    let index = sheet[0];
    let sequence = sheet.reduce((a,v,i)=>{
      if ((v)&&(i>0)) {
        let slide={ layers:{} };
        for (let name in index) {
          if (index[name] in layerIndex) {
            if (!slide.layers[index[name]]) slide.layers[index[name]]={source:{}};
            slide.layers[index[name]].source=this.parseSource(v[name]);
          } else {
            slide[index[name]]=v[name];
          }
        }

        if (slide.params) {
          let params;
          try {
            params = dirtyJson.parse(slide.params);
            if (!params) {
              console.log("Unableto parse slide params:",slide);
            }
          } catch (error) {
            console.log("Slide params parsing error:",slide,error);
            params = null;
          }
          if (params) {
            slide.params=params;
          }
        }
        if (slide.data) {
          slide.data=slide.data.split(",");
        }

        a.push(slide);
      }
      return a;
    },[]);

    return sequence;
  }

  parseMenus(sheet) {
    if (!sheet) {
      return null;
    }
    let index = sheet[0];
    let menus = sheet.reduce((a,v,i)=>{
      if ((v)&&(i>0)) {
        let menu={};
        for (let name in index) {
          menu[index[name]]=v[name];
        }
        if (!a[menu.id]) a[menu.id]=[];
        if (!menu.index) menu.index=0;
        a[menu.id].push(menu);
      }
      return a;
    },{});

    for (let name in menus) {
      menus[name].sort((a,b)=>{
        if (a.index>b.index) return 1;
        if (a.index<b.index) return -1;
        return 0;
      })
    }

    return menus;
  }

  parseExtraData(sheet) {
    if (!sheet) {
      return null;
    }
    let index = sheet[0];
    let extraData = sheet.reduce((a,v,i)=>{
      if ((v)&&(i>0)) {
        let data={};
        for (let name in index) {
          data[index[name]]=v[name];
        }
        if (!a[data.id]) a[data.id]={};
        a[data.id][data.property]=data;
      }
      return a;
    },{});
    return extraData;
  }

  concatLayers(origin,addition) {
    let result={};
    for (let layerName in origin) {
      let oLayer=origin[layerName];
      if (!addition[layerName]) {
        result[layerName]={
          ...oLayer,
        };
      } else {
        let aLayer=addition[layerName];
        let nLayer=concatObjects(aLayer,oLayer);

        if (!oLayer.source) oLayer.source={};
        if (!aLayer.source) aLayer.source={};

        let source={};
        //Если путь не указан никак, то берем новый путь. Иначе - оставляем старый
        if ((aLayer.source.path!==null)&&(aLayer.source.path!=="")) {
          source.path=aLayer.source.path;
        } else {
          source.path=oLayer.source.path;
        }

        //Если клип не указан, то берем новый клип, или заменяем пустой строкой (удаляется старый). Иначе - оставляем старый
        if (aLayer.source.clip!==null) {
          source.clip=aLayer.source.clip;
        } else {
          source.clip=oLayer.source.clip;
        }

        //Если фрейм не указан, то берем новый фрейм, или заменяем пустой строкой (удаляется старый). Иначе - оставляем старый
        if (aLayer.source.frame!==null) {
          source.frame=aLayer.source.frame;
        } else {
          source.frame=oLayer.source.frame;
        }

        nLayer.source=source;

        result[layerName]=nLayer;
      }
    }
    return result;
  }

  setupLayers(layers,settings) {
    for (let layerName in layers) {
      layers[layerName].source.path = applyMacrosObject(settings,layers[layerName].source.path);
    }
    return layers;
  }


  collectSequence(slides,settings) {
    let result=[];

    for (let i = 0; i < slides.sequence.length; i++) {
      let slide=slides.sequence[i];

      let layers={};
      //Составили набор слоев слайда из списка слоев
      for (let j = 0; j < slides.layers.length; j++) {
        let layer=slides.layers[j];
        layers[layer.name]=layer;
      }

      //Внесли в слайд коррекции из шаблона слайда, скорректировали слои из шаблона
      let template=slides.templates[slide.template];
      if (template) {
        slide=concatObjects(template,slide);
        layers=this.concatLayers(layers,template.layers);
      }

      //Скорректи ровали слои слайда из слоев текущего слайда
      layers=this.concatLayers(layers,slides.sequence[i].layers);
      layers=this.setupLayers(layers,settings);
      // console.log(layers);

      let slidelayers=[];
      //Преобразуем объект со слоями опять в список
      for (let j = 0; j < slides.layers.length; j++) {
        slidelayers.push(layers[slides.layers[j].name]);
      }

      slide.layers=slidelayers;
      result.push(slide);
    }

    return result;
  }


  parse(data) {

    let slides=this.parseLayers(data.layers);
    slides.templates=this.parseTemplates(data.templates,slides.layerIndex);
    slides.sequence=this.parseSequence(data.sequence,slides.layerIndex);

    let settings=this.parseSettings(data.settings);
    let menus=this.parseMenus(data.menus);

    let sequence=this.collectSequence(slides,settings);

    let result={
      sequence,
      settings,
      menus,
    };

    let extraData={};
    for (let name in data) {
      if (!(name in result)&&!(name in slides)&&(name.indexOf("<")<0)) {
        extraData[name]=this.parseExtraData(data[name]);
      }
    }
    result.extraData=extraData;

    return result;
  }

}

export default DataParser;
