"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9627],{674367:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(487462),s=n(667294),a=n(603905);const i={id:"search-component-permissions",title:"searchComponentPermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,l={unversionedId:"graphql/api-public/queries/search-component-permissions",id:"graphql/api-public/queries/search-component-permissions",title:"searchComponentPermissions",description:"Search for nodes of type ComponentPermission",source:"@site/docs/graphql/api-public/queries/search-component-permissions.mdx",sourceDirName:"graphql/api-public/queries",slug:"/graphql/api-public/queries/search-component-permissions",permalink:"/gropius-docs/graphql/api-public/queries/search-component-permissions",draft:!1,tags:[],version:"current",frontMatter:{id:"search-component-permissions",title:"searchComponentPermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},p=()=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(s.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentPermissions.<b>filter</b></code><Bullet /><code>ComponentPermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchcomponentpermissionsbfilterbcodecomponentpermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentPermissions.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcomponentpermissionsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentPermissions.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcomponentpermissionsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentPermissions.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcomponentpermissionsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ComponentPermission</code> <Badge class="badge badge--secondary" text="object"/>',id:"componentpermission-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:r=!1}=e;const[l,c]=(0,s.useState)(r);return(0,a.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},h={Bullet:p,SpecifiedBy:d,Badge:m,toc:u,Details:g},b="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Search for nodes of type ComponentPermission"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"searchComponentPermissions(\n  filter: ComponentPermissionFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [ComponentPermission!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentpermissionsbfilterbcodecomponentpermissionfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"searchComponentPermissions.",(0,a.kt)("b",null,"filter"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/component-permission-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ComponentPermissionFilterInput"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentpermissionsbfirstbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"searchComponentPermissions.",(0,a.kt)("b",null,"first"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentpermissionsbquerybcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"searchComponentPermissions.",(0,a.kt)("b",null,"query"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentpermissionsbskipbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"searchComponentPermissions.",(0,a.kt)("b",null,"skip"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"componentpermission-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/component-permission"},(0,a.kt)("inlineCode",{parentName:"a"},"ComponentPermission"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NodePermission to grant specific permissions to a set of Components.")))}k.isMDXComponent=!0}}]);