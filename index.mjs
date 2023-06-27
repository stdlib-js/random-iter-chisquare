// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function u(f,c){var g,b,v,x,y;if(!o(f))throw new TypeError(a("0Pe7P",f));if(arguments.length>1){if(!d(c))throw new TypeError(a("0Pe2h",c));if(g=i(c,1),l(g,"iter")){if(!m(g.iter))throw new TypeError(a("0Pe35","iter",g.iter))}else g.iter=h;v=p(f,g),void 0===g.prng&&!1!==g.copy&&(g.state=v.state)}else v=p(f),g={iter:h,state:v.state};return y=0,e(b={},"next",P),e(b,"return",L),g&&g.prng?(e(b,"seed",null),e(b,"seedLength",null),s(b,"state",n(null),r),e(b,"stateLength",null),e(b,"byteLength",null)):(t(b,"seed",G),t(b,"seedLength",N),s(b,"state",T,q),t(b,"stateLength",R),t(b,"byteLength",E)),e(b,"PRNG",v.PRNG),j&&e(b,j,w),b;function P(){return y+=1,x||y>g.iter?{done:!0}:{value:v(),done:!1}}function L(e){return x=!0,arguments.length?{value:e,done:!0}:{done:!0}}function w(){return u(f,g)}function G(){return v.PRNG.seed}function N(){return v.PRNG.seedLength}function R(){return v.PRNG.stateLength}function E(){return v.PRNG.byteLength}function T(){return v.PRNG.state}function q(e){v.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
