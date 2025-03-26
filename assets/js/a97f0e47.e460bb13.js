"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88349],{323933:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var a=s(487462),i=s(667294),n=s(603905);const r={id:"search-imspermissions",title:"searchIMSPermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"graphql/api-internal/queries/search-imspermissions",id:"graphql/api-internal/queries/search-imspermissions",title:"searchIMSPermissions",description:"Search for nodes of type IMSPermission",source:"@site/docs/graphql/api-internal/queries/search-imspermissions.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-imspermissions",permalink:"/gropius-docs/graphql/api-internal/queries/search-imspermissions",draft:!1,tags:[],version:"current",frontMatter:{id:"search-imspermissions",title:"searchIMSPermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(i.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchIMSPermissions.<b>filter</b></code><Bullet /><code>IMSPermissionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchimspermissionsbfilterbcodeimspermissionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIMSPermissions.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchimspermissionsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIMSPermissions.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchimspermissionsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIMSPermissions.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchimspermissionsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>IMSPermission</code> <Badge class="badge badge--secondary" text="object"/>',id:"imspermission-",level:4}],u=e=>{let{dataOpen:t,dataClose:s,children:r,startOpen:l=!1}=e;const[o,d]=(0,i.useState)(l);return(0,n.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?t:s),o&&r)},h={Bullet:c,SpecifiedBy:m,Badge:p,toc:g,Details:u},k="wrapper";function b(e){let{components:t,...s}=e;return(0,n.kt)(k,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Search for nodes of type IMSPermission"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"searchIMSPermissions(\n  filter: IMSPermissionFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [IMSPermission!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchimspermissionsbfilterbcodeimspermissionfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIMSPermissions.",(0,n.kt)("b",null,"filter"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/imspermission-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSPermissionFilterInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchimspermissionsbfirstbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIMSPermissions.",(0,n.kt)("b",null,"first"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchimspermissionsbquerybcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIMSPermissions.",(0,n.kt)("b",null,"query"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchimspermissionsbskipbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIMSPermissions.",(0,n.kt)("b",null,"skip"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"imspermission-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/imspermission"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSPermission"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NodePermission to grant specific permissions to a set of IMSs.")))}b.isMDXComponent=!0}}]);