Ext.define("App.store.WordTyp", {
	extend: "Ext.data.Store",
	alias: "store.wordTyp",
	fields: ['id', 'name'],
    data : [
        {"id":"sentence", "name":"句子"},
        {"id":"emoji", "name":"符号"}
    ]
});