/*
 * 数据模型 - 花样文字
 */

Ext.define("App.model.Word", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "text"},
	    {name: "createUser"},
	    {name: "createTime"},
	    {name: "updateUser"},
	    {name: "updateTime"}
	]
});