"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11110],{841303:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>r,Details:()=>p,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var d=a(487462),n=a(667294),l=a(603905);const i={id:"added-affected-entity-event",title:"AddedAffectedEntityEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,s={unversionedId:"graphql/api-public/objects/added-affected-entity-event",id:"graphql/api-public/objects/added-affected-entity-event",title:"AddedAffectedEntityEvent",description:"Event representing that an entity is affected by an Issue.",source:"@site/docs/graphql/api-public/objects/added-affected-entity-event.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/added-affected-entity-event",permalink:"/gropius-docs/graphql/api-public/objects/added-affected-entity-event",draft:!1,tags:[],version:"current",frontMatter:{id:"added-affected-entity-event",title:"AddedAffectedEntityEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},r=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>addedAffectedEntity</b></code><Bullet /><code>AffectedByIssue</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedaffectedentityeventbaddedaffectedentitybcodeaffectedbyissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedaffectedentityeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedaffectedentityeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedaffectedentityeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedaffectedentityeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addedaffectedentityeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedaffectedentityeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedaffectedentityeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedAffectedEntityEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedaffectedentityeventbparentitembcodeparenttimelineitem-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[s,c]=(0,n.useState)(o);return(0,l.kt)("details",(0,d.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&i)},y={Bullet:r,SpecifiedBy:f,Badge:b,toc:m,Details:p},g="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(g,(0,d.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Event representing that an entity is affected by an Issue.\nREAD is granted if READ is granted on ",(0,l.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddedAffectedEntityEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  addedAffectedEntity: AffectedByIssue\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  parentItem: ParentTimelineItem\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventbaddedaffectedentitybcodeaffectedbyissue-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"addedAffectedEntity"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/affected-by-issue"},(0,l.kt)("inlineCode",{parentName:"a"},"AffectedByIssue"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The entity affected by the Issue, null if deleted.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventbcreatedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"createdBy"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventbhaspermissionbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"hasPermission"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-addedaffectedentityeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.hasPermission.",(0,l.kt)("b",null,"permission"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"id"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventbissuebcodeissue-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"issue"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue"},(0,l.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventblastmodifiedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"lastModifiedAt"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventblastmodifiedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"lastModifiedBy"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addedaffectedentityeventbparentitembcodeparenttimelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddedAffectedEntityEvent.",(0,l.kt)("b",null,"parentItem"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"auditednode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,l.kt)("h4",{id:"basenode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,l.kt)("h4",{id:"timelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/add-affected-entity-to-issue-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AddAffectedEntityToIssuePayload")),"  ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/unions/public-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,l.kt)(b,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);