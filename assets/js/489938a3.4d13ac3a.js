"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1601],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>m,default:()=>b,frontMatter:()=>u,metadata:()=>g,toc:()=>h});var a=t(9613),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(r)for(var t of r(n))p.call(n,t)&&d(e,t,n[t]);return e};const u={},m="Pipeline syntax",g={unversionedId:"usage/pipeline-syntax",id:"version-0.15/usage/pipeline-syntax",title:"Pipeline syntax",description:"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status.",source:"@site/versioned_docs/version-0.15/20-usage/20-pipeline-syntax.md",sourceDirName:"20-usage",slug:"/usage/pipeline-syntax",permalink:"/docs/usage/pipeline-syntax",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/20-pipeline-syntax.md",tags:[],version:"0.15",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/usage/intro"},next:{title:"Conditional Step Execution",permalink:"/docs/usage/conditional-execution"}},k={},h=[{value:"Global Pipeline Conditionals",id:"global-pipeline-conditionals",level:2},{value:"<code>branches</code>",id:"branches",level:3},{value:"<code>platform</code>",id:"platform",level:3},{value:"Skip Commits",id:"skip-commits",level:3},{value:"<code>services</code>",id:"services",level:2},{value:"Steps",id:"steps",level:2},{value:"File changes are incremental",id:"file-changes-are-incremental",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"Images from private registries",id:"images-from-private-registries",level:4},{value:"Global registry support",id:"global-registry-support",level:4},{value:"GCR registry support",id:"gcr-registry-support",level:4},{value:"<code>commands</code>",id:"commands",level:3},{value:"<code>environment</code>",id:"environment",level:3},{value:"<code>secrets</code>",id:"secrets",level:3},{value:"<code>when</code> - Conditional Execution",id:"when---conditional-execution",level:3},{value:"<code>group</code> - Parallel execution",id:"group---parallel-execution",level:3},{value:"<code>volumes</code>",id:"volumes",level:3},{value:"<code>detach</code>",id:"detach",level:3},{value:"Advanced Configurations",id:"advanced-configurations",level:2},{value:"<code>workspace</code>",id:"workspace",level:3},{value:"<code>matrix</code>",id:"matrix",level:3},{value:"<code>clone</code>",id:"clone",level:3},{value:"Git Submodules",id:"git-submodules",level:4},{value:"Privileged mode",id:"privileged-mode",level:3}],f={toc:h};function b(e){var n,t=e,{components:i}=t,d=((e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&r)for(var a of r(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=c(c({},f),d),o(n,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"pipeline-syntax"}),"Pipeline syntax"),(0,a.kt)("p",null,"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status."),(0,a.kt)("p",null,"Example pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  backend:\n    image: golang\n    commands:\n      - go build\n      - go test\n  frontend:\n    image: node\n    commands:\n      - npm install\n      - npm run test\n      - npm run build\n")),(0,a.kt)("p",null,"In the above example we define two pipeline steps, ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"backend"),". The names of these steps are completely arbitrary."),(0,a.kt)("h2",c({},{id:"global-pipeline-conditionals"}),"Global Pipeline Conditionals"),(0,a.kt)("p",null,"Woodpecker gives the ability to skip whole pipelines (not just steps) based on certain conditions."),(0,a.kt)("h3",c({},{id:"branches"}),(0,a.kt)("inlineCode",{parentName:"h3"},"branches")),(0,a.kt)("p",null,"Woodpecker can skip commits based on the target branch. If the branch matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"branches:")," block the pipeline is executed, otherwise it is skipped."),(0,a.kt)("p",null,"Example skipping a commit when the target branch is not master:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: master\n")),(0,a.kt)("p",null,"Example matching multiple target branches:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: [ master, develop ]\n")),(0,a.kt)("p",null,"Example uses glob matching:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: [ master, feature/* ]\n")),(0,a.kt)("p",null,"Example includes branches:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches:\n+  include: [ master, feature/* ]\n")),(0,a.kt)("p",null,"Example excludes branches:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches:\n+  exclude: [ develop, feature/* ]\n")),(0,a.kt)("h3",c({},{id:"platform"}),(0,a.kt)("inlineCode",{parentName:"h3"},"platform")),(0,a.kt)("p",null,"To configure your pipeline to only be executed on an agent with a specific platform, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"platform")," key.\nHave a look at the official ",(0,a.kt)("a",c({parentName:"p"},{href:"https://go.dev/doc/install/source"}),"go docs")," for the available platforms. The syntax of the platform is ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOS/GOARCH")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"linux/arm64")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"linux/amd64"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,"Assuming we have two agents, one ",(0,a.kt)("inlineCode",{parentName:"p"},"arm")," and one ",(0,a.kt)("inlineCode",{parentName:"p"},"amd64"),". Previously this pipeline would have executed on ",(0,a.kt)("strong",{parentName:"p"},"either agent"),", as Woodpecker is not fussy about where it runs the pipelines. By setting the following option it will only be executed on an agent with the platform ",(0,a.kt)("inlineCode",{parentName:"p"},"linux/arm64"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"+platform: linux/arm64\n\n pipeline:\n   build:\n     image: golang\n     commands:\n       - go build\n       - go test\n")),(0,a.kt)("h3",c({},{id:"skip-commits"}),"Skip Commits"),(0,a.kt)("p",null,"Woodpecker gives the ability to skip individual commits by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"[CI SKIP]")," to the commit message. Note this is case-insensitive."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),'git commit -m "updated README [CI SKIP]"\n')),(0,a.kt)("h2",c({},{id:"services"}),(0,a.kt)("inlineCode",{parentName:"h2"},"services")),(0,a.kt)("p",null,"Woodpecker can provide service containers. They can for example be used to run databases or cache containers during the execution of pipeline."),(0,a.kt)("p",null,"For more details check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/services"}),"services docs"),"."),(0,a.kt)("h2",c({},{id:"steps"}),"Steps"),(0,a.kt)("p",null,"Every step of your pipeline executes arbitrary commands inside a specified docker container. The defined commands are executed serially.\nThe associated commit of a current pipeline run is checked out with git to a workspace which is mounted to every step of the pipeline as the working directory."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," pipeline:\n   backend:\n     image: golang\n     commands:\n+      - go build\n+      - go test\n")),(0,a.kt)("h3",c({},{id:"file-changes-are-incremental"}),"File changes are incremental"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Woodpecker clones the source code in the beginning pipeline"),(0,a.kt)("li",{parentName:"ul"},"Changes to files are persisted through steps as the same volume is mounted to all steps")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),'# .woodpecker.yml\npipeline:\n  build:\n    image: debian\n    commands:\n      - echo "test content" > myfile\n  a-test-step:\n    image: debian\n    commands:\n      - cat myfile\n')),(0,a.kt)("h3",c({},{id:"image"}),(0,a.kt)("inlineCode",{parentName:"h3"},"image")),(0,a.kt)("p",null,"Woodpecker uses Docker images for the build environment, for plugins and for service containers. The image field is exposed in the container blocks in the Yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," pipeline:\n   build:\n+    image: golang:1.6\n     commands:\n       - go build\n       - go test\n\n   publish:\n+    image: plugins/docker\n     repo: foo/bar\n\n services:\n   database:\n+    image: mysql\n")),(0,a.kt)("p",null,"Woodpecker supports any valid Docker image from any Docker registry:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-text"}),"image: golang\nimage: golang:1.7\nimage: library/golang:1.7\nimage: index.docker.io/library/golang\nimage: index.docker.io/library/golang:1.7\n")),(0,a.kt)("p",null,"Woodpecker does not automatically upgrade docker images. Example configuration to always pull the latest image when updates are available:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," pipeline:\n   build:\n     image: golang:latest\n+    pull: true\n")),(0,a.kt)("h4",c({},{id:"images-from-private-registries"}),"Images from private registries"),(0,a.kt)("p",null,"You must provide registry credentials on the UI in order to pull private pipeline images defined in your Yaml configuration file."),(0,a.kt)("p",null,"These credentials are never exposed to your pipeline, which means they cannot be used to push, and are safe to use with pull requests, for example. Pushing to a registry still require setting credentials for the appropriate plugin."),(0,a.kt)("p",null,"Example configuration using a private image:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," pipeline:\n   build:\n+    image: gcr.io/custom/golang\n     commands:\n       - go build\n       - go test\n")),(0,a.kt)("p",null,"Woodpecker matches the registry hostname to each image in your yaml. If the hostnames match, the registry credentials are used to authenticate to your registry and pull the image. Note that registry credentials are used by the Woodpecker agent and are never exposed to your build containers."),(0,a.kt)("p",null,"Example registry hostnames:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Image ",(0,a.kt)("inlineCode",{parentName:"li"},"gcr.io/foo/bar")," has hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"gcr.io")),(0,a.kt)("li",{parentName:"ul"},"Image ",(0,a.kt)("inlineCode",{parentName:"li"},"foo/bar")," has hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io")),(0,a.kt)("li",{parentName:"ul"},"Image ",(0,a.kt)("inlineCode",{parentName:"li"},"qux.com:8000/foo/bar")," has hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"qux.com:8000"))),(0,a.kt)("p",null,"Example registry hostname matching logic:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"gcr.io")," matches image ",(0,a.kt)("inlineCode",{parentName:"li"},"gcr.io/foo/bar")),(0,a.kt)("li",{parentName:"ul"},"Hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,a.kt)("inlineCode",{parentName:"li"},"golang")),(0,a.kt)("li",{parentName:"ul"},"Hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,a.kt)("inlineCode",{parentName:"li"},"library/golang")),(0,a.kt)("li",{parentName:"ul"},"Hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,a.kt)("inlineCode",{parentName:"li"},"bradyrydzewski/golang")),(0,a.kt)("li",{parentName:"ul"},"Hostname ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io")," matches ",(0,a.kt)("inlineCode",{parentName:"li"},"bradyrydzewski/golang:latest"))),(0,a.kt)("h4",c({},{id:"global-registry-support"}),"Global registry support"),(0,a.kt)("p",null,"To make a private registry globally available check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/administration/server-config#global-registry-setting"}),"server configuration docs"),"."),(0,a.kt)("h4",c({},{id:"gcr-registry-support"}),"GCR registry support"),(0,a.kt)("p",null,"For specific details on configuring access to Google Container Registry, please view the docs ",(0,a.kt)("a",c({parentName:"p"},{href:"https://cloud.google.com/container-registry/docs/advanced-authentication#using_a_json_key_file"}),"here"),"."),(0,a.kt)("h3",c({},{id:"commands"}),(0,a.kt)("inlineCode",{parentName:"h3"},"commands")),(0,a.kt)("p",null,"Commands of every pipeline step are executed serially as if you would enter them into your local shell."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," pipeline:\n   backend:\n     image: golang\n     commands:\n+      - go build\n+      - go test\n")),(0,a.kt)("p",null,"There is no magic here. The above commands are converted to a simple shell script. The commands in the above example are roughly converted to the below script:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"#!/bin/sh\nset -e\n\ngo build\ngo test\n")),(0,a.kt)("p",null,"The above shell script is then executed as the docker entrypoint. The below docker command is an (incomplete) example of how the script is executed:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"docker run --entrypoint=build.sh golang\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note that only build steps can define commands. You cannot use commands with plugins or services.")),(0,a.kt)("h3",c({},{id:"environment"}),(0,a.kt)("inlineCode",{parentName:"h3"},"environment")),(0,a.kt)("p",null,"Woodpecker provides the ability to pass environment variables to individual pipeline steps."),(0,a.kt)("p",null,"For more details check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/environment"}),"environment docs"),"."),(0,a.kt)("h3",c({},{id:"secrets"}),(0,a.kt)("inlineCode",{parentName:"h3"},"secrets")),(0,a.kt)("p",null,"Woodpecker provides the ability to store named parameters external to the Yaml configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."),(0,a.kt)("p",null,"For more details check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/secrets"}),"secrets docs"),"."),(0,a.kt)("h3",c({},{id:"when---conditional-execution"}),(0,a.kt)("inlineCode",{parentName:"h3"},"when")," - Conditional Execution"),(0,a.kt)("p",null,"Woodpecker supports defining conditional pipeline steps in the ",(0,a.kt)("inlineCode",{parentName:"p"},"when")," block."),(0,a.kt)("p",null,"For more details check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/conditional-execution"}),"Conditional Step Execution"),"."),(0,a.kt)("h3",c({},{id:"group---parallel-execution"}),(0,a.kt)("inlineCode",{parentName:"h3"},"group")," - Parallel execution"),(0,a.kt)("p",null,"Woodpecker supports parallel step execution for same-machine fan-in and fan-out. Parallel steps are configured using the ",(0,a.kt)("inlineCode",{parentName:"p"},"group")," attribute. This instructs the pipeline runner to execute the named group in parallel."),(0,a.kt)("p",null,"Example parallel configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," pipeline:\n   backend:\n+    group: build\n     image: golang\n     commands:\n       - go build\n       - go test\n   frontend:\n+    group: build\n     image: node\n     commands:\n       - npm install\n       - npm run test\n       - npm run build\n   publish:\n     image: plugins/docker\n     repo: octocat/hello-world\n")),(0,a.kt)("p",null,"In the above example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"backend")," steps are executed in parallel. The pipeline runner will not execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," step until the group completes."),(0,a.kt)("h3",c({},{id:"volumes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"volumes")),(0,a.kt)("p",null,"Woodpecker gives the ability to define Docker volumes in the Yaml. You can use this parameter to mount files or folders on the host machine into your containers."),(0,a.kt)("p",null,"For more details check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/volumes"}),"volumes docs"),"."),(0,a.kt)("h3",c({},{id:"detach"}),(0,a.kt)("inlineCode",{parentName:"h3"},"detach")),(0,a.kt)("p",null,"Woodpecker gives the ability to detach steps to run them in background until the pipeline finishes."),(0,a.kt)("p",null,"For more details check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/services#detachment"}),"service docs"),"."),(0,a.kt)("h2",c({},{id:"advanced-configurations"}),"Advanced Configurations"),(0,a.kt)("h3",c({},{id:"workspace"}),(0,a.kt)("inlineCode",{parentName:"h3"},"workspace")),(0,a.kt)("p",null,"The workspace defines the shared volume and working directory shared by all pipeline steps. The default workspace matches the below pattern, based on your repository url."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"/drone/src/github.com/octocat/hello-world\n")),(0,a.kt)("p",null,"The workspace can be customized using the workspace block in the Yaml file:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"+workspace:\n+  base: /go\n+  path: src/github.com/octocat/hello-world\n\n pipeline:\n   build:\n     image: golang:latest\n     commands:\n       - go get\n       - go test\n")),(0,a.kt)("p",null,"The base attribute defines a shared base volume available to all pipeline steps. This ensures your source code, dependencies and compiled binaries are persisted and shared between steps."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," workspace:\n+  base: /go\n   path: src/github.com/octocat/hello-world\n\n pipeline:\n   deps:\n     image: golang:latest\n     commands:\n       - go get\n       - go test\n   build:\n     image: node:latest\n     commands:\n       - go build\n")),(0,a.kt)("p",null,"This would be equivalent to the following docker commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"docker volume create my-named-volume\n\ndocker run --volume=my-named-volume:/go golang:latest\ndocker run --volume=my-named-volume:/go node:latest\n")),(0,a.kt)("p",null,"The path attribute defines the working directory of your build. This is where your code is cloned and will be the default working directory of every step in your build process. The path must be relative and is combined with your base path."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," workspace:\n   base: /go\n+  path: src/github.com/octocat/hello-world\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-text"}),"git clone https://github.com/octocat/hello-world \\\n  /go/src/github.com/octocat/hello-world\n")),(0,a.kt)("h3",c({},{id:"matrix"}),(0,a.kt)("inlineCode",{parentName:"h3"},"matrix")),(0,a.kt)("p",null,"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations."),(0,a.kt)("p",null,"For more details check the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/matrix-builds"}),"matrix build docs"),"."),(0,a.kt)("h3",c({},{id:"clone"}),(0,a.kt)("inlineCode",{parentName:"h3"},"clone")),(0,a.kt)("p",null,"Woodpecker automatically configures a default clone step if not explicitly defined. You can manually configure the clone step in your pipeline for customization:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"+clone:\n+  git:\n+    image: woodpeckerci/plugin-git\n\n pipeline:\n   build:\n     image: golang\n     commands:\n       - go build\n       - go test\n")),(0,a.kt)("p",null,"Example configuration to override depth:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," clone:\n   git:\n     image: woodpeckerci/plugin-git\n+    settings:\n+      depth: 50\n")),(0,a.kt)("p",null,"Example configuration to use a custom clone plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"clone:\n  git:\n+   image: octocat/custom-git-plugin\n")),(0,a.kt)("p",null,"Example configuration to clone Mercurial repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," clone:\n   hg:\n+    image: plugins/hg\n+    settings:\n+      path: bitbucket.org/foo/bar\n")),(0,a.kt)("h4",c({},{id:"git-submodules"}),"Git Submodules"),(0,a.kt)("p",null,"To use the credentials that cloned the repository to clone it's submodules, update ",(0,a.kt)("inlineCode",{parentName:"p"},".gitmodules")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"git"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),' [submodule "my-module"]\n path = my-module\n-url = git@github.com:octocat/my-module.git\n+url = https://github.com/octocat/my-module.git\n')),(0,a.kt)("p",null,"To use the ssh git url in ",(0,a.kt)("inlineCode",{parentName:"p"},".gitmodules")," for users cloning with ssh, and also use the https url in Woodpecker, add ",(0,a.kt)("inlineCode",{parentName:"p"},"submodule_override"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"})," clone:\n   git:\n     image: woodpeckerci/plugin-git\n     settings:\n       recursive: true\n+      submodule_override:\n+        my-module: https://github.com/octocat/my-module.git\n\npipeline:\n  ...\n")),(0,a.kt)("h3",c({},{id:"privileged-mode"}),"Privileged mode"),(0,a.kt)("p",null,"Woodpecker gives the ability to configure privileged mode in the Yaml. You can use this parameter to launch containers with escalated capabilities."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Privileged mode is only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/usage/project-settings#trusted"}),"project settings")," to enable trusted mode.")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),' pipeline:\n   build:\n     image: docker\n     environment:\n       - DOCKER_HOST=tcp://docker:2375\n     commands:\n       - docker --tls=false ps\n\n services:\n   docker:\n     image: docker:dind\n     command: [ "--storage-driver=vfs", "--tls=false" ]\n+    privileged: true\n')))}b.isMDXComponent=!0}}]);