"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28640],{356963:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=a(487462),n=a(667294),l=a(603905);const r={id:"search-affected-by-issues",title:"searchAffectedByIssues",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,i={unversionedId:"graphql/api-internal/queries/search-affected-by-issues",id:"graphql/api-internal/queries/search-affected-by-issues",title:"searchAffectedByIssues",description:"Search for nodes of type AffectedByIssue",source:"@site/docs/graphql/api-internal/queries/search-affected-by-issues.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-affected-by-issues",permalink:"/gropius-docs/graphql/api-internal/queries/search-affected-by-issues",draft:!1,tags:[],version:"current",frontMatter:{id:"search-affected-by-issues",title:"searchAffectedByIssues",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},o=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchAffectedByIssues.<b>filter</b></code><Bullet /><code>AffectedByIssueFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchaffectedbyissuesbfilterbcodeaffectedbyissuefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchAffectedByIssues.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchaffectedbyissuesbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchAffectedByIssues.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchaffectedbyissuesbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchAffectedByIssues.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchaffectedbyissuesbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AffectedByIssue</code> <Badge class="badge badge--secondary" text="interface"/>',id:"affectedbyissue-",level:4}],y=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[i,c]=(0,n.useState)(d);return(0,l.kt)("details",(0,s.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},b={Bullet:o,SpecifiedBy:f,Badge:u,toc:p,Details:y},g="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(g,(0,s.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Search for nodes of type AffectedByIssue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"searchAffectedByIssues(\n  filter: AffectedByIssueFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [AffectedByIssue!]!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchaffectedbyissuesbfilterbcodeaffectedbyissuefilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchAffectedByIssues.",(0,l.kt)("b",null,"filter"))),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/affected-by-issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AffectedByIssueFilterInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchaffectedbyissuesbfirstbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchAffectedByIssues.",(0,l.kt)("b",null,"first"))),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchaffectedbyissuesbquerybcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchAffectedByIssues.",(0,l.kt)("b",null,"query"))),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchaffectedbyissuesbskipbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchAffectedByIssues.",(0,l.kt)("b",null,"skip"))),(0,l.kt)(o,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"affectedbyissue-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/affected-by-issue"},(0,l.kt)("inlineCode",{parentName:"a"},"AffectedByIssue"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Entities that can be affected by an Issue, meaning that this entity is in some regard\nimpacted by e.g. a bug described by an issue, or the non-present of a feature described by an issue.")))}h.isMDXComponent=!0}}]);