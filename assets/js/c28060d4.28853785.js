"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12567],{962232:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var i=a(487462),n=(a(667294),a(603905)),t=a(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="remove-assignment-"><span class="token function">removeAssignment</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.issue/-remove-assignment-input/index-">RemoveAssignmentInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-removed-assignment-event/index-">RemovedAssignmentEvent</a><span class="token operator">?</span></div><p class="paragraph">Removes an <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a> from its <a href="../../gropius.model.issue/-issue/index-">Issue</a>, returns the created <a href="../../gropius.model.issue.timeline/-removed-assignment-event/index-">RemovedAssignmentEvent</a>, or <code class="lang-kotlin">null</code> if the <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a> was already removed from its <a href="../../gropius.model.issue/-issue/index-">Issue</a>. Checks the authorization status</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the saved created <a href="../../gropius.model.issue.timeline/-removed-assignment-event/index-">RemovedAssignmentEvent</a> or <code class="lang-kotlin">null</code> if no event was created</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for the required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines which <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a> to remove</p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="remove-assignment-"><span class="token function">removeAssignment</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">assignment<span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a><span class="token punctuation">, </span></span><span class="parameter ">atTime<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">byUser<span class="token operator">: </span><a href="../../gropius.model.user/-user/index-">User</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-removed-assignment-event/index-">RemovedAssignmentEvent</a></div><p class="paragraph">Removes an <a href="remove-assignment-">assignment</a> from its <a href="../../gropius.model.issue/-issue/index-">Issue</a> at <a href="remove-assignment-">atTime</a> as <a href="remove-assignment-">byUser</a> and adds a <a href="../../gropius.model.issue.timeline/-removed-assignment-event/index-">RemovedAssignmentEvent</a> to the timeline. Creates the event even if the <a href="remove-assignment-">assignment</a> was already removed from its <a href="../../gropius.model.issue/-issue/index-">Issue</a>. Does not check the authorization status. Does neither save the created <a href="../../gropius.model.issue.timeline/-removed-assignment-event/index-">RemovedAssignmentEvent</a> nor the <a href="../../gropius.model.issue/-issue/index-">Issue</a> of the <a href="remove-assignment-">assignment</a>. It is necessary to save the <a href="../../gropius.model.issue/-issue/index-">Issue</a> of the <a href="remove-assignment-">assignment</a> or returned <a href="../../gropius.model.issue.timeline/-removed-assignment-event/index-">RemovedAssignmentEvent</a> afterwards.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>assignment</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a> to remove from its <a href="../../gropius.model.issue/-issue/index-">Issue</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>at</span><wbr><span><span>Time</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the point in time when the modification happened, updates <a href="../../gropius.model.issue/-issue/last-updated-at-">Issue.lastUpdatedAt</a> if necessary</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>by</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.user/-user/index-">User</a> who caused the update, updates <a href="../../gropius.model.issue/-issue/participants-">Issue.participants</a> if necessary</p></div></div></div></div></div></div></div>\n',o={},p="removeAssignment",d={unversionedId:"api/core/gropius.service.issue/-issue-service/remove-assignment-",id:"api/core/gropius.service.issue/-issue-service/remove-assignment-",title:"removeAssignment",description:"",source:"@site/docs/api/core/gropius.service.issue/-issue-service/remove-assignment-.mdx",sourceDirName:"api/core/gropius.service.issue/-issue-service",slug:"/api/core/gropius.service.issue/-issue-service/remove-assignment-",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/remove-assignment-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"removeArtefactFromIssue",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/remove-artefact-from-issue-"},next:{title:"removeIssueFromPinnedIssues",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/remove-issue-from-pinned-issues-"}},l={},m=[],u={toc:m},c="wrapper";function v(e){let{components:s,...a}=e;return(0,n.kt)(c,(0,i.Z)({},u,a,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"removeassignment"},"removeAssignment"),(0,n.kt)(t.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}v.isMDXComponent=!0}}]);