!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},c=(r(o,a),o.locals?o.locals:{});e.exports=c},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],l=n[u]||0,d="".concat(u," ").concat(l);n[u]=l+1;var s=i(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(c[s].references++,c[s].updater(f)):c.push({identifier:d,updater:h(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function h(e,t){var n,r,o;if(t.singleton){var a=b++;n=m||(m=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);c[o].references--}for(var a=u(e,t),l=0;l<n.length;l++){var d=i(n[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=a}}}},function(e,t,n){},function(e,t,n){"use strict";function r(e,t,n=""){let r=document.createElement(""+e);return""!==t&&r.classList.add(t),""!==n&&(r.id=n),r}function o(e,t,n){let r=document.createElement(""+e);return r.htmlFor=""+n,r.classList.add(t),r}function a(e){let t=r("input","",e);return t.type="radio",t.name="tab",t}function c(){let e=document.querySelector(".content"),t=function(){let e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("h4"),r=document.createElement("p");return t.textContent="Canada's Space Crab Shack",n.textContent="Why Canada's Space Crab Shack?",r.textContent="We love crabs. Especially space crabs. And we cook them good, too.",e.append(t,n,r),e}();e.appendChild(t)}function i(){let e=document.querySelector(".content"),t=document.createElement("div");e.appendChild(t)}function u(){let e=document.querySelector(".content"),t=function(){let e=document.createElement("div"),t=document.createElement("h1");return e.append(t),e}();e.appendChild(t)}n.r(t);n(0);!function(){let e=document.querySelector("body"),t=r("div","","content-container"),n=r("div","","content-header"),c=document.createElement("img"),i=r("div","tab-list"),u=a("tab-about"),l=o("label","tab-btn","tab-about"),d=a("tab-menu"),s=o("label","tab-btn","tab-menu"),f=a("tab-contact"),p=o("label","tab-btn","tab-contact"),m=r("div","content");u.checked=!0,c.src="header.jpg",c.alt="It's a crab.",c.classList.add("header-image"),i.append(u,l,d,s,f,p,m),n.appendChild(c),t.appendChild(i),e.append(n,t)}(),c(),document.querySelectorAll("input").forEach(e=>{let t=e.id.split("-")[1];e.addEventListener("click",()=>{l.changeTab(t)})});const l={changeTab:function(e){switch(function(){let e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.lastChild)}(),e){case"about":c();break;case"contact":i();break;case"menu":u();break;default:alert("why")}}}}]);