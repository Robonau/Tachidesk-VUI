import{Q as L}from"./QIcon.ac005315.js";import{u as Y,Q as Z,a as x,b as ee,c as te,d as ae,e as oe}from"./use-meta.3f8de876.js";import{Q as h}from"./QBtn.c248b476.js";import{c as T,h as O,a as le}from"./QSpinner.cedf2831.js";import{c as m,h as w,i as ne,e as S,r as f,d as re,w as y,o as ie,l as se,g as ue,f as P,_ as N,j as c,k,m as r,n as o,p as $,q as C,t as Q,s as q,u as _,v as ce,x as I,y as D,z as H,F as M,A as de}from"./index.b35b6c87.js";import{Q as z,a as E}from"./QItemLabel.f084a15e.js";import{Q as R}from"./QItem.624de6a8.js";import{Q as me}from"./QResizeObserver.90150d42.js";import{u as fe}from"./use-quasar.9a62b4af.js";import"./use-dark.1516cb7d.js";import"./use-timeout.4812ac2b.js";import"./scroll.fbb25234.js";import"./dom.4a68f118.js";import"./TouchPan.e5cef90e.js";import"./selection.01e1b310.js";import"./format.2a3572e1.js";import"./QScrollObserver.25b184ae.js";import"./Ripple.5f8954d8.js";var ve=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const s=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:s.value},O(l.default))}}),pe=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const s=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:s.value,role:"toolbar"},O(l.default))}}),ke=T({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:s}){const{proxy:{$q:v}}=ue(),a=ne(se,S);if(a===S)return console.error("QFooter needs to be child of QLayout"),S;const p=f(parseInt(e.heightHint,10)),u=f(!0),b=f(re.value===!0||a.isContainer.value===!0?0:window.innerHeight),n=m(()=>e.reveal===!0||a.view.value.indexOf("F")>-1||v.platform.is.ios&&a.isContainer.value===!0),B=m(()=>a.isContainer.value===!0?a.containerHeight.value:b.value),V=m(()=>{if(e.modelValue!==!0)return 0;if(n.value===!0)return u.value===!0?p.value:0;const t=a.scroll.value.position+B.value+p.value-a.height.value;return t>0?t:0}),A=m(()=>e.modelValue!==!0||n.value===!0&&u.value!==!0),j=m(()=>e.modelValue===!0&&A.value===!0&&e.reveal===!0),U=m(()=>"q-footer q-layout__section--marginal "+(n.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(A.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(n.value!==!0?" hidden":""):"")),W=m(()=>{const t=a.rows.value.bottom,i={};return t[0]==="l"&&a.left.space===!0&&(i[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),t[2]==="r"&&a.right.space===!0&&(i[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),i});function d(t,i){a.update("footer",t,i)}function g(t,i){t.value!==i&&(t.value=i)}function K({height:t}){g(p,t),d("size",t)}function G(){if(e.reveal!==!0)return;const{direction:t,position:i,inflectionPoint:X}=a.scroll.value;g(u,t==="up"||i-X<100||a.height.value-B.value-i-p.value<300)}function J(t){j.value===!0&&g(u,!0),s("focusin",t)}y(()=>e.modelValue,t=>{d("space",t),g(u,!0),a.animate()}),y(V,t=>{d("offset",t)}),y(()=>e.reveal,t=>{t===!1&&g(u,e.modelValue)}),y(u,t=>{a.animate(),s("reveal",t)}),y([p,a.scroll,a.height],G),y(()=>v.screen.height,t=>{a.isContainer.value!==!0&&g(b,t)});const F={};return a.instances.footer=F,e.modelValue===!0&&d("size",p.value),d("space",e.modelValue),d("offset",V.value),ie(()=>{a.instances.footer===F&&(a.instances.footer=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const t=le(l.default,[w(me,{debounce:0,onResize:K})]);return e.elevated===!0&&t.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:U.value,style:W.value,onFocusin:J},t)}}});const ge=P({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function he(e,l,s,v,a,p){return c(),k(R,{to:e.link,class:"text-grey-7","active-class":"text-primary"},{default:r(()=>[e.icon?(c(),k(z,{key:0,avatar:""},{default:r(()=>[o(L,{name:e.icon,size:"lg"},null,8,["name"])]),_:1})):$("",!0),o(z,null,{default:r(()=>[o(E,null,{default:r(()=>[C(Q(e.title),1)]),_:1}),o(E,{caption:""},{default:r(()=>[C(Q(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var ye=N(ge,[["render",he]]);const we=[{title:"Library",caption:"",icon:"o_collections_bookmark",link:"/library?tab=0"},{title:"Updates",caption:"",icon:"o_new_releases",link:"/updates"},{title:"Extensions",caption:"",icon:"o_extension",link:"/extensions"},{title:"Sources",caption:"",icon:"o_explore",link:"/sources"},{title:"Downloads",caption:"",icon:"o_download",link:"/downloads"},{title:"Settings",caption:"",icon:"settings",link:"/settings"}],be=P({name:"MainLayout",components:{EssentialLink:ye},watch:{scrollbarTheme(e,l){document.body.classList.remove(l),document.body.classList.add(e)}},methods:{setTitle(e){this.title=e},minimize(){this.$q.platform.is.electron&&window.myWindowAPI.minimize()},toggleMaximize(){this.$q.platform.is.electron&&window.myWindowAPI.toggleMaximize()},closeApp(){this.$q.platform.is.electron&&window.myWindowAPI.close()},isFS(e){console.log(e),this.FS=e.detail}},computed:{scrollbarTheme(){return this.$q.dark.isActive?"darkSB":"lightSB"}},mounted(){document.body.classList.add(this.scrollbarTheme),window.addEventListener("full-screen",e=>this.isFS(e))},unmounted(){document.body.classList.remove(this.scrollbarTheme)},setup(){const e=fe(),l=f("Quasar App");Y(()=>({title:l.value,titleTemplate:v=>`${v} - Tachidesk Quasar`})),e.dark.set(e.localStorage.getItem("dark"));const s=f(!0);return{title:l,essentialLinks:we,tru:f(!0),leftDrawerOpen:s,toggledark(){e.dark.toggle(),e.localStorage.set("dark",e.dark.isActive)},doSearch:f(!1),Searchenter:f(!1),FS:f(!1)}}});function qe(e,l,s,v,a,p){const u=_("router-view"),b=_("EssentialLink");return c(),k(Z,{view:"hHh Lpr lFr",class:q([e.scrollbarTheme,"mainLayout"])},{default:r(()=>[o(te,{elevated:"",style:I("background-color:"+(e.$q.dark.isActive?"var(--q-primaryD)":"var(--q-primary)"))},{default:r(()=>[e.$q.platform.is.electron?(c(),k(x,{key:0,class:q(["q-electron-drag",e.FS?"hidden":""])},{default:r(()=>[o(L,{name:"img:favicon.ico",class:"q-electron-drag--exception"}),ce("div",null,Q(`${e.title} - Tachidesk Quasar`),1),o(ee),o(h,{dense:"",flat:"",icon:"minimize",onClick:e.minimize},null,8,["onClick"]),o(h,{dense:"",flat:"",icon:"crop_square",onClick:e.toggleMaximize},null,8,["onClick"]),o(h,{dense:"",flat:"",icon:"close",onClick:e.closeApp},null,8,["onClick"])]),_:1},8,["class"])):$("",!0),o(pe,null,{default:r(()=>[o(h,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l[0]||(l[0]=n=>e.leftDrawerOpen=!e.leftDrawerOpen)}),o(h,{icon:"arrow_back",flat:"",round:"",onClick:l[1]||(l[1]=n=>e.$router.go(-1))}),o(ve,{class:"col-grow q-pr-none"},{default:r(()=>[C(Q(e.$q.screen.xs?"":e.title),1)]),_:1}),o(u,{name:"inBar"}),o(h,{elevated:"",class:"q-ml-sm",round:"","text-color":e.$q.dark.isActive?"white":"dark",icon:e.$q.dark.isActive?"light_mode":"dark_mode",onClick:e.toggledark},null,8,["text-color","icon","onClick"])]),_:1})]),_:1},8,["style"]),e.$q.screen.sm||e.$q.screen.xs?(c(),k(ke,{key:0,elevated:"",class:q(["text-primary flex no-wrap justify-evenly",e.$q.dark.isActive?"bg-dark":"bg-white"])},{default:r(()=>[(c(!0),D(M,null,H(e.essentialLinks,n=>(c(),k(R,{key:n.link,to:n.link,class:"text-grey-7","active-class":"text-primary"},{default:r(()=>[o(z,null,{default:r(()=>[o(L,{name:n.icon,size:"sm"},null,8,["name"])]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1},8,["class"])):$("",!0),e.$q.screen.sm||e.$q.screen.xs?$("",!0):(c(),k(ae,{key:1,modelValue:e.tru,"onUpdate:modelValue":l[2]||(l[2]=n=>e.tru=n),"show-if-above":"",mini:e.leftDrawerOpen,breakpoint:0,style:I("background-color:"+(e.$q.dark.isActive?"var(--q-secondaryD)":"var(--q-secondary)"))},{default:r(()=>[(c(!0),D(M,null,H(e.essentialLinks,n=>(c(),k(b,de({key:n.title},n),null,16))),128))]),_:1},8,["modelValue","mini","style"])),o(oe,null,{default:r(()=>[o(u,{onSetTitle:e.setTitle,class:q(e.$q.dark.isActive?"dark-page":"white"),style:{"overflow-y":"auto"}},null,8,["onSetTitle","class"])]),_:1})]),_:1},8,["class"])}var Pe=N(be,[["render",qe]]);export{Pe as default};
