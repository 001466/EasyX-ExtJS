/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.main.PasswdWin", {
	extend: "Ext.window.Window",
	xtype: "passwdwin",
	
    requires: ["App.view.main.MainModel","App.view.main.MainController"],
	controller: "main",
	
	title: "修改密码",
	width: 600,
	height: 250,
	resizable: false,
	constrain: true,
	modal: true,
	layout:{
	     type: 'fit',
	},

	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "form",
				reference: "passwdForm",
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                bodyPadding: 8,
				defaultType: 'textfield',
				items: [
                    {
                        fieldLabel: '登陆号',
                        value:__usr.userId,
                        readOnly:true,
                        name: 'id'
                    },{
                        fieldLabel: '原密码',
                        allowBlank:false,
                        name: 'oPassword'
                    },{
                        fieldLabel: '新密码',
                        allowBlank:false,
                        name: 'nPassword'
                    }
				]
			}],
			buttonAlign: "center",
			buttons: [{
				text: "设置",
				handler: "sbmPasswd"
			}, {
				text: "取消",
				handler: "clsPasswd"
			}]
		});
		this.callParent(arguments);
	}
});
