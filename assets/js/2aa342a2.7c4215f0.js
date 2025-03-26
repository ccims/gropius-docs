"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74033],{149982:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var l=a(487462),n=a(667294),i=a(603905);const r={id:"create-artefact-template-input",title:"CreateArtefactTemplateInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"graphql/api-public/inputs/create-artefact-template-input",id:"graphql/api-public/inputs/create-artefact-template-input",title:"CreateArtefactTemplateInput",description:"Input for the createArtefactTemplate mutation",source:"@site/docs/graphql/api-public/inputs/create-artefact-template-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/create-artefact-template-input",permalink:"/gropius-docs/graphql/api-public/inputs/create-artefact-template-input",draft:!1,tags:[],version:"current",frontMatter:{id:"create-artefact-template-input",title:"CreateArtefactTemplateInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},o=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateArtefactTemplateInput.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createartefacttemplateinputbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateArtefactTemplateInput.<b>extends</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createartefacttemplateinputbextendsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateArtefactTemplateInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createartefacttemplateinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateArtefactTemplateInput.<b>templateFieldSpecifications</b></code><Bullet /><code>[JSONFieldInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createartefacttemplateinputbtemplatefieldspecificationsbcodejsonfieldinput--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[c,p]=(0,n.useState)(d);return(0,i.kt)("details",(0,l.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&r)},b={Bullet:o,SpecifiedBy:s,Badge:m,toc:u,Details:g},f="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input for the createArtefactTemplate mutation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateArtefactTemplateInput {\n  description: String!\n  extends: [ID!]\n  name: String!\n  templateFieldSpecifications: [JSONFieldInput!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createartefacttemplateinputbdescriptionbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreateArtefactTemplateInput.",(0,i.kt)("b",null,"description"))),(0,i.kt)(o,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The description of the NamedNode")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createartefacttemplateinputbextendsbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreateArtefactTemplateInput.",(0,i.kt)("b",null,"extends"))),(0,i.kt)(o,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IDs of Templates the created template extends. Must be templates of the same type.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createartefacttemplateinputbnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreateArtefactTemplateInput.",(0,i.kt)("b",null,"name"))),(0,i.kt)(o,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The name of the NamedNode, must not be blank")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createartefacttemplateinputbtemplatefieldspecificationsbcodejsonfieldinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreateArtefactTemplateInput.",(0,i.kt)("b",null,"templateFieldSpecifications"))),(0,i.kt)(o,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/jsonfield-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[JSONFieldInput!]"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Additional initial templateFieldSpecifications, should be a JSON schema JSON.\nMust be disjoint with templateFieldSpecifications of templates this template extends.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/create-artefact-template"},(0,i.kt)("inlineCode",{parentName:"a"},"createArtefactTemplate")),"  ",(0,i.kt)(m,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);