// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.0-esm/index.mjs";import{factory as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function h(v,g){var c,f,b,x,y;if(!o(v))throw new TypeError(j("invalid argument. First argument must be a positive number. Value: `%s`.",v));if(arguments.length>1){if(!d(g))throw new TypeError(j("invalid argument. Options argument must be an object. Value: `%s`.",g));if(c=r({},g),l(c,"iter")){if(!m(c.iter))throw new TypeError(j("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",c.iter))}else c.iter=a;b=u(v,c),void 0===c.prng&&!1!==c.copy&&(c.state=b.state)}else b=u(v),c={iter:a,state:b.state};return y=0,e(f={},"next",L),e(f,"return",P),c&&c.prng?(e(f,"seed",null),e(f,"seedLength",null),s(f,"state",n(null),i),e(f,"stateLength",null),e(f,"byteLength",null)):(t(f,"seed",G),t(f,"seedLength",N),s(f,"state",T,O),t(f,"stateLength",R),t(f,"byteLength",E)),e(f,"PRNG",b.PRNG),p&&e(f,p,w),f;function L(){return y+=1,x||y>c.iter?{done:!0}:{value:b(),done:!1}}function P(e){return x=!0,arguments.length?{value:e,done:!0}:{done:!0}}function w(){return h(v,c)}function G(){return b.PRNG.seed}function N(){return b.PRNG.seedLength}function R(){return b.PRNG.stateLength}function E(){return b.PRNG.byteLength}function T(){return b.PRNG.state}function O(e){b.PRNG.state=e}}export{h as default};
//# sourceMappingURL=index.mjs.map