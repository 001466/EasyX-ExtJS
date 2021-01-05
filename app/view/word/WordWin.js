/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.word.WordWin", {
	extend: "Ext.window.Window",
	xtype: "wordWin",

	requires: ["App.view.word.WordModel", "App.view.word.WordController","App.view.word.WordTypeCombo","App.view.word.WordTagCombo"],
	viewModel: {
		type: "word"
	},
	controller: "word",

	title: "新增文字",
	width: 600,
	height: 400,
	resizable: false,
	constrain: true,
	modal: true,
	/*
	tools: [{
		type: "refresh",
		tooltip: "刷新数据"
	}],
	*/

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "form",
				reference: "wordForm",
				url:__ctx+"/word/word/submit",
				margin: 10,
				defaults: {
					anchor: "100%"
				},
				fieldDefaults: {
					flex: 1,
					margin: 10,
					labelWidth: 60,
					allowBlank: false
				},
				items: [

				{
					xtype: "container",
					layout: {
						type: "hbox",
						align: "stretch"
					},
					items: [ {
					    readOnly: true,
					    allowBlank: true,
						xtype: "textfield",
						name: "id",
						fieldLabel: "主键"
					}]
				},{
					xtype: "container",
					layout: {
						type: "hbox",
						align: "stretch"
					},
					items: [{
						xtype: "textarea",
						name: "text",
						fieldLabel: "内容",
						grow: false,
						allowBlank: false
					}]
				},{
                    xtype: "container",
                    layout: {
                        type: "hbox",
                        align: "stretch"
                    },
                    items: [{
                        xtype: "tagfield",
                        name: "typ",
                        fieldLabel: "分类",
                        store:Ext.create('App.store.WordTyp', {

                        }),
                        displayField: 'name', valueField: 'id', queryMode: 'local', filterPickList: true,
                        grow: false,
                        allowBlank: false
                    }]
                },{
                     xtype: "container",
                     layout: {
                         type: "hbox",
                         align: "stretch"
                     },
                     items: [{
                         xtype: "tagfield",
                         name: "tag",
                         fieldLabel: "标签",
                         store:Ext.create('App.store.Dic', {

                         }),
                         displayField: 'dictValue', valueField: 'dictKey', queryMode: 'remote', filterPickList: true,
                         grow: false,
                         allowBlank: false
                     }]
                }

/*
Ext.create('Ext.form.Panel', { renderTo: Ext.getBody(), title: 'Sci-Fi Television', height: 200, width: 500, items:
[{ xtype: 'tagfield', fieldLabel: 'Select a Show', store: shows, displayField: 'show', valueField: 'id', queryMode: 'local', filterPickList: true }] });
*/



				]
			}],
			buttonAlign: "center",
			buttons: [{
				text: "保存",
				handler: "save"
			}, {
				text: "取消",
				handler: "cancel"
			}]
		});
		this.callParent(arguments);
	}
});
