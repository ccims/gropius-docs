"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73860],{231462:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>b,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=l(487462),n=l(667294),d=l(603905);const i={id:"added-label-event-filter-input",title:"AddedLabelEventFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,o={unversionedId:"graphql/api-internal/inputs/added-label-event-filter-input",id:"graphql/api-internal/inputs/added-label-event-filter-input",title:"AddedLabelEventFilterInput",description:"Filter used to filter AddedLabelEvent",source:"@site/docs/graphql/api-internal/inputs/added-label-event-filter-input.mdx",sourceDirName:"graphql/api-internal/inputs",slug:"/graphql/api-internal/inputs/added-label-event-filter-input",permalink:"/gropius-docs/graphql/api-internal/inputs/added-label-event-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"added-label-event-filter-input",title:"AddedLabelEventFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},u=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>addedLabel</b></code><Bullet /><code>LabelFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbaddedlabelbcodelabelfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>and</b></code><Bullet /><code>[AddedLabelEventFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbandbcodeaddedlabeleventfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>createdAt</b></code><Bullet /><code>DateTimeFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbcreatedatbcodedatetimefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>createdBy</b></code><Bullet /><code>UserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbcreatedbybcodeuserfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>id</b></code><Bullet /><code>IDFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbidbcodeidfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>issue</b></code><Bullet /><code>IssueFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbissuebcodeissuefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>lastModifiedAt</b></code><Bullet /><code>DateTimeFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputblastmodifiedatbcodedatetimefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>lastModifiedBy</b></code><Bullet /><code>UserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputblastmodifiedbybcodeuserfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>not</b></code><Bullet /><code>AddedLabelEventFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbnotbcodeaddedlabeleventfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>or</b></code><Bullet /><code>[AddedLabelEventFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputborbcodeaddedlabeleventfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>parentItem</b></code><Bullet /><code>ParentTimelineItemFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbparentitembcodeparenttimelineitemfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddedLabelEventFilterInput.<b>timelineItemTypes</b></code><Bullet /><code>[TimelineItemType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-addedlabeleventfilterinputbtimelineitemtypesbcodetimelineitemtype--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:l,children:i,startOpen:r=!1}=e;const[o,p]=(0,n.useState)(r);return(0,d.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},o?t:l),o&&i)},f={Bullet:u,SpecifiedBy:s,Badge:b,toc:c,Details:m},g="wrapper";function k(e){let{components:t,...l}=e;return(0,d.kt)(g,(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Filter used to filter AddedLabelEvent"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddedLabelEventFilterInput {\n  addedLabel: LabelFilterInput\n  and: [AddedLabelEventFilterInput!]\n  createdAt: DateTimeFilterInput\n  createdBy: UserFilterInput\n  id: IDFilterInput\n  issue: IssueFilterInput\n  lastModifiedAt: DateTimeFilterInput\n  lastModifiedBy: UserFilterInput\n  not: AddedLabelEventFilterInput\n  or: [AddedLabelEventFilterInput!]\n  parentItem: ParentTimelineItemFilterInput\n  timelineItemTypes: [TimelineItemType!]\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbaddedlabelbcodelabelfilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"addedLabel"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/label-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"LabelFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filters for nodes where the related node match this filter")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbandbcodeaddedlabeleventfilterinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"and"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/added-label-event-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[AddedLabelEventFilterInput!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Connects all subformulas via and")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbcreatedatbcodedatetimefilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/date-time-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTimeFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by createdAt")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbcreatedbybcodeuserfilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"createdBy"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/user-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"UserFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filters for nodes where the related node match this filter")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbidbcodeidfilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"id"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/idfilter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"IDFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by id")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbissuebcodeissuefilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"issue"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/issue-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"IssueFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filters for nodes where the related node match this filter")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputblastmodifiedatbcodedatetimefilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"lastModifiedAt"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/date-time-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTimeFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter by lastModifiedAt")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputblastmodifiedbybcodeuserfilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"lastModifiedBy"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/user-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"UserFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filters for nodes where the related node match this filter")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbnotbcodeaddedlabeleventfilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"not"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/added-label-event-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddedLabelEventFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Negates the subformula")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputborbcodeaddedlabeleventfilterinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"or"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/added-label-event-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[AddedLabelEventFilterInput!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Connects all subformulas via or")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbparentitembcodeparenttimelineitemfilterinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"parentItem"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/parent-timeline-item-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"ParentTimelineItemFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filters for nodes where the related node match this filter")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addedlabeleventfilterinputbtimelineitemtypesbcodetimelineitemtype--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddedLabelEventFilterInput.",(0,d.kt)("b",null,"timelineItemTypes"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/enums/timeline-item-type"},(0,d.kt)("inlineCode",{parentName:"a"},"[TimelineItemType!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter for specific timeline items. Entries are joined by OR")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/added-label-event-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddedLabelEventFilterInput")),"  ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/audited-node-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AuditedNodeFilterInput")),"  ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/public-timeline-item-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"PublicTimelineItemFilterInput")),"  ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/timeline-item-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"TimelineItemFilterInput")),"  ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);