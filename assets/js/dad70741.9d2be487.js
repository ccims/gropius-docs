"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24432],{475976:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(487462),l=a(667294),d=a(603905);const i={id:"delete-node-input",title:"DeleteNodeInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},p=void 0,o={unversionedId:"graphql/api-public/inputs/delete-node-input",id:"graphql/api-public/inputs/delete-node-input",title:"DeleteNodeInput",description:"Input for all delete mutations. Deletes the node with the specified id",source:"@site/docs/graphql/api-public/inputs/delete-node-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/delete-node-input",permalink:"/gropius-docs/graphql/api-public/inputs/delete-node-input",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-node-input",title:"DeleteNodeInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},s=()=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(l.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteNodeInput.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletenodeinputbidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:p=!1}=e;const[o,r]=(0,l.useState)(p);return(0,d.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&i)},k={Bullet:s,SpecifiedBy:m,Badge:c,toc:u,Details:g},b="wrapper";function y(e){let{components:t,...a}=e;return(0,d.kt)(b,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Input for all delete mutations. Deletes the node with the specified id"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input DeleteNodeInput {\n  id: ID!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-deletenodeinputbidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DeleteNodeInput.",(0,d.kt)("b",null,"id"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the Node to delete")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-artefact"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteArtefact")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-component"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteComponent")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-component-permission"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteComponentPermission")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-component-version"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteComponentVersion")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-global-permission"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteGlobalPermission")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-ims"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteIMS")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-imspermission"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteIMSPermission")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-imsproject"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteIMSProject")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-interface-part"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteInterfacePart")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-interface-specification"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteInterfaceSpecification")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-interface-specification-version"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteInterfaceSpecificationVersion")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-intra-component-dependency-specification"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteIntraComponentDependencySpecification")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-issue"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteIssue")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-issue-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteIssueComment")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-label"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteLabel")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-project"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteProject")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-project-permission"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteProjectPermission")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-relation"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteRelation")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/delete-view"},(0,d.kt)("inlineCode",{parentName:"a"},"deleteView")),"  ",(0,d.kt)(c,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);