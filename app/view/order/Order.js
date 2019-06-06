/*
 * 视图 - 订单管理
 */

Ext.define("App.view.order.Order", {
	extend: "Ext.grid.Panel",
	xtype: "order",
	id: "orderGrid",
	
	requires: ["App.view.order.OrderModel", "App.view.order.OrderController"],
	viewModel: {
		type: "order"
	},
	controller: "order",
	
	bind: {
		store: "{order}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "订单管理",
			border: true,
			columns: [{
				text: "订单编号",
				dataIndex: "id",
				flex: 1
			}, {
                text: "订单类型",
                dataIndex: "type",
                flex: 1
            }, {
				text: "客户名称",
				dataIndex: "customName",
				flex: 2
			}, {
				text: "联系方式",
				dataIndex: "customMobile",
				flex: 2
			}, {
                text: "产品名称",
                dataIndex: "productType",
                flex: 2
            }, {
                 text: "产品品牌",
                 dataIndex: "productBranch",
                 flex: 2
             },{
               text: "产品价格",
               dataIndex: "productPrices",
               flex: 2
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
			tbar: [{
				xtype: "datefield",
				maxWidth: 205,
				fieldLabel: "开始日期",
				format:"Y-m-d",
				name:"startDate",
				labelWidth: 60
			}, {
				xtype: "datefield",
				maxWidth: 205,
				fieldLabel: "结束日期",
				format:"Y-m-d",
				name:"endDate",
				labelWidth: 60
			}, {
				xtype: "button",
				text: "搜索",
				glyph: 0xf002,
				handler: "search"
			}, "->", "->", {
				xtype: "button",
				text: "新增",
				glyph: 0xf067,
				handler: "add"
			}, {
				xtype: "button",
				text: "批量删除",
				glyph: 0xf00d,
				handler: "batchDel"
			}],
			bbar: {
				xtype: "pagingtoolbar",
				bind: {
					store: "{order}"
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