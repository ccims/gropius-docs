"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54379],{466404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>M,frontMatter:()=>y,metadata:()=>v,toc:()=>I});var s=i(487462),n=(i(667294),i(603905)),a=i(258219),r=(i(162316),i(580667)),o=i.n(r),l=i(524228),d=i.n(l),p=i(909487),c=i(241429),m=i(905397),u=i(504667),g=i(809472),h=i(685162);const y={id:"sync-ims-user-controller-get-ims-token-29",title:"Get the IMS token for a given IMS user id",description:"Get the IMS token for a given IMS user id",sidebar_label:"Get the IMS token for a given IMS user id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SyncImsUserController_getIMSToken_29",parameters:[{name:"id",required:!0,in:"path",description:"The neo4j id of the IMS user",schema:{type:"string"}}],responses:{200:{description:"",content:{"application/json":{schema:{type:"object",properties:{token:{type:"string",nullable:!0},isImsUserKnown:{type:"boolean"},message:{type:"string",nullable:!0}},required:["token","isImsUserKnown","message"],title:"GetImsTokenResult"}}}},400:{description:"Missing query parameter imsUser or failed to load referenced IMS user"}},tags:["sync-api"],security:[{"sync-api":[]}],description:"Get the IMS token for a given IMS user id",method:"get",path:"/auth/api/sync/get-ims-token/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Get the IMS token for a given IMS user id",description:{type:"text/plain"},url:{path:["auth","api","sync","get-ims-token",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The neo4j id of the IMS user",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},k=void 0,v={unversionedId:"login-service/sync-ims-user-controller-get-ims-token-29",id:"login-service/sync-ims-user-controller-get-ims-token-29",title:"Get the IMS token for a given IMS user id",description:"Get the IMS token for a given IMS user id",source:"@site/rest-docs/login-service/sync-ims-user-controller-get-ims-token-29.api.mdx",sourceDirName:"login-service",slug:"/login-service/sync-ims-user-controller-get-ims-token-29",permalink:"/gropius-docs/rest/login-service/sync-ims-user-controller-get-ims-token-29",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sync-ims-user-controller-get-ims-token-29",title:"Get the IMS token for a given IMS user id",description:"Get the IMS token for a given IMS user id",sidebar_label:"Get the IMS token for a given IMS user id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SyncImsUserController_getIMSToken_29",parameters:[{name:"id",required:!0,in:"path",description:"The neo4j id of the IMS user",schema:{type:"string"}}],responses:{200:{description:"",content:{"application/json":{schema:{type:"object",properties:{token:{type:"string",nullable:!0},isImsUserKnown:{type:"boolean"},message:{type:"string",nullable:!0}},required:["token","isImsUserKnown","message"],title:"GetImsTokenResult"}}}},400:{description:"Missing query parameter imsUser or failed to load referenced IMS user"}},tags:["sync-api"],security:[{"sync-api":[]}],description:"Get the IMS token for a given IMS user id",method:"get",path:"/auth/api/sync/get-ims-token/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Get the IMS token for a given IMS user id",description:{type:"text/plain"},url:{path:["auth","api","sync","get-ims-token",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The neo4j id of the IMS user",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Get a loginData by id",permalink:"/gropius-docs/rest/login-service/login-data-controller-get-login-data-28"},next:{title:"Link IMS users to the system",permalink:"/gropius-docs/rest/login-service/sync-ims-user-controller-link-ims-user-30"}},f={},I=[{value:"Request",id:"request",level:2}],b={toc:I},S="wrapper";function M(e){let{components:t,...i}=e;return(0,n.kt)(S,(0,s.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get the IMS token for a given IMS user id"),(0,n.kt)(o(),{method:"get",path:"/auth/api/sync/get-ims-token/{id}",mdxType:"MethodEndpoint"}),(0,n.kt)(d(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Get the IMS token for a given IMS user id"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The neo4j id of the IMS user",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(g.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(u.Z,{collapsible:!1,name:"token",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"}),(0,n.kt)(u.Z,{collapsible:!1,name:"isImsUserKnown",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(u.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0},mdxType:"SchemaItem"})))),(0,n.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "token": "string",\n  "isImsUserKnown": true,\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(h.default,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Missing query parameter imsUser or failed to load referenced IMS user")),(0,n.kt)("div",null))))))}M.isMDXComponent=!0}}]);