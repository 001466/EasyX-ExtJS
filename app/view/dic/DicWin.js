/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.dic.DicWin", {
	extend: "Ext.window.Window",
	xtype: "dicWin",

	requires: ["App.view.dic.DicModel", "App.view.dic.DicController"],
	viewModel: {
		type: "dic"
	},
	controller: "dic",

	title: "新增内容",
	width: 600,
	height: 400,
	resizable: false,
	constrain: true,
	modal: true,
	/*
	tools: [{
		type: "refresh",
		tooltip: "刷新数据"
	}],
	*/

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "form",
				reference: "dicForm",
				url:__ctx+"/system/v1/dict/submit",
				margin: 10,
				defaults: {
					anchor: "100%"
				},
				fieldDefaults: {
					flex: 1,
					margin: 10,
					labelWidth: 60,
					allowBlank: false
				},
				items: [{
					xtype: "container",
					layout: {
						type: "hbox",
						align: "stretch"
					},
					items: [ {
					    allowBlank:true,
					    readOnly: true,
						xtype: "textfield",
						name: "id",
						fieldLabel: "id"
					}]
				}, {
					xtype: "container",
					layout: {
						type: "hbox",
						align: "stretch"
					},
					items: [{
						xtype: "textfield",
						name: "code",
						fieldLabel: "code",
						grow: false,
						allowBlank: false
					}]
				}, {
                    xtype: "container",
                    layout: {
                        type: "hbox",
                        align: "stretch"
                    },
                    items: [{
                        xtype: "textfield",
                        name: "dictKey",
                        fieldLabel: "dictKey",
                        grow: false,
                        allowBlank: false
                    }]
                }, {
                     xtype: "container",
                     layout: {
                         type: "hbox",
                         align: "stretch"
                     },
                     items: [{
                         xtype: "textfield",
                         name: "dictValue",
                         fieldLabel: "dictValue",
                         grow: false,
                         allowBlank: false
                     }]
                }


				]
			}],
			buttonAlign: "center",
			buttons: [{
				text: "保存",
				handler: "save"
			}, {
				text: "取消",
				handler: "cancel"
			}]
		});
		this.callParent(arguments);
	}
});
