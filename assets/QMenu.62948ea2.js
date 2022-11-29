import{Q as O}from"./QIcon.ac005315.js";import{R as se}from"./Ripple.5f8954d8.js";import{u as V,a as $}from"./use-dark.1516cb7d.js";import{c as N,u as re,b as de,e as fe,j as ve,h as me}from"./QSpinner.cedf2831.js";import{c as a,h as s,g as W,N as U,r as H,w as I,Y as he,T as ge,o as be}from"./index.b35b6c87.js";import{u as ke,v as K,a as qe,b as Se,c as Ce,r as j,s as ye,p as z,d as xe}from"./position-engine.0d3d3347.js";import{u as Be,a as Pe,b as Te,c as Oe}from"./use-timeout.4812ac2b.js";import{u as _e,a as Re,b as we,r as Ee,d as L,e as Fe,f as Ae}from"./QDialog.476c5919.js";import{u as De,a as Me}from"./use-transition.6c02567b.js";import{c as Qe}from"./scroll.fbb25234.js";import{a as He}from"./dom.4a68f118.js";import{b as Ie}from"./focus-manager.32f8d49a.js";const Ke={xs:8,sm:10,md:14,lg:20,xl:24};var Ze=N({name:"QChip",props:{...V,...re,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:C,emit:l}){const{proxy:{$q:c}}=W(),r=$(e,c),v=de(e,Ke),d=a(()=>e.selected===!0||e.icon!==void 0),g=a(()=>e.selected===!0?e.iconSelected||c.iconSet.chip.selected:e.icon),k=a(()=>e.iconRemove||c.iconSet.chip.remove),f=a(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),i=a(()=>{const o=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(o?` text-${o} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(f.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(r.value===!0?" q-chip--dark q-dark":"")}),n=a(()=>{const o=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},m={...o,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||c.lang.label.remove};return{chip:o,remove:m}});function u(o){o.keyCode===13&&q(o)}function q(o){e.disable||(l("update:selected",!e.selected),l("click",o))}function S(o){(o.keyCode===void 0||o.keyCode===13)&&(U(o),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function y(){const o=[];f.value===!0&&o.push(s("div",{class:"q-focus-helper"})),d.value===!0&&o.push(s(O,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const m=e.label!==void 0?[s("div",{class:"ellipsis"},[e.label])]:void 0;return o.push(s("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ve(C.default,m))),e.iconRight&&o.push(s(O,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&o.push(s(O,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:k.value,...n.value.remove,onClick:S,onKeyup:S})),o}return()=>{if(e.modelValue===!1)return;const o={class:i.value,style:v.value};return f.value===!0&&Object.assign(o,n.value.chip,{onClick:q,onKeyup:u}),fe("div",o,y(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[se,e.ripple]])}}}),pe=N({name:"QMenu",inheritAttrs:!1,props:{...ke,...Be,...V,...De,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:K},self:{type:String,validator:K},offset:{type:Array,validator:qe},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pe,"click","escape-key"],setup(e,{slots:C,emit:l,attrs:c}){let r=null,v,d,g;const k=W(),{proxy:f}=k,{$q:i}=f,n=H(null),u=H(!1),q=a(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),S=$(e,i),{registerTick:y,removeTick:o}=_e(),{registerTimeout:m}=Te(),{transition:Y,transitionStyle:G}=Me(e,u),{localScrollTarget:_,changeScrollEvent:J,unconfigureScrollTarget:X}=Se(e,M),{anchorEl:h,canShow:Z}=Ce({showing:u}),{hide:R}=Oe({showing:u,canShow:Z,handleShow:ae,handleHide:ne,hideOnRouteChange:q,processOnMount:!0}),{showPortal:w,hidePortal:E,renderPortal:p}=Re(k,n,ie),x={anchorEl:h,innerRef:n,onClickOutside(t){if(e.persistent!==!0&&u.value===!0)return R(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&U(t),!0}},F=a(()=>z(e.anchor||(e.cover===!0?"center middle":"bottom start"),i.lang.rtl)),ee=a(()=>e.cover===!0?F.value:z(e.self||"top start",i.lang.rtl)),te=a(()=>(e.square===!0?" q-menu--square":"")+(S.value===!0?" q-menu--dark q-dark":"")),oe=a(()=>e.autoClose===!0?{onClick:le}:{}),A=a(()=>u.value===!0&&e.persistent!==!0);I(A,t=>{t===!0?(Fe(P),xe(x)):(L(P),j(x))});function B(){Ie(()=>{let t=n.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function ae(t){if(r=e.noRefocus===!1?document.activeElement:null,we(Q),w(),M(),v=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const T=he(t);if(T.left!==void 0){const{top:ue,left:ce}=h.value.getBoundingClientRect();v={left:T.left-ce,top:T.top-ue}}}d===void 0&&(d=I(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,b)),e.noFocus!==!0&&document.activeElement.blur(),y(()=>{b(),e.noFocus!==!0&&B()}),m(()=>{i.platform.is.ios===!0&&(g=e.autoClose,n.value.click()),b(),w(!0),l("show",t)},e.transitionDuration)}function ne(t){o(),E(),D(!0),r!==null&&(t===void 0||t.qClickOutside!==!0)&&(r.focus(),r=null),m(()=>{E(!0),l("hide",t)},e.transitionDuration)}function D(t){v=void 0,d!==void 0&&(d(),d=void 0),(t===!0||u.value===!0)&&(Ee(Q),X(),j(x),L(P)),t!==!0&&(r=null)}function M(){(h.value!==null||e.scrollTarget!==void 0)&&(_.value=Qe(h.value,e.scrollTarget),J(_.value,b))}function le(t){g!==!0?(Ae(f,t),l("click",t)):g=!1}function Q(t){A.value===!0&&e.noFocus!==!0&&He(n.value,t.target)!==!0&&B()}function P(t){l("escape-key"),R(t)}function b(){const t=n.value;t===null||h.value===null||ye({el:t,offset:e.offset,anchorEl:h.value,anchorOrigin:F.value,selfOrigin:ee.value,absoluteOffset:v,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ie(){return s(ge,{name:Y.value,appear:!0},()=>u.value===!0?s("div",{role:"menu",...c,ref:n,tabindex:-1,class:["q-menu q-position-engine scroll"+te.value,c.class],style:[c.style,G.value],...oe.value},me(C.default)):null)}return be(D),Object.assign(f,{focus:B,updatePosition:b}),p}});export{Ze as Q,pe as a};
