"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40665],{558626:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>L,frontMatter:()=>f,metadata:()=>k,toc:()=>v});var n=i(487462),a=(i(667294),i(603905)),s=i(258219),o=(i(162316),i(580667)),r=i.n(o),l=i(524228),d=i.n(l),u=i(909487),p=i(241429),c=i(905397),g=i(504667),m=i(809472),h=i(685162);const f={id:"users-controller-get-login-data-for-user-7",title:"List all loginData of one user",description:"Gets the list of all login data of a single user specified by id.",sidebar_label:"List all loginData of one user",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"UsersController_getLoginDataForUser_7",description:"Gets the list of all login data of a single user specified by id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of the existing user to get the loginData for or 'self'",schema:{format:"uuid",type:"string"}}],responses:{200:{description:"If user exixts, login data for the user with the specified id",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The unique ID of this login data",example:"12345678-90ab-cdef-fedc-ab0987654321"},state:{description:"The state this authentication is in.\n\nRules:\n- Only UserLoginData in state {@link LoginState.VALID} may be used for login and retrieving an access token.\n- Only UserLoginData in state {@link LoginState.WAITING_FOR_REGISTER} may be used for registration or linking.\n- UserLoginData in state {@link LoginState.BLOCKED} cannot be used for anything",example:"VALID",enum:["WAITING_FOR_REGISTER","VALID","BLOCKED"],type:"string"},expires:{format:"date-time",type:"string",nullable:!0,description:"If not `null`, this authentication should be considered *invalid* on any date+time AFTER this.\nThis is to ensure created UserLoginData, that are not used for registration\nor linking in time, are not kept forever.\n\nIf `null`, the authentication should not expire by date."}},required:["id","state","expires"],title:"UserLoginData"}}}}},401:{description:"If no requesting self and not admin or if login is invalid"},404:{description:"If no user with the specified id could be found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/auth/api/login/user/{id}/login-data",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"List all loginData of one user",description:{content:"Gets the list of all login data of a single user specified by id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",type:"text/plain"},url:{path:["auth","api","login","user",":id","login-data"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of the existing user to get the loginData for or 'self'",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},y=void 0,k={unversionedId:"login-service/users-controller-get-login-data-for-user-7",id:"login-service/users-controller-get-login-data-for-user-7",title:"List all loginData of one user",description:"Gets the list of all login data of a single user specified by id.",source:"@site/rest-docs/login-service/users-controller-get-login-data-for-user-7.api.mdx",sourceDirName:"login-service",slug:"/login-service/users-controller-get-login-data-for-user-7",permalink:"/gropius-docs/rest/login-service/users-controller-get-login-data-for-user-7",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"users-controller-get-login-data-for-user-7",title:"List all loginData of one user",description:"Gets the list of all login data of a single user specified by id.",sidebar_label:"List all loginData of one user",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"UsersController_getLoginDataForUser_7",description:"Gets the list of all login data of a single user specified by id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of the existing user to get the loginData for or 'self'",schema:{format:"uuid",type:"string"}}],responses:{200:{description:"If user exixts, login data for the user with the specified id",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The unique ID of this login data",example:"12345678-90ab-cdef-fedc-ab0987654321"},state:{description:"The state this authentication is in.\n\nRules:\n- Only UserLoginData in state {@link LoginState.VALID} may be used for login and retrieving an access token.\n- Only UserLoginData in state {@link LoginState.WAITING_FOR_REGISTER} may be used for registration or linking.\n- UserLoginData in state {@link LoginState.BLOCKED} cannot be used for anything",example:"VALID",enum:["WAITING_FOR_REGISTER","VALID","BLOCKED"],type:"string"},expires:{format:"date-time",type:"string",nullable:!0,description:"If not `null`, this authentication should be considered *invalid* on any date+time AFTER this.\nThis is to ensure created UserLoginData, that are not used for registration\nor linking in time, are not kept forever.\n\nIf `null`, the authentication should not expire by date."}},required:["id","state","expires"],title:"UserLoginData"}}}}},401:{description:"If no requesting self and not admin or if login is invalid"},404:{description:"If no user with the specified id could be found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/auth/api/login/user/{id}/login-data",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"List all loginData of one user",description:{content:"Gets the list of all login data of a single user specified by id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",type:"text/plain"},url:{path:["auth","api","login","user",":id","login-data"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of the existing user to get the loginData for or 'self'",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Get any user object by id",permalink:"/gropius-docs/rest/login-service/users-controller-get-one-user-5"},next:{title:"List all strategies/strategy types",permalink:"/gropius-docs/rest/login-service/strategies-controller-get-all-strategy-types-8"}},b={},v=[{value:"Request",id:"request",level:2}],I={toc:v},T="wrapper";function L(e){let{components:t,...i}=e;return(0,a.kt)(T,(0,n.Z)({},I,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"List all loginData of one user"),(0,a.kt)(r(),{method:"get",path:"/auth/api/login/user/{id}/login-data",mdxType:"MethodEndpoint"}),(0,a.kt)(d(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Gets the list of all login data of a single user specified by id."),(0,a.kt)("p",null,"Needs admin permission for any user other than the one sending the request\n(equivalen to self query)."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The uuid string of the existing user to get the loginData for or 'self'",schema:{format:"uuid",type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"If user exixts, login data for the user with the specified id")),(0,a.kt)("div",null,(0,a.kt)(u.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(g.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique ID of this login data",example:"12345678-90ab-cdef-fedc-ab0987654321"},mdxType:"SchemaItem"}),(0,a.kt)(g.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`WAITING_FOR_REGISTER`, `VALID`, `BLOCKED`]",schema:{description:"The state this authentication is in.\n\nRules:\n- Only UserLoginData in state {@link LoginState.VALID} may be used for login and retrieving an access token.\n- Only UserLoginData in state {@link LoginState.WAITING_FOR_REGISTER} may be used for registration or linking.\n- UserLoginData in state {@link LoginState.BLOCKED} cannot be used for anything",example:"VALID",enum:["WAITING_FOR_REGISTER","VALID","BLOCKED"],type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(g.Z,{collapsible:!1,name:"expires",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",nullable:!0,description:"If not `null`, this authentication should be considered *invalid* on any date+time AFTER this.\nThis is to ensure created UserLoginData, that are not used for registration\nor linking in time, are not kept forever.\n\nIf `null`, the authentication should not expire by date."},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'[\n  {\n    "id": "12345678-90ab-cdef-fedc-ab0987654321",\n    "state": "VALID",\n    "expires": "2025-03-26T16:18:23.443Z"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"If no requesting self and not admin or if login is invalid")),(0,a.kt)("div",null)),(0,a.kt)(h.default,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"If no user with the specified id could be found")),(0,a.kt)("div",null))))))}L.isMDXComponent=!0}}]);