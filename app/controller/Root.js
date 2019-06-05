/*
 * Global Controller 
 */

Ext.define("App.controller.Root", {
	extend: "Ext.app.Controller",
	
	requires: [],
	uses: ["App.view.login.Login"],
	onLaunch: function() {

       Ext.Ajax.on("requestexception",	function(   conn,   response,   options,   eOpts) {

            console.log(response.status);
            if(response.status==401){
               var mainView=Ext.getCmp("mainViewport");
               if(mainView){
                    mainView.destroy();
               }
               Ext.create("App.view.login.Login");
            }

       }, this);
	}
});