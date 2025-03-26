"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1447],{311979:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>m,Details:()=>b,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>k});var n=o(487462),r=o(667294),l=o(603905);const a={id:"project-permission-entry",title:"ProjectPermissionEntry",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"graphql/api-internal/enums/project-permission-entry",id:"graphql/api-internal/enums/project-permission-entry",title:"ProjectPermissionEntry",description:"ProjectPermission entry enum type.",source:"@site/docs/graphql/api-internal/enums/project-permission-entry.mdx",sourceDirName:"graphql/api-internal/enums",slug:"/graphql/api-internal/enums/project-permission-entry",permalink:"/gropius-docs/graphql/api-internal/enums/project-permission-entry",draft:!1,tags:[],version:"current",frontMatter:{id:"project-permission-entry",title:"ProjectPermissionEntry",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},m=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),k=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>ADMIN</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybadminbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>AFFECT_ENTITIES_WITH_ISSUES</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybaffect_entities_with_issuesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>COMMENT</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybcommentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>CREATE_ISSUES</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybcreate_issuesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>EXPORT_ISSUES</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybexport_issuesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>EXPORT_LABELS</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybexport_labelsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>MANAGE_ARTEFACTS</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybmanage_artefactsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>MANAGE_COMPONENTS</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybmanage_componentsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>MANAGE_IMS</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybmanage_imsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>MANAGE_ISSUES</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybmanage_issuesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>MANAGE_LABELS</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybmanage_labelsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>MANAGE_VIEWS</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybmanage_viewsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>MODERATOR</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybmoderatorbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectPermissionEntry.<b>READ</b></code>",id:"code-style-fontweight-normal-projectpermissionentrybreadbcode",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:o,children:a,startOpen:i=!1}=e;const[s,c]=(0,r.useState)(i);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:o),s&&a)},h={Bullet:m,SpecifiedBy:d,Badge:p,toc:k,Details:b},u="wrapper";function y(e){let{components:t,...o}=e;return(0,l.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ProjectPermission entry enum type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ProjectPermissionEntry {\n  ADMIN\n  AFFECT_ENTITIES_WITH_ISSUES\n  COMMENT\n  CREATE_ISSUES\n  EXPORT_ISSUES\n  EXPORT_LABELS\n  MANAGE_ARTEFACTS\n  MANAGE_COMPONENTS\n  MANAGE_IMS\n  MANAGE_ISSUES\n  MANAGE_LABELS\n  MANAGE_VIEWS\n  MODERATOR\n  READ\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybadminbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"ADMIN")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Grants all other permissions on the Node except READ.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybaffect_entities_with_issuesbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"AFFECT_ENTITIES_WITH_ISSUES")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows affecting entities part of this Trackable with any Issues.\nAffectable entitites include"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"the Trackable itself"),(0,l.kt)("li",{parentName:"ul"},"in case the Trackable is a Component",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"InterfaceSpecifications, their InterfaceSpecificationVersions and their InterfaceParts of the Component (not inherited ones)"),(0,l.kt)("li",{parentName:"ul"},"Interfaces on the Component"),(0,l.kt)("li",{parentName:"ul"},"ComponentVersions of the Component"))))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybcommentbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"COMMENT")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to create Comments on Issues on this Trackable.\nAlso allows editing of your own Comments.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybcreate_issuesbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"CREATE_ISSUES")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to create new Issues on the Trackable.\nThis includes adding Issues from other Trackables.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybexport_issuesbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"EXPORT_ISSUES")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows adding Issues on this Trackable to other Trackables.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybexport_labelsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"EXPORT_LABELS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows adding Labels on this Trackable to other Trackables.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybmanage_artefactsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"MANAGE_ARTEFACTS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to add, remove, and update Artefacts on this Trackable.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybmanage_componentsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"MANAGE_COMPONENTS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to add / remove ComponentVersions to / from this Project.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybmanage_imsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"MANAGE_IMS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to add, remove, and update IMSProjects on this Trackable.\nNote: for adding, ",(0,l.kt)("inlineCode",{parentName:"p"},"IMSPermissionEntry.SYNC_TRACKABLES")," is required additionally")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybmanage_issuesbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"MANAGE_ISSUES")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to manage issues.\nThis includes ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE_ISSUES")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"COMMENT"),".\nThis does NOT include ",(0,l.kt)("inlineCode",{parentName:"p"},"LINK_TO_ISSUES")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LINK_FROM_ISSUES"),".\nAdditionaly includes"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"change the Template"),(0,l.kt)("li",{parentName:"ul"},"add / remove Labels"),(0,l.kt)("li",{parentName:"ul"},"add / remove Artefacts"),(0,l.kt)("li",{parentName:"ul"},"change any field on the Issue (title, ...)"),(0,l.kt)("li",{parentName:"ul"},"change templated fields\nIn contrast to ",(0,l.kt)("inlineCode",{parentName:"li"},"MODERATOR"),", this does not allow editing / removing Comments of other users"))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybmanage_labelsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"MANAGE_LABELS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to add, remove, and update Labels on this Trackable.\nAlso allows to delete a Label, but only if it is allowed on all Trackable the Label is on.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybmanage_viewsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"MANAGE_VIEWS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to manage the views of this Project.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybmoderatorbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"MODERATOR")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to moderate Issues on this Trackable.\nThis allows everything ",(0,l.kt)("inlineCode",{parentName:"p"},"MANAGE_ISSUES")," allows.\nAdditionally, it allows editing and deleting Comments of other Users")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionentrybreadbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermissionEntry.",(0,l.kt)("b",null,"READ")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Allows to read the Node (obtain it via the API) and to read certain related Nodes.\nSee documentation for specific Node for the specific conditions.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project-permission"},(0,l.kt)("inlineCode",{parentName:"a"},"ProjectPermission")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);