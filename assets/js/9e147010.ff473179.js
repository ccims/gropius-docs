"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72953],{780020:(a,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(487462),i=(n(667294),n(603905)),e=n(689417);const p='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">helper<span class="token operator">: </span><a href="../../../sync/gropius.sync/-json-helper/index-">JsonHelper</a><span class="token punctuation">, </span></span><span class="parameter ">imsProject<span class="token operator">: </span><a href="../../../core/gropius.model.architecture/-i-m-s-project/index-">IMSProject</a></span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Project</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the Gropius IMSProject to use as input</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>helper</span></span></u></div></span></div><div><div class="title"><p class="paragraph">Reference for the spring instance of JsonHelper</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Config</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the config of the parent IMS</p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">botUser<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">repo<span class="token operator">: </span><a href="../../gropius.sync.github.model/-repo-description/index-">RepoDescription</a><span class="token punctuation">, </span></span><span class="parameter ">enableOutgoing<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token punctuation">, </span></span><span class="parameter ">enableOutgoingLabels<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token punctuation">, </span></span><span class="parameter ">enableOutgoingComments<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token punctuation">, </span></span><span class="parameter ">enableOutgoingAssignments<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token punctuation">, </span></span><span class="parameter ">enableOutgoingTitleChanges<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token punctuation">, </span></span><span class="parameter ">enableOutgoingState<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token punctuation">, </span></span><span class="parameter ">defaultType<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">defaultTemplate<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">labelStateMapper<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Project</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the Gropius IMSProject to use as input</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Config</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the config of the parent IMS</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>bot</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">bot user name</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>read</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">read user name</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repo</span></span></u></div></span></div><div><div class="title"><p class="paragraph">repository url</p></div></div></div></div></div></div></div>\n',l={},o="IMSProjectConfig",r={unversionedId:"api/sync-github/gropius.sync.github.config/-i-m-s-project-config/-i-m-s-project-config-",id:"api/sync-github/gropius.sync.github.config/-i-m-s-project-config/-i-m-s-project-config-",title:"IMSProjectConfig",description:"",source:"@site/docs/api/sync-github/gropius.sync.github.config/-i-m-s-project-config/-i-m-s-project-config-.mdx",sourceDirName:"api/sync-github/gropius.sync.github.config/-i-m-s-project-config",slug:"/api/sync-github/gropius.sync.github.config/-i-m-s-project-config/-i-m-s-project-config-",permalink:"/gropius-docs/api/sync-github/gropius.sync.github.config/-i-m-s-project-config/-i-m-s-project-config-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IMS_PROJECT_TEMPLATE_NAME",permalink:"/gropius-docs/api/sync-github/gropius.sync.github.config/-i-m-s-project-config/-companion/-i-m-s_-p-r-o-j-e-c-t_-t-e-m-p-l-a-t-e_-n-a-m-e-"},next:{title:"botUser",permalink:"/gropius-docs/api/sync-github/gropius.sync.github.config/-i-m-s-project-config/bot-user-"}},c={},d=[],u={toc:d},g="wrapper";function m(a){let{components:s,...n}=a;return(0,i.kt)(g,(0,t.Z)({},u,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"imsprojectconfig"},"IMSProjectConfig"),(0,i.kt)(e.Z,{dokkaHTML:p,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);