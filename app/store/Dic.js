/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Dic", {
	extend: "Ext.data.Store",
	alias: "store.dic",
	
	model: "App.model.Dic",
	proxy: {
		type: "ajax",
		url: __ctx + "/system/v1/dict/page", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data.records",
			totalProperty: 'data.total'
		}
	}
});