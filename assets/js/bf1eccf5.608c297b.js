"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36373],{252991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(667294),i=r(386010),a=r(353438),c=r(239960),l=r(813919),s=r(595999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(c.default,{href:t,className:(0,i.default)("card padding--lg",o.cardContainer)},r)}function m(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.default)("text--truncate",o.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.default)("text--truncate",o.cardDescription),title:c},c))}function p(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,i.default)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},698315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=r(487462),i=(r(667294),r(603905)),a=r(252991),c=r(353438);const l={},s="Internal API",o={unversionedId:"graphql/api-internal",id:"graphql/api-internal",title:"Internal API",description:"GraphQL schema of the internal API",source:"@site/docs/graphql/api-internal.mdx",sourceDirName:"graphql",slug:"/graphql/api-internal",permalink:"/gropius-docs/graphql/api-internal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"graphqlSidebar",previous:{title:"TrackablePermission",permalink:"/gropius-docs/graphql/api-public/unions/trackable-permission"},next:{title:"Directives",permalink:"/gropius-docs/category/directives-1"}},d={},m=[],p={toc:m},u="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internal-api"},"Internal API"),(0,i.kt)("p",null,"GraphQL schema of the internal API"),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);