"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95100],{252991:(e,t,r)=>{r.d(t,{Z:()=>g});var i=r(667294),c=r(386010),n=r(353438),a=r(239960),l=r(813919),s=r(595999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return i.createElement(a.default,{href:t,className:(0,c.default)("card padding--lg",o.cardContainer)},r)}function u(e){let{href:t,icon:r,title:n,description:a}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,c.default)("text--truncate",o.cardTitle),title:n},r," ",n),a&&i.createElement("p",{className:(0,c.default)("text--truncate",o.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?i.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,n.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(m,{item:t});case"category":return i.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,n.jA)();return i.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return i.createElement(h,e);const a=(0,n.MN)(t);return i.createElement("section",{className:(0,c.default)("row",r)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},534055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=r(487462),c=(r(667294),r(603905)),n=r(252991),a=r(353438);const l={},s="Public API",o={unversionedId:"graphql/api-public",id:"graphql/api-public",title:"Public API",description:"GraphQL schema of the public API",source:"@site/docs/graphql/api-public.mdx",sourceDirName:"graphql",slug:"/graphql/api-public",permalink:"/gropius-docs/graphql/api-public",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"graphqlSidebar",next:{title:"Directives",permalink:"/gropius-docs/category/directives"}},d={},u=[],p={toc:u},m="wrapper";function f(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"public-api"},"Public API"),(0,c.kt)("p",null,"GraphQL schema of the public API"),(0,c.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);