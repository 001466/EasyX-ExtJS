/*
 * 视图控制器 - 角色管理
 */

Ext.define("App.view.dic.DicController", {
	extend: "Ext.app.ViewController",
	alias: "controller.dic",

	uses: ["App.view.dic.DicWin"],

	init: function() {


		this.st = Ext.getCmp("dicGrid").getStore(); //通过Component获取Store
		this.tb = Ext.getCmp("dicGrid").getDockedItems('toolbar[dock="top"]')[0];




		this.getViewModel().getStore("dic").addListener('beforeload',function(store, options){

            var code=Ext.ComponentQuery.query("textfield[name=code]", this.tb)[0].getValue();

		    Ext.apply(store.proxy.extraParams, {
		     	code:code
		    });

		 },this);

	},

	//搜索
	search: function() {
 		this.getViewModel().getStore("dic").reload();
	},

	exp:function(){
        alert("export");
    },

	//新增
	add: function() {
		var win = Ext.create("App.view.dic.DicWin");
		win.show();
	},

	//编辑
	edit: function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
		var win = Ext.create("App.view.dic.DicWin", {
			title: "编辑 - #" + rec.get("id")
		});
		win.down("form").loadRecord(rec);
		win.show();
	},

	//删除
	del: function(grid, rowIndex, colIndex) {
		var msg = "确认删除：" + grid.getStore().getAt(rowIndex).get("dictValue") + " ？";
		var me=this;
		Ext.Msg.confirm("确认", msg, function(res) {
			if(res == "yes") {
				//grid.getStore().removeAt(rowIndex);
				var id=grid.getStore().getAt(rowIndex).get("id");
				Ext.Ajax.request({
				    //请求地址
				    url: __ctx+"/system/v1/dict/remove/"+id,
				    method: 'post',
				    async: false,//Ext.Ajax.request默认是异步的，可以通过设置参数async:false来使其变为同步
				    success: function (response, success) {
				        me.getViewModel().getStore("dic").reload();
				    }
				});

			}
		});
	},



	//批量删除
	batchDel: function() {
		var grid = Ext.getCmp("dicGrid");
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
		var fr = this.lookupReference("dicForm").getForm();
		if(fr.isValid()) {
		    var me=this;
            fr.submit({
                scope:this,
                success: function(form, action) {
                      Ext.Msg.alert('成功', action.response.responseText);
                        //btn.up("dicWin").close();
                      me.getViewModel().getStore("dic").reload();
                },
                failure: function(form, action) {
                       Ext.Msg.alert('失败', action.response.responseText);
                }
            });
		}
	},

	//取消
	cancel: function(btn) {
		btn.up("dicWin").close();
	}
});