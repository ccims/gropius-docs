"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18871],{874441:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>k,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var d=t(487462),l=t(667294),n=t(603905);const o={id:"added-to-trackable-event",title:"AddedToTrackableEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,r={unversionedId:"graphql/api-public/objects/added-to-trackable-event",id:"graphql/api-public/objects/added-to-trackable-event",title:"AddedToTrackableEvent",description:"Event representing that the Issue was added to a Trackable.",source:"@site/docs/graphql/api-public/objects/added-to-trackable-event.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/added-to-trackable-event",permalink:"/gropius-docs/graphql/api-public/objects/added-to-trackable-event",draft:!1,tags:[],version:"current",frontMatter:{id:"added-to-trackable-event",title:"AddedToTrackableEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},s=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>addedToTrackable</b></code><Bullet /><code>Trackable</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedtotrackableeventbaddedtotrackablebcodetrackable-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedtotrackableeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedtotrackableeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedtotrackableeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedtotrackableeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addedtotrackableeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addedtotrackableeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedtotrackableeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedToTrackableEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-addedtotrackableeventbparentitembcodeparenttimelineitem-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=e=>{let{dataOpen:a,dataClose:t,children:o,startOpen:i=!1}=e;const[r,c]=(0,l.useState)(i);return(0,n.kt)("details",(0,d.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},r?a:t),r&&o)},g={Bullet:s,SpecifiedBy:b,Badge:k,toc:m,Details:p},u="wrapper";function h(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,d.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Event representing that the Issue was added to a Trackable.\nREAD is granted if READ is granted on ",(0,n.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddedToTrackableEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  addedToTrackable: Trackable\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  parentItem: ParentTimelineItem\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventbaddedtotrackablebcodetrackable-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"addedToTrackable"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/trackable"},(0,n.kt)("inlineCode",{parentName:"a"},"Trackable"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Trackable the Issue was added to, null if deleted.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventbcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventbcreatedbybcodeuser--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"createdBy"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventbhaspermissionbcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"hasPermission"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-addedtotrackableeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.hasPermission.",(0,n.kt)("b",null,"permission"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,n.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"id"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventbissuebcodeissue-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"issue"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue"},(0,n.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventblastmodifiedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"lastModifiedAt"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventblastmodifiedbybcodeuser--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"lastModifiedBy"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addedtotrackableeventbparentitembcodeparenttimelineitem-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddedToTrackableEvent.",(0,n.kt)("b",null,"parentItem"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,n.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"auditednode-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,n.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,n.kt)("h4",{id:"basenode-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,n.kt)("h4",{id:"node-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,n.kt)("h4",{id:"timelineitem-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/timeline-item"},(0,n.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,n.kt)(k,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/add-issue-to-trackable-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"AddIssueToTrackablePayload")),"  ",(0,n.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/unions/public-timeline-item"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,n.kt)(k,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);