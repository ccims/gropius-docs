"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40961],{318354:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var s=a(487462),n=a(667294),l=a(603905);const i={id:"create-issue",title:"createIssue",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,o={unversionedId:"graphql/api-public/mutations/create-issue",id:"graphql/api-public/mutations/create-issue",title:"createIssue",description:"Creates a new Issue on at least one Trackable, requires CREATE_ISSUES on all Trackables it should be created on.",source:"@site/docs/graphql/api-public/mutations/create-issue.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/create-issue",permalink:"/gropius-docs/graphql/api-public/mutations/create-issue",draft:!1,tags:[],version:"current",frontMatter:{id:"create-issue",title:"createIssue",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},u={},d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createIssue.<b>input</b></code><Bullet /><code>CreateIssueInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createissuebinputbcodecreateissueinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateIssuePayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"createissuepayload-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:r=!1}=e;const[o,u]=(0,n.useState)(r);return(0,l.kt)("details",(0,s.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&i)},m={Bullet:d,SpecifiedBy:c,Badge:p,toc:g,Details:b},k="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Creates a new Issue on at least one Trackable, requires CREATE_ISSUES on all Trackables it should be created on.\nAdditionally, checks that the ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"templatedFields")," are compatible with the ",(0,l.kt)("inlineCode",{parentName:"p"},"template"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"createIssue(\n  input: CreateIssueInput!\n): CreateIssuePayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createissuebinputbcodecreateissueinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"createIssue.",(0,l.kt)("b",null,"input"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/create-issue-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateIssueInput!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Defines the created Issue")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"createissuepayload-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/create-issue-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateIssuePayload"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}h.isMDXComponent=!0}}]);