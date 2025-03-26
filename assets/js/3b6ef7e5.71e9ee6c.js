"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73371],{718962:(a,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=s(487462),i=(s(667294),s(603905)),e=s(689417);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/DomainNode///PointingToDeclaration/"><span class="token annotation builtin">DomainNode</span></span></div></div><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">TrackablePermission</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator"> : </span><a href="../../gropius.model.architecture/-trackable/index-">Trackable</a><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">entries<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-mutable-list/index.html">MutableList</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">allUsers<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></span></span><span class="token punctuation">)</span> : <a href="../-node-permission/index-">NodePermission</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator">&gt; </span></div><p class="paragraph">Common base class for <a href="../-component-permission/index-">ComponentPermission</a> and <a href="../-project-permission/index-">ProjectPermission</a></p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>T</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the type of Node which is affected by this permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>entries</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the granted permission entries as Strings</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>all</span><wbr><span><span>Users</span></span></u></div></span></div><div><div class="title"><p class="paragraph">if true, the permission is granted to all users</p></div></div></div></div></div><h4 class="">Inheritors</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-component-permission/index-">ComponentPermission</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-project-permission/index-">ProjectPermission</a></div></span></div><div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-626296307%2FConstructors%2F537371977" anchor-label="TrackablePermission" id="-626296307%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-trackable-permission-"><span>Trackable</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-626296307%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">entries<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-mutable-list/index.html">MutableList</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">allUsers<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="TYPE">\n        <h2 class="">Types</h2>\n        <div class="table"><a data-name="-1375770796%2FClasslikes%2F537371977" anchor-label="Companion" id="-1375770796%2FClasslikes%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-companion/index-"><span><span>Companion</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1375770796%2FClasslikes%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">object </span><a href="-companion/index-">Companion</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1928537892%2FProperties%2F537371977" anchor-label="allUsers" id="-1928537892%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-base-permission/all-users-"><span>all</span><wbr><span><span>Users</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1928537892%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/OrderProperty///PointingToDeclaration/"><span class="token annotation builtin">OrderProperty</span></span></div></div><span class="token keyword">var </span><a href="../-base-permission/all-users-">allUsers</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">If, the permission is granted to all users. Use with caution.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-985481855%2FProperties%2F537371977" anchor-label="description" id="-985481855%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.common/-named-node/description-"><span><span>description</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-985481855%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/SearchProperty///PointingToDeclaration/"><span class="token annotation builtin">SearchProperty</span></span></div></div><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">var </span><a href="../../gropius.model.common/-named-node/description-">description</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></div><div class="brief "><p class="paragraph">The description of this entity.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1185484871%2FProperties%2F537371977" anchor-label="entries" id="1185484871%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-base-permission/entries-"><span><span>entries</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1185484871%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/SearchProperty///PointingToDeclaration/"><span class="token annotation builtin">SearchProperty</span></span></div></div><span class="token keyword">open </span><span class="token keyword">val </span><a href="../-base-permission/entries-">entries</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-mutable-list/index.html">MutableList</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="715160082%2FProperties%2F537371977" anchor-label="graphQLId" id="715160082%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#715160082%2FProperties%2F537371977"><span>graph</span><wbr><span><span>QLId</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="715160082%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="index-#715160082%2FProperties%2F537371977">graphQLId</a><span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span></div><div class="brief "><p class="paragraph">The unique id of this node</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1243799277%2FProperties%2F537371977" anchor-label="isPersisted" id="1243799277%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#1243799277%2FProperties%2F537371977"><span>is</span><wbr><span><span>Persisted</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1243799277%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="index-#1243799277%2FProperties%2F537371977">isPersisted</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="920594770%2FProperties%2F537371977" anchor-label="name" id="920594770%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.model.common/-named-node/name-"><span><span>name</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="920594770%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/OrderProperty///PointingToDeclaration/"><span class="token annotation builtin">OrderProperty</span></span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/SearchProperty///PointingToDeclaration/"><span class="token annotation builtin">SearchProperty</span></span></div></div><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">var </span><a href="../../gropius.model.common/-named-node/name-">name</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></div><div class="brief "><p class="paragraph">The name of this entity.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1104731136%2FProperties%2F537371977" anchor-label="nodesWithPermission" id="-1104731136%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-node-permission/nodes-with-permission-"><span>nodes</span><wbr><span>With</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1104731136%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/NodeRelationship///PointingToDeclaration/"><span class="token annotation builtin">NodeRelationship</span></span><span class="token punctuation">(</span><span>type<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"NODE"</span></span><span class="token punctuation">, </span></span><wbr><span>direction<span class="token operator"> = </span><span data-unresolved-link="io.github.graphglue.model/Direction.OUTGOING///PointingToDeclaration/">Direction.OUTGOING</span></span><wbr><span class="token punctuation">)</span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div></div><span class="token keyword">val </span><a href="../-node-permission/nodes-with-permission-">nodesWithPermission</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model.property/LazyLoadingDelegate///PointingToDeclaration/">LazyLoadingDelegate</span><span class="token operator">&lt;</span><a href="index-">T</a><span class="token punctuation">, </span><span data-unresolved-link="io.github.graphglue.model.property/NodeSetPropertyDelegate.NodeSetProperty///PointingToDeclaration/">NodeSetPropertyDelegate.NodeSetProperty</span><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">Nodes on which the Permission is granted.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="973047539%2FProperties%2F537371977" anchor-label="rawId" id="973047539%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#973047539%2FProperties%2F537371977"><span>raw</span><wbr><span><span>Id</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="973047539%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="index-#973047539%2FProperties%2F537371977">rawId</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="2082806863%2FProperties%2F537371977" anchor-label="users" id="2082806863%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-base-permission/users-"><span><span>users</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="2082806863%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/NodeRelationship///PointingToDeclaration/"><span class="token annotation builtin">NodeRelationship</span></span><span class="token punctuation">(</span><span>type<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"PERMISSION"</span></span><span class="token punctuation">, </span></span><wbr><span>direction<span class="token operator"> = </span><span data-unresolved-link="io.github.graphglue.model/Direction.INCOMING///PointingToDeclaration/">Direction.INCOMING</span></span><wbr><span class="token punctuation">)</span></div><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="io.github.graphglue.model/FilterProperty///PointingToDeclaration/"><span class="token annotation builtin">FilterProperty</span></span></div></div><span class="token keyword">val </span><a href="../-base-permission/users-">users</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model.property/LazyLoadingDelegate///PointingToDeclaration/">LazyLoadingDelegate</span><span class="token operator">&lt;</span><a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a><span class="token punctuation">, </span><span data-unresolved-link="io.github.graphglue.model.property/NodeSetPropertyDelegate.NodeSetProperty///PointingToDeclaration/">NodeSetPropertyDelegate.NodeSetProperty</span><span class="token operator">&lt;</span><a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a><span class="token operator">&gt;</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">GropiusUsers granted this Permission</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="-1601645539%2FFunctions%2F537371977" anchor-label="equals" id="-1601645539%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#-1601645539%2FFunctions%2F537371977"><span><span>equals</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1601645539%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">operator override </span><span class="token keyword">fun </span><a href="index-#-1601645539%2FFunctions%2F537371977"><span class="token function">equals</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">other<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-any/index.html">Any</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1204826071%2FFunctions%2F537371977" anchor-label="hashCode" id="-1204826071%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#-1204826071%2FFunctions%2F537371977"><span>hash</span><wbr><span><span>Code</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1204826071%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">override </span><span class="token keyword">fun </span><a href="index-#-1204826071%2FFunctions%2F537371977"><span class="token function">hashCode</span></a><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html">Int</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1382992136%2FFunctions%2F537371977" anchor-label="toString" id="-1382992136%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#-1382992136%2FFunctions%2F537371977"><span>to</span><wbr><span><span>String</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1382992136%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">fun </span><a href="index-#-1382992136%2FFunctions%2F537371977"><span class="token function">toString</span></a><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',l={},p="TrackablePermission",r={unversionedId:"api/core/gropius.model.user.permission/-trackable-permission/index-",id:"api/core/gropius.model.user.permission/-trackable-permission/index-",title:"TrackablePermission",description:"",source:"@site/docs/api/core/gropius.model.user.permission/-trackable-permission/index-.mdx",sourceDirName:"api/core/gropius.model.user.permission/-trackable-permission",slug:"/api/core/gropius.model.user.permission/-trackable-permission/index-",permalink:"/gropius-docs/api/core/gropius.model.user.permission/-trackable-permission/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"entries",permalink:"/gropius-docs/api/core/gropius.model.user.permission/-project-permission/entries-"},next:{title:"Companion",permalink:"/gropius-docs/api/core/gropius.model.user.permission/-trackable-permission/-companion/index-"}},d={},c=[],v={toc:c},k="wrapper";function m(a){let{components:n,...s}=a;return(0,i.kt)(k,(0,t.Z)({},v,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trackablepermission"},"TrackablePermission"),(0,i.kt)(e.Z,{dokkaHTML:o,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);