/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.order.OrderModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.order",
	requires: ["App.store.Order","App.store.Dic"],
	
	data: {},
	
	stores: {
		order: {
			type: "order",
			pageSize: 10,
			autoLoad: true
		},
		status: Ext.create('App.store.Dic', {
           proxy: {
               type: 'ajax',
               url: "data/orderStatus.json", //模拟后台访问地址
               reader: {
                   type: 'json',
                   root: 'data'
               }
           },
           autoLoad: true
        })
	}
});
