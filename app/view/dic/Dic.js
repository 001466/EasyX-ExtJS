/*
 * 视图 - 花样文字
 */

Ext.define("App.view.dic.Dic", {
	extend: "Ext.grid.Panel",
	xtype: "dic",
	id: "dicGrid",

	requires: ["App.view.dic.DicModel", "App.view.dic.DicController"],

	viewModel: {
		type: "dic"
	},
	controller: "dic",

	bind: {
		store: "{dic}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "花样文字",
			border: true,
			columns: [{
				text: "id",
				dataIndex: "id",
				flex: 1
			},{
                text: "code",
                dataIndex: "code",
                flex: 1
            },{
                 text: "dictKey",
                 dataIndex: "dictKey",
                 flex: 1
            },{
                 text: "dictValue",
                 dataIndex: "dictValue",
                 flex: 1
            }


            ,{
				xtype: "actioncolumn",
				text: "操作",
				width: 100,
				align: "center",
				sortable: false,
				menuDisabled: true,
				items: [/*{
					iconCls: "opt-edit",
					tooltip: "编辑",
					handler: "edit"
				},*/ {
					iconCls: "opt-delete",
					tooltip: "删除",
					handler: "del"
				}]
			}],
			tbar: [{
                xtype: "textfield",
                name: "code",
                fieldLabel: "code"
            }, {
				xtype: "button",
				text: "搜索",
				glyph: 0xf002,
				handler: "search"
			},{
                xtype: "button",
                text: "添加",
                glyph: 0xf040,
                handler: "add"
            }, {
                xtype: "button",
                text: "导出",
                glyph: 0xf0ed,
                handler: "exp"
            }, "->", "->"/*, {
				xtype: "button",
				text: "批量删除",
				glyph: 0xf00d,
				handler: "batchDel"
			}*/],
			bbar: {
				xtype: "pagingtoolbar",
				bind: {
					store: "{dic}"
				},
				displayInfo: true
			},
			listeners: {
				itemdblclick: function(view, record, item, index, e, eOpts) {

				}
			}
		});
		this.callParent(arguments);
	}
});