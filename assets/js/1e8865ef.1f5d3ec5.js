"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85192],{31515:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=n(487462),o=n(667294),d=n(603905);const l={id:"audited-node-connection",title:"AuditedNodeConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"graphql/api-public/objects/audited-node-connection",id:"graphql/api-public/objects/audited-node-connection",title:"AuditedNodeConnection",description:"The connection type for AuditedNode.",source:"@site/docs/graphql/api-public/objects/audited-node-connection.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/audited-node-connection",permalink:"/gropius-docs/graphql/api-public/objects/audited-node-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"audited-node-connection",title:"AuditedNodeConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},r=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNodeConnection.<b>edges</b></code><Bullet /><code>[AuditedNodeEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-auditednodeconnectionbedgesbcodeauditednodeedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNodeConnection.<b>nodes</b></code><Bullet /><code>[AuditedNode!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-auditednodeconnectionbnodesbcodeauditednode--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNodeConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-auditednodeconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNodeConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditednodeconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,s]=(0,o.useState)(i);return(0,d.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},k={Bullet:r,SpecifiedBy:u,Badge:p,toc:g,Details:b},m="wrapper";function f(e){let{components:t,...n}=e;return(0,d.kt)(m,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"The connection type for AuditedNode."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type AuditedNodeConnection {\n  edges: [AuditedNodeEdge!]!\n  nodes: [AuditedNode!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-auditednodeconnectionbedgesbcodeauditednodeedge--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AuditedNodeConnection.",(0,d.kt)("b",null,"edges"))),(0,d.kt)(r,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/audited-node-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"[AuditedNodeEdge!]!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-auditednodeconnectionbnodesbcodeauditednode--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AuditedNodeConnection.",(0,d.kt)("b",null,"nodes"))),(0,d.kt)(r,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,d.kt)("inlineCode",{parentName:"a"},"[AuditedNode!]!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-auditednodeconnectionbpageinfobcodepageinfo--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AuditedNodeConnection.",(0,d.kt)("b",null,"pageInfo"))),(0,d.kt)(r,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/page-info"},(0,d.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-auditednodeconnectionbtotalcountbcodeint--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AuditedNodeConnection.",(0,d.kt)("b",null,"totalCount"))),(0,d.kt)(r,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/gropius-user"},(0,d.kt)("inlineCode",{parentName:"a"},"GropiusUser")),"  ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(r,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/imsuser"},(0,d.kt)("inlineCode",{parentName:"a"},"IMSUser")),"  ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(r,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,d.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);