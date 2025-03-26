"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67255],{50354:(a,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(487462),t=(i(667294),i(603905)),e=i(689417);const l='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">helper<span class="token operator">: </span><a href="../../../sync/gropius.sync/-json-helper/index-">JsonHelper</a><span class="token punctuation">, </span></span><span class="parameter ">ims<span class="token operator">: </span><a href="../../../core/gropius.model.architecture/-i-m-s/index-">IMS</a><span class="token punctuation">, </span></span><span class="parameter ">imsTemplate<span class="token operator">: </span><a href="../../../core/gropius.model.template/-i-m-s-template/index-">IMSTemplate</a></span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>ims</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the Gropius ims to use as input</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>helper</span></span></u></div></span></div><div><div class="title"><p class="paragraph">Reference for the spring instance of JsonHelper</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Template</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the template of the current IMS</p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">botUser<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">readUser<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">rootUrl<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/net/URI.html">URI</a><span class="token punctuation">, </span></span><span class="parameter ">imsTemplate<span class="token operator">: </span><a href="../../../core/gropius.model.template/-i-m-s-template/index-">IMSTemplate</a><span class="token punctuation">, </span></span><span class="parameter ">defaultType<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">defaultTemplate<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">isCloud<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>bot</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the bot user string extracted from the template</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>read</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the read user string extracted from the template</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>root</span><wbr><span><span>Url</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the read url extracted from the template</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Template</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the template of the current IMS</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>default</span><wbr><span><span>Type</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the type of newly created issues</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>default</span><wbr><span><span>Template</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the template of newly created issues</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>is</span><wbr><span><span>Cloud</span></span></u></div></span></div><div><div class="title"><p class="paragraph">true if cloud, false if data center</p></div></div></div></div></div></div></div>\n',r={},p="IMSConfig",o={unversionedId:"api/sync-jira/gropius.sync.jira.config/-i-m-s-config/-i-m-s-config-",id:"api/sync-jira/gropius.sync.jira.config/-i-m-s-config/-i-m-s-config-",title:"IMSConfig",description:"",source:"@site/docs/api/sync-jira/gropius.sync.jira.config/-i-m-s-config/-i-m-s-config-.mdx",sourceDirName:"api/sync-jira/gropius.sync.jira.config/-i-m-s-config",slug:"/api/sync-jira/gropius.sync.jira.config/-i-m-s-config/-i-m-s-config-",permalink:"/gropius-docs/api/sync-jira/gropius.sync.jira.config/-i-m-s-config/-i-m-s-config-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IMS_TEMPLATE_NAME",permalink:"/gropius-docs/api/sync-jira/gropius.sync.jira.config/-i-m-s-config/-companion/-i-m-s_-t-e-m-p-l-a-t-e_-n-a-m-e-"},next:{title:"botUser",permalink:"/gropius-docs/api/sync-jira/gropius.sync.jira.config/-i-m-s-config/bot-user-"}},d={},c=[],m={toc:c},v="wrapper";function u(a){let{components:s,...i}=a;return(0,t.kt)(v,(0,n.Z)({},m,i,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"imsconfig"},"IMSConfig"),(0,t.kt)(e.Z,{dokkaHTML:l,mdxType:"DokkaComponent"}))}u.isMDXComponent=!0}}]);