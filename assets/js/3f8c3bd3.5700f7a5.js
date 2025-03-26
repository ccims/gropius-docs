"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20379],{266460:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var r=a(487462),n=a(667294),s=a(603905);const l={id:"search-projects",title:"searchProjects",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,c={unversionedId:"graphql/api-internal/queries/search-projects",id:"graphql/api-internal/queries/search-projects",title:"searchProjects",description:"Search for nodes of type Project",source:"@site/docs/graphql/api-internal/queries/search-projects.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-projects",permalink:"/gropius-docs/graphql/api-internal/queries/search-projects",draft:!1,tags:[],version:"current",frontMatter:{id:"search-projects",title:"searchProjects",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},i={},d=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjects.<b>filter</b></code><Bullet /><code>ProjectFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchprojectsbfilterbcodeprojectfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjects.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchprojectsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjects.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchprojectsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchProjects.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchprojectsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Project</code> <Badge class="badge badge--secondary" text="object"/>',id:"project-",level:4}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:o=!1}=e;const[c,i]=(0,n.useState)(o);return(0,s.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},k={Bullet:d,SpecifiedBy:p,Badge:h,toc:g,Details:u},b="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(b,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Search for nodes of type Project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"searchProjects(\n  filter: ProjectFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [Project!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchprojectsbfilterbcodeprojectfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchProjects.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/project-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"ProjectFilterInput"))," ",(0,s.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchprojectsbfirstbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchProjects.",(0,s.kt)("b",null,"first"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(h,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchprojectsbquerybcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchProjects.",(0,s.kt)("b",null,"query"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(h,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchprojectsbskipbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchProjects.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(h,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"project-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/project"},(0,s.kt)("inlineCode",{parentName:"a"},"Project"))," ",(0,s.kt)(h,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"A project of the Gropius system.\nConsists of a set of ComponentVersions, which form a graph with the Relations between them.\nCan be affected by issues.\nCan have issues, labels and artefacts as this is a Trackable.\nREAD is granted via an associated ProjectPermission.")))}m.isMDXComponent=!0}}]);