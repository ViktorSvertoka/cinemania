!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequire27df;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire27df=o),o.register("dYgbB",(function(r,n){t(r.exports,"default",(function(){return l}));var a=o("bpxeT"),c=o("2TvXO"),i=o("hixsh"),s=o("dIxxU").default;function l(e){return p.apply(this,arguments)}function p(){return(p=e(a)(e(c).mark((function t(r){var n,a,o,i,s,l,p,d,v,g,x,_,b,y,w,S,m,L;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector(".cards__list"),a="https://image.tmdb.org/t/p/w500/",o="",i=!0,s=!1,l=void 0,e.prev=4,p=r[Symbol.iterator]();case 6:if(i=(d=p.next()).done){e.next=25;break}if(v=d.value,g=v.id,x=v.poster_path,_=v.title,b=v.release_date,y=v.vote_average,null!==x&&x){e.next=11;break}return e.abrupt("continue",22);case 11:return w=a+x,e.next=14,f(g);case 14:return S=e.sent,e.next=17,u(b);case 17:return m=e.sent,e.next=20,h(y);case 20:L=e.sent,o+="<li class='cards__list__item'>\n                    <img src='".concat(w,"' alt='").concat(_,"' width='395' height='574' />\n                    <div>\n                        <h3>").concat(_,"</h3>\n                        <p>").concat(S," <span>").concat(m,"</span></p>\n                        ").concat(L,"\n                    </div>\n                </li>");case 22:i=!0,e.next=6;break;case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(4),s=!0,l=e.t0;case 31:e.prev=31,e.prev=32,i||null==p.return||p.return();case 34:if(e.prev=34,!s){e.next=37;break}throw l;case 37:return e.finish(34);case 38:return e.finish(31);case 39:n.innerHTML=o;case 40:case"end":return e.stop()}}),t,null,[[4,27,31,39],[32,,34,38]])})))).apply(this,arguments)}function u(e){return e?year=e.slice(0,4):"There is no release date"}function f(e){return d.apply(this,arguments)}function d(){return(d=e(a)(e(c).mark((function t(r){var n,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"992758a4802a699e8df27d4d6efc34fb","https://api.themoviedb.org/3/movie/",e.prev=2,e.next=5,s.get("".concat("https://api.themoviedb.org/3/movie/").concat(r),{params:{api_key:"992758a4802a699e8df27d4d6efc34fb"}});case 5:if(0!==(n=e.sent).data.genres.length){e.next=8;break}return e.abrupt("return",error);case 8:return a=n.data.genres.slice(0,2).map((function(e){return e.name})).join(", "),e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return","There are no genres");case 16:case"end":return e.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}function h(e){var t="";if(!e)return t="".concat(i.emptyStar.repeat(5)),"<div>".concat(t,"</div>");switch(Math.round(e)){case 0:t="".concat(i.emptyStar.repeat(5));break;case 1:t="".concat(i.halfStar).concat(i.emptyStar.repeat(4));break;case 2:t="".concat(i.fullStar).concat(i.emptyStar.repeat(4));break;case 3:t="".concat(i.fullStar).concat(i.halfStar).concat(i.emptyStar.repeat(3));break;case 4:t="".concat(i.fullStar.repeat(2)).concat(i.emptyStar.repeat(3));break;case 5:t="".concat(i.fullStar.repeat(2)).concat(i.halfStar).concat(i.emptyStar.repeat(2));break;case 6:t="".concat(i.fullStar.repeat(3)).concat(i.emptyStar.repeat(2));break;case 7:t="".concat(i.fullStar.repeat(3)).concat(i.halfStar).concat(i.emptyStar);break;case 8:t="".concat(i.fullStar.repeat(4)).concat(i.emptyStar);break;case 9:t="".concat(i.fullStar.repeat(4)).concat(i.halfStar);break;case 10:t="".concat(i.fullStar.repeat(5));break;default:throw new Error("Invalid rating")}return"<div>".concat(t,"</div>")}})),o.register("hixsh",(function(e,r){t(e.exports,"emptyStar",(function(){return n})),t(e.exports,"fullStar",(function(){return a})),t(e.exports,"halfStar",(function(){return o}));var n='<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>\n<defs>\n<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>',a='<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>\n<defs>\n<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>',o='<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_6991)" stroke-linejoin="round"/>\n<path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_6991)"/>\n<defs>\n<linearGradient id="paint0_linear_148_6991" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n<linearGradient id="paint1_linear_148_6991" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>'}))}();
//# sourceMappingURL=index.1b4b8009.js.map
