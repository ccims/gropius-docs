"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63252],{882139:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var i=a(487462),t=(a(667294),a(603905)),n=a(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-assignment-"><span class="token function">createAssignment</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.issue/-create-assignment-input/index-">CreateAssignmentInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a></div><p class="paragraph">Creates a new <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a>, returns the created <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a>. Checks the authorization status, and checks that the chosen type is compatible with the template of the <a href="../../gropius.model.issue/-issue/index-">Issue</a>.</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the saved created <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a></p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for the required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines the <a href="../../gropius.model.issue/-issue/index-">Issue</a>, <a href="../../gropius.model.user/-user/index-">User</a> and optional <a href="../../gropius.model.template/-assignment-type/index-">AssignmentType</a> of the <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a></p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-assignment-"><span class="token function">createAssignment</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">issue<span class="token operator">: </span><a href="../../gropius.model.issue/-issue/index-">Issue</a><span class="token punctuation">, </span></span><span class="parameter ">user<span class="token operator">: </span><a href="../../gropius.model.user/-user/index-">User</a><span class="token punctuation">, </span></span><span class="parameter ">assignmentType<span class="token operator">: </span><a href="../../gropius.model.template/-assignment-type/index-">AssignmentType</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">atTime<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">byUser<span class="token operator">: </span><a href="../../gropius.model.user/-user/index-">User</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a></div><p class="paragraph">Creates a new <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a> on an <a href="create-assignment-">issue</a> at <a href="create-assignment-">atTime</a> as <a href="create-assignment-">byUser</a>. Does not check the authorization status. If present, checks that the <a href="create-assignment-">assignmentType</a> is compatible with the template of the <a href="create-assignment-">issue</a>. Does neither save the created <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a> nor the <a href="create-assignment-">issue</a>. It is necessary to save the <a href="create-assignment-">issue</a> or returned <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a> afterwards.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>issue</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.issue/-issue/index-">Issue</a> to which the <a href="create-assignment-">user</a> should be assigned</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>user</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.user/-user/index-">User</a> to assign to <a href="create-assignment-">issue</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>assignment</span><wbr><span><span>Type</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the optional type of the created <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a>, must be compatible with the template of <a href="create-assignment-">issue</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>at</span><wbr><span><span>Time</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the point in time when the modification happened, updates <a href="../../gropius.model.issue/-issue/last-updated-at-">Issue.lastUpdatedAt</a> if necessary</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>by</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.user/-user/index-">User</a> who caused the update, updates <a href="../../gropius.model.issue/-issue/participants-">Issue.participants</a> if necessary</p></div></div></div></div></div></div></div>\n',p={},o="createAssignment",l={unversionedId:"api/core/gropius.service.issue/-issue-service/create-assignment-",id:"api/core/gropius.service.issue/-issue-service/create-assignment-",title:"createAssignment",description:"",source:"@site/docs/api/core/gropius.service.issue/-issue-service/create-assignment-.mdx",sourceDirName:"api/core/gropius.service.issue/-issue-service",slug:"/api/core/gropius.service.issue/-issue-service/create-assignment-",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/create-assignment-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"changeIssueType",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/change-issue-type-"},next:{title:"createIssueComment",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/create-issue-comment-"}},d={},c=[],u={toc:c},m="wrapper";function v(s){let{components:e,...a}=s;return(0,t.kt)(m,(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"createassignment"},"createAssignment"),(0,t.kt)(n.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}v.isMDXComponent=!0}}]);