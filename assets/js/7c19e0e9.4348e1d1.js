"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33673],{671289:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=e(487462),i=(e(667294),e(603905)),t=e(689417);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/DomainNode///PointingToDeclaration/"><span class="token annotation builtin">DomainNode</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/Authorization///PointingToDeclaration/"><span class="token annotation builtin">Authorization</span></span><span class="token punctuation">(</span><span>name<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"READ"</span></span><span class="token punctuation">, </span></span><wbr><span>allowFromRelated<span class="token operator"> = </span><span class="token punctuation">[</span><span><span class="breakable-word"><span class="token string">"issue"</span></span></span><wbr><span class="token punctuation">]</span></span><wbr><span class="token punctuation">)</span></div></div><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">PublicTimelineItem</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>createdAt<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">var </span>lastModifiedAt<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a></span></span><span class="token punctuation">)</span> : <a href="../-timeline-item/index-">TimelineItem</a></div><p class="paragraph">TimelineItem which grants READ if READ is granted on the <a href="../../../core/gropius.model.issue.timeline/-public-timeline-item/issue-">issue</a></p><h4 class="">Inheritors</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-abstract-type-changed-event/index-">AbstractTypeChangedEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-added-affected-entity-event/index-">AddedAffectedEntityEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-added-artefact-event/index-">AddedArtefactEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-added-label-event/index-">AddedLabelEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-added-to-pinned-issues-event/index-">AddedToPinnedIssuesEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-added-to-trackable-event/index-">AddedToTrackableEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-assignment/index-">Assignment</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-comment/index-">Comment</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-issue-relation/index-">IssueRelation</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-priority-changed-event/index-">PriorityChangedEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-removed-affected-entity-event/index-">RemovedAffectedEntityEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-removed-artefact-event/index-">RemovedArtefactEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-removed-assignment-event/index-">RemovedAssignmentEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-removed-from-pinned-issues-event/index-">RemovedFromPinnedIssuesEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-removed-label-event/index-">RemovedLabelEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-removed-templated-field-event/index-">RemovedTemplatedFieldEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-state-changed-event/index-">StateChangedEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-templated-field-changed-event/index-">TemplatedFieldChangedEvent</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-title-changed-event/index-">TitleChangedEvent</a></div></span></div><div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-1164687248%2FConstructors%2F537371977" anchor-label="PublicTimelineItem" id="-1164687248%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-public-timeline-item-"><span>Public</span><wbr><span>Timeline</span><wbr><span><span>Item</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1164687248%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">createdAt<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">lastModifiedAt<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="2092064897%2FProperties%2F537371977" anchor-label="createdAt" id="2092064897%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.common/-audited-node/created-at-"><span>created</span><wbr><span><span>At</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="2092064897%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/OrderProperty///PointingToDeclaration/"><span class="token annotation builtin">OrderProperty</span></span></div></div><span class="token keyword">val </span><a href="../../gropius.model.common/-audited-node/created-at-">createdAt</a><span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a></div><div class="brief "><p class="paragraph">The DateTime this entity was created at.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1086189347%2FProperties%2F537371977" anchor-label="createdBy" id="-1086189347%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.common/-audited-node/created-by-"><span>created</span><wbr><span><span>By</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1086189347%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/NodeRelationship///PointingToDeclaration/"><span class="token annotation builtin">NodeRelationship</span></span><span class="token punctuation">(</span><span>type<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"CREATED_BY"</span></span><span class="token punctuation">, </span></span><wbr><span>direction<span class="token operator"> = </span><span data-unresolved-link="io.github.graphglue.model/Direction.OUTGOING///PointingToDeclaration/">Direction.OUTGOING</span></span><wbr><span class="token punctuation">)</span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div></div><span class="token keyword">val </span><a href="../../gropius.model.common/-audited-node/created-by-">createdBy</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model.property/LazyLoadingDelegate///PointingToDeclaration/">LazyLoadingDelegate</span><span class="token operator">&lt;</span><a href="../../gropius.model.user/-user/index-">User</a><span class="token punctuation">, </span><span data-unresolved-link="io.github.graphglue.model.property/NodePropertyDelegate.NodeProperty///PointingToDeclaration/">NodePropertyDelegate.NodeProperty</span><span class="token operator">&lt;</span><a href="../../gropius.model.user/-user/index-">User</a><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">The User who created this entity.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="715160082%2FProperties%2F537371977" anchor-label="graphQLId" id="715160082%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.user.permission/-trackable-permission/index-#715160082%2FProperties%2F537371977"><span>graph</span><wbr><span><span>QLId</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="715160082%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.model.user.permission/-trackable-permission/index-#715160082%2FProperties%2F537371977">graphQLId</a><span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span></div><div class="brief "><p class="paragraph">The unique id of this node</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1243799277%2FProperties%2F537371977" anchor-label="isPersisted" id="1243799277%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.user.permission/-trackable-permission/index-#1243799277%2FProperties%2F537371977"><span>is</span><wbr><span><span>Persisted</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1243799277%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.model.user.permission/-trackable-permission/index-#1243799277%2FProperties%2F537371977">isPersisted</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-433523522%2FProperties%2F537371977" anchor-label="issue" id="-433523522%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-timeline-item/issue-"><span><span>issue</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-433523522%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/NodeRelationship///PointingToDeclaration/"><span class="token annotation builtin">NodeRelationship</span></span><span class="token punctuation">(</span><span>type<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"TIMELINE"</span></span><span class="token punctuation">, </span></span><wbr><span>direction<span class="token operator"> = </span><span data-unresolved-link="io.github.graphglue.model/Direction.INCOMING///PointingToDeclaration/">Direction.INCOMING</span></span><wbr><span class="token punctuation">)</span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/GraphQLNullable///PointingToDeclaration/"><span class="token annotation builtin">GraphQLNullable</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div></div><span class="token keyword">val </span><a href="../-timeline-item/issue-">issue</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model.property/LazyLoadingDelegate///PointingToDeclaration/">LazyLoadingDelegate</span><span class="token operator">&lt;</span><a href="../../gropius.model.issue/-issue/index-">Issue</a><span class="token punctuation">, </span><span data-unresolved-link="io.github.graphglue.model.property/NodePropertyDelegate.NodeProperty///PointingToDeclaration/">NodePropertyDelegate.NodeProperty</span><span class="token operator">&lt;</span><a href="../../gropius.model.issue/-issue/index-">Issue</a><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">The Issue this TimelineItem is part of.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1330126252%2FProperties%2F537371977" anchor-label="lastModifiedAt" id="1330126252%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.common/-audited-node/last-modified-at-"><span>last</span><wbr><span>Modified</span><wbr><span><span>At</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1330126252%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/OrderProperty///PointingToDeclaration/"><span class="token annotation builtin">OrderProperty</span></span></div></div><span class="token keyword">var </span><a href="../../gropius.model.common/-audited-node/last-modified-at-">lastModifiedAt</a><span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a></div><div class="brief "><p class="paragraph">The DateTime this entity was last modified at.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1848127992%2FProperties%2F537371977" anchor-label="lastModifiedBy" id="-1848127992%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.common/-audited-node/last-modified-by-"><span>last</span><wbr><span>Modified</span><wbr><span><span>By</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1848127992%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/NodeRelationship///PointingToDeclaration/"><span class="token annotation builtin">NodeRelationship</span></span><span class="token punctuation">(</span><span>type<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"LAST_MODIFIED_BY"</span></span><span class="token punctuation">, </span></span><wbr><span>direction<span class="token operator"> = </span><span data-unresolved-link="io.github.graphglue.model/Direction.OUTGOING///PointingToDeclaration/">Direction.OUTGOING</span></span><wbr><span class="token punctuation">)</span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div></div><span class="token keyword">val </span><a href="../../gropius.model.common/-audited-node/last-modified-by-">lastModifiedBy</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model.property/LazyLoadingDelegate///PointingToDeclaration/">LazyLoadingDelegate</span><span class="token operator">&lt;</span><a href="../../gropius.model.user/-user/index-">User</a><span class="token punctuation">, </span><span data-unresolved-link="io.github.graphglue.model.property/NodePropertyDelegate.NodeProperty///PointingToDeclaration/">NodePropertyDelegate.NodeProperty</span><span class="token operator">&lt;</span><a href="../../gropius.model.user/-user/index-">User</a><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">The User who last modified this entity.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-55847930%2FProperties%2F537371977" anchor-label="parentItem" id="-55847930%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-timeline-item/parent-item-"><span>parent</span><wbr><span><span>Item</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-55847930%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/NodeRelationship///PointingToDeclaration/"><span class="token annotation builtin">NodeRelationship</span></span><span class="token punctuation">(</span><span>type<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"CHILD_ITEMS"</span></span><span class="token punctuation">, </span></span><wbr><span>direction<span class="token operator"> = </span><span data-unresolved-link="io.github.graphglue.model/Direction.INCOMING///PointingToDeclaration/">Direction.INCOMING</span></span><wbr><span class="token punctuation">)</span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div></div><span class="token keyword">val </span><a href="../-timeline-item/parent-item-">parentItem</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model.property/LazyLoadingDelegate///PointingToDeclaration/">LazyLoadingDelegate</span><span class="token operator">&lt;</span><a href="../-parent-timeline-item/index-">ParentTimelineItem</a><span class="token operator">?</span><span class="token punctuation">, </span><span data-unresolved-link="io.github.graphglue.model.property/NodePropertyDelegate.NodeProperty///PointingToDeclaration/">NodePropertyDelegate.NodeProperty</span><span class="token operator">&lt;</span><a href="../-parent-timeline-item/index-">ParentTimelineItem</a><span class="token operator">?</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">If existing, the parent TimelineItem</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="973047539%2FProperties%2F537371977" anchor-label="rawId" id="973047539%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.user.permission/-trackable-permission/index-#973047539%2FProperties%2F537371977"><span>raw</span><wbr><span><span>Id</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="973047539%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.model.user.permission/-trackable-permission/index-#973047539%2FProperties%2F537371977">rawId</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="-1601645539%2FFunctions%2F537371977" anchor-label="equals" id="-1601645539%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.user.permission/-trackable-permission/index-#-1601645539%2FFunctions%2F537371977"><span><span>equals</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1601645539%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">operator override </span><span class="token keyword">fun </span><a href="../../gropius.model.user.permission/-trackable-permission/index-#-1601645539%2FFunctions%2F537371977"><span class="token function">equals</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">other<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html">Any</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1204826071%2FFunctions%2F537371977" anchor-label="hashCode" id="-1204826071%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.user.permission/-trackable-permission/index-#-1204826071%2FFunctions%2F537371977"><span>hash</span><wbr><span><span>Code</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1204826071%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">override </span><span class="token keyword">fun </span><a href="../../gropius.model.user.permission/-trackable-permission/index-#-1204826071%2FFunctions%2F537371977"><span class="token function">hashCode</span></a><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html">Int</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1382992136%2FFunctions%2F537371977" anchor-label="toString" id="-1382992136%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.user.permission/-trackable-permission/index-#-1382992136%2FFunctions%2F537371977"><span>to</span><wbr><span><span>String</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1382992136%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">fun </span><a href="../../gropius.model.user.permission/-trackable-permission/index-#-1382992136%2FFunctions%2F537371977"><span class="token function">toString</span></a><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',l={},r="PublicTimelineItem",d={unversionedId:"api/core/gropius.model.issue.timeline/-public-timeline-item/index-",id:"api/core/gropius.model.issue.timeline/-public-timeline-item/index-",title:"PublicTimelineItem",description:"",source:"@site/docs/api/core/gropius.model.issue.timeline/-public-timeline-item/index-.mdx",sourceDirName:"api/core/gropius.model.issue.timeline/-public-timeline-item",slug:"/api/core/gropius.model.issue.timeline/-public-timeline-item/index-",permalink:"/gropius-docs/api/core/gropius.model.issue.timeline/-public-timeline-item/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"oldPriority",permalink:"/gropius-docs/api/core/gropius.model.issue.timeline/-priority-changed-event/old-priority-"},next:{title:"PublicTimelineItem",permalink:"/gropius-docs/api/core/gropius.model.issue.timeline/-public-timeline-item/-public-timeline-item-"}},p={},c=[],v={toc:c},m="wrapper";function k(a){let{components:n,...e}=a;return(0,i.kt)(m,(0,s.Z)({},v,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publictimelineitem"},"PublicTimelineItem"),(0,i.kt)(t.Z,{dokkaHTML:o,mdxType:"DokkaComponent"}))}k.isMDXComponent=!0}}]);