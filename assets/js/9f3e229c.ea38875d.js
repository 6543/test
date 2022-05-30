"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9098],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5868:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var i=t(3117),a=t(102),l=(t(7294),t(3905)),o=["components"],r={},p="Multi pipelines",s={unversionedId:"usage/multi-pipeline",id:"usage/multi-pipeline",title:"Multi pipelines",description:"This Feature is only available for GitHub, Gitea & GitLab repositories. Follow this issue to support further development.",source:"@site/docs/20-usage/25-multi-pipeline.md",sourceDirName:"20-usage",slug:"/usage/multi-pipeline",permalink:"/docs/usage/multi-pipeline",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/25-multi-pipeline.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipeline syntax",permalink:"/docs/usage/pipeline-syntax"},next:{title:"Matrix pipelines",permalink:"/docs/usage/matrix-pipelines"}},d={},u=[{value:"Rational",id:"rational",level:2},{value:"Example multi-pipeline definition",id:"example-multi-pipeline-definition",level:2},{value:"Status lines",id:"status-lines",level:2},{value:"Flow control",id:"flow-control",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"multi-pipelines"},"Multi pipelines"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This Feature is only available for GitHub, Gitea & GitLab repositories. Follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/woodpecker-ci/woodpecker/issues/131"},"this")," issue to support further development."))),(0,l.kt)("p",null,"By default, Woodpecker looks for the pipeline definition in ",(0,l.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," in the project root."),(0,l.kt)("p",null,"The Multi-Pipeline feature allows the pipeline to be split into several files and placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},".woodpecker/")," folder. Only ",(0,l.kt)("inlineCode",{parentName:"p"},".yml")," files will be used and files in any subfolders like ",(0,l.kt)("inlineCode",{parentName:"p"},".woodpecker/sub-folder/test.yml")," will be ignored. You can set some custom path like ",(0,l.kt)("inlineCode",{parentName:"p"},".my-ci/pipelines/")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},".woodpecker/")," in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/project-settings"},"project settings"),"."),(0,l.kt)("h2",{id:"rational"},"Rational"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"faster lint/test feedback, the pipeline doesn't have to run fully to have a lint status pushed to the remote"),(0,l.kt)("li",{parentName:"ul"},"better organization of the pipeline along various concerns: testing, linting, feature apps"),(0,l.kt)("li",{parentName:"ul"},"utilizing more agents to speed up build")),(0,l.kt)("h2",{id:"example-multi-pipeline-definition"},"Example multi-pipeline definition"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Please note that files are only shared between steps of the same pipeline (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/pipeline-syntax#file-changes-are-incremental"},"File changes are incremental"),"). That means you cannot access artifacts e.g. from the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," pipeline below in the ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," pipeline.\nIf you still need to pass artifacts between the pipelines you need use storage ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/plugins/plugins"},"plugins")," (e.g. one which stores files in an Amazon S3 bucket)."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},".woodpecker/\n\u251c\u2500\u2500 .build.yml\n\u251c\u2500\u2500 .deploy.yml\n\u251c\u2500\u2500 .lint.yml\n\u2514\u2500\u2500 .test.yml\n")),(0,l.kt)("p",null,".woodpecker/.build.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  build:\n    image: debian:stable-slim\n    commands:\n      - echo building\n      - sleep 5\n")),(0,l.kt)("p",null,".woodpecker/.deploy.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  deploy:\n    image: debian:stable-slim\n    commands:\n      - echo deploying\n\ndepends_on:\n  - lint\n  - build\n  - test\n")),(0,l.kt)("p",null,".woodpecker/.test.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  test:\n    image: debian:stable-slim\n    commands:\n      - echo testing\n      - sleep 5\n\ndepends_on:\n  - build\n")),(0,l.kt)("p",null,".woodpecker/.lint.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  lint:\n    image: debian:stable-slim\n    commands:\n      - echo linting\n      - sleep 5\n")),(0,l.kt)("h2",{id:"status-lines"},"Status lines"),(0,l.kt)("p",null,"Each pipeline will report its own status back to your forge."),(0,l.kt)("h2",{id:"flow-control"},"Flow control"),(0,l.kt)("p",null,"The pipelines run in parallel on separate agents and share nothing."),(0,l.kt)("p",null,"Dependencies between pipelines can be set with the ",(0,l.kt)("inlineCode",{parentName:"p"},"depends_on")," element. A pipeline doesn't execute until all of its dependencies finished successfully."),(0,l.kt)("p",null,"The name for a ",(0,l.kt)("inlineCode",{parentName:"p"},"depends_on")," entry is the filename without the path, leading dots and without the file extension ",(0,l.kt)("inlineCode",{parentName:"p"},".yml"),". If the project config for example uses ",(0,l.kt)("inlineCode",{parentName:"p"},".woodpecker/")," as path for ci files with a file named ",(0,l.kt)("inlineCode",{parentName:"p"},".woodpecker/.lint.yml")," the corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"depends_on")," entry would be ",(0,l.kt)("inlineCode",{parentName:"p"},"lint"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  deploy:\n    image: debian:stable-slim\n    commands:\n      - echo deploying\n\n+depends_on:\n+  - lint\n+  - build\n+  - test\n")),(0,l.kt)("p",null,"Pipelines that need to run even on failures should set the ",(0,l.kt)("inlineCode",{parentName:"p"},"run_on")," tag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  notify:\n    image: debian:stable-slim\n    commands:\n      - echo notifying\n\ndepends_on:\n  - deploy\n\n+run_on: [ success, failure ]\n")),(0,l.kt)("p",null,"Some pipelines don't need the source code, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"skip_clone")," tag to skip cloning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"\npipeline:\n  notify:\n    image: debian:stable-slim\n    commands:\n      - echo notifying\n\ndepends_on:\n  - deploy\n\nrun_on: [ success, failure ]\n+skip_clone: true\n")))}m.isMDXComponent=!0}}]);