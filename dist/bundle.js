!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);var r=document.getElementById("min"),o=document.getElementById("sec"),a=document.querySelector("button"),i=(document.querySelectorAll("input"),document.querySelectorAll("img")),u=document.getElementById("reset");document.getElementsByClassName("up"),document.getElementsByClassName("down");function c(){l.currentSecValue=o.value,l.currentMinValue=r.value,l.currentMinValue>0||l.currentSecValue>0?(l.currentSecValue=+o.value-1,o.value=l.currentSecValue,l.currentSecValue=o.value,l.currentMinValue>0&&l.currentSecValue<0&&(l.currentMinValue=+r.value-1,r.value=l.currentMinValue,o.value=l.currentSecValue=59),setTimeout(c,1e3)):!0===l.resetbtnclicked?l.resetbtnclicked=!1:alert("The End!")}var l={currentMinValue:"",currentSecValue:"",resetbtnclicked:!1,counterWorking:!1};l.currentSecValue=o.value,l.currentMinValue=r.value,r.value=0,o.value=0,i.forEach((function(e){e.addEventListener("click",(function(e){"upSec"===e.target.id?(l.currentSecValue=+o.value+1,o.value=l.currentSecValue,l.currentSecValue=o.value,l.currentSecValue>59&&(l.currentMinValue=+l.currentMinValue+1,r.value=l.currentMinValue,o.value=0,l.currentSecValue=o.value)):"upMin"===e.target.id?(l.currentMinValue=+r.value+1,r.value=l.currentMinValue,l.currentMinValue=r.value):"downSec"===e.target.id?(l.currentSecValue=o.value,o.value=l.currentSecValue,l.currentSecValue=+o.value-1,o.value=l.currentSecValue,l.currentSecValue=o.value,o.value=Math.abs(o.value),l.currentMinValue>0&&l.currentSecValue<0&&(l.currentMinValue=+l.currentMinValue-1,r.value=l.currentMinValue,o.value=59)):"downMin"===e.target.id&&(l.currentMinValue=+r.value-1,r.value=l.currentMinValue,l.currentMinValue=r.value,r.value=Math.abs(r.value))}))})),a.addEventListener("click",(function(e){e.preventDefault(),c()})),u.addEventListener("click",(function(e){e.preventDefault(),r.value=0,o.value=0,l.currentMinValue=0,l.currentSecValue=0,l.resetbtnclicked=!0}))},function(e,n,t){var r=t(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(n=e.exports=t(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap);",""]),n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap);",""]),n.push([e.i,'@keyframes timer {\n  from {\n    transform: translateY(25px); }\n  to {\n    transform: translateY(0px); } }\n\nbody {\n  background: linear-gradient(to right top, #594E69, #9386A5);\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n  body h1 {\n    font-family: "Montserrat", sans-serif;\n    color: #E5E2E8;\n    margin-top: 100px;\n    margin-bottom: 50px; }\n\nmain {\n  box-shadow: 0px 4px 46px rgba(0, 0, 0, 0.46);\n  height: 24vw;\n  width: 880px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  background: linear-gradient(to right top, #E0DEE3, #E5E2E8); }\n  main .btns {\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    margin-bottom: 16px;\n    align-items: center;\n    justify-content: center; }\n  main button {\n    border: none;\n    background: none;\n    font-style: "Ubuntu", sans-serif;\n    font-size: 18px;\n    font-weight: bold;\n    cursor: pointer;\n    font-family: "Raleway", sans-serif;\n    border-radius: 2rem;\n    outline: none; }\n    main button:hover {\n      color: #b5a3d3;\n      cursor: pointer; }\n\n#form {\n  box-shadow: 0px 4px 46px rgba(0, 0, 0, 0.46);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 20vh;\n  width: 80%;\n  background: linear-gradient(to right top, #594E69, #9386A5); }\n  #form input {\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);\n    background: none;\n    font-family: "Montserrat", sans-serif;\n    height: 128px;\n    width: 256px;\n    border: none;\n    text-align: center;\n    margin: 20px;\n    font-size: 126px;\n    color: #E5E2E8;\n    -moz-appearance: textfield; }\n    #form input:hover {\n      cursor: pointer; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  appearance: none;\n  margin: 0; }\n\n.arrowContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 45px; }\n  .arrowContainer :hover {\n    cursor: pointer; }\n  .arrowContainer .up {\n    transform: rotate(0deg);\n    height: 26px; }\n  .arrowContainer .down {\n    transform: rotate(-180deg);\n    height: 26px; }\n',""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[t].concat(a).concat([o]).join("\n")}var i;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},function(e,n,t){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e,n){return n?n.querySelector(e):document.querySelector(e)},c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=u.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),l=null,s=0,f=[],p=t(5);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(y(r.parts[i],n))}else{var u=[];for(i=0;i<r.parts.length;i++)u.push(y(r.parts[i],n));a[r.id]={id:r.id,refs:1,parts:u}}}}function v(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(u):t.push(r[i]={id:i,parts:[u]})}return t}function m(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),f.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,t);t.insertBefore(n,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=f.indexOf(e);n>=0&&f.splice(n,1)}function b(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),m(e,n),n}function g(e,n){Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])}))}function y(e,n){var t,r,o,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var i=s++;t=l||(l=b(n)),r=S.bind(null,t,i,!1),o=S.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),m(e,n),n}(n),r=V.bind(null,t,n),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(n),r=M.bind(null,t),o=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=v(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var i=t[o];(u=a[i.id]).refs--,r.push(u)}e&&d(v(e,n),n);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}};var x,w=(x=[],function(e,n){return x[e]=n,x.filter(Boolean).join("\n")});function S(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function M(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function V(e,n,t){var r=t.css,o=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||a)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,n){var o,a=n.trim().replace(/^"(.*)"$/,(function(e,n){return n})).replace(/^'(.*)'$/,(function(e,n){return n}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]);