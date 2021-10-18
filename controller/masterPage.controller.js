/* jshint esversion: 6 */

sap.ui.define(
  [
    "maven/efl/dev/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (BaseController, Filter, FilterOperator) {
    return BaseController.extend("maven.efl.dev.controller.masterPage", {
      onInit: function () {
        console.log("Inside Master Page Controller");
        this.oRouter = this.getOwnerComponent().getRouter();
      },

      selectItem: function (oEvent) {
        const item = oEvent.getParameter("listItem");
        // console.log(item)
        const sPath = item.getBindingContext().getPath();

        const sPathArr = sPath.split("/");
        const sIndex = sPathArr[sPathArr.length - 1];

        this.onNext(sIndex);
      },

      onNext: function (sIndex) {
        this.oRouter.navTo("detail", {
          index: `${sIndex}`,
        });
      },

      searchFruit: function (oEvent) {
        var sQuery = oEvent.getParameter("newValue");
        // console.log(oEvent.getParameters());
        // console.log(sQuery);

        var nameFilter = new sap.ui.model.Filter("name", "Contains", sQuery);
        var tasteFilter = new sap.ui.model.Filter("taste", "Contains", sQuery);

        var oFilters = new Filter({
          filters: [nameFilter, tasteFilter],
          and: false,
        });

        this.getView().byId("fruitList").getBinding("items").filter(oFilters);
      },
    });
  }
);
