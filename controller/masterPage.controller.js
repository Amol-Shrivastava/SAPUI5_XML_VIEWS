sap.ui.define(['maven/efl/dev/controller/BaseController'], function(BaseController){
    return BaseController.extend('maven.efl.dev.controller.masterPage',{
        onInit: function(){
            console.log("Inside MasterPage controller")
        }
    })
})