/* jshint esversion: 6 */

sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  return UIComponent.extend("maven.efl.dev.Component", {
    metadata: {
      manifest: "json",
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      var oRouter = this.getRouter();
      oRouter.initialize();
    },
  });
});
