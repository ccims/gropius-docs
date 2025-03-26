"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83978],{3627:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>o,Details:()=>k,SpecifiedBy:()=>c,assets:()=>s,contentTitle:()=>l,default:()=>x,frontMatter:()=>p,metadata:()=>i,toc:()=>g});var n=t(487462),d=t(667294),r=t(603905);const p={id:"node",title:"Node",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"graphql/api-internal/interfaces/node",id:"graphql/api-internal/interfaces/node",title:"Node",description:"Base class of all nodes",source:"@site/docs/graphql/api-internal/interfaces/node.mdx",sourceDirName:"graphql/api-internal/interfaces",slug:"/graphql/api-internal/interfaces/node",permalink:"/gropius-docs/graphql/api-internal/interfaces/node",draft:!1,tags:[],version:"current",frontMatter:{id:"node",title:"Node",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},o=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Node.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodebidbcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Implemented by",id:"implemented-by",level:3}],k=e=>{let{dataOpen:a,dataClose:t,children:p,startOpen:l=!1}=e;const[i,s]=(0,d.useState)(l);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?a:t),i&&p)},b={Bullet:o,SpecifiedBy:c,Badge:m,toc:g,Details:k},y="wrapper";function x(e){let{components:a,...t}=e;return(0,r.kt)(y,(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Base class of all nodes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Node {\n  id: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-nodebidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Node.",(0,r.kt)("b",null,"id"))),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/queries/node"},(0,r.kt)("inlineCode",{parentName:"a"},"node")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/abstract-type-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"AbstractTypeChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/added-affected-entity-event"},(0,r.kt)("inlineCode",{parentName:"a"},"AddedAffectedEntityEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/added-artefact-event"},(0,r.kt)("inlineCode",{parentName:"a"},"AddedArtefactEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/added-label-event"},(0,r.kt)("inlineCode",{parentName:"a"},"AddedLabelEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/added-to-pinned-issues-event"},(0,r.kt)("inlineCode",{parentName:"a"},"AddedToPinnedIssuesEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/added-to-trackable-event"},(0,r.kt)("inlineCode",{parentName:"a"},"AddedToTrackableEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/affected-by-issue"},(0,r.kt)("inlineCode",{parentName:"a"},"AffectedByIssue")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/aggregated-issue"},(0,r.kt)("inlineCode",{parentName:"a"},"AggregatedIssue")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/aggregated-issue-relation"},(0,r.kt)("inlineCode",{parentName:"a"},"AggregatedIssueRelation")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/artefact"},(0,r.kt)("inlineCode",{parentName:"a"},"Artefact")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/artefact-template"},(0,r.kt)("inlineCode",{parentName:"a"},"ArtefactTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/assignment"},(0,r.kt)("inlineCode",{parentName:"a"},"Assignment")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/assignment-type"},(0,r.kt)("inlineCode",{parentName:"a"},"AssignmentType")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/assignment-type-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"AssignmentTypeChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/audited-node"},(0,r.kt)("inlineCode",{parentName:"a"},"AuditedNode")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/base-node"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseNode")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/base-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"BasePermission")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/base-template"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/body"},(0,r.kt)("inlineCode",{parentName:"a"},"Body")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/comment"},(0,r.kt)("inlineCode",{parentName:"a"},"Comment")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentPermission")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-template"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-version"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentVersion")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-version-template"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentVersionTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/fill-style"},(0,r.kt)("inlineCode",{parentName:"a"},"FillStyle")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/global-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"GlobalPermission")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/gropius-user"},(0,r.kt)("inlineCode",{parentName:"a"},"GropiusUser")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/ims"},(0,r.kt)("inlineCode",{parentName:"a"},"IMS")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsissue"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSIssue")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsissue-template"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSIssueTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imspermission"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSPermission")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsproject"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSProject")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsproject-template"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSProjectTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imstemplate"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsuser"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSUser")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsuser-template"},(0,r.kt)("inlineCode",{parentName:"a"},"IMSUserTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/incoming-relation-type-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"IncomingRelationTypeChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface"},(0,r.kt)("inlineCode",{parentName:"a"},"Interface")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-definition"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceDefinition")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-part"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfacePart")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-part-template"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfacePartTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceSpecification")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-derivation-condition"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationDerivationCondition")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-template"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-version"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersion")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-version-template"},(0,r.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/intra-component-dependency-participant"},(0,r.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencyParticipant")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/intra-component-dependency-specification"},(0,r.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencySpecification")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/intra-component-dependency-specification-type"},(0,r.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencySpecificationType")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue"},(0,r.kt)("inlineCode",{parentName:"a"},"Issue")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"IssueComment")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-priority"},(0,r.kt)("inlineCode",{parentName:"a"},"IssuePriority")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-relation"},(0,r.kt)("inlineCode",{parentName:"a"},"IssueRelation")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-relation-type"},(0,r.kt)("inlineCode",{parentName:"a"},"IssueRelationType")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-state"},(0,r.kt)("inlineCode",{parentName:"a"},"IssueState")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-template"},(0,r.kt)("inlineCode",{parentName:"a"},"IssueTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-type"},(0,r.kt)("inlineCode",{parentName:"a"},"IssueType")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/label"},(0,r.kt)("inlineCode",{parentName:"a"},"Label")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/named-affected-by-issue"},(0,r.kt)("inlineCode",{parentName:"a"},"NamedAffectedByIssue")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/named-audited-node"},(0,r.kt)("inlineCode",{parentName:"a"},"NamedAuditedNode")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/named-node"},(0,r.kt)("inlineCode",{parentName:"a"},"NamedNode")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/node-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"NodePermission")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/outgoing-relation-type-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"OutgoingRelationTypeChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/parent-timeline-item"},(0,r.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/priority-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"PriorityChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project"},(0,r.kt)("inlineCode",{parentName:"a"},"Project")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"ProjectPermission")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/related-by-issue-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RelatedByIssueEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation"},(0,r.kt)("inlineCode",{parentName:"a"},"Relation")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-condition"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationCondition")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-layout"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationLayout")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/relation-partner"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationPartner")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-partner-layout"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationPartnerLayout")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/relation-partner-template"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-template"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/relation-type-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTypeChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-affected-entity-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedAffectedEntityEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-artefact-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedArtefactEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-assignment-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedAssignmentEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-from-pinned-issues-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedFromPinnedIssuesEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-from-trackable-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedFromTrackableEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-incoming-relation-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedIncomingRelationEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-label-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedLabelEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-outgoing-relation-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedOutgoingRelationEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/removed-relation-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedRelationEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/removed-templated-field-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RemovedTemplatedFieldEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/state-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"StateChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/stroke-style"},(0,r.kt)("inlineCode",{parentName:"a"},"StrokeStyle")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/sub-template"},(0,r.kt)("inlineCode",{parentName:"a"},"SubTemplate")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/sync-permission-target"},(0,r.kt)("inlineCode",{parentName:"a"},"SyncPermissionTarget")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/template"},(0,r.kt)("inlineCode",{parentName:"a"},"Template")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/template-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"TemplateChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/templated-field-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"TemplatedFieldChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/timeline-item"},(0,r.kt)("inlineCode",{parentName:"a"},"TimelineItem")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/title-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"TitleChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/trackable"},(0,r.kt)("inlineCode",{parentName:"a"},"Trackable")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/type-changed-event"},(0,r.kt)("inlineCode",{parentName:"a"},"TypeChangedEvent")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(o,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/view"},(0,r.kt)("inlineCode",{parentName:"a"},"View")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}x.isMDXComponent=!0}}]);