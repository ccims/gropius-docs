"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29467],{942993:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=e(487462),i=(e(667294),e(603905)),t=e(689417);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.stereotype/Service///PointingToDeclaration/"><span class="token annotation builtin">Service</span></span></div></div><span class="token keyword">class </span><a href="index-">IMSUserService</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.user/-i-m-s-user-repository/index-">IMSUserRepository</a><span class="token punctuation">, </span></span><span class="parameter ">imsRepository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-i-m-s-repository/index-">IMSRepository</a><span class="token punctuation">, </span></span><span class="parameter ">templatedNodeService<span class="token operator">: </span><a href="../../gropius.service.template/-templated-node-service/index-">TemplatedNodeService</a></span></span><span class="token punctuation">)</span> : <a href="../../gropius.service.common/-node-service/index-">NodeService</a><span class="token operator">&lt;</span><a href="../../gropius.model.user/-i-m-s-user/index-">IMSUser</a><span class="token punctuation">, </span><a href="../../gropius.repository.user/-i-m-s-user-repository/index-">IMSUserRepository</a><span class="token operator">&gt; </span></div><p class="paragraph">Service for <a href="../../gropius.model.user/-i-m-s-user/index-">IMSUser</a>s. Provides function to create and update</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the associated repository used for CRUD functionality</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to get <a href="../../gropius.model.architecture/-i-m-s/index-">IMS</a>s by id</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>templated</span><wbr><span>Node</span><wbr><span><span>Service</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to update templatedFields</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="166557168%2FConstructors%2F537371977" anchor-label="IMSUserService" id="166557168%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-i-m-s-user-service-"><span>IMSUser</span><wbr><span><span>Service</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="166557168%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.user/-i-m-s-user-repository/index-">IMSUserRepository</a><span class="token punctuation">, </span></span><span class="parameter ">imsRepository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-i-m-s-repository/index-">IMSRepository</a><span class="token punctuation">, </span></span><span class="parameter ">templatedNodeService<span class="token operator">: </span><a href="../../gropius.service.template/-templated-node-service/index-">TemplatedNodeService</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1539425363%2FProperties%2F537371977" anchor-label="authorizationChecker" id="-1539425363%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/authorization-checker-"><span>authorization</span><wbr><span><span>Checker</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1539425363%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/authorization-checker-">authorizationChecker</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/AuthorizationChecker///PointingToDeclaration/">AuthorizationChecker</span></div><div class="brief "><p class="paragraph">Injected, used for the <a href="../../gropius.service.common/-node-service/check-permission-">checkPermission</a> function</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-614283711%2FProperties%2F537371977" anchor-label="gropiusUserRepository" id="-614283711%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/gropius-user-repository-"><span>gropius</span><wbr><span>User</span><wbr><span><span>Repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-614283711%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/gropius-user-repository-">gropiusUserRepository</a><span class="token operator">: </span><a href="../../gropius.repository.user/-gropius-user-repository/index-">GropiusUserRepository</a></div><div class="brief "><p class="paragraph">Injected, used to get a user based on a <a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-661731297%2FProperties%2F537371977" anchor-label="repository" id="-661731297%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/repository-"><span><span>repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-661731297%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.service.common/-node-service/repository-">repository</a><span class="token operator">: </span><a href="../../gropius.repository.user/-i-m-s-user-repository/index-">IMSUserRepository</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="1208075282%2FFunctions%2F537371977" anchor-label="checkIsAdmin" id="1208075282%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-is-admin-"><span>check</span><wbr><span>Is</span><wbr><span><span>Admin</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1208075282%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-is-admin-"><span class="token function">checkIsAdmin</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the user defined by <a href="../../gropius.service.common/-node-service/check-is-admin-">authorizationContext</a> is a global admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-639991891%2FFunctions%2F537371977" anchor-label="checkPermission" id="-639991891%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-permission-"><span>check</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-639991891%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-permission-"><span class="token function">checkPermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the <a href="../../gropius.service.common/-node-service/check-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/check-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-832851234%2FFunctions%2F537371977" anchor-label="createIMSUser" id="-832851234%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="create-i-m-s-user-"><span>create</span><wbr><span><span>IMSUser</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-832851234%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-i-m-s-user-"><span class="token function">createIMSUser</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.user/-create-i-m-s-user-input/index-">CreateIMSUserInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.user/-i-m-s-user/index-">IMSUser</a></div><div class="brief "><p class="paragraph">Creates a new <a href="../../gropius.model.user/-i-m-s-user/index-">IMSUser</a> based on the provided <a href="create-i-m-s-user-">input</a> Does not check the authorization status This MUST NOT be exposed via the public API</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-688546239%2FFunctions%2F537371977" anchor-label="evaluatePermission" id="-688546239%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span>evaluate</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-688546239%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span class="token function">evaluatePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">Evaluates if the <a href="../../gropius.service.common/-node-service/evaluate-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/evaluate-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-462313879%2FFunctions%2F537371977" anchor-label="getUser" id="-462313879%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/get-user-"><span>get</span><wbr><span><span>User</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-462313879%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/get-user-"><span class="token function">getUser</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a></div><div class="brief "><p class="paragraph">Gets a <a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a> based on the userId from the <a href="../../gropius.service.common/-node-service/get-user-">authorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-2005883196%2FFunctions%2F537371977" anchor-label="updateIMSUser" id="-2005883196%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="update-i-m-s-user-"><span>update</span><wbr><span><span>IMSUser</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2005883196%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="update-i-m-s-user-"><span class="token function">updateIMSUser</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.user/-update-i-m-s-user-input/index-">UpdateIMSUserInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.user/-i-m-s-user/index-">IMSUser</a></div><div class="brief "><p class="paragraph">Updates a <a href="../../gropius.model.user/-i-m-s-user/index-">IMSUser</a> based on the provided <a href="update-i-m-s-user-">input</a> Does not check the authorization status This MUST NOT be exposed via the public API</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',r={},p="IMSUserService",c={unversionedId:"api/core/gropius.service.user/-i-m-s-user-service/index-",id:"api/core/gropius.service.user/-i-m-s-user-service/index-",title:"IMSUserService",description:"",source:"@site/docs/api/core/gropius.service.user/-i-m-s-user-service/index-.mdx",sourceDirName:"api/core/gropius.service.user/-i-m-s-user-service",slug:"/api/core/gropius.service.user/-i-m-s-user-service/index-",permalink:"/gropius-docs/api/core/gropius.service.user/-i-m-s-user-service/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"validateAvatar",permalink:"/gropius-docs/api/core/gropius.service.user/-gropius-user-service/validate-avatar-"},next:{title:"IMSUserService",permalink:"/gropius-docs/api/core/gropius.service.user/-i-m-s-user-service/-i-m-s-user-service-"}},l={},d=[],v={toc:d},u="wrapper";function m(a){let{components:s,...e}=a;return(0,i.kt)(u,(0,n.Z)({},v,e,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"imsuserservice"},"IMSUserService"),(0,i.kt)(t.Z,{dokkaHTML:o,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);