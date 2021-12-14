export const getMatches = (regexp,data,matchCount) =>
{
  let matchArray;
  let result = [];
  while ((matchArray = regexp.exec(data)) !== null) {
    if (!matchCount) {
      result.push(matchArray[1]);
    } else {
      let matches=[];
      for (let i = 1; i <= matchCount; i++) {
        matches.push(matchArray[i]);
      }
      result.push(matches);
    }
  }
  return result;
}

export const split = (source) =>
{
  let result=[];
  if (source) {
    result=source.split(/\s*,\s*/);
  }
  return result;
}

export const replaceObject = (object,data) => {
  if (data) {
    for (let name in object) {
      let regExp = new RegExp(name,"g");
      data=data.replace(regExp,object[name]);
    }
  } else {
    data="";
  }
  return data;
}
