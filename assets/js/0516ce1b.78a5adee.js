"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15108],{79950:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(487462),l=i(667294),s=i(603905);const r={id:"imspermission-filter-input",title:"IMSPermissionFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},a=void 0,o={unversionedId:"graphql/api-public/inputs/imspermission-filter-input",id:"graphql/api-public/inputs/imspermission-filter-input",title:"IMSPermissionFilterInput",description:"Filter used to filter IMSPermission",source:"@site/docs/graphql/api-public/inputs/imspermission-filter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/imspermission-filter-input",permalink:"/gropius-docs/graphql/api-public/inputs/imspermission-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"imspermission-filter-input",title:"IMSPermissionFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},d=()=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(l.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>allUsers</b></code><Bullet /><code>BooleanFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputballusersbcodebooleanfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>and</b></code><Bullet /><code>[IMSPermissionFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputbandbcodeimspermissionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>description</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputbdescriptionbcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>id</b></code><Bullet /><code>IDFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputbidbcodeidfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>name</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputbnamebcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>nodesWithPermission</b></code><Bullet /><code>IMSListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputbnodeswithpermissionbcodeimslistfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>not</b></code><Bullet /><code>IMSPermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputbnotbcodeimspermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>or</b></code><Bullet /><code>[IMSPermissionFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputborbcodeimspermissionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermissionFilterInput.<b>users</b></code><Bullet /><code>GropiusUserListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionfilterinputbusersbcodegropiususerlistfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:i,children:r,startOpen:a=!1}=e;const[o,p]=(0,l.useState)(a);return(0,s.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},o?t:i),o&&r)},g={Bullet:d,SpecifiedBy:u,Badge:m,toc:c,Details:b},k="wrapper";function f(e){let{components:t,...i}=e;return(0,s.kt)(k,(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Filter used to filter IMSPermission"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input IMSPermissionFilterInput {\n  allUsers: BooleanFilterInput\n  and: [IMSPermissionFilterInput!]\n  description: StringFilterInput\n  id: IDFilterInput\n  name: StringFilterInput\n  nodesWithPermission: IMSListFilterInput\n  not: IMSPermissionFilterInput\n  or: [IMSPermissionFilterInput!]\n  users: GropiusUserListFilterInput\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputballusersbcodebooleanfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"allUsers"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/boolean-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"BooleanFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by allUsers")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputbandbcodeimspermissionfilterinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"and"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/imspermission-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[IMSPermissionFilterInput!]"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Connects all subformulas via and")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputbdescriptionbcodestringfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"description"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by description")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputbidbcodeidfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"id"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/idfilter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"IDFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by id")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputbnamebcodestringfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"name"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by name")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputbnodeswithpermissionbcodeimslistfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"nodesWithPermission"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/imslist-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"IMSListFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by nodesWithPermission")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputbnotbcodeimspermissionfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"not"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/imspermission-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"IMSPermissionFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Negates the subformula")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputborbcodeimspermissionfilterinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"or"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/imspermission-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[IMSPermissionFilterInput!]"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Connects all subformulas via or")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imspermissionfilterinputbusersbcodegropiususerlistfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IMSPermissionFilterInput.",(0,s.kt)("b",null,"users"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/gropius-user-list-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"GropiusUserListFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter by users")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/base-permission-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"BasePermissionFilterInput")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imspermission-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"IMSPermissionFilterInput")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imspermission-list-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"IMSPermissionListFilterInput")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/node-permission-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"NodePermissionFilterInput")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/queries/search-imspermissions"},(0,s.kt)("inlineCode",{parentName:"a"},"searchIMSPermissions")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);