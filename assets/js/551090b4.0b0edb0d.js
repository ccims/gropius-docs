"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85680],{86027:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>b,assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var l=a(487462),n=a(667294),o=a(603905);const d={id:"artefact",title:"Artefact",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,c={unversionedId:"graphql/api-public/objects/artefact",id:"graphql/api-public/objects/artefact",title:"Artefact",description:"An Artefact referencing a file defined via a URL.",source:"@site/docs/graphql/api-public/objects/artefact.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/artefact",permalink:"/gropius-docs/graphql/api-public/objects/artefact",draft:!1,tags:[],version:"current",frontMatter:{id:"artefact",title:"Artefact",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-artefactbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>file</b></code><Bullet /><code>URL!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbfilebcodeurl--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>from</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbfrombcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>issues</b></code><Bullet /><code>IssueConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-artefactbissuesbcodeissueconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.issues.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactissuesbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.issues.<b>filter</b></code><Bullet /><code>IssueFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-artefactissuesbfilterbcodeissuefilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.issues.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactissuesbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.issues.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactissuesblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.issues.<b>orderBy</b></code><Bullet /><code>[IssueOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-artefactissuesborderbybcodeissueorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.issues.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactissuesbskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-artefactblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>referencingComments</b></code><Bullet /><code>IssueCommentConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-artefactbreferencingcommentsbcodeissuecommentconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.referencingComments.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactreferencingcommentsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.referencingComments.<b>filter</b></code><Bullet /><code>IssueCommentFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-artefactreferencingcommentsbfilterbcodeissuecommentfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.referencingComments.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactreferencingcommentsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.referencingComments.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactreferencingcommentsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.referencingComments.<b>orderBy</b></code><Bullet /><code>[IssueCommentOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-artefactreferencingcommentsborderbybcodeissuecommentorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.referencingComments.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactreferencingcommentsbskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>template</b></code><Bullet /><code>ArtefactTemplate!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-artefactbtemplatebcodeartefacttemplate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>templatedField</b></code><Bullet /><code>JSON</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbtemplatedfieldbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>templatedFields</b></code><Bullet /><code>[JSONField!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-artefactbtemplatedfieldsbcodejsonfield--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.templatedFields.<b>prefixMatching</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefacttemplatedfieldsbprefixmatchingbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>to</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbtobcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>trackable</b></code><Bullet /><code>Trackable!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-artefactbtrackablebcodetrackable--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Artefact.<b>version</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-artefactbversionbcodestring-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>MutableTemplatedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"mutabletemplatednode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TemplatedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"templatednode-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[c,s]=(0,n.useState)(r);return(0,o.kt)("details",(0,l.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},g={Bullet:i,SpecifiedBy:b,Badge:m,toc:p,Details:f},k="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An Artefact referencing a file defined via a URL.\nCan optionally specify a line range (from - to), and a version.\nIs part of exactly one Trackable.\nCan be referenced by Comments and Issues.\nArtefacts are synced to all IMSProjects of the Trackable they are part of.\nREAD is granted if READ is granted on ",(0,o.kt)("inlineCode",{parentName:"p"},"trackable"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Artefact implements AuditedNode, BaseNode, MutableTemplatedNode, Node, TemplatedNode {\n  createdAt: DateTime!\n  createdBy: User!\n  file: URL!\n  from: Int\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issues(\n    after: String\n    before: String\n    filter: IssueFilterInput\n    first: Int\n    last: Int\n    orderBy: [IssueOrder!]\n    skip: Int\n  ): IssueConnection!\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  referencingComments(\n    after: String\n    before: String\n    filter: IssueCommentFilterInput\n    first: Int\n    last: Int\n    orderBy: [IssueCommentOrder!]\n    skip: Int\n  ): IssueCommentConnection!\n  template: ArtefactTemplate!\n  templatedField(\n    name: String!\n  ): JSON\n  templatedFields(\n    names: [String!]\n    prefixMatching: Boolean\n  ): [JSONField!]!\n  to: Int\n  trackable: Trackable!\n  version: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbcreatedbybcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"createdBy"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbfilebcodeurl--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"file"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/url"},(0,o.kt)("inlineCode",{parentName:"a"},"URL!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A URL to the file this Artefact references")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbfrombcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"from"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If present, the first line of the file this Artefact references, inclusive")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbhaspermissionbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"hasPermission"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-artefacthaspermissionbpermissionbcodeallpermissionentry-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.hasPermission.",(0,o.kt)("b",null,"permission"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbissuesbcodeissueconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"issues"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueConnection!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Issues which currently have this Artefact."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-artefactissuesbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.issues.",(0,o.kt)("b",null,"after"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactissuesbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.issues.",(0,o.kt)("b",null,"before"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactissuesbfilterbcodeissuefilterinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.issues.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/issue-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueFilterInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactissuesbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.issues.",(0,o.kt)("b",null,"first"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactissuesblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.issues.",(0,o.kt)("b",null,"last"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactissuesborderbybcodeissueorder--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.issues.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/issue-order"},(0,o.kt)("inlineCode",{parentName:"a"},"[IssueOrder!]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactissuesbskipbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.issues.",(0,o.kt)("b",null,"skip"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactblastmodifiedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"lastModifiedAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactblastmodifiedbybcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"lastModifiedBy"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbreferencingcommentsbcodeissuecommentconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"referencingComments"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-comment-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueCommentConnection!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IssueComments which currently reference this Artefact."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-artefactreferencingcommentsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.referencingComments.",(0,o.kt)("b",null,"after"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactreferencingcommentsbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.referencingComments.",(0,o.kt)("b",null,"before"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactreferencingcommentsbfilterbcodeissuecommentfilterinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.referencingComments.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/issue-comment-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactreferencingcommentsbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.referencingComments.",(0,o.kt)("b",null,"first"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactreferencingcommentsblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.referencingComments.",(0,o.kt)("b",null,"last"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactreferencingcommentsborderbybcodeissuecommentorder--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.referencingComments.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/issue-comment-order"},(0,o.kt)("inlineCode",{parentName:"a"},"[IssueCommentOrder!]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefactreferencingcommentsbskipbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.referencingComments.",(0,o.kt)("b",null,"skip"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbtemplatebcodeartefacttemplate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"template"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/artefact-template"},(0,o.kt)("inlineCode",{parentName:"a"},"ArtefactTemplate!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Template of this Artefact.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbtemplatedfieldbcodejson-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"templatedField"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Value of a field defined by the template. Error if such a field is not defined."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-artefacttemplatedfieldbnamebcodestring--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.templatedField.",(0,o.kt)("b",null,"name"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Name of the extension field")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbtemplatedfieldsbcodejsonfield--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"templatedFields"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/jsonfield"},(0,o.kt)("inlineCode",{parentName:"a"},"[JSONField!]!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All templatedFields\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"names")," is provided, only those matching the name. If ",(0,o.kt)("inlineCode",{parentName:"p"},"prefixMatching")," is true, matching is done by\nprefix, otherwise by full name."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-artefacttemplatedfieldsbnamesbcodestring--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.templatedFields.",(0,o.kt)("b",null,"names"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Names of the templated fields. If not provided, all templatedFields.")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-artefacttemplatedfieldsbprefixmatchingbcodeboolean-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.templatedFields.",(0,o.kt)("b",null,"prefixMatching"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If true, name matching is performed as prefix matching, otherwise as absolute match.\nDefaults to absolute matching")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbtobcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"to"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If present, the last line of the file this Artefact references, inclusive")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbtrackablebcodetrackable--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"trackable"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/trackable"},(0,o.kt)("inlineCode",{parentName:"a"},"Trackable!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Trackable this Artefact is part of.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-artefactbversionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Artefact.",(0,o.kt)("b",null,"version"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If present, the current version of this Artefact")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"auditednode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,o.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,o.kt)("h4",{id:"basenode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,o.kt)("h4",{id:"mutabletemplatednode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/mutable-templated-node"},(0,o.kt)("inlineCode",{parentName:"a"},"MutableTemplatedNode"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Interface for all types which support templates describing user writeable fields.")),(0,o.kt)("h4",{id:"node-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,o.kt)("h4",{id:"templatednode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/templated-node"},(0,o.kt)("inlineCode",{parentName:"a"},"TemplatedNode"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Interface for all types which support templates.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/added-artefact-event"},(0,o.kt)("inlineCode",{parentName:"a"},"AddedArtefactEvent")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/artefact-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"ArtefactConnection")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/artefact-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"ArtefactEdge")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/create-artefact-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateArtefactPayload")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-artefact-event"},(0,o.kt)("inlineCode",{parentName:"a"},"RemovedArtefactEvent")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/update-artefact-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateArtefactPayload")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);