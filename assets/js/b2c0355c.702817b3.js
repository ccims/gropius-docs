"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92395],{872371:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var o=n(487462),a=n(667294),i=n(603905);const s={id:"issue-priority-connection",title:"IssuePriorityConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,r={unversionedId:"graphql/api-internal/objects/issue-priority-connection",id:"graphql/api-internal/objects/issue-priority-connection",title:"IssuePriorityConnection",description:"The connection type for IssuePriority.",source:"@site/docs/graphql/api-internal/objects/issue-priority-connection.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/issue-priority-connection",permalink:"/gropius-docs/graphql/api-internal/objects/issue-priority-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-priority-connection",title:"IssuePriorityConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IssuePriorityConnection.<b>edges</b></code><Bullet /><code>[IssuePriorityEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuepriorityconnectionbedgesbcodeissuepriorityedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssuePriorityConnection.<b>nodes</b></code><Bullet /><code>[IssuePriority!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuepriorityconnectionbnodesbcodeissuepriority--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssuePriorityConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuepriorityconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssuePriorityConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuepriorityconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[r,d]=(0,a.useState)(l);return(0,i.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&s)},y={Bullet:c,SpecifiedBy:p,Badge:g,toc:u,Details:b},k="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The connection type for IssuePriority."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type IssuePriorityConnection {\n  edges: [IssuePriorityEdge!]!\n  nodes: [IssuePriority!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-issuepriorityconnectionbedgesbcodeissuepriorityedge--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IssuePriorityConnection.",(0,i.kt)("b",null,"edges"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-priority-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[IssuePriorityEdge!]!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-issuepriorityconnectionbnodesbcodeissuepriority--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IssuePriorityConnection.",(0,i.kt)("b",null,"nodes"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-priority"},(0,i.kt)("inlineCode",{parentName:"a"},"[IssuePriority!]!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-issuepriorityconnectionbpageinfobcodepageinfo--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IssuePriorityConnection.",(0,i.kt)("b",null,"pageInfo"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-issuepriorityconnectionbtotalcountbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IssuePriorityConnection.",(0,i.kt)("b",null,"totalCount"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-template"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueTemplate")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);