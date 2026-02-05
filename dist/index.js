"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=s(function(R,v){
var n=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/constants-float64-pi/dist');function d(e,r,t){var i;return n(e)||n(t)||n(r)||t<=0?NaN:(i=N*t*(1+p((e-r)/t,2)),1/i)}v.exports=d
});var f=s(function(b,c){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist'),I=require('@stdlib/constants-float64-pi/dist');function P(e,r){var t;if(u(r)||u(e)||r<=0)return y(NaN);return t=r*I,i;function i(o){return u(o)?NaN:1/(t*(1+w((o-e)/r,2)))}}c.exports=P
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=a(),F=f();l(q,"factory",F);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
