export const applyMacrosObject = (object,data) => {
  if (data) {
    for (let name in object) {
      let regExp = new RegExp("\\{"+name+"\\}","g");
      data=data.replace(regExp,object[name]);
    }
  } else {
    data=null;
  }
  return data;
}
