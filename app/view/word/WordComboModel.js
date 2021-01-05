/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.word.WordComboModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.wordCombo",
	requires: ["App.store.Dic","App.store.WordTyp"],

	data: {

	},

	stores: {
		dic: {
            type: "dic",
            autoLoad: true,
            proxy: {
                type: "ajax",
                url: __ctx + "/system/v1/dict/list", //模拟后台访问地址
                reader: {
                    type: "json",
                    rootProperty: "data"
                }
            }
        },
        wordTyp: {
             type: "wordTyp",
             autoLoad: true
        }
	}
});
