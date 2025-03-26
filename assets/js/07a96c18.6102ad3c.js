"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39274],{303836:(a,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=s(487462),i=(s(667294),s(603905)),e=s(689417);const p='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">UnassignedTimelineItem</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>githubId<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">var </span>createdAt<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>createdBy<span class="token operator">: </span><span data-unresolved-link="gropius.sync.github.generated.fragment/UserData///PointingToDeclaration/">UserData</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>user<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span> : <a href="../-owned-github-timeline-item/index-">OwnedGithubTimelineItem</a></div><p class="paragraph">A timeline item that may be integrated into Gropius</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>github</span><wbr><span><span>Id</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The GitHub ID of the timeline item</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>created</span><wbr><span><span>At</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The creation date of the timeline item</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>created</span><wbr><span><span>By</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The GitHub user that created the timeline item</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>user</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The user to unassign</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-1623474805%2FConstructors%2F-687460507" anchor-label="UnassignedTimelineItem" id="-1623474805%2FConstructors%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-unassigned-timeline-item-"><span>Unassigned</span><wbr><span>Timeline</span><wbr><span><span>Item</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1623474805%2FConstructors%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">data<span class="token operator">: </span><span data-unresolved-link="gropius.sync.github.generated.fragment/UnassignedEventTimelineItemData///PointingToDeclaration/">UnassignedEventTimelineItemData</span></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Parse API data</p></div><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">githubId<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">createdAt<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">createdBy<span class="token operator">: </span><span data-unresolved-link="gropius.sync.github.generated.fragment/UserData///PointingToDeclaration/">UserData</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">user<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="1587874478%2FProperties%2F-687460507" anchor-label="createdAt" id="1587874478%2FProperties%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-github-timeline-item/created-at-"><span>created</span><wbr><span><span>At</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1587874478%2FProperties%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">var </span><a href="../-github-timeline-item/created-at-">createdAt</a><span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="901005574%2FProperties%2F-687460507" anchor-label="createdBy" id="901005574%2FProperties%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="created-by-"><span>created</span><wbr><span><span>By</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="901005574%2FProperties%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="created-by-">createdBy</a><span class="token operator">: </span><span data-unresolved-link="gropius.sync.github.generated.fragment/UserData///PointingToDeclaration/">UserData</span><span class="token operator">?</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1667611603%2FProperties%2F-687460507" anchor-label="githubId" id="1667611603%2FProperties%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-github-timeline-item/github-id-"><span>github</span><wbr><span><span>Id</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1667611603%2FProperties%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../-github-timeline-item/github-id-">githubId</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1974688950%2FProperties%2F-687460507" anchor-label="id" id="1974688950%2FProperties%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-github-timeline-item/id-"><span><span>id</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1974688950%2FProperties%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">var </span><a href="../-github-timeline-item/id-">id</a><span class="token operator">: </span><span data-unresolved-link="org.bson.types/ObjectId///PointingToDeclaration/">ObjectId</span><span class="token operator">?</span></div><div class="brief "><p class="paragraph">MongoDB ID</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="982872970%2FProperties%2F-687460507" anchor-label="user" id="982872970%2FProperties%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="user-"><span><span>user</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="982872970%2FProperties%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="user-">user</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="1486462733%2FFunctions%2F-687460507" anchor-label="gropiusTimelineItem" id="1486462733%2FFunctions%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="gropius-timeline-item-"><span>gropius</span><wbr><span>Timeline</span><wbr><span><span>Item</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1486462733%2FFunctions%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">suspend override </span><span class="token keyword">fun </span><a href="gropius-timeline-item-"><span class="token function">gropiusTimelineItem</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">imsProject<span class="token operator">: </span><a href="../../../core/gropius.model.architecture/-i-m-s-project/index-">IMSProject</a><span class="token punctuation">, </span></span><span class="parameter ">service<span class="token operator">: </span><a href="../../../sync/gropius.sync/-sync-data-service/index-">SyncDataService</a><span class="token punctuation">, </span></span><span class="parameter ">timelineItemConversionInformation<span class="token operator">: </span><a href="../../../sync/gropius.sync/-timeline-item-conversion-information/index-">TimelineItemConversionInformation</a><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">issue<span class="token operator">: </span><a href="../../../core/gropius.model.issue/-issue/index-">Issue</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-pair/index.html">Pair</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../../core/gropius.model.issue.timeline/-timeline-item/index-">TimelineItem</a><span class="token operator">&gt;</span><span class="token punctuation">, </span><a href="../../../sync/gropius.sync/-timeline-item-conversion-information/index-">TimelineItemConversionInformation</a><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-956537808%2FFunctions%2F-687460507" anchor-label="identification" id="-956537808%2FFunctions%2F-687460507" data-filterable-set=":sync-github:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-github:dokkaHtmlPartial/main" data-filterable-set=":sync-github:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-owned-github-timeline-item/identification-"><span><span>identification</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-956537808%2FFunctions%2F-687460507"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">suspend override </span><span class="token keyword">fun </span><a href="../-owned-github-timeline-item/identification-"><span class="token function">identification</span></a><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',l={},o="UnassignedTimelineItem",d={unversionedId:"api/sync-github/gropius.sync.github/-unassigned-timeline-item/index-",id:"api/sync-github/gropius.sync.github/-unassigned-timeline-item/index-",title:"UnassignedTimelineItem",description:"",source:"@site/docs/api/sync-github/gropius.sync.github/-unassigned-timeline-item/index-.mdx",sourceDirName:"api/sync-github/gropius.sync.github/-unassigned-timeline-item",slug:"/api/sync-github/gropius.sync.github/-unassigned-timeline-item/index-",permalink:"/gropius-docs/api/sync-github/gropius.sync.github/-unassigned-timeline-item/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"issue",permalink:"/gropius-docs/api/sync-github/gropius.sync.github/-timeline-walker/issue-"},next:{title:"UnassignedTimelineItem",permalink:"/gropius-docs/api/sync-github/gropius.sync.github/-unassigned-timeline-item/-unassigned-timeline-item-"}},r={},c=[],m={toc:c},v="wrapper";function u(a){let{components:n,...s}=a;return(0,i.kt)(v,(0,t.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unassignedtimelineitem"},"UnassignedTimelineItem"),(0,i.kt)(e.Z,{dokkaHTML:p,mdxType:"DokkaComponent"}))}u.isMDXComponent=!0}}]);