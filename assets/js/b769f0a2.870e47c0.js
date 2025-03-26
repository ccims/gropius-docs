"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32509],{390506:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>I,frontMatter:()=>y,metadata:()=>k,toc:()=>b});var i=s(487462),r=(s(667294),s(603905)),n=s(258219),a=(s(162316),s(580667)),o=s.n(a),l=s(524228),p=s.n(l),m=s(909487),c=(s(241429),s(905397)),u=s(504667),d=s(809472),h=s(685162);const y={id:"sync-ims-user-controller-link-ims-user-30",title:"Link IMS users to the system",description:"Link IMS users to the system",sidebar_label:"Link IMS users to the system",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SyncImsUserController_linkIMSUser_30",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{imsUserIds:{description:"The username of the user in the IMS",type:"array",items:{type:"string"}}},required:["imsUserIds"],title:"LinkImsUsersInputDto"}}}},responses:{200:{description:"",content:{"application/json":{schema:{type:"object",properties:{operation:{type:"string",description:"A string representation of the operation performed",example:"self-register"},result:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},time:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2025-03-26T16:16:26.608Z"}},required:["operation","result","time"],title:"DefaultReturn"}}}}},tags:["sync-api"],security:[{"sync-api":[]}],description:"Link IMS users to the system",method:"put",path:"/auth/api/sync/link-ims-users",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{imsUserIds:["string"]},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Link IMS users to the system",description:{type:"text/plain"},url:{path:["auth","api","sync","link-ims-users"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},g=void 0,k={unversionedId:"login-service/sync-ims-user-controller-link-ims-user-30",id:"login-service/sync-ims-user-controller-link-ims-user-30",title:"Link IMS users to the system",description:"Link IMS users to the system",source:"@site/rest-docs/login-service/sync-ims-user-controller-link-ims-user-30.api.mdx",sourceDirName:"login-service",slug:"/login-service/sync-ims-user-controller-link-ims-user-30",permalink:"/gropius-docs/rest/login-service/sync-ims-user-controller-link-ims-user-30",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sync-ims-user-controller-link-ims-user-30",title:"Link IMS users to the system",description:"Link IMS users to the system",sidebar_label:"Link IMS users to the system",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SyncImsUserController_linkIMSUser_30",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{imsUserIds:{description:"The username of the user in the IMS",type:"array",items:{type:"string"}}},required:["imsUserIds"],title:"LinkImsUsersInputDto"}}}},responses:{200:{description:"",content:{"application/json":{schema:{type:"object",properties:{operation:{type:"string",description:"A string representation of the operation performed",example:"self-register"},result:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},time:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2025-03-26T16:16:26.608Z"}},required:["operation","result","time"],title:"DefaultReturn"}}}}},tags:["sync-api"],security:[{"sync-api":[]}],description:"Link IMS users to the system",method:"put",path:"/auth/api/sync/link-ims-users",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{imsUserIds:["string"]},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Link IMS users to the system",description:{type:"text/plain"},url:{path:["auth","api","sync","link-ims-users"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Get the IMS token for a given IMS user id",permalink:"/gropius-docs/rest/login-service/sync-ims-user-controller-get-ims-token-29"},next:{title:"Authorize OAuth endpoint",permalink:"/gropius-docs/rest/login-service/oauth-authorize-controller-authorize-endpoint-36"}},f={},b=[{value:"Request",id:"request",level:2}],v={toc:b},T="wrapper";function I(e){let{components:t,...s}=e;return(0,r.kt)(T,(0,i.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Link IMS users to the system"),(0,r.kt)(o(),{method:"put",path:"/auth/api/sync/link-ims-users",mdxType:"MethodEndpoint"}),(0,r.kt)(p(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"Link IMS users to the system"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,r.kt)(h.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,r.kt)("strong",{className:"openapi-schema__required"},"required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(u.Z,{collapsible:!1,name:"imsUserIds",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"The username of the user in the IMS",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null),(0,r.kt)("div",null,(0,r.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(u.Z,{collapsible:!1,name:"operation",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A string representation of the operation performed",example:"self-register"},mdxType:"SchemaItem"}),(0,r.kt)(u.Z,{collapsible:!1,name:"result",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`success`, `failed`]",schema:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(u.Z,{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2025-03-26T16:16:26.608Z"},mdxType:"SchemaItem"})))),(0,r.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(c.Z,{responseExample:'{\n  "operation": "self-register",\n  "result": "success",\n  "time": "2025-03-26T16:18:23.456Z"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}I.isMDXComponent=!0}}]);