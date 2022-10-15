"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8772],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>k,toc:()=>h});var r=n(9613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={},m="Setup",k={unversionedId:"administration/setup",id:"administration/setup",title:"Setup",description:"A Woodpecker deployment consists of two parts:",source:"@site/docs/30-administration/00-setup.md",sourceDirName:"30-administration",slug:"/administration/setup",permalink:"/docs/next/administration/setup",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/00-setup.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status Badges",permalink:"/docs/next/usage/badges"},next:{title:"Server configuration",permalink:"/docs/next/administration/server-config"}},f={},h=[{value:"Installation",id:"installation",level:2},{value:"docker-compose",id:"docker-compose",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Database",id:"database",level:2},{value:"SSL",id:"ssl",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Behind a proxy",id:"behind-a-proxy",level:2}],v={toc:h};function g(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"setup"}),"Setup"),(0,r.kt)("p",null,"A Woodpecker deployment consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A server which is the heart of Woodpecker and ships the web interface."),(0,r.kt)("li",{parentName:"ul"},"Next to one server you can deploy any number of agents which will run the pipelines.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Each agent is able to process one pipeline step by default."),(0,r.kt)("p",{parentName:"blockquote"},"If you have 4 agents installed and connected to the Woodpecker server, your system will process 4 builds in parallel."),(0,r.kt)("p",{parentName:"blockquote"},"You can add more agents to increase the number of parallel builds or set the agent's ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_MAX_PROCS=1")," environment variable to increase the number of parallel builds for that agent.")),(0,r.kt)("h2",d({},{id:"installation"}),"Installation"),(0,r.kt)("p",null,"You can install Woodpecker on multiple ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("a",d({parentName:"li"},{href:"#docker-compose"}),"docker-compose")," with the official ",(0,r.kt)("a",d({parentName:"li"},{href:"/docs/next/downloads#docker-images"}),"container images")),(0,r.kt)("li",{parentName:"ul"},"By deploying to a ",(0,r.kt)("a",d({parentName:"li"},{href:"/docs/next/administration/kubernetes"}),"Kubernetes")," with manifests or Woodpeckers official Helm charts"),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("a",d({parentName:"li"},{href:"/docs/next/downloads"}),"binaries"))),(0,r.kt)("h3",d({},{id:"docker-compose"}),"docker-compose"),(0,r.kt)("p",null,"The below ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"docker-compose")," configuration can be used to start a Woodpecker server with a single agent."),(0,r.kt)("p",null,"It relies on a number of environment variables that you must set before running ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up"),". The variables are described below."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    image: woodpeckerci/woodpecker-server:latest\n    ports:\n      - 8000:8000\n    volumes:\n      - woodpecker-server-data:/var/lib/woodpecker/\n    environment:\n      - WOODPECKER_OPEN=true\n      - WOODPECKER_HOST=${WOODPECKER_HOST}\n      - WOODPECKER_GITHUB=true\n      - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n      - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\n  woodpecker-agent:\n    image: woodpeckerci/woodpecker-agent:latest\n    command: agent\n    restart: always\n    depends_on:\n      - woodpecker-server\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - WOODPECKER_SERVER=woodpecker-server:9000\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\nvolumes:\n  woodpecker-server-data:\n")),(0,r.kt)("p",null,"Woodpecker needs to know its own address. You must therefore provide the public address of it in ",(0,r.kt)("inlineCode",{parentName:"p"},"<scheme>://<hostname>")," format. Please omit trailing slashes:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_HOST=${WOODPECKER_HOST}\n")),(0,r.kt)("p",null,"As agents run pipeline steps as docker containers they require access to the host machine's Docker daemon:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  [...]\n  woodpecker-agent:\n    [...]\n+   volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n")),(0,r.kt)("p",null,"Agents require the server address for agent-to-server communication:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n    [...]\n    environment:\n+     - WOODPECKER_SERVER=woodpecker-server:9000\n")),(0,r.kt)("p",null,"The server and agents use a shared secret to authenticate communication. This should be a random string of your choosing and should be kept private. You can generate such string with ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl rand -hex 32"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n  woodpecker-agent:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n")),(0,r.kt)("h2",d({},{id:"authentication"}),"Authentication"),(0,r.kt)("p",null,"Authentication is done using OAuth and is delegated to your forge which is configured by using environment variables. The example above demonstrates basic GitHub integration."),(0,r.kt)("p",null,"See the complete reference for all supported forges ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/administration/forges/overview"}),"here"),"."),(0,r.kt)("h2",d({},{id:"database"}),"Database"),(0,r.kt)("p",null,"By default Woodpecker uses a SQLite database which requires zero installation or configuration. See the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/administration/database"}),"database settings")," page to further configure it or use MySQL or Postgres."),(0,r.kt)("h2",d({},{id:"ssl"}),"SSL"),(0,r.kt)("p",null,"Woodpecker supports SSL configuration by using Let's encrypt or by using own certificates. See the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/administration/ssl"}),"SSL guide"),"."),(0,r.kt)("h2",d({},{id:"metrics"}),"Metrics"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/administration/prometheus"}),"Prometheus endpoint")," is exposed."),(0,r.kt)("h2",d({},{id:"behind-a-proxy"}),"Behind a proxy"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/administration/proxy"}),"proxy guide")," if you want to see a setup behind Apache, Nginx, Caddy or ngrok."))}g.isMDXComponent=!0}}]);