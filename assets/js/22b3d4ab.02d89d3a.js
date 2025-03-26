"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72771],{484517:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>b,assets:()=>r,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var l=a(487462),n=a(667294),d=a(603905);const s={id:"related-by-issue-event",title:"RelatedByIssueEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"graphql/api-public/objects/related-by-issue-event",id:"graphql/api-public/objects/related-by-issue-event",title:"RelatedByIssueEvent",description:"Event representing that the Issue was used in an IssueRelation as related issue.",source:"@site/docs/graphql/api-public/objects/related-by-issue-event.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/related-by-issue-event",permalink:"/gropius-docs/graphql/api-public/objects/related-by-issue-event",draft:!1,tags:[],version:"current",frontMatter:{id:"related-by-issue-event",title:"RelatedByIssueEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},c=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relatedbyissueeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-relatedbyissueeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relatedbyissueeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relatedbyissueeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relatedbyissueeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relatedbyissueeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-relatedbyissueeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-relatedbyissueeventbparentitembcodeparenttimelineitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelatedByIssueEvent.<b>relation</b></code><Bullet /><code>IssueRelation</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relatedbyissueeventbrelationbcodeissuerelation-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4}],p=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:o=!1}=e;const[i,r]=(0,n.useState)(o);return(0,d.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&s)},g={Bullet:c,SpecifiedBy:b,Badge:u,toc:m,Details:p},y="wrapper";function k(e){let{components:t,...a}=e;return(0,d.kt)(y,(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Event representing that the Issue was used in an IssueRelation as related issue.\nThe IssueRelation may not be active any more.\nREAD is granted if READ is granted on ",(0,d.kt)("inlineCode",{parentName:"p"},"relation"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type RelatedByIssueEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  parentItem: ParentTimelineItem\n  relation: IssueRelation\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventbcreatedbybcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"createdBy"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventbhaspermissionbcodeboolean--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"hasPermission"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-relatedbyissueeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.hasPermission.",(0,d.kt)("b",null,"permission"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,d.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventbidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"id"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventbissuebcodeissue-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"issue"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue"},(0,d.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventblastmodifiedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"lastModifiedAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventblastmodifiedbybcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"lastModifiedBy"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventbparentitembcodeparenttimelineitem-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"parentItem"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,d.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-relatedbyissueeventbrelationbcodeissuerelation-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RelatedByIssueEvent.",(0,d.kt)("b",null,"relation"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation"},(0,d.kt)("inlineCode",{parentName:"a"},"IssueRelation"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The IssueRelation the Issue is related at, null if deleted.")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"auditednode-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,d.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,d.kt)("h4",{id:"basenode-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,d.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,d.kt)("h4",{id:"node-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,d.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,d.kt)("h4",{id:"timelineitem-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/timeline-item"},(0,d.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")))}k.isMDXComponent=!0}}]);