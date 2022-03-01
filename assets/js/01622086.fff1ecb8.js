"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2559],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return k}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),k=r,_=d["".concat(c,".").concat(k)]||d[k]||s[k]||i;return o?n.createElement(_,a(a({ref:t},p),{},{components:o})):n.createElement(_,a({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3715:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=o(3117),r=o(102),i=(o(7294),o(3905)),a=["components"],l={},c="Gogs",u={unversionedId:"administration/vcs/gogs",id:"administration/vcs/gogs",title:"Gogs",description:"Configuration",source:"@site/docs/30-administration/11-vcs/70-gogs.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/gogs",permalink:"/docs/administration/vcs/gogs",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-vcs/70-gogs.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitbucket Server",permalink:"/docs/administration/vcs/bitbucket_server"},next:{title:"Coding",permalink:"/docs/administration/vcs/coding"}},p=[{value:"Configuration",id:"configuration",children:[{value:"<code>WOODPECKER_GOGS</code>",id:"woodpecker_gogs",children:[],level:3},{value:"<code>WOODPECKER_GOGS_URL</code>",id:"woodpecker_gogs_url",children:[],level:3},{value:"<code>WOODPECKER_GOGS_GIT_USERNAME</code>",id:"woodpecker_gogs_git_username",children:[],level:3},{value:"<code>WOODPECKER_GOGS_GIT_USERNAME_FILE</code>",id:"woodpecker_gogs_git_username_file",children:[],level:3},{value:"<code>WOODPECKER_GOGS_GIT_PASSWORD</code>",id:"woodpecker_gogs_git_password",children:[],level:3},{value:"<code>WOODPECKER_GOGS_GIT_PASSWORD_FILE</code>",id:"woodpecker_gogs_git_password_file",children:[],level:3},{value:"<code>WOODPECKER_GOGS_PRIVATE_MODE</code>",id:"woodpecker_gogs_private_mode",children:[],level:3},{value:"<code>WOODPECKER_GOGS_SKIP_VERIFY</code>",id:"woodpecker_gogs_skip_verify",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gogs"},"Gogs"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,i.kt)("h3",{id:"woodpecker_gogs"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"Enables the Gogs driver."),(0,i.kt)("h3",{id:"woodpecker_gogs_url"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_URL")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com"))),(0,i.kt)("p",null,"Configures the Gogs server address."),(0,i.kt)("h3",{id:"woodpecker_gogs_git_username"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_USERNAME")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,i.kt)("h3",{id:"woodpecker_gogs_git_username_file"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_USERNAME_FILE")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Read the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GOGS_GIT_USERNAME")," from the specified filepath"),(0,i.kt)("h3",{id:"woodpecker_gogs_git_password"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_PASSWORD")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,i.kt)("h3",{id:"woodpecker_gogs_git_password_file"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_PASSWORD_FILE")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,i.kt)("p",null,"Read the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GOGS_GIT_PASSWORD")," from the specified filepath"),(0,i.kt)("h3",{id:"woodpecker_gogs_private_mode"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_PRIVATE_MODE")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h3",{id:"woodpecker_gogs_skip_verify"},(0,i.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_SKIP_VERIFY")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))),(0,i.kt)("p",null,"Configure if SSL verification should be skipped."))}d.isMDXComponent=!0}}]);