"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16820],{729860:(a,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=s(487462),i=(s(667294),s(603905)),e=s(689417);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">ValidationError</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span class="token keyword">val </span>instancePath<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter "><span class="token keyword">val </span>schemaPath<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div><p class="paragraph">Represents a single validation problem, typically returned from <code class="lang-kotlin">verify</code> in <code class="lang-kotlin">Validator</code>.</p><p class="paragraph">Note well that this class is not an <code class="lang-kotlin">Exception</code>. It is a plain old Java object.</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="1166176892%2FConstructors%2F537371977" anchor-label="ValidationError" id="1166176892%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-validation-error-"><span>Validation</span><wbr><span><span>Error</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1166176892%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">instancePath<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">schemaPath<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1957813746%2FProperties%2F537371977" anchor-label="instancePath" id="-1957813746%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="instance-path-"><span>instance</span><wbr><span><span>Path</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1957813746%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="instance-path-">instancePath</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">the path to the instance that failed validation</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1636265141%2FProperties%2F537371977" anchor-label="message" id="-1636265141%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="message-"><span><span>message</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1636265141%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="message-">message</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1838287682%2FProperties%2F537371977" anchor-label="schemaPath" id="1838287682%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="schema-path-"><span>schema</span><wbr><span><span>Path</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1838287682%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="schema-path-">schemaPath</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">the path to the schema that failed validation</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',l={},r="ValidationError",p={unversionedId:"api/core/gropius.util.schema/-validation-error/index-",id:"api/core/gropius.util.schema/-validation-error/index-",title:"ValidationError",description:"",source:"@site/docs/api/core/gropius.util.schema/-validation-error/index-.mdx",sourceDirName:"api/core/gropius.util.schema/-validation-error",slug:"/api/core/gropius.util.schema/-validation-error/index-",permalink:"/gropius-docs/api/core/gropius.util.schema/-validation-error/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"values",permalink:"/gropius-docs/api/core/gropius.util.schema/-type/values-"},next:{title:"ValidationError",permalink:"/gropius-docs/api/core/gropius.util.schema/-validation-error/-validation-error-"}},d={},c=[],v={toc:c},m="wrapper";function h(a){let{components:t,...s}=a;return(0,i.kt)(m,(0,n.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validationerror"},"ValidationError"),(0,i.kt)(e.Z,{dokkaHTML:o,mdxType:"DokkaComponent"}))}h.isMDXComponent=!0}}]);