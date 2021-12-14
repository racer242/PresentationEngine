import settings from '../configuration/settings.js'

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
            template.layers[index[name]]=this.parseSource(v[name]);
          } else {
            template[index[name]]=v[name];
          }
        }
        a[template.name]=template;
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
            slide.layers[index[name]]=this.parseSource(v[name]);
          } else {
            slide[index[name]]=v[name];
          }
        }
        a.push(slide);
      }
      return a;
    },[]);

    return sequence;
  }



  parse(data) {
    console.log(data);

    let result={
      settings:this.parseSettings(data.settings),
      ...this.parseLayers(data.layers),
    };

    result.templates=this.parseTemplates(data.templates,result.layerIndex);
    result.sequence=this.parseSequence(data.sequence,result.layerIndex);

    return result;

  }

}

export default DataParser;
