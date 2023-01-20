window.settings={

  // Расположение файла конфигурации
  contentUrl:"./presentation/content.xlsx",

  // Настройки для получения и использования контента в формате Base64
  useEmbeddedContent:false,
  outContentToConsole:false,

  playScript: function(slide) {
    try {
      if( typeof omobus == 'undefined' ) {
        console.log("Omobus object is undefined. Play: ",slide.id);
      } else {
        omobus.openSlide(slide.id);
      }
    } catch (e) {
    	alert(e);
    }
  },

  stopScript: function(slide) {
    try {
      if( typeof omobus == 'undefined' ) {
        console.log("Omobus object is undefined. Stop: ",slide.id);
      } else {
        omobus.closeSlide(slide.id);
      }
    } catch (e) {
    	alert(e);
    }
  },


  closeScript: function() {
    try {
      if( typeof omobus == 'undefined' ) {
        console.log("Omobus object is undefined. Close");
      } else {
        omobus.quitContainer();
      }
    } catch (e) {
    	alert(e);
    }
  },

  // closeScript: function() {
  //   try {
  //     //mobileTouch.cancel();
  //   	mobileTouch.close();
  //   } catch (e) {
  //   	alert("Close Script Activated");
  //   }
  // },

  // Настройки. перекрывающие settings, полученные из файла конфигурации
  // Полезно, когда контент переведен в Base64 и надо что-то быстро подрегулировать
  // defaultSettings: {
  //   transitionDelay:0,
  //   transitionDuration:1,
  //   transitionEasing:"ease-in-out",
  //   cacheSize:5,
  //   startPosition:0,
  // },

}
