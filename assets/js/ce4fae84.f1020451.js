"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90887],{782285:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var n=a(487462),l=a(667294),i=a(603905);const p={id:"sub-template-input",title:"SubTemplateInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,o={unversionedId:"graphql/api-public/inputs/sub-template-input",id:"graphql/api-public/inputs/sub-template-input",title:"SubTemplateInput",description:"Input to create a SubTemplate",source:"@site/docs/graphql/api-public/inputs/sub-template-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/sub-template-input",permalink:"/gropius-docs/graphql/api-public/inputs/sub-template-input",draft:!1,tags:[],version:"current",frontMatter:{id:"sub-template-input",title:"SubTemplateInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},r=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SubTemplateInput.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-subtemplateinputbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SubTemplateInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-subtemplateinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SubTemplateInput.<b>templateFieldSpecifications</b></code><Bullet /><code>[JSONFieldInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-subtemplateinputbtemplatefieldspecificationsbcodejsonfieldinput--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:p,startOpen:d=!1}=e;const[o,s]=(0,l.useState)(d);return(0,i.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&p)},g={Bullet:r,SpecifiedBy:u,Badge:c,toc:m,Details:b},k="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input to create a SubTemplate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SubTemplateInput {\n  description: String!\n  name: String!\n  templateFieldSpecifications: [JSONFieldInput!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-subtemplateinputbdescriptionbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SubTemplateInput.",(0,i.kt)("b",null,"description"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The description of the NamedNode")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-subtemplateinputbnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SubTemplateInput.",(0,i.kt)("b",null,"name"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The name of the NamedNode, must not be blank")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-subtemplateinputbtemplatefieldspecificationsbcodejsonfieldinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SubTemplateInput.",(0,i.kt)("b",null,"templateFieldSpecifications"))),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/jsonfield-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[JSONFieldInput!]"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Additional initial templateFieldSpecifications, should be a JSON schema JSON.\nMust be disjoint with templateFieldSpecifications of templates this template extends.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/create-component-template-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateComponentTemplateInput")),"  ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(r,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/create-interface-specification-template-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateInterfaceSpecificationTemplateInput")),"  ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);