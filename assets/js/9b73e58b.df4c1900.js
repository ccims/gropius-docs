"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90953],{478712:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>p});var n=a(487462),o=a(667294),l=a(603905);const d={id:"removed-relation-event",title:"RemovedRelationEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,r={unversionedId:"graphql/api-internal/interfaces/removed-relation-event",id:"graphql/api-internal/interfaces/removed-relation-event",title:"RemovedRelationEvent",description:"Event representing that an outgoing IssueRelation was removed.",source:"@site/docs/graphql/api-internal/interfaces/removed-relation-event.mdx",sourceDirName:"graphql/api-internal/interfaces",slug:"/graphql/api-internal/interfaces/removed-relation-event",permalink:"/gropius-docs/graphql/api-internal/interfaces/removed-relation-event",draft:!1,tags:[],version:"current",frontMatter:{id:"removed-relation-event",title:"RemovedRelationEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},c=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedrelationeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-removedrelationeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedrelationeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedrelationeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-removedrelationeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedrelationeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-removedrelationeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-removedrelationeventbparentitembcodeparenttimelineitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedRelationEvent.<b>removedRelation</b></code><Bullet /><code>IssueRelation</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-removedrelationeventbremovedrelationbcodeissuerelation-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:i=!1}=e;const[r,s]=(0,o.useState)(i);return(0,l.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&d)},k={Bullet:c,SpecifiedBy:m,Badge:g,toc:p,Details:b},h="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Event representing that an outgoing IssueRelation was removed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"interface RemovedRelationEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  parentItem: ParentTimelineItem\n  removedRelation: IssueRelation\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventbcreatedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"createdBy"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventbhaspermissionbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"hasPermission"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-removedrelationeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.hasPermission.",(0,l.kt)("b",null,"permission"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"id"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventbissuebcodeissue-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"issue"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue"},(0,l.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventblastmodifiedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"lastModifiedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventblastmodifiedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"lastModifiedBy"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventbparentitembcodeparenttimelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"parentItem"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/parent-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-removedrelationeventbremovedrelationbcodeissuerelation-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RemovedRelationEvent.",(0,l.kt)("b",null,"removedRelation"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-relation"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueRelation"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The removed IssueRelation, null if deleted.")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"auditednode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/audited-node"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,l.kt)("h4",{id:"basenode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,l.kt)("h4",{id:"timelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-incoming-relation-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedIncomingRelationEvent")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-outgoing-relation-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedOutgoingRelationEvent")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);