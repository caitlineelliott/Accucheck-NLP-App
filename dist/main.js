!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:g(f,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=m||(m=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-decoration:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),t.a=o},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,'body{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:"Montserrat",sans-serif}a{color:#7d1538}a:hover{color:#bc2c1a}#container{display:flex;flex-direction:row;align-items:center;justify-content:center;width:75vw;height:100vh}#container #col1{width:50vw;padding:0 50px}#container #col2{width:50vw;padding:10px}\n',""]),t.a=o},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,'body{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:"Montserrat",sans-serif}a{color:#7d1538}a:hover{color:#bc2c1a}#container{display:flex;flex-direction:row;align-items:center;justify-content:center;width:75vw;height:100vh}#container #col1{width:50vw;padding:0 50px}#container #col2{width:50vw;padding:10px}form{background:#fff}.title{color:#7d1538;font-family:"Montserrat",sans-serif;font-weight:400;font-size:4vh;width:32vw;line-height:5vh;margin-bottom:20px}.heavy-font{font-weight:700}.starter-form{overflow-y:hidden;max-height:300px;transition-property:all;transition-duration:1.3s;transition-timing-function:cubic-bezier(0, 1, 0.5, 1);background:white}.starter-form.closed{max-height:0}.starter-form .description{line-height:3vh;margin-bottom:10px;font-family:"Montserrat",sans-serif;font-size:.9em}input,button{padding:1vw;width:100%;margin:10px 0;background:#d3f3ee;border:none;font-family:"Montserrat",sans-serif;font-size:.9em;color:#7d1538}button{color:#7d1538;text-align:left;font-size:.9em}button:hover{background:#7fb7be;cursor:pointer;transition:500ms}input::placeholder{color:#7d1538;font-family:"Montserrat",sans-serif;font-size:.9em}#disclaimer{color:#bc2c1a;font-size:0.7em;text-align:center}.form-loader{display:none}.form-loader.display-on{display:block;height:35vh;margin:10px 0;display:flex;justify-content:center;align-items:center}.form-loader.display-on .favicon{width:40px;height:40px;margin:100px auto;border-radius:100%;-webkit-animation:sk-scaleout 1.0s infinite ease-in-out;animation:sk-scaleout 1.0s infinite ease-in-out}.form-loader.display-on .favicon i{color:#7d1538;font-size:3vw}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}.form-results{display:none}.form-results.display-on{display:block;height:35vh;padding:20px;margin:20px 0;border:8px solid #e6e6e6;border-radius:5px}.form-results #results-intro{line-height:1.25vh;height:4vh}.form-results #results-intro #results-text{font-size:1.25vh}.form-results #results-intro #outlet{font-style:italic}.form-results .results-container{margin:20px 0;display:flex;flex-direction:row;flex-wrap:wrap;font-size:0.9em}.form-results .results-container .results{font-weight:700;width:25%}.form-results .results-container .results-description{width:75%;font-size:0.85em}.form-results .results-container .results-headers,.form-results .results-container .results,.form-results .results-container .results-description{display:flex;flex-direction:column}.form-results .results-container .results-headers div,.form-results .results-container .results div,.form-results .results-container .results-description div{background:#d3f3ee;color:#7d1538;margin:0 0 10px 0;height:2.5vw;padding:5px 10px;display:flex;align-items:center}.back-btn{display:none}.back-btn.display-on{display:block;margin-top:10px}\n',""]),t.a=o},function(e,t,n){"use strict";var r=n(1),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,'body{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:"Montserrat",sans-serif}a{color:#7d1538}a:hover{color:#bc2c1a}#container{display:flex;flex-direction:row;align-items:center;justify-content:center;width:75vw;height:100vh}#container #col1{width:50vw;padding:0 50px}#container #col2{width:50vw;padding:10px}header i{padding-right:2px}header #head-left{font-family:"Montserrat",sans-serif;position:absolute;top:0;left:0;padding:20px;color:#7d1538}header #head-right{font-family:"Montserrat",sans-serif;position:absolute;top:0;right:20px;padding:20px;width:30%;text-align:right;display:flex;flex-direction:row;justify-content:space-between}\n',""]),t.a=o},function(e,t,n){"use strict";n.r(t);const r=async(e="",t={})=>{try{console.log("DATA SENT TO SERVER"),fetch(e,{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-type":"application/json"},body:JSON.stringify({data:t})}).then(e=>e.json()).then(e=>{console.log("here is your data",e),function(e){console.log(e.url),document.querySelector(".form-results").classList.add("display-on"),document.querySelector(".form-loader").classList.toggle("display-on");let t=e.title.split(" - ",2),n=t[0],r=t[1].italics();document.querySelector("#title").innerHTML=n,document.querySelector("#outlet").innerHTML=r,document.querySelector("#score-tag").innerHTML=e.scoreTag,document.querySelector("#agreement").innerHTML=e.agreement,document.querySelector("#subjectivity").innerHTML=e.subjectivity,document.querySelector("#irony").innerHTML=e.irony}(e)})}catch(e){console.log(e)}};var o=n.p+"images/7cfabaae50ed6249cfc2919a29e3dc87-favicon.png",i=n.p+"images/68e3f26de79d719fec6e6e8ed6cc7424-analysis.svg";const a=document.querySelector("#favicon-img"),s=document.querySelector("#analysis-img");async function l(e){e.preventDefault(),document.querySelector(".starter-form").classList.toggle("closed"),document.querySelector(".form-loader").classList.toggle("display-on"),document.querySelector(".back-btn").classList.toggle("display-on");const t=function(e){try{return new URL(e).href}catch(e){return alert("Invalid URL!"),console.log("ERROR, INVALID URL:",e),!1}}(document.getElementById("name").value);await r("/passURL",{url:t})}a.href=o,s.src=i,document.querySelector("#submit-btn").addEventListener("click",l);var c=n(0),d=n.n(c),u=n(2),f={insert:"head",singleton:!1},p=(d()(u.a,f),u.a.locals,n(3)),m={insert:"head",singleton:!1},h=(d()(p.a,m),p.a.locals,n(4)),g={insert:"head",singleton:!1},y=(d()(h.a,g),h.a.locals,n(5)),b={insert:"head",singleton:!1};d()(y.a,b),y.a.locals;console.log(l)}]);