!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequire27df;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequire27df=i);var o,u=i("bpxeT"),a=i("2TvXO"),f=i("7r3lF"),l=i("dYgbB"),c=i("l5bVx"),s="Expected a function",d=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,y=/^0o[0-7]+$/i,b=parseInt,g="object"==typeof n&&n&&n.Object===Object&&n,w="object"==typeof self&&self&&self.Object===Object&&self,h=g||w||Function("return this")(),m=Object.prototype.toString,x=Math.max,T=Math.min,O=function(){return h.Date.now()};function j(e,n,t){var r,i,o,u,a,f,l=0,c=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(s);function p(n){var t=r,o=i;return r=i=void 0,l=n,u=e.apply(o,t)}function y(e){return l=e,a=setTimeout(g,n),c?p(e):u}function b(e){var t=e-f;return void 0===f||t>=n||t<0||d&&e-l>=o}function g(){var e=O();if(b(e))return w(e);a=setTimeout(g,function(e){var t=n-(e-f);return d?T(t,o-(e-l)):t}(e))}function w(e){return a=void 0,v&&r?p(e):(r=i=void 0,u)}function h(){var e=O(),t=b(e);if(r=arguments,i=this,f=e,t){if(void 0===a)return y(f);if(d)return a=setTimeout(g,n),p(f)}return void 0===a&&(a=setTimeout(g,n)),u}return n=E(n)||0,_(t)&&(c=!!t.leading,o=(d="maxWait"in t)?x(E(t.maxWait)||0,n):o,v="trailing"in t?!!t.trailing:v),h.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=f=i=a=void 0},h.flush=function(){return void 0===a?u:w(O())},h}function _(n){var t=void 0===n?"undefined":e(c)(n);return!!n&&("object"==t||"function"==t)}function E(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":e(c)(n))||function(e){return!!e&&"object"==typeof e}(n)&&"[object Symbol]"==m.call(n)}(n))return NaN;if(_(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=_(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(d,"");var r=p.test(n);return r||y.test(n)?b(n.slice(2),r?2:8):v.test(n)?NaN:+n}o=function(e,n,t){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(s);return _(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),j(e,n,{leading:r,maxWait:n,trailing:i})};var L=new(0,f.default);function N(){return(N=e(u)(e(a).mark((function n(){var t,r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.getTrends("week");case 3:if(0!==(t=e.sent).length&&t){e.next=6;break}return e.abrupt("return",error);case 6:r=t.slice(0,3),(0,l.default)(r,".weekly-trends__list"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){N.apply(this,arguments)}(),window.addEventListener("resize",e(o)((function(){var e=document.querySelectorAll(".cards__list-item");console.log(window.innerWidth),window.innerWidth<768?(e[1].classList.add("visually-hidden"),e[2].classList.add("visually-hidden")):(e[1].classList.remove("visually-hidden"),e[2].classList.remove("visually-hidden"))}),100))}();
//# sourceMappingURL=index.a7daa8cf.js.map
