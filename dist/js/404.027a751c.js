"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[404],{8410:function(s,t,e){e.r(t),e.d(t,{default:function(){return W}});e(7658);var o=e(9199),i=e(450),a=e(2392),l=e(4287);const p={class:"post-item__header"},c={class:"post-item__title"},_={class:"post-item__body"},r={class:"post-item__footer"},n={class:"post-item__comments-count"},d={class:"post-item__date"};var u={__name:"PostItem",props:{post:{type:Object,required:!0}},setup(s){const t=s,e=async()=>{await(0,l.oe)((0,l.JU)(a.r,a.I.currentUser.uid,`${t.post.id}`))};return(t,a)=>((0,o.wg)(),(0,o.iD)("div",{class:"post-item",onClick:a[0]||(a[0]=e=>t.$router.push(`/${s.post.id}`))},[(0,o._)("div",p,[(0,o._)("h3",c,(0,o.zw)(s.post.title),1),(0,o.Wm)((0,o.SU)(i.Z),{iconName:"#close",onClick:(0,o.iM)(e,["stop"])},null,8,["onClick"])]),(0,o._)("p",_,(0,o.zw)(s.post.body),1),(0,o._)("div",r,[(0,o._)("p",n,"Количeство комментариев: "+(0,o.zw)(s.post.comments.length),1),(0,o._)("p",d,(0,o.zw)(s.post.creationDate),1)])]))}},v=e(89);const m=(0,v.Z)(u,[["__scopeId","data-v-1beb42d6"]]);var w=m;const g=s=>((0,o.dD)("data-v-1a83697d"),s=s(),(0,o.Cn)(),s),h={class:"post-list"},k={key:0,class:"post-list__plug"},f=g((()=>(0,o._)("p",{class:"post-list__title"},"Loading posts...",-1))),y=[f],D={key:1,class:"post-list__wrapper"},b={key:2,class:"post-list__plug"},C=g((()=>(0,o._)("p",{class:"post-list__title"},"Create your first post",-1))),I=[C];var U={__name:"UserPosts",setup(s){const t=(0,o.iH)(),e=(0,l.IO)((0,l.hJ)(a.r,a.I.currentUser.uid),(0,l.Xo)("id"));return(0,l.cf)(e,(s=>{let e=[];s.forEach((s=>{e.push(s.data())})),t.value=e.reverse()})),(s,e)=>((0,o.wg)(),(0,o.iD)("div",h,[void 0===t.value?((0,o.wg)(),(0,o.iD)("div",k,y)):t.value.length>0?((0,o.wg)(),(0,o.iD)("div",D,[(0,o.Wm)(o.W3,{name:"post-list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,(s=>((0,o.wg)(),(0,o.j4)(w,{key:s.id,post:s},null,8,["post"])))),128))])),_:1})])):((0,o.wg)(),(0,o.iD)("div",b,I))]))}};const z=(0,v.Z)(U,[["__scopeId","data-v-1a83697d"]]);var W=z}}]);
//# sourceMappingURL=404.027a751c.js.map