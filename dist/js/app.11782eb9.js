(function(){"use strict";var e={2392:function(e,t,n){n.d(t,{I:function(){return i},r:function(){return l}});var r=n(7795),a=n(4233),o=n(4287);const u=(0,r.ZF)({apiKey:"AIzaSyCVBY-KesOi-JeJGmLJNDIuhsemXOsZqEk",authDomain:"pet-project-c506c.firebaseapp.com",projectId:"pet-project-c506c",storageBucket:"pet-project-c506c.appspot.com",messagingSenderId:"72062101010",appId:"1:72062101010:web:baa6e0b89be02ff00fdacb"}),i=(0,a.v0)(u),l=(0,o.ad)(u)},234:function(e,t,n){var r=n(9199),a=n(7139);const o={key:0,class:"time"};var u={__name:"App",setup(e){const t=(0,a.oR)(),n=(0,r.Fl)((()=>t.getters.getCurrentTime));return(0,r.bv)((()=>{t.dispatch("fetchCurrentTime")})),setInterval((()=>{t.dispatch("fetchCurrentTime")}),6e4),(e,t)=>{const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n.value?((0,r.wg)(),(0,r.iD)("p",o,(0,r.zw)(n.value),1)):(0,r.kq)("",!0),(0,r.Wm)(a)],64)}}};const i=u;var l=i,s=n(2483);const c={class:"auth"},d={class:"auth__link-wrapper"},m={class:"auth__inputs-wrapper"};function p(e,t){const n=(0,r.up)("router-link"),a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",d,[(0,r.Wm)(n,{class:"auth__link",to:"login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1}),(0,r.Wm)(n,{class:"auth__link",to:"register"},{default:(0,r.w5)((()=>[(0,r.Uk)("SignUp")])),_:1})]),(0,r._)("div",m,[(0,r.Wm)(a)])])}var f=n(89);const v={},h=(0,f.Z)(v,[["render",p],["__scopeId","data-v-2bfe065e"]]);var g=h,b=(n(7658),n(3488)),w=n(3946),y=n(4233),_=n(2392);const k={class:"login-form"},C={class:"login-form__buttons-wrapper"},S={key:0,class:"error"};var U={__name:"LoginForm",setup(e){const t=(0,s.tv)(),n=(0,r.iH)(""),a=(0,r.iH)(""),o=(0,r.iH)(""),u=async()=>{try{await(0,y.e5)(_.I,n.value,a.value).then((()=>{alert("Sucsess login!!!")})).then((()=>{t.push("/")})).catch((e=>{switch(e.code){case"auth/invalid-email":o.value="Invalid email";break;case"auth/wrong-password":o.value="Wrong password";break;case"auth/missing-password":o.value="Enter password";break;case"auth/user-not-found":o.value="User not found";break;case"auth/user-disabled":o.value="User disabled";break}}))}catch{alert("something go wrong")}};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",k,[(0,r.Wm)((0,r.SU)(w.Z),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),type:"email",charactersMaxCount:50,placeholder:"email"},null,8,["modelValue"]),(0,r.Wm)((0,r.SU)(w.Z),{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),type:"password",charactersMaxCount:50,placeholder:"password"},null,8,["modelValue"]),(0,r._)("div",C,[(0,r.Wm)((0,r.SU)(b.Z),{class:"button button__primary button__primary_wide",onClick:u},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1}),(0,r.Wm)((0,r.SU)(b.Z),{class:"button button__primary button__primary_wide",onClick:t[2]||(t[2]=t=>e.$router.push({path:"/register"}))},{default:(0,r.w5)((()=>[(0,r.Uk)("SignUp ")])),_:1})]),o.value?((0,r.wg)(),(0,r.iD)("div",S,(0,r.zw)(o.value),1)):(0,r.kq)("",!0)]))}};const I=(0,f.Z)(U,[["__scopeId","data-v-7ae5e03e"]]);var T=I;const V={class:"register-form"},E={key:0,class:"error"};var O={__name:"RegisterForm",setup(e){const t=(0,s.tv)(),n=(0,r.iH)(""),a=(0,r.iH)(""),o=(0,r.iH)(""),u=(0,r.iH)(""),i=async()=>{if(""===n.value||""===n.value.trim())u.value="Enter your name";else try{await(0,y.Xb)(_.I,a.value,o.value).then((()=>{(0,y.ck)(_.I.currentUser,{displayName:`${n.value}`})})).then((()=>{alert("You have an account now!")})).then((()=>{t.push({path:"/"})})).catch((e=>{switch(e.code){case"auth/missing-email":u.value="Enter email";break;case"auth/invalid-email":u.value="Invalid email";break;case"auth/weak-password":u.value="Password must be at least 6 characters";break;case"auth/missing-password":u.value="Enter password";break;case"auth/email-already-in-use":u.value="Email already in use";break}}))}catch{alert("something go wrong")}};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",V,[(0,r.Wm)((0,r.SU)(w.Z),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),type:"text",charactersMaxCount:50,placeholder:"name"},null,8,["modelValue"]),(0,r.Wm)((0,r.SU)(w.Z),{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),type:"email",charactersMaxCount:50,placeholder:"email"},null,8,["modelValue"]),(0,r.Wm)((0,r.SU)(w.Z),{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e),type:"password",charactersMaxCount:50,placeholder:"password"},null,8,["modelValue"]),(0,r.Wm)((0,r.SU)(b.Z),{class:"button button__primary",onClick:i},{default:(0,r.w5)((()=>[(0,r.Uk)("Join now")])),_:1}),u.value?((0,r.wg)(),(0,r.iD)("div",E,(0,r.zw)(u.value),1)):(0,r.kq)("",!0)]))}};const Z=(0,f.Z)(O,[["__scopeId","data-v-1e315c90"]]);var j=Z;const x=()=>new Promise(((e,t)=>{const n=(0,y.Aj)(_.I,(t=>{n(),e(t)}),t)})),D=[{name:"authview",path:"/auth",component:g,redirect:"/login",children:[{name:"loginform",path:"/login",component:T},{name:"registerform",path:"/register",component:j}]},{name:"mainview",path:"/",component:()=>n.e(306).then(n.bind(n,6306)),redirect:"/posts",meta:{requiredAuth:!0},children:[{name:"userposts",path:"/posts",component:()=>Promise.all([n.e(450),n.e(404)]).then(n.bind(n,8410))},{name:"userprofile",path:"/profile",component:()=>n.e(598).then(n.bind(n,598))}]},{name:"postview",path:"/:id",component:()=>Promise.all([n.e(450),n.e(406)]).then(n.bind(n,3744)),meta:{requiredAuth:!0}}],M=(0,s.p7)({history:(0,s.PO)("/"),routes:D});M.beforeEach((async e=>{const t=await x();if(e.meta.requiredAuth&&!t)return"/auth"}));var W=M,A=n(4161),N=(0,a.MT)({state:()=>({currentTime:""}),getters:{getCurrentTime(e){const t=new Date(e.currentTime);return t.toLocaleTimeString("ru-RU",{hour:"numeric",minute:"numeric"})}},mutations:{setCurrentTime(e,t){e.currentTime=t}},actions:{async fetchCurrentTime({commit:e}){await(0,A.Z)("http://worldtimeapi.org/api/timezone/Europe/Moscow").then((t=>{e("setCurrentTime",t.data.datetime)})).catch((()=>{e("setCurrentTime","Sorry, time server is not available")}))}},modules:{}});(0,r.ri)(l).use(N).use(W).mount("#app")},3488:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9199),a={__name:"MyButton",emits:["click"],setup(e,{emit:t}){const n=()=>{t("click")};return(e,t)=>((0,r.wg)(),(0,r.iD)("button",{class:"",onClick:n},[(0,r.WI)(e.$slots,"default")]))}},o=n(89);const u=(0,o.Z)(a,[["__scopeId","data-v-369cc7d8"]]);var i=u},3946:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9199);const a=["value","maxlength"];var o={__name:"MyInput",props:{modelValue:String,charactersMaxCount:Number},emits:["update:modelValue"],setup(e,{emit:t}){const n=e=>{t("update:modelValue",e.target.value)};return(t,o)=>((0,r.wg)(),(0,r.iD)("input",{class:"input",value:e.modelValue,onInput:n,maxlength:e.charactersMaxCount},null,40,a))}},u=n(89);const i=(0,u.Z)(o,[["__scopeId","data-v-dcb65fda"]]);var l=i}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],o=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<u&&(u=o));if(i){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{306:"2c72f778",404:"027a751c",406:"437e6298",450:"f14a1caa",598:"0b914bb5"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{306:"6135ef4e",404:"11131eb7",406:"e761a16a",598:"2cf5142a"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={};n.l=function(t,r,a,o){if(e[t])e[t].push(r);else{var u,i;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var c=l[s];if(c.getAttribute("src")==t){u=c;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.src=t),e[t]=[r];var d=function(n,r){u.onerror=u.onload=null,clearTimeout(m);var a=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(r)})),n)return n(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=i,o.parentNode&&o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=u,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){a=u[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var u=n.miniCssF(r),i=n.p+u;if(t(u,i))return a();e(r,i,null,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={306:1,404:1,406:1,598:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var u=n.p+n.u(t),i=new Error,l=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,a[1](i)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,u=r[0],i=r[1],l=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var c=l(n)}for(t&&t(r);s<u.length;s++)o=u[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunk"]=self["webpackChunk"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(234)}));r=n.O(r)})();
//# sourceMappingURL=app.11782eb9.js.map