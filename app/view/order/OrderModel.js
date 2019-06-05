/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.order.OrderModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.order",
	requires: ["App.store.Order"],
	
	data: {},
	
	stores: {
		order: {
			type: "order",
			pageSize: 10,
			autoLoad: true
		}
	}
});
