"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77922],{895077:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>o,assets:()=>u,contentTitle:()=>r,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(487462),i=a(667294),l=a(603905);const p={id:"user-filter-input",title:"UserFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,d={unversionedId:"graphql/api-public/inputs/user-filter-input",id:"graphql/api-public/inputs/user-filter-input",title:"UserFilterInput",description:"Filter used to filter User",source:"@site/docs/graphql/api-public/inputs/user-filter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/user-filter-input",permalink:"/gropius-docs/graphql/api-public/inputs/user-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"user-filter-input",title:"UserFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},u={},s=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),o=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>and</b></code><Bullet /><code>[UserFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbandbcodeuserfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>assignments</b></code><Bullet /><code>AssignmentListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbassignmentsbcodeassignmentlistfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>createdNodes</b></code><Bullet /><code>AuditedNodeListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbcreatednodesbcodeauditednodelistfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>displayName</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbdisplaynamebcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>email</b></code><Bullet /><code>NullableStringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbemailbcodenullablestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>id</b></code><Bullet /><code>IDFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbidbcodeidfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>isGropiusUserAnd</b></code><Bullet /><code>GropiusUserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbisgropiususerandbcodegropiususerfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>isIMSUserAnd</b></code><Bullet /><code>IMSUserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbisimsuserandbcodeimsuserfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>not</b></code><Bullet /><code>UserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbnotbcodeuserfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>or</b></code><Bullet /><code>[UserFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputborbcodeuserfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>participatedIssues</b></code><Bullet /><code>IssueListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbparticipatedissuesbcodeissuelistfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserFilterInput.<b>username</b></code><Bullet /><code>NullableStringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userfilterinputbusernamebcodenullablestringfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:p,startOpen:r=!1}=e;const[d,u]=(0,i.useState)(r);return(0,l.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&p)},b={Bullet:s,SpecifiedBy:o,Badge:c,toc:m,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Filter used to filter User"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input UserFilterInput {\n  and: [UserFilterInput!]\n  assignments: AssignmentListFilterInput\n  createdNodes: AuditedNodeListFilterInput\n  displayName: StringFilterInput\n  email: NullableStringFilterInput\n  id: IDFilterInput\n  isGropiusUserAnd: GropiusUserFilterInput\n  isIMSUserAnd: IMSUserFilterInput\n  not: UserFilterInput\n  or: [UserFilterInput!]\n  participatedIssues: IssueListFilterInput\n  username: NullableStringFilterInput\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbandbcodeuserfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"and"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/user-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[UserFilterInput!]"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Connects all subformulas via and")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbassignmentsbcodeassignmentlistfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"assignments"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/assignment-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AssignmentListFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by assignments")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbcreatednodesbcodeauditednodelistfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"createdNodes"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/audited-node-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNodeListFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by createdNodes")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbdisplaynamebcodestringfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"displayName"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by displayName")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbemailbcodenullablestringfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"email"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/nullable-string-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"NullableStringFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by email")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbidbcodeidfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/idfilter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IDFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbisgropiususerandbcodegropiususerfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"isGropiusUserAnd"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/gropius-user-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for nodes of type GropiusUser")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbisimsuserandbcodeimsuserfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"isIMSUserAnd"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/imsuser-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IMSUserFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for nodes of type IMSUser")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbnotbcodeuserfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"not"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/user-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UserFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Negates the subformula")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputborbcodeuserfilterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"or"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/user-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[UserFilterInput!]"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Connects all subformulas via or")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbparticipatedissuesbcodeissuelistfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"participatedIssues"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/issue-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueListFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by participatedIssues")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userfilterinputbusernamebcodenullablestringfilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserFilterInput.",(0,l.kt)("b",null,"username"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/nullable-string-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"NullableStringFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by username")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/abstract-type-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AbstractTypeChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/added-affected-entity-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedAffectedEntityEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/added-artefact-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedArtefactEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/added-label-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedLabelEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/added-to-pinned-issues-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedToPinnedIssuesEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/added-to-trackable-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddedToTrackableEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/artefact-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ArtefactFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/assignment-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AssignmentFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/assignment-type-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AssignmentTypeChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/audited-node-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNodeFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/body-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"BodyFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/comment-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CommentFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/incoming-relation-type-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IncomingRelationTypeChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-comment-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-relation-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueRelationFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/label-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"LabelFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/named-audited-node-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"NamedAuditedNodeFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/outgoing-relation-type-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"OutgoingRelationTypeChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/parent-timeline-item-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ParentTimelineItemFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/priority-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"PriorityChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/public-timeline-item-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicTimelineItemFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/related-by-issue-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RelatedByIssueEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-type-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RelationTypeChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-affected-entity-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedAffectedEntityEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-artefact-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedArtefactEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-assignment-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedAssignmentEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-from-pinned-issues-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedFromPinnedIssuesEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-from-trackable-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedFromTrackableEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-incoming-relation-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedIncomingRelationEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-label-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedLabelEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-outgoing-relation-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedOutgoingRelationEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-relation-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedRelationEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/removed-templated-field-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RemovedTemplatedFieldEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/queries/search-users"},(0,l.kt)("inlineCode",{parentName:"a"},"searchUsers")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/state-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"StateChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/template-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TemplateChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/templated-field-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TemplatedFieldChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/timeline-item-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TimelineItemFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/title-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TitleChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/type-changed-event-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TypeChangedEventFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/user-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UserFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/user-list-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UserListFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);