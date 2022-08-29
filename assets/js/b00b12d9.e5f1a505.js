"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6130],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=u;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3967:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=t(3117),i=t(102),l=(t(7294),t(3905)),o=["components"],r={},p="Pipeline syntax",s={unversionedId:"usage/pipeline-syntax",id:"usage/pipeline-syntax",title:"Pipeline syntax",description:"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status.",source:"@site/docs/20-usage/20-pipeline-syntax.md",sourceDirName:"20-usage",slug:"/usage/pipeline-syntax",permalink:"/docs/usage/pipeline-syntax",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/20-pipeline-syntax.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/usage/intro"},next:{title:"Multi pipelines",permalink:"/docs/usage/multi-pipeline"}},d={},c=[{value:"Global Pipeline Conditionals",id:"global-pipeline-conditionals",level:2},{value:"<code>branches</code>",id:"branches",level:3},{value:"Skip Commits",id:"skip-commits",level:3},{value:"Steps",id:"steps",level:2},{value:"File changes are incremental",id:"file-changes-are-incremental",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"Images from private registries",id:"images-from-private-registries",level:5},{value:"Global registry support",id:"global-registry-support",level:5},{value:"GCR registry support",id:"gcr-registry-support",level:5},{value:"<code>commands</code>",id:"commands",level:3},{value:"<code>environment</code>",id:"environment",level:3},{value:"<code>secrets</code>",id:"secrets",level:3},{value:"<code>when</code> - Conditional Execution",id:"when---conditional-execution",level:3},{value:"<code>repo</code>",id:"repo",level:4},{value:"<code>branch</code>",id:"branch",level:4},{value:"<code>event</code>",id:"event",level:4},{value:"<code>tag</code>",id:"tag",level:4},{value:"<code>status</code>",id:"status",level:4},{value:"<code>platform</code>",id:"platform",level:4},{value:"<code>environment</code>",id:"environment-1",level:4},{value:"<code>matrix</code>",id:"matrix",level:4},{value:"<code>instance</code>",id:"instance",level:4},{value:"<code>path</code>",id:"path",level:4},{value:"<code>group</code> - Parallel execution",id:"group---parallel-execution",level:3},{value:"<code>volumes</code>",id:"volumes",level:3},{value:"<code>detach</code>",id:"detach",level:3},{value:"<code>services</code>",id:"services",level:2},{value:"<code>workspace</code>",id:"workspace",level:2},{value:"<code>matrix</code>",id:"matrix-1",level:2},{value:"<code>platform</code>",id:"platform-1",level:2},{value:"<code>labels</code>",id:"labels",level:2},{value:"<code>variables</code>",id:"variables",level:2},{value:"<code>clone</code>",id:"clone",level:2},{value:"Git Submodules",id:"git-submodules",level:3},{value:"<code>depends_on</code>",id:"depends_on",level:2},{value:"Privileged mode",id:"privileged-mode",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pipeline-syntax"},"Pipeline syntax"),(0,l.kt)("p",null,"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status."),(0,l.kt)("p",null,"Example pipeline:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  backend:\n    image: golang\n    commands:\n      - go build\n      - go test\n  frontend:\n    image: node\n    commands:\n      - npm install\n      - npm run test\n      - npm run build\n")),(0,l.kt)("p",null,"In the above example we define two pipeline steps, ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"backend"),". The names of these steps are completely arbitrary."),(0,l.kt)("h2",{id:"global-pipeline-conditionals"},"Global Pipeline Conditionals"),(0,l.kt)("p",null,"Woodpecker gives the ability to skip whole pipelines (not just steps) based on certain conditions."),(0,l.kt)("h3",{id:"branches"},(0,l.kt)("inlineCode",{parentName:"h3"},"branches")),(0,l.kt)("p",null,"Woodpecker can skip commits based on the target branch. If the branch matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"branches:")," block the pipeline is executed, otherwise it is skipped."),(0,l.kt)("p",null,"Example skipping a commit when the target branch is not master:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: master\n")),(0,l.kt)("p",null,"Example matching multiple target branches:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: [ master, develop ]\n")),(0,l.kt)("p",null,"Example uses glob matching:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: [ master, feature/* ]\n")),(0,l.kt)("p",null,"Example includes branches:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches:\n+  include: [ master, feature/* ]\n")),(0,l.kt)("p",null,"Example excludes branches:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches:\n+  exclude: [ develop, feature/* ]\n")),(0,l.kt)("h3",{id:"skip-commits"},"Skip Commits"),(0,l.kt)("p",null,"Woodpecker gives the ability to skip individual commits by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"[CI SKIP]")," to the commit message. Note this is case-insensitive."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "updated README [CI SKIP]"\n')),(0,l.kt)("h2",{id:"steps"},"Steps"),(0,l.kt)("p",null,"Every step of your pipeline executes arbitrary commands inside a specified container. The defined commands are executed serially.\nThe associated commit of a current pipeline run is checked out with git to a workspace which is mounted to every step of the pipeline as the working directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   backend:\n     image: golang\n     commands:\n+      - go build\n+      - go test\n")),(0,l.kt)("h3",{id:"file-changes-are-incremental"},"File changes are incremental"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Woodpecker clones the source code in the beginning pipeline"),(0,l.kt)("li",{parentName:"ul"},"Changes to files are persisted through steps as the same volume is mounted to all steps")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# .woodpecker.yml\npipeline:\n  build:\n    image: debian\n    commands:\n      - echo "test content" > myfile\n  a-test-step:\n    image: debian\n    commands:\n      - cat myfile\n')),(0,l.kt)("h3",{id:"image"},(0,l.kt)("inlineCode",{parentName:"h3"},"image")),(0,l.kt)("p",null,"Woodpecker pulls the defined image and uses it as environment to execute the pipeline step commands, for plugins and for service containers."),(0,l.kt)("p",null,"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," backend, the ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," entry is used to specify the shell, such as Bash or Fish, that is used to run the commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   build:\n+    image: golang:1.6\n     commands:\n       - go build\n       - go test\n\n   publish:\n+    image: plugins/docker\n     repo: foo/bar\n\n services:\n   database:\n+    image: mysql\n")),(0,l.kt)("p",null,"Woodpecker supports any valid Docker image from any Docker registry:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"image: golang\nimage: golang:1.7\nimage: library/golang:1.7\nimage: index.docker.io/library/golang\nimage: index.docker.io/library/golang:1.7\n")),(0,l.kt)("p",null,"Woodpecker does not automatically upgrade container images. Example configuration to always pull the latest image when updates are available:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   build:\n     image: golang:latest\n+    pull: true\n")),(0,l.kt)("h5",{id:"images-from-private-registries"},"Images from private registries"),(0,l.kt)("p",null,"You must provide registry credentials on the UI in order to pull private pipeline images defined in your YAML configuration file."),(0,l.kt)("p",null,"These credentials are never exposed to your pipeline, which means they cannot be used to push, and are safe to use with pull requests, for example. Pushing to a registry still require setting credentials for the appropriate plugin."),(0,l.kt)("p",null,"Example configuration using a private image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   build:\n+    image: gcr.io/custom/golang\n     commands:\n       - go build\n       - go test\n")),(0,l.kt)("p",null,"Woodpecker matches the registry hostname to each image in your yaml. If the hostnames match, the registry credentials are used to authenticate to your registry and pull the image. Note that registry credentials are used by the Woodpecker agent and are never exposed to your build containers."),(0,l.kt)("p",null,"Example registry hostnames:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Image ",(0,l.kt)("inlineCode",{parentName:"li"},"gcr.io/foo/bar")," has hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"gcr.io")),(0,l.kt)("li",{parentName:"ul"},"Image ",(0,l.kt)("inlineCode",{parentName:"li"},"foo/bar")," has hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"docker.io")),(0,l.kt)("li",{parentName:"ul"},"Image ",(0,l.kt)("inlineCode",{parentName:"li"},"qux.com:8000/foo/bar")," has hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"qux.com:8000"))),(0,l.kt)("p",null,"Example registry hostname matching logic:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"gcr.io")," matches image ",(0,l.kt)("inlineCode",{parentName:"li"},"gcr.io/foo/bar")),(0,l.kt)("li",{parentName:"ul"},"Hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,l.kt)("inlineCode",{parentName:"li"},"golang")),(0,l.kt)("li",{parentName:"ul"},"Hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,l.kt)("inlineCode",{parentName:"li"},"library/golang")),(0,l.kt)("li",{parentName:"ul"},"Hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,l.kt)("inlineCode",{parentName:"li"},"bradyrydzewski/golang")),(0,l.kt)("li",{parentName:"ul"},"Hostname ",(0,l.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,l.kt)("inlineCode",{parentName:"li"},"bradyrydzewski/golang:latest"))),(0,l.kt)("h5",{id:"global-registry-support"},"Global registry support"),(0,l.kt)("p",null,"To make a private registry globally available check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/administration/server-config#global-registry-setting"},"server configuration docs"),"."),(0,l.kt)("h5",{id:"gcr-registry-support"},"GCR registry support"),(0,l.kt)("p",null,"For specific details on configuring access to Google Container Registry, please view the docs ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/container-registry/docs/advanced-authentication#using_a_json_key_file"},"here"),"."),(0,l.kt)("h3",{id:"commands"},(0,l.kt)("inlineCode",{parentName:"h3"},"commands")),(0,l.kt)("p",null,"Commands of every pipeline step are executed serially as if you would enter them into your local shell."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   backend:\n     image: golang\n     commands:\n+      - go build\n+      - go test\n")),(0,l.kt)("p",null,"There is no magic here. The above commands are converted to a simple shell script. The commands in the above example are roughly converted to the below script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/sh\nset -e\n\ngo build\ngo test\n")),(0,l.kt)("p",null,"The above shell script is then executed as the container entrypoint. The below docker command is an (incomplete) example of how the script is executed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --entrypoint=build.sh golang\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please note that only build steps can define commands. You cannot use commands with plugins or services.")),(0,l.kt)("h3",{id:"environment"},(0,l.kt)("inlineCode",{parentName:"h3"},"environment")),(0,l.kt)("p",null,"Woodpecker provides the ability to pass environment variables to individual pipeline steps."),(0,l.kt)("p",null,"For more details check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/environment/"},"environment docs"),"."),(0,l.kt)("h3",{id:"secrets"},(0,l.kt)("inlineCode",{parentName:"h3"},"secrets")),(0,l.kt)("p",null,"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."),(0,l.kt)("p",null,"For more details check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/secrets/"},"secrets docs"),"."),(0,l.kt)("h3",{id:"when---conditional-execution"},(0,l.kt)("inlineCode",{parentName:"h3"},"when")," - Conditional Execution"),(0,l.kt)("p",null,"Woodpecker supports defining a list of conditions for a pipeline step by using a ",(0,l.kt)("inlineCode",{parentName:"p"},"when")," block. If at least one of the conditions in the ",(0,l.kt)("inlineCode",{parentName:"p"},"when")," block evaluate to true the step is executed, otherwise it is skipped. A condition can be a check like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   slack:\n     image: plugins/slack\n     settings:\n       channel: dev\n+    when:\n+      - event: pull_request\n+        repo: test/test\n+      - event: push\n+        branch: main\n")),(0,l.kt)("h4",{id:"repo"},(0,l.kt)("inlineCode",{parentName:"h4"},"repo")),(0,l.kt)("p",null,"Example conditional execution by repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   slack:\n     image: plugins/slack\n     settings:\n       channel: dev\n+    when:\n+      - repo: test/test\n")),(0,l.kt)("h4",{id:"branch"},(0,l.kt)("inlineCode",{parentName:"h4"},"branch")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Branch conditions are not applied to tags.")),(0,l.kt)("p",null,"Example conditional execution by branch:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  slack:\n    image: plugins/slack\n    settings:\n      channel: dev\n+   when:\n+     - branch: master\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The step now triggers on master, but also if the target branch of a pull request is ",(0,l.kt)("inlineCode",{parentName:"p"},"master"),". Add an event condition to limit it further to pushes on master only.")),(0,l.kt)("p",null,"Execute a step if the branch is ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"develop"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - branch: [master, develop]\n")),(0,l.kt)("p",null,"Execute a step if the branch starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"prefix/*"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - branch: prefix/*\n")),(0,l.kt)("p",null,"Execute a step using custom include and exclude logic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - branch:\n      include: [ master, release/* ]\n      exclude: [ release/1.0.0, release/1.1.* ]\n")),(0,l.kt)("h4",{id:"event"},(0,l.kt)("inlineCode",{parentName:"h4"},"event")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"By default steps are filtered by following event types:")),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pull_request, "),"tag",(0,l.kt)("inlineCode",{parentName:"p"},", "),"deployment`.")),(0,l.kt)("p",null,"Available events: ",(0,l.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pull_request"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tag"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment")),(0,l.kt)("p",null,"Execute a step if the build event is a ",(0,l.kt)("inlineCode",{parentName:"p"},"tag"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - event: tag\n")),(0,l.kt)("p",null,"Execute a step if the pipeline event is a ",(0,l.kt)("inlineCode",{parentName:"p"},"push")," to a specified branch:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"when:\n  - event: push\n+   branch: main\n")),(0,l.kt)("p",null,"Execute a step for multiple events:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - event: [push, tag, deployment]\n")),(0,l.kt)("h4",{id:"tag"},(0,l.kt)("inlineCode",{parentName:"h4"},"tag")),(0,l.kt)("p",null,"This filter only applies to tag events.\nUse glob expression to execute a step if the tag name starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"v"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - event: tag\n    tag: v*\n")),(0,l.kt)("h4",{id:"status"},(0,l.kt)("inlineCode",{parentName:"h4"},"status")),(0,l.kt)("p",null,"There are use cases for executing pipeline steps on failure, such as sending notifications for failed pipelines. Use the status constraint to execute steps even when the pipeline fails:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  slack:\n    image: plugins/slack\n    settings:\n      channel: dev\n+   when:\n+     - status: [ success, failure ]\n")),(0,l.kt)("h4",{id:"platform"},(0,l.kt)("inlineCode",{parentName:"h4"},"platform")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This condition should be used in conjunction with a ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/matrix-pipelines#example-matrix-pipeline-using-multiple-platforms"},"matrix")," pipeline as a regular pipeline will only executed by a single agent which only has one arch.")),(0,l.kt)("p",null,"Execute a step for a specific platform:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - platform: linux/amd64\n")),(0,l.kt)("p",null,"Execute a step for a specific platform using wildcards:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - platform:  [ linux/*, windows/amd64 ]\n")),(0,l.kt)("h4",{id:"environment-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"environment")),(0,l.kt)("p",null,"Execute a step for deployment events matching the target deployment environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - environment: production\n  - event: deployment\n")),(0,l.kt)("h4",{id:"matrix"},(0,l.kt)("inlineCode",{parentName:"h4"},"matrix")),(0,l.kt)("p",null,"Execute a step for a single matrix permutation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - matrix:\n      GO_VERSION: 1.5\n      REDIS_VERSION: 2.8\n")),(0,l.kt)("h4",{id:"instance"},(0,l.kt)("inlineCode",{parentName:"h4"},"instance")),(0,l.kt)("p",null,"Execute a step only on a certain Woodpecker instance matching the specified hostname:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - instance: stage.woodpecker.company.com\n")),(0,l.kt)("h4",{id:"path"},(0,l.kt)("inlineCode",{parentName:"h4"},"path")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Path conditions are applied only to ",(0,l.kt)("strong",{parentName:"p"},"push")," and ",(0,l.kt)("strong",{parentName:"p"},"pull_request")," events.\nIt is currently ",(0,l.kt)("strong",{parentName:"p"},"only available")," for GitHub, GitLab.\nGitea only support ",(0,l.kt)("strong",{parentName:"p"},"push")," at the moment (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/go-gitea/gitea/pull/18228"},"go-gitea/gitea#18228"),").")),(0,l.kt)("p",null,"Execute a step only on a pipeline with certain files being changed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'when:\n  - path: "src/*"\n')),(0,l.kt)("p",null,"You can use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bmatcuk/doublestar#patterns"},"glob patterns")," to match the changed files and specify if the step should run if a file matching that pattern has been changed ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," or if some files have ",(0,l.kt)("strong",{parentName:"p"},"not")," been changed ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"when:\n  - path:\n      include: [ '.woodpecker/*.yml', '*.ini' ]\n      exclude: [ '*.md', 'docs/**' ]\n      ignore_message: \"[ALL]\"\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hint:")," Passing a defined ignore-message like ",(0,l.kt)("inlineCode",{parentName:"p"},"[ALL]")," inside the commit message will ignore all path conditions."),(0,l.kt)("h3",{id:"group---parallel-execution"},(0,l.kt)("inlineCode",{parentName:"h3"},"group")," - Parallel execution"),(0,l.kt)("p",null,"Woodpecker supports parallel step execution for same-machine fan-in and fan-out. Parallel steps are configured using the ",(0,l.kt)("inlineCode",{parentName:"p"},"group")," attribute. This instructs the pipeline runner to execute the named group in parallel."),(0,l.kt)("p",null,"Example parallel configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," pipeline:\n   backend:\n+    group: build\n     image: golang\n     commands:\n       - go build\n       - go test\n   frontend:\n+    group: build\n     image: node\n     commands:\n       - npm install\n       - npm run test\n       - npm run build\n   publish:\n     image: plugins/docker\n     repo: octocat/hello-world\n")),(0,l.kt)("p",null,"In the above example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"backend")," steps are executed in parallel. The pipeline runner will not execute the ",(0,l.kt)("inlineCode",{parentName:"p"},"publish")," step until the group completes."),(0,l.kt)("h3",{id:"volumes"},(0,l.kt)("inlineCode",{parentName:"h3"},"volumes")),(0,l.kt)("p",null,"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers."),(0,l.kt)("p",null,"For more details check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/volumes/"},"volumes docs"),"."),(0,l.kt)("h3",{id:"detach"},(0,l.kt)("inlineCode",{parentName:"h3"},"detach")),(0,l.kt)("p",null,"Woodpecker gives the ability to detach steps to run them in background until the pipeline finishes."),(0,l.kt)("p",null,"For more details check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/services#detachment"},"service docs"),"."),(0,l.kt)("h2",{id:"services"},(0,l.kt)("inlineCode",{parentName:"h2"},"services")),(0,l.kt)("p",null,"Woodpecker can provide service containers. They can for example be used to run databases or cache containers during the execution of pipeline."),(0,l.kt)("p",null,"For more details check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/services/"},"services docs"),"."),(0,l.kt)("h2",{id:"workspace"},(0,l.kt)("inlineCode",{parentName:"h2"},"workspace")),(0,l.kt)("p",null,"The workspace defines the shared volume and working directory shared by all pipeline steps. The default workspace matches the below pattern, based on your repository url."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"/woodpecker/src/github.com/octocat/hello-world\n")),(0,l.kt)("p",null,"The workspace can be customized using the workspace block in the YAML file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"+workspace:\n+  base: /go\n+  path: src/github.com/octocat/hello-world\n\n pipeline:\n   build:\n     image: golang:latest\n     commands:\n       - go get\n       - go test\n")),(0,l.kt)("p",null,"The base attribute defines a shared base volume available to all pipeline steps. This ensures your source code, dependencies and compiled binaries are persisted and shared between steps."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," workspace:\n+  base: /go\n   path: src/github.com/octocat/hello-world\n\n pipeline:\n   deps:\n     image: golang:latest\n     commands:\n       - go get\n       - go test\n   build:\n     image: node:latest\n     commands:\n       - go build\n")),(0,l.kt)("p",null,"This would be equivalent to the following docker commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker volume create my-named-volume\n\ndocker run --volume=my-named-volume:/go golang:latest\ndocker run --volume=my-named-volume:/go node:latest\n")),(0,l.kt)("p",null,"The path attribute defines the working directory of your build. This is where your code is cloned and will be the default working directory of every step in your build process. The path must be relative and is combined with your base path."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," workspace:\n   base: /go\n+  path: src/github.com/octocat/hello-world\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/octocat/hello-world \\\n  /go/src/github.com/octocat/hello-world\n")),(0,l.kt)("h2",{id:"matrix-1"},(0,l.kt)("inlineCode",{parentName:"h2"},"matrix")),(0,l.kt)("p",null,"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations."),(0,l.kt)("p",null,"For more details check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/matrix-pipelines/"},"matrix build docs"),"."),(0,l.kt)("h2",{id:"platform-1"},(0,l.kt)("inlineCode",{parentName:"h2"},"platform")),(0,l.kt)("p",null,"To configure your pipeline to only be executed on an agent with a specific platform, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"platform")," key.\nHave a look at the official ",(0,l.kt)("a",{parentName:"p",href:"https://go.dev/doc/install/source"},"go docs")," for the available platforms. The syntax of the platform is ",(0,l.kt)("inlineCode",{parentName:"p"},"GOOS/GOARCH")," like ",(0,l.kt)("inlineCode",{parentName:"p"},"linux/arm64")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"linux/amd64"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"Assuming we have two agents, one ",(0,l.kt)("inlineCode",{parentName:"p"},"arm")," and one ",(0,l.kt)("inlineCode",{parentName:"p"},"amd64"),". Previously this pipeline would have executed on ",(0,l.kt)("strong",{parentName:"p"},"either agent"),", as Woodpecker is not fussy about where it runs the pipelines. By setting the following option it will only be executed on an agent with the platform ",(0,l.kt)("inlineCode",{parentName:"p"},"linux/arm64"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"+platform: linux/arm64\n\npipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n")),(0,l.kt)("h2",{id:"labels"},(0,l.kt)("inlineCode",{parentName:"h2"},"labels")),(0,l.kt)("p",null,"You can set labels for your pipeline to select an agent to execute the pipeline on. An agent will pick up and run a pipeline when ",(0,l.kt)("strong",{parentName:"p"},"every")," label assigned to a pipeline matches the agents labels."),(0,l.kt)("p",null,"To set additional agent labels check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/administration/agent-config#woodpecker_filter_labels"},"agent configuration options"),". Agents will have at least three default labels: ",(0,l.kt)("inlineCode",{parentName:"p"},"platform=agent-os/agent-arch"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hostname=my-agent")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"repo=*"),". Agents can use a ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," as a wildcard for a label. For example ",(0,l.kt)("inlineCode",{parentName:"p"},"repo=*")," will match every repo."),(0,l.kt)("p",null,"Pipeline labels with an empty value will be ignored.\nBy default each pipeline has at least the ",(0,l.kt)("inlineCode",{parentName:"p"},"repo=your-user/your-repo-name")," label. If you have set the ",(0,l.kt)("a",{parentName:"p",href:"#platform"},"platform attribute")," for your pipeline it will have a label like ",(0,l.kt)("inlineCode",{parentName:"p"},"platform=your-os/your-arch")," as well."),(0,l.kt)("p",null,"You can add additional labels as a key value map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},'+labels:\n+  location: europe # only agents with `location=europe` or `location=*` will be used\n+  weather: sun\n+  hostname: "" # this label will be ignored as it is empty\n\npipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n')),(0,l.kt)("h2",{id:"variables"},(0,l.kt)("inlineCode",{parentName:"h2"},"variables")),(0,l.kt)("p",null,"Woodpecker supports ",(0,l.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.2/#3222-anchors-and-aliases"},"YAML anchors & aliases")," in the pipeline configuration. These can be used as variables to not repeat yourself."),(0,l.kt)("p",null,"For more details and examples check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/advanced-yaml-syntax"},"Advanced YAML syntax docs")),(0,l.kt)("h2",{id:"clone"},(0,l.kt)("inlineCode",{parentName:"h2"},"clone")),(0,l.kt)("p",null,"Woodpecker automatically configures a default clone step if not explicitly defined. When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," backend, the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/woodpecker-ci/plugin-git"},"plugin-git")," binary must be on your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," for the default clone step to work. If not, you can still write a manual clone step."),(0,l.kt)("p",null,"You can manually configure the clone step in your pipeline for customization:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"+clone:\n+  git:\n+    image: woodpeckerci/plugin-git\n\n pipeline:\n   build:\n     image: golang\n     commands:\n       - go build\n       - go test\n")),(0,l.kt)("p",null,"Example configuration to override depth:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," clone:\n   git:\n     image: woodpeckerci/plugin-git\n+    settings:\n+      depth: 50\n")),(0,l.kt)("p",null,"Example configuration to use a custom clone plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"clone:\n  git:\n+   image: octocat/custom-git-plugin\n")),(0,l.kt)("p",null,"Example configuration to clone Mercurial repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," clone:\n   hg:\n+    image: plugins/hg\n+    settings:\n+      path: bitbucket.org/foo/bar\n")),(0,l.kt)("h3",{id:"git-submodules"},"Git Submodules"),(0,l.kt)("p",null,"To use the credentials that cloned the repository to clone it's submodules, update ",(0,l.kt)("inlineCode",{parentName:"p"},".gitmodules")," to use ",(0,l.kt)("inlineCode",{parentName:"p"},"https")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"git"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},' [submodule "my-module"]\n path = my-module\n-url = git@github.com:octocat/my-module.git\n+url = https://github.com/octocat/my-module.git\n')),(0,l.kt)("p",null,"To use the ssh git url in ",(0,l.kt)("inlineCode",{parentName:"p"},".gitmodules")," for users cloning with ssh, and also use the https url in Woodpecker, add ",(0,l.kt)("inlineCode",{parentName:"p"},"submodule_override"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"}," clone:\n   git:\n     image: woodpeckerci/plugin-git\n     settings:\n       recursive: true\n+      submodule_override:\n+        my-module: https://github.com/octocat/my-module.git\n\npipeline:\n  ...\n")),(0,l.kt)("h2",{id:"depends_on"},(0,l.kt)("inlineCode",{parentName:"h2"},"depends_on")),(0,l.kt)("p",null,"Woodpecker supports to define multiple pipelines for a repository. Those pipelines will run independent from each other. To depend them on each other you can use the ",(0,l.kt)("a",{parentName:"p",href:"https://woodpecker-ci.org/docs/usage/multi-pipeline#flow-control"},(0,l.kt)("inlineCode",{parentName:"a"},"depends_on"))," keyword."),(0,l.kt)("h2",{id:"privileged-mode"},"Privileged mode"),(0,l.kt)("p",null,"Woodpecker gives the ability to configure privileged mode in the YAML. You can use this parameter to launch containers with escalated capabilities."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Privileged mode is only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/usage/project-settings#trusted"},"project settings")," to enable trusted mode.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},' pipeline:\n   build:\n     image: docker\n     environment:\n       - DOCKER_HOST=tcp://docker:2375\n     commands:\n       - docker --tls=false ps\n\n services:\n   docker:\n     image: docker:dind\n     command: [ "--storage-driver=vfs", "--tls=false" ]\n+    privileged: true\n')))}m.isMDXComponent=!0}}]);