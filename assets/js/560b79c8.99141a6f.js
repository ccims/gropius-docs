"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28867],{437803:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>r,Details:()=>k,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>b});var a=n(487462),o=n(667294),l=n(603905);const i={id:"view-connection",title:"ViewConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"graphql/api-internal/objects/view-connection",id:"graphql/api-internal/objects/view-connection",title:"ViewConnection",description:"The connection type for View.",source:"@site/docs/graphql/api-internal/objects/view-connection.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/view-connection",permalink:"/gropius-docs/graphql/api-internal/objects/view-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"view-connection",title:"ViewConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},r=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ViewConnection.<b>edges</b></code><Bullet /><code>[ViewEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewconnectionbedgesbcodeviewedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewConnection.<b>nodes</b></code><Bullet /><code>[View!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewconnectionbnodesbcodeview--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-viewconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:d=!1}=e;const[c,s]=(0,o.useState)(d);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},u={Bullet:r,SpecifiedBy:g,Badge:p,toc:b,Details:k},m="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The connection type for View."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ViewConnection {\n  edges: [ViewEdge!]!\n  nodes: [View!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-viewconnectionbedgesbcodeviewedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ViewConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/view-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[ViewEdge!]!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-viewconnectionbnodesbcodeview--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ViewConnection.",(0,l.kt)("b",null,"nodes"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/view"},(0,l.kt)("inlineCode",{parentName:"a"},"[View!]!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-viewconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ViewConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-viewconnectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ViewConnection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project"},(0,l.kt)("inlineCode",{parentName:"a"},"Project")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);