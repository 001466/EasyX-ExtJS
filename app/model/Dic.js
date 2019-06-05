/* 
 * 数据模型 - 字典
 */

Ext.define("App.model.Dic", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "name"},
	    {name: "desc"}
	]
});