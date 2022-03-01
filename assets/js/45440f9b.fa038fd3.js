"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8473],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=i,f=d["".concat(c,".").concat(k)]||d[k]||s[k]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6220:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(3117),i=n(102),r=(n(7294),n(3905)),a=["components"],l={},c="GitLab",u={unversionedId:"administration/vcs/gitlab",id:"administration/vcs/gitlab",title:"GitLab",description:"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:",source:"@site/docs/30-administration/11-vcs/40-gitlab.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/gitlab",permalink:"/docs/administration/vcs/gitlab",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-vcs/40-gitlab.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gitea",permalink:"/docs/administration/vcs/gitea"},next:{title:"Bitbucket",permalink:"/docs/administration/vcs/bitbucket"}},p=[{value:"Registration",id:"registration",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"<code>WOODPECKER_GITLAB</code>",id:"woodpecker_gitlab",children:[],level:3},{value:"<code>WOODPECKER_GITLAB_URL</code>",id:"woodpecker_gitlab_url",children:[],level:3},{value:"<code>WOODPECKER_GITLAB_CLIENT</code>",id:"woodpecker_gitlab_client",children:[],level:3},{value:"<code>WOODPECKER_GITLAB_CLIENT_FILE</code>",id:"woodpecker_gitlab_client_file",children:[],level:3},{value:"<code>WOODPECKER_GITLAB_SECRET</code>",id:"woodpecker_gitlab_secret",children:[],level:3},{value:"<code>WOODPECKER_GITLAB_SECRET_FILE</code>",id:"woodpecker_gitlab_secret_file",children:[],level:3},{value:"<code>WOODPECKER_GITLAB_SKIP_VERIFY</code>",id:"woodpecker_gitlab_skip_verify",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gitlab"},"GitLab"),(0,r.kt)("p",null,"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n+     - WOODPECKER_GITLAB=true\n+     - WOODPECKER_GITLAB_URL=http://gitlab.mycompany.com\n+     - WOODPECKER_GITLAB_CLIENT=95c0282573633eb25e82\n+     - WOODPECKER_GITLAB_SECRET=30f5064039e6b359e075\n\n  woodpecker-agent:\n    [...]\n")),(0,r.kt)("h2",{id:"registration"},"Registration"),(0,r.kt)("p",null,"You must register your application with GitLab in order to generate a Client and Secret. Navigate to your account settings and choose Applications from the menu, and click New Application."),(0,r.kt)("p",null,"Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"http://woodpecker.mycompany.com/authorize")," as the Authorization callback URL. Grant ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," scope to the application."),(0,r.kt)("p",null,"If you run the Woodpecker CI server on the same host as the GitLab instance, you might also need to allow local connections in GitLab, otherwise API requests will fail. In GitLab, navigate to the Admin dashboard, then go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > Network > Outbound requests")," and enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow requests to the local network from web hooks and services"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,r.kt)("h3",{id:"woodpecker_gitlab"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enables the GitLab driver."),(0,r.kt)("h3",{id:"woodpecker_gitlab_url"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_URL")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://gitlab.com"))),(0,r.kt)("p",null,"Configures the GitLab server address."),(0,r.kt)("h3",{id:"woodpecker_gitlab_client"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_CLIENT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the GitLab OAuth client id. This is used to authorize access."),(0,r.kt)("h3",{id:"woodpecker_gitlab_client_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_CLIENT_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITLAB_CLIENT")," from the specified filepath"),(0,r.kt)("h3",{id:"woodpecker_gitlab_secret"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SECRET")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Configures the GitLab OAuth client secret. This is used to authorize access."),(0,r.kt)("h3",{id:"woodpecker_gitlab_secret_file"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SECRET_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITLAB_SECRET")," from the specified filepath"),(0,r.kt)("h3",{id:"woodpecker_gitlab_skip_verify"},(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GITLAB_SKIP_VERIFY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Configure if SSL verification should be skipped."))}d.isMDXComponent=!0}}]);