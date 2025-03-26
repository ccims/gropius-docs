"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77294],{699359:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=s(487462),i=(s(667294),s(603905)),n=s(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="remove-affected-entity-from-issue-"><span class="token function">removeAffectedEntityFromIssue</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.issue/-remove-affected-entity-from-issue-input/index-">RemoveAffectedEntityFromIssueInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a><span class="token operator">?</span></div><p class="paragraph">Removes an <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> from an <a href="../../gropius.model.issue/-issue/index-">Issue</a>, returns the created <a href="../../gropius.model.issue.timeline/-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a>, or <code class="lang-kotlin">null</code> if the <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> was not affected by the <a href="../../gropius.model.issue/-issue/index-">Issue</a>. Checks the authorization status</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the saved created <a href="../../gropius.model.issue.timeline/-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a> or <code class="lang-kotlin">null</code> if no event was created</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for the required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines which <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> to remove from which <a href="../../gropius.model.issue/-issue/index-">Issue</a></p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="remove-affected-entity-from-issue-"><span class="token function">removeAffectedEntityFromIssue</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">issue<span class="token operator">: </span><a href="../../gropius.model.issue/-issue/index-">Issue</a><span class="token punctuation">, </span></span><span class="parameter ">affectedEntity<span class="token operator">: </span><a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a><span class="token punctuation">, </span></span><span class="parameter ">atTime<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">byUser<span class="token operator">: </span><a href="../../gropius.model.user/-user/index-">User</a><span class="token punctuation">, </span></span><span class="parameter ">updateContext<span class="token operator">: </span><a href="../../gropius.service/-node-batch-update-context/index-">NodeBatchUpdateContext</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a></div><p class="paragraph">Removes an <a href="remove-affected-entity-from-issue-">affectedEntity</a> from an <a href="remove-affected-entity-from-issue-">issue</a> at <a href="remove-affected-entity-from-issue-">atTime</a> as <a href="remove-affected-entity-from-issue-">byUser</a> and adds a <a href="../../gropius.model.issue.timeline/-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a> to the timeline. Creates the event even if the <a href="remove-affected-entity-from-issue-">affectedEntity</a> was not affected by the <a href="remove-affected-entity-from-issue-">issue</a>. Only removes the <a href="remove-affected-entity-from-issue-">affectedEntity</a> from the <code class="lang-kotlin">affects</code> on the <a href="remove-affected-entity-from-issue-">issue</a> if no newer timeline item exists which adds it again. Does not check the authorization status. Does neither save the created <a href="../../gropius.model.issue.timeline/-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a> nor the <a href="remove-affected-entity-from-issue-">issue</a>. It is necessary to save the <a href="remove-affected-entity-from-issue-">issue</a> or returned <a href="../../gropius.model.issue.timeline/-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a> afterwards.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>issue</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.issue/-issue/index-">Issue</a> which no longer should affect <a href="remove-affected-entity-from-issue-">affectedEntity</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>affected</span><wbr><span><span>Entity</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> which should be removed from the affected entities on the <a href="remove-affected-entity-from-issue-">issue</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>at</span><wbr><span><span>Time</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the point in time when the modification happened, updates <a href="../../gropius.model.issue/-issue/last-updated-at-">Issue.lastUpdatedAt</a> if necessary</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>by</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.user/-user/index-">User</a> who caused the update, updates <a href="../../gropius.model.issue/-issue/participants-">Issue.participants</a> if necessary</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>update</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">context used for the aggregation updater</p></div></div></div></div></div></div></div>\n',o={},d="removeAffectedEntityFromIssue",p={unversionedId:"api/core/gropius.service.issue/-issue-service/remove-affected-entity-from-issue-",id:"api/core/gropius.service.issue/-issue-service/remove-affected-entity-from-issue-",title:"removeAffectedEntityFromIssue",description:"",source:"@site/docs/api/core/gropius.service.issue/-issue-service/remove-affected-entity-from-issue-.mdx",sourceDirName:"api/core/gropius.service.issue/-issue-service",slug:"/api/core/gropius.service.issue/-issue-service/remove-affected-entity-from-issue-",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/remove-affected-entity-from-issue-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"prepareIssueDeletion",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/prepare-issue-deletion-"},next:{title:"removeArtefactFromIssue",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/remove-artefact-from-issue-"}},c={},l=[],u={toc:l},f="wrapper";function m(e){let{components:a,...s}=e;return(0,i.kt)(f,(0,t.Z)({},u,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"removeaffectedentityfromissue"},"removeAffectedEntityFromIssue"),(0,i.kt)(n.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);