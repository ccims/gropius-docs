"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90955],{437051:(a,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>v,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var e=n(487462),i=(n(667294),n(603905)),o=n(689417);const t='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">NodePermissionService</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator"> : </span><a href="../../gropius.model.user.permission/-node-permission/index-">NodePermission</a><span class="token operator">&lt;</span><a href="index-">V</a><span class="token operator">&gt;</span><span class="token punctuation">, </span><a href="index-">V</a><span class="token operator"> : </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span>, <a href="../../gropius.model.user.permission/-node-with-permissions/index-">NodeWithPermissions</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token operator">&gt;</span><span class="token punctuation">, </span><a href="index-">R</a><span class="token operator"> : </span><a href="../../gropius.repository/-gropius-repository/index-">GropiusRepository</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token punctuation">, </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="index-">R</a></span></span><span class="token punctuation">)</span> : <a href="../-base-permission-service/index-">BasePermissionService</a><span class="token operator">&lt;</span><a href="index-">T</a><span class="token punctuation">, </span><a href="index-">R</a><span class="token operator">&gt; </span></div><p class="paragraph">Base class for services for subclasses of <a href="../../gropius.model.user.permission/-node-permission/index-">NodePermission</a></p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the associated repository used for CRUD functionality</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>T</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the type of Node this service is used for</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>R</span></span></u></div></span></div><div><div class="title"><p class="paragraph">Repository type associated with <a href="index-">T</a></p></div></div></div></div></div><h4 class="">Inheritors</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-i-m-s-permission-service/index-">IMSPermissionService</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-trackable-permission-service/index-">TrackablePermissionService</a></div></span></div><div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="733071793%2FConstructors%2F537371977" anchor-label="NodePermissionService" id="733071793%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-node-permission-service-"><span>Node</span><wbr><span>Permission</span><wbr><span><span>Service</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="733071793%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="index-">R</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1539425363%2FProperties%2F537371977" anchor-label="authorizationChecker" id="-1539425363%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/authorization-checker-"><span>authorization</span><wbr><span><span>Checker</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1539425363%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/authorization-checker-">authorizationChecker</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/AuthorizationChecker///PointingToDeclaration/">AuthorizationChecker</span></div><div class="brief "><p class="paragraph">Injected, used for the <a href="../../gropius.service.common/-node-service/check-permission-">checkPermission</a> function</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-614283711%2FProperties%2F537371977" anchor-label="gropiusUserRepository" id="-614283711%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/gropius-user-repository-"><span>gropius</span><wbr><span>User</span><wbr><span><span>Repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-614283711%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/gropius-user-repository-">gropiusUserRepository</a><span class="token operator">: </span><a href="../../gropius.repository.user/-gropius-user-repository/index-">GropiusUserRepository</a></div><div class="brief "><p class="paragraph">Injected, used to get a user based on a <a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-661731297%2FProperties%2F537371977" anchor-label="repository" id="-661731297%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/repository-"><span><span>repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-661731297%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.service.common/-node-service/repository-">repository</a><span class="token operator">: </span><a href="index-">R</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="1208075282%2FFunctions%2F537371977" anchor-label="checkIsAdmin" id="1208075282%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-is-admin-"><span>check</span><wbr><span>Is</span><wbr><span><span>Admin</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1208075282%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-is-admin-"><span class="token function">checkIsAdmin</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the user defined by <a href="../../gropius.service.common/-node-service/check-is-admin-">authorizationContext</a> is a global admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-639991891%2FFunctions%2F537371977" anchor-label="checkPermission" id="-639991891%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-permission-"><span>check</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-639991891%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-permission-"><span class="token function">checkPermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the <a href="../../gropius.service.common/-node-service/check-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/check-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1405369281%2FFunctions%2F537371977" anchor-label="createdBasePermissionNode" id="1405369281%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#1405369281%2FFunctions%2F537371977"><span>created</span><wbr><span>Base</span><wbr><span>Permission</span><wbr><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1405369281%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="index-#1405369281%2FFunctions%2F537371977"><span class="token function">createdBasePermissionNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.user.permission/-create-base-permission-input/index-">CreateBasePermissionInput</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Updates <a href="index-#1405369281%2FFunctions%2F537371977">node</a> based on <a href="index-#1405369281%2FFunctions%2F537371977">input</a> Should be called after the node was constructed</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-158944269%2FFunctions%2F537371977" anchor-label="deleteNodePermission" id="-158944269%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="delete-node-permission-"><span>delete</span><wbr><span>Node</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-158944269%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="delete-node-permission-"><span class="token function">deleteNodePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.common/-delete-node-input/index-">DeleteNodeInput</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Deletes a <a href="../../gropius.model.user.permission/-node-permission/index-">NodePermission</a> by id Checks the authorization status</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-688546239%2FFunctions%2F537371977" anchor-label="evaluatePermission" id="-688546239%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span>evaluate</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-688546239%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span class="token function">evaluatePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">Evaluates if the <a href="../../gropius.service.common/-node-service/evaluate-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/evaluate-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-462313879%2FFunctions%2F537371977" anchor-label="getUser" id="-462313879%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/get-user-"><span>get</span><wbr><span><span>User</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-462313879%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/get-user-"><span class="token function">getUser</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a></div><div class="brief "><p class="paragraph">Gets a <a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a> based on the userId from the <a href="../../gropius.service.common/-node-service/get-user-">authorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-542791863%2FFunctions%2F537371977" anchor-label="updateBasePermission" id="-542791863%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#-542791863%2FFunctions%2F537371977"><span>update</span><wbr><span>Base</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-542791863%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="index-#-542791863%2FFunctions%2F537371977"><span class="token function">updateBasePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.user.permission/-update-base-permission-input/index-">UpdateBasePermissionInput</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Updates <a href="index-#-542791863%2FFunctions%2F537371977">node</a> based on <a href="index-#-542791863%2FFunctions%2F537371977">input</a> Updates name, description, entries, allUsers and users</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="325374150%2FFunctions%2F537371977" anchor-label="updateNamedNode" id="325374150%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-named-node-service/update-named-node-"><span>update</span><wbr><span>Named</span><wbr><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="325374150%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="../../gropius.service.common/-named-node-service/update-named-node-"><span class="token function">updateNamedNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="../../gropius.model.common/-named-node/index-">NamedNode</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.common/-update-named-node-input/index-">UpdateNamedNodeInput</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Updates <a href="../../gropius.service.common/-named-node-service/update-named-node-">node</a> based on <a href="../../gropius.service.common/-named-node-service/update-named-node-">input</a> Updates name and description</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1592711982%2FFunctions%2F537371977" anchor-label="updateNodePermission" id="1592711982%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="update-node-permission-"><span>update</span><wbr><span>Node</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1592711982%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="update-node-permission-"><span class="token function">updateNodePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.user.permission/-update-base-permission-input/index-">UpdateBasePermissionInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="index-">T</a></div><div class="brief "><p class="paragraph">Updates a <a href="../../gropius.model.user.permission/-node-permission/index-">NodePermission</a> based on the provided <a href="update-node-permission-">input</a> Checks the authorization status</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1263069347%2FFunctions%2F537371977" anchor-label="updatePermissionsOfNode" id="1263069347%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="update-permissions-of-node-"><span>update</span><wbr><span>Permissions</span><wbr><span>Of</span><wbr><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1263069347%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="update-permissions-of-node-"><span class="token function">updatePermissionsOfNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">V</a><span class="token punctuation">, </span></span><span class="parameter ">addedPermissions<span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/OptionalInput///PointingToDeclaration/">OptionalInput</span><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">removedPermissions<span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/OptionalInput///PointingToDeclaration/">OptionalInput</span><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Adds/Removes permissions to/from a <a href="../../gropius.model.user.permission/-node-with-permissions/index-">NodeWithPermissions</a> Checks permissions on <a href="update-permissions-of-node-">addedPermissions</a>, but not on <a href="update-permissions-of-node-">node</a> Checks that at least one user has still <a href="../../gropius.model.user.permission/-node-permission/-companion/-a-d-m-i-n-">NodePermission.ADMIN</a> on <a href="update-permissions-of-node-">node</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',p={},r="NodePermissionService",d={unversionedId:"api/core/gropius.service.user.permission/-node-permission-service/index-",id:"api/core/gropius.service.user.permission/-node-permission-service/index-",title:"NodePermissionService",description:"",source:"@site/docs/api/core/gropius.service.user.permission/-node-permission-service/index-.mdx",sourceDirName:"api/core/gropius.service.user.permission/-node-permission-service",slug:"/api/core/gropius.service.user.permission/-node-permission-service/index-",permalink:"/gropius-docs/api/core/gropius.service.user.permission/-node-permission-service/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"createIMSPermission",permalink:"/gropius-docs/api/core/gropius.service.user.permission/-i-m-s-permission-service/create-i-m-s-permission-"},next:{title:"NodePermissionService",permalink:"/gropius-docs/api/core/gropius.service.user.permission/-node-permission-service/-node-permission-service-"}},l={},c=[],u={toc:c},m="wrapper";function v(a){let{components:s,...n}=a;return(0,i.kt)(m,(0,e.Z)({},u,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodepermissionservice"},"NodePermissionService"),(0,i.kt)(o.Z,{dokkaHTML:t,mdxType:"DokkaComponent"}))}v.isMDXComponent=!0}}]);