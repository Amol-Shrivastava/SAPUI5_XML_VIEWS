sap.ui.define([
    "maven/efl/dev/controller/BaseController"
], function(BaseController){
    return BaseController.extend('maven.efl.dev.controller.App',{
        onInit: function(){
            console.log('Inside App Controller')
        }
    })
})