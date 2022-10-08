"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5945],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=s(r),d=o,m=k["".concat(l,".").concat(d)]||k[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>k,metadata:()=>m,toc:()=>_});var n=r(9613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e};const k={},d="Bitbucket Server",m={unversionedId:"administration/vcs/bitbucket_server",id:"version-0.15/administration/vcs/bitbucket_server",title:"Bitbucket Server",description:"Woodpecker comes with experimental support for Bitbucket Server, formerly known as Atlassian Stash. To enable Bitbucket Server you should configure the Woodpecker container using the following environment variables:",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/60-bitbucket_server.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/bitbucket_server",permalink:"/docs/administration/vcs/bitbucket_server",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/60-bitbucket_server.md",tags:[],version:"0.15",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitbucket",permalink:"/docs/administration/vcs/bitbucket"},next:{title:"Gogs",permalink:"/docs/administration/vcs/gogs"}},v={},_=[{value:"Private Key File",id:"private-key-file",level:2},{value:"Service Account",id:"service-account",level:2},{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_STASH</code>",id:"woodpecker_stash",level:3},{value:"<code>WOODPECKER_STASH_URL</code>",id:"woodpecker_stash_url",level:3},{value:"<code>WOODPECKER_STASH_CONSUMER_KEY</code>",id:"woodpecker_stash_consumer_key",level:3},{value:"<code>WOODPECKER_STASH_CONSUMER_RSA</code>",id:"woodpecker_stash_consumer_rsa",level:3},{value:"<code>WOODPECKER_STASH_CONSUMER_RSA_STRING</code>",id:"woodpecker_stash_consumer_rsa_string",level:3},{value:"<code>WOODPECKER_STASH_GIT_USERNAME</code>",id:"woodpecker_stash_git_username",level:3},{value:"<code>WOODPECKER_STASH_GIT_PASSWORD</code>",id:"woodpecker_stash_git_password",level:3},{value:"<code>WOODPECKER_STASH_SKIP_VERIFY</code>",id:"woodpecker_stash_skip_verify",level:3}],S={toc:_};function b(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},S),p),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"bitbucket-server"}),"Bitbucket Server"),(0,n.kt)("p",null,"Woodpecker comes with experimental support for Bitbucket Server, formerly known as Atlassian Stash. To enable Bitbucket Server you should configure the Woodpecker container using the following environment variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_STASH=true\n+     - WOODPECKER_STASH_GIT_USERNAME=foo\n+     - WOODPECKER_STASH_GIT_PASSWORD=bar\n+     - WOODPECKER_STASH_CONSUMER_KEY=95c0282573633eb25e82\n+     - WOODPECKER_STASH_CONSUMER_RSA=/etc/bitbucket/key.pem\n+     - WOODPECKER_STASH_URL=http://stash.mycompany.com\n    volumes:\n+     - /path/to/key.pem:/path/to/key.pem\n\n  woodpecker-agent:\n    [...]\n")),(0,n.kt)("h2",u({},{id:"private-key-file"}),"Private Key File"),(0,n.kt)("p",null,"The OAuth process in Bitbucket server requires a private and a public RSA certificate. This is how you create the private RSA certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-nohighlight"}),"openssl genrsa -out /etc/bitbucket/key.pem 1024\n")),(0,n.kt)("p",null,"This stores the private RSA certificate in ",(0,n.kt)("inlineCode",{parentName:"p"},"key.pem"),". The next command generates the public RSA certificate and stores it in ",(0,n.kt)("inlineCode",{parentName:"p"},"key.pub"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-nohighlight"}),"openssl rsa -in /etc/bitbucket/key.pem -pubout >> /etc/bitbucket/key.pub\n")),(0,n.kt)("p",null,"Please note that the private key file can be mounted into your Woodpecker container at runtime or as an environment variable"),(0,n.kt)("p",null,"Private key file mounted into your Woodpecker container at runtime as a volume."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n      - WOODPECKER_STASH=true\n      - WOODPECKER_STASH_GIT_USERNAME=foo\n      - WOODPECKER_STASH_GIT_PASSWORD=bar\n      - WOODPECKER_STASH_CONSUMER_KEY=95c0282573633eb25e82\n+     - WOODPECKER_STASH_CONSUMER_RSA=/etc/bitbucket/key.pem\n      - WOODPECKER_STASH_URL=http://stash.mycompany.com\n+  volumes:\n+     - /etc/bitbucket/key.pem:/etc/bitbucket/key.pem\n\n  woodpecker-agent:\n    [...]\n")),(0,n.kt)("p",null,"Private key as environment variable"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n      - WOODPECKER_STASH=true\n      - WOODPECKER_STASH_GIT_USERNAME=foo\n      - WOODPECKER_STASH_GIT_PASSWORD=bar\n      - WOODPECKER_STASH_CONSUMER_KEY=95c0282573633eb25e82\n+     - WOODPECKER_STASH_CONSUMER_RSA_STRING=contentOfPemKeyAsString\n      - WOODPECKER_STASH_URL=http://stash.mycompany.com\n\n  woodpecker-agent:\n    [...]\n")),(0,n.kt)("h2",u({},{id:"service-account"}),"Service Account"),(0,n.kt)("p",null,"Woodpecker uses ",(0,n.kt)("inlineCode",{parentName:"p"},"git+https")," to clone repositories, however, Bitbucket Server does not currently support cloning repositories with oauth token. To work around this limitation, you must create a service account and provide the username and password to Woodpecker. This service account will be used to authenticate and clone private repositories."),(0,n.kt)("h2",u({},{id:"registration"}),"Registration"),(0,n.kt)("p",null,"You must register your application with Bitbucket Server in order to generate a consumer key. Navigate to your account settings and choose Applications from the menu, and click Register new application. Now copy & paste the text value from ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/bitbucket/key.pub")," into the ",(0,n.kt)("inlineCode",{parentName:"p"},"Public Key")," in the incoming link part of the application registration."),(0,n.kt)("p",null,"Please use ",(0,n.kt)("a",u({parentName:"p"},{href:"http://woodpecker.mycompany.com/authorize"}),"http://woodpecker.mycompany.com/authorize")," as the Authorization callback URL."),(0,n.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,n.kt)("h3",u({},{id:"woodpecker_stash"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Enables the Bitbucket Server driver."),(0,n.kt)("h3",u({},{id:"woodpecker_stash_url"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_URL")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the Bitbucket Server address."),(0,n.kt)("h3",u({},{id:"woodpecker_stash_consumer_key"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_CONSUMER_KEY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures your Bitbucket Server consumer key."),(0,n.kt)("h3",u({},{id:"woodpecker_stash_consumer_rsa"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_CONSUMER_RSA")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures the path to your Bitbucket Server private key file."),(0,n.kt)("h3",u({},{id:"woodpecker_stash_consumer_rsa_string"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_CONSUMER_RSA_STRING")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"Configures your Bitbucket Server private key."),(0,n.kt)("h3",u({},{id:"woodpecker_stash_git_username"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_GIT_USERNAME")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,n.kt)("h3",u({},{id:"woodpecker_stash_git_password"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_GIT_PASSWORD")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,n.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,n.kt)("h3",u({},{id:"woodpecker_stash_skip_verify"}),(0,n.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_STASH_SKIP_VERIFY")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("p",null,"Configure if SSL verification should be skipped."))}b.isMDXComponent=!0}}]);