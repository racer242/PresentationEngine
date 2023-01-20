window.settings={
  // Расположение файла конфигурации
  contentUrl:"./presentation/content.xlsx",
  // Настройки для получения и использования контента в формате Base64
  useEmbeddedContent:true,

  closeScript: function() {
    try {
      //mobileTouch.cancel();
    	mobileTouch.close();
    } catch (e) {
    	alert("Close Script Activated");
    }
  },
  
}
