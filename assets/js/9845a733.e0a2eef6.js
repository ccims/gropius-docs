"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3701],{156806:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>r,assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var o=n(487462),a=n(667294),l=n(603905);const s={id:"issue-relation-type-connection",title:"IssueRelationTypeConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"graphql/api-public/objects/issue-relation-type-connection",id:"graphql/api-public/objects/issue-relation-type-connection",title:"IssueRelationTypeConnection",description:"The connection type for IssueRelationType.",source:"@site/docs/graphql/api-public/objects/issue-relation-type-connection.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/issue-relation-type-connection",permalink:"/gropius-docs/graphql/api-public/objects/issue-relation-type-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-relation-type-connection",title:"IssueRelationTypeConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),r=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelationTypeConnection.<b>edges</b></code><Bullet /><code>[IssueRelationTypeEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationtypeconnectionbedgesbcodeissuerelationtypeedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelationTypeConnection.<b>nodes</b></code><Bullet /><code>[IssueRelationType!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationtypeconnectionbnodesbcodeissuerelationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelationTypeConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationtypeconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelationTypeConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationtypeconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:i=!1}=e;const[c,d]=(0,a.useState)(i);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&s)},y={Bullet:p,SpecifiedBy:r,Badge:u,toc:g,Details:b},k="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The connection type for IssueRelationType."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type IssueRelationTypeConnection {\n  edges: [IssueRelationTypeEdge!]!\n  nodes: [IssueRelationType!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuerelationtypeconnectionbedgesbcodeissuerelationtypeedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueRelationTypeConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation-type-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[IssueRelationTypeEdge!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuerelationtypeconnectionbnodesbcodeissuerelationtype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueRelationTypeConnection.",(0,l.kt)("b",null,"nodes"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[IssueRelationType!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuerelationtypeconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueRelationTypeConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuerelationtypeconnectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueRelationTypeConnection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/issue-template"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueTemplate")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);