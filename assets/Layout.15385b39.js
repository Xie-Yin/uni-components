import{n as t,m as a}from"./index.f0f506f3.js";import"./vendor.72c0fd4c.js";const e={};var i=t({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticClass:"header__content app-container"},[e("div",{staticClass:"logo"},[t._v("Uni Components")]),e("div",{staticClass:"nav"},[e("x-icon",{attrs:{name:"i-github-circle-fill"}}),e("a",{staticStyle:{"margin-left":"4px"},attrs:{href:"https://github.com/Xie-Yin/uni-components",target:"__blank"}},[t._v("Github")])],1)])])}),[],!1,n,"78ff711c",null,null);function n(t){for(let a in e)this[a]=e[a]}var r=function(){return i.exports}();const s={};var l=t({},(function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"app-container"},[t._v(" footer ")])}),[],!1,o,null,null,null);function o(t){for(let a in s)this[a]=s[a]}var c=function(){return l.exports}();const u={};var f=t({data:()=>({mdRoutes:a})},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"side-bar"},t._l(t.mdRoutes,(function(a){return e("router-link",{key:a.path,staticClass:"side-bar__link",attrs:{to:{name:a.name}}},[t._v(t._s(a.meta.title))])})),1)}),[],!1,d,"2a93061b",null,null);function d(t){for(let a in u)this[a]=u[a]}var m=function(){return f.exports}();const v={};var _=t({data:()=>({iframSrc:"/#/demo/form"}),watch:{$route:{immediate:!0,handler(t){this.iframSrc="/#/demo"+t.fullPath,console.log("/#/demo"+t.fullPath)}}}},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"simulator"},[e("iframe",{staticClass:"simulator__iframe",attrs:{src:t.iframSrc}})])}),[],!1,h,"d70e35c2",null,null);function h(t){for(let a in v)this[a]=v[a]}const p={};var C=t({components:{Header:r,SideBar:m,Footer:c,Simulator:function(){return _.exports}()},data:()=>({})},(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"layout"},[a("div",{staticClass:"layout__header"},[a("Header")],1),a("div",{staticClass:"layout__main"},[a("div",{staticClass:"app-container"},[a("div",{staticClass:"layout__side-bar"},[a("SideBar")],1),a("div",{staticClass:"layout__content"},[a("router-view")],1),a("div",{staticClass:"layout__simulator"},[a("Simulator")],1)])])])}),[],!1,b,"4b7291e6",null,null);function b(t){for(let a in p)this[a]=p[a]}var x=function(){return C.exports}();export{x as default};
