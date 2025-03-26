"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89445],{375105:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var i=n(487462),o=n(667294),l=n(603905);const p={id:"component-permission-filter-input",title:"ComponentPermissionFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,a={unversionedId:"graphql/api-public/inputs/component-permission-filter-input",id:"graphql/api-public/inputs/component-permission-filter-input",title:"ComponentPermissionFilterInput",description:"Filter used to filter ComponentPermission",source:"@site/docs/graphql/api-public/inputs/component-permission-filter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/component-permission-filter-input",permalink:"/gropius-docs/graphql/api-public/inputs/component-permission-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"component-permission-filter-input",title:"ComponentPermissionFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>allUsers</b></code><Bullet /><code>BooleanFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputballusersbcodebooleanfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>and</b></code><Bullet /><code>[ComponentPermissionFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputbandbcodecomponentpermissionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>description</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputbdescriptionbcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>id</b></code><Bullet /><code>IDFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputbidbcodeidfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>name</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputbnamebcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>nodesWithPermission</b></code><Bullet /><code>ComponentListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputbnodeswithpermissionbcodecomponentlistfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>not</b></code><Bullet /><code>ComponentPermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputbnotbcodecomponentpermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>or</b></code><Bullet /><code>[ComponentPermissionFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputborbcodecomponentpermissionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ComponentPermissionFilterInput.<b>users</b></code><Bullet /><code>GropiusUserListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-componentpermissionfilterinputbusersbcodegropiususerlistfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:p,startOpen:r=!1}=e;const[a,s]=(0,o.useState)(r);return(0,l.kt)("details",(0,i.Z)({},a?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},a?t:n),a&&p)},g={Bullet:d,SpecifiedBy:m,Badge:u,toc:c,Details:b},k="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Filter used to filter ComponentPermission"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input ComponentPermissionFilterInput {\n  allUsers: BooleanFilterInput\n  and: [ComponentPermissionFilterInput!]\n  description: StringFilterInput\n  id: IDFilterInput\n  name: StringFilterInput\n  nodesWithPermission: ComponentListFilterInput\n  not: ComponentPermissionFilterInput\n  or: [ComponentPermissionFilterInput!]\n  users: GropiusUserListFilterInput\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputballusersbcodebooleanfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"allUsers"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/boolean-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"BooleanFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by allUsers")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputbandbcodecomponentpermissionfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"and"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/component-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[ComponentPermissionFilterInput!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Connects all subformulas via and")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputbdescriptionbcodestringfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by description")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputbidbcodeidfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/idfilter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IDFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputbnamebcodestringfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputbnodeswithpermissionbcodecomponentlistfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"nodesWithPermission"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/component-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ComponentListFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by nodesWithPermission")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputbnotbcodecomponentpermissionfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"not"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/component-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ComponentPermissionFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Negates the subformula")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputborbcodecomponentpermissionfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"or"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/component-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[ComponentPermissionFilterInput!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Connects all subformulas via or")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-componentpermissionfilterinputbusersbcodegropiususerlistfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ComponentPermissionFilterInput.",(0,l.kt)("b",null,"users"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/gropius-user-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"GropiusUserListFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by users")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/base-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"BasePermissionFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/component-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ComponentPermissionFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/component-permission-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ComponentPermissionListFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/node-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"NodePermissionFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/queries/search-component-permissions"},(0,l.kt)("inlineCode",{parentName:"a"},"searchComponentPermissions")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/trackable-permission-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TrackablePermissionFilterInput")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);