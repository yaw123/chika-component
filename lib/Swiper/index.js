!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=51)}({0:function(e,t,n){"use strict";e.exports=n(27)},10:function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,c=0,l=[],f=n(37);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var u=[];for(a=0;a<r.parts.length;a++)u.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:u}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function h(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(e.insertAt.before,n);n.insertBefore(t,o)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),h(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=s||(s=v(t)),r=S.bind(null,n,a,!1),o=S.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(u=i[a.id]).refs--,r.push(u)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}};var g,x=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function S(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},117:function(e,t,n){var r=n(118);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,o);r.locals&&(e.exports=r.locals)},118:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".Swiper {\r\n  will-change: transform;\r\n}\r\n\r\n.Swiper .refresh {\r\n  position: absolute;\r\n  top: -44px;\r\n  width: 100%;\r\n  height: 44px;\r\n  line-height: 44px;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  transform: (0px 0px) translateZ(0px) scale(1);\r\n}\r\n\r\n.Swiper .refresh .refresh-icon {\r\n  display: inline-block;\r\n  width: 24px;\r\n  height: 24px;\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 25%;\r\n}\r\n\r\n.Swiper .refresh .refresh-icon img {\r\n  width: 24px;\r\n  height: 24px;\r\n  display: block;\r\n}\r\n\r\n\r\n/***************上方刷新样式，下方加载样式*****************/\r\n\r\n.Swiper .load {\r\n  position: absolute;\r\n  bottom: -44px;\r\n  width: 100%;\r\n  height: 44px;\r\n  line-height: 44px;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  z-index: 10;\r\n  /* transform: (0px 0px) translateZ(0px) scale(1); */\r\n}\r\n\r\n.Swiper .load .load-icon {\r\n  display: inline-block;\r\n  width: 24px;\r\n  height: 24px;\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 25%;\r\n}\r\n\r\n.Swiper .load .load-icon img {\r\n  width: 24px;\r\n  height: 24px;\r\n  display: block;\r\n}\r\n\r\n\r\n/************************************************/\r\n\r\n.Swiper .wrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n",""])},21:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))o.call(n,c)&&(u[c]=n[c]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(u[a[l]]=n[a[l]])}}return u}},27:function(e,t,n){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(21),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,i,a,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,a,u],c=0;(e=Error(t.replace(/%s/g,function(){return s[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function S(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}function w(){}function j(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=S.prototype;var O=j.prototype=new w;O.constructor=j,r(O,S.prototype),O.isPureReactComponent=!0;var E={current:null},_={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r=void 0,o={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:u,props:o,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var T=/\/+/g,U=[];function I(e,t,n,r){if(U.length){var o=U.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>U.length&&U.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var s=!1;if(null===t)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case i:case a:s=!0}}if(s)return r(o,t,""===n?"."+A(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var l=n+A(u=t[c],c);s+=e(u,l,r,o)}else if(l=null===t||"object"!=typeof t?null:"function"==typeof(l=m&&t[m]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),c=0;!(u=t.next()).done;)s+=e(u=u.value,l=n+A(u,c++),r,o);else"object"===u&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return s}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,function(e){return e}):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(T,"$&/")+"/"),$(e,H,t=I(t,i,r,o)),L(t)}function N(){var e=E.current;return null===e&&b("321"),e}var B={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,M,t=I(null,null,t,n)),L(t)},count:function(e){return $(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return P(e)||b("143"),e}},createRef:function(){return{current:null}},Component:S,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return N().useCallback(e,t)},useContext:function(e,t){return N().useContext(e,t)},useEffect:function(e,t){return N().useEffect(e,t)},useImperativeHandle:function(e,t,n){return N().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return N().useLayoutEffect(e,t)},useMemo:function(e,t){return N().useMemo(e,t)},useReducer:function(e,t,n){return N().useReducer(e,t,n)},useRef:function(e){return N().useRef(e)},useState:function(e){return N().useState(e)},Fragment:u,StrictMode:s,Suspense:h,createElement:R,cloneElement:function(e,t,n){null==e&&b("267",e);var o=void 0,a=r({},e.props),u=e.key,s=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,c=_.current),void 0!==t.key&&(u=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)k.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){l=Array(o);for(var f=0;f<o;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:i,type:e.type,key:u,ref:s,props:a,_owner:c}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:E,ReactCurrentOwner:_,assign:r}},Y={default:B},q=Y&&B||Y;e.exports=q.default||q},37:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(0),o=n.n(r),i=(n(117),n(6)),a=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h="./assets/down.png",y="./assets/loading.gif",v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,p(t).apply(this,arguments))).startY=0,e.endY=0,e.scrollerHeight=1e4,e.bottomHeight=0,e.state={distance:0,iconDeg:0,refreshEnd:!1,loadEnd:!1,refreshText:"下拉刷新",refreshImg:h,loadText:"加载更多",loadImg:h,status:"loaded",type:"load"},e.componentDidMount=function(){e.bindEvent(e.wrapper)},e.getChildHeight=function(){var t=e.props.wrapperHeight,n=e.scroller.scrollHeight;e.bottomHeight=n-t+44,e.scrollerHeight=n},e.bindEvent=function(t){var n=e.props.sensibility,r=void 0===n?1:n;t.addEventListener("touchstart",function(t){e.startY=t.touches[0].pageY,e.setState({refreshEnd:!1,loadEnd:!1})}),t.addEventListener("touchmove",function(t){t.preventDefault();var n,o=(t.touches[0].pageY-e.startY)/r+e.endY;n=o>44?180:o>=0&&o<=44?o/44*180:180,e.setState({distance:o,iconDeg:n})}),t.addEventListener("touchend",function(){var t=e.props,n=t.onRefresh,r=t.onLoad,o=e.state.distance;if(o>44)n&&(e.setState({refreshImg:y,refreshText:"刷新中...",distance:44,status:"loading",type:"refresh"}),n());else if(o>0&&o<=44)e.setState({distance:0});else if(o<0){var i=e.scroller,a=i.offsetHeight,u=i.scrollHeight-a;Math.abs(o)>u?(e.endY=-u,r?(e.setState({loadText:"加载中...",loadImg:y,distance:-e.bottomHeight,status:"loading",type:"load"}),r()):e.setState({distance:-u})):e.endY=o}e.setState({refreshEnd:!0,loadEnd:!0})})},e.generateStyle=function(){var t=e.props,n=t.wrapperHeight,r=t.duration,o=void 0===r?1:r,i=e.state,a=i.distance,u=i.refreshEnd,s=i.loadEnd,l=document.documentElement.clientHeight||document.body.clientHeight,f={},p={},d="translate3d(0px, ".concat(a,"px, 0)"),h="all ".concat(o,"s ease");return f.transform=d,u&&(f.transition=h),p.transform=d,s&&(p.transition=h),{wrapperStyle:c({},f,{height:n||l}),loadStyle:p,refreshStyle:f}},e.renderSpinner=function(e){var t,n=e.type,r=e.isFinished,i=e.relatedStyle,u=e.iconUrl,c=e.iconDeg,l=e.relatedText;return o.a.createElement("div",{className:a()((t={},s(t,n,!0),s(t,"".concat(n,"-end"),r),t)),style:i},o.a.createElement("span",{className:"".concat(n,"-icon"),style:{transform:"rotateZ(".concat(c,"deg)")}},o.a.createElement("img",{src:u})),o.a.createElement("span",{className:"".concat(n,"-text")},l))},e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidUpdate",value:function(e,t){var n=this;e.loading&&!this.props.loading&&"loading"===t.status&&("refresh"===this.state.type?this.setState({status:"loaded",refreshImg:"./assets/complete.png",refreshText:"刷新成功",iconDeg:0},function(){setTimeout(function(){n.getChildHeight(),n.setState({refreshImg:h,distance:0,refreshText:"下拉刷新"})},1e3)}):"load"===this.state.type&&this.setState({status:"loaded",loadImg:"./assets/complete.png",loadText:"加载完成",iconDeg:0},function(){setTimeout(function(){n.getChildHeight(),n.setState({loadImg:h,loadText:"加载更多",distance:n.endY})},1e3)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.onRefresh,r=t.onLoad,i=t.children,a=this.state,u=a.iconDeg,s=a.refreshEnd,c=a.refreshText,l=a.refreshImg,f=a.loadEnd,p=a.loadText,d=a.loadImg,h=this.generateStyle(),y=h.refreshStyle,v=h.wrapperStyle,m=h.loadStyle;return o.a.createElement("div",{className:"Swiper"},o.a.createElement("div",{ref:function(t){return e.wrapper=t},className:"wrapper"},o.a.createElement("div",{style:v,ref:function(t){return t&&(e.scroller=t)}},i),n&&this.renderSpinner({type:"refresh",isFinished:s,relatedStyle:y,iconUrl:l,iconDeg:u,relatedText:c}),r&&this.renderSpinner({type:"load",isFinished:f,relatedStyle:m,iconUrl:d,iconDeg:u,relatedText:p})))}}])&&l(n.prototype,r),i&&l(n,i),t}()},6:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},9:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}}})});