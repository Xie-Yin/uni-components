import{n as e}from"./index.f0f506f3.js";import"./vendor.72c0fd4c.js";const r={};var t=e({data:()=>({form:{name:"",phone:"",type:1}}),mounted(){this.$refs.form.setRule({name:[{required:!0,message:"请输入用户名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],type:[{required:!0,type:"number",message:"请选择账号类型",trigger:"blur"}]})},methods:{onSubmit(){this.$refs.form.validate().then((()=>{})).catch((e=>{console.log(e)}))}}},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-demo"},[t("x-form",{ref:"form",attrs:{model:e.form}},[t("x-form-item",{attrs:{label:"用户名",prop:"name"}},[t("x-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),t("x-form-item",{attrs:{label:"手机号",prop:"phone"}},[t("x-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}})],1),t("x-form-item",{attrs:{label:"账号类型",prop:"type"}},[t("x-picker",{attrs:{options:[{label:"微信",value:1},{label:"钉钉",value:2},{label:"Github",value:3}]},model:{value:e.form.type,callback:function(r){e.$set(e.form,"type",r)},expression:"form.type"}})],1),t("div",{staticClass:"x-button __primary",on:{click:e.onSubmit}},[e._v("提交")])],1)],1)}),[],!1,o,null,null,null);function o(e){for(let t in r)this[t]=r[t]}var a=function(){return t.exports}();export{a as default};
