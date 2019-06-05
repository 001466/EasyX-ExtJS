/*
 * 数据存储 - 订单
 */

Ext.define("App.store.Order", {
	extend: "Ext.data.Store",
	alias: "store.order",

	model: "App.model.Order",
	proxy: {
		type: "ajax",
		url: __ctx+"/admin/order/list", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		},
		actionMethods :{create: "POST", read: "GET", update: "POST", destroy: "POST"}
	}
});