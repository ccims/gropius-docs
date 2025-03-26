"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96773],{866278:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var l=t(487462),n=t(667294),s=t(603905);const r={id:"search-labels",title:"searchLabels",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"graphql/api-internal/queries/search-labels",id:"graphql/api-internal/queries/search-labels",title:"searchLabels",description:"Search for nodes of type Label",source:"@site/docs/graphql/api-internal/queries/search-labels.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-labels",permalink:"/gropius-docs/graphql/api-internal/queries/search-labels",draft:!1,tags:[],version:"current",frontMatter:{id:"search-labels",title:"searchLabels",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>filter</b></code><Bullet /><code>LabelFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchlabelsbfilterbcodelabelfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchlabelsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchlabelsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchLabels.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchlabelsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Label</code> <Badge class="badge badge--secondary" text="object"/>',id:"label-",level:4}],u=e=>{let{dataOpen:a,dataClose:t,children:r,startOpen:o=!1}=e;const[i,d]=(0,n.useState)(o);return(0,s.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?a:t),i&&r)},h={Bullet:c,SpecifiedBy:b,Badge:p,toc:g,Details:u},k="wrapper";function m(e){let{components:a,...t}=e;return(0,s.kt)(k,(0,l.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Search for nodes of type Label"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"searchLabels(\n  filter: LabelFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [Label!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbfilterbcodelabelfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/label-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"LabelFilterInput"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbfirstbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,s.kt)("b",null,"first"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbquerybcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,s.kt)("b",null,"query"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchlabelsbskipbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchLabels.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"label-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/label"},(0,s.kt)("inlineCode",{parentName:"a"},"Label"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Label used to mark Issues with.\nA Label consists of a name, a description and a color.\nIssues may be synced to all IMSProjects of Trackables they are part of.\nREAD is granted if READ is granted on any Trackable in ",(0,s.kt)("inlineCode",{parentName:"p"},"trackables"),".")))}m.isMDXComponent=!0}}]);