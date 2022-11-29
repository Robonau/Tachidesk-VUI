import{Q as w}from"./QIcon.ac005315.js";import{u as B,a as Q}from"./use-dark.1516cb7d.js";import{c as R,u as j,b as z,a as P,h as T}from"./QSpinner.cedf2831.js";import{o as V,u as $}from"./option-sizes.72a65bda.js";import{u as D,a as F}from"./use-form.d75ed6a7.js";import{h as o,r as M,c as n,g as A,ae as m,N as f}from"./index.b35b6c87.js";const K=o("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[o("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),o("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var J=R({name:"QRadio",props:{...B,...j,...D,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:i,emit:b}){const{proxy:u}=A(),k=Q(e,u.$q),h=z(e,V),s=M(null),{refocusTargetEl:c,refocusTarget:g}=$(e,s),t=n(()=>m(e.modelValue)===m(e.val)),q=n(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(k.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),_=n(()=>{const a=e.color!==void 0&&(e.keepColor===!0||t.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${t.value===!0?"truthy":"falsy"}${a}`}),d=n(()=>(t.value===!0?e.checkedIcon:e.uncheckedIcon)||null),y=n(()=>e.disable===!0?-1:e.tabindex||0),S=n(()=>{const a={type:"radio"};return e.name!==void 0&&Object.assign(a,{"^checked":t.value===!0?"checked":void 0,name:e.name,value:e.val}),a}),x=F(S);function l(a){a!==void 0&&(f(a),g(a)),e.disable!==!0&&t.value!==!0&&b("update:modelValue",e.val,a)}function C(a){(a.keyCode===13||a.keyCode===32)&&f(a)}function I(a){(a.keyCode===13||a.keyCode===32)&&l(a)}return Object.assign(u,{set:l}),()=>{const a=d.value!==null?[o("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[o(w,{class:"q-radio__icon",name:d.value})])]:[K];e.disable!==!0&&x(a,"unshift"," q-radio__native q-ma-none q-pa-none");const r=[o("div",{class:_.value,style:h.value,"aria-hidden":"true"},a)];c.value!==null&&r.push(c.value);const v=e.label!==void 0?P(i.default,[e.label]):T(i.default);return v!==void 0&&r.push(o("div",{class:"q-radio__label q-anchor--skip"},v)),o("div",{ref:s,class:q.value,tabindex:y.value,role:"radio","aria-label":e.label,"aria-checked":t.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:l,onKeydown:C,onKeyup:I},r)}}});export{J as Q};
