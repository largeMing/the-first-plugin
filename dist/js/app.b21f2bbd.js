(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="the-first-plugin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4a00":function(t,e,n){},"4b50":function(t,e,n){t.exports=n.p+"img/loading.c141f363.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r=(n("034f"),n("2877")),o={},c=Object(r["a"])(o,a,i,!1,null,null,null),l=c.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),s("vpay",{ref:"pays",on:{close:t.close,forget:t.forget,"input-end":t.inputEnd},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},f=[],d={name:"Home",data:function(){return{show:!0}},methods:{forget:function(){},inputEnd:function(){},close:function(){}}},h=d,v=Object(r["a"])(h,p,f,!1,null,null,null),_=v.exports;s["a"].use(u["a"]);var m=[{path:"/",name:"Home",component:_}],g=new u["a"]({mode:"history",base:"the-first-plugin/",routes:m}),y=g,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"zfb-pay"},[s("div",{staticClass:"content"},[s("header",{staticClass:"pay-title"},[s("div",{staticClass:"ico-back",on:{click:t.cancel}}),s("h3",[t._v(t._s(t.title))])]),s("div",{staticClass:"pass-box"},[s("ul",{staticClass:"pass-area"},t._l(t.digit,(function(e,n){return s("li",{key:n,staticClass:"pass-item",class:{on:t.password.length>n}})})),0)]),s("div",{staticClass:"forget-pass"},[s("div",{staticClass:"forget-pass-btn",on:{click:t.forget}},[t._v("忘记密码")])]),s("ul",{staticClass:"keyboard"},[s("li",{on:{click:function(e){return t.onKeyboard(1)}}},[t._m(0),s("p",{staticClass:"character"})]),s("li",{on:{click:function(e){return t.onKeyboard(2)}}},[t._m(1),s("p",{staticClass:"character"},[t._v("ABC")])]),s("li",{on:{click:function(e){return t.onKeyboard(3)}}},[t._m(2),s("p",{staticClass:"character"},[t._v("DEF")])]),s("li",{on:{click:function(e){return t.onKeyboard(4)}}},[t._m(3),s("p",{staticClass:"character"},[t._v("GHI")])]),s("li",{on:{click:function(e){return t.onKeyboard(5)}}},[t._m(4),s("p",{staticClass:"character"},[t._v("JKL")])]),s("li",{on:{click:function(e){return t.onKeyboard(6)}}},[t._m(5),s("p",{staticClass:"character"},[t._v("MNO")])]),s("li",{on:{click:function(e){return t.onKeyboard(7)}}},[t._m(6),s("p",{staticClass:"character"},[t._v("PQRS")])]),s("li",{on:{click:function(e){return t.onKeyboard(8)}}},[t._m(7),s("p",{staticClass:"character"},[t._v("TUV")])]),s("li",{on:{click:function(e){return t.onKeyboard(9)}}},[t._m(8),s("p",{staticClass:"character"},[t._v("WXYZ")])]),s("li",{staticClass:"none"}),s("li",{staticClass:"zero",on:{click:function(e){return t.onKeyboard(0)}}},[s("strong",[t._v("0")])]),s("li",{staticClass:"delete",on:{click:t.deleteKey}},[t._v(" back ")])]),0!==t.payStatus?s("div",{staticClass:"loading-wrap"},[s("div",{staticClass:"loading"},[1===t.payStatus?s("img",{staticClass:"loading-ico",attrs:{src:n("4b50"),alt:""}}):t._e(),2===t.payStatus?s("img",{staticClass:"success-ico",attrs:{src:n("6582"),alt:""}}):t._e(),1===t.payStatus?s("p",[t._v(t._s(t.loadingText))]):t._e(),2===t.payStatus?s("p",[t._v(t._s(t.finishedText))]):t._e()])]):t._e(),t.isShowFail?s("div",{staticClass:"pay-fail"},[s("div",{staticClass:"pay-fail-lay"},[s("h3",{staticClass:"title"},[t._v(t._s(t.failTip))]),s("div",{staticClass:"btns"},[s("div",{on:{click:t.reInput}},[t._v("重新输入")]),s("div",{on:{click:t.forget}},[t._v("忘记密码")])])])]):t._e()])]):t._e()},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("3")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("4")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("5")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("7")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("8")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"num"},[n("strong",[t._v("9")])])}],w=(n("a9e3"),n("fb6a"),n("d3b7"),{name:"pay",props:{digit:{type:Number,default:6},show:{type:Boolean,required:!0,default:!1},title:{type:String,default:"请输入支付密码"},loadingText:{type:String,default:"正在支付"},finishedText:{type:String,default:"支付成功"},duration:{type:Number,default:500}},model:{prop:"show",event:"change"},data:function(){return{password:"",payStatus:0,failTip:"支付密码错误",isShowFail:!1}},watch:{password:function(t,e){t.length===this.digit&&(this.payStatus=1,this.$emit("input-end",this.password))}},methods:{onKeyboard:function(t){console.log(t),this.password=(this.password+t).slice(0,6)},deleteKey:function(){0!==this.password.length&&(this.password=this.password.slice(0,this.password.length-1))},cancel:function(){1!==this.payStatus&&(this.password="",this.payStatus=0,this.$emit("change",!1),this.$emit("close"))},$success:function(){var t=this;return new Promise((function(e,n){t.payStatus=2,setTimeout((function(){t.cancel(),e()}),t.duration)}))},$fail:function(t){t&&"string"===typeof t&&(this.failTip=t),this.payStatus=0,this.isShowFail=!0},reInput:function(){this.password="",this.isShowFail=!1},forget:function(){this.$emit("forget")}}}),S=w,k=(n("d765"),Object(r["a"])(S,b,C,!1,null,"27970d3a",null)),$=k.exports,x={install:function(t,e){t.component("vpay",$)}},E=x;s["a"].use(E),s["a"].config.productionTip=!1,new s["a"]({router:y,render:function(t){return t(l)}}).$mount("#app")},6582:function(t,e,n){t.exports=n.p+"img/success.e90f6e39.png"},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d765:function(t,e,n){"use strict";n("4a00")}});
//# sourceMappingURL=app.b21f2bbd.js.map