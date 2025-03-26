"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96017],{202179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>I,frontMatter:()=>h,metadata:()=>b,toc:()=>k});var a=n(487462),i=(n(667294),n(603905)),s=n(258219),r=(n(162316),n(580667)),o=n.n(r),l=n(524228),c=n.n(l),p=n(909487),d=n(241429),u=n(905397),y=n(504667),g=n(809472),m=n(685162);const h={id:"strategy-instances-controller-update-strategy-instance-16",title:"Edit an existing strategy instance",description:"Updates the values of an existing strategy instance.",sidebar_label:"Edit an existing strategy instance",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StrategyInstancesController_updateStrategyInstance_16",description:"Updates the values of an existing strategy instance.\n\nThe type can not be updated.\nOnly values given in the body will be modified on the instance.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing strategy instance to edit",schema:{format:"uuid",type:"string"}},{name:"type",required:!0,in:"path",description:"The strategy type name of which to search for the instance. Defaults to all types",schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:'The name for the strategy instance to create.\nCan be left out.\n\nIf given, must be a non empty string\n\n@exmple "userpass-local"'},isLoginActive:{type:"boolean",description:"Set wehter, login should be active on the new strategy\nCan only be true, if {@link Strategy.canLoginRegister} (default value)",example:!0},isSelfRegisterActive:{type:"boolean",description:"Set whether, user self registration should be active on the new strategy\nCan only be true, if {@link Strategy.canLoginRegister} (default value)",example:!0},isSyncActive:{type:"boolean",description:"Set whether, providing sync tokens should be active on the new strategy\nCan only be true, if {@link Strategy.canSync} (default value)",example:!1},doesImplicitRegister:{type:"boolean",description:"Set whether, the instance will implicitly register on a unknown login.\nCan only be true, if {@link Strategy.allowsImplicitSignup} (default value)",example:!1}},title:"UpdateStrategyInstanceInput"}}}},responses:{200:{description:"If successful, the updated strategy instance",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this strategy instance",example:"12345678-90ab-cdef-fedc-ab0987654321"},name:{type:"string",description:"An optional human readable name for the strategy.\n\nCan be displayes in a UI etc.\nbut is not necesarrily unique.",example:"Github-Enterprise-Example"},type:{type:"string",description:"The unique string name of the strategy this is an instance of\n\nThe strategy of an instance is set on initialization and **cannot** be changed",example:"userpass"},isLoginActive:{type:"boolean",description:"If `true`, this strategy instance allows login of registered users to retrieve an access token.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false`, users are not allowed to login using this instance.",example:!0},isSelfRegisterActive:{type:"boolean",description:"If `true` users can create an account themselves with the registration token they obtained from this instance.\nThis only affects registration, not linking an additional account.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false` accounts cannot be created without being admin.",example:!0},isSyncActive:{type:"boolean",description:"If `true`, and {@link Strategy.canSync} is `true`,\nthe sync service can retrieve access tokens for ims users from this strategy instnce.\n\nIf `false`, no tokens will be handed out for the instance",example:!1},doesImplicitRegister:{type:"boolean",description:"If `true`, a user automatically gets a registration token,\nif they tried to login and an account was not found but the user provided credentials\n(i.e. sucessfully authenticated with the 3rd party).\nNeeds {@link Strategy.allowsImplicitSignup} to be `true`.\n\nIf `false`, login fails if no known user was found.",example:!1}},required:["id","name","type","isLoginActive","isSelfRegisterActive","isSyncActive","doesImplicitRegister"],title:"StrategyInstance"}}}},400:{description:"If any of the input values are invalid"},404:{description:"If no strategy with the given id (and type) are found"}},tags:["login-api"],security:[{bearer:[]}],method:"put",path:"/auth/api/login/strategy-instance/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{name:"string",isLoginActive:!0,isSelfRegisterActive:!0,isSyncActive:!1,doesImplicitRegister:!1},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Edit an existing strategy instance",description:{content:"Updates the values of an existing strategy instance.\n\nThe type can not be updated.\nOnly values given in the body will be modified on the instance.",type:"text/plain"},url:{path:["auth","api","login","strategy-instance",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing strategy instance to edit",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The strategy type name of which to search for the instance. Defaults to all types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},f=void 0,b={unversionedId:"login-service/strategy-instances-controller-update-strategy-instance-16",id:"login-service/strategy-instances-controller-update-strategy-instance-16",title:"Edit an existing strategy instance",description:"Updates the values of an existing strategy instance.",source:"@site/rest-docs/login-service/strategy-instances-controller-update-strategy-instance-16.api.mdx",sourceDirName:"login-service",slug:"/login-service/strategy-instances-controller-update-strategy-instance-16",permalink:"/gropius-docs/rest/login-service/strategy-instances-controller-update-strategy-instance-16",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"strategy-instances-controller-update-strategy-instance-16",title:"Edit an existing strategy instance",description:"Updates the values of an existing strategy instance.",sidebar_label:"Edit an existing strategy instance",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StrategyInstancesController_updateStrategyInstance_16",description:"Updates the values of an existing strategy instance.\n\nThe type can not be updated.\nOnly values given in the body will be modified on the instance.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing strategy instance to edit",schema:{format:"uuid",type:"string"}},{name:"type",required:!0,in:"path",description:"The strategy type name of which to search for the instance. Defaults to all types",schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:'The name for the strategy instance to create.\nCan be left out.\n\nIf given, must be a non empty string\n\n@exmple "userpass-local"'},isLoginActive:{type:"boolean",description:"Set wehter, login should be active on the new strategy\nCan only be true, if {@link Strategy.canLoginRegister} (default value)",example:!0},isSelfRegisterActive:{type:"boolean",description:"Set whether, user self registration should be active on the new strategy\nCan only be true, if {@link Strategy.canLoginRegister} (default value)",example:!0},isSyncActive:{type:"boolean",description:"Set whether, providing sync tokens should be active on the new strategy\nCan only be true, if {@link Strategy.canSync} (default value)",example:!1},doesImplicitRegister:{type:"boolean",description:"Set whether, the instance will implicitly register on a unknown login.\nCan only be true, if {@link Strategy.allowsImplicitSignup} (default value)",example:!1}},title:"UpdateStrategyInstanceInput"}}}},responses:{200:{description:"If successful, the updated strategy instance",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this strategy instance",example:"12345678-90ab-cdef-fedc-ab0987654321"},name:{type:"string",description:"An optional human readable name for the strategy.\n\nCan be displayes in a UI etc.\nbut is not necesarrily unique.",example:"Github-Enterprise-Example"},type:{type:"string",description:"The unique string name of the strategy this is an instance of\n\nThe strategy of an instance is set on initialization and **cannot** be changed",example:"userpass"},isLoginActive:{type:"boolean",description:"If `true`, this strategy instance allows login of registered users to retrieve an access token.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false`, users are not allowed to login using this instance.",example:!0},isSelfRegisterActive:{type:"boolean",description:"If `true` users can create an account themselves with the registration token they obtained from this instance.\nThis only affects registration, not linking an additional account.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false` accounts cannot be created without being admin.",example:!0},isSyncActive:{type:"boolean",description:"If `true`, and {@link Strategy.canSync} is `true`,\nthe sync service can retrieve access tokens for ims users from this strategy instnce.\n\nIf `false`, no tokens will be handed out for the instance",example:!1},doesImplicitRegister:{type:"boolean",description:"If `true`, a user automatically gets a registration token,\nif they tried to login and an account was not found but the user provided credentials\n(i.e. sucessfully authenticated with the 3rd party).\nNeeds {@link Strategy.allowsImplicitSignup} to be `true`.\n\nIf `false`, login fails if no known user was found.",example:!1}},required:["id","name","type","isLoginActive","isSelfRegisterActive","isSyncActive","doesImplicitRegister"],title:"StrategyInstance"}}}},400:{description:"If any of the input values are invalid"},404:{description:"If no strategy with the given id (and type) are found"}},tags:["login-api"],security:[{bearer:[]}],method:"put",path:"/auth/api/login/strategy-instance/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{name:"string",isLoginActive:!0,isSelfRegisterActive:!0,isSyncActive:!1,doesImplicitRegister:!1},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Edit an existing strategy instance",description:{content:"Updates the values of an existing strategy instance.\n\nThe type can not be updated.\nOnly values given in the body will be modified on the instance.",type:"text/plain"},url:{path:["auth","api","login","strategy-instance",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing strategy instance to edit",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The strategy type name of which to search for the instance. Defaults to all types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Get one strategy instance",permalink:"/gropius-docs/rest/login-service/strategy-instances-controller-get-strategy-instance-12"},next:{title:"Delete a strategy instance",permalink:"/gropius-docs/rest/login-service/strategy-instances-controller-delete-strategy-instance-18"}},v={},k=[{value:"Request",id:"request",level:2}],x={toc:k},S="wrapper";function I(e){let{components:t,...n}=e;return(0,i.kt)(S,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Edit an existing strategy instance"),(0,i.kt)(o(),{method:"put",path:"/auth/api/login/strategy-instance/{id}",mdxType:"MethodEndpoint"}),(0,i.kt)(c(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Updates the values of an existing strategy instance."),(0,i.kt)("p",null,"The type can not be updated.\nOnly values given in the body will be modified on the instance."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The uuid string of an existing strategy instance to edit",schema:{format:"uuid",type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"type",required:!0,in:"path",description:"The strategy type name of which to search for the instance. Defaults to all types",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(m.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The name for the strategy instance to create.\nCan be left out.\n\nIf given, must be a non empty string\n\n@exmple "userpass-local"'},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"isLoginActive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Set wehter, login should be active on the new strategy\nCan only be true, if {@link Strategy.canLoginRegister} (default value)",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"isSelfRegisterActive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Set whether, user self registration should be active on the new strategy\nCan only be true, if {@link Strategy.canLoginRegister} (default value)",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"isSyncActive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Set whether, providing sync tokens should be active on the new strategy\nCan only be true, if {@link Strategy.canSync} (default value)",example:!1},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"doesImplicitRegister",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Set whether, the instance will implicitly register on a unknown login.\nCan only be true, if {@link Strategy.allowsImplicitSignup} (default value)",example:!1},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"If successful, the updated strategy instance")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(g.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(m.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique ID of this strategy instance",example:"12345678-90ab-cdef-fedc-ab0987654321"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"An optional human readable name for the strategy.\n\nCan be displayes in a UI etc.\nbut is not necesarrily unique.",example:"Github-Enterprise-Example"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique string name of the strategy this is an instance of\n\nThe strategy of an instance is set on initialization and **cannot** be changed",example:"userpass"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"isLoginActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true`, this strategy instance allows login of registered users to retrieve an access token.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false`, users are not allowed to login using this instance.",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"isSelfRegisterActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true` users can create an account themselves with the registration token they obtained from this instance.\nThis only affects registration, not linking an additional account.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false` accounts cannot be created without being admin.",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"isSyncActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true`, and {@link Strategy.canSync} is `true`,\nthe sync service can retrieve access tokens for ims users from this strategy instnce.\n\nIf `false`, no tokens will be handed out for the instance",example:!1},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"doesImplicitRegister",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true`, a user automatically gets a registration token,\nif they tried to login and an account was not found but the user provided credentials\n(i.e. sucessfully authenticated with the 3rd party).\nNeeds {@link Strategy.allowsImplicitSignup} to be `true`.\n\nIf `false`, login fails if no known user was found.",example:!1},mdxType:"SchemaItem"})))),(0,i.kt)(m.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(u.Z,{responseExample:'{\n  "id": "12345678-90ab-cdef-fedc-ab0987654321",\n  "name": "Github-Enterprise-Example",\n  "type": "userpass",\n  "isLoginActive": true,\n  "isSelfRegisterActive": true,\n  "isSyncActive": false,\n  "doesImplicitRegister": false\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"If any of the input values are invalid")),(0,i.kt)("div",null)),(0,i.kt)(m.default,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"If no strategy with the given id (and type) are found")),(0,i.kt)("div",null))))))}I.isMDXComponent=!0}}]);