"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72448],{748631:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=t(487462),s=t(667294),n=t(603905);const r={id:"search-labels",title:"searchLabels",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"graphql/api-public/queries/search-labels",id:"graphql/api-public/queries/search-labels",title:"searchLabels",description:"Search for nodes of type Label",source:"@site/docs/graphql/api-public/queries/search-labels.mdx",sourceDirName:"graphql/api-public/queries",slug:"/graphql/api-public/queries/search-labels",permalink:"/gropius-docs/graphql/api-public/queries/search-labels",draft:!1,tags:[],version:"current",frontMatter:{id:"search-labels",title:"searchLabels",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},d=()=>(0,n.kt)(s.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(s.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(s.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>filter</b></code><Bullet /><code>LabelFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchlabelsbfilterbcodelabelfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchlabelsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchlabelsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchlabelsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Label</code> <Badge class="badge badge--secondary" text="object"/>',id:"label-",level:4}],g=e=>{let{dataOpen:a,dataClose:t,children:r,startOpen:o=!1}=e;const[i,c]=(0,s.useState)(o);return(0,n.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?a:t),i&&r)},h={Bullet:d,SpecifiedBy:b,Badge:p,toc:u,Details:g},k="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(k,(0,l.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Search for nodes of type Label"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"searchLabels(\n  filter: LabelFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [Label!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbfilterbcodelabelfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,n.kt)("b",null,"filter"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/label-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"LabelFilterInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbfirstbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,n.kt)("b",null,"first"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbquerybcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,n.kt)("b",null,"query"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbskipbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,n.kt)("b",null,"skip"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"label-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/label"},(0,n.kt)("inlineCode",{parentName:"a"},"Label"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Label used to mark Issues with.\nA Label consists of a name, a description and a color.\nIssues may be synced to all IMSProjects of Trackables they are part of.\nREAD is granted if READ is granted on any Trackable in ",(0,n.kt)("inlineCode",{parentName:"p"},"trackables"),".")))}m.isMDXComponent=!0}}]);