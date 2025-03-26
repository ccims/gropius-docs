"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1786],{234313:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>I,frontMatter:()=>y,metadata:()=>b,toc:()=>k});var n=i(487462),a=(i(667294),i(603905)),s=i(258219),l=(i(162316),i(580667)),r=i.n(l),o=i(524228),c=i.n(o),d=i(909487),p=i(241429),u=i(905397),h=i(504667),m=i(809472),g=i(685162);const y={id:"auth-client-controller-edit-auth-client-23",title:"Edit existing auth client",description:"Updates the auth client with the given ID.",sidebar_label:"Edit existing auth client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_editAuthClient_23",description:"Updates the auth client with the given ID.\nOnly parameter given in the input will be changed.\n\nIf `redirectUrls` is given, it wil replace **all** previous URLs.\nMerging (if needed) needs to be done by the client.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client",schema:{format:"uuid",type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:"The name to set for the auth client.\n\nIf given, must be non empty"},redirectUrls:{description:"A list of url strings containing at least one url.\nThese are the URLs the oauth autorize endpoint will redirect back to\n\nDefaults to `[]` on create",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},isValid:{type:"boolean",description:"If given, sets the validity flag of the auth client.\n\nDefaults to `true` on create",example:!0},requiresSecret:{type:"boolean",description:"If given, setns the need for the client to authenticate using a secret\n\nDefaults to `true` on create",example:!1},validScopes:{type:"array",description:"The list of scopes that this client is allowed to request.\n\nDefaults to `[]` on create",example:["backend"],items:{type:"string",enum:["login","login-register","backend","auth"]}},clientCredentialFlowUser:{type:"string",description:"The user to use as subject for the client credential flow."}},title:"UpdateAuthClientInput"}}}},responses:{200:{description:"The auth client was successfully updated",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this client",example:"12345678-90ab-cdef-fedc-ab0987654321"},name:{type:"string",description:"The (human readable) name of the auth client to be able to keep track ofit.\n\nDoesn't need to be unique"},redirectUrls:{description:"The list of valid enpoints to redirect the user back to after authentication has finished.\n\nThe actual url to use is given in the authorize request and must be included in this list.\nIf none is given, the first one from this list will be used",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},isValid:{type:"boolean",description:"If this is `false` the client is not valid and no authorization, token, ... requests from it should be answered.",example:!0},requiresSecret:{type:"boolean",description:"If `true` requesting a token as this client requires the use\nof a client secret accoring to the oauth specification.\n\nIf `false` client secrets can be present and given but are not required",example:!1},validScopes:{description:"The list of scopes that this client is allowed to request.",type:"array",items:{type:"string",enum:["login","login-register","backend","auth"]}},isInternal:{type:"boolean",description:"If this client is editable.\nIf not, the client can not be changed or deleted.",default:!1}},required:["id","name","redirectUrls","isValid","requiresSecret","validScopes","isInternal"],title:"AuthClient"}}}},400:{description:"If the input data didn't match the schema"},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"put",path:"/auth/api/login/client/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{name:"string",redirectUrls:["https://example.com/oauth/callback?query=value"],isValid:!0,requiresSecret:!1,validScopes:["backend"],clientCredentialFlowUser:"string"},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Edit existing auth client",description:{content:"Updates the auth client with the given ID.\nOnly parameter given in the input will be changed.\n\nIf `redirectUrls` is given, it wil replace **all** previous URLs.\nMerging (if needed) needs to be done by the client.",type:"text/plain"},url:{path:["auth","api","login","client",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing auth client",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},f=void 0,b={unversionedId:"login-service/auth-client-controller-edit-auth-client-23",id:"login-service/auth-client-controller-edit-auth-client-23",title:"Edit existing auth client",description:"Updates the auth client with the given ID.",source:"@site/rest-docs/login-service/auth-client-controller-edit-auth-client-23.api.mdx",sourceDirName:"login-service",slug:"/login-service/auth-client-controller-edit-auth-client-23",permalink:"/gropius-docs/rest/login-service/auth-client-controller-edit-auth-client-23",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-client-controller-edit-auth-client-23",title:"Edit existing auth client",description:"Updates the auth client with the given ID.",sidebar_label:"Edit existing auth client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_editAuthClient_23",description:"Updates the auth client with the given ID.\nOnly parameter given in the input will be changed.\n\nIf `redirectUrls` is given, it wil replace **all** previous URLs.\nMerging (if needed) needs to be done by the client.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client",schema:{format:"uuid",type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:"The name to set for the auth client.\n\nIf given, must be non empty"},redirectUrls:{description:"A list of url strings containing at least one url.\nThese are the URLs the oauth autorize endpoint will redirect back to\n\nDefaults to `[]` on create",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},isValid:{type:"boolean",description:"If given, sets the validity flag of the auth client.\n\nDefaults to `true` on create",example:!0},requiresSecret:{type:"boolean",description:"If given, setns the need for the client to authenticate using a secret\n\nDefaults to `true` on create",example:!1},validScopes:{type:"array",description:"The list of scopes that this client is allowed to request.\n\nDefaults to `[]` on create",example:["backend"],items:{type:"string",enum:["login","login-register","backend","auth"]}},clientCredentialFlowUser:{type:"string",description:"The user to use as subject for the client credential flow."}},title:"UpdateAuthClientInput"}}}},responses:{200:{description:"The auth client was successfully updated",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this client",example:"12345678-90ab-cdef-fedc-ab0987654321"},name:{type:"string",description:"The (human readable) name of the auth client to be able to keep track ofit.\n\nDoesn't need to be unique"},redirectUrls:{description:"The list of valid enpoints to redirect the user back to after authentication has finished.\n\nThe actual url to use is given in the authorize request and must be included in this list.\nIf none is given, the first one from this list will be used",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},isValid:{type:"boolean",description:"If this is `false` the client is not valid and no authorization, token, ... requests from it should be answered.",example:!0},requiresSecret:{type:"boolean",description:"If `true` requesting a token as this client requires the use\nof a client secret accoring to the oauth specification.\n\nIf `false` client secrets can be present and given but are not required",example:!1},validScopes:{description:"The list of scopes that this client is allowed to request.",type:"array",items:{type:"string",enum:["login","login-register","backend","auth"]}},isInternal:{type:"boolean",description:"If this client is editable.\nIf not, the client can not be changed or deleted.",default:!1}},required:["id","name","redirectUrls","isValid","requiresSecret","validScopes","isInternal"],title:"AuthClient"}}}},400:{description:"If the input data didn't match the schema"},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"put",path:"/auth/api/login/client/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{name:"string",redirectUrls:["https://example.com/oauth/callback?query=value"],isValid:!0,requiresSecret:!1,validScopes:["backend"],clientCredentialFlowUser:"string"},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Edit existing auth client",description:{content:"Updates the auth client with the given ID.\nOnly parameter given in the input will be changed.\n\nIf `redirectUrls` is given, it wil replace **all** previous URLs.\nMerging (if needed) needs to be done by the client.",type:"text/plain"},url:{path:["auth","api","login","client",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing auth client",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Details of one auth client (incl. censored secrets)",permalink:"/gropius-docs/rest/login-service/auth-client-controller-get-one-auth-client-21"},next:{title:"Permanently delete existing auth client",permalink:"/gropius-docs/rest/login-service/auth-client-controller-delete-auth-client-24"}},v={},k=[{value:"Request",id:"request",level:2}],q={toc:k},x="wrapper";function I(e){let{components:t,...i}=e;return(0,a.kt)(x,(0,n.Z)({},q,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Edit existing auth client"),(0,a.kt)(r(),{method:"put",path:"/auth/api/login/client/{id}",mdxType:"MethodEndpoint"}),(0,a.kt)(c(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,a.kt)("p",null,"Updates the auth client with the given ID.\nOnly parameter given in the input will be changed."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectUrls")," is given, it wil replace ",(0,a.kt)("strong",{parentName:"p"},"all")," previous URLs.\nMerging (if needed) needs to be done by the client."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client",schema:{format:"uuid",type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)(d.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,a.kt)(g.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,a.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,a.kt)("strong",{className:"openapi-schema__required"},"required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(h.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name to set for the auth client.\n\nIf given, must be non empty"},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"redirectUrls",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"A list of url strings containing at least one url.\nThese are the URLs the oauth autorize endpoint will redirect back to\n\nDefaults to `[]` on create",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"isValid",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If given, sets the validity flag of the auth client.\n\nDefaults to `true` on create",example:!0},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"requiresSecret",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If given, setns the need for the client to authenticate using a secret\n\nDefaults to `true` on create",example:!1},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"validScopes",required:!1,schemaName:"string[]",qualifierMessage:"**Possible values:** [`login`, `login-register`, `backend`, `auth`]",schema:{type:"array",description:"The list of scopes that this client is allowed to request.\n\nDefaults to `[]` on create",example:["backend"],items:{type:"string",enum:["login","login-register","backend","auth"]}},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"clientCredentialFlowUser",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The user to use as subject for the client credential flow."},mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The auth client was successfully updated")),(0,a.kt)("div",null,(0,a.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(h.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique ID of this client",example:"12345678-90ab-cdef-fedc-ab0987654321"},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The (human readable) name of the auth client to be able to keep track ofit.\n\nDoesn't need to be unique"},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"redirectUrls",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"The list of valid enpoints to redirect the user back to after authentication has finished.\n\nThe actual url to use is given in the authorize request and must be included in this list.\nIf none is given, the first one from this list will be used",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"isValid",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If this is `false` the client is not valid and no authorization, token, ... requests from it should be answered.",example:!0},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"requiresSecret",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true` requesting a token as this client requires the use\nof a client secret accoring to the oauth specification.\n\nIf `false` client secrets can be present and given but are not required",example:!1},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"validScopes",required:!0,schemaName:"string[]",qualifierMessage:"**Possible values:** [`login`, `login-register`, `backend`, `auth`]",schema:{description:"The list of scopes that this client is allowed to request.",type:"array",items:{type:"string",enum:["login","login-register","backend","auth"]}},mdxType:"SchemaItem"}),(0,a.kt)(h.Z,{collapsible:!1,name:"isInternal",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If this client is editable.\nIf not, the client can not be changed or deleted.",default:!1},mdxType:"SchemaItem"})))),(0,a.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(u.Z,{responseExample:'{\n  "id": "12345678-90ab-cdef-fedc-ab0987654321",\n  "name": "string",\n  "redirectUrls": [\n    "https://example.com/oauth/callback?query=value"\n  ],\n  "isValid": true,\n  "requiresSecret": false,\n  "validScopes": [\n    "login"\n  ],\n  "isInternal": false\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(g.default,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"If the input data didn't match the schema")),(0,a.kt)("div",null)),(0,a.kt)(g.default,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"If no id was given or no auth client with the given id was found")),(0,a.kt)("div",null))))))}I.isMDXComponent=!0}}]);