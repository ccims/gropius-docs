"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40295],{916745:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>r,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var n=a(487462),d=a(667294),l=a(603905);const o={id:"type-changed-event",title:"TypeChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"graphql/api-public/objects/type-changed-event",id:"graphql/api-public/objects/type-changed-event",title:"TypeChangedEvent",description:"Event representing that the type of an Issue changed.",source:"@site/docs/graphql/api-public/objects/type-changed-event.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/type-changed-event",permalink:"/gropius-docs/graphql/api-public/objects/type-changed-event",draft:!1,tags:[],version:"current",frontMatter:{id:"type-changed-event",title:"TypeChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},r=()=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(d.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-typechangedeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-typechangedeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-typechangedeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-typechangedeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-typechangedeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-typechangedeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-typechangedeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>newType</b></code><Bullet /><code>IssueType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-typechangedeventbnewtypebcodeissuetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>oldType</b></code><Bullet /><code>IssueType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-typechangedeventboldtypebcodeissuetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TypeChangedEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-typechangedeventbparentitembcodeparenttimelineitem-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:s=!1}=e;const[i,c]=(0,d.useState)(s);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},h={Bullet:r,SpecifiedBy:p,Badge:g,toc:b,Details:m},y="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Event representing that the type of an Issue changed.\nREAD is granted if READ is granted on ",(0,l.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type TypeChangedEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  newType: IssueType!\n  oldType: IssueType!\n  parentItem: ParentTimelineItem\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventbcreatedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"createdBy"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventbhaspermissionbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"hasPermission"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-typechangedeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.hasPermission.",(0,l.kt)("b",null,"permission"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"id"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventbissuebcodeissue-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"issue"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue"},(0,l.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventblastmodifiedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"lastModifiedAt"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventblastmodifiedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"lastModifiedBy"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventbnewtypebcodeissuetype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"newType"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-type"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueType!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The new type.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventboldtypebcodeissuetype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"oldType"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-type"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueType!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The old type.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-typechangedeventbparentitembcodeparenttimelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TypeChangedEvent.",(0,l.kt)("b",null,"parentItem"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"auditednode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,l.kt)("h4",{id:"basenode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,l.kt)("h4",{id:"timelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/change-issue-type-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"ChangeIssueTypePayload")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/unions/public-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);