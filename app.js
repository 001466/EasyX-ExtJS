/*
 * Application's entrance
 */


var __ctx="http://localhost:8888";

//设置插件加载目录
Ext.Loader.setConfig({
	enabled: true,
	paths: {
		"Ext.ux": "extjs/ux"
	}
});

Ext.application({
	extend: "App.Application",
	name: "App",
	
	autoCreateViewport: "App.view.main.Main"
});