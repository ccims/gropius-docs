"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67045],{766270:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>b});var l=a(487462),o=a(667294),n=a(603905);const s={id:"stroke-style",title:"StrokeStyle",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,d={unversionedId:"graphql/api-public/objects/stroke-style",id:"graphql/api-public/objects/stroke-style",title:"StrokeStyle",description:"Style of the stroke",source:"@site/docs/graphql/api-public/objects/stroke-style.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/stroke-style",permalink:"/gropius-docs/graphql/api-public/objects/stroke-style",draft:!1,tags:[],version:"current",frontMatter:{id:"stroke-style",title:"StrokeStyle",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},i={},c=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StrokeStyle.<b>color</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-strokestylebcolorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StrokeStyle.<b>dash</b></code><Bullet /><code>[Float!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-strokestylebdashbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StrokeStyle.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-strokestylebhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StrokeStyle.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-strokestylebidbcodeid--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:r=!1}=e;const[d,i]=(0,o.useState)(r);return(0,n.kt)("details",(0,l.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&s)},g={Bullet:c,SpecifiedBy:p,Badge:k,toc:b,Details:m},y="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(y,(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Style of the stroke"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type StrokeStyle implements BaseNode, Node {\n  color: String\n  dash: [Float!]\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-strokestylebcolorbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StrokeStyle.",(0,n.kt)("b",null,"color"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The color of the stroke")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-strokestylebdashbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StrokeStyle.",(0,n.kt)("b",null,"dash"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"[Float!]"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The dash pattern of the stroke")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-strokestylebhaspermissionbcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StrokeStyle.",(0,n.kt)("b",null,"hasPermission"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-strokestylehaspermissionbpermissionbcodeallpermissionentry-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StrokeStyle.hasPermission.",(0,n.kt)("b",null,"permission"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,n.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-strokestylebidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"StrokeStyle.",(0,n.kt)("b",null,"id"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"basenode-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,n.kt)("h4",{id:"node-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/component-template"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentTemplate")),"  ",(0,n.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/interface-specification-template"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationTemplate")),"  ",(0,n.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/relation-partner-template"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplate")),"  ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/relation-template"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationTemplate")),"  ",(0,n.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/unions/base-style"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseStyle")),"  ",(0,n.kt)(k,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);