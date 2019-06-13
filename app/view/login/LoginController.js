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

                   __usr=action.result.data;
                   __tkn=__usr.token;

                   me.getView().destroy();
                   Ext.create("App.view.main.Main");
                   Ext.getCmp("loginDisplayLabel").setText(__usr.username);

                   Ext.Ajax.on("beforerequest",	function(    conn,   options,   eOpts) {
                        Ext.apply(options, {
                            headers:{
                                "Authorization":__tkn
                            }
                        });

                        Ext.apply(options.params, {
                            "tenantCode":__usr.tenantCode
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












