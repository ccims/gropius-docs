"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56548],{961105:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(487462),s=a(667294),l=a(603905);const o={id:"create-issue-comment-input",title:"CreateIssueCommentInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,d={unversionedId:"graphql/api-public/inputs/create-issue-comment-input",id:"graphql/api-public/inputs/create-issue-comment-input",title:"CreateIssueCommentInput",description:"Input for the createIssueComment mutation",source:"@site/docs/graphql/api-public/inputs/create-issue-comment-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/create-issue-comment-input",permalink:"/gropius-docs/graphql/api-public/inputs/create-issue-comment-input",draft:!1,tags:[],version:"current",frontMatter:{id:"create-issue-comment-input",title:"CreateIssueCommentInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},i={},c=()=>(0,l.kt)(s.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(s.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(s.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateIssueCommentInput.<b>answers</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createissuecommentinputbanswersbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateIssueCommentInput.<b>body</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createissuecommentinputbbodybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateIssueCommentInput.<b>issue</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createissuecommentinputbissuebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateIssueCommentInput.<b>referencedArtefacts</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createissuecommentinputbreferencedartefactsbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:r=!1}=e;const[d,i]=(0,s.useState)(r);return(0,l.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&o)},g={Bullet:c,SpecifiedBy:u,Badge:m,toc:p,Details:b},k="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Input for the createIssueComment mutation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateIssueCommentInput {\n  answers: ID\n  body: String!\n  issue: ID!\n  referencedArtefacts: [ID!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createissuecommentinputbanswersbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateIssueCommentInput.",(0,l.kt)("b",null,"answers"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the Comment the created IssueComment answers")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createissuecommentinputbbodybcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateIssueCommentInput.",(0,l.kt)("b",null,"body"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Initial body of the IssueComment")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createissuecommentinputbissuebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateIssueCommentInput.",(0,l.kt)("b",null,"issue"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The id of the Issue the IssueComment is created on")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createissuecommentinputbreferencedartefactsbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateIssueCommentInput.",(0,l.kt)("b",null,"referencedArtefacts"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ids of initially referenced artefacts")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/create-issue-comment"},(0,l.kt)("inlineCode",{parentName:"a"},"createIssueComment")),"  ",(0,l.kt)(m,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);