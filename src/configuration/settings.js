import { isMobile,isLocal } from '../core/helpers';

let assetsUrl = "."

const settings = {
  ...window.settings,
  content:window.content,

  store:{ },
  developerTitle:"mediasmit.ru",
  developerUrl:"http://www.mediasmit.ru/",
  developerHead:null,
  developerTexts:[
    "Мы создаем digital-продукты, направленные на решение бизнес-задач клиентов",
    "mediasmit.ru",
  ],

  startAppText:"Presentation Engine started",

  assetsUrl: assetsUrl,

  defaultState:{
    isWorking:false,
    lastPosition:0,
    position:0,
    viewPosition:0,
    cacheStack:[],
    readyToInit:false,
    blockRender:false,
    blockInteraction:false,
    readyToPlay:false,
  },

  isMobile:isMobile(),
  isLocal:isLocal(),
  isDev:(document.location.toString().indexOf("localhost")>0),

  anyImage:/\.(gif|jpg|jpeg|png|svg)$/gi,

  indexHtmlFile:"index.html",

  parentWindowId:"PARENT",
}

settings.useEmbeddedContent=settings.useEmbeddedContent||isLocal();

export default settings;
