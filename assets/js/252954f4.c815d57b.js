"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65141],{168809:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var i=e(487462),t=(e(667294),e(603905)),n=e(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.issue/-issue-repository/index-">IssueRepository</a><span class="token punctuation">, </span></span><span class="parameter ">labelRepository<span class="token operator">: </span><a href="../../gropius.repository.issue/-label-repository/index-">LabelRepository</a><span class="token punctuation">, </span></span><span class="parameter ">timelineItemRepository<span class="token operator">: </span><a href="../../gropius.repository.issue.timeline/-timeline-item-repository/index-">TimelineItemRepository</a><span class="token punctuation">, </span></span><span class="parameter ">artefactRepository<span class="token operator">: </span><a href="../../gropius.repository.issue/-artefact-repository/index-">ArtefactRepository</a><span class="token punctuation">, </span></span><span class="parameter ">trackableRepository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-trackable-repository/index-">TrackableRepository</a><span class="token punctuation">, </span></span><span class="parameter ">issuePriorityRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-issue-priority-repository/index-">IssuePriorityRepository</a><span class="token punctuation">, </span></span><span class="parameter ">issueTypeRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-issue-type-repository/index-">IssueTypeRepository</a><span class="token punctuation">, </span></span><span class="parameter ">issueStateRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-issue-state-repository/index-">IssueStateRepository</a><span class="token punctuation">, </span></span><span class="parameter ">affectedByIssueRepository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-affected-by-issue-repository/index-">AffectedByIssueRepository</a><span class="token punctuation">, </span></span><span class="parameter ">templatedNodeService<span class="token operator">: </span><a href="../../gropius.service.template/-templated-node-service/index-">TemplatedNodeService</a><span class="token punctuation">, </span></span><span class="parameter ">jsonNodeMapper<span class="token operator">: </span><a href="../../gropius.util/-json-node-mapper/index-">JsonNodeMapper</a><span class="token punctuation">, </span></span><span class="parameter ">userRepository<span class="token operator">: </span><a href="../../gropius.repository.user/-user-repository/index-">UserRepository</a><span class="token punctuation">, </span></span><span class="parameter ">assignmentRepository<span class="token operator">: </span><a href="../../gropius.repository.issue.timeline/-assignment-repository/index-">AssignmentRepository</a><span class="token punctuation">, </span></span><span class="parameter ">assignmentTypeRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-assignment-type-repository/index-">AssignmentTypeRepository</a><span class="token punctuation">, </span></span><span class="parameter ">issueRelationRepository<span class="token operator">: </span><a href="../../gropius.repository.issue.timeline/-issue-relation-repository/index-">IssueRelationRepository</a><span class="token punctuation">, </span></span><span class="parameter ">issueRelationTypeRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-issue-relation-type-repository/index-">IssueRelationTypeRepository</a><span class="token punctuation">, </span></span><span class="parameter ">issueCommentRepository<span class="token operator">: </span><a href="../../gropius.repository.issue.timeline/-issue-comment-repository/index-">IssueCommentRepository</a><span class="token punctuation">, </span></span><span class="parameter ">bodyRepository<span class="token operator">: </span><a href="../../gropius.repository.issue.timeline/-body-repository/index-">BodyRepository</a><span class="token punctuation">, </span></span><span class="parameter ">commentRepository<span class="token operator">: </span><a href="../../gropius.repository.issue.timeline/-comment-repository/index-">CommentRepository</a><span class="token punctuation">, </span></span><span class="parameter ">issueTemplateRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-issue-template-repository/index-">IssueTemplateRepository</a><span class="token punctuation">, </span></span><span class="parameter ">nodeRepository<span class="token operator">: </span><a href="../../gropius.repository.common/-node-repository/index-">NodeRepository</a></span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the associated repository used for CRUD functionality</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>label</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.issue/-label/index-">Label</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>timeline</span><wbr><span>Item</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to save <a href="../../gropius.model.issue.timeline/-timeline-item/index-">TimelineItem</a>s</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>artefact</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.issue/-artefact/index-">Artefact</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>trackable</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.architecture/-trackable/index-">Trackable</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>issue</span><wbr><span>Priority</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.template/-issue-priority/index-">IssuePriority</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>issue</span><wbr><span>Type</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.template/-issue-type/index-">IssueType</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>issue</span><wbr><span>State</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.template/-issue-state/index-">IssueState</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>affected</span><wbr><span>By</span><wbr><span>Issue</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>templated</span><wbr><span>Node</span><wbr><span><span>Service</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to validate and update templated fields</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>json</span><wbr><span>Node</span><wbr><span><span>Mapper</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to serialize templated fields</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>user</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.user/-user/index-">User</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>assignment</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.issue.timeline/-assignment/index-">Assignment</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>assignment</span><wbr><span>Type</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.template/-assignment-type/index-">AssignmentType</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>issue</span><wbr><span>Relation</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.issue.timeline/-issue-relation/index-">IssueRelation</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>issue</span><wbr><span>Relation</span><wbr><span>Type</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.template/-issue-relation-type/index-">IssueRelationType</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>issue</span><wbr><span>Comment</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.issue.timeline/-issue-comment/index-">IssueComment</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>body</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.issue.timeline/-body/index-">Body</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>comment</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.issue.timeline/-comment/index-">Comment</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>issue</span><wbr><span>Template</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to find <a href="../../gropius.model.template/-issue-template/index-">IssueTemplate</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>node</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to delete <span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span>s</p></div></div></div></div></div></div></div>\n',p={},o="IssueService",l={unversionedId:"api/core/gropius.service.issue/-issue-service/-issue-service-",id:"api/core/gropius.service.issue/-issue-service/-issue-service-",title:"IssueService",description:"",source:"@site/docs/api/core/gropius.service.issue/-issue-service/-issue-service-.mdx",sourceDirName:"api/core/gropius.service.issue/-issue-service",slug:"/api/core/gropius.service.issue/-issue-service/-issue-service-",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/-issue-service-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IssueService",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/index-"},next:{title:"addAffectedEntityToIssue",permalink:"/gropius-docs/api/core/gropius.service.issue/-issue-service/add-affected-entity-to-issue-"}},d={},c=[],u={toc:c},v="wrapper";function m(a){let{components:s,...e}=a;return(0,t.kt)(v,(0,i.Z)({},u,e,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"issueservice"},"IssueService"),(0,t.kt)(n.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);