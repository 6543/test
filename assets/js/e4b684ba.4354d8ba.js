"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1284],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var r=t(9613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&p(e,t,n[t]);return e};const d={},m="Advanced YAML syntax",g={unversionedId:"usage/advanced-yaml-syntax",id:"usage/advanced-yaml-syntax",title:"Advanced YAML syntax",description:"Anchors & aliases",source:"@site/docs/20-usage/35-advanced-yaml-syntax.md",sourceDirName:"20-usage",slug:"/usage/advanced-yaml-syntax",permalink:"/docs/next/usage/advanced-yaml-syntax",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/35-advanced-yaml-syntax.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix pipelines",permalink:"/docs/next/usage/matrix-pipelines"},next:{title:"Secrets",permalink:"/docs/next/usage/secrets"}},f={},y=[{value:"Anchors &amp; aliases",id:"anchors--aliases",level:2}],b={toc:y};function v(e){var n,t=e,{components:a}=t,p=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},b),p),o(n,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"advanced-yaml-syntax"}),"Advanced YAML syntax"),(0,r.kt)("h2",u({},{id:"anchors--aliases"}),"Anchors & aliases"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",u({parentName:"p"},{href:"https://yaml.org/spec/1.2.2/#3222-anchors-and-aliases"}),"YAML anchors & aliases")," as variables in your pipeline config."),(0,r.kt)("p",null,"To convert this:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"pipeline:\n  test:\n    image: golang:1.18\n    commands: go test ./...\n  build:\n    image: golang:1.18\n    commands: build\n")),(0,r.kt)("p",null,"Just add a new section called ",(0,r.kt)("strong",{parentName:"p"},"variables")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"+variables:\n+  - &golang_image 'golang:1.18'\n\n pipeline:\n   test:\n-    image: golang:1.18\n+    image: *golang_image\n     commands: go test ./...\n   build:\n-    image: golang:1.18\n+    image: *golang_image\n     commands: build\n")))}v.isMDXComponent=!0}}]);