Ext.define("App.view.word.WordTagCombo", {
	extend: "Ext.form.field.ComboBox",
	xtype: "wordTagCombo",
	requires: ["App.view.word.WordComboModel","App.view.word.WordComboController"],
	viewModel: {
    	type: "wordCombo"
    },
	bind: {
    	store: "{dic}"
    },
    editable: false,
    controller: "wordCombo",
    queryMode: 'local',
    displayField: 'dictValue',
    valueField: 'dictKey'
});
