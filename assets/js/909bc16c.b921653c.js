"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2585],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8868:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={},s="Matrix builds",u={unversionedId:"usage/matrix-builds",id:"usage/matrix-builds",title:"Matrix builds",description:"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations.",source:"@site/docs/20-usage/30-matrix-builds.md",sourceDirName:"20-usage",slug:"/usage/matrix-builds",permalink:"/docs/usage/matrix-builds",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/30-matrix-builds.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi pipelines",permalink:"/docs/usage/multi-pipeline"},next:{title:"Secrets",permalink:"/docs/usage/secrets"}},p=[{value:"Interpolation",id:"interpolation",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],c={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"matrix-builds"},"Matrix builds"),(0,i.kt)("p",null,"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations."),(0,i.kt)("p",null,"Example matrix definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  REDIS_VERSION:\n    - 2.6\n    - 2.8\n    - 3.0\n")),(0,i.kt)("p",null,"Example matrix definition containing only specific combinations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"matrix:\n  include:\n    - GO_VERSION: 1.4\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.5\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.6\n      REDIS_VERSION: 3.0\n")),(0,i.kt)("h2",{id:"interpolation"},"Interpolation"),(0,i.kt)("p",null,"Matrix variables are interpolated in the yaml using the ",(0,i.kt)("inlineCode",{parentName:"p"},"${VARIABLE}")," syntax, before the yaml is parsed. This is an example yaml file before interpolating matrix parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  build:\n    image: golang:${GO_VERSION}\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  database:\n    image: ${DATABASE}\n\nmatrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  DATABASE:\n    - mysql:5.5\n    - mysql:6.5\n    - mariadb:10.1\n")),(0,i.kt)("p",null,"Example Yaml file after injecting the matrix parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n-   image: golang:${GO_VERSION}\n+   image: golang:1.4\n    commands:\n      - go get\n      - go build\n      - go test\n+   environment:\n+     - GO_VERSION=1.4\n+     - DATABASE=mysql:5.5\n\nservices:\n  database:\n-   image: ${DATABASE}\n+   image: mysql:5.5\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Example matrix build based on Docker image tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  build:\n    image: golang:${TAG}\n    commands:\n      - go build\n      - go test\n\nmatrix:\n  TAG:\n    - 1.7\n    - 1.8\n    - latest\n")),(0,i.kt)("p",null,"Example matrix build based on Docker image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  build:\n    image: ${IMAGE}\n    commands:\n      - go build\n      - go test\n\nmatrix:\n  IMAGE:\n    - golang:1.7\n    - golang:1.8\n    - golang:latest\n")))}m.isMDXComponent=!0}}]);