"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87446],{274166:(a,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var e=n(487462),i=(n(667294),n(603905)),o=n(689417);const t='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.stereotype/Service///PointingToDeclaration/"><span class="token annotation builtin">Service</span></span></div></div><span class="token keyword">class </span><a href="index-">SyncPermissionTargetService</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-sync-permission-target-repository/index-">SyncPermissionTargetRepository</a></span></span><span class="token punctuation">)</span> : <a href="../../gropius.service.common/-named-node-service/index-">NamedNodeService</a><span class="token operator">&lt;</span><a href="../../gropius.model.architecture/-sync-permission-target/index-">SyncPermissionTarget</a><span class="token punctuation">, </span><a href="../../gropius.repository.architecture/-sync-permission-target-repository/index-">SyncPermissionTargetRepository</a><span class="token operator">&gt; </span></div><p class="paragraph">Service for <a href="../../gropius.model.architecture/-sync-permission-target/index-">SyncPermissionTarget</a>s.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the associated repository used for CRUD functionality</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-974387271%2FConstructors%2F537371977" anchor-label="SyncPermissionTargetService" id="-974387271%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-sync-permission-target-service-"><span>Sync</span><wbr><span>Permission</span><wbr><span>Target</span><wbr><span><span>Service</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-974387271%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-sync-permission-target-repository/index-">SyncPermissionTargetRepository</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1539425363%2FProperties%2F537371977" anchor-label="authorizationChecker" id="-1539425363%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/authorization-checker-"><span>authorization</span><wbr><span><span>Checker</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1539425363%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/authorization-checker-">authorizationChecker</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/AuthorizationChecker///PointingToDeclaration/">AuthorizationChecker</span></div><div class="brief "><p class="paragraph">Injected, used for the <a href="../../gropius.service.common/-node-service/check-permission-">checkPermission</a> function</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-614283711%2FProperties%2F537371977" anchor-label="gropiusUserRepository" id="-614283711%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/gropius-user-repository-"><span>gropius</span><wbr><span>User</span><wbr><span><span>Repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-614283711%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/gropius-user-repository-">gropiusUserRepository</a><span class="token operator">: </span><a href="../../gropius.repository.user/-gropius-user-repository/index-">GropiusUserRepository</a></div><div class="brief "><p class="paragraph">Injected, used to get a user based on a <a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-661731297%2FProperties%2F537371977" anchor-label="repository" id="-661731297%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/repository-"><span><span>repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-661731297%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.service.common/-node-service/repository-">repository</a><span class="token operator">: </span><a href="../../gropius.repository.architecture/-sync-permission-target-repository/index-">SyncPermissionTargetRepository</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="1208075282%2FFunctions%2F537371977" anchor-label="checkIsAdmin" id="1208075282%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-is-admin-"><span>check</span><wbr><span>Is</span><wbr><span><span>Admin</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1208075282%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-is-admin-"><span class="token function">checkIsAdmin</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the user defined by <a href="../../gropius.service.common/-node-service/check-is-admin-">authorizationContext</a> is a global admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-639991891%2FFunctions%2F537371977" anchor-label="checkPermission" id="-639991891%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-permission-"><span>check</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-639991891%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-permission-"><span class="token function">checkPermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the <a href="../../gropius.service.common/-node-service/check-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/check-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-688546239%2FFunctions%2F537371977" anchor-label="evaluatePermission" id="-688546239%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span>evaluate</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-688546239%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span class="token function">evaluatePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">Evaluates if the <a href="../../gropius.service.common/-node-service/evaluate-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/evaluate-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-462313879%2FFunctions%2F537371977" anchor-label="getUser" id="-462313879%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/get-user-"><span>get</span><wbr><span><span>User</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-462313879%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/get-user-"><span class="token function">getUser</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a></div><div class="brief "><p class="paragraph">Gets a <a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a> based on the userId from the <a href="../../gropius.service.common/-node-service/get-user-">authorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="325374150%2FFunctions%2F537371977" anchor-label="updateNamedNode" id="325374150%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-named-node-service/update-named-node-"><span>update</span><wbr><span>Named</span><wbr><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="325374150%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="../../gropius.service.common/-named-node-service/update-named-node-"><span class="token function">updateNamedNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="../../gropius.model.common/-named-node/index-">NamedNode</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.common/-update-named-node-input/index-">UpdateNamedNodeInput</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Updates <a href="../../gropius.service.common/-named-node-service/update-named-node-">node</a> based on <a href="../../gropius.service.common/-named-node-service/update-named-node-">input</a> Updates name and description</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-77037093%2FFunctions%2F537371977" anchor-label="updateSyncPermissions" id="-77037093%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="update-sync-permissions-"><span>update</span><wbr><span>Sync</span><wbr><span><span>Permissions</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-77037093%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="update-sync-permissions-"><span class="token function">updateSyncPermissions</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.architecture/-update-sync-permissions-input/index-">UpdateSyncPermissionsInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.architecture/-sync-permission-target/index-">SyncPermissionTarget</a></div><div class="brief "><p class="paragraph">Updates the sync permissions of the current user on the <a href="../../gropius.model.architecture/-sync-permission-target/index-">SyncPermissionTarget</a> based on the provided <a href="update-sync-permissions-">input</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',r={},p="SyncPermissionTargetService",c={unversionedId:"api/core/gropius.service.architecture/-sync-permission-target-service/index-",id:"api/core/gropius.service.architecture/-sync-permission-target-service/index-",title:"SyncPermissionTargetService",description:"",source:"@site/docs/api/core/gropius.service.architecture/-sync-permission-target-service/index-.mdx",sourceDirName:"api/core/gropius.service.architecture/-sync-permission-target-service",slug:"/api/core/gropius.service.architecture/-sync-permission-target-service/index-",permalink:"/gropius-docs/api/core/gropius.service.architecture/-sync-permission-target-service/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"updateRelation",permalink:"/gropius-docs/api/core/gropius.service.architecture/-relation-service/update-relation-"},next:{title:"SyncPermissionTargetService",permalink:"/gropius-docs/api/core/gropius.service.architecture/-sync-permission-target-service/-sync-permission-target-service-"}},d={},l=[],v={toc:l},u="wrapper";function m(a){let{components:s,...n}=a;return(0,i.kt)(u,(0,e.Z)({},v,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"syncpermissiontargetservice"},"SyncPermissionTargetService"),(0,i.kt)(o.Z,{dokkaHTML:t,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);