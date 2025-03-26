"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1069],{987201:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var s=r(487462),a=r(667294),n=r(603905);const i={id:"current-user",title:"currentUser",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"graphql/api-public/queries/current-user",id:"graphql/api-public/queries/current-user",title:"currentUser",description:"The current authenticated user",source:"@site/docs/graphql/api-public/queries/current-user.mdx",sourceDirName:"graphql/api-public/queries",slug:"/graphql/api-public/queries/current-user",permalink:"/gropius-docs/graphql/api-public/queries/current-user",draft:!1,tags:[],version:"current",frontMatter:{id:"current-user",title:"currentUser",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},u={},c=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),g=[{value:"Type",id:"type",level:3},{value:'<code>GropiusUser</code> <Badge class="badge badge--secondary" text="object"/>',id:"gropiususer-",level:4}],h=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:l=!1}=e;const[o,u]=(0,a.useState)(l);return(0,n.kt)("details",(0,s.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},o?t:r),o&&i)},k={Bullet:c,SpecifiedBy:p,Badge:d,toc:g,Details:h},m="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,s.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The current authenticated user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"currentUser: GropiusUser\n")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"gropiususer-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/gropius-user"},(0,n.kt)("inlineCode",{parentName:"a"},"GropiusUser"))," ",(0,n.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A user of the Gropius System.\nThe username can be used as unique identifier for GropiusUsers.\nIMSUsers can be linked to a GropiusUser.\nNote however that this link does not affect relationships, e.g. if an IMSUser is part of an Assignment,\nafter the IMSUser was linked to a GropiusUser, the GropiusUser does not link directly to the Assignment.\nTherefore, to collect all Assignments, Issue participations etc. it is necessary to also request all\nlinked IMSUsers and their Assignments etc.")))}b.isMDXComponent=!0}}]);