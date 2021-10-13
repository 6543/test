"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[620],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,k=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return n?o.createElement(k,c(c({ref:t},p),{},{components:n})):o.createElement(k,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=l;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],a={},s="Prometheus",u={unversionedId:"administration/prometheus",id:"administration/prometheus",isDocsHomePage:!1,title:"Prometheus",description:"Woodpecker is compatible with Prometheus and exposes a /metrics endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges.",source:"@site/docs/30-administration/90-prometheus.md",sourceDirName:"30-administration",slug:"/administration/prometheus",permalink:"/docs/administration/prometheus",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/90-prometheus.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/administration/kubernetes"},next:{title:"CLI",permalink:"/docs/cli"}},p=[{value:"Authorization",id:"authorization",children:[]},{value:"Metric Reference",id:"metric-reference",children:[]}],d={toc:p};function l(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prometheus"},"Prometheus"),(0,i.kt)("p",null,"Woodpecker is compatible with Prometheus and exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n    bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"An administrator will need to generate a user api token and configure in the prometheus configuration file as a bearer token. Please see the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n+   bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,i.kt)("h2",{id:"metric-reference"},"Metric Reference"),(0,i.kt)("p",null,"List of prometheus metrics specific to Woodpecker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# HELP woodpecker_build_count Build count.\n# TYPE woodpecker_build_count counter\nwoodpecker_build_count{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\nwoodpecker_build_count{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\n# HELP woodpecker_build_time Build time.\n# TYPE woodpecker_build_time gauge\nwoodpecker_build_time{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 116\nwoodpecker_build_time{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 155\n# HELP woodpecker_build_total_count Total number of builds.\n# TYPE woodpecker_build_total_count gauge\nwoodpecker_build_total_count 1025\n# HELP woodpecker_pending_jobs Total number of pending build processes.\n# TYPE woodpecker_pending_jobs gauge\nwoodpecker_pending_jobs 0\n# HELP woodpecker_repo_count Total number of repos.\n# TYPE woodpecker_repo_count gauge\nwoodpecker_repo_count 9\n# HELP woodpecker_running_jobs Total number of running build processes.\n# TYPE woodpecker_running_jobs gauge\nwoodpecker_running_jobs 0\n# HELP woodpecker_user_count Total number of users.\n# TYPE woodpecker_user_count gauge\nwoodpecker_user_count 1\n# HELP woodpecker_waiting_jobs Total number of builds waiting on deps.\n# TYPE woodpecker_waiting_jobs gauge\nwoodpecker_waiting_jobs 0\n# HELP woodpecker_worker_count Total number of workers.\n# TYPE woodpecker_worker_count gauge\nwoodpecker_worker_count 4\n')))}l.isMDXComponent=!0}}]);