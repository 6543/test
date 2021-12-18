"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[639],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3210:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={},u="Bitbucket",s={unversionedId:"administration/vcs/bitbucket",id:"administration/vcs/bitbucket",title:"Bitbucket",description:"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:",source:"@site/docs/30-administration/20-vcs/50-bitbucket.md",sourceDirName:"30-administration/20-vcs",slug:"/administration/vcs/bitbucket",permalink:"/docs/administration/vcs/bitbucket",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/20-vcs/50-bitbucket.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gitlab",permalink:"/docs/administration/vcs/gitlab"},next:{title:"Bitbucket Server",permalink:"/docs/administration/vcs/bitbucket_server"}},l=[{value:"Registration",id:"registration",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Missing Features",id:"missing-features",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitbucket"},"Bitbucket"),(0,i.kt)("p",null,"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_BITBUCKET=true\n+     - WOODPECKER_BITBUCKET_CLIENT=95c0282573633eb25e82\n+     - WOODPECKER_BITBUCKET_SECRET=30f5064039e6b359e075\n\n  woodpecker-agent:\n    [...]\n")),(0,i.kt)("h2",{id:"registration"},"Registration"),(0,i.kt)("p",null,"You must register your application with Bitbucket in order to generate a client and secret. Navigate to your account settings and choose OAuth from the menu, and click Add Consumer."),(0,i.kt)("p",null,"Please use the Authorization callback URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nohighlight"},"http://woodpecker.mycompany.com/authorize\n")),(0,i.kt)("p",null,"Please also be sure to check the following permissions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nohighlight"},"Account:Email\nAccount:Read\nTeam Membership:Read\nRepositories:Read\nWebhooks:Read and Write\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"WOODPECKER_BITBUCKET=true # Set to true to enable the Bitbucket driver\n\nWOODPECKER_BITBUCKET_CLIENT=... # Bitbucket oauth2 client id\n\nWOODPECKER_BITBUCKET_SECRET=... # Bitbucket oauth2 client secret\n")),(0,i.kt)("h2",{id:"missing-features"},"Missing Features"),(0,i.kt)("p",null,"Merge requests are not currently supported. We are interested in patches to include this functionality. If you are interested in contributing to Woodpecker and submitting a patch please ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/fcMQqSMXJy"},"contact us"),"."))}d.isMDXComponent=!0}}]);