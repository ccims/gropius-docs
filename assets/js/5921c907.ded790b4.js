"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60328],{627803:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>r,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var n=a(487462),s=a(667294),o=a(603905);const u={id:"update-issue-comment",title:"updateIssueComment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"graphql/api-public/mutations/update-issue-comment",id:"graphql/api-public/mutations/update-issue-comment",title:"updateIssueComment",description:"Updates an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the",source:"@site/docs/graphql/api-public/mutations/update-issue-comment.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/update-issue-comment",permalink:"/gropius-docs/graphql/api-public/mutations/update-issue-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"update-issue-comment",title:"updateIssueComment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},p=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),r=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateIssueComment.<b>input</b></code><Bullet /><code>UpdateIssueCommentInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-updateissuecommentbinputbcodeupdateissuecommentinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateIssueCommentPayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"updateissuecommentpayload-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:u,startOpen:l=!1}=e;const[i,d]=(0,s.useState)(l);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&u)},b={Bullet:p,SpecifiedBy:m,Badge:r,toc:c,Details:g},h="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Updates an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the\nIssue is on. Otherwise, requires MODERATOR on any of the Trackables the Issue is on.\nRequires READ on referenced Artefacts, additionally, added ones must be part of a Trackable the Issue is on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateIssueComment(\n  input: UpdateIssueCommentInput!\n): UpdateIssueCommentPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateissuecommentbinputbcodeupdateissuecommentinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateIssueComment.",(0,o.kt)("b",null,"input"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/update-issue-comment-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateIssueCommentInput!"))," ",(0,o.kt)(r,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(r,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Defines how to update which IssueComment")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updateissuecommentpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/update-issue-comment-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateIssueCommentPayload"))," ",(0,o.kt)(r,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}k.isMDXComponent=!0}}]);