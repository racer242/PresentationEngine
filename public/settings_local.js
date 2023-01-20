window.settings={
  // Расположение файла конфигурации
  contentUrl:"./presentation/content.xlsx",
  // Настройки для получения и использования контента в формате Base64
  useEmbeddedContent:true,

  playScript: function(slide) {
    try {
      if( typeof omobus == 'undefined' ) {
        console.log("Play: Omobus object is undefined");
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
        console.log("Stop: Omobus object is undefined");
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
        console.log("Close: Omobus object is undefined");
      } else {
        omobus.quitContainer();
      }
    } catch (e) {
    	alert(e);
    }
  },
  
}
