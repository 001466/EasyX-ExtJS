/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Dic", {
	extend: "Ext.data.Store",
	alias: "store.dic",
	
	model: "App.model.Dic",
	proxy: {
		type: "ajax",
		//url: "data/dic.json", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});