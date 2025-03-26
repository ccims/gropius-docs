"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86013],{453544:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=s(487462),i=(s(667294),s(603905)),t=s(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-component-repository/index-">ComponentRepository</a><span class="token punctuation">, </span></span><span class="parameter ">templatedNodeService<span class="token operator">: </span><a href="../../gropius.service.template/-templated-node-service/index-">TemplatedNodeService</a><span class="token punctuation">, </span></span><span class="parameter ">componentTemplateRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-component-template-repository/index-">ComponentTemplateRepository</a><span class="token punctuation">, </span></span><span class="parameter ">componentPermissionService<span class="token operator">: </span><a href="../../gropius.service.user.permission/-component-permission-service/index-">ComponentPermissionService</a><span class="token punctuation">, </span></span><span class="parameter ">interfaceSpecificationService<span class="token operator">: </span><a href="../-interface-specification-service/index-">InterfaceSpecificationService</a><span class="token punctuation">, </span></span><span class="parameter ">componentVersionService<span class="token operator">: </span><a href="../-component-version-service/index-">ComponentVersionService</a><span class="token punctuation">, </span></span><span class="parameter ">intraComponentDependencySpecificationTypeRepository<span class="token operator">: </span><a href="../../gropius.repository.template/-intra-component-dependency-specification-type-repository/index-">IntraComponentDependencySpecificationTypeRepository</a></span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the associated repository used for CRUD functionality</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>templated</span><wbr><span>Node</span><wbr><span><span>Service</span></span></u></div></span></div><div><div class="title"><p class="paragraph">service used to update templatedFields</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>component</span><wbr><span>Template</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to get <a href="../../gropius.model.template/-component-template/index-">ComponentTemplate</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>component</span><wbr><span>Permission</span><wbr><span><span>Service</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to create the initial permission for a created <a href="../../gropius.model.architecture/-component/index-">Component</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>interface</span><wbr><span>Specification</span><wbr><span><span>Service</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to create <a href="../../gropius.model.architecture/-interface-specification/index-">InterfaceSpecification</a>s</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>component</span><wbr><span>Version</span><wbr><span><span>Service</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to create <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a>s</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>intra</span><wbr><span>Component</span><wbr><span>Dependency</span><wbr><span>Specification</span><wbr><span>Type</span><wbr><span><span>Repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to get <a href="../../gropius.model.template/-intra-component-dependency-specification-type/index-">IntraComponentDependencySpecificationType</a>s</p></div></div></div></div></div></div></div>\n',p={},o="ComponentService",c={unversionedId:"api/core/gropius.service.architecture/-component-service/-component-service-",id:"api/core/gropius.service.architecture/-component-service/-component-service-",title:"ComponentService",description:"",source:"@site/docs/api/core/gropius.service.architecture/-component-service/-component-service-.mdx",sourceDirName:"api/core/gropius.service.architecture/-component-service",slug:"/api/core/gropius.service.architecture/-component-service/-component-service-",permalink:"/gropius-docs/api/core/gropius.service.architecture/-component-service/-component-service-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ComponentService",permalink:"/gropius-docs/api/core/gropius.service.architecture/-component-service/index-"},next:{title:"bulkCreateComponent",permalink:"/gropius-docs/api/core/gropius.service.architecture/-component-service/bulk-create-component-"}},l={},d=[],v={toc:d},m="wrapper";function u(e){let{components:a,...s}=e;return(0,i.kt)(m,(0,n.Z)({},v,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"componentservice"},"ComponentService"),(0,i.kt)(t.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}u.isMDXComponent=!0}}]);