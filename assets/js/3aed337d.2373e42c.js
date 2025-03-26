"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53110],{228294:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>c,assets:()=>i,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>b});var o=a(487462),n=a(667294),d=a(603905);const l={id:"update-project-input",title:"UpdateProjectInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,p={unversionedId:"graphql/api-public/inputs/update-project-input",id:"graphql/api-public/inputs/update-project-input",title:"UpdateProjectInput",description:"Input for the updateProject mutation",source:"@site/docs/graphql/api-public/inputs/update-project-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/update-project-input",permalink:"/gropius-docs/graphql/api-public/inputs/update-project-input",draft:!1,tags:[],version:"current",frontMatter:{id:"update-project-input",title:"UpdateProjectInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},i={},s=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>addedPermissions</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateprojectinputbaddedpermissionsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>defaultView</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateprojectinputbdefaultviewbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateprojectinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateprojectinputbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateprojectinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>relationLayouts</b></code><Bullet /><code>[UpdateRelationLayoutInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-updateprojectinputbrelationlayoutsbcodeupdaterelationlayoutinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>relationPartnerLayouts</b></code><Bullet /><code>[UpdateRelationPartnerLayoutInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-updateprojectinputbrelationpartnerlayoutsbcodeupdaterelationpartnerlayoutinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>removedPermissions</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateprojectinputbremovedpermissionsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateProjectInput.<b>repositoryURL</b></code><Bullet /><code>URL</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateprojectinputbrepositoryurlbcodeurl-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[p,i]=(0,n.useState)(r);return(0,d.kt)("details",(0,o.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&l)},m={Bullet:s,SpecifiedBy:c,Badge:u,toc:b,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,d.kt)(k,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Input for the updateProject mutation"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateProjectInput {\n  addedPermissions: [ID!]\n  defaultView: ID\n  description: String\n  id: ID!\n  name: String\n  relationLayouts: [UpdateRelationLayoutInput!]\n  relationPartnerLayouts: [UpdateRelationPartnerLayoutInput!]\n  removedPermissions: [ID!]\n  repositoryURL: URL\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbaddedpermissionsbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"addedPermissions"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Ids of permissions to add, must be disjoint with removedPermissions.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbdefaultviewbcodeid-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"defaultView"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The default view for the project")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbdescriptionbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"description"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The description of the NamedNode")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"id"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the node to update")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbnamebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"name"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The new name of the NamedNode, must not be empty")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbrelationlayoutsbcodeupdaterelationlayoutinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"relationLayouts"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/update-relation-layout-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[UpdateRelationLayoutInput!]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Defines the new layout of a set of Relations")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbrelationpartnerlayoutsbcodeupdaterelationpartnerlayoutinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"relationPartnerLayouts"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/update-relation-partner-layout-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[UpdateRelationPartnerLayoutInput!]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Defines the new layout of a set of RelationPartners")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbremovedpermissionsbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"removedPermissions"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Ids of permissions to remove, must be disjoint with addedPermissions.\nThere must always be at least one permissions granting ADMIN to some GropiusUser left.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateprojectinputbrepositoryurlbcodeurl-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateProjectInput.",(0,d.kt)("b",null,"repositoryURL"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/url"},(0,d.kt)("inlineCode",{parentName:"a"},"URL"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The repositoryURL of the named node")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/update-project"},(0,d.kt)("inlineCode",{parentName:"a"},"updateProject")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);