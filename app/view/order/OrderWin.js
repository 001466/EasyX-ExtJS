/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.order.OrderWin", {
	extend: "Ext.window.Window",
	xtype: "orderwin",
	
	requires: ["App.view.order.OrderModel", "App.view.order.OrderController"],
	viewModel: {
		type: "order"
	},
	controller: "order",
	
	title: "新增角色",
	width: 600,
	height: 250,
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
				reference: "orderForm",
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
					items: [{
						xtype: "hiddenfield",
						name: "id",
						value: ""
					}, {
						xtype: "textfield",
						name: "customName",
						fieldLabel: "客户名称"
					}]
				}, {
					xtype: "container",
					layout: {
						type: "hbox",
						align: "stretch"
					},
					items: [{
						xtype: "textfield",
						name: "customMobile",
						fieldLabel: "客户电话",
						grow: false,
						allowBlank: true
					}]
				}, {
                    xtype: "container",
                    layout: {
                        type: "hbox",
                        align: "stretch"
                    },
                    items: [{
                        xtype: "combobox",
                        name: "status",
                        fieldLabel: "订单状态",
                        bind: {
                            store: "{status}"
                        },
                        displayField: "name",
                        valueField: "id",
                        editable : false
                    }]
                }]
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
