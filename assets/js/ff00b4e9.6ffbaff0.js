"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84040],{990229:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>o,assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(487462),i=a(667294),l=a(603905);const r={id:"issue-list-filter-input",title:"IssueListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},p=void 0,s={unversionedId:"graphql/api-internal/inputs/issue-list-filter-input",id:"graphql/api-internal/inputs/issue-list-filter-input",title:"IssueListFilterInput",description:"Used to filter by a connection-based property. Fields are joined by AND",source:"@site/docs/graphql/api-internal/inputs/issue-list-filter-input.mdx",sourceDirName:"graphql/api-internal/inputs",slug:"/graphql/api-internal/inputs/issue-list-filter-input",permalink:"/gropius-docs/graphql/api-internal/inputs/issue-list-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-list-filter-input",title:"IssueListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},u=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),o=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IssueListFilterInput.<b>all</b></code><Bullet /><code>IssueFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuelistfilterinputballbcodeissuefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueListFilterInput.<b>any</b></code><Bullet /><code>IssueFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuelistfilterinputbanybcodeissuefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueListFilterInput.<b>none</b></code><Bullet /><code>IssueFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuelistfilterinputbnonebcodeissuefilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:p=!1}=e;const[s,d]=(0,i.useState)(p);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&r)},k={Bullet:u,SpecifiedBy:o,Badge:c,toc:m,Details:g},f="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Used to filter by a connection-based property. Fields are joined by AND"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input IssueListFilterInput {\n  all: IssueFilterInput\n  any: IssueFilterInput\n  none: IssueFilterInput\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuelistfilterinputballbcodeissuefilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueListFilterInput.",(0,l.kt)("b",null,"all"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filters for nodes where all of the related nodes match this filter")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuelistfilterinputbanybcodeissuefilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueListFilterInput.",(0,l.kt)("b",null,"any"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filters for nodes where any of the related nodes match this filter")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuelistfilterinputbnonebcodeissuefilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueListFilterInput.",(0,l.kt)("b",null,"none"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueFilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filters for nodes where none of the related nodes match this filter")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/affected-by-issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AffectedByIssueFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/aggregated-issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AggregatedIssueFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/artefact-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ArtefactFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/component-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ComponentFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/component-version-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ComponentVersionFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/gropius-user-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsuser-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IMSUserFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"InterfaceFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-part-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"InterfacePartFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-specification-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-specification-version-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-priority-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssuePriorityFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-state-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueStateFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-type-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueTypeFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/label-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"LabelFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/named-affected-by-issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"NamedAffectedByIssueFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/project-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ProjectFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/relation-partner-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RelationPartnerFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/trackable-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TrackableFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/user-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UserFilterInput")),"  ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);