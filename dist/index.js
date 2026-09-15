"use strict";var s=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var a=s(function(R,v){
var n=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/constants-float64-pi/dist');function d(t,r,e){var i;return n(t)||n(r)||n(e)||e<=0?NaN:(i=N*e*(1+p((t-r)/e,2)),1/i)}v.exports=d
});var f=s(function(b,c){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist'),I=require('@stdlib/constants-float64-pi/dist');function P(t,r){var e;if(u(t)||u(r)||r<=0)return y(NaN);return e=r*I,i;function i(o){return u(o)?NaN:1/(e*(1+w((o-t)/r,2)))}}c.exports=P
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=a(),F=f();l(q,"factory",F);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
