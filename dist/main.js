!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],l=t.base?o[0]+t.base:o[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:g(f,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function h(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,p=0;function g(e,t){var n,i,r;if(t.singleton){var o=p++;n=m||(m=c(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=c(t),i=h.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);a[r].references--}for(var o=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var i=n(1),r=n.n(i)()((function(e){return e[1]}));r.push([e.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-decoration:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),t.a=r},function(e,t,n){"use strict";var i=n(1),r=n.n(i)()((function(e){return e[1]}));r.push([e.i,'body{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;font-family:"Montserrat",sans-serif}a{color:#7d1538}a:hover{color:#bc2c1a}#container{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100vw;height:100vh}#container #col1,#container #col2{width:80vw;display:flex;flex-direction:column;justify-content:center}#container #col2 #analysis-img{width:100%}@media only screen and (min-width: 768px){#container #col1{width:65vw;height:50vh}#container #col2{width:65vw;height:20vh;display:flex;align-items:center;justify-content:flex-start}#container #col2 #analysis-img{width:60%}}@media only screen and (min-width: 1025px){#container{flex-direction:row}#container #col1{width:50vw;height:100vh;margin:0 0 0 50px;padding:50px}#container #col2{width:50vw;height:100vh;margin:0 50px 0 0;justify-content:center}#container #col2 #analysis-img{height:auto;width:100%}}\n',""]),t.a=r},function(e,t,n){"use strict";var i=n(1),r=n.n(i)()((function(e){return e[1]}));r.push([e.i,'body{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;font-family:"Montserrat",sans-serif}a{color:#7d1538}a:hover{color:#bc2c1a}#container{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100vw;height:100vh}#container #col1,#container #col2{width:80vw;display:flex;flex-direction:column;justify-content:center}#container #col2 #analysis-img{width:100%}@media only screen and (min-width: 768px){#container #col1{width:65vw;height:50vh}#container #col2{width:65vw;height:20vh;display:flex;align-items:center;justify-content:flex-start}#container #col2 #analysis-img{width:60%}}@media only screen and (min-width: 1025px){#container{flex-direction:row}#container #col1{width:50vw;height:100vh;margin:0 0 0 50px;padding:50px}#container #col2{width:50vw;height:100vh;margin:0 50px 0 0;justify-content:center}#container #col2 #analysis-img{height:auto;width:100%}}form{background:rgba(0,0,0,0)}.title{color:#7d1538;font-family:"Montserrat",sans-serif;font-weight:400;font-size:5.5vw;line-height:3.5vh;margin-bottom:20px}.heavy-font{font-weight:700}.starter-form{overflow-y:hidden;transition-property:all;transition-duration:1.3s;transition-timing-function:cubic-bezier(0, 1, 0.5, 1)}.starter-form.closed{max-height:0}.starter-form .description{font-family:"Montserrat",sans-serif;font-size:3.5vw;line-height:4vw}.starter-form .description p{margin-bottom:20px}input,button{padding:2vw;width:100%;margin:0 0 20px 0;background:#d3f3ee;border:none;font-family:"Montserrat",sans-serif;font-size:3.5vw;color:#7d1538}button{margin:0 0 40px 0;color:#7d1538;text-align:left;font-size:3.5vw}button:hover{background:#7fb7be;cursor:pointer;transition:500ms}input::placeholder{color:#7d1538;font-family:"Montserrat",sans-serif;font-size:.9em}#disclaimer{color:#bc2c1a;font-size:0.7em;text-align:center}.form-loader{display:none}.form-loader.display-on{display:block;height:35vh;margin:10px 0;display:flex;justify-content:center;align-items:center}.form-loader.display-on .favicon{width:40px;height:40px;margin:100px auto;border-radius:100%;-webkit-animation:sk-scaleout 1.0s infinite ease-in-out;animation:sk-scaleout 1.0s infinite ease-in-out}.form-loader.display-on .favicon i{color:#7d1538;font-size:8vw}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}.form-results{display:none}.form-results.display-on{display:block;border-radius:5px;height:35vh;overflow-y:scroll;border:4px solid #e6e6e6;border-radius:5px;padding:10px}.form-results #results-intro{padding-bottom:20px}.form-results #results-intro #results-text{font-size:3.5vw}.form-results #results-intro #outlet{font-style:italic}.form-results .results-container{display:flex;flex-direction:row;flex-wrap:wrap;font-size:3.5vw}.form-results .results-container .results{font-weight:700;width:45%}.form-results .results-container .results-description{width:55%;font-size:3vw}.form-results .results-container .results-headers,.form-results .results-container .results,.form-results .results-container .results-description{display:flex;flex-direction:column}.form-results .results-container .results-headers div,.form-results .results-container .results div,.form-results .results-container .results-description div{background:#d3f3ee;color:#7d1538;margin:0 0 10px 0;height:25vw;padding:5px 10px;display:flex;align-items:center}.form-results .results-container .results-headers .meaning-cloud-data,.form-results .results-container .results .meaning-cloud-data,.form-results .results-container .results-description .meaning-cloud-data{word-wrap:break-word}.back-btn{display:none}.back-btn.display-on{display:block;margin-top:10px}@media only screen and (min-width: 768px){.title{font-size:3.5vw}.starter-form .description{font-size:2.5vw}input,button{font-size:2.5vw}.form-results #results-intro #results-text{font-size:2.5vw}.form-results .results-container{font-size:2.5vw}.form-results .results-container .results-description{font-size:2.5vw}}@media only screen and (min-width: 1024px){.title{font-size:4vh;line-height:5vh}.starter-form .description{font-size:.9em;line-height:3vh}input,button{padding:1vw;font-size:.9em;margin:10px 0}.form-loader .favicon i{font-size:5vw}.form-results #results-intro #results-text{font-size:3vh}.form-results .results-container{font-size:3vh}.form-results .results-container .results-description{font-size:3vh}}\n',""]),t.a=r},function(e,t,n){"use strict";var i=n(1),r=n.n(i)()((function(e){return e[1]}));r.push([e.i,'body{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;font-family:"Montserrat",sans-serif}a{color:#7d1538}a:hover{color:#bc2c1a}#container{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100vw;height:100vh}#container #col1,#container #col2{width:80vw;display:flex;flex-direction:column;justify-content:center}#container #col2 #analysis-img{width:100%}@media only screen and (min-width: 768px){#container #col1{width:65vw;height:50vh}#container #col2{width:65vw;height:20vh;display:flex;align-items:center;justify-content:flex-start}#container #col2 #analysis-img{width:60%}}@media only screen and (min-width: 1025px){#container{flex-direction:row}#container #col1{width:50vw;height:100vh;margin:0 0 0 50px;padding:50px}#container #col2{width:50vw;height:100vh;margin:0 50px 0 0;justify-content:center}#container #col2 #analysis-img{height:auto;width:100%}}header{font-size:4.5vw}header i{padding-right:2px}header #head-left{font-family:"Montserrat",sans-serif;position:absolute;top:0;left:0;width:100%;text-align:center;padding:20px;color:#7d1538}header #head-right{display:none}header .hamburger-icon{display:block;color:#7d1538;position:absolute;right:20px;top:20px;font-size:1.2em}header .hamburger-icon:hover{cursor:pointer}header .hamburger-none{display:none}header .mobile-nav{display:block;height:100vh;width:100vw;background:#d3f3ee;z-index:100;position:fixed;top:0}header .mobile-nav .nav-list{position:absolute;top:60px;right:60px;text-align:right;font-weight:300}header .mobile-nav .nav-list .nav-links{font-size:8vw;line-height:9vw}header .close-btn{display:none}header .close-btn-active{display:block;color:#7d1538;font-size:1.2em;position:absolute;top:20px;right:20px}header .close-btn-active:hover{cursor:pointer}@media only screen and (min-width: 768px){header{font-size:2.5vw}header #head-left{width:50%;text-align:left}header #head-right{font-family:"Montserrat",sans-serif;position:absolute;top:0;right:0;padding:20px;width:50%;text-align:right;display:flex;flex-direction:column;line-height:4vw}header .nav,header .hamburger-icon{display:none}}@media only screen and (min-width: 1024px){header{font-size:2vh}header #head-right{line-height:2.5vh;right:10px}}\n',""]),t.a=r},function(e,t,n){"use strict";n.r(t);const i=async(e="",t={})=>{try{console.log("DATA SENT TO SERVER"),fetch(e,{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-type":"application/json"},body:JSON.stringify({data:t})}).then(e=>e.json()).then(e=>{console.log("here is your data",e),function(e){console.log(e.url),document.querySelector(".form-results").classList.add("display-on"),document.querySelector(".form-loader").classList.toggle("display-on");let t=e.title.split(" - ",2),n=t[0],i=t[1].italics();document.querySelector("#title").innerHTML=n,document.querySelector("#outlet").innerHTML=i,document.querySelector("#score-tag").innerHTML=e.scoreTag,document.querySelector("#agreement").innerHTML=e.agreement,document.querySelector("#subjectivity").innerHTML=e.subjectivity,document.querySelector("#irony").innerHTML=e.irony}(e)})}catch(e){console.log(e)}};var r=n.p+"images/7cfabaae50ed6249cfc2919a29e3dc87-favicon.png",o=n.p+"images/68e3f26de79d719fec6e6e8ed6cc7424-analysis.svg";const a=document.querySelector("#favicon-img"),s=document.querySelector("#analysis-img");async function l(e){e.preventDefault(),document.querySelector(".starter-form").classList.toggle("closed"),document.querySelector(".form-loader").classList.toggle("display-on"),document.querySelector(".back-btn").classList.toggle("display-on");const t=function(e){try{return new URL(e).href}catch(e){return alert("Invalid URL!"),console.log("ERROR, INVALID URL:",e),!1}}(document.getElementById("name").value);await i("/passURL",{url:t})}a.href=r,s.src=o,document.querySelector("#submit-btn").addEventListener("click",l);const c=document.querySelector(".hamburger-icon"),d=document.querySelector(".close-btn"),u=()=>{c.classList.remove("hamburger-none"),document.querySelector("nav").classList.add("nav"),document.querySelector("nav").classList.remove("mobile-nav"),d.classList.remove("close-btn-active"),document.querySelector(".nav-list").innerHTML=""};c.addEventListener("click",()=>{c.classList.add("hamburger-none");const e=document.getElementsByClassName("nav-links");document.querySelector(".nav-list").innerHTML=`${e[0].outerHTML}<br>\n        ${e[1].outerHTML}<br>\n        ${e[2].outerHTML}<br>\n        ${e[3].outerHTML}<br>`,document.querySelector("nav").classList.add("mobile-nav"),document.querySelector("nav").classList.remove("nav"),d.classList.add("close-btn-active"),d.addEventListener("click",u),document.querySelector(".nav-list").addEventListener("click",u)});var f=n(0),h=n.n(f),m=n(2),p={insert:"head",singleton:!1},g=(h()(m.a,p),m.a.locals,n(3)),v={insert:"head",singleton:!1},y=(h()(g.a,v),g.a.locals,n(4)),b={insert:"head",singleton:!1},w=(h()(y.a,b),y.a.locals,n(5)),x={insert:"head",singleton:!1};h()(w.a,x),w.a.locals;console.log(l)}]);