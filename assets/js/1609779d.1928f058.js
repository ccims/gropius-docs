"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31847],{344315:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var l=a(487462),n=a(667294),d=a(603905);const o={id:"create-relation-input",title:"CreateRelationInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"graphql/api-public/inputs/create-relation-input",id:"graphql/api-public/inputs/create-relation-input",title:"CreateRelationInput",description:"Input for the createRelation mutation",source:"@site/docs/graphql/api-public/inputs/create-relation-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/create-relation-input",permalink:"/gropius-docs/graphql/api-public/inputs/create-relation-input",draft:!1,tags:[],version:"current",frontMatter:{id:"create-relation-input",title:"CreateRelationInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},c=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateRelationInput.<b>end</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createrelationinputbendbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateRelationInput.<b>endParts</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createrelationinputbendpartsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateRelationInput.<b>start</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createrelationinputbstartbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateRelationInput.<b>startParts</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createrelationinputbstartpartsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateRelationInput.<b>template</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createrelationinputbtemplatebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateRelationInput.<b>templatedFields</b></code><Bullet /><code>[JSONFieldInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createrelationinputbtemplatedfieldsbcodejsonfieldinput--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:r=!1}=e;const[i,s]=(0,n.useState)(r);return(0,d.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},m={Bullet:c,SpecifiedBy:p,Badge:u,toc:b,Details:g},k="wrapper";function h(e){let{components:t,...a}=e;return(0,d.kt)(k,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Input for the createRelation mutation"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateRelationInput {\n  end: ID!\n  endParts: [ID!]\n  start: ID!\n  startParts: [ID!]\n  template: ID!\n  templatedFields: [JSONFieldInput!]!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-createrelationinputbendbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CreateRelationInput.",(0,d.kt)("b",null,"end"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The end RelationPartner of the Relation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-createrelationinputbendpartsbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CreateRelationInput.",(0,d.kt)("b",null,"endParts"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If ",(0,d.kt)("inlineCode",{parentName:"p"},"end")," is an Interface, the parts of the Interface the created Relation includes")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-createrelationinputbstartbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CreateRelationInput.",(0,d.kt)("b",null,"start"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The start RelationPartner of the Relation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-createrelationinputbstartpartsbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CreateRelationInput.",(0,d.kt)("b",null,"startParts"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If ",(0,d.kt)("inlineCode",{parentName:"p"},"start")," is an Interface, the parts of the Interface the created Relation includes")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-createrelationinputbtemplatebcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CreateRelationInput.",(0,d.kt)("b",null,"template"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The template of the created Relation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-createrelationinputbtemplatedfieldsbcodejsonfieldinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CreateRelationInput.",(0,d.kt)("b",null,"templatedFields"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/jsonfield-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[JSONFieldInput!]!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Initial values for all templatedFields")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/bulk-create-relation-input"},(0,d.kt)("inlineCode",{parentName:"a"},"BulkCreateRelationInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/create-relation"},(0,d.kt)("inlineCode",{parentName:"a"},"createRelation")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);