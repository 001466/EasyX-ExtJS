/*
 * 数据模型 - 订单
 */

Ext.define("App.model.Order", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "roleName"},
	    {name: "roleDesc"}
	]
});
