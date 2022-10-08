"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7290],{9613:(e,I,i)=>{i.d(I,{Zo:()=>c,kt:()=>o});var t=i(9496);function M(e,I,i){return I in e?Object.defineProperty(e,I,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[I]=i,e}function g(e,I){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);I&&(t=t.filter((function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable}))),i.push.apply(i,t)}return i}function n(e){for(var I=1;I<arguments.length;I++){var i=null!=arguments[I]?arguments[I]:{};I%2?g(Object(i),!0).forEach((function(I){M(e,I,i[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(I){Object.defineProperty(e,I,Object.getOwnPropertyDescriptor(i,I))}))}return e}function l(e,I){if(null==e)return{};var i,t,M=function(e,I){if(null==e)return{};var i,t,M={},g=Object.keys(e);for(t=0;t<g.length;t++)i=g[t],I.indexOf(i)>=0||(M[i]=e[i]);return M}(e,I);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(t=0;t<g.length;t++)i=g[t],I.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(M[i]=e[i])}return M}var a=t.createContext({}),N=function(e){var I=t.useContext(a),i=I;return e&&(i="function"==typeof e?e(I):n(n({},I),e)),i},c=function(e){var I=N(e.components);return t.createElement(a.Provider,{value:I},e.children)},r={inlineCode:"code",wrapper:function(e){var I=e.children;return t.createElement(t.Fragment,{},I)}},j=t.forwardRef((function(e,I){var i=e.components,M=e.mdxType,g=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),j=N(i),o=M,u=j["".concat(a,".").concat(o)]||j[o]||r[o]||g;return i?t.createElement(u,n(n({ref:I},c),{},{components:i})):t.createElement(u,n({ref:I},c))}));function o(e,I){var i=arguments,M=I&&I.mdxType;if("string"==typeof e||M){var g=i.length,n=new Array(g);n[0]=j;var l={};for(var a in I)hasOwnProperty.call(I,a)&&(l[a]=I[a]);l.originalType=e,l.mdxType="string"==typeof e?e:M,n[1]=l;for(var N=2;N<g;N++)n[N]=i[N];return t.createElement.apply(null,n)}return t.createElement.apply(null,i)}j.displayName="MDXCreateElement"},6960:(e,I,i)=>{i.r(I),i.d(I,{assets:()=>D,contentTitle:()=>o,default:()=>m,frontMatter:()=>j,metadata:()=>u,toc:()=>d});var t=i(9613),M=Object.defineProperty,g=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,c=(e,I,i)=>I in e?M(e,I,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[I]=i,r=(e,I)=>{for(var i in I||(I={}))a.call(I,i)&&c(e,i,I[i]);if(l)for(var i of l(I))N.call(I,i)&&c(e,i,I[i]);return e};const j={},o="UI Development",u={unversionedId:"development/ui",id:"version-0.15/development/ui",title:"UI Development",description:"To develop the UI you need to install Node.js and Yarn. In addition it is recommended to use VS-Code with the recommended plugin selection to get features like auto-formatting, linting and typechecking. The UI is written with Vue 3 as Single-Page-Application accessing the Woodpecker REST api.",source:"@site/versioned_docs/version-0.15/92-development/03-ui.md",sourceDirName:"92-development",slug:"/development/ui",permalink:"/docs/development/ui",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/92-development/03-ui.md",tags:[],version:"0.15",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/development/getting-started"},next:{title:"Documentation",permalink:"/docs/development/docs"}},D={},d=[{value:"Setup",id:"setup",level:2},{value:"Tools and frameworks",id:"tools-and-frameworks",level:2}],s={toc:d};function m(e){var I,M=e,{components:c}=M,j=((e,I)=>{var i={};for(var t in e)a.call(e,t)&&I.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&l)for(var t of l(e))I.indexOf(t)<0&&N.call(e,t)&&(i[t]=e[t]);return i})(M,["components"]);return(0,t.kt)("wrapper",(I=r(r({},s),j),g(I,n({components:c,mdxType:"MDXLayout"}))),(0,t.kt)("h1",r({},{id:"ui-development"}),"UI Development"),(0,t.kt)("p",null,"To develop the UI you need to install ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/development/getting-started#nodejs--yarn"}),"Node.js and Yarn"),". In addition it is recommended to use VS-Code with the recommended plugin selection to get features like auto-formatting, linting and typechecking. The UI is written with ",(0,t.kt)("a",r({parentName:"p"},{href:"https://v3.vuejs.org/"}),"Vue 3")," as Single-Page-Application accessing the Woodpecker REST api."),(0,t.kt)("h2",r({},{id:"setup"}),"Setup"),(0,t.kt)("p",null,"The UI code is placed in ",(0,t.kt)("inlineCode",{parentName:"p"},"web/"),". Change to that folder in your terminal with ",(0,t.kt)("inlineCode",{parentName:"p"},"cd web/")," and install all dependencies by running ",(0,t.kt)("inlineCode",{parentName:"p"},"yarn install"),". For production builds the generated UI code is integrated into the Woodpecker server by using ",(0,t.kt)("a",r({parentName:"p"},{href:"https://pkg.go.dev/embed"}),"go-embed"),"."),(0,t.kt)("p",null,"Testing UI changes would require us to rebuild the UI after each adjustment to the code by running ",(0,t.kt)("inlineCode",{parentName:"p"},"yarn build")," and restarting the Woodpecker server. To avoid this you can make use of the dev-proxy integrated into the Woodpecker server. This integrated dev-proxy will forward all none api request to a separate http-server which will only serve the UI files."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"UI Proxy architecture",src:i(5074).Z,width:"1212",height:"532"})),(0,t.kt)("p",null,"Start the UI server locally with ",(0,t.kt)("a",r({parentName:"p"},{href:"https://stackoverflow.com/a/41429055/8461267"}),"hot-reloading")," by running: ",(0,t.kt)("inlineCode",{parentName:"p"},"yarn start"),". To enable the forwarding of requests to the UI server you have to enable the dev-proxy inside the Woodpecker server by adding ",(0,t.kt)("inlineCode",{parentName:"p"},"WOODPECKER_DEV_WWW_PROXY=http://localhost:8010")," to your ",(0,t.kt)("inlineCode",{parentName:"p"},".env")," file.\nAfter starting the Woodpecker server as explained in the ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/development/getting-started#debugging"}),"debugging")," section, you should now be able to access the UI under ",(0,t.kt)("a",r({parentName:"p"},{href:"http://localhost:8000"}),"http://localhost:8000"),"."),(0,t.kt)("h2",r({},{id:"tools-and-frameworks"}),"Tools and frameworks"),(0,t.kt)("p",null,"The following list contains some tools and frameworks used by the Woodpecker UI. For some points we added some guidelines / hints to help you developing."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://v3.vuejs.org/"}),"Vue 3"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"use ",(0,t.kt)("inlineCode",{parentName:"li"},"setup")," and composition api"),(0,t.kt)("li",{parentName:"ul"},"place (re-usable) components in ",(0,t.kt)("inlineCode",{parentName:"li"},"web/src/components/")),(0,t.kt)("li",{parentName:"ul"},"views should have a route in ",(0,t.kt)("inlineCode",{parentName:"li"},"web/src/router.ts")," and are located in ",(0,t.kt)("inlineCode",{parentName:"li"},"web/src/views/")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://windicss.org/"}),"Windicss")," (similar to Tailwind)",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"use Windicss classes where possible"),(0,t.kt)("li",{parentName:"ul"},"if needed extend the Windicss config to use new classes"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://vitejs.dev/"}),"Vite")," (similar to Webpack)"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"Typescript"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"avoid using ",(0,t.kt)("inlineCode",{parentName:"li"},"any")," and ",(0,t.kt)("inlineCode",{parentName:"li"},"unknown")," (the linter will prevent you from doing so anyways \ud83d\ude09)"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://eslint.org/"}),"eslint")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://github.com/johnsoncodehk/volar/"}),"Volar & vue-tsc")," for type-checking in .vue file",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"use the take-over mode of Volar as described by ",(0,t.kt)("a",r({parentName:"li"},{href:"https://github.com/johnsoncodehk/volar/discussions/471"}),"this guide"))))))}m.isMDXComponent=!0},5074:(e,I,i)=>{i.d(I,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyMTIgNTMyIiB3aWR0aD0iMTIxMiIgaGVpZ2h0PSI1MzIiPgogIDwhLS0gc3ZnLXNvdXJjZTpleGNhbGlkcmF3IC0tPgogIAogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICBAZm9udC1mYWNlIHsKICAgICAgICBmb250LWZhbWlseTogIlZpcmdpbCI7CiAgICAgICAgc3JjOiB1cmwoImh0dHBzOi8vZXhjYWxpZHJhdy5jb20vVmlyZ2lsLndvZmYyIik7CiAgICAgIH0KICAgICAgQGZvbnQtZmFjZSB7CiAgICAgICAgZm9udC1mYW1pbHk6ICJDYXNjYWRpYSI7CiAgICAgICAgc3JjOiB1cmwoImh0dHBzOi8vZXhjYWxpZHJhdy5jb20vQ2FzY2FkaWEud29mZjIiKTsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMTIiIGhlaWdodD0iNTMyIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjgwLjM0NjQ0NTEzMzY1MiAzODYuMzI0NTA0NjY2MjkyNTcpIHJvdGF0ZSg5LjAwMDU0MjY1NzE2MTAyNCA4MCAyNSkiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPmZvcndhcmQgcmVxdWVzdDwvdGV4dD48dGV4dCB4PSIwIiB5PSI0MyIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5pbiBkZXYgbW9kZTwvdGV4dD48L2c+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCAxNzEpIHJvdGF0ZSgwIDg1LjUgNDQuNSkiPjxwYXRoIGQ9Ik0yNS4zMyAxNC40NyBDMzIuNTQgOS4yOCwgNDUuOTQgMy43MywgNTcuNjggMS41NCBDNjkuNDEgLTAuNjYsIDgzLjQ3IDAuNzIsIDk1Ljc0IDEuMzIgQzEwOC4wMSAxLjkyLCAxMjEuMTcgMS42NiwgMTMxLjI4IDUuMTEgQzE0MS4zOCA4LjU3LCAxNDkuODcgMTYuMDgsIDE1Ni4zNiAyMi4wNCBDMTYyLjg1IDI4LjAxLCAxNjguMzIgMzQuODcsIDE3MC4yMyA0MC45IEMxNzIuMTQgNDYuOTMsIDE3MS45MSA1Mi4yNywgMTY3LjggNTguMjMgQzE2My42OSA2NC4xOSwgMTU0LjcxIDcyLjE2LCAxNDUuNTcgNzYuNjYgQzEzNi40MiA4MS4xNSwgMTI0LjM5IDgzLjA2LCAxMTIuOTIgODUuMiBDMTAxLjQ1IDg3LjM0LCA4OC45NiA4OS43MywgNzYuNzYgODkuNDkgQzY0LjU1IDg5LjI1LCA1MC40OCA4Ny4yNiwgMzkuNjggODMuNzUgQzI4Ljg4IDgwLjI1LCAxOC4zMSA3NC4xNiwgMTEuOTQgNjguNDkgQzUuNTcgNjIuODEsIDIuNDIgNTYuNDUsIDEuNDcgNDkuNzIgQzAuNTIgNDIuOTgsIC0xLjgxIDM1LjU4LCA2LjI1IDI4LjA2IEMxNC4zMSAyMC41MywgMzcuOTMgOS4wOSwgNDkuODMgNC41NSBDNjEuNzMgMC4wMSwgNzcuMDYgMC4yOSwgNzcuNjUgMC44MSBNMTQ4LjY3IDE3LjY3IEMxNTcuMzUgMjIuNiwgMTYxLjc5IDI4Ljk5LCAxNjQuOSAzNC44NCBDMTY4LjAxIDQwLjcsIDE2OS4zMSA0Ni43OCwgMTY3LjMxIDUyLjc5IEMxNjUuMzEgNTguNzksIDE2MC4wMyA2NS41NiwgMTUyLjkgNzAuODggQzE0NS43NiA3Ni4yLCAxMzQuNTUgODEuMjEsIDEyNC40OSA4NC43MSBDMTE0LjQ0IDg4LjIxLCAxMDQuMDcgOTIuMjIsIDkyLjU3IDkxLjkxIEM4MS4wNyA5MS42LCA2Ni44NSA4NS41MSwgNTUuNDcgODIuODcgQzQ0LjA5IDgwLjIzLCAzMy4wNyA4MC44NiwgMjQuMyA3Ni4wOCBDMTUuNTIgNzEuMywgNi43NiA2MS4wOSwgMi44IDU0LjE5IEMtMS4xNyA0Ny4yOSwgLTEuMjYgNDAuODIsIDAuNDkgMzQuNjggQzIuMjQgMjguNTQsIDYuMDggMjIuMDEsIDEzLjI5IDE3LjM1IEMyMC41IDEyLjY4LCAzMi4xMyA5LjM2LCA0My43NSA2LjcxIEM1NS4zNyA0LjA1LCA3MC4yNiAxLjcxLCA4MyAxLjQgQzk1Ljc0IDEuMSwgMTA5LjE1IDIuNTYsIDEyMC4yIDQuODcgQzEzMS4yNSA3LjE4LCAxNDQuOCAxMy43MywgMTQ5LjI5IDE1LjI1IEMxNTMuNzggMTYuNzcsIDE0Ny43NiAxMy41MywgMTQ3LjE3IDEzLjk2IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4MiAxMCkgcm90YXRlKDAgMTM3LjUgMjQwKSI+PHBhdGggZD0iTTAuMDEgLTAuNTIgQzgxLjcgLTAuNzYsIDE1OS4zOSAzLjI0LCAyNzQuNiAxLjczIE0xLjI3IDAuOTkgQzczLjIxIDQuNCwgMTQ2LjIxIDIuNTgsIDI3NS43MSAwLjgyIE0yNzYuMTUgLTAuMTggQzI3Mi45IDE1Ny4zNCwgMjcwLjg2IDMxMS41NiwgMjc1LjY4IDQ3OS4wOSBNMjc0Ljc3IDAuNjUgQzI3NS42NSAxMTMuODEsIDI3Ni42IDIyNy41LCAyNzUuNjcgNDc5LjE5IE0yNzQuNjUgNDgwLjU5IEMxODYuMDcgNDgwLjY4LCA5Ni41NyA0NzUuNzYsIC0wLjYxIDQ4Mi45MiBNMjc1LjQzIDQ3OC44IEMyMTguMTQgNDc1LjI2LCAxNjEuMjkgNDc3LjY2LCAxLjU0IDQ4MS4zOSBNLTAuMzEgNDc4LjQ4IEMtMy45NSAzNzguNTIsIC00Ljk3IDI3OC45NiwgLTAuMjMgMC42NyBNMC40MyA0ODAuMDEgQy0xLjczIDI5OS4xMSwgLTIuMjggMTE5LjUsIDAuMDEgLTAuMTkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTA5IDM2Nikgcm90YXRlKDAgMTQ2LjUgNzgpIj48cGF0aCBkPSJNMi40NCAtMC4zOCBDMTE4LjQ3IC00LjAzLCAyMzQuMzggLTUuMzMsIDI5NS40MyAxLjkgTS0wLjc1IDAuNjggQzk1LjQ5IC0xLjA1LCAxODguMTggLTIuNDcsIDI5My45OSAtMC4xNSBNMjkxLjg2IDEuNTcgQzI5My4yNSA1Ni4wNSwgMjk2LjUzIDExOC42NSwgMjkxLjkyIDE1OS4wMSBNMjkzLjEgMS41NCBDMjkxLjQ0IDM3LjEsIDI5My43MSA3Mi40OCwgMjkyLjc3IDE1Ni4zOCBNMjkwLjc4IDE1NS40MSBDMjE1Ljc4IDE1MC4xMSwgMTM1LjU5IDE1MC40LCAwLjgyIDE1My42OSBNMjk0LjEzIDE1Ny40OCBDMjAwLjI5IDE1Ni40NywgMTA2LjE2IDE1OC44LCAtMC4yNyAxNTQuNyBNLTEuODcgMTU1LjQ3IEM0IDExNS45OSwgNC4yNCA3Mi41MSwgMS45NyAwLjA1IE0xLjg4IDE1Ni4wMyBDMC40MSAxMDcuMiwgLTAuNzggNTcuNTQsIC0wLjcyIDAuNjgiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkzOSA0MTkpIHJvdGF0ZSgwIDExNi41IDI1KSI+PHRleHQgeD0iMTE2LjUiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5VSSBTZXJ2ZXIgPC90ZXh0Pjx0ZXh0IHg9IjExNi41IiB5PSI0MyIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+UG9ydCA4MDEwPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjggMzMpIHJvdGF0ZSgwIDkwLjUgMTIuNSkiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPldvb2RwZWNrZXIgU2VydmVyPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MyAyMDMpIHJvdGF0ZSgwIDM5IDEyLjUpIj48dGV4dCB4PSIwIiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5Ccm93c2VyPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTcgNzEpIHJvdGF0ZSgwIDgzLjUgODcuNSkiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPlBvcnQgODAwMDwvdGV4dD48dGV4dCB4PSIwIiB5PSI0MyIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj48L3RleHQ+PHRleHQgeD0iMCIgeT0iNjgiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwcHgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+L2xvZ2luPC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjkzIiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPi9sb2dvdXQ8L3RleHQ+PHRleHQgeD0iMCIgeT0iMTE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPi9hcGkvLi4uPC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjE0MyIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj4vYXBpL3dlYi1jb25maWcuanM8L3RleHQ+PHRleHQgeD0iMCIgeT0iMTY4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPi9zdHJlYW08L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwMSAzNDYpIHJvdGF0ZSgwIDEwMCAyNSkiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPkV2ZXJ5IG90aGVyIHJlcXVlc3Q8L3RleHQ+PHRleHQgeD0iMCIgeT0iNDMiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwcHgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+KDQwNCBIYW5kbGVyKTwvdGV4dD48L2c+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODYuNjY0NDIyNDM2NDMxMSAyMTQuOTM1NDI4OTYzMjI5MDcpIHJvdGF0ZSgwIDkyLjg5MTQ4NDAyOTk2MzY0IDEuODI1NjEwMzczNTQxNzM1NSkiPjxwYXRoIGQ9Ik0tMC4zNCAtMS4wNiBDMzAuNjkgLTAuNDUsIDE1NS4wMiAzLjg2LCAxODYuMTIgNC43MiBNMS42OSAwLjk5IEMzMi42NCAxLjc5LCAxNTQuOTEgMi4yOCwgMTg1LjY0IDMuMDMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Ni42NjQ0MjI0MzY0MzExIDIxNC45MzU0Mjg5NjMyMjkwNykgcm90YXRlKDAgOTIuODkxNDg0MDI5OTYzNjQgMS44MjU2MTAzNzM1NDE3MzU1KSI+PHBhdGggZD0iTTE1NS41NCAxNC40MSBDMTY3LjAzIDExLjc5LCAxNzQuMzYgOC41OCwgMTg2LjAyIDIuMTkgTTE1Ny4yMyAxMi41NiBDMTY3Ljk1IDEwLjQ3LCAxNzcuMjcgNi45MywgMTg2LjMxIDIuMDQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Ni42NjQ0MjI0MzY0MzExIDIxNC45MzU0Mjg5NjMyMjkwNykgcm90YXRlKDAgOTIuODkxNDg0MDI5OTYzNjQgMS44MjU2MTAzNzM1NDE3MzU1KSI+PHBhdGggZD0iTTE1NS44MSAtNi4xMSBDMTY3LjM5IC0yLjYzLCAxNzQuNjQgMC4yNiwgMTg2LjAyIDIuMTkgTTE1Ny41IC03Ljk2IEMxNjguMTQgLTMuMDEsIDE3Ny4zNiAwLjUsIDE4Ni4zMSAyLjA0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48L2c+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NzAuMjk4ODE0MDc4MDA0MiAzOTYuMTM2OTU1OTYxODA0OSkgcm90YXRlKDAgMTE3LjQxMzk0NDcwMzU0ODYyIDE4LjgxNDQ2MTYzOTE0MTY1NSkiPjxwYXRoIGQ9Ik0tMC40NSAtMC4wNiBDMzguNjMgNi4zNCwgMTk1Ljc2IDMyLjY4LCAyMzUuMjggMzguNzYgTTEuNTEgLTEuMTMgQzQwLjMyIDQuOTIsIDE5NC45NiAzMC44NywgMjM0LjExIDM3LjI1IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NzAuMjk4ODE0MDc4MDA0MiAzOTYuMTM2OTU1OTYxODA0OSkgcm90YXRlKDAgMTE3LjQxMzk0NDcwMzU0ODYyIDE4LjgxNDQ2MTYzOTE0MTY1NSkiPjxwYXRoIGQ9Ik0yMDQuNTMgNDIuMDcgQzIxNy4zOCA0Mi41MSwgMjI0LjM0IDQwLjQ4LCAyMzQuMDUgMzYuNTIgTTIwNS4yMiA0Mi44MiBDMjE1LjkgNDEuMDEsIDIyNS45MSAzOC4wNCwgMjM0LjgxIDM2LjQ0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NzAuMjk4ODE0MDc4MDA0MiAzOTYuMTM2OTU1OTYxODA0OSkgcm90YXRlKDAgMTE3LjQxMzk0NDcwMzU0ODYyIDE4LjgxNDQ2MTYzOTE0MTY1NSkiPjxwYXRoIGQ9Ik0yMDcuODggMjEuODIgQzIxOS41NiAyOS42OSwgMjI1LjMgMzUuMDksIDIzNC4wNSAzNi41MiBNMjA4LjU3IDIyLjU3IEMyMTcuOTIgMjcuOTQsIDIyNi43NSAzMi4xNCwgMjM0LjgxIDM2LjQ0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"}}]);