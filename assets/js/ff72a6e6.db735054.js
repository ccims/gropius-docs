"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43612],{25215:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(487462),n=(s(667294),s(603905)),i=s(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="change-issue-state-"><span class="token function">changeIssueState</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.issue/-change-issue-state-input/index-">ChangeIssueStateInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-state-changed-event/index-">StateChangedEvent</a><span class="token operator">?</span></div><p class="paragraph">Changes the <code class="lang-kotlin">state</code> of an <a href="../../gropius.model.issue/-issue/index-">Issue</a>, returns the created <a href="../../gropius.model.issue.timeline/-state-changed-event/index-">StateChangedEvent</a> or null if the <code class="lang-kotlin">state</code> was not changed. Checks the authorization status, and checks that the new <a href="../../gropius.model.template/-issue-state/index-">IssueState</a> can be used on the <a href="../../gropius.model.issue/-issue/index-">Issue</a></p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the saved created <a href="../../gropius.model.issue.timeline/-state-changed-event/index-">StateChangedEvent</a> or <code class="lang-kotlin">null</code> if no event was created</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for the required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines the new <code class="lang-kotlin">state</code> and of which issue to change it</p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="change-issue-state-"><span class="token function">changeIssueState</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">issue<span class="token operator">: </span><a href="../../gropius.model.issue/-issue/index-">Issue</a><span class="token punctuation">, </span></span><span class="parameter ">oldState<span class="token operator">: </span><a href="../../gropius.model.template/-issue-state/index-">IssueState</a><span class="token punctuation">, </span></span><span class="parameter ">newState<span class="token operator">: </span><a href="../../gropius.model.template/-issue-state/index-">IssueState</a><span class="token punctuation">, </span></span><span class="parameter ">atTime<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">byUser<span class="token operator">: </span><a href="../../gropius.model.user/-user/index-">User</a><span class="token punctuation">, </span></span><span class="parameter ">updateContext<span class="token operator">: </span><a href="../../gropius.service/-node-batch-update-context/index-">NodeBatchUpdateContext</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-state-changed-event/index-">StateChangedEvent</a></div><p class="paragraph">Changes the <code class="lang-kotlin">state</code> of an <a href="change-issue-state-">issue</a> at <a href="change-issue-state-">atTime</a> as <a href="change-issue-state-">byUser</a> and adds a <a href="../../gropius.model.issue.timeline/-state-changed-event/index-">StateChangedEvent</a> to the timeline. Creates the event even if the <code class="lang-kotlin">state</code> was not changed. Only changes the <code class="lang-kotlin">state</code> if no newer timeline item exists which changes it. Does not check the authorization status. Checks that the <a href="change-issue-state-">newState</a> can be used with the <a href="change-issue-state-">issue</a>. Does neither save the created <a href="../../gropius.model.issue.timeline/-state-changed-event/index-">StateChangedEvent</a> nor the <a href="change-issue-state-">issue</a>. It is necessary to save the <a href="change-issue-state-">issue</a> or returned <a href="../../gropius.model.issue.timeline/-state-changed-event/index-">StateChangedEvent</a> afterwards.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>issue</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.issue/-issue/index-">Issue</a> where the <code class="lang-kotlin">state</code> should be changed</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>old</span><wbr><span><span>State</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the old <code class="lang-kotlin">state</code></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>new</span><wbr><span><span>State</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the new <code class="lang-kotlin">state</code></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>at</span><wbr><span><span>Time</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the point in time when the modification happened, updates <a href="../../gropius.model.issue/-issue/last-updated-at-">Issue.lastUpdatedAt</a> if necessary</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>by</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.user/-user/index-">User</a> who caused the update, updates <a href="../../gropius.model.issue/-issue/participants-">Issue.participants</a> if necessary</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>update</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">context used for the aggregation updater (if not provided, no aggregation is done)</p></div></div></div></div></div></div></div>\n',o={},p="changeIssueState",l={unversionedId:"api/core/gropius.service.issue/-issue-service/change-issue-state-",id:"api/core/gropius.service.issue/-issue-service/change-issue-state-",title:"changeIssueState",description:"",source:"@site/docs/api/core/gropius.service.issue/-issue-service/change-issue-state-.mdx",sourceDirName:"api/core/gropius.service.issue/-issue-service",slug:"/api/core/gropius.service.issue/-issue-service/change-issue-state-",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/change-issue-state-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"changeIssueRelationType",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/change-issue-relation-type-"},next:{title:"changeIssueTemplate",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/change-issue-template-"}},d={},c=[],u={toc:c},h="wrapper";function v(a){let{components:e,...s}=a;return(0,n.kt)(h,(0,t.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"changeissuestate"},"changeIssueState"),(0,n.kt)(i.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}v.isMDXComponent=!0}}]);