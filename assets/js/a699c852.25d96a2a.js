"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2131],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,f=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var n=r(9613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e};const d={},b="GitHub",f={unversionedId:"administration/vcs/github",id:"version-0.15/administration/vcs/github",title:"GitHub",description:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/20-github.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/github",permalink:"/docs/administration/vcs/github",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/20-github.md",tags:[],version:"0.15",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/administration/vcs/overview"},next:{title:"Gitea",permalink:"/docs/administration/vcs/gitea"}},h={},k=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITHUB</code>",id:"woodpecker_github",level:3},{value:"<code>WOODPECKER_GITHUB_URL</code>",id:"woodpecker_github_url",level:3},{value:"<code>WOODPECKER_GITHUB_CLIENT</code>",id:"woodpecker_github_client",level:3},{value:"<code>WOODPECKER_GITHUB_SECRET</code>",id:"woodpecker_github_secret",level:3},{value:"<code>WOODPECKER_GITHUB_MERGE_REF</code>",id:"woodpecker_github_merge_ref",level:3},{value:"<code>WOODPECKER_GITHUB_SKIP_VERIFY</code>",id:"woodpecker_github_skip_verify",level:3}],m={toc:k};function v(e){var t,o=e,{components:s}=o,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(o,["components"]);return(0,n.kt)("wrapper",(t=p(p({},m),d),i(t,a({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"github"}),"GitHub"),(0,n.kt)("p",null,"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GITHUB=true\n+     - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n+     - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n\n  woodpecker-agent:\n    [...]\n")),(0,n.kt)("h2",p({},{id:"registration"}),"Registration"),(0,n.kt)("p",null,"Register your application with GitHub to create your client id and secret. It is very import the authorization callback URL matches your http(s) scheme and hostname exactly with ",(0,n.kt)("inlineCode",{parentName:"p"},"<scheme>://<host>/authorize")," as the path."),(0,n.kt)("p",null,"Please use this screenshot for reference:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"github oauth setup",src:r(6661).Z,width:"789",height:"787"})),(0,n.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,n.kt)("h3",p({},{id:"woodpecker_github"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enables the GitHub driver."),(0,n.kt)("h3",p({},{id:"woodpecker_github_url"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_URL")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com"))),(0,n.kt)("p",null,"Configures the GitHub server address."),(0,n.kt)("h3",p({},{id:"woodpecker_github_client"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_CLIENT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the GitHub OAuth client id. This is used to authorize access."),(0,n.kt)("h3",p({},{id:"woodpecker_github_secret"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_SECRET")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the GitHub OAuth client secret. This is used to authorize access."),(0,n.kt)("h3",p({},{id:"woodpecker_github_merge_ref"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_MERGE_REF")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true"))),(0,n.kt)("p",null,"TODO"),(0,n.kt)("h3",p({},{id:"woodpecker_github_skip_verify"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITHUB_SKIP_VERIFY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Configure if SSL verification should be skipped."))}v.isMDXComponent=!0},6661:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/github_oauth-c5a964d7dc0bf3ca699b2ebf1d00e797.png"}}]);