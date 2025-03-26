"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76727],{639715:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=i(487462),r=(i(667294),i(603905));const a={id:"api_oauth_encryption_service.EncryptionService",title:"Class: EncryptionService",sidebar_label:"EncryptionService",custom_edit_url:null},p=void 0,l={unversionedId:"login-service-api/classes/api_oauth_encryption_service.EncryptionService",id:"login-service-api/classes/api_oauth_encryption_service.EncryptionService",title:"Class: EncryptionService",description:"api-oauth/encryption.service.EncryptionService",source:"@site/docs/login-service-api/classes/api_oauth_encryption_service.EncryptionService.md",sourceDirName:"login-service-api/classes",slug:"/login-service-api/classes/api_oauth_encryption_service.EncryptionService",permalink:"/gropius-docs/login-service-api/classes/api_oauth_encryption_service.EncryptionService",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_oauth_encryption_service.EncryptionService",title:"Class: EncryptionService",sidebar_label:"EncryptionService",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"OAuthTokenResponseDto",permalink:"/gropius-docs/login-service-api/classes/api_oauth_dto_oauth_token_response_dto.OAuthTokenResponseDto"},next:{title:"ErrorHandlerMiddleware",permalink:"/gropius-docs/login-service-api/classes/api_oauth_error_handler_middleware.ErrorHandlerMiddleware"}},s={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"privateKey",id:"privatekey",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"publicKey",id:"publickey",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"decrypt",id:"decrypt",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"encrypt",id:"encrypt",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:o},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/gropius-docs/login-service-api/modules/api_oauth_encryption_service"},"api-oauth/encryption.service"),".EncryptionService"),(0,r.kt)("p",null,"Service to encrypt and decrypt data using the LOGIN_SPECIFIC key pair"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new EncryptionService"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"privatekey"},"privateKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"privateKey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyObject")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-login-service/blob/9da669b/backend/src/api-oauth/encryption.service.ts#L9"},"gropius-login-service/backend/src/api-oauth/encryption.service.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"publickey"},"publicKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"publicKey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyObject")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-login-service/blob/9da669b/backend/src/api-oauth/encryption.service.ts#L11"},"gropius-login-service/backend/src/api-oauth/encryption.service.ts:11")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"decrypt"},"decrypt"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"decrypt"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Decrypts the given data using the LOGIN_SPECIFIC private key"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to decrypt")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The decrypted data"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-login-service/blob/9da669b/backend/src/api-oauth/encryption.service.ts#L29"},"gropius-login-service/backend/src/api-oauth/encryption.service.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"encrypt"},"encrypt"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"encrypt"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Encrypts the given data using the LOGIN_SPECIFIC public key"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to encrypt")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The encrypted data"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-login-service/blob/9da669b/backend/src/api-oauth/encryption.service.ts#L19"},"gropius-login-service/backend/src/api-oauth/encryption.service.ts:19")))}u.isMDXComponent=!0}}]);