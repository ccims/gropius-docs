"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52225],{517174:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>r,assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(487462),o=n(667294),s=n(603905);const l={id:"issue-type-connection",title:"IssueTypeConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,i={unversionedId:"graphql/api-internal/objects/issue-type-connection",id:"graphql/api-internal/objects/issue-type-connection",title:"IssueTypeConnection",description:"The connection type for IssueType.",source:"@site/docs/graphql/api-internal/objects/issue-type-connection.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/issue-type-connection",permalink:"/gropius-docs/graphql/api-internal/objects/issue-type-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-type-connection",title:"IssueTypeConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},p=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),r=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IssueTypeConnection.<b>edges</b></code><Bullet /><code>[IssueTypeEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuetypeconnectionbedgesbcodeissuetypeedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueTypeConnection.<b>nodes</b></code><Bullet /><code>[IssueType!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuetypeconnectionbnodesbcodeissuetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueTypeConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuetypeconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueTypeConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuetypeconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,s.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},y={Bullet:p,SpecifiedBy:r,Badge:g,toc:u,Details:b},k="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The connection type for IssueType."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type IssueTypeConnection {\n  edges: [IssueTypeEdge!]!\n  nodes: [IssueType!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-issuetypeconnectionbedgesbcodeissuetypeedge--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IssueTypeConnection.",(0,s.kt)("b",null,"edges"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-type-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"[IssueTypeEdge!]!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-issuetypeconnectionbnodesbcodeissuetype--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IssueTypeConnection.",(0,s.kt)("b",null,"nodes"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-type"},(0,s.kt)("inlineCode",{parentName:"a"},"[IssueType!]!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-issuetypeconnectionbpageinfobcodepageinfo--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IssueTypeConnection.",(0,s.kt)("b",null,"pageInfo"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/page-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-issuetypeconnectionbtotalcountbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"IssueTypeConnection.",(0,s.kt)("b",null,"totalCount"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-template"},(0,s.kt)("inlineCode",{parentName:"a"},"IssueTemplate")),"  ",(0,s.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);