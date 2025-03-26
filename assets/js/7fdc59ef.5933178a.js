"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62754],{586873:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>f,frontMatter:()=>h,metadata:()=>u,toc:()=>y});var a=i(487462),n=(i(667294),i(603905)),r=i(258219),o=(i(162316),i(580667)),l=i.n(o),s=i(524228),c=i.n(s),d=(i(909487),i(241429)),p=(i(905397),i(504667),i(809472),i(685162));const h={id:"auth-endpoints-controller-login-strategy-callback-32",title:"Redirect/Callback endpoint for a strategy instance",description:"Redirect/Callback endpoint for strategy with the given id.",sidebar_label:"Redirect/Callback endpoint for a strategy instance",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthEndpointsController_loginStrategyCallback_32",description:"Redirect/Callback endpoint for strategy with the given id.\n\nNot meant to be called by a client.\nMeant as callback for oauth flows started by the login-service",parameters:[{name:"id",required:!0,in:"path",description:"The id of the strategy instance which initiated the funcation calling the callback.",schema:{}}],responses:{200:{description:""}},tags:["internal-api"],method:"get",path:"/auth/api/internal/auth/callback/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Redirect/Callback endpoint for a strategy instance",description:{content:"Redirect/Callback endpoint for strategy with the given id.\n\nNot meant to be called by a client.\nMeant as callback for oauth flows started by the login-service",type:"text/plain"},url:{path:["auth","api","internal","auth","callback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The id of the strategy instance which initiated the funcation calling the callback.",type:"text/plain"},type:"any",value:"",key:"id"}]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},g=void 0,u={unversionedId:"login-service/auth-endpoints-controller-login-strategy-callback-32",id:"login-service/auth-endpoints-controller-login-strategy-callback-32",title:"Redirect/Callback endpoint for a strategy instance",description:"Redirect/Callback endpoint for strategy with the given id.",source:"@site/rest-docs/login-service/auth-endpoints-controller-login-strategy-callback-32.api.mdx",sourceDirName:"login-service",slug:"/login-service/auth-endpoints-controller-login-strategy-callback-32",permalink:"/gropius-docs/rest/login-service/auth-endpoints-controller-login-strategy-callback-32",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-endpoints-controller-login-strategy-callback-32",title:"Redirect/Callback endpoint for a strategy instance",description:"Redirect/Callback endpoint for strategy with the given id.",sidebar_label:"Redirect/Callback endpoint for a strategy instance",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthEndpointsController_loginStrategyCallback_32",description:"Redirect/Callback endpoint for strategy with the given id.\n\nNot meant to be called by a client.\nMeant as callback for oauth flows started by the login-service",parameters:[{name:"id",required:!0,in:"path",description:"The id of the strategy instance which initiated the funcation calling the callback.",schema:{}}],responses:{200:{description:""}},tags:["internal-api"],method:"get",path:"/auth/api/internal/auth/callback/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Redirect/Callback endpoint for a strategy instance",description:{content:"Redirect/Callback endpoint for strategy with the given id.\n\nNot meant to be called by a client.\nMeant as callback for oauth flows started by the login-service",type:"text/plain"},url:{path:["auth","api","internal","auth","callback",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The id of the strategy instance which initiated the funcation calling the callback.",type:"text/plain"},type:"any",value:"",key:"id"}]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Authorize endpoint for a strategy instance",permalink:"/gropius-docs/rest/login-service/auth-endpoints-controller-login-strategy-redirect-31"},next:{title:"Submit endpoint for a strategy instance",permalink:"/gropius-docs/rest/login-service/auth-endpoints-controller-login-strategy-submit-33"}},b={},y=[{value:"Request",id:"request",level:2}],k={toc:y},m="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Redirect/Callback endpoint for a strategy instance"),(0,n.kt)(l(),{method:"get",path:"/auth/api/internal/auth/callback/{id}",mdxType:"MethodEndpoint"}),(0,n.kt)(c(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Redirect/Callback endpoint for strategy with the given id."),(0,n.kt)("p",null,"Not meant to be called by a client.\nMeant as callback for oauth flows started by the login-service"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The id of the strategy instance which initiated the funcation calling the callback.",schema:{}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.default,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null))))))}f.isMDXComponent=!0}}]);