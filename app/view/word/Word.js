/*
 * 视图 - 花样文字
 */

Ext.define("App.view.word.Word", {
	extend: "Ext.grid.Panel",
	xtype: "word",
	id: "wordGrid",
	
	requires: ["App.view.word.WordModel", "App.view.word.WordController"],

	viewModel: {
		type: "word"
	},
	controller: "word",
	
	bind: {
		store: "{word}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "花样文字",
			border: true,
			columns: [{
				text: "编号",
				dataIndex: "id",
				flex: 1
			}, {
                text: "内容",
                dataIndex: "text",
                flex: 4
            }, {
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
			tbar: [
			{
               xtype: "wordTypeCombo",
               name: "tag",
               fieldLabel: "分类",
               grow: false,
               allowBlank: false
            },{
                 xtype: "wordTagCombo",
                 name: "tag",
                 fieldLabel: "标签",
                 grow: false,
                 allowBlank: false
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
					store: "{word}"
				},
				displayInfo: true
			},
			listeners: {
				itemclick: function(view, record, item, index, e, eOpts) {}
			}
		});
		this.callParent(arguments);
	}
});