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

        let sPath = `/fruits/${fruitId}`;

        if (fruitId != 2) {
          this.getView().byId("filter_6").setVisible(false);
          this.getView().byId("filter_7").setVisible(false);
          this.getView().byId("filter_8").setVisible(false);
        } else if (fruitId === 4 || fruitId === 10 || fruitId === 12) {
          this.getView().byId("filter_4").setVisible(false);
          this.getView().byId("filter_5").setVisible(false);
          this.getView().byId("filter_6").setVisible(false);
        }

        this.getView().bindElement(sPath);
      },
    });
  }
);
