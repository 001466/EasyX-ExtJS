/*
 * Application's entrance
 */


var __ctx="http://localhost:1000";
//var __ctx="http://svr.ecfuck.xyz";

var __usr;
var __tkn;
var __cid="extjs";
var __csc="extjs";
var __scp="all";
var __grt="password";


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