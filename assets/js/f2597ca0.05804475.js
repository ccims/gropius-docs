"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95722],{284190:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var s=a(487462),r=a(667294),n=a(603905);const o={id:"search-project-permissions",title:"searchProjectPermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"graphql/api-internal/queries/search-project-permissions",id:"graphql/api-internal/queries/search-project-permissions",title:"searchProjectPermissions",description:"Search for nodes of type ProjectPermission",source:"@site/docs/graphql/api-internal/queries/search-project-permissions.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-project-permissions",permalink:"/gropius-docs/graphql/api-internal/queries/search-project-permissions",draft:!1,tags:[],version:"current",frontMatter:{id:"search-project-permissions",title:"searchProjectPermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},d=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjectPermissions.<b>filter</b></code><Bullet /><code>ProjectPermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchprojectpermissionsbfilterbcodeprojectpermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjectPermissions.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchprojectpermissionsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjectPermissions.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchprojectpermissionsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjectPermissions.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchprojectpermissionsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ProjectPermission</code> <Badge class="badge badge--secondary" text="object"/>',id:"projectpermission-",level:4}],u=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[l,c]=(0,r.useState)(i);return(0,n.kt)("details",(0,s.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&o)},h={Bullet:d,SpecifiedBy:p,Badge:m,toc:g,Details:u},k="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Search for nodes of type ProjectPermission"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"searchProjectPermissions(\n  filter: ProjectPermissionFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [ProjectPermission!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchprojectpermissionsbfilterbcodeprojectpermissionfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchProjectPermissions.",(0,n.kt)("b",null,"filter"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/project-permission-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ProjectPermissionFilterInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchprojectpermissionsbfirstbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchProjectPermissions.",(0,n.kt)("b",null,"first"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchprojectpermissionsbquerybcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchProjectPermissions.",(0,n.kt)("b",null,"query"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchprojectpermissionsbskipbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchProjectPermissions.",(0,n.kt)("b",null,"skip"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"projectpermission-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/project-permission"},(0,n.kt)("inlineCode",{parentName:"a"},"ProjectPermission"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NodePermission to grant specific permissions to a set of Projects.")))}b.isMDXComponent=!0}}]);