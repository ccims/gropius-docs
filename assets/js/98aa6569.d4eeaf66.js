"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97188],{30752:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>g});var n=a(487462),i=a(667294),r=a(603905);const c={id:"search-interface-specification-versions",title:"searchInterfaceSpecificationVersions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,o={unversionedId:"graphql/api-internal/queries/search-interface-specification-versions",id:"graphql/api-internal/queries/search-interface-specification-versions",title:"searchInterfaceSpecificationVersions",description:"Search for nodes of type InterfaceSpecificationVersion",source:"@site/docs/graphql/api-internal/queries/search-interface-specification-versions.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-interface-specification-versions",permalink:"/gropius-docs/graphql/api-internal/queries/search-interface-specification-versions",draft:!1,tags:[],version:"current",frontMatter:{id:"search-interface-specification-versions",title:"searchInterfaceSpecificationVersions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},l={},d=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchInterfaceSpecificationVersions.<b>filter</b></code><Bullet /><code>InterfaceSpecificationVersionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchinterfacespecificationversionsbfilterbcodeinterfacespecificationversionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchInterfaceSpecificationVersions.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchinterfacespecificationversionsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchInterfaceSpecificationVersions.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchinterfacespecificationversionsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchInterfaceSpecificationVersions.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchinterfacespecificationversionsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>InterfaceSpecificationVersion</code> <Badge class="badge badge--secondary" text="object"/>',id:"interfacespecificationversion-",level:4}],u=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:s=!1}=e;const[o,l]=(0,i.useState)(s);return(0,r.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&c)},h={Bullet:d,SpecifiedBy:f,Badge:p,toc:g,Details:u},k="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Search for nodes of type InterfaceSpecificationVersion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"searchInterfaceSpecificationVersions(\n  filter: InterfaceSpecificationVersionFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [InterfaceSpecificationVersion!]!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-searchinterfacespecificationversionsbfilterbcodeinterfacespecificationversionfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"searchInterfaceSpecificationVersions.",(0,r.kt)("b",null,"filter"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/interface-specification-version-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionFilterInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-searchinterfacespecificationversionsbfirstbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"searchInterfaceSpecificationVersions.",(0,r.kt)("b",null,"first"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-searchinterfacespecificationversionsbquerybcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"searchInterfaceSpecificationVersions.",(0,r.kt)("b",null,"query"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-searchinterfacespecificationversionsbskipbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"searchInterfaceSpecificationVersions.",(0,r.kt)("b",null,"skip"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"interfacespecificationversion-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/interface-specification-version"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersion"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A specific version of an InterfaceSpecification.\nDefines which InterfaceParts are active.\nCan be both visible (generates an Interface) and invisible (does not generate an Interface)\non different Components.\nCan be derived by Relations, and affected by Issues.\nREAD is granted if READ is granted on ",(0,r.kt)("inlineCode",{parentName:"p"},"interfaceSpecification"),",\nor any InterfaceDefinition in ",(0,r.kt)("inlineCode",{parentName:"p"},"definitions"))))}b.isMDXComponent=!0}}]);