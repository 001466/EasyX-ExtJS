/*
 * 视图控制器 -
 */

Ext.define("App.view.word.WordComboController", {
	extend: "Ext.app.ViewController",
	alias: "controller.wordCombo",
	init: function() {

	},
	typSelect:function ( combo, record, eOpts ) {

 	     var wordTagCombo=combo.nextNode("wordTagCombo[name=tag]");
 	     wordTagCombo.getStore().load({
             params : {
                 code : record.get("id")
             }
         });

	}


});