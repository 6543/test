"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[333],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4158:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var t=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],p={},s="Proxy",l={unversionedId:"administration/proxy",id:"administration/proxy",isDocsHomePage:!1,title:"Proxy",description:"Apache",source:"@site/docs/30-administration/70-proxy.md",sourceDirName:"30-administration",slug:"/administration/proxy",permalink:"/docs/administration/proxy",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/70-proxy.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSL",permalink:"/docs/administration/ssl"},next:{title:"Kubernetes",permalink:"/docs/administration/kubernetes"}},c=[{value:"Apache",id:"apache",children:[],level:2},{value:"Nginx",id:"nginx",children:[],level:2},{value:"Caddy",id:"caddy",children:[],level:2},{value:"Ngrok",id:"ngrok",children:[],level:2}],d={toc:c};function u(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proxy"},"Proxy"),(0,a.kt)("h2",{id:"apache"},"Apache"),(0,a.kt)("p",null,"This guide provides a brief overview for installing Woodpecker server behind the Apache2 webserver. This is an example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nohighlight"},'ProxyPreserveHost On\n\nRequestHeader set X-Forwarded-Proto "https"\n\nProxyPass / http://127.0.0.1:8000/\nProxyPassReverse / http://127.0.0.1:8000/\n')),(0,a.kt)("p",null,"You must have the below Apache modules installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nohighlight"},"a2enmod proxy\na2enmod proxy_http\n")),(0,a.kt)("p",null,"You must configure Apache to set ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto")," when using https."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'ProxyPreserveHost On\n\n+RequestHeader set X-Forwarded-Proto "https"\n\nProxyPass / http://127.0.0.1:8000/\nProxyPassReverse / http://127.0.0.1:8000/\n')),(0,a.kt)("h2",{id:"nginx"},"Nginx"),(0,a.kt)("p",null,"This guide provides a basic overview for installing Woodpecker server behind the nginx webserver. For more advanced configuration options please consult the official nginx ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/admin-guide/"},"documentation"),"."),(0,a.kt)("p",null,"Example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name woodpecker.example.com;\n\n    location / {\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header Host $http_host;\n\n        proxy_pass http://127.0.0.1:8000;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_buffering off;\n\n        chunked_transfer_encoding off;\n    }\n}\n")),(0,a.kt)("p",null,"You must configure the proxy to set ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded")," proxy headers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"server {\n    listen 80;\n    server_name woodpecker.example.com;\n\n    location / {\n+       proxy_set_header X-Forwarded-For $remote_addr;\n+       proxy_set_header X-Forwarded-Proto $scheme;\n\n        proxy_pass http://127.0.0.1:8000;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_buffering off;\n\n        chunked_transfer_encoding off;\n    }\n}\n")),(0,a.kt)("h2",{id:"caddy"},"Caddy"),(0,a.kt)("p",null,"This guide provides a brief overview for installing Woodpecker server behind the ",(0,a.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy webserver"),". This is an example caddyfile proxy configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nohighlight"},"woodpecker.mycompany.com {\n    gzip {\n        not /stream/\n    }\n    proxy / localhost:8000 {\n        websocket\n        transparent\n    }\n}\n")),(0,a.kt)("p",null,"You must disable gzip compression for streamed data otherwise the live updates won't be instant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker.mycompany.com {\n+   gzip {\n+       not /stream/\n+   }\n    proxy / localhost:8000 {\n        websocket\n        transparent\n    }\n}\n")),(0,a.kt)("p",null,"You must configure the proxy to enable websocket upgrades:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker.mycompany.com {\n    gzip {\n        not /stream/\n    }\n    proxy / localhost:8000 {\n+       websocket\n        transparent\n    }\n}\n")),(0,a.kt)("p",null,"You must configure the proxy to include ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded")," headers using the ",(0,a.kt)("inlineCode",{parentName:"p"},"transparent")," directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"woodpecker.mycompany.com {\n    gzip {\n        not /stream/\n    }\n    proxy / localhost:8000 {\n        websocket\n+       transparent\n    }\n}\n")),(0,a.kt)("h2",{id:"ngrok"},"Ngrok"),(0,a.kt)("p",null,"After installing ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok"),", open a new console and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http 80\n")),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST")," (for example in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),") to the ngrok url (usually xxx.ngrok.io) and start the server."))}u.isMDXComponent=!0}}]);