import{b as i,P as n}from"./index.b35b6c87.js";let a=n.getItem("baseUrl");function c(t=void 0){const e={...t},o=n.getItem("auth");return o!=null&&(e.headers={...e.headers,Authorization:`Basic ${btoa(o.username+":"+o.password)}`}),e}function u(){a=n.getItem("baseUrl")}function r(t,e=void 0){const o=a+t;return fetch(o,c(e))}async function s(t,e=void 0){return(await r(t,e)).json()}var h=i(({app:t})=>{t.config.globalProperties.$fetch=r,t.config.globalProperties.$fetchJSON=s,t.provide("fetch",r),t.provide("fetchJSON",s)});export{c as authOptions,h as default,s as fetchJSON,r as fetcher,u as resetBase};
