"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42202],{353621:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>h,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=s(487462),a=s(667294),n=s(603905);const l={id:"search-gropius-users",title:"searchGropiusUsers",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"graphql/api-internal/queries/search-gropius-users",id:"graphql/api-internal/queries/search-gropius-users",title:"searchGropiusUsers",description:"Search for nodes of type GropiusUser",source:"@site/docs/graphql/api-internal/queries/search-gropius-users.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-gropius-users",permalink:"/gropius-docs/graphql/api-internal/queries/search-gropius-users",draft:!1,tags:[],version:"current",frontMatter:{id:"search-gropius-users",title:"searchGropiusUsers",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},u=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchGropiusUsers.<b>filter</b></code><Bullet /><code>GropiusUserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchgropiususersbfilterbcodegropiususerfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchGropiusUsers.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchgropiususersbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchGropiusUsers.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchgropiususersbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchGropiusUsers.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchgropiususersbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>GropiusUser</code> <Badge class="badge badge--secondary" text="object"/>',id:"gropiususer-",level:4}],h=e=>{let{dataOpen:t,dataClose:s,children:l,startOpen:o=!1}=e;const[i,d]=(0,a.useState)(o);return(0,n.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:s),i&&l)},k={Bullet:u,SpecifiedBy:c,Badge:p,toc:g,Details:h},b="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(b,(0,r.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Search for nodes of type GropiusUser"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"searchGropiusUsers(\n  filter: GropiusUserFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [GropiusUser!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchgropiususersbfilterbcodegropiususerfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchGropiusUsers.",(0,n.kt)("b",null,"filter"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/gropius-user-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchgropiususersbfirstbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchGropiusUsers.",(0,n.kt)("b",null,"first"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchgropiususersbquerybcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchGropiusUsers.",(0,n.kt)("b",null,"query"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchgropiususersbskipbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchGropiusUsers.",(0,n.kt)("b",null,"skip"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"gropiususer-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/gropius-user"},(0,n.kt)("inlineCode",{parentName:"a"},"GropiusUser"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A user of the Gropius System.\nThe username can be used as unique identifier for GropiusUsers.\nIMSUsers can be linked to a GropiusUser.\nNote however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,\nafter the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.\nTherefore, to collect all Assignments, Issue participations etc. it is necessary to also request all\nlinked IMSUsers and their Assignments etc.")))}m.isMDXComponent=!0}}]);