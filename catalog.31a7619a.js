!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequire27df;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){n[e]=r},r.parcelRequire27df=a);var s=a("bpxeT"),l=a("2TvXO"),u=a("7r3lF"),i=a("dYgbB"),c=document.querySelector(".cards__list"),o=document.querySelector(".cards__message"),d=document.getElementById("search-form"),f=document.getElementById("searchQuery"),p=new(0,u.default);function v(){return(v=e(s)(e(l).mark((function r(){var t,n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getTrends("week");case 3:if(0!==(t=e.sent).length&&t){e.next=6;break}return e.abrupt("return",error);case 6:n=t.slice(0,10),(0,i.default)(n),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),c.classList.add("visually-hidden"),o.classList.remove("visually-hidden");case 15:case"end":return e.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function h(){return(h=e(s)(e(l).mark((function r(t){var n,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.searchMovieByQuery(t);case 3:if(0!==(n=e.sent).length&&n){e.next=6;break}return e.abrupt("return",error);case 6:a=n.slice(0,10),(0,i.default)(a),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),c.classList.add("visually-hidden"),o.classList.remove("visually-hidden");case 15:case"end":return e.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}!function(){v.apply(this,arguments)}(),d.addEventListener("submit",(function(e){if(e.preventDefault(),c.innerHTML="",searchValue=f.value.trim(),!searchValue)return;c.classList.remove("visually-hidden"),o.classList.add("visually-hidden"),function(e){h.apply(this,arguments)}(searchValue)}))}();
//# sourceMappingURL=catalog.31a7619a.js.map
