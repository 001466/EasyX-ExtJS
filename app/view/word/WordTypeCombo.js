Ext.define("App.view.word.WordTypeCombo", {
	extend: "Ext.form.field.ComboBox",
	xtype: "wordTypeCombo",
	requires: ["App.view.word.WordComboModel","App.view.word.WordComboController"],
	viewModel: {
        type: "wordCombo"
    },
    bind: {
        store: "{wordTyp}"
    },
//	store: Ext.create('Ext.data.Store', {
//       fields: ['id', 'name'],
//       data : [
//           {"id":"sentence", "name":"句子"},
//           {"id":"emoji", "name":"符号"}
//       ]
//    }),
    controller: "wordCombo",
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
    listeners: {
        select:"typSelect"
    }
});
