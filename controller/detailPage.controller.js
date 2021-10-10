/* jshint esversion:  6*/
sap.ui.define(
  ["maven/efl/dev/controller/BaseController"],
  function (BaseController) {
    return BaseController.extend("maven.efl.dev.controller.detailPage", {
      onInit: function () {
        console.log("Inside Detail Page Controller");
        this.oRouter = this.getOwnerComponent().getRouter();

        this.oRouter
          .getRoute("detail")
          .attachMatched(this.showFruitDetails.bind(this));
      },

      showFruitDetails: function (oEvent) {
        console.log(this.oRouter.getRoute("detail"));
        let fruitId = oEvent.getParameter("arguments").index;
        console.log(`fruit Id : ${fruitId}`);

        let sPath = `/fruit/${fruitId}`;

        this.getView().bindElement(sPath);
      },
    });
  }
);
