"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87532],{285649:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var l=a(487462),n=a(667294),i=a(603905);const s={id:"delete-imspermission",title:"deleteIMSPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,d={unversionedId:"graphql/api-public/mutations/delete-imspermission",id:"graphql/api-public/mutations/delete-imspermission",title:"deleteIMSPermission",description:"Deletes a IMSPermission, requires ADMIN on all IMSs the permission currently affects.",source:"@site/docs/graphql/api-public/mutations/delete-imspermission.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/delete-imspermission",permalink:"/gropius-docs/graphql/api-public/mutations/delete-imspermission",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-imspermission",title:"deleteIMSPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},p=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteIMSPermission.<b>input</b></code><Bullet /><code>DeleteNodeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-deleteimspermissionbinputbcodedeletenodeinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteNodePayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"deletenodepayload-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:o=!1}=e;const[d,r]=(0,n.useState)(o);return(0,i.kt)("details",(0,l.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&s)},b={Bullet:p,SpecifiedBy:u,Badge:c,toc:m,Details:g},k="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Deletes a IMSPermission, requires ADMIN on all IMSs the permission currently affects.\nEnsures that after the permission is deleted, all previously affected IMSs still have a permission which\ngrants ADMIN to at least one user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteIMSPermission(\n  input: DeleteNodeInput!\n): DeleteNodePayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-deleteimspermissionbinputbcodedeletenodeinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"deleteIMSPermission.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/delete-node-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DeleteNodeInput!"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Defines which IMSPermission to delete")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"deletenodepayload-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/delete-node-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"DeleteNodePayload"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Payload type for delete node mutations")))}h.isMDXComponent=!0}}]);