!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=341)}({0:function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__0__},10:function(e,t,r){var n={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,c=[],l=r(15);function u(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function p(e,t){var r=i(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),c.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),m(t,e.attrs),p(e,t),t}function m(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function b(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;r=a||(a=h(t)),n=_.bind(null,r,c,!1),o=_.bind(null,r,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),p(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=l(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){d(r),r.href&&URL.revokeObjectURL(r.href)}):(r=h(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){d(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=f(e,t);return u(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=n[a.id]).refs--,o.push(s)}e&&u(f(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete n[s.id]}}}};var v=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function _(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},12:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},15:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(r(0)),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},a=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);t.AppContainer=a,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}},341:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(342),function(){var e=__webpack_require__(6).enterModule;e&&e(module)}();var Swiper=function(_React$Component){function Swiper(e){_classCallCheck(this,Swiper);var t=_possibleConstructorReturn(this,(Swiper.__proto__||Object.getPrototypeOf(Swiper)).call(this,e));return t.startY=0,t.endY=0,t.timer=null,t.down="../../assets/Swiper/down.png",t.loading="../../assets/Swiper/loading.gif",t.complete="../../assets/Swiper/complete.png",t.scrollerHeight=1e3,t.bottomHeight=0,t.componentDidMount=function(){t.eventBind(t.wrapper)},t.reset=function(){t.getChildHeight()},t.getChildHeight=function(){var e=t.props.config.wrapperHeight,r=t.scroller.scrollHeight;t.bottomHeight=r-e+44,t.scrollerHeight=r},t.eventBind=function(e){var r=t.props.config;e.addEventListener("touchstart",function(e){t.timer=(new Date).getTime(),t.startY=e.touches[0].pageY,t.state.refreshEnd=!1,t.state.loadEnd=!1}),e.addEventListener("touchmove",function(e){e.preventDefault();var n=(e.touches[0].pageY-t.startY)/r.sensibility+t.endY;t.state.iconDeg=n>44?180:n>=0&&n<=44?n/44*180:180,t.setState({distance:n})}),e.addEventListener("touchend",function(e){var n=r.duration?r.duration:((new Date).getTime()-t.timer)/1e3,o=t.state.distance;if(o>44)t.props.refresh&&(t.state.refreshImg=t.loading,t.state.refreshText="刷新中...",t.state.distance=44,t.props.refresh());else if(o>0&&o<=44)t.state.distance=0;else if(o<0){var i=t.scroller,a=i.offsetHeight,s=i.scrollHeight-a;Math.abs(o)>s?(t.state.distance=-s,t.endY=-s,t.props.load&&(t.state.loadText="加载中...",t.state.loadImg=t.loading,t.state.distance=-t.bottomHeight,t.props.load())):t.endY=o}t.setState({refreshEnd:!0,loadEnd:!0,duration:n},function(){t.timer=null})})},t.cancelRefresh=function(){t.setState({refreshImg:t.complete,refreshText:"刷新成功",iconDeg:0},function(){setTimeout(function(){t.reset(),t.setState({refreshImg:t.down,distance:0,refreshText:"下拉刷新"})},1e3)})},t.cancelLoad=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载完成";t.setState({loadImg:t.complete,loadText:e,iconDeg:0},function(){setTimeout(function(){t.reset(),t.setState({loadImg:t.down,distance:t.endY,loadText:"加载更多"})},1e3)})},t.state={distance:0,iconDeg:0,refreshEnd:!1,loadEnd:!1,duration:0,refreshText:"下拉刷新",refreshImg:t.down,loadText:"加载更多",loadImg:t.down},t}return _inherits(Swiper,_React$Component),_createClass(Swiper,[{key:"render",value:function(){var e=this,t=this.props.config,r=t.wrapperHeight,n=this.state,o=n.distance,i=n.iconDeg,a=n.refreshEnd,s=n.duration,c=n.refreshText,l=(n.loading,n.refreshImg),u=n.loadEnd,f=n.loadText,p=n.loadImg,d=document.documentElement.clientHeight||document.body.clientHeight,h=(document.documentElement.clientWidth||document.body.clientWidth,{transform:"translate3d(0px, "+o+"px, 0)"});a&&(h=Object.assign(h,{transition:"all "+s+"s ease"}));var m={transform:"translate3d(0px, "+o+"px, 0)",top:this.scrollerHeight};u&&(m=Object.assign(m,{top:this.scrollerHeight,transition:"all "+s+"s ease"}));var b=Object.assign({},{height:r||d},h),v=[];!0!==t.refresh&&void 0!==t.refresh||v.push(_react2.default.createElement("div",{key:"refresh_wrapper",className:a?"refresh refresh-end":"refresh",style:h},_react2.default.createElement("span",{className:"refresh-icon",style:{transform:"rotateZ("+i+"deg)"}},_react2.default.createElement("img",{src:l})),_react2.default.createElement("span",{className:"refresh-text"},c)));var _=[];return!0!==t.load&&void 0!==t.load||_.push(_react2.default.createElement("div",{key:"load_wrapper",className:u?"load load-end":"load",style:m},_react2.default.createElement("span",{className:"load-icon",style:{transform:"rotateZ("+i+"deg)"}},_react2.default.createElement("img",{src:p})),_react2.default.createElement("span",{className:"load-text"},f))),_react2.default.createElement("div",{className:"Swiper"},_react2.default.createElement("div",{ref:function(t){return e.wrapper=t},className:"wrapper"},_react2.default.Children.map(this.props.children,function(t){return t=_react2.default.cloneElement(t,{className:"child-z-index-8"}),_react2.default.createElement("div",null,_react2.default.createElement("div",{style:b,ref:function(t){return e.scroller=t}},t),v,_)})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Swiper}(_react2.default.Component),_default=Swiper;exports.default=_default,function(){var e=__webpack_require__(6).default,t=__webpack_require__(6).leaveModule;e&&(e.register(Swiper,"Swiper","E:/Github/react-mobile-component/src/component/Swiper/index.js"),e.register(_default,"default","E:/Github/react-mobile-component/src/component/Swiper/index.js"),t(module))}()}).call(this,__webpack_require__(12)(module))},342:function(e,t,r){var n=r(343);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(10)(n,o);n.locals&&(e.exports=n.locals)},343:function(e,t,r){(e.exports=r(9)(!1)).push([e.i,".Swiper .refresh {\r\n    position: absolute;\r\n    top: -44px;\r\n    width: 100%;\r\n    height: 44px;\r\n    line-height: 44px;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    transform: (0px 0px) translateZ(0px) scale(1);\r\n}\r\n\r\n.Swiper .refresh .refresh-icon {\r\n    display: inline-block;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 25%;\r\n}\r\n\r\n.Swiper .refresh .refresh-icon img {\r\n    width: 24px;\r\n    height: 24px;\r\n    display: block;\r\n}\r\n\r\n\r\n/***************上方刷新样式，下方加载样式*****************/\r\n\r\n.Swiper .load {\r\n    position: absolute;\r\n    bottom: -44px;\r\n    width: 100%;\r\n    height: 44px;\r\n    line-height: 44px;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    z-index: 10;\r\n    /* transform: (0px 0px) translateZ(0px) scale(1); */\r\n}\r\n\r\n.Swiper .load .load-icon {\r\n    display: inline-block;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 25%;\r\n}\r\n\r\n.Swiper .load .load-icon img {\r\n    width: 24px;\r\n    height: 24px;\r\n    display: block;\r\n}\r\n\r\n\r\n/************************************************/\r\n\r\n.Swiper .wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.Swiper .child-z-index-8 {\r\n    position: relative;\r\n    z-index: 8;\r\n}",""])},6:function(e,t,r){"use strict";e.exports=r(16)},9:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}}})});