/* jshint esversion: 6 */
// sap.ui.define(['maven/efl/dev/controller/BaseController'], function (BaseController) {
//     return BaseController.extend("maven.efl.dev.controller.masterPage", {
//       onInit: function () {
//         console.log("Inside MasterPage controller");
//         // this.oRouter = this.getOwnerComponent().getRouter();
//       },
//       selectItem: function(oEvent){
//         const item = oEvent.getParameter('item');
//         const sPath = item.getBindingContext().getPath();
//         const sIndex = sPath.split('/')[sPath.split('/').length - 1];

//         this.makeRoute(sIndex);
//       }

//       makeRoute: function(sIndex){
//         console.log(sIndex)
//       };

//     });
//   });

//  sap.ui.define(['maven/efl/dev/controller/BaseController'], function (BaseController) {
//     return BaseController.extend('maven.efl.dev.controller.masterPage', {
//      onInit: function () {
//         console.log("Inside MasterPage controller");
//       }
//      })
//    })

sap.ui.define(
  ["maven/efl/dev/controller/BaseController"],
  function (BaseController) {
    return BaseController.extend("maven.efl.dev.controller.masterPage", {
      onInit: function () {
        console.log("Inside Master Page Controller");
        this.oRouter = this.getOwnerComponent().getRouter();
      },

      selectItem: function (oEvent) {
        const item = oEvent.getParameter("listItem");
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
    });
  }
);
