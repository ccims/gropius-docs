"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31651],{583667:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var l=t(487462),o=t(667294),s=t(603905);const n={id:"global-permission",title:"GlobalPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,i={unversionedId:"graphql/api-public/objects/global-permission",id:"graphql/api-public/objects/global-permission",title:"GlobalPermission",description:"Permission associated with a set of users.",source:"@site/docs/graphql/api-public/objects/global-permission.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/global-permission",permalink:"/gropius-docs/graphql/api-public/objects/global-permission",draft:!1,tags:[],version:"current",frontMatter:{id:"global-permission",title:"GlobalPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.<b>allUsers</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionballusersbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.<b>entries</b></code><Bullet /><code>[PermissionEntry!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-globalpermissionbentriesbcodepermissionentry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.<b>users</b></code><Bullet /><code>GropiusUserConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-globalpermissionbusersbcodegropiususerconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.users.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionusersbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.users.<b>filter</b></code><Bullet /><code>GropiusUserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-globalpermissionusersbfilterbcodegropiususerfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.users.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionusersbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.users.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionusersblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.users.<b>orderBy</b></code><Bullet /><code>[GropiusUserOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-globalpermissionusersborderbybcodegropiususerorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>GlobalPermission.users.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-globalpermissionusersbskipbcodeint-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>BasePermission</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basepermission-",level:4},{value:'<code>Named</code> <Badge class="badge badge--secondary" text="interface"/>',id:"named-",level:4},{value:'<code>NamedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"namednode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:a,dataClose:t,children:n,startOpen:r=!1}=e;const[i,d]=(0,o.useState)(r);return(0,s.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?a:t),i&&n)},u={Bullet:c,SpecifiedBy:b,Badge:p,toc:m,Details:g},k="wrapper";function h(e){let{components:a,...t}=e;return(0,s.kt)(k,(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Permission associated with a set of users.\nCan have NodePermissions to grant permissions on specific Nodes.\nREAD is granted if the global admin is granted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type GlobalPermission implements BaseNode, BasePermission, Named, NamedNode, Node {\n  allUsers: Boolean!\n  description: String!\n  entries: [PermissionEntry!]!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  name: String!\n  users(\n    after: String\n    before: String\n    filter: GropiusUserFilterInput\n    first: Int\n    last: Int\n    orderBy: [GropiusUserOrder!]\n    skip: Int\n  ): GropiusUserConnection!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-globalpermissionballusersbcodeboolean--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.",(0,s.kt)("b",null,"allUsers"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If, the permission is granted to all users. Use with caution.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-globalpermissionbdescriptionbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.",(0,s.kt)("b",null,"description"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The description of this entity.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-globalpermissionbentriesbcodepermissionentry--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.",(0,s.kt)("b",null,"entries"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/enums/permission-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"[PermissionEntry!]!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"All permissions this Permission grants")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-globalpermissionbhaspermissionbcodeboolean--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.",(0,s.kt)("b",null,"hasPermission"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,s.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-globalpermissionhaspermissionbpermissionbcodeallpermissionentry-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.hasPermission.",(0,s.kt)("b",null,"permission"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-globalpermissionbidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.",(0,s.kt)("b",null,"id"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-globalpermissionbnamebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.",(0,s.kt)("b",null,"name"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The name of this entity.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-globalpermissionbusersbcodegropiususerconnection--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.",(0,s.kt)("b",null,"users"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/gropius-user-connection"},(0,s.kt)("inlineCode",{parentName:"a"},"GropiusUserConnection!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"GropiusUsers granted this Permission"),(0,s.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-globalpermissionusersbafterbcodestring-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.users.",(0,s.kt)("b",null,"after"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-globalpermissionusersbbeforebcodestring-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.users.",(0,s.kt)("b",null,"before"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-globalpermissionusersbfilterbcodegropiususerfilterinput-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.users.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/gropius-user-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-globalpermissionusersbfirstbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.users.",(0,s.kt)("b",null,"first"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-globalpermissionusersblastbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.users.",(0,s.kt)("b",null,"last"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-globalpermissionusersborderbybcodegropiususerorder--"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.users.",(0,s.kt)("b",null,"orderBy"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/gropius-user-order"},(0,s.kt)("inlineCode",{parentName:"a"},"[GropiusUserOrder!]"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-globalpermissionusersbskipbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"GlobalPermission.users.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"basenode-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,s.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,s.kt)("h4",{id:"basepermission-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"BasePermission"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"named-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/named"},(0,s.kt)("inlineCode",{parentName:"a"},"Named"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Entity with a name and a description.")),(0,s.kt)("h4",{id:"namednode-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/named-node"},(0,s.kt)("inlineCode",{parentName:"a"},"NamedNode"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Node with a name and description")),(0,s.kt)("h4",{id:"node-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,s.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,s.kt)("h3",{id:"returned-by"},"Returned by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/queries/search-global-permissions"},(0,s.kt)("inlineCode",{parentName:"a"},"searchGlobalPermissions")),"  ",(0,s.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/create-global-permission-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"CreateGlobalPermissionPayload")),"  ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/global-permission-connection"},(0,s.kt)("inlineCode",{parentName:"a"},"GlobalPermissionConnection")),"  ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/global-permission-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"GlobalPermissionEdge")),"  ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/update-global-permission-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateGlobalPermissionPayload")),"  ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);