"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80607],{578575:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>q,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var n=i(487462),s=(i(667294),i(603905)),a=i(258219),r=(i(162316),i(580667)),o=i.n(r),l=i(524228),c=i.n(l),d=i(909487),p=i(241429),u=i(905397),h=i(504667),m=i(809472),f=i(685162);const g={id:"auth-client-controller-get-one-auth-client-21",title:"Details of one auth client (incl. censored secrets)",description:"Gets one specific auth clients by its uuid.",sidebar_label:"Details of one auth client (incl. censored secrets)",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_getOneAuthClient_21",description:"Gets one specific auth clients by its uuid.\nThis will also include the list of censored client secrets (see GET /login/client/:id/clientSecret)\n\nNeeds admin permissions",parameters:[{name:"id",required:!0,in:"path",description:"The id string of an existing auth client to return",schema:{type:"string"}}],responses:{200:{description:"The auth client with the requested id",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this client",example:"12345678-90ab-cdef-fedc-ab0987654321"},redirectUrls:{description:"The list of valid enpoints to redirect the user back to after authentication has finished.\n\nThe actual url to use is given in the authorize request and must be included in this list.\nIf none is given, the first one from this list will be used",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},isValid:{type:"boolean",description:"If this is `false` the client is not valid and no authorization, token, ... requests from it should be answered.",example:!0},requiresSecret:{type:"boolean",description:"If `true` requesting a token as this client\nrequires the use of a client secret accoring to the oauth specification.\n\nIf `false` client secrets can be present and given but are not required",example:!1},censoredClientSecrets:{description:"A list of a representation of all client secrets.\n\nIncludes the fingerprint of the has of the secret as identifying field\nand a censored version (5 char prefix) of the original secret text for easier idenfication by users",type:"array",items:{type:"object",properties:{censored:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},fingerprint:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"}},required:["censored","fingerprint"],title:"CensoredClientSecret"}},clientCredentialFlowUser:{type:"string",description:"The Gropius UUID of the user to use as subject for the client credential flow."}},required:["id","redirectUrls","isValid","requiresSecret","censoredClientSecrets"],title:"GetAuthClientResponse"}}}},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/auth/api/login/client/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Details of one auth client (incl. censored secrets)",description:{content:"Gets one specific auth clients by its uuid.\nThis will also include the list of censored client secrets (see GET /login/client/:id/clientSecret)\n\nNeeds admin permissions",type:"text/plain"},url:{path:["auth","api","login","client",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The id string of an existing auth client to return",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},y=void 0,b={unversionedId:"login-service/auth-client-controller-get-one-auth-client-21",id:"login-service/auth-client-controller-get-one-auth-client-21",title:"Details of one auth client (incl. censored secrets)",description:"Gets one specific auth clients by its uuid.",source:"@site/rest-docs/login-service/auth-client-controller-get-one-auth-client-21.api.mdx",sourceDirName:"login-service",slug:"/login-service/auth-client-controller-get-one-auth-client-21",permalink:"/gropius-docs/rest/login-service/auth-client-controller-get-one-auth-client-21",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-client-controller-get-one-auth-client-21",title:"Details of one auth client (incl. censored secrets)",description:"Gets one specific auth clients by its uuid.",sidebar_label:"Details of one auth client (incl. censored secrets)",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_getOneAuthClient_21",description:"Gets one specific auth clients by its uuid.\nThis will also include the list of censored client secrets (see GET /login/client/:id/clientSecret)\n\nNeeds admin permissions",parameters:[{name:"id",required:!0,in:"path",description:"The id string of an existing auth client to return",schema:{type:"string"}}],responses:{200:{description:"The auth client with the requested id",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this client",example:"12345678-90ab-cdef-fedc-ab0987654321"},redirectUrls:{description:"The list of valid enpoints to redirect the user back to after authentication has finished.\n\nThe actual url to use is given in the authorize request and must be included in this list.\nIf none is given, the first one from this list will be used",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},isValid:{type:"boolean",description:"If this is `false` the client is not valid and no authorization, token, ... requests from it should be answered.",example:!0},requiresSecret:{type:"boolean",description:"If `true` requesting a token as this client\nrequires the use of a client secret accoring to the oauth specification.\n\nIf `false` client secrets can be present and given but are not required",example:!1},censoredClientSecrets:{description:"A list of a representation of all client secrets.\n\nIncludes the fingerprint of the has of the secret as identifying field\nand a censored version (5 char prefix) of the original secret text for easier idenfication by users",type:"array",items:{type:"object",properties:{censored:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},fingerprint:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"}},required:["censored","fingerprint"],title:"CensoredClientSecret"}},clientCredentialFlowUser:{type:"string",description:"The Gropius UUID of the user to use as subject for the client credential flow."}},required:["id","redirectUrls","isValid","requiresSecret","censoredClientSecrets"],title:"GetAuthClientResponse"}}}},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/auth/api/login/client/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Details of one auth client (incl. censored secrets)",description:{content:"Gets one specific auth clients by its uuid.\nThis will also include the list of censored client secrets (see GET /login/client/:id/clientSecret)\n\nNeeds admin permissions",type:"text/plain"},url:{path:["auth","api","login","client",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The id string of an existing auth client to return",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Create new auth client",permalink:"/gropius-docs/rest/login-service/auth-client-controller-create-new-auth-client-22"},next:{title:"Edit existing auth client",permalink:"/gropius-docs/rest/login-service/auth-client-controller-edit-auth-client-23"}},k={},v=[{value:"Request",id:"request",level:2}],T={toc:v},x="wrapper";function q(e){let{components:t,...i}=e;return(0,s.kt)(x,(0,n.Z)({},T,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Details of one auth client (incl. censored secrets)"),(0,s.kt)(o(),{method:"get",path:"/auth/api/login/client/{id}",mdxType:"MethodEndpoint"}),(0,s.kt)(c(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Gets one specific auth clients by its uuid.\nThis will also include the list of censored client secrets (see GET /login/client/:id/clientSecret)"),(0,s.kt)("p",null,"Needs admin permissions"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The id string of an existing auth client to return",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(f.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The auth client with the requested id")),(0,s.kt)("div",null,(0,s.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(f.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(f.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(h.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique ID of this client",example:"12345678-90ab-cdef-fedc-ab0987654321"},mdxType:"SchemaItem"}),(0,s.kt)(h.Z,{collapsible:!1,name:"redirectUrls",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"The list of valid enpoints to redirect the user back to after authentication has finished.\n\nThe actual url to use is given in the authorize request and must be included in this list.\nIf none is given, the first one from this list will be used",example:["https://example.com/oauth/callback?query=value"],type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)(h.Z,{collapsible:!1,name:"isValid",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If this is `false` the client is not valid and no authorization, token, ... requests from it should be answered.",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(h.Z,{collapsible:!1,name:"requiresSecret",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true` requesting a token as this client\nrequires the use of a client secret accoring to the oauth specification.\n\nIf `false` client secrets can be present and given but are not required",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(h.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"censoredClientSecrets"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A list of a representation of all client secrets."),(0,s.kt)("p",null,"Includes the fingerprint of the has of the secret as identifying field\nand a censored version (5 char prefix) of the original secret text for easier idenfication by users")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(h.Z,{collapsible:!1,name:"censored",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},mdxType:"SchemaItem"}),(0,s.kt)(h.Z,{collapsible:!1,name:"fingerprint",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(h.Z,{collapsible:!1,name:"clientCredentialFlowUser",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The Gropius UUID of the user to use as subject for the client credential flow."},mdxType:"SchemaItem"})))),(0,s.kt)(f.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(u.Z,{responseExample:'{\n  "id": "12345678-90ab-cdef-fedc-ab0987654321",\n  "redirectUrls": [\n    "https://example.com/oauth/callback?query=value"\n  ],\n  "isValid": true,\n  "requiresSecret": false,\n  "censoredClientSecrets": [\n    {\n      "censored": "1a2b3**********",\n      "fingerprint": "0123456789abcdef"\n    }\n  ],\n  "clientCredentialFlowUser": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(f.default,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"If no id was given or no auth client with the given id was found")),(0,s.kt)("div",null))))))}q.isMDXComponent=!0}}]);