"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3122],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>k,toc:()=>m});var o=n(9613),i=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={},f="Gitea",k={unversionedId:"administration/vcs/gitea",id:"version-0.15/administration/vcs/gitea",title:"Gitea",description:"Woodpecker comes with built-in support for Gitea. To enable Gitea you should configure the Woodpecker container using the following environment variables:",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/30-gitea.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/gitea",permalink:"/docs/administration/vcs/gitea",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/30-gitea.md",tags:[],version:"0.15",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/administration/vcs/github"},next:{title:"GitLab",permalink:"/docs/administration/vcs/gitlab"}},h={},m=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITEA</code>",id:"woodpecker_gitea",level:3},{value:"<code>WOODPECKER_GITEA_URL</code>",id:"woodpecker_gitea_url",level:3},{value:"<code>WOODPECKER_GITEA_CLIENT</code>",id:"woodpecker_gitea_client",level:3},{value:"<code>WOODPECKER_GITEA_SECRET</code>",id:"woodpecker_gitea_secret",level:3},{value:"<code>WOODPECKER_GITEA_SKIP_VERIFY</code>",id:"woodpecker_gitea_skip_verify",level:3}],g={toc:m};function v(e){var t,i=e,{components:p}=i,d=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n})(i,["components"]);return(0,o.kt)("wrapper",(t=u(u({},g),d),r(t,a({components:p,mdxType:"MDXLayout"}))),(0,o.kt)("h1",u({},{id:"gitea"}),"Gitea"),(0,o.kt)("p",null,"Woodpecker comes with built-in support for Gitea. To enable Gitea you should configure the Woodpecker container using the following environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GITEA=true\n+     - WOODPECKER_GITEA_URL=${WOODPECKER_GITEA_URL}\n+     - WOODPECKER_GITEA_CLIENT=${WOODPECKER_GITEA_CLIENT}\n+     - WOODPECKER_GITEA_SECRET=${WOODPECKER_GITEA_SECRET}\n\n  woodpecker-agent:\n    [...]\n")),(0,o.kt)("h2",u({},{id:"registration"}),"Registration"),(0,o.kt)("p",null,"Register your application with Gitea to create your client id and secret. You can find the OAuth applications settings of Gitea at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://gitea.<host>/user/settings/"),". It is very import the authorization callback URL matches your http(s) scheme and hostname exactly with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<host>/authorize")," as the path."),(0,o.kt)("p",null,"If you run the Woodpecker CI server on the same host as the Gitea instance, you might also need to allow local connections in Gitea, since version ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.16"),". Otherwise webhooks will fail. Add the following lines to your Gitea configuration (usually at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/gitea/conf/app.ini"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"...\n[webhook]\nALLOWED_HOST_LIST=external,loopback\n")),(0,o.kt)("p",null,"For reference see ",(0,o.kt)("a",u({parentName:"p"},{href:"https://docs.gitea.io/en-us/config-cheat-sheet/#webhook-webhook"}),"Configuration Cheat Sheet"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gitea oauth setup",src:n(2547).Z,width:"1301",height:"875"})),(0,o.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,o.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,o.kt)("h3",u({},{id:"woodpecker_gitea"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITEA")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Enables the Gitea driver."),(0,o.kt)("h3",u({},{id:"woodpecker_gitea_url"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITEA_URL")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://try.gitea.io"))),(0,o.kt)("p",null,"Configures the Gitea server address."),(0,o.kt)("h3",u({},{id:"woodpecker_gitea_client"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITEA_CLIENT")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the Gitea OAuth client id. This is used to authorize access."),(0,o.kt)("h3",u({},{id:"woodpecker_gitea_secret"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITEA_SECRET")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the Gitea OAuth client secret. This is used to authorize access."),(0,o.kt)("h3",u({},{id:"woodpecker_gitea_skip_verify"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITEA_SKIP_VERIFY")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Configure if SSL verification should be skipped."))}v.isMDXComponent=!0},2547:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gitea_oauth-7f5d2bc8bfd0c02a227a328fff349af3.gif"}}]);