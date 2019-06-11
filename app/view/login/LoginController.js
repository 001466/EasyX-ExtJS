Ext.define("App.view.login.LoginController", {
	extend: "Ext.app.ViewController",
	alias: "controller.login",
	uses: ["App.view.main.Main"],
	
	onSpecialKey: function(field, e) {
		if(e.getKey() == e.ENTER) {
			this.doLogin();
		}
	},
	
	onLogin: function() {
		this.doLogin();
	},
	
	doLogin: function() {
		var form = this.lookupReference("loginForm");
		var me=this;
		if(form.isValid()) {

		     form.submit({
		        scope:this,
                success: function(form, action) {
                   me.getView().destroy();
                   Ext.create("App.view.main.Main");


                   Ext.Ajax.on("beforerequest",	function(    conn,   options,   eOpts) {

                        __tk=action.result.data.token;
                        Ext.apply(options, {
                            headers:{
                                "Authorization":__tk
                            }
                        });



                   }, me);


                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result ? action.result.msg : '登陆失败！');
                }
             });

		}
	}
});












