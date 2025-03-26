"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68970],{224102:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>b});var n=i(487462),a=i(667294),l=i(603905);const r={id:"trackable-permission-filter-input",title:"TrackablePermissionFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,s={unversionedId:"graphql/api-public/inputs/trackable-permission-filter-input",id:"graphql/api-public/inputs/trackable-permission-filter-input",title:"TrackablePermissionFilterInput",description:"Filter used to filter TrackablePermission",source:"@site/docs/graphql/api-public/inputs/trackable-permission-filter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/trackable-permission-filter-input",permalink:"/gropius-docs/graphql/api-public/inputs/trackable-permission-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"trackable-permission-filter-input",title:"TrackablePermissionFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},d=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>allUsers</b></code><Bullet /><code>BooleanFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputballusersbcodebooleanfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>and</b></code><Bullet /><code>[TrackablePermissionFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbandbcodetrackablepermissionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>description</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbdescriptionbcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>id</b></code><Bullet /><code>IDFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbidbcodeidfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>isComponentPermissionAnd</b></code><Bullet /><code>ComponentPermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbiscomponentpermissionandbcodecomponentpermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>isProjectPermissionAnd</b></code><Bullet /><code>ProjectPermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbisprojectpermissionandbcodeprojectpermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>name</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbnamebcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>not</b></code><Bullet /><code>TrackablePermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbnotbcodetrackablepermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>or</b></code><Bullet /><code>[TrackablePermissionFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputborbcodetrackablepermissionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrackablePermissionFilterInput.<b>users</b></code><Bullet /><code>GropiusUserListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trackablepermissionfilterinputbusersbcodegropiususerlistfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:i,children:r,startOpen:o=!1}=e;const[s,p]=(0,a.useState)(o);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},s?t:i),s&&r)},k={Bullet:d,SpecifiedBy:c,Badge:u,toc:b,Details:m},g="wrapper";function f(e){let{components:t,...i}=e;return(0,l.kt)(g,(0,n.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Filter used to filter TrackablePermission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input TrackablePermissionFilterInput {\n  allUsers: BooleanFilterInput\n  and: [TrackablePermissionFilterInput!]\n  description: StringFilterInput\n  id: IDFilterInput\n  isComponentPermissionAnd: ComponentPermissionFilterInput\n  isProjectPermissionAnd: ProjectPermissionFilterInput\n  name: StringFilterInput\n  not: TrackablePermissionFilterInput\n  or: [TrackablePermissionFilterInput!]\n  users: GropiusUserListFilterInput\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputballusersbcodebooleanfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"allUsers"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/boolean-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"BooleanFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by allUsers")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbandbcodetrackablepermissionfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"and"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/trackable-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[TrackablePermissionFilterInput!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Connects all subformulas via and")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbdescriptionbcodestringfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by description")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbidbcodeidfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/idfilter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IDFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbiscomponentpermissionandbcodecomponentpermissionfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"isComponentPermissionAnd"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/component-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ComponentPermissionFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for nodes of type ComponentPermission")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbisprojectpermissionandbcodeprojectpermissionfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"isProjectPermissionAnd"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/project-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ProjectPermissionFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for nodes of type ProjectPermission")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbnamebcodestringfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbnotbcodetrackablepermissionfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"not"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/trackable-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TrackablePermissionFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Negates the subformula")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputborbcodetrackablepermissionfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"or"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/trackable-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[TrackablePermissionFilterInput!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Connects all subformulas via or")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-trackablepermissionfilterinputbusersbcodegropiususerlistfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TrackablePermissionFilterInput.",(0,l.kt)("b",null,"users"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/gropius-user-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"GropiusUserListFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by users")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/base-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"BasePermissionFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/node-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"NodePermissionFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/trackable-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TrackablePermissionFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);