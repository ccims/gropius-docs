"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80999],{929804:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>g});var i=a(487462),r=a(667294),s=a(603905);const n={id:"search-issue-priorities",title:"searchIssuePriorities",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"graphql/api-internal/queries/search-issue-priorities",id:"graphql/api-internal/queries/search-issue-priorities",title:"searchIssuePriorities",description:"Search for nodes of type IssuePriority",source:"@site/docs/graphql/api-internal/queries/search-issue-priorities.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-issue-priorities",permalink:"/gropius-docs/graphql/api-internal/queries/search-issue-priorities",draft:!1,tags:[],version:"current",frontMatter:{id:"search-issue-priorities",title:"searchIssuePriorities",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssuePriorities.<b>filter</b></code><Bullet /><code>IssuePriorityFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchissueprioritiesbfilterbcodeissuepriorityfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssuePriorities.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissueprioritiesbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssuePriorities.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissueprioritiesbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssuePriorities.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissueprioritiesbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>IssuePriority</code> <Badge class="badge badge--secondary" text="object"/>',id:"issuepriority-",level:4}],h=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:l=!1}=e;const[o,d]=(0,r.useState)(l);return(0,s.kt)("details",(0,i.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&n)},k={Bullet:c,SpecifiedBy:u,Badge:p,toc:g,Details:h},b="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(b,(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Search for nodes of type IssuePriority"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"searchIssuePriorities(\n  filter: IssuePriorityFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [IssuePriority!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchissueprioritiesbfilterbcodeissuepriorityfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchIssuePriorities.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/issue-priority-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"IssuePriorityFilterInput"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchissueprioritiesbfirstbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchIssuePriorities.",(0,s.kt)("b",null,"first"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchissueprioritiesbquerybcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchIssuePriorities.",(0,s.kt)("b",null,"query"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchissueprioritiesbskipbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchIssuePriorities.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"issuepriority-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-priority"},(0,s.kt)("inlineCode",{parentName:"a"},"IssuePriority"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Priority of an Issue like HIGH or LOW. Part of an IssueTemplate.\nREAD is always granted.")))}y.isMDXComponent=!0}}]);