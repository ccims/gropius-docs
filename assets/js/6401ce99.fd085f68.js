"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46273],{4869:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(487462),s=a(667294),l=a(603905);const o={id:"delete-issue-comment",title:"deleteIssueComment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,i={unversionedId:"graphql/api-public/mutations/delete-issue-comment",id:"graphql/api-public/mutations/delete-issue-comment",title:"deleteIssueComment",description:"Deletes an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the",source:"@site/docs/graphql/api-public/mutations/delete-issue-comment.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/delete-issue-comment",permalink:"/gropius-docs/graphql/api-public/mutations/delete-issue-comment",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-issue-comment",title:"deleteIssueComment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},u={},r=()=>(0,l.kt)(s.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(s.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(s.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteIssueComment.<b>input</b></code><Bullet /><code>DeleteNodeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-deleteissuecommentbinputbcodedeletenodeinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteIssueCommentPayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"deleteissuecommentpayload-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:d=!1}=e;const[i,u]=(0,s.useState)(d);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},b={Bullet:r,SpecifiedBy:m,Badge:c,toc:p,Details:g},h="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Deletes an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the\nIssue is on. Otherwise, requires MODERATOR on any of the Trackables the Issue is on.\nThe IssueComment then is marked as deleted, its body set to "", and the referenced Artefacts are cleared.\nIt is no longer possible to update the IssueComment.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteIssueComment(\n  input: DeleteNodeInput!\n): DeleteIssueCommentPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteissuecommentbinputbcodedeletenodeinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteIssueComment.",(0,l.kt)("b",null,"input"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/delete-node-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteNodeInput!"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Defines how to update which IssueComment")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"deleteissuecommentpayload-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/delete-issue-comment-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteIssueCommentPayload"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}k.isMDXComponent=!0}}]);