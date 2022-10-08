"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2048],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),k=o,m=u["".concat(l,".").concat(k)]||u[k]||p[k]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=r(9613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&s(e,r,t[r]);return e};const u={},k="Docker backend",m={unversionedId:"administration/backends/docker",id:"administration/backends/docker",title:"Docker backend",description:"This is the original backend used with Woodpecker. The docker backend executes each step inside a separate container started on the agent.",source:"@site/docs/30-administration/22-backends/10-docker.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/docker",permalink:"/docs/next/administration/backends/docker",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/22-backends/10-docker.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent configuration",permalink:"/docs/next/administration/agent-config"},next:{title:"Local backend",permalink:"/docs/next/administration/backends/local"}},f={},b=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BACKEND_DOCKER_NETWORK</code>",id:"woodpecker_backend_docker_network",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_ENABLE_IPV6</code>",id:"woodpecker_backend_docker_enable_ipv6",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_VOLUMES</code>",id:"woodpecker_backend_docker_volumes",level:3},{value:"Docker credentials",id:"docker-credentials",level:2},{value:"Podman support",id:"podman-support",level:2}],O={toc:b};function h(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},O),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"docker-backend"}),"Docker backend"),(0,n.kt)("p",null,"This is the original backend used with Woodpecker. The docker backend executes each step inside a separate container started on the agent."),(0,n.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,n.kt)("h3",p({},{id:"woodpecker_backend_docker_network"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_NETWORK")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Set to the name of an existing network which will be attached to all your pipeline containers (steps). Please be careful as this allows the containers of different pipelines to access each other!"),(0,n.kt)("h3",p({},{id:"woodpecker_backend_docker_enable_ipv6"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_ENABLE_IPV6")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enable IPv6 for the networks used by pipeline containers (steps). Make sure you configured your docker daemon to support IPv6."),(0,n.kt)("h3",p({},{id:"woodpecker_backend_docker_volumes"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_VOLUMES")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"List of default volumes separated by comma to be mounted to all pipeline containers (steps). For example to use custom CA\ncertificates installed on host and host timezone use ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/ssl/certs:/etc/ssl/certs:ro,/etc/timezone:/etc/timezone"),"."),(0,n.kt)("h2",p({},{id:"docker-credentials"}),"Docker credentials"),(0,n.kt)("p",null,"Woodpecker supports ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/docker/docker-credential-helpers"}),"Docker credentials")," to securely store registry credentials. Install your corresponding credential helper and configure it in your Docker config file passed via ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/administration/server-config#woodpecker_docker_config"}),(0,n.kt)("inlineCode",{parentName:"a"},"WOODPECKER_DOCKER_CONFIG")),"."),(0,n.kt)("p",null,"To add your credential helper to the Woodpecker server container you could use the following code to build a custom image:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-dockerfile"}),"FROM woodpeckerci/woodpecker-server:latest-alpine\n\nRUN apk add -U --no-cache docker-credential-ecr-login\n")),(0,n.kt)("h2",p({},{id:"podman-support"}),"Podman support"),(0,n.kt)("p",null,"While the agent was developed with Docker/Moby, Podman can also be used by setting the environment variable ",(0,n.kt)("inlineCode",{parentName:"p"},"DOCKER_SOCK")," to point to the podman socket. In order to work without workarounds, Podman 4.0 (or above) is required."))}h.isMDXComponent=!0}}]);