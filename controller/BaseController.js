/* jshint esversion: 6 */
sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  return Controller.extend("maven.efl.dev.controller.BaseController", {
    oCore: sap.ui.getCore(),
    onInit: function () {
      console.log("Inside App Controller");
    },
  });
});
