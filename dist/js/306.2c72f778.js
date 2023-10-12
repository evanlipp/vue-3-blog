"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[306],{5394:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(9199),o={__name:"MyModal",props:{visibility:{type:Boolean,default:!1}},emits:["hideModal"],setup(e,{emit:t}){const a=()=>{t("hideModal")};return(t,o)=>e.visibility?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"modal",onClick:a},[(0,l._)("div",{onClick:o[0]||(o[0]=(0,l.iM)((()=>{}),["stop"])),class:"modal__content"},[(0,l.WI)(t.$slots,"default")])])):(0,l.kq)("",!0)}},i=a(89);const n=(0,i.Z)(o,[["__scopeId","data-v-d9b9df20"]]);var u=n},2137:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(9199);const o=["value","maxlength"];var i={__name:"MyTextarea",props:{modelValue:String,charactersMaxCount:Number},emits:["update:modelValue"],setup(e,{emit:t}){const a=e=>{t("update:modelValue",e.target.value)};return(t,i)=>((0,l.wg)(),(0,l.iD)("textarea",{class:"textarea",value:e.modelValue,onInput:a,maxlength:e.charactersMaxCount},null,40,o))}},n=a(89);const u=(0,n.Z)(i,[["__scopeId","data-v-112ad556"]]);var s=u},6306:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var l=a(9199),o=a(3488),i=a(5394),n=a(3946),u=a(2137),s=a(2392),d=a(4287);const r={class:"form"},c={key:0,class:"error"};var v={__name:"NewPostForm",emits:["hideModal"],setup(e,{emit:t}){const a=(0,l.iH)(),i=()=>{t("hideModal")},v=(0,l.iH)({title:"",body:""}),m=async()=>{if(""===v.value.title||""===v.value.title.trim())a.value="Enter post title";else if(""===v.value.body||""===v.value.body.trim())a.value="Enter post body";else{const e=Date.now(),t=new Date(e).toLocaleDateString("ru-RU",{hour:"numeric",minute:"numeric"}),a={id:e,title:v.value.title,body:v.value.body,creationDate:t,authorEmail:s.I.currentUser.email,comments:[]};await(0,d.pl)((0,d.JU)(s.r,s.I.currentUser.uid,`${e}`),a)}t("hideModal")};return(e,t)=>((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)((0,l.SU)(n.Z),{modelValue:v.value.title,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value.title=e),type:"text",placeholder:"Post title",charactersMaxCount:80},null,8,["modelValue"]),(0,l.Wm)((0,l.SU)(u.Z),{modelValue:v.value.body,"onUpdate:modelValue":t[1]||(t[1]=e=>v.value.body=e),type:"text",placeholder:"Post body"},null,8,["modelValue"]),a.value?((0,l.wg)(),(0,l.iD)("p",c,(0,l.zw)(a.value),1)):(0,l.kq)("",!0),(0,l.Wm)((0,l.SU)(o.Z),{class:"button button__primary",onClick:m},{default:(0,l.w5)((()=>[(0,l.Uk)("Publish")])),_:1}),(0,l.Wm)((0,l.SU)(o.Z),{class:"button button__primary",onClick:i},{default:(0,l.w5)((()=>[(0,l.Uk)("Cancel")])),_:1})]))}},m=a(89);const _=(0,m.Z)(v,[["__scopeId","data-v-6171a3ea"]]);var p=_,b=a(4233),f=a(7139);const k=e=>((0,l.dD)("data-v-d95ccbfc"),e=e(),(0,l.Cn)(),e),y={class:"main"},w={class:"navigation"},h=k((()=>(0,l._)("h1",{class:"logo"},"blog,",-1))),U={class:"content"};var g={__name:"MainView",setup(e){(0,f.oR)();const t=(0,l.iH)(!1),a=()=>{(0,b.w7)(s.I)};return(e,n)=>{const u=(0,l.up)("router-link"),s=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",y,[(0,l._)("div",w,[h,(0,l.Wm)(u,{class:"navigation__link",to:"profile"},{default:(0,l.w5)((()=>[(0,l.Uk)("My profile")])),_:1}),(0,l.Wm)(u,{class:"navigation__link",to:"posts"},{default:(0,l.w5)((()=>[(0,l.Uk)("My posts")])),_:1}),(0,l.Wm)((0,l.SU)(o.Z),{class:"button navigation__link",onClick:n[0]||(n[0]=e=>t.value=!t.value)},{default:(0,l.w5)((()=>[(0,l.Uk)("New post")])),_:1}),(0,l.Wm)(u,{class:"navigation__link",to:"auth",onClick:a},{default:(0,l.w5)((()=>[(0,l.Uk)("Quit")])),_:1})]),(0,l._)("div",U,[(0,l.Wm)(s)])]),(0,l.Wm)((0,l.SU)(i.Z),{visibility:t.value,onHideModal:n[2]||(n[2]=e=>t.value=!t.value)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,l.SU)(p),{onHideModal:n[1]||(n[1]=e=>t.value=!t.value)})])),_:1},8,["visibility"])],64)}}};const M=(0,m.Z)(g,[["__scopeId","data-v-d95ccbfc"]]);var C=M}}]);
//# sourceMappingURL=306.2c72f778.js.map