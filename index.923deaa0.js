function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire27df;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire27df=r);var o,u=r("gkCZC"),a=r("eiEnv"),f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,y=v||p||Function("return this")(),g=Object.prototype.toString,w=Math.max,b=Math.min,h=function(){return y.Date.now()};function m(e,t,n){var i,r,o,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function p(e){return l=e,a=setTimeout(g,t),c?v(e):u}function y(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function g(){var e=h();if(y(e))return m(e);a=setTimeout(g,function(e){var n=t-(e-f);return s?b(n,o-(e-l)):n}(e))}function m(e){return a=void 0,d&&i?v(e):(i=r=void 0,u)}function j(){var e=h(),n=y(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return p(f);if(s)return a=setTimeout(g,t),v(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=T(t)||0,x(n)&&(c=!!n.leading,o=(s="maxWait"in n)?w(T(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),j.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=f=r=a=void 0},j.flush=function(){return void 0===a?u:m(h())},j}function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=c.test(e);return n||s.test(e)?d(e.slice(2),n?2:8):l.test(e)?NaN:+e}o=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return x(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};const j=new(0,u.default);!async function(){try{const e=await j.getTrends("week");if(0===e.length||!e)return error;const t=e.slice(0,3);(0,a.default)(t,".weekly-trends__list")}catch(e){console.log(e)}}(),window.addEventListener("resize",e(o)((function(){const e=document.querySelectorAll(".cards__list-item");console.log(window.innerWidth),window.innerWidth<768?(e[1].classList.add("visually-hidden"),e[2].classList.add("visually-hidden")):(e[1].classList.remove("visually-hidden"),e[2].classList.remove("visually-hidden"))}),100));
//# sourceMappingURL=index.923deaa0.js.map
