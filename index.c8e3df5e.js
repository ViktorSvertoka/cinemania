var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequire27df;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequire27df=r);var t=r("gkCZC"),l=r("eiEnv");const i=new(0,t.default);!async function(){try{const e=await i.getTrends("week");if(0===e.length||!e)return error;const n=e.slice(0,3);console.log(n),(0,l.default)(n)}catch(e){console.log(e)}}();
//# sourceMappingURL=index.c8e3df5e.js.map