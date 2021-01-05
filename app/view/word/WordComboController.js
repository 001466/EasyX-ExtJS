/*
 * 视图控制器 -
 */

Ext.define("App.view.word.WordComboController", {
	extend: "Ext.app.ViewController",
	alias: "controller.wordCombo",
	init: function() {

	},
	typSelect:function ( combo, record, eOpts ) {

 	     console.log(record.get("id"));
 	     var wordTagCombo=combo.nextNode("wordTagCombo[name=tag]");
 	     console.log(wordTagCombo);
 	     wordTagCombo.getStore().load({
             params : {
                 code : record.get("id")
             }
         });

	}

});