"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42168],{197317:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=a(487462),o=a(667294),l=a(603905);const p={id:"create-component-template-input",title:"CreateComponentTemplateInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,i={unversionedId:"graphql/api-public/inputs/create-component-template-input",id:"graphql/api-public/inputs/create-component-template-input",title:"CreateComponentTemplateInput",description:"Input for the createComponentTemplate mutation",source:"@site/docs/graphql/api-public/inputs/create-component-template-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/create-component-template-input",permalink:"/gropius-docs/graphql/api-public/inputs/create-component-template-input",draft:!1,tags:[],version:"current",frontMatter:{id:"create-component-template-input",title:"CreateComponentTemplateInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},r=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>componentVersionTemplate</b></code><Bullet /><code>SubTemplateInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbcomponentversiontemplatebcodesubtemplateinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>extends</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbextendsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>fill</b></code><Bullet /><code>FillStyleInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbfillbcodefillstyleinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>intraComponentDependencySpecificationTypes</b></code><Bullet /><code>[IntraComponentDependencySpecificationTypeInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbintracomponentdependencyspecificationtypesbcodeintracomponentdependencyspecificationtypeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>shapeRadius</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbshaperadiusbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>shapeType</b></code><Bullet /><code>ShapeType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbshapetypebcodeshapetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>stroke</b></code><Bullet /><code>StrokeStyleInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbstrokebcodestrokestyleinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateComponentTemplateInput.<b>templateFieldSpecifications</b></code><Bullet /><code>[JSONFieldInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createcomponenttemplateinputbtemplatefieldspecificationsbcodejsonfieldinput--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:p,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&p)},g={Bullet:r,SpecifiedBy:s,Badge:m,toc:u,Details:b},k="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Input for the createComponentTemplate mutation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateComponentTemplateInput {\n  componentVersionTemplate: SubTemplateInput!\n  description: String!\n  extends: [ID!]\n  fill: FillStyleInput\n  intraComponentDependencySpecificationTypes: [IntraComponentDependencySpecificationTypeInput!]!\n  name: String!\n  shapeRadius: Float\n  shapeType: ShapeType!\n  stroke: StrokeStyleInput\n  templateFieldSpecifications: [JSONFieldInput!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbcomponentversiontemplatebcodesubtemplateinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"componentVersionTemplate"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/sub-template-input"},(0,l.kt)("inlineCode",{parentName:"a"},"SubTemplateInput!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SubTemplate for all ComponentVersions of a Component with the created Template")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbdescriptionbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The description of the NamedNode")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbextendsbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"extends"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"IDs of Templates the created template extends. Must be templates of the same type.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbfillbcodefillstyleinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"fill"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/fill-style-input"},(0,l.kt)("inlineCode",{parentName:"a"},"FillStyleInput"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Style of the fill")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbintracomponentdependencyspecificationtypesbcodeintracomponentdependencyspecificationtypeinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"intraComponentDependencySpecificationTypes"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/intra-component-dependency-specification-type-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[IntraComponentDependencySpecificationTypeInput!]!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Set of all types IntraComponentDependencySpecifications of Components with the created Template can have")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The name of the NamedNode, must not be blank")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbshaperadiusbcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"shapeRadius"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The corner radius of the shape, ignored for circle/ellipse")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbshapetypebcodeshapetype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"shapeType"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/enums/shape-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ShapeType!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The type of the shape")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbstrokebcodestrokestyleinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"stroke"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/stroke-style-input"},(0,l.kt)("inlineCode",{parentName:"a"},"StrokeStyleInput"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Style of the stroke")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcomponenttemplateinputbtemplatefieldspecificationsbcodejsonfieldinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateComponentTemplateInput.",(0,l.kt)("b",null,"templateFieldSpecifications"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/jsonfield-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[JSONFieldInput!]"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Additional initial templateFieldSpecifications, should be a JSON schema JSON.\nMust be disjoint with templateFieldSpecifications of templates this template extends.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/create-component-template"},(0,l.kt)("inlineCode",{parentName:"a"},"createComponentTemplate")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);