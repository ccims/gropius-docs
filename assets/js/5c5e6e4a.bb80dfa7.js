"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39174],{797601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=a(487462),n=(a(667294),a(603905));const s={id:"api_internal_check_auth_access_token_guard.CheckAuthAccessTokenGuard",title:"Class: CheckAuthAccessTokenGuard",sidebar_label:"CheckAuthAccessTokenGuard",custom_edit_url:null},i=void 0,c={unversionedId:"login-service-api/classes/api_internal_check_auth_access_token_guard.CheckAuthAccessTokenGuard",id:"login-service-api/classes/api_internal_check_auth_access_token_guard.CheckAuthAccessTokenGuard",title:"Class: CheckAuthAccessTokenGuard",description:"api-internal/check-auth-access-token.guard.CheckAuthAccessTokenGuard",source:"@site/docs/login-service-api/classes/api_internal_check_auth_access_token_guard.CheckAuthAccessTokenGuard.md",sourceDirName:"login-service-api/classes",slug:"/login-service-api/classes/api_internal_check_auth_access_token_guard.CheckAuthAccessTokenGuard",permalink:"/gropius-docs/login-service-api/classes/api_internal_check_auth_access_token_guard.CheckAuthAccessTokenGuard",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_internal_check_auth_access_token_guard.CheckAuthAccessTokenGuard",title:"Class: CheckAuthAccessTokenGuard",sidebar_label:"CheckAuthAccessTokenGuard",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"AuthRegisterMiddleware",permalink:"/gropius-docs/login-service-api/classes/api_internal_auth_register_middleware.AuthRegisterMiddleware"},next:{title:"SelfRegisterUserInput",permalink:"/gropius-docs/login-service-api/classes/api_internal_dto_self_register_user_input_dto.SelfRegisterUserInput"}},l={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"canActivate",id:"canactivate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:o},k="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/gropius-docs/login-service-api/modules/api_internal_check_auth_access_token_guard"},"api-internal/check-auth-access-token.guard"),".CheckAuthAccessTokenGuard"),(0,n.kt)("p",null,"Guard for checking the presence of an access token in the request.\nIf needed, checks for admin permissions of the user."),(0,n.kt)("p",null,"Used with ",(0,n.kt)("inlineCode",{parentName:"p"},"@UseGuards(CheckAuthAccessTokenGuard)")),(0,n.kt)("p",null,'The access token is expected in the "Authorization" header, prefixed with "Bearer ".\nNot providing a token, a token without prefix or an invalid token will result in a 401 Unauthorized response.'),(0,n.kt)("p",null,"Once access token (and admin permission) were verified sucessfully,\nthe logged in user is written to the request state object"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/gropius-docs/login-service-api/classes/util_CheckAccessTokenGuard.CheckAccessTokenGuard"},(0,n.kt)("inlineCode",{parentName:"a"},"CheckAccessTokenGuard"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"CheckAuthAccessTokenGuard"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new CheckAuthAccessTokenGuard"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"tokenService"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"reflector"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"backendUserService"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tokenService")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/gropius-docs/login-service-api/classes/backend_services_token_service.TokenService"},(0,n.kt)("inlineCode",{parentName:"a"},"TokenService")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"reflector")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Reflector"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"backendUserService")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/gropius-docs/login-service-api/classes/backend_services_backend_user_service.BackendUserService"},(0,n.kt)("inlineCode",{parentName:"a"},"BackendUserService")))))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/gropius-docs/login-service-api/classes/util_CheckAccessTokenGuard.CheckAccessTokenGuard"},"CheckAccessTokenGuard"),".",(0,n.kt)("a",{parentName:"p",href:"/gropius-docs/login-service-api/classes/util_CheckAccessTokenGuard.CheckAccessTokenGuard#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-login-service/blob/9da669b/backend/src/api-internal/check-auth-access-token.guard.ts#L21"},"gropius-login-service/backend/src/api-internal/check-auth-access-token.guard.ts:21")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"canactivate"},"canActivate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"canActivate"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"context")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ExecutionContext"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/gropius-docs/login-service-api/classes/util_CheckAccessTokenGuard.CheckAccessTokenGuard"},"CheckAccessTokenGuard"),".",(0,n.kt)("a",{parentName:"p",href:"/gropius-docs/login-service-api/classes/util_CheckAccessTokenGuard.CheckAccessTokenGuard#canactivate"},"canActivate")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-login-service/blob/9da669b/backend/src/util/CheckAccessTokenGuard.ts#L30"},"gropius-login-service/backend/src/util/CheckAccessTokenGuard.ts:30")))}u.isMDXComponent=!0}}]);