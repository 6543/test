"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5538],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var a=n(9613),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={},m="Conditional Step Execution",f={unversionedId:"usage/conditional-execution",id:"version-0.15/usage/conditional-execution",title:"Conditional Step Execution",description:"Woodpecker supports defining conditions for pipeline step by a when block. If all conditions in the when block evaluate to true the step is executed, otherwise it is skipped.",source:"@site/versioned_docs/version-0.15/20-usage/22-conditional-execution.md",sourceDirName:"20-usage",slug:"/usage/conditional-execution",permalink:"/docs/usage/conditional-execution",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/22-conditional-execution.md",tags:[],version:"0.15",sidebarPosition:22,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipeline syntax",permalink:"/docs/usage/pipeline-syntax"},next:{title:"Multi pipelines",permalink:"/docs/usage/multi-pipeline"}},h={},k=[{value:"<code>repo</code>",id:"repo",level:2},{value:"<code>branch</code>",id:"branch",level:2},{value:"<code>event</code>",id:"event",level:2},{value:"<code>tag</code>",id:"tag",level:2},{value:"<code>status</code>",id:"status",level:2},{value:"<code>platform</code>",id:"platform",level:2},{value:"<code>environment</code>",id:"environment",level:2},{value:"<code>matrix</code>",id:"matrix",level:2},{value:"<code>instance</code>",id:"instance",level:2},{value:"<code>path</code>",id:"path",level:2}],g={toc:k};function v(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),c),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"conditional-step-execution"}),"Conditional Step Execution"),(0,a.kt)("p",null,"Woodpecker supports defining conditions for pipeline step by a ",(0,a.kt)("inlineCode",{parentName:"p"},"when")," block. If all conditions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"when")," block evaluate to true the step is executed, otherwise it is skipped."),(0,a.kt)("h2",u({},{id:"repo"}),(0,a.kt)("inlineCode",{parentName:"h2"},"repo")),(0,a.kt)("p",null,"Example conditional execution by repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"})," pipeline:\n   slack:\n     image: plugins/slack\n     settings:\n       channel: dev\n+    when:\n+      repo: test/test\n")),(0,a.kt)("h2",u({},{id:"branch"}),(0,a.kt)("inlineCode",{parentName:"h2"},"branch")),(0,a.kt)("p",null,"Example conditional execution by branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  slack:\n    image: plugins/slack\n    settings:\n      channel: dev\n+   when:\n+     branch: master\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The step now triggers on master, but also if the target branch of a pull request is ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". Add an event condition to limit it further to pushes on master only.")),(0,a.kt)("p",null,"Execute a step if the branch is ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"develop"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  branch: [master, develop]\n")),(0,a.kt)("p",null,"Execute a step if the branch starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"prefix/*"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  branch: prefix/*\n")),(0,a.kt)("p",null,"Execute a step using custom include and exclude logic:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  branch:\n    include: [ master, release/* ]\n    exclude: [ release/1.0.0, release/1.1.* ]\n")),(0,a.kt)("h2",u({},{id:"event"}),(0,a.kt)("inlineCode",{parentName:"h2"},"event")),(0,a.kt)("p",null,"Execute a step if the build event is a ",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  event: tag\n")),(0,a.kt)("p",null,"Execute a step if the build event is a ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," created from the specified branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  event: tag\n+ branch: master\n")),(0,a.kt)("p",null,"Execute a step for all non-pull request events:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  event: [push, tag, deployment]\n")),(0,a.kt)("p",null,"Execute a step for all build events:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  event: [push, pull_request, tag, deployment]\n")),(0,a.kt)("h2",u({},{id:"tag"}),(0,a.kt)("inlineCode",{parentName:"h2"},"tag")),(0,a.kt)("p",null,"Execute a step if the tag name starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  tag: release*\n")),(0,a.kt)("h2",u({},{id:"status"}),(0,a.kt)("inlineCode",{parentName:"h2"},"status")),(0,a.kt)("p",null,"There are use cases for executing pipeline steps on failure, such as sending notifications for failed pipelines. Use the status constraint to execute steps even when the pipeline fails:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  slack:\n    image: plugins/slack\n    settings:\n      channel: dev\n+   when:\n+     status: [ success, failure ]\n")),(0,a.kt)("h2",u({},{id:"platform"}),(0,a.kt)("inlineCode",{parentName:"h2"},"platform")),(0,a.kt)("p",null,"Execute a step for a specific platform:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  platform: linux/amd64\n")),(0,a.kt)("p",null,"Execute a step for a specific platform using wildcards:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  platform:  [ linux/*, windows/amd64 ]\n")),(0,a.kt)("h2",u({},{id:"environment"}),(0,a.kt)("inlineCode",{parentName:"h2"},"environment")),(0,a.kt)("p",null,"Execute a step for deployment events matching the target deployment environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  environment: production\n  event: deployment\n")),(0,a.kt)("h2",u({},{id:"matrix"}),(0,a.kt)("inlineCode",{parentName:"h2"},"matrix")),(0,a.kt)("p",null,"Execute a step for a single matrix permutation:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  matrix:\n    GO_VERSION: 1.5\n    REDIS_VERSION: 2.8\n")),(0,a.kt)("h2",u({},{id:"instance"}),(0,a.kt)("inlineCode",{parentName:"h2"},"instance")),(0,a.kt)("p",null,"Execute a step only on a certain Woodpecker instance matching the specified hostname:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  instance: stage.woodpecker.company.com\n")),(0,a.kt)("h2",u({},{id:"path"}),(0,a.kt)("inlineCode",{parentName:"h2"},"path")),(0,a.kt)("admonition",u({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"This feature is currently only available for GitHub, GitLab and Gitea.\nPull requests aren't supported by gitea at the moment (",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/go-gitea/gitea/pull/18228"}),"go-gitea/gitea#18228"),").",(0,a.kt)("br",{parentName:"p"}),"\n","Path conditions are ignored for tag events.")),(0,a.kt)("p",null,"Execute a step only on a pipeline with certain files being changed:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'when:\n  path: "src/*"\n')),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/bmatcuk/doublestar#patterns"}),"glob patterns")," to match the changed files and specify if the step should run if a file matching that pattern has been changed ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," or if some files have ",(0,a.kt)("strong",{parentName:"p"},"not")," been changed ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"when:\n  path:\n    include: [ '.woodpecker/*.yml', '*.ini' ]\n    exclude: [ '*.md', 'docs/**' ]\n    ignore_message: \"[ALL]\"\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Hint: ")," Passing a defined ignore-message like ",(0,a.kt)("inlineCode",{parentName:"p"},"[ALL]")," inside the commit message will ignore all path conditions."))}v.isMDXComponent=!0}}]);