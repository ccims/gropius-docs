"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35478],{169427:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=l(487462),i=l(667294),n=l(603905);const o={id:"relation-template-list-filter-input",title:"RelationTemplateListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},p=void 0,r={unversionedId:"graphql/api-public/inputs/relation-template-list-filter-input",id:"graphql/api-public/inputs/relation-template-list-filter-input",title:"RelationTemplateListFilterInput",description:"Used to filter by a connection-based property. Fields are joined by AND",source:"@site/docs/graphql/api-public/inputs/relation-template-list-filter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/relation-template-list-filter-input",permalink:"/gropius-docs/graphql/api-public/inputs/relation-template-list-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"relation-template-list-filter-input",title:"RelationTemplateListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},d=()=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(i.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RelationTemplateListFilterInput.<b>all</b></code><Bullet /><code>RelationTemplateFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationtemplatelistfilterinputballbcoderelationtemplatefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationTemplateListFilterInput.<b>any</b></code><Bullet /><code>RelationTemplateFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationtemplatelistfilterinputbanybcoderelationtemplatefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationTemplateListFilterInput.<b>none</b></code><Bullet /><code>RelationTemplateFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-relationtemplatelistfilterinputbnonebcoderelationtemplatefilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:l,children:o,startOpen:p=!1}=e;const[r,s]=(0,i.useState)(p);return(0,n.kt)("details",(0,a.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?t:l),r&&o)},b={Bullet:d,SpecifiedBy:u,Badge:m,toc:c,Details:f},k="wrapper";function g(e){let{components:t,...l}=e;return(0,n.kt)(k,(0,a.Z)({},b,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Used to filter by a connection-based property. Fields are joined by AND"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input RelationTemplateListFilterInput {\n  all: RelationTemplateFilterInput\n  any: RelationTemplateFilterInput\n  none: RelationTemplateFilterInput\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-relationtemplatelistfilterinputballbcoderelationtemplatefilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"RelationTemplateListFilterInput.",(0,n.kt)("b",null,"all"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/relation-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationTemplateFilterInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filters for nodes where all of the related nodes match this filter")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-relationtemplatelistfilterinputbanybcoderelationtemplatefilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"RelationTemplateListFilterInput.",(0,n.kt)("b",null,"any"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/relation-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationTemplateFilterInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filters for nodes where any of the related nodes match this filter")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-relationtemplatelistfilterinputbnonebcoderelationtemplatefilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"RelationTemplateListFilterInput.",(0,n.kt)("b",null,"none"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/relation-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationTemplateFilterInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filters for nodes where none of the related nodes match this filter")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-condition-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationConditionFilterInput")),"  ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationTemplateFilterInput")),"  ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);