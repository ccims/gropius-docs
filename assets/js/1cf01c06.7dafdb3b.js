"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96068],{625718:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(487462),a=(i(667294),i(603905));const r={sidebar_position:3,slug:"/login"},s="Login Service",o={unversionedId:"docs/login",id:"docs/login",title:"Login Service",description:"The following doc page uses the defined terminology",source:"@site/docs/docs/login.mdx",sourceDirName:"docs",slug:"/login",permalink:"/gropius-docs/login",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/login"},sidebar:"docSidebar",previous:{title:"Jira sync",permalink:"/gropius-docs/jira-sync"},next:{title:"How-To Login-Service (or rather Hot-To use the Gropius Backend at all)",permalink:"/gropius-docs/how-to-login"}},l={},c=[{value:"Strategies",id:"strategies",level:2},{value:"Strategies with sync capability",id:"strategies-with-sync-capability",level:3},{value:"Strategies allowing implicit signup",id:"strategies-allowing-implicit-signup",level:3},{value:"<code>userpass</code>-Strategy",id:"userpass-strategy",level:3},{value:"<code>github</code>-Strategy",id:"github-strategy",level:3},{value:"Authentication flow types",id:"authentication-flow-types",level:2},{value:"Post Credentials Flow",id:"post-credentials-flow",level:3},{value:"Redirect Flow",id:"redirect-flow",level:3},{value:"Refresh Token Flow",id:"refresh-token-flow",level:3},{value:"Registration",id:"registration",level:2},{value:"Self Register",id:"self-register",level:3},{value:"Self Link",id:"self-link",level:3},{value:"Admin Link",id:"admin-link",level:3},{value:"Terminology",id:"terminology",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"login-service"},"Login Service"),(0,a.kt)("p",null,"The following doc page uses ",(0,a.kt)("a",{parentName:"p",href:"#Terminology"},"the defined terminology")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJS")," service providing authentication and login services for the gropius-backend."),(0,a.kt)("p",null,"It allows using different authentication providers (called ",(0,a.kt)("em",{parentName:"p"},'"strategies"'),") to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authenticate a user for usage of the gropius backend and/or"),(0,a.kt)("li",{parentName:"ul"},"Let the user provide credentials to gropius for usage in the sync")),(0,a.kt)("p",null,"The service is designed in a way that adding a new strategy, i.e. a new way in which the user can authenticate, takes as few lines of code as possible."),(0,a.kt)("h2",{id:"strategies"},"Strategies"),(0,a.kt)("p",null,"A strategy is defined by the following capabilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Performing the authentication"),(0,a.kt)("li",{parentName:"ul"},"Checking the configuration of a strategy instance")),(0,a.kt)("p",null,"Strategies are defined as service classes (which can be part of the main code base or provided by separate modules)."),(0,a.kt)("p",null,"One strategy corresponds to one ",(0,a.kt)("em",{parentName:"p"},"type")," of authentication (e.g. GitHub OAuth, OpenID connect). Of this type ",(0,a.kt)("em",{parentName:"p"},'"strategy instances"')," ca be created that represent one actual authentication provider (e.g. a specific GitHub Enterprise instance, Microsoft Azure OpenID connect).\nInstances can be created at runtime by instanciating one defined strategy and providing all required configuration (e.g. for GitHub OAuth the OAuth Endpoints and client credentials)."),(0,a.kt)("p",null,"Once a user authenticates using a strategy instance, this authentication creates ",(0,a.kt)("em",{parentName:"p"},'"login data"'),', representing the association of the authenticated gropius-user and the strategy instance. It contains all data required to "recognize" a user on following authentications.\nA single login/authentication event for one login data is called a ',(0,a.kt)("em",{parentName:"p"},'"active login"')),(0,a.kt)("p",null,"The currently available strategies are all based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.passportjs.org/"},"passportjs")," to handle the retrieval of credentials. This reduces the needed code for each strategy even further."),(0,a.kt)("h3",{id:"strategies-with-sync-capability"},"Strategies with sync capability"),(0,a.kt)("p",null,"A strategy has the sync capability, if an instance of it could be able to provide credentials for authenticated users that can be used in the sync process to impersonate the user in an IMS."),(0,a.kt)("p",null,"In that case, the strategy corresponds to a specific IMSTemplate in the gropius-backend as it references a type of IMS.\nThe strategy instance represents any number of IMSs of the IMSTemplate of the strategy. Even if multiple IMSs referencing the same real issue management system (e.g. a specific GitHub Enterprise) exist in the backend, only one strategy instance will/should be present in the login service.\nOne login data (authentication of a user using a strategy instance) maps to all IMSUser objects in the backend that also represent that user in any IMS object corresponding to the single actual issue management system."),(0,a.kt)("p",null,"Strategies that have the sync capability must provide the following additional functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide the credentials for the sync given login data"),(0,a.kt)("li",{parentName:"ul"},"Set required templated field values that an IMS needs to match in order to be considered an IMS that represents the same issue management system as the strategy instance"),(0,a.kt)("li",{parentName:"ul"},"Set required templated field values that an IMSUser needs to match for it to belong to a given login data"),(0,a.kt)("li",{parentName:"ul"},"Set required data contained in the login data for it to be considered a match for a given IMSUser (opposite direction to previous)")),(0,a.kt)("h3",{id:"strategies-allowing-implicit-signup"},"Strategies allowing implicit signup"),(0,a.kt)("p",null,"Strategies can choose to allow implicit signup. This an authentication to automatically be treated as registration even if it was only intended as a login if no user was found for the authentication"),(0,a.kt)("h3",{id:"userpass-strategy"},(0,a.kt)("inlineCode",{parentName:"h3"},"userpass"),"-Strategy"),(0,a.kt)("p",null,"Basic username password strategy.\nProperties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can login users to access the backend"),(0,a.kt)("li",{parentName:"ul"},"Does NOT need a redirect auth flow"),(0,a.kt)("li",{parentName:"ul"},"Does NOT allow implicit signup")),(0,a.kt)("h3",{id:"github-strategy"},(0,a.kt)("inlineCode",{parentName:"h3"},"github"),"-Strategy"),(0,a.kt)("p",null,"Basic username password strategy.\nProperties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can login users to access the backend"),(0,a.kt)("li",{parentName:"ul"},"Lets users provide credentials to the GitHub Instance referenced by the respective strategy instance"),(0,a.kt)("li",{parentName:"ul"},"DOES need a redirect auth flow"),(0,a.kt)("li",{parentName:"ul"},"Does allow implicit signup")),(0,a.kt)("h2",{id:"authentication-flow-types"},"Authentication flow types"),(0,a.kt)("p",null,"The service provides two types of authentication flow. Different strategies may require one of the two or allow both.\nAdditionally the refresh token flow exists to aquire a new valid access token using a refresh token as the access tokens have a limited life-span."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"NOTE"),": All authentication interaction is compatible with the OAuth 2.0 specification (",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749"},"RFC 6749"),"). Knowledge of the functioning principle as well as required request types, headers, parameters etc. is expected in the following.")),(0,a.kt)("p",null,"Both flow types support three modes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"login")," (default if none given): Login using authentication to an existing user"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"register"),": Authenticate to create a new user or add auth method to existing user"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"register-sync"),": Authenticate to create a new user or add auth method to existing user. (If supported by strategy) Asks the user for credentials that also allow sync.")),(0,a.kt)("h3",{id:"post-credentials-flow"},"Post Credentials Flow"),(0,a.kt)("p",null,"Alias password-Flow."),(0,a.kt)("p",null,"This flow is (depending on the strategy) either identical or closely related to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749#section-4.3"},"Resource Owner Password Credentials Grant")," of OAuth 2.0."),(0,a.kt)("p",null,"The token-endpoint of a specific strategy instance for posting the credentials to is ",(0,a.kt)("inlineCode",{parentName:"p"},"/authenticate/oauth/[STRATEGY_INSTANCE_ID]/token/[MODE]"),"."),(0,a.kt)("p",null,"The diagram below shows an example login flow using an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"userpass"),"-strategy with the id ",(0,a.kt)("inlineCode",{parentName:"p"},":id"),":"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    participant C as Client-App\n    participant LS as Login-Server\n    \n    C->>+LS: POST /authenticate/oauth/:id/token/login\n    LS--\x3e>-C: (access_token, refresh_token) to Gropius"}),(0,a.kt)("h3",{id:"redirect-flow"},"Redirect Flow"),(0,a.kt)("p",null,"This flow is the default flow for an OAuth authentication. The user is redirected to an authorization endpoint where all identity verification is done and is then redirected back to the client application including a code to retrieve the access token."),(0,a.kt)("p",null,"The relevant endpoints are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authorization endpoint: ",(0,a.kt)("inlineCode",{parentName:"li"},"/authenticate/oauth/[STRATEGY_INSTANCE_ID]/authorize/[MODE]")),(0,a.kt)("li",{parentName:"ul"},"Token endpoint: ",(0,a.kt)("inlineCode",{parentName:"li"},"/authenticate/oauth/[STRATEGY_INSTANCE_ID]/token/[MODE]"))),(0,a.kt)("p",null,"The diagram below shows an example login flow using an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"github"),"-strategy with the id ",(0,a.kt)("inlineCode",{parentName:"p"},":id"),":"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    participant C as Client-App\n    participant LS as Login-Server\n    participant A as Authentication-Provider\n    \n    C->>C: 302 Redirect\n    C->>+LS: Initiate Gropius OAuth redirect flow<br>GET /authenticate/oauth/:id/authorize/login?client_id=[CLIENT_ID]\n    LS--\x3e>-C: 302 Redirect to 3rd party auth provider\n    C->>+A: Initiate 3rd party OAuth flow<br>GET https://github.com/login/oauth/authorize?[OAUTH_DATA]\n    A->>C: Ask for credentials\n    C->>C: User enters credentials\n    C->>A: Send credentials back\n    A--\x3e>-C: 302 Redirect\n    C->>+LS: GET /authenticate/oauth/:id/callback?[CALLBACK_DATA]\n    LS->>+A: POST https://github.com/login/oauth/access_token?[TOKEN_DATA]\n    A--\x3e>-LS: (access_token, refresh_token) to GitHub<br>Finish 3rd party OAuth flow\n    LS--\x3e>-C: 302 Redirect back to [FRONTEND_URI]?code=[CODE]\n    C->>C: Load frontend,<br>process returned code \n    C->>+LS: POST /authenticate/oauth/:id/token<br>Request containing client credentials and [CODE]\n    LS--\x3e>-C: (access_token, refresh_token) to Gropius<br>Finish gropius redirect OAuth flow"}),(0,a.kt)("h3",{id:"refresh-token-flow"},"Refresh Token Flow"),(0,a.kt)("p",null,"This flow works exactly as specified in ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749#section-6"},"Refreshing an Access Token of OAuth 2.0"),"."),(0,a.kt)("p",null,"The used token endpoint is ",(0,a.kt)("inlineCode",{parentName:"p"},"/authenticate/oauth/token")),(0,a.kt)("h2",{id:"registration"},"Registration"),(0,a.kt)("p",null,"To register a user must first provide the credentials one wishes to use to log in using either the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"register-sync")," modes (or a strategy with implicit signup in the ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," mode).\nThis provides a registration token as result (access token with scope ",(0,a.kt)("inlineCode",{parentName:"p"},"login-register"),") which must be used within the set time limit to perform one of the following actions:"),(0,a.kt)("h3",{id:"self-register"},"Self Register"),(0,a.kt)("p",null,"Posting all required data to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login/registration/self-register")," and providing a registration token creates a new gropius user account."),(0,a.kt)("p",null,"The client can then exchange its refresh token for a access token with a scope that includes the backend.\nThe user can in future also use this authentication to login and/or sync (depending on strategy support)"),(0,a.kt)("p",null,"A self register flow using a ",(0,a.kt)("inlineCode",{parentName:"p"},"userpass")," strategy instance could look like this:"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    participant C as Client-App\n    participant LS as Login-Server\n    participant B as Gropius-Backend\n    \n    C->>+LS: POST /authenticate/oauth/:id/token/register(-sync)\n    LS--\x3e>-C: (access_token, refresh_token) for registration\n    C->>+LS: POST /login/registration/self-register<br>Request including token and user data\n    LS->>+B: Create new GropiusUser\n    B--\x3e>-LS: Created GropiusUser\n    opt Strategy supports sync\n    LS->>+B: Get all IMSUser objects<br>with specific templated values\n    B--\x3e>-LS: List of IMSUser objects\n    LS->>+B: Link created GropiusUser and IMSUsers\n    B--\x3e>-LS: \n    end\n    LS--\x3e>-C: Registration successful"}),(0,a.kt)("h3",{id:"self-link"},"Self Link"),(0,a.kt)("p",null,"Posting the obtained registration token to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login/registration/self-link")," while being authorized using a previously obtained valid access token with scope \xecncluding ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," will attach the authentication that is connected to the registration token to the same user account that is currently authorized."),(0,a.kt)("p",null,"The user can now use this authentication to login and/or sync (depending on strategy support)"),(0,a.kt)("h3",{id:"admin-link"},"Admin Link"),(0,a.kt)("p",null,"Posting the obtained registration token as well as a user-id to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login/registration/admin-link")," while being authorized as admin user will link the authentication of the registration token to the given user account.\nThat way an administrator can link authentication to other users (e.g. change their password)"),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authentication:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The prove of identity of a user"))),(0,a.kt)("li",{parentName:"ul"},"(3rd party) Authentication provider:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A service that provides prove of a users identity to another service/application"))),(0,a.kt)("li",{parentName:"ul"},"Registration:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The first initial time a user provides authentication to the login-service with the intent to create a user account or add a new authentication method to an existing account"))),(0,a.kt)("li",{parentName:"ul"},"Login:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the user provides authentication with the intent to obtain access to the gropius system using an existing user account")))))}d.isMDXComponent=!0}}]);