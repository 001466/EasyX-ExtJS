/*
 * 数据存储 - 花样文字
 */

Ext.define("App.store.Word", {
	extend: "Ext.data.Store",
	alias: "store.word",
	model: "App.model.Word",
	proxy: {
		type: "ajax",
		url: __ctx + "/word/word/list", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});