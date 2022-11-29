import{r as O,c as f,w as C,o as k,X as E,W as x,h as H,T as ee,g as te,N as oe}from"./index.b35b6c87.js";import{u as ae,v as A,a as ne,b as ie,c as le,r as q,s as se,p as D,d as re}from"./position-engine.0d3d3347.js";import{u as ue,a as ce,b as de,c as fe}from"./use-timeout.4812ac2b.js";import{u as me,a as ve}from"./QDialog.476c5919.js";import{u as he,a as ge}from"./use-transition.6c02567b.js";import{c as pe,h as Te}from"./QSpinner.cedf2831.js";import{c as ye}from"./scroll.fbb25234.js";import{c as M}from"./selection.01e1b310.js";var xe=pe({name:"QTooltip",inheritAttrs:!1,props:{...ae,...ue,...he,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ne},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ce],setup(e,{slots:j,emit:p,attrs:m}){let i,l;const v=te(),{proxy:{$q:a}}=v,s=O(null),r=O(!1),L=f(()=>D(e.anchor,a.lang.rtl)),W=f(()=>D(e.self,a.lang.rtl)),N=f(()=>e.persistent!==!0),{registerTick:Q,removeTick:R}=me(),{registerTimeout:d}=de(),{transition:_,transitionStyle:B}=ge(e,r),{localScrollTarget:T,changeScrollEvent:I,unconfigureScrollTarget:U}=ie(e,P),{anchorEl:o,canShow:V,anchorEvents:u}=le({showing:r,configureAnchorEl:K}),{show:X,hide:h}=fe({showing:r,canShow:V,handleShow:z,handleHide:F,hideOnRouteChange:N,processOnMount:!0});Object.assign(u,{delayShow:G,delayHide:J});const{showPortal:y,hidePortal:b,renderPortal:$}=ve(v,s,Z);if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return h(n),n.target.classList.contains("q-dialog__backdrop")&&oe(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&r.value===!0);C(g,n=>{(n===!0?re:q)(t)}),k(()=>{q(t)})}function z(t){y(),Q(()=>{l=new MutationObserver(()=>c()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),c(),P()}),i===void 0&&(i=C(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,c)),d(()=>{y(!0),p("show",t)},e.transitionDuration)}function F(t){R(),b(),S(),d(()=>{b(!0),p("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),E(u,"tooltipTemp")}function c(){const t=s.value;o.value===null||!t||se({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(a.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(u,"tooltipTemp",n)}d(()=>{X(t)},e.delay)}function J(t){a.platform.is.mobile===!0&&(E(u,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{h(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(u,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ye(o.value,e.scrollTarget);const t=e.noParentEvent===!0?c:h;I(T.value,t)}}function Y(){return r.value===!0?H("div",{...m,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",m.class],style:[m.style,B.value],role:"tooltip"},Te(j.default)):null}function Z(){return H(ee,{name:_.value,appear:!0},Y)}return k(S),Object.assign(v.proxy,{updatePosition:c}),$}});export{xe as Q};
