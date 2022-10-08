"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7238],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var n=r(9613),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={},g="Example plugin",m={unversionedId:"usage/plugins/sample-plugin",id:"version-0.15/usage/plugins/sample-plugin",title:"Example plugin",description:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline.",source:"@site/versioned_docs/version-0.15/20-usage/51-plugins/20-sample-plugin.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/sample-plugin",permalink:"/docs/usage/plugins/sample-plugin",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/20-usage/51-plugins/20-sample-plugin.md",tags:[],version:"0.15",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/usage/plugins/plugins"},next:{title:"Services",permalink:"/docs/usage/services"}},h={},f=[{value:"What end users will see",id:"what-end-users-will-see",level:2},{value:"Write the logic",id:"write-the-logic",level:2},{value:"Package it",id:"package-it",level:2}],b={toc:f};function k(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),c),o(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"example-plugin"}),"Example plugin"),(0,n.kt)("p",null,"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline."),(0,n.kt)("h2",u({},{id:"what-end-users-will-see"}),"What end users will see"),(0,n.kt)("p",null,"The below example demonstrates how we might configure a webhook plugin in the Yaml file:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  webhook:\n    image: foo/webhook\n    settings:\n      url: http://example.com\n      method: post\n      body: |\n        hello world\n")),(0,n.kt)("h2",u({},{id:"write-the-logic"}),"Write the logic"),(0,n.kt)("p",null,"Create a simple shell script that invokes curl using the Yaml configuration parameters, which are passed to the script as environment variables in uppercase and prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"PLUGIN_"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"#!/bin/sh\n\ncurl \\\n  -X ${PLUGIN_METHOD} \\\n  -d ${PLUGIN_BODY} \\\n  ${PLUGIN_URL}\n")),(0,n.kt)("h2",u({},{id:"package-it"}),"Package it"),(0,n.kt)("p",null,"Create a Dockerfile that adds your shell script to the image, and configures the image to execute your shell script as the main entrypoint."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-dockerfile"}),"FROM alpine\nADD script.sh /bin/\nRUN chmod +x /bin/script.sh\nRUN apk -Uuv add curl ca-certificates\nENTRYPOINT /bin/script.sh\n")),(0,n.kt)("p",null,"Build and publish your plugin to the Docker registry. Once published your plugin can be shared with the broader Woodpecker community."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-nohighlight"}),"docker build -t foo/webhook .\ndocker push foo/webhook\n")),(0,n.kt)("p",null,"Execute your plugin locally from the command line to verify it is working:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-nohighlight"}),'docker run --rm \\\n  -e PLUGIN_METHOD=post \\\n  -e PLUGIN_URL=http://example.com \\\n  -e PLUGIN_BODY="hello world" \\\n  foo/webhook\n')))}k.isMDXComponent=!0}}]);