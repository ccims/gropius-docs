"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31102],{555749:(a,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>r,toc:()=>c});var i=n(487462),t=(n(667294),n(603905)),e=n(689417);const l='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="kotlinx.serialization/Serializable///PointingToDeclaration/"><span class="token annotation builtin">Serializable</span></span></div></div><span class="token keyword">data </span><span class="token keyword">class </span><a href="index-">IssueQuery</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>expand<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>id<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>self<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>key<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>editmeta<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>changelog<span class="token operator">: </span><a href="../-change-log-container/index-">ChangeLogContainer</a><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>fields<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span data-unresolved-link="kotlinx.serialization.json/JsonElement///PointingToDeclaration/">JsonElement</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>names<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>schema<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Kotlin representation of the Issue JSON</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>expand</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The expand string</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>id</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The id of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>self</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The self link of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>key</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The key of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>editmeta</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The edit meta data of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>changelog</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The changelog of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>fields</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The fields of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>names</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The names of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>schema</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The schema of the issue</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="1366445835%2FConstructors%2F1544178874" anchor-label="IssueQuery" id="1366445835%2FConstructors%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-issue-query-"><span>Issue</span><wbr><span><span>Query</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1366445835%2FConstructors%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">expand<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">id<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">self<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">key<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">editmeta<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span><span class="token punctuation">, </span></span><span class="parameter ">changelog<span class="token operator">: </span><a href="../-change-log-container/index-">ChangeLogContainer</a><span class="token punctuation">, </span></span><span class="parameter ">fields<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span data-unresolved-link="kotlinx.serialization.json/JsonElement///PointingToDeclaration/">JsonElement</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">names<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span><span class="token punctuation">, </span></span><span class="parameter ">schema<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="992807683%2FProperties%2F1544178874" anchor-label="changelog" id="992807683%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="changelog-"><span><span>changelog</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="992807683%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="changelog-">changelog</a><span class="token operator">: </span><a href="../-change-log-container/index-">ChangeLogContainer</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-745777676%2FProperties%2F1544178874" anchor-label="editmeta" id="-745777676%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="editmeta-"><span><span>editmeta</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-745777676%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="editmeta-">editmeta</a><span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-958903735%2FProperties%2F1544178874" anchor-label="expand" id="-958903735%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="expand-"><span><span>expand</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-958903735%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="expand-">expand</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1119927050%2FProperties%2F1544178874" anchor-label="fields" id="1119927050%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="fields-"><span><span>fields</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1119927050%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="fields-">fields</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span data-unresolved-link="kotlinx.serialization.json/JsonElement///PointingToDeclaration/">JsonElement</span><span class="token operator">&gt;</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1978507752%2FProperties%2F1544178874" anchor-label="id" id="1978507752%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="id-"><span><span>id</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1978507752%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="id-">id</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-886254568%2FProperties%2F1544178874" anchor-label="key" id="-886254568%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="key-"><span><span>key</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-886254568%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="key-">key</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1329083599%2FProperties%2F1544178874" anchor-label="names" id="1329083599%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="names-"><span><span>names</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1329083599%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="names-">names</a><span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="391190818%2FProperties%2F1544178874" anchor-label="schema" id="391190818%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="schema-"><span><span>schema</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="391190818%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="schema-">schema</a><span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1092675415%2FProperties%2F1544178874" anchor-label="self" id="1092675415%2FProperties%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="self-"><span><span>self</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1092675415%2FProperties%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="self-">self</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="874723100%2FFunctions%2F1544178874" anchor-label="data" id="874723100%2FFunctions%2F1544178874" data-filterable-set=":sync-jira:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync-jira:dokkaHtmlPartial/main" data-filterable-set=":sync-jira:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="data-"><span><span>data</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="874723100%2FFunctions%2F1544178874"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync-jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="data-"><span class="token function">data</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">imsProject<span class="token operator">: </span><a href="../../../core/gropius.model.architecture/-i-m-s-project/index-">IMSProject</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../-issue-data/index-">IssueData</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',p={},o="IssueQuery",r={unversionedId:"api/sync-jira/gropius.sync.jira.model/-issue-query/index-",id:"api/sync-jira/gropius.sync.jira.model/-issue-query/index-",title:"IssueQuery",description:"",source:"@site/docs/api/sync-jira/gropius.sync.jira.model/-issue-query/index-.mdx",sourceDirName:"api/sync-jira/gropius.sync.jira.model/-issue-query",slug:"/api/sync-jira/gropius.sync.jira.model/-issue-query/index-",permalink:"/gropius-docs/api/sync-jira/gropius.sync.jira.model/-issue-query/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"issuePileRepository",permalink:"/gropius-docs/api/sync-jira/gropius.sync.jira.model/-issue-data-service/issue-pile-repository-"},next:{title:"IssueQuery",permalink:"/gropius-docs/api/sync-jira/gropius.sync.jira.model/-issue-query/-issue-query-"}},d={},c=[],v={toc:c},k="wrapper";function m(a){let{components:s,...n}=a;return(0,t.kt)(k,(0,i.Z)({},v,n,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"issuequery"},"IssueQuery"),(0,t.kt)(e.Z,{dokkaHTML:l,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);