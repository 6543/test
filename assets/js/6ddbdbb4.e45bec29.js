"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8981],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=c,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var n=r(9613),c=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={},f="Architecture",m={unversionedId:"development/architecture",id:"version-0.15/development/architecture",title:"Architecture",description:"Package architecture",source:"@site/versioned_docs/version-0.15/92-development/05-architecture.md",sourceDirName:"92-development",slug:"/development/architecture",permalink:"/docs/development/architecture",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/92-development/05-architecture.md",tags:[],version:"0.15",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/development/docs"},next:{title:"Guides",permalink:"/docs/development/guides"}},v={},y=[{value:"Package architecture",id:"package-architecture",level:2},{value:"System architecture",id:"system-architecture",level:2}],b={toc:y};function h(e){var t,c=e,{components:u}=c,d=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(c,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),d),o(t,a({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"architecture"}),"Architecture"),(0,n.kt)("h2",s({},{id:"package-architecture"}),"Package architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Woodpecker architecture",src:r(5296).Z,width:"1530",height:"1110"})),(0,n.kt)("h2",s({},{id:"system-architecture"}),"System architecture"),(0,n.kt)("p",null,"TODO"))}h.isMDXComponent=!0},5296:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/woodpecker-architecture-3929270c89a1fbf3a72f17aff8bd23e5.png"}}]);