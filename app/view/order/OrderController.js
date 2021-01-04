/*
 * 视图控制器 - 角色管理
 */

Ext.define("App.view.order.OrderController", {
	extend: "Ext.app.ViewController",
	alias: "controller.order",
	
	uses: ["App.view.order.OrderWin"],
	
	init: function() {
	

		this.st = Ext.getCmp("orderGrid").getStore(); //通过Component获取Store
		this.tb = Ext.getCmp("orderGrid").getDockedItems('toolbar[dock="top"]')[0];

		
		

		this.getViewModel().getStore("order").addListener('beforeload',function(store, options){
			 

			var sd= Ext.Date.format( Ext.ComponentQuery.query("datefield[name=startDate]", this.tb)[0].getValue(),"Y-m-d");
			var ed= Ext.Date.format( Ext.ComponentQuery.query("datefield[name=endDate]", this.tb)[0].getValue(),"Y-m-d");

			 
		    
		    Ext.apply(store.proxy.extraParams, {
		     	startDate:sd,
				endDate:ed
		    }); 

		 },this);

	},
	
	//搜索
	search: function() {
 		this.getViewModel().getStore("order").reload();
	},

	exp:function(){
        var sd= Ext.Date.format( Ext.ComponentQuery.query("datefield[name=startDate]", this.tb)[0].getValue(),"Y-m-d");
    	var ed= Ext.Date.format( Ext.ComponentQuery.query("datefield[name=endDate]", this.tb)[0].getValue(),"Y-m-d");
    	window.location.href=__ctx+"/order/landingorder/admin/export"+"?startDate="+sd +"&endDate="+ed +"&Authorization="+__tkn;
    },
	
	//新增
	add: function() {
		var win = Ext.create("App.view.order.OrderWin");
		win.show();
	},
	
	//编辑
	edit: function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);		
		var win = Ext.create("App.view.order.OrderWin", {
			title: "编辑 - #" + rec.get("id")
		});
		win.down("form").loadRecord(rec);
		win.show();
	},
	
	//删除
	del: function(grid, rowIndex, colIndex) {
		var msg = "确认删除：" + grid.getStore().getAt(rowIndex).get("customName") + " ？";
		var me=this;
		Ext.Msg.confirm("确认", msg, function(res) {
			if(res == "yes") {
				//grid.getStore().removeAt(rowIndex);
				var id=grid.getStore().getAt(rowIndex).get("id");
				Ext.Ajax.request({
				    //请求地址
				    url: __ctx+"/order/landingorder/admin/remove/"+id,
				    method: 'post',
				    async: false,//Ext.Ajax.request默认是异步的，可以通过设置参数async:false来使其变为同步
				    success: function (response, success) {
				        me.getViewModel().getStore("order").reload();
				    }
				});

			}
		});
	},


	
	//批量删除
	batchDel: function() {
		var grid = Ext.getCmp("orderGrid");
		if(grid.getSelectionModel().hasSelection()) {
			var st = grid.getStore();
			var recs = grid.getSelectionModel().getSelection();
			var names = "";
			for(var i=0;i<recs.length;i++) {
				names += recs[i].data.customName+"<br />";
			}
			Ext.Msg.confirm("确认", "确认删除以下？<br />"+names, function(res) {
				if(res=="yes") {
					st.remove(recs);
				}
			});
		}else {
			Ext.Msg.alert("信息", "请选择要删除的！");
		} 
	},
	
	//保存
	save: function(btn) {
		var fr = this.lookupReference("orderForm").getForm();
		if(fr.isValid()) {
			var id = fr.findField("id").getValue();
			if(id) { //编辑
				var rec = this.st.getById(id);
				//rec.set("roleName", fr.findField("roleName").getValue());
				//rec.set("roleDesc", fr.findField("roleDesc").getValue());
				//this.st.rejectChanges();	//取消所有修改
				this.st.commitChanges();	//提交修改数据
			}else { //新增
				var obj = fr.getFieldValues();
				obj.id = this.st.last() ? parseInt(this.st.last().get("id"))+1 : 1;
				this.st.add(obj);
			}
			btn.up("orderwin").close();
		}
	},
	
	//取消
	cancel: function(btn) {
		btn.up("orderwin").close();
	}
});