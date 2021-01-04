/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.dic.DicModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.dic",
	requires: ["App.store.Dic","App.store.Dic"],
	
	data: {},
	
	stores: {

		dic: {
		    type: "dic",
            pageSize: 10,
            autoLoad: true
		}

	}
});
