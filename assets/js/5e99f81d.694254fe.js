"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12537],{143804:(t,e,l)=>{l.r(e),l.d(e,{Badge:()=>c,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>y});var a=l(487462),n=l(667294),i=l(603905);const o={id:"relation-layout-list-filter-input",title:"RelationLayoutListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,u={unversionedId:"graphql/api-internal/inputs/relation-layout-list-filter-input",id:"graphql/api-internal/inputs/relation-layout-list-filter-input",title:"RelationLayoutListFilterInput",description:"Used to filter by a connection-based property. Fields are joined by AND",source:"@site/docs/graphql/api-internal/inputs/relation-layout-list-filter-input.mdx",sourceDirName:"graphql/api-internal/inputs",slug:"/graphql/api-internal/inputs/relation-layout-list-filter-input",permalink:"/gropius-docs/graphql/api-internal/inputs/relation-layout-list-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"relation-layout-list-filter-input",title:"RelationLayoutListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},s=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),c=t=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:t.class},t.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RelationLayoutListFilterInput.<b>all</b></code><Bullet /><code>RelationLayoutFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationlayoutlistfilterinputballbcoderelationlayoutfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationLayoutListFilterInput.<b>any</b></code><Bullet /><code>RelationLayoutFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationlayoutlistfilterinputbanybcoderelationlayoutfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationLayoutListFilterInput.<b>none</b></code><Bullet /><code>RelationLayoutFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationlayoutlistfilterinputbnonebcoderelationlayoutfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],f=t=>{let{dataOpen:e,dataClose:l,children:o,startOpen:r=!1}=t;const[u,p]=(0,n.useState)(r);return(0,i.kt)("details",(0,a.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:t=>{t.preventDefault(),p((t=>!t))},style:{listStyle:"none"}},u?e:l),u&&o)},k={Bullet:s,SpecifiedBy:d,Badge:c,toc:y,Details:f},m="wrapper";function g(t){let{components:e,...l}=t;return(0,i.kt)(m,(0,a.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Used to filter by a connection-based property. Fields are joined by AND"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input RelationLayoutListFilterInput {\n  all: RelationLayoutFilterInput\n  any: RelationLayoutFilterInput\n  none: RelationLayoutFilterInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationlayoutlistfilterinputballbcoderelationlayoutfilterinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationLayoutListFilterInput.",(0,i.kt)("b",null,"all"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/relation-layout-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationLayoutFilterInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filters for nodes where all of the related nodes match this filter")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationlayoutlistfilterinputbanybcoderelationlayoutfilterinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationLayoutListFilterInput.",(0,i.kt)("b",null,"any"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/relation-layout-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationLayoutFilterInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filters for nodes where any of the related nodes match this filter")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-relationlayoutlistfilterinputbnonebcoderelationlayoutfilterinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"RelationLayoutListFilterInput.",(0,i.kt)("b",null,"none"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/relation-layout-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationLayoutFilterInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filters for nodes where none of the related nodes match this filter")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/project-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ProjectFilterInput")),"  ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/view-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ViewFilterInput")),"  ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);