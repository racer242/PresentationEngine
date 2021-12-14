import MobileDetect from 'mobile-detect'
import settings from '../configuration/settings.js';

export const callLater = (callback,delay = 100) => {
  return setTimeout(callback,delay);
}

export const isMobile = () => {
  var mobileDetect = new MobileDetect(window.navigator.userAgent);
  return mobileDetect.mobile();
}

export const isLocal = () => {
  return !(/^h/.test(document.location.toString()));
}

export const objectIsEmpty = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
}

export const addUniqueToUrl = (url) => {
  if (url) {
    let uStr=new Date().getTime();
    if (url.indexOf("?")<0) {
      url = url+"?u="+uStr;
    } else {
      url = url+"&u="+uStr;
    }
  }
  return url;
}


export const openLink = (link) => {
  window.open(link,"_blank")
}

export const downloadLink = (link) => {

  link=addUniqueToUrl(link);

  let a = document.createElement('a');
  a.href = link;

  link = link.substr(link.lastIndexOf('/') + 1);
  if (link.indexOf('?')>=0) {
    link = link.substr(0,link.indexOf('?'));
  }

  if ((settings.isLocal)&&(link.match(settings.anyImage))) {
    a.target="_blank";
  } else {
    a.download = link;
  }
  a.click();

}


export const makeRequestUrl = (requestId,campName) => {

  campName=campName.replace(/~/g,"[~]");
  campName=campName.replace(/ /g,"~");
  return "/"+requestId+"/"+campName+"/";
}
