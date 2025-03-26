"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13712],{815867:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>r,assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=n(487462),l=n(667294),o=n(603905);const i={id:"timeline-item-connection",title:"TimelineItemConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"graphql/api-public/objects/timeline-item-connection",id:"graphql/api-public/objects/timeline-item-connection",title:"TimelineItemConnection",description:"The connection type for TimelineItem.",source:"@site/docs/graphql/api-public/objects/timeline-item-connection.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/timeline-item-connection",permalink:"/gropius-docs/graphql/api-public/objects/timeline-item-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"timeline-item-connection",title:"TimelineItemConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},m={},s=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),r=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TimelineItemConnection.<b>edges</b></code><Bullet /><code>[TimelineItemEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-timelineitemconnectionbedgesbcodetimelineitemedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TimelineItemConnection.<b>nodes</b></code><Bullet /><code>[TimelineItem!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-timelineitemconnectionbnodesbcodetimelineitem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TimelineItemConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-timelineitemconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TimelineItemConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-timelineitemconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:d=!1}=e;const[c,m]=(0,l.useState)(d);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},u={Bullet:s,SpecifiedBy:r,Badge:p,toc:g,Details:b},k="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The connection type for TimelineItem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TimelineItemConnection {\n  edges: [TimelineItemEdge!]!\n  nodes: [TimelineItem!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-timelineitemconnectionbedgesbcodetimelineitemedge--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TimelineItemConnection.",(0,o.kt)("b",null,"edges"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/timeline-item-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[TimelineItemEdge!]!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-timelineitemconnectionbnodesbcodetimelineitem--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TimelineItemConnection.",(0,o.kt)("b",null,"nodes"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/timeline-item"},(0,o.kt)("inlineCode",{parentName:"a"},"[TimelineItem!]!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-timelineitemconnectionbpageinfobcodepageinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TimelineItemConnection.",(0,o.kt)("b",null,"pageInfo"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-timelineitemconnectionbtotalcountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TimelineItemConnection.",(0,o.kt)("b",null,"totalCount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/issue"},(0,o.kt)("inlineCode",{parentName:"a"},"Issue")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,o.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-from-trackable-event"},(0,o.kt)("inlineCode",{parentName:"a"},"RemovedFromTrackableEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/template-changed-event"},(0,o.kt)("inlineCode",{parentName:"a"},"TemplateChangedEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);