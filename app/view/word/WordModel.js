/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.word.WordModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.word",
	requires: ["App.store.Word","App.store.Dic"],
	
	data: {},
	
	stores: {
		word: {
			type: "word",
			pageSize: 20,
			autoLoad: true
		}
//		,
//		dic: Ext.create('App.store.Dic', {
//           proxy: {
//               type: 'ajax',
//               url: __ctx + "/system/dict/list", //模拟后台访问地址
//               reader: {
//                   type: 'json',
//                   root: 'data'
//               }
//           },
//           autoLoad: true
//        })

	}
});
