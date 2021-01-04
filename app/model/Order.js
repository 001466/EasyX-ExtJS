/*
 * 数据模型 - 订单
 */

Ext.define("App.model.Order", {
	extend: "Ext.data.Model",
	fields: [
	      {name: "id"},
          {name:"customContent"},
          {name:"customEmail"},
          {name:"customFrom"},
          {name:"customMobile"},
          {name:"customName"},
          {name:"customQq"},
          {name:"customType"},
          {name:"customVisitUrl"},
          {name:"customWechat"},
          {name:"deliverAdderss"},
          {name:"deliverCity"},
          {name:"deliverCounty"},
          {name:"deliverExpress"},
          {name:"deliverExpressId"},
          {name:"deliverProvince"},
          {name:"deliverStatus"},
          {name:"deliverTime"},
          {name:"productBranch"},
          {name:"productId"},
          {name:"productMaterial"},
          {name:"productPrice"},
          {name:"productType"},
          {name:"type"},
          {name:"status"}


	]
});
