"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89535],{230367:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(487462),l=n(667294),a=n(603905);const s={id:"issue-comment-list-filter-input",title:"IssueCommentListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,r={unversionedId:"graphql/api-public/inputs/issue-comment-list-filter-input",id:"graphql/api-public/inputs/issue-comment-list-filter-input",title:"IssueCommentListFilterInput",description:"Used to filter by a connection-based property. Fields are joined by AND",source:"@site/docs/graphql/api-public/inputs/issue-comment-list-filter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/issue-comment-list-filter-input",permalink:"/gropius-docs/graphql/api-public/inputs/issue-comment-list-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-comment-list-filter-input",title:"IssueCommentListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},u=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IssueCommentListFilterInput.<b>all</b></code><Bullet /><code>IssueCommentFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuecommentlistfilterinputballbcodeissuecommentfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueCommentListFilterInput.<b>any</b></code><Bullet /><code>IssueCommentFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuecommentlistfilterinputbanybcodeissuecommentfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueCommentListFilterInput.<b>none</b></code><Bullet /><code>IssueCommentFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuecommentlistfilterinputbnonebcodeissuecommentfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:o=!1}=e;const[r,p]=(0,l.useState)(o);return(0,a.kt)("details",(0,i.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&s)},b={Bullet:u,SpecifiedBy:m,Badge:d,toc:c,Details:f},k="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Used to filter by a connection-based property. Fields are joined by AND"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input IssueCommentListFilterInput {\n  all: IssueCommentFilterInput\n  any: IssueCommentFilterInput\n  none: IssueCommentFilterInput\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-issuecommentlistfilterinputballbcodeissuecommentfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IssueCommentListFilterInput.",(0,a.kt)("b",null,"all"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/issue-comment-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filters for nodes where all of the related nodes match this filter")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-issuecommentlistfilterinputbanybcodeissuecommentfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IssueCommentListFilterInput.",(0,a.kt)("b",null,"any"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/issue-comment-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filters for nodes where any of the related nodes match this filter")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-issuecommentlistfilterinputbnonebcodeissuecommentfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IssueCommentListFilterInput.",(0,a.kt)("b",null,"none"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/issue-comment-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filters for nodes where none of the related nodes match this filter")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/artefact-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ArtefactFilterInput")),"  ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/body-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"BodyFilterInput")),"  ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/comment-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CommentFilterInput")),"  ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-comment-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput")),"  ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IssueFilterInput")),"  ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);