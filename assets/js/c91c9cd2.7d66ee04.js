"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5802],{154711:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>c,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>r,toc:()=>b});var d=t(487462),n=t(667294),l=t(603905);const o={id:"audited-node",title:"AuditedNode",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,r={unversionedId:"graphql/api-public/interfaces/audited-node",id:"graphql/api-public/interfaces/audited-node",title:"AuditedNode",description:"Node which provides auditing information, which can e.g. be used for the sync.",source:"@site/docs/graphql/api-public/interfaces/audited-node.mdx",sourceDirName:"graphql/api-public/interfaces",slug:"/graphql/api-public/interfaces/audited-node",permalink:"/gropius-docs/graphql/api-public/interfaces/audited-node",draft:!1,tags:[],version:"current",frontMatter:{id:"audited-node",title:"AuditedNode",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},p=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNode.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditednodebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNode.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-auditednodebcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNode.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditednodebhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNode.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditednodebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNode.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditednodeblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditedNode.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-auditednodeblastmodifiedbybcodeuser--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],g=e=>{let{dataOpen:a,dataClose:t,children:o,startOpen:i=!1}=e;const[r,s]=(0,n.useState)(i);return(0,l.kt)("details",(0,d.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?a:t),r&&o)},k={Bullet:p,SpecifiedBy:c,Badge:m,toc:b,Details:g},u="wrapper";function y(e){let{components:a,...t}=e;return(0,l.kt)(u,(0,d.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"interface AuditedNode implements BaseNode, Node {\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditednodebcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditedNode.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditednodebcreatedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditedNode.",(0,l.kt)("b",null,"createdBy"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditednodebhaspermissionbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditedNode.",(0,l.kt)("b",null,"hasPermission"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-auditednodehaspermissionbpermissionbcodeallpermissionentry-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditedNode.hasPermission.",(0,l.kt)("b",null,"permission"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditednodebidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditedNode.",(0,l.kt)("b",null,"id"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditednodeblastmodifiedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditedNode.",(0,l.kt)("b",null,"lastModifiedAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditednodeblastmodifiedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditedNode.",(0,l.kt)("b",null,"lastModifiedBy"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"basenode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/audited-node-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNodeConnection")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/audited-node-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNodeEdge")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/abstract-type-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"AbstractTypeChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/added-affected-entity-event"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedAffectedEntityEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/added-artefact-event"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedArtefactEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/added-label-event"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedLabelEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/added-to-pinned-issues-event"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedToPinnedIssuesEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/added-to-trackable-event"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedToTrackableEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/artefact"},(0,l.kt)("inlineCode",{parentName:"a"},"Artefact")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/assignment"},(0,l.kt)("inlineCode",{parentName:"a"},"Assignment")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/assignment-type-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"AssignmentTypeChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/body"},(0,l.kt)("inlineCode",{parentName:"a"},"Body")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/comment"},(0,l.kt)("inlineCode",{parentName:"a"},"Comment")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/incoming-relation-type-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"IncomingRelationTypeChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/issue"},(0,l.kt)("inlineCode",{parentName:"a"},"Issue")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/issue-comment"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueComment")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/issue-relation"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueRelation")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/label"},(0,l.kt)("inlineCode",{parentName:"a"},"Label")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/named-audited-node"},(0,l.kt)("inlineCode",{parentName:"a"},"NamedAuditedNode")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/outgoing-relation-type-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"OutgoingRelationTypeChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/priority-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"PriorityChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/related-by-issue-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RelatedByIssueEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/relation-type-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RelationTypeChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-affected-entity-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedAffectedEntityEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-artefact-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedArtefactEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-assignment-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedAssignmentEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-from-pinned-issues-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedFromPinnedIssuesEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-from-trackable-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedFromTrackableEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-incoming-relation-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedIncomingRelationEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-label-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedLabelEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-outgoing-relation-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedOutgoingRelationEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/removed-relation-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedRelationEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-templated-field-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedTemplatedFieldEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/state-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"StateChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/template-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"TemplateChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/templated-field-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"TemplatedFieldChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"TimelineItem")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/title-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"TitleChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/type-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"TypeChangedEvent")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);