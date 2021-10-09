/* jshint esversion:  6*/
sap.ui.define(
  ['maven/efl/dev/controller/BaseController'],
   function(BaseController){
     return BaseController.extend('maven.efl.dev.controller.detailPage', {
       onInit: function(){
         console.log('Inside Detail Page Controller');
         this.oRouter = this.getOwnerComponent().getRouter()
        
       }
     })
   }
)
