import{c as t,V as o,f,h as s,D as S}from"./index.b35b6c87.js";const r={xs:18,sm:24,md:32,lg:38,xl:46},z={size:String};function g(e,n=r){return t(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const v=e=>o(f(e)),x=e=>o(e);function k(e,n){return e!==void 0&&e()||n}function p(e,n){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return n}function y(e,n){return e!==void 0?n.concat(e()):n}function D(e,n){return e===void 0?n:n!==void 0?n.concat(e()):e()}function w(e,n,i,u,c,l){n.key=u+c;const a=s(e,n,i);return c===!0?S(a,l()):a}const d={size:{type:[Number,String],default:"1em"},color:String};function m(e){return{cSize:t(()=>e.size in r?`${r[e.size]}px`:e.size),classes:t(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var b=v({name:"QSpinner",props:{...d,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:i}=m(e);return()=>s("svg",{class:i.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[s("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{b as Q,y as a,g as b,v as c,p as d,w as e,x as f,d as g,k as h,m as i,D as j,z as u};
