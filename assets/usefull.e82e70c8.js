import{P as s}from"./index.b35b6c87.js";import{fetcher as a}from"./fetcher.f8235356.js";function m(r,e,t=null){e==t?s.remove(r):s.set(r,e)}async function u(r){const e=await a(r);if(e.status==200){const t=await e.blob(),o=new FileReader;return o.readAsDataURL(t),await new Promise(n=>{o.onloadend=()=>{n(o.result)}})}else return new Promise(t=>{t("")})}export{u as g,m as s};
