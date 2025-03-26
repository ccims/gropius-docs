"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66958],{219551:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>v,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=e(487462),n=(e(667294),e(603905)),o=e(689417);const t='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="update-permissions-of-node-"><span class="token function">updatePermissionsOfNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">V</a><span class="token punctuation">, </span></span><span class="parameter ">addedPermissions<span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/OptionalInput///PointingToDeclaration/">OptionalInput</span><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">removedPermissions<span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/OptionalInput///PointingToDeclaration/">OptionalInput</span><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span><span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span></div><p class="paragraph">Adds/Removes permissions to/from a <a href="../../gropius.model.user.permission/-node-with-permissions/index-">NodeWithPermissions</a> Checks permissions on <a href="update-permissions-of-node-">addedPermissions</a>, but not on <a href="update-permissions-of-node-">node</a> Checks that at least one user has still <a href="../../gropius.model.user.permission/-node-permission/-companion/-a-d-m-i-n-">NodePermission.ADMIN</a> on <a href="update-permissions-of-node-">node</a></p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>node</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the node of which to update the permissions</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>added</span><wbr><span><span>Permissions</span></span></u></div></span></div><div><div class="title"><p class="paragraph">ids of permissions to add</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>removed</span><wbr><span><span>Permissions</span></span></u></div></span></div><div><div class="title"><p class="paragraph">ids of permissions to remove</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for permissions</p></div></div></div></div></div><h4 class="">Throws</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html"><span>Illegal</span><wbr><span>State</span><wbr><span><span>Exception</span></span></a></div></span></div><div><div class="title"><p class="paragraph">if the <a href="update-permissions-of-node-">node</a> has no valid <a href="../../gropius.model.user.permission/-node-permission/-companion/-a-d-m-i-n-">NodePermission.ADMIN</a> permission left</p></div></div></div></div></div></div></div>\n',r={},p="updatePermissionsOfNode",d={unversionedId:"api/core/gropius.service.user.permission/-node-permission-service/update-permissions-of-node-",id:"api/core/gropius.service.user.permission/-node-permission-service/update-permissions-of-node-",title:"updatePermissionsOfNode",description:"",source:"@site/docs/api/core/gropius.service.user.permission/-node-permission-service/update-permissions-of-node-.mdx",sourceDirName:"api/core/gropius.service.user.permission/-node-permission-service",slug:"/api/core/gropius.service.user.permission/-node-permission-service/update-permissions-of-node-",permalink:"/gropius-docs/api/core/gropius.service.user.permission/-node-permission-service/update-permissions-of-node-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"updateNodePermission",permalink:"/gropius-docs/api/core/gropius.service.user.permission/-node-permission-service/update-node-permission-"},next:{title:"ProjectPermissionService",permalink:"/gropius-docs/api/core/gropius.service.user.permission/-project-permission-service/index-"}},l={},c=[],m={toc:c},u="wrapper";function v(s){let{components:a,...e}=s;return(0,n.kt)(u,(0,i.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"updatepermissionsofnode"},"updatePermissionsOfNode"),(0,n.kt)(o.Z,{dokkaHTML:t,mdxType:"DokkaComponent"}))}v.isMDXComponent=!0}}]);