"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69168],{283100:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(487462),i=a(667294),c=a(603905);const r={id:"create-interface-specification-version-input",title:"CreateInterfaceSpecificationVersionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"graphql/api-public/inputs/create-interface-specification-version-input",id:"graphql/api-public/inputs/create-interface-specification-version-input",title:"CreateInterfaceSpecificationVersionInput",description:"Input for the createInterfaceSpecificationVersion mutation",source:"@site/docs/graphql/api-public/inputs/create-interface-specification-version-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/create-interface-specification-version-input",permalink:"/gropius-docs/graphql/api-public/inputs/create-interface-specification-version-input",draft:!1,tags:[],version:"current",frontMatter:{id:"create-interface-specification-version-input",title:"CreateInterfaceSpecificationVersionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},p=()=>(0,c.kt)(i.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(i.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(i.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateInterfaceSpecificationVersionInput.<b>interfaceSpecification</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinterfacespecificationversioninputbinterfacespecificationbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateInterfaceSpecificationVersionInput.<b>parts</b></code><Bullet /><code>[InterfacePartInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createinterfacespecificationversioninputbpartsbcodeinterfacepartinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateInterfaceSpecificationVersionInput.<b>tags</b></code><Bullet /><code>[String!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinterfacespecificationversioninputbtagsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateInterfaceSpecificationVersionInput.<b>templatedFields</b></code><Bullet /><code>[JSONFieldInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createinterfacespecificationversioninputbtemplatedfieldsbcodejsonfieldinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateInterfaceSpecificationVersionInput.<b>version</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinterfacespecificationversioninputbversionbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:o=!1}=e;const[l,s]=(0,i.useState)(o);return(0,c.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},b={Bullet:p,SpecifiedBy:d,Badge:f,toc:u,Details:g},m="wrapper";function k(e){let{components:t,...a}=e;return(0,c.kt)(m,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Input for the createInterfaceSpecificationVersion mutation"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateInterfaceSpecificationVersionInput {\n  interfaceSpecification: ID!\n  parts: [InterfacePartInput!]\n  tags: [String!]!\n  templatedFields: [JSONFieldInput!]!\n  version: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinterfacespecificationversioninputbinterfacespecificationbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CreateInterfaceSpecificationVersionInput.",(0,c.kt)("b",null,"interfaceSpecification"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The id of the InterfaceSpecification the created InterfaceSpecificationVersion is part of")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinterfacespecificationversioninputbpartsbcodeinterfacepartinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CreateInterfaceSpecificationVersionInput.",(0,c.kt)("b",null,"parts"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/interface-part-input"},(0,c.kt)("inlineCode",{parentName:"a"},"[InterfacePartInput!]"))," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Initial InterfaceParts")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinterfacespecificationversioninputbtagsbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CreateInterfaceSpecificationVersionInput.",(0,c.kt)("b",null,"tags"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The tags of the created InterfaceSpecificationVersion")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinterfacespecificationversioninputbtemplatedfieldsbcodejsonfieldinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CreateInterfaceSpecificationVersionInput.",(0,c.kt)("b",null,"templatedFields"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/jsonfield-input"},(0,c.kt)("inlineCode",{parentName:"a"},"[JSONFieldInput!]!"))," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Initial values for all templatedFields")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinterfacespecificationversioninputbversionbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CreateInterfaceSpecificationVersionInput.",(0,c.kt)("b",null,"version"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The version of the created InterfaceSpecificationVersion")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/create-interface-specification-version"},(0,c.kt)("inlineCode",{parentName:"a"},"createInterfaceSpecificationVersion")),"  ",(0,c.kt)(f,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);