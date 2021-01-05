/*
 * 视图控制器 -
 */

Ext.define("App.view.word.WordController", {
	extend: "Ext.app.ViewController",
	alias: "controller.word",

	uses: ["App.view.word.WordWin"],

	init: function() {

		this.getViewModel().getStore("word").addListener('beforeload',function(store, options){

		    var typStore=Ext.ComponentQuery.query("wordTypeCombo[name=tag]", this.tb)[0];
            var tagStore=Ext.ComponentQuery.query("wordTagCombo[name=tag]", this.tb)[0];

            var typ=typStore.getValue();
            var tag=tagStore.getValue();


		    Ext.apply(store.proxy.extraParams, {
                typ:typ,
                tag:tag
		    });

		},this);

	},

	//搜索
	search: function() {
 		this.getViewModel().getStore("word").reload();
	},

	exp:function(){
        alert("export");
    },

	//新增
	add: function() {
		var win = Ext.create("App.view.word.WordWin");
		win.show();
	},

	//编辑
	edit: function(grid, record, item, index, e, eOpts) {
		var rec = grid.getStore().getAt(index);
		var win = Ext.create("App.view.word.WordWin", {
			title: "编辑 - #" + rec.get("id")
		});
		win.down("form").loadRecord(rec);
		win.show();
	},

	//删除
	del: function(grid, rowIndex, colIndex) {
		var msg = "确认删除：" + grid.getStore().getAt(rowIndex).get("text") + " ？";
		var me=this;
		Ext.Msg.confirm("确认", msg, function(res) {
			if(res == "yes") {
				//grid.getStore().removeAt(rowIndex);
				var id=grid.getStore().getAt(rowIndex).get("id");
				Ext.Ajax.request({
				    //请求地址
				    url: __ctx+"/word/word/remove/"+id,
				    method: 'post',
				    async: false,//Ext.Ajax.request默认是异步的，可以通过设置参数async:false来使其变为同步
				    success: function (response, success) {
				        me.getViewModel().getStore("word").reload();
				    }
				});

			}
		});
	},



	//批量删除
	batchDel: function() {
		var grid = Ext.getCmp("wordGrid");
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
		var fr = this.lookupReference("wordForm").getForm();
		if(fr.isValid()) {
			var me=this;
            fr.submit({
                scope:this,
                success: function(form, action) {

                      Ext.Msg.alert('成功', action.response.responseText);
                      var id=fr.findField("id").getValue();
                      me.getViewModel().getStore("word").reload();

                      if(typeof(id)!="undefined" && id!=0 && id !=null ){
                        btn.up("wordWin").close();
                      }

                },
                failure: function(form, action) {
                       Ext.Msg.alert('失败', action.response.responseText);
                }
            });
		}
	},

	//取消
	cancel: function(btn) {
		btn.up("wordWin").close();
	}


});