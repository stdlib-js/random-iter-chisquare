// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";var h=e,j=t,c=n,f=s,g=i,b=r,v=o.isPrimitive,x=d,y=m.isPrimitive,P=l,L=a,w=u.factory,G=p;var N=function e(t,n){var s,i,r,o,d;if(!v(t))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+t+"`.");if(arguments.length>1){if(!x(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(s=b(n,1),P(s,"iter")){if(!y(s.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+s.iter+"`.")}else s.iter=L;r=w(t,s),void 0===s.prng&&!1!==s.copy&&(s.state=r.state)}else r=w(t),s={iter:L,state:r.state};return d=0,h(i={},"next",m),h(i,"return",l),s&&s.prng?(h(i,"seed",null),h(i,"seedLength",null),c(i,"state",f(null),g),h(i,"stateLength",null),h(i,"byteLength",null)):(j(i,"seed",u),j(i,"seedLength",p),c(i,"state",E,T),j(i,"stateLength",N),j(i,"byteLength",R)),h(i,"PRNG",r.PRNG),G&&h(i,G,a),i;function m(){return d+=1,o||d>s.iter?{done:!0}:{value:r(),done:!1}}function l(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function a(){return e(t,s)}function u(){return r.PRNG.seed}function p(){return r.PRNG.seedLength}function N(){return r.PRNG.stateLength}function R(){return r.PRNG.byteLength}function E(){return r.PRNG.state}function T(e){r.PRNG.state=e}},R=N;export{R as default};
//# sourceMappingURL=index.mjs.map
