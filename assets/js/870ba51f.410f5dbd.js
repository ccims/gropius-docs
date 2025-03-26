"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6677],{256039:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>f});var a=n(487462),o=n(667294),i=n(603905);const l={id:"relation-condition",title:"RelationCondition",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,d={unversionedId:"graphql/api-internal/objects/relation-condition",id:"graphql/api-internal/objects/relation-condition",title:"RelationCondition",description:"Condition which defines if a Relation can use a RelationTemplate.",source:"@site/docs/graphql/api-internal/objects/relation-condition.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/relation-condition",permalink:"/gropius-docs/graphql/api-internal/objects/relation-condition",draft:!1,tags:[],version:"current",frontMatter:{id:"relation-condition",title:"RelationCondition",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.<b>from</b></code><Bullet /><code>RelationPartnerTemplateConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationconditionbfrombcoderelationpartnertemplateconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.from.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionfrombbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.from.<b>filter</b></code><Bullet /><code>RelationPartnerTemplateFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditionfrombfilterbcoderelationpartnertemplatefilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.from.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionfrombfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.from.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionfromblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.from.<b>orderBy</b></code><Bullet /><code>[RelationPartnerTemplateOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditionfromborderbybcoderelationpartnertemplateorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.from.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionfrombskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.<b>interfaceSpecificationDerivationConditions</b></code><Bullet /><code>InterfaceSpecificationDerivationConditionConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationconditionbinterfacespecificationderivationconditionsbcodeinterfacespecificationderivationconditionconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.interfaceSpecificationDerivationConditions.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.interfaceSpecificationDerivationConditions.<b>filter</b></code><Bullet /><code>InterfaceSpecificationDerivationConditionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbfilterbcodeinterfacespecificationderivationconditionfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.interfaceSpecificationDerivationConditions.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.interfaceSpecificationDerivationConditions.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.interfaceSpecificationDerivationConditions.<b>orderBy</b></code><Bullet /><code>[InterfaceSpecificationDerivationConditionOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsborderbybcodeinterfacespecificationderivationconditionorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.interfaceSpecificationDerivationConditions.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.<b>partOf</b></code><Bullet /><code>RelationTemplateConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationconditionbpartofbcoderelationtemplateconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.partOf.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionpartofbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.partOf.<b>filter</b></code><Bullet /><code>RelationTemplateFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditionpartofbfilterbcoderelationtemplatefilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.partOf.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionpartofbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.partOf.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionpartofblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.partOf.<b>orderBy</b></code><Bullet /><code>[RelationTemplateOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditionpartofborderbybcoderelationtemplateorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.partOf.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditionpartofbskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.<b>to</b></code><Bullet /><code>RelationPartnerTemplateConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationconditionbtobcoderelationpartnertemplateconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.to.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditiontobbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.to.<b>filter</b></code><Bullet /><code>RelationPartnerTemplateFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditiontobfilterbcoderelationpartnertemplatefilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.to.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditiontobfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.to.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditiontoblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.to.<b>orderBy</b></code><Bullet /><code>[RelationPartnerTemplateOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationconditiontoborderbybcoderelationpartnertemplateorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>RelationCondition.to.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationconditiontobskipbcodeint-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:r=!1}=e;const[d,c]=(0,o.useState)(r);return(0,i.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&l)},g={Bullet:s,SpecifiedBy:p,Badge:b,toc:f,Details:m},k="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Condition which defines if a Relation can use a RelationTemplate.\nA relation can only use the Template, if the start of the Relation has a template in from,\nand the end of the Relation has a template in to.\nAlso defines which InterfaceSpecifications are derived via the Relation.\nPart of a RelationTemplate.\nREAD is always granted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type RelationCondition implements BaseNode, Node {\n  from(\n    after: String\n    before: String\n    filter: RelationPartnerTemplateFilterInput\n    first: Int\n    last: Int\n    orderBy: [RelationPartnerTemplateOrder!]\n    skip: Int\n  ): RelationPartnerTemplateConnection!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  interfaceSpecificationDerivationConditions(\n    after: String\n    before: String\n    filter: InterfaceSpecificationDerivationConditionFilterInput\n    first: Int\n    last: Int\n    orderBy: [InterfaceSpecificationDerivationConditionOrder!]\n    skip: Int\n  ): InterfaceSpecificationDerivationConditionConnection!\n  partOf(\n    after: String\n    before: String\n    filter: RelationTemplateFilterInput\n    first: Int\n    last: Int\n    orderBy: [RelationTemplateOrder!]\n    skip: Int\n  ): RelationTemplateConnection!\n  to(\n    after: String\n    before: String\n    filter: RelationPartnerTemplateFilterInput\n    first: Int\n    last: Int\n    orderBy: [RelationPartnerTemplateOrder!]\n    skip: Int\n  ): RelationPartnerTemplateConnection!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationconditionbfrombcoderelationpartnertemplateconnection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.",(0,i.kt)("b",null,"from"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/relation-partner-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplateConnection!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Templates of allowed start RelationPartners"),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-relationconditionfrombafterbcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.from.",(0,i.kt)("b",null,"after"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionfrombbeforebcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.from.",(0,i.kt)("b",null,"before"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionfrombfilterbcoderelationpartnertemplatefilterinput-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.from.",(0,i.kt)("b",null,"filter"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/relation-partner-template-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplateFilterInput"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionfrombfirstbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.from.",(0,i.kt)("b",null,"first"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionfromblastbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.from.",(0,i.kt)("b",null,"last"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionfromborderbybcoderelationpartnertemplateorder--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.from.",(0,i.kt)("b",null,"orderBy"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/relation-partner-template-order"},(0,i.kt)("inlineCode",{parentName:"a"},"[RelationPartnerTemplateOrder!]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionfrombskipbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.from.",(0,i.kt)("b",null,"skip"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationconditionbhaspermissionbcodeboolean--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.",(0,i.kt)("b",null,"hasPermission"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-relationconditionhaspermissionbpermissionbcodeallpermissionentry-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.hasPermission.",(0,i.kt)("b",null,"permission"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,i.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationconditionbidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.",(0,i.kt)("b",null,"id"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationconditionbinterfacespecificationderivationconditionsbcodeinterfacespecificationderivationconditionconnection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.",(0,i.kt)("b",null,"interfaceSpecificationDerivationConditions"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/interface-specification-derivation-condition-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationDerivationConditionConnection!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Defines which InterfaceSpecifications are derived via the Relation."),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbafterbcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.interfaceSpecificationDerivationConditions.",(0,i.kt)("b",null,"after"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbbeforebcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.interfaceSpecificationDerivationConditions.",(0,i.kt)("b",null,"before"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbfilterbcodeinterfacespecificationderivationconditionfilterinput-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.interfaceSpecificationDerivationConditions.",(0,i.kt)("b",null,"filter"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/interface-specification-derivation-condition-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationDerivationConditionFilterInput"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbfirstbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.interfaceSpecificationDerivationConditions.",(0,i.kt)("b",null,"first"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsblastbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.interfaceSpecificationDerivationConditions.",(0,i.kt)("b",null,"last"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsborderbybcodeinterfacespecificationderivationconditionorder--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.interfaceSpecificationDerivationConditions.",(0,i.kt)("b",null,"orderBy"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/interface-specification-derivation-condition-order"},(0,i.kt)("inlineCode",{parentName:"a"},"[InterfaceSpecificationDerivationConditionOrder!]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditioninterfacespecificationderivationconditionsbskipbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.interfaceSpecificationDerivationConditions.",(0,i.kt)("b",null,"skip"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationconditionbpartofbcoderelationtemplateconnection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.",(0,i.kt)("b",null,"partOf"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/relation-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationTemplateConnection!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The RelationTemplates this is part of."),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-relationconditionpartofbafterbcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.partOf.",(0,i.kt)("b",null,"after"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionpartofbbeforebcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.partOf.",(0,i.kt)("b",null,"before"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionpartofbfilterbcoderelationtemplatefilterinput-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.partOf.",(0,i.kt)("b",null,"filter"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/relation-template-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationTemplateFilterInput"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionpartofbfirstbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.partOf.",(0,i.kt)("b",null,"first"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionpartofblastbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.partOf.",(0,i.kt)("b",null,"last"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionpartofborderbybcoderelationtemplateorder--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.partOf.",(0,i.kt)("b",null,"orderBy"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/relation-template-order"},(0,i.kt)("inlineCode",{parentName:"a"},"[RelationTemplateOrder!]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditionpartofbskipbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.partOf.",(0,i.kt)("b",null,"skip"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationconditionbtobcoderelationpartnertemplateconnection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.",(0,i.kt)("b",null,"to"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/relation-partner-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplateConnection!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Templates of allowed end RelationPartners"),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-relationconditiontobafterbcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.to.",(0,i.kt)("b",null,"after"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditiontobbeforebcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.to.",(0,i.kt)("b",null,"before"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditiontobfilterbcoderelationpartnertemplatefilterinput-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.to.",(0,i.kt)("b",null,"filter"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/relation-partner-template-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplateFilterInput"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditiontobfirstbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.to.",(0,i.kt)("b",null,"first"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditiontoblastbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.to.",(0,i.kt)("b",null,"last"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditiontoborderbybcoderelationpartnertemplateorder--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.to.",(0,i.kt)("b",null,"orderBy"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/relation-partner-template-order"},(0,i.kt)("inlineCode",{parentName:"a"},"[RelationPartnerTemplateOrder!]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-relationconditiontobskipbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationCondition.to.",(0,i.kt)("b",null,"skip"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"basenode-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,i.kt)("h4",{id:"node-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-derivation-condition"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationDerivationCondition")),"  ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-condition-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationConditionConnection")),"  ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-condition-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationConditionEdge")),"  ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);