(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{18:function(e,t){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t){},40:function(e,t){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(9),o=n.n(s),r=(n(28),n(0)),c=n(3),u=n(4),l=n(7),d=n(6),h=n(5),p=n(19),f=n.n(p),v=function(){return!/^h/.test(document.location.toString())},b=Object(r.a)(Object(r.a)({},window.settings),{},{content:window.content,store:{},developerTitle:"mediasmit.ru",developerUrl:"http://www.mediasmit.ru/",developerHead:null,developerTexts:["\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c digital-\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0431\u0438\u0437\u043d\u0435\u0441-\u0437\u0430\u0434\u0430\u0447 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432","mediasmit.ru"],startAppText:"Presentation Engine started",assetsUrl:".",defaultState:{isWorking:!1,lastPosition:0,position:0,viewPosition:0,cacheStack:[],readyToInit:!1,blockRender:!1,blockInteraction:!1,readyToPlay:!1},isMobile:new f.a(window.navigator.userAgent).mobile(),isLocal:v(),isDev:document.location.toString().indexOf("localhost")>0,anyImage:/\.(gif|jpg|jpeg|png|svg)$/gi,indexHtmlFile:"index.html",parentWindowId:"PARENT"});b.useEmbeddedContent=b.useEmbeddedContent||v();var m=b,g=function(e){var t=!0;for(var n in e){var i=e[n];if(!i.loaded&&!i.ignore){t=!1;break}}return t},y=function(e,t){var n=t.cacheStack,i=n.indexOf(e);(i>=0&&n.splice(i,1),n.push(e),n.length>t.settings.cacheSize)&&n.splice(0,n.length-t.settings.cacheSize).map((function(e){var n=t.sequence[e];return Object.values(n.layers).map((function(e){return e.loaded=!1,e.included=!1,e.visible=!1,null})),null}))},O=function(e,t){var n=e.sequence[t];if(n)for(var i in n.layers){var a=n.layers[i];a.included=!0,a.hiddenNow=a.hidden,a.ignore&&(a.loaded=!0)}return e.blockInteraction=!0,g(n.layers)&&(y(t,e),e.readyToInit=!0),e},j=function(e,t,n){var i=e.sequence[t].layers;i[n].loaded=!0;var a=g(i);return a&&y(t,e),Object(r.a)(Object(r.a)({},e),{},{blockRender:!0,readyToInit:a})},x=function(e){return e.sequence.map((function(t,n){return Object.values(t.layers).map((function(t){return t.loaded&&(t.visible=!0,t.static&&(t.visible=n===e.position)),null})),null})),e.position===e.lastPosition&&(e.blockInteraction=!1,e.readyToPlay=!0),Object(r.a)(Object(r.a)({},e),{},{viewPosition:e.position,readyToInit:!1,blockRender:!1})},w=function(e){var t=e.position,n=e.sequence[t];return(null===n||void 0===n?void 0:n.next)?E(e,n.next):t<e.sequence.length-1?S(e,t+1):e},k=function(e){var t=e.position,n=e.sequence[t];return(null===n||void 0===n?void 0:n.prev)?E(e,n.prev):t>0?S(e,t-1):e},S=function(e,t,n){return e.position!==t||n?(e=O(e,t),Object(r.a)(Object(r.a)({},e),{},{lastPosition:e.position,position:t})):e},E=function(e,t){var n=e.sequence.find((function(e){return e.id===t})),i=e.position;if(n){if(i=n.index,e.position===i)return e;e=O(e,n.index)}return Object(r.a)(Object(r.a)({},e),{},{lastPosition:e.position,position:i})},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_PLAYBACK":e=Object(r.a)(Object(r.a)({},S(e,e.position,!0)),{},{isWorking:!0});break;case"NEXT_SLIDE":e=w(e);break;case"PREV_SLIDE":e=k(e);break;case"GOTO_SLIDE_INDEX":e=S(e,t.index);break;case"GOTO_SLIDE":e=E(e,t.id);break;case"APPLY_VIEW_POSITION":e=Object(r.a)(Object(r.a)({},e),{},{viewPosition:e.position});break;case"BLOCK_INTERACTION":e=Object(r.a)(Object(r.a)({},e),{},{blockInteraction:!0});break;case"UNBLOCK_INTERACTION":e=Object(r.a)(Object(r.a)({},e),{},{blockInteraction:!1});break;case"TRANSITION_FINISHED":e=Object(r.a)(Object(r.a)({},e),{},{blockInteraction:!1,readyToPlay:!0});break;case"PLAYBACK_IS_DONE":e=Object(r.a)(Object(r.a)({},e),{},{readyToPlay:!1});break;case"HIDE_LAYER":var n=e.sequence[t.index];if(n){var i=n.layers[t.name];i&&(i.hiddenNow=!0,e=Object(r.a)({},e))}break;case"SHOW_LAYER":var a=e.sequence[t.index];if(a){var s=a.layers[t.name];s&&(s.hiddenNow=!1,e=Object(r.a)({},e))}break;case"SWITCH_LAYER":var o=e.sequence[t.index];if(o){var c=o.layers[t.name];c&&(c.hiddenNow?c.hiddenNow=!1:c.hiddenNow=!0,e=Object(r.a)({},e))}}return e},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIEW_LOADED":e=j(e,t.slideIndex,t.layerName);break;case"INIT_IS_DONE":e=x(e)}return e},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log("Reduce action:",t),t.type){case"APP_INIT":e=Object(r.a)(Object(r.a)({},e),m.defaultState);break;case"SET_STORE_DATA":case"LOAD_STORE_DATA_ERROR":e=Object(r.a)(Object(r.a)({},e),t.data)}return e},L=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.extraAction&&(t=e(t,n.extraAction)),t=_(t,n),t=T(t,n),t=I(t,n)},H=n(13),D=n.n(H),P=(n(30),n(2)),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).image_loadHandler=i.image_loadHandler.bind(Object(l.a)(i)),i.image_touchStartHandler=i.image_touchStartHandler.bind(Object(l.a)(i)),i.image_touchEndHandler=i.image_touchEndHandler.bind(Object(l.a)(i)),i.image_touchMoveHandler=i.image_touchMoveHandler.bind(Object(l.a)(i)),i.imageXDownPosition=null,i.imageXMovePosition=null,i}return Object(u.a)(n,[{key:"sendMessage",value:function(e){console.log("SEND MESSAGE:",this.props.name,e),e.source=this.props.name,window.postMessage(e,"*")}},{key:"image_loadHandler",value:function(e){this.sendMessage({event:"complete"})}},{key:"image_touchStartHandler",value:function(e){this.imageXDownPosition=e.touches[0].clientX}},{key:"image_touchMoveHandler",value:function(e){this.imageXMovePosition=e.touches[0].clientX}},{key:"image_touchEndHandler",value:function(e){this.imageXDownPosition&&(this.imageXDownPosition-this.imageXMovePosition>0?this.sendMessage({event:"next"}):this.sendMessage({event:"prev"}),this.imageXDownPosition=null)}},{key:"render",value:function(){var e,t,n,i,a=this.props.layer;if(!a.source.path)return null;var s,o,c,u,l="./"+D.a.join(a.source.path,m.indexHtmlFile),d=-(this.props.bounds.native.maxWidth-this.props.bounds.size.width)/2,h=-(this.props.bounds.native.maxHeight-this.props.bounds.size.height)/2;(null===(e=a.align)||void 0===e?void 0:e.indexOf("top"))>=0?(Math.round(this.props.bounds.native.maxHeight*this.props.bounds.scale)>this.props.bounds.size.height&&(h=(this.props.bounds.native.maxHeight*this.props.bounds.scale-this.props.bounds.native.maxHeight)/2),o=0):(null===(t=a.align)||void 0===t?void 0:t.indexOf("bottom"))>=0&&(Math.round(this.props.bounds.native.maxHeight*this.props.bounds.scale)>this.props.bounds.size.height&&(h=(this.props.bounds.native.maxHeight*this.props.bounds.scale-this.props.bounds.native.maxHeight)/2-(this.props.bounds.native.maxHeight*this.props.bounds.scale-this.props.bounds.size.height)),u=0),h=Math.round(h),(null===(n=a.align)||void 0===n?void 0:n.indexOf("left"))>=0?(Math.round(this.props.bounds.native.maxWidth*this.props.bounds.scale)>this.props.bounds.size.width&&(d=(this.props.bounds.native.maxWidth*this.props.bounds.scale-this.props.bounds.native.maxWidth)/2),s=0):(null===(i=a.align)||void 0===i?void 0:i.indexOf("right"))>=0&&(Math.round(this.props.bounds.native.maxWidth*this.props.bounds.scale)>this.props.bounds.size.width&&(d=(this.props.bounds.native.maxWidth*this.props.bounds.scale-this.props.bounds.native.maxWidth)/2-(this.props.bounds.native.maxWidth*this.props.bounds.scale-this.props.bounds.size.width)),c=0),d=Math.round(d);var p=this.props.bounds.native.maxWidth,f=this.props.bounds.native.maxHeight;return a.width&&(null==s&&null==c&&(s=(p-a.width)/2),p=a.width),a.height&&(null==o&&null==u&&(o=(f-a.height)/2),f=a.height),a.margin&&(a.margin.l?s?s+=a.margin.l:s=a.margin.l:a.margin.r&&(c?c+=a.margin.r:c=a.margin.r),a.margin.t?o?o+=a.margin.t:o=a.margin.t:a.margin.b&&(u?u+=a.margin.b:u=a.margin.b)),Object(P.jsx)("div",{className:"view",style:Object(r.a)(Object(r.a)(Object(r.a)({},this.props.bounds.style),this.props.style),{},{visibility:this.props.hidden||this.props.invisible?"hidden":"visible"}),children:Object(P.jsxs)("div",{className:"viewScaler",style:{width:this.props.bounds.native.maxWidth,height:this.props.bounds.native.maxHeight,left:d,top:h,transform:"scale(".concat(this.props.bounds.scale,")")},children:[!a.image&&Object(P.jsx)("iframe",{title:this.props.name,name:this.props.name,src:l,className:"iframeContainer",style:{width:p,height:f,left:s,top:o,right:c,bottom:u}}),a.image&&Object(P.jsx)("img",{src:"./"+D.a.join(a.source.path,a.source.clip),className:"imageContainer",onLoad:this.image_loadHandler,onError:this.image_loadHandler,onTouchStart:this.image_touchStartHandler,onTouchMove:this.image_touchMoveHandler,onTouchEnd:this.image_touchEndHandler,draggable:!1,alt:"",style:{width:p,height:f,left:s,top:o,right:c,bottom:u}})]})})}}]),n}(i.Component),N=(n(32),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={from:e.position,to:e.position,fromOffset:e.position,toOffset:e.position,scrollOffset:e.position},i.scrollOffset=e.position,i.transition=!1,i}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){if(e.position!==this.props.position){var i=e.position,a=this.props.position,s=0,o=0;i>a?(s=this.scrollOffset,o=this.scrollOffset-1,this.scrollOffset--):i<a&&(s=this.scrollOffset,o=this.scrollOffset+1,this.scrollOffset++),this.transition=!0,this.setState(Object(r.a)(Object(r.a)({},this.state),{},{from:i,to:a,fromOffset:s,toOffset:o,scrollOffset:this.scrollOffset}))}}},{key:"transitionReady",value:function(){this.transition&&(this.transition=!1,this.props.layer.master&&this.props.onTransitionReady())}},{key:"render",value:function(){var e=this,t=this.props.sequence,n=!this.props.layer.static,i=0,a=0,s=0;return n&&(a=this.state.fromOffset*this.props.bounds.size.width,s=this.state.toOffset*this.props.bounds.size.width,i=-this.state.scrollOffset*this.props.bounds.size.width),Object(P.jsx)("div",{className:"layer",style:Object(r.a)(Object(r.a)(Object(r.a)({},this.props.bounds.style),this.props.style),{},{left:i,transition:n&&this.transition?"left ".concat(this.props.transitionDuration,"s ").concat(this.props.transitionEasing," ").concat(this.props.transitionDelay,"s"):null}),onTransitionEnd:function(){e.transitionReady()},children:t.map((function(t,i){var o=t.layers[e.props.layer.name];if(o.included&&!o.ignore){var r=0,c=!1;return n&&(i===e.state.from?r=a:i===e.state.to?r=s:-1===e.state.from?r=0:c=!0),Object(P.jsx)(C,{name:t.id+"|"+o.name+"|"+i,layer:o,bounds:e.props.bounds,hidden:o.hiddenNow,invisible:!o.visible||c,style:{left:r}},"Slide"+i)}return null}))})}}]),n}(i.Component)),A=(n(33),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.state,n=t.sequence[t.position];return Object(P.jsx)("div",{id:"Projector",className:"projector",style:this.props.bounds.style,children:t.layers.map((function(i,a){var s=n.layers[i.name];return Object(P.jsx)(N,{layer:s,slide:n,sequence:t.sequence,bounds:e.props.bounds,position:t.viewPosition,transition:t.settings.transition,transitionDelay:t.settings.transitionDelay,transitionDuration:t.settings.transitionDuration,transitionEasing:t.settings.transitionEasing,onTransitionReady:e.props.onTransitionReady},i.name)}))})}}]),n}(i.Component)),R=A,M=(n(34),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).store=i.props.store,i.state={},i.transitionReadyHandler=i.transitionReadyHandler.bind(Object(l.a)(i)),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=this.store.subscribe((function(){e.onStoreChange()})),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(e,t,n){}},{key:"onStoreChange",value:function(){if(this.mounted){var e=this.store.getState();if(e.blockRender)return;this.setState(e)}}},{key:"transitionReadyHandler",value:function(){this.store.dispatch({type:"TRANSITION_FINISHED"})}},{key:"getViewPort",value:function(e,t,n){var i=Math.min(e/n.minWidth,t/n.minHeight),a=n.minWidth*i,s=n.minHeight*i,o=n.maxWidth*i,r=n.maxHeight*i;s=t<r?t:r;var c=.5*(e-(a=e<o?e:o))+n.offsetX,u=.5*(t-s)+n.offsetY,l=i*n.nominalFontSize;return{boxWidth:a=Math.round(a),boxHeight:s=Math.round(s),boxLeft:c=Math.round(c),boxTop:u=Math.round(u),boxScale:i,boxFontSize:l=Math.round(l)}}},{key:"updateGlobalFontSize",value:function(e){document.getElementsByTagName("html")[0].style["font-size"]=e+"px"}},{key:"render",value:function(){var e=[];if(e.push(this.props.children),this.state.isWorking){var t=this.getViewPort(this.props.windowWidth,this.props.windowHeight,this.state.settings),n=t.boxWidth,i=t.boxHeight,a=t.boxLeft,s=t.boxTop,o=t.boxScale,c=t.boxFontSize;if(o){var u={size:{width:n,height:i,top:s,left:a},style:{width:n+"px",height:i+"px"},native:{minWidth:this.state.settings.minWidth,minHeight:this.state.settings.minHeight,maxWidth:this.state.settings.maxWidth,maxHeight:this.state.settings.maxHeight},scale:o};this.updateGlobalFontSize(c),e.push(Object(P.jsx)("div",{id:"Container",className:"globalContainer",style:{background:this.state.settings.globalBg},children:Object(P.jsx)("div",{className:"contentContainer",style:Object(r.a)(Object(r.a)({},u.style),{},{left:a+"px",top:s+"px",background:this.state.settings.containerBg}),children:Object(P.jsx)(R,{state:this.state,bounds:u,onTransitionReady:this.transitionReadyHandler})})},"Container"))}}return e}}]),n}(i.Component)),W=n(14),q=n.n(W),X=n(8),z=function(e,t){for(var n={},i=[].concat(Object(X.a)(Object.keys(e)),Object(X.a)(Object.keys(t))),a=0;a<i.length;a++)void 0!==e[i[a]]&&null!==e[i[a]]&&""!==e[i[a]]?n[i[a]]=e[i[a]]:void 0!==t[i[a]]&&null!==t[i[a]]&&""!==t[i[a]]&&(n[i[a]]=t[i[a]]);return n},U=function(e,t){if(t)for(var n in e){var i=new RegExp("\\{"+n+"\\}","g");t=t.replace(i,e[n])}else t=null;return t},B=function(e){var t=/\.([^.]*?)(?=\?|#|$)/gim.exec(e);return t?t[1]:null},F=n(20),Y=n.n(F),V=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"parseSettings",value:function(e){if(!e)return null;var t=e.reduce((function(e,t,n){return t&&n>0&&(e[t.A]=t.B),e}),{});return m.defaultSettings&&(t=Object(r.a)(Object(r.a)({},t),m.defaultSettings)),t}},{key:"parseSource",value:function(e){var t={};if(e){var n=e.split("#");n.length>1?t.frame=n[1]:t.frame=null,(n=n[0].split(">")).length>1?(t.path=n[0],t.clip=n[1]):(t.path=n[0],t.clip=null)}return t}},{key:"parseLayers",value:function(e){var t=this;if(!e)return null;var n=e[0],i=e.reduce((function(e,i,a){if(i&&a>0){var s={};for(var o in n)s[n[o]]=i[o];if(s.source=t.parseSource(s.source),s.level||(s.level=0),s.disable)return e;if(s.margin){var r=function(e,t,n){for(var i,a=[];null!==(i=e.exec(t));)if(n){for(var s=[],o=1;o<=n;o++)s.push(i[o]);a.push(s)}else a.push(i[1]);return a}(/(\D)(\d+)/gi,s.margin,2);s.margin=r.reduce((function(e,t,n){return e[t[0]]=Number(t[1]),e}),{})}e.push(s)}return e}),[]);i.sort((function(e,t){return e.level>t.level?1:e.level<t.level?-1:0}));var a=i.reduce((function(e,t,n){return e[t.name]=n,e}),{}),s=i.find((function(e){return e.master}));return s||((s=i.find((function(e){return!e.static}))).master=1),{layers:i,layerIndex:a}}},{key:"parseTemplates",value:function(e,t){var n=this;if(!e)return null;var i=e[0];return e.reduce((function(e,a,s){if(a&&s>0){var o={layers:{}};for(var r in i)i[r]in t?(o.layers[i[r]]||(o.layers[i[r]]={source:{}}),o.layers[i[r]].source=n.parseSource(a[r])):o[i[r]]=a[r];if(o.disable)return e;e[o.template]=o}return e}),{})}},{key:"parseSequence",value:function(e,t){var n=this;if(!e)return null;var i=e[0];return e.reduce((function(e,a,s){if(a&&s>0){var o={layers:{}};for(var r in i)i[r]in t?(o.layers[i[r]]||(o.layers[i[r]]={source:{}}),o.layers[i[r]].source=n.parseSource(a[r])):o[i[r]]=a[r];if(o.params){var c;try{(c=Y.a.parse(o.params))||console.log("Unableto parse slide params:",o)}catch(u){console.log("Slide params parsing error:",o,u),c=null}c&&(o.params=c)}if(o.data&&(o.data=o.data.split(",")),o.index=e.length,o.disable)return e;e.push(o)}return e}),[])}},{key:"parseMenus",value:function(e){if(!e)return null;var t=e[0],n=e.reduce((function(e,n,i){if(n&&i>0){var a={};for(var s in t)a[t[s]]=n[s];e[a.id]||(e[a.id]=[]),a.index||(a.index=0),e[a.id].push(a)}return e}),{});for(var i in n)n[i].sort((function(e,t){return e.index>t.index?1:e.index<t.index?-1:0}));return n}},{key:"parseExtraData",value:function(e){if(!e)return null;var t=e[0];return e.reduce((function(e,n,i){if(n&&i>0){var a={};for(var s in t)a[t[s]]=n[s];e[a.id]||(e[a.id]={}),e[a.id][a.property]=a}return e}),{})}},{key:"concatLayers",value:function(e,t){var n={};for(var i in e){var a=e[i];if(t[i]){var s=t[i],o=z(s,a);a.source||(a.source={}),s.source||(s.source={});var c={};null!=s.source.path&&""!==s.source.path?c.path=s.source.path:c.path=a.source.path,null!=s.source.clip?c.clip=s.source.clip:c.clip=a.source.clip,""===s.source.frame?(c.path=null,c.clip=null,c.frame=null):null!=s.source.frame?c.frame=s.source.frame:c.frame=a.source.frame,o.source=c,n[i]=o}else n[i]=Object(r.a)({},a)}return n}},{key:"setupLayers",value:function(e,t){for(var n in e){var i,a=e[n];a.source.path?a.source.path=U(t,a.source.path):a.ignore=!0,(null===(i=a.source.clip)||void 0===i?void 0:i.indexOf("."))>=0&&(a.type=B(a.source.clip),a.image=Boolean(a.source.clip.match(m.anyImage))),a.hiddenNow=a.hidden}return e}},{key:"collectSequence",value:function(e,t){for(var n=[],i=0;i<e.sequence.length;i++){for(var a=e.sequence[i],s={},o=0;o<e.layers.length;o++){var r=e.layers[o];s[r.name]=r}var c=e.templates[a.template];c&&(a=z(c,a),s=this.concatLayers(s,c.layers)),s=this.concatLayers(s,e.sequence[i].layers),s=this.setupLayers(s,t),a.layers=s,n.push(a)}return n}},{key:"parse",value:function(e){var t=this.parseLayers(e.layers);if(!t)return null;t.templates=this.parseTemplates(e.templates,t.layerIndex),t.sequence=this.parseSequence(e.sequence,t.layerIndex);var n=this.parseSettings(e.settings),i=this.parseMenus(e.menus),a={sequence:this.collectSequence(t,n),settings:n,menus:i,layers:t.layers,lastPosition:n.startPosition,position:n.startPosition,viewPosition:n.startPosition},s={};for(var o in e)!(o in a)&&!(o in t)&&o.indexOf("<")<0&&(s[o]=this.parseExtraData(e[o]));return a.extraData=s,a}}]),e}(),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).store=i.props.store,i.state={isLoading:!1,isLoaded:!1},i.loader=null,i.result=null,i.dataParser=new V,i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=this.store.subscribe((function(){e.onStoreChange()})),this.load(),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"componentDidUpdate",value:function(e,t){}},{key:"onStoreChange",value:function(){}},{key:"load",value:function(){var e=this;this.state.isLoading||(this.setState(Object(r.a)(Object(r.a)({},this.state),{},{isLoading:!0,isLoaded:!1})),m.useEmbeddedContent&&m.content?(console.log("Extracting embedded content"),function(e){setTimeout(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100)}((function(){var t;try{t=q.a.read(m.content,{type:"base64"})}catch(i){return void e.onContentLoadError({lastError:{source:m.contentUrl,location:window.location.href,error:i.message}})}var n=e.convertSheetsToTables(t.Sheets);n?(n=e.dataParser.parse(n))?e.onContentLoad(n):e.onContentLoadError({lastError:{source:m.contentUrl,location:window.location.href,error:"Parse XLSX error"}}):e.onContentLoadError({lastError:{source:m.contentUrl,location:window.location.href,error:"Convert XLSX error"}})}),1e3)):this.loadXlsx(m.contentUrl,(function(t){t?(t=e.dataParser.parse(t),e.onContentLoad(t)):e.onContentLoadError({lastError:{source:m.contentUrl,location:window.location.href}})})))}},{key:"onContentLoad",value:function(e){this.setState(Object(r.a)(Object(r.a)({},this.state),{},{isLoading:!1,isLoaded:!0})),this.store.dispatch(function(e){return{type:"SET_STORE_DATA",data:Object(r.a)(Object(r.a)({},e),{},{dataLoaded:!0,loadDataError:!1})}}(e))}},{key:"onContentLoadError",value:function(e){this.setState(Object(r.a)(Object(r.a)({},this.state),{},{isLoading:!1,isLoaded:!1})),this.store.dispatch(function(e){return{type:"LOAD_STORE_DATA_ERROR",data:Object(r.a)(Object(r.a)({},e),{},{dataLoaded:!1,loadDataError:!0})}}(e))}},{key:"loadXlsx",value:function(e,t){var n=this,i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=function(e){var a,s=i.response,o=n.fixXlsx(s),r=btoa(o);m.outContentToConsole&&(console.log("CONTENT XLSX COPY:"),console.log("-----------------------------------------------------------"),console.log('window.content="'+r+'"'),console.log("-----------------------------------------------------------"));try{a=q.a.read(r,{type:"base64"})}catch(e){return void t(null)}t(n.convertSheetsToTables(a.Sheets))},i.send()}},{key:"fixXlsx",value:function(e){for(var t="",n=0,i=10240;n<e.byteLength/i;++n)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*i,n*i+i)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*i)))}},{key:"convertSheetsToTables",value:function(e){var t={};for(var n in e){var i=[];t[n]=i;var a=e[n];for(var s in a){var o=s.substr(1)-1,r=s.substr(0,1);null==i[o]&&(i[o]=[]),i[o][r]=a[s].v}}return t}},{key:"render",value:function(){return null}}]),n}(i.Component),K=G,J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={},i.store=i.props.store,i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=this.store.subscribe((function(){e.onStoreChange()})),this.mounted=!0,this.initInteractions()}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe(),this.mounted=!1}},{key:"onStoreChange",value:function(){var e=this;if(this.mounted){var t=this.store.getState();this.setState(t),t.dataLoaded&&!t.isWorking?this.store.dispatch({type:"START_PLAYBACK"}):t.loadDataError?console.log("Presentation data load error...",t.lastError):t.readyToInit?(this.sendInit(),setTimeout((function(){e.store.dispatch({type:"INIT_IS_DONE"})}),200)):t.readyToPlay&&(this.sendPlay(),setTimeout((function(){e.store.dispatch({type:"PLAYBACK_IS_DONE"})}),200))}}},{key:"sendInit",value:function(){var e=this,t=this.state.sequence[this.state.position];Object.values(t.layers).map((function(n){return n.loaded&&e.sendMessage("init",{source:n.source,params:t.params,menus:e.state.menus,data:e.state.extraData},t,n),null}))}},{key:"sendPlay",value:function(){var e=this,t=this.state.sequence[this.state.position];Object.values(t.layers).map((function(n){return n.hiddenNow||e.sendMessage("play",{},t,n),null}))}},{key:"initInteractions",value:function(){var e=this;window.addEventListener("message",(function(t){var n=t.data.event,i=t.data.source;if(i&&i!==m.parentWindowId){var a=i.split("|"),s=a[1],o=a[2];if(e.state&&e.state.sequence){var r=e.state.sequence[o];if(r){var c=r.layers[s];c&&e.processInteraction(n,t.data,r,c)}}}}))}},{key:"sendMessage",value:function(e,t,n,i){var a,s;"broadcast"===n?(s=n,a=window):(s=n.id+"|"+i.name+"|"+n.index,a=window.frames[s]),a&&a.postMessage({event:e,source:m.parentWindowId,target:s,data:t},"*")}},{key:"processInteraction",value:function(e,t,n,i){switch(e){case"complete":this.store.dispatch(function(e,t){return{type:"VIEW_LOADED",slideIndex:e,layerName:t}}(n.index,i.name));break;case"next":if(this.state.blockInteraction)return;this.store.dispatch({type:"NEXT_SLIDE"});break;case"prev":if(this.state.blockInteraction)return;this.store.dispatch({type:"PREV_SLIDE"});break;case"goto":if(this.state.blockInteraction)return;var a;t.params?a=t.params[0]:t&&(a=t.id),this.store.dispatch({type:"GOTO_SLIDE",id:a});break;case"hide":var s;t.params?s=t.params[0]:t&&(s=t.name),this.store.dispatch({type:"HIDE_LAYER",index:n.index,name:s}),this.sendMessage("reset",{},n,n.layers[s]);break;case"show":var o;t.params?o=t.params[0]:t&&(o=t.name),this.store.dispatch(function(e,t){return{type:"SHOW_LAYER",index:e,name:t}}(n.index,o)),this.sendMessage("play",{},n,n.layers[o]);break;case"switch":var r;t.params?r=t.params[0]:t&&(r=t.name),this.store.dispatch(function(e,t){return{type:"SWITCH_LAYER",index:e,name:t}}(n.index,r));var c=n.layers[r];c&&c.hiddenNow&&this.sendMessage("play",{},n,n.layers[r]);break;case"stop":this.sendMessage("stop",{},n,i)}}},{key:"render",value:function(){return null}}]),n}(i.Component),$=n(22),Q=n(23),Z=(n(53),Object(Q.a)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),i=t.call(this,e),console.log(m.startAppText),i.state={},i.initHandler=i.initHandler.bind(Object(l.a)(i)),i.resizeHandler=i.resizeHandler.bind(Object(l.a)(i)),i}return Object(u.a)(n,[{key:"updateLayout",value:function(){var e=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth,t=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;this.setState(Object(r.a)(Object(r.a)({},this.state),{},{windowWidth:e,windowHeight:t}))}},{key:"initHandler",value:function(e){this.updateLayout()}},{key:"resizeHandler",value:function(e){this.updateLayout()}},{key:"componentDidMount",value:function(){Z.dispatch({type:"APP_INIT"}),window.addEventListener("load",this.initHandler),window.addEventListener("resize",this.resizeHandler)}},{key:"render",value:function(){return Object(P.jsx)($.a,{store:Z,children:Object(P.jsxs)(M,{id:"Container",windowWidth:this.state.windowWidth,windowHeight:this.state.windowHeight,store:Z,children:[Object(P.jsx)(K,{store:Z}),Object(P.jsx)(J,{store:Z})]})})}}]),n}(i.Component),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))};o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(ee,{})}),document.getElementById("root")),te()}},[[54,1,2]]]);
//# sourceMappingURL=main.f09ae6d3.chunk.js.map