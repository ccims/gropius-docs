"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52793],{619985:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(487462),o=a(667294),l=a(603905);const i={id:"relation-layout-connection",title:"RelationLayoutConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"graphql/api-internal/objects/relation-layout-connection",id:"graphql/api-internal/objects/relation-layout-connection",title:"RelationLayoutConnection",description:"The connection type for RelationLayout.",source:"@site/docs/graphql/api-internal/objects/relation-layout-connection.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/relation-layout-connection",permalink:"/gropius-docs/graphql/api-internal/objects/relation-layout-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"relation-layout-connection",title:"RelationLayoutConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RelationLayoutConnection.<b>edges</b></code><Bullet /><code>[RelationLayoutEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationlayoutconnectionbedgesbcoderelationlayoutedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationLayoutConnection.<b>nodes</b></code><Bullet /><code>[RelationLayout!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationlayoutconnectionbnodesbcoderelationlayout--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationLayoutConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationlayoutconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationLayoutConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationlayoutconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:d=!1}=e;const[c,r]=(0,o.useState)(d);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&i)},y={Bullet:s,SpecifiedBy:g,Badge:u,toc:p,Details:b},k="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The connection type for RelationLayout."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type RelationLayoutConnection {\n  edges: [RelationLayoutEdge!]!\n  nodes: [RelationLayout!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationlayoutconnectionbedgesbcoderelationlayoutedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationLayoutConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/relation-layout-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[RelationLayoutEdge!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationlayoutconnectionbnodesbcoderelationlayout--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationLayoutConnection.",(0,l.kt)("b",null,"nodes"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/relation-layout"},(0,l.kt)("inlineCode",{parentName:"a"},"[RelationLayout!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationlayoutconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationLayoutConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationlayoutconnectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationLayoutConnection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project"},(0,l.kt)("inlineCode",{parentName:"a"},"Project")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/view"},(0,l.kt)("inlineCode",{parentName:"a"},"View")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);