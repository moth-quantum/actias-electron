import{N as w,S as et,i as tt,s as nt,aq as La,e as Zt,ar as Da,b as j,E as be,h as P,as as Ba,a6 as $t,ag as en,k as ae,a as gt,l as re,m as we,c as pt,n as M,$ as ve,J as Je,D as Me,K as se,a1 as Wn,g as qe,v as za,d as bt,f as Ua,y as Ha,z as Fa,A as Ga,B as Va,C as tn,q as Rt,r as Pt,u as Lt,X as nn,L as qn,M as ja,a8 as Ya,at as an,I as Wa,au as qa}from"./index.9d780e41.js";import{w as _,d as X}from"./index.f4cc7656.js";const Dt=_({}),H=_([]),at=(a=1)=>{typeof document>"u"||setTimeout(()=>{document.dispatchEvent(new CustomEvent("redrawCables"))},a)},Ns=a=>{Dt.update(e=>Object.keys(e).reduce((t,n)=>({...t,[n]:{...e[n],active:n===a}}),{}))},As=()=>{Dt.update(a=>Object.keys(a).reduce((e,t)=>({...e,[t]:{...a[t],active:!1}}),{}))},Xa=(a,e)=>{a.type!==e.type&&([a,e].forEach(t=>{t.type!=="remote"&&H.update(n=>n.filter(r=>r[0]!==t.id&&r[1]!==t.id))}),H.update(t=>{const n=[a,e].sort(r=>r.type==="remote"?1:-1).map(({id:r})=>r);return[...t,n]}))},Ka=a=>{H.update(e=>e.filter(t=>t[0]!==a&&t[1]!==a))},Ja=(a,e)=>{H.set([]),a.forEach((t,n)=>{const r=e[Math.floor(n/(a.length/e.length))];H.update(i=>{const s=[t,r];return[...i,s]})})},Qa=a=>w(H).filter(t=>t[0]===a||t[1]===a).map(t=>t[0]===a?t[1]:t[0]),Za=()=>{H.set([]);const a=w(Dt),e=Object.values(a).filter(n=>n.type==="origin"),t=Object.values(a).filter(n=>n.type==="remote");e.forEach(n=>{const r=t[Math.floor(Math.random()*t.length)];Xa(n,r)})};function Xn(a,e,t,n,r){return(a-e)*(r-n)/(t-e)+n}function vt(a,e,t,n,r,i=.5){return Kn(Xn(a,e,t,n,r),i)}function Kn(a,e=1){const t=a/e;return Math.round(t)*e}function $a(a,e=0,t=1){return Math.min(Math.max(a,e),t)}function _s(){return navigator.userAgent.indexOf("Chrome")>-1}function Ss(a,e){let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>{a.apply(this,n)},e)}}function rn(a,e){return a+e}const sn=["#ff8374","#ff1a99","#1abdb3","#ff9c8d","#ff33b2","#33d6cc","#ffb6a7","#ff4dcc","#4df0e6","#ffcfc0","#ff66e5","#66ffff"];function Ms(a,e){return a<e?a:e}const z=_(Array(12).fill(null).map((a,e)=>({active:e===0,user:"you",axes:[{key:"x",name:"λ",value:.5,min:0,max:1,step:.001,colour:"#00A399"},{key:"y",name:"φ",value:1,min:0,max:1,step:.001,colour:"#E5007F"},{key:"z",name:"θ",value:0,min:0,max:1,step:.001,colour:"#FF695A"}]}))),Cs=X(z,a=>a.filter(e=>e.active).length),ks=()=>{const a=w(z).findIndex(e=>!e.active);a!==-1&&z.update(e=>(e[a].active=!0,e)),at()},Is=()=>{z.update(a=>{const e=a.filter(t=>t.active).length-1;return a[e].active=!1,["x","y","z"].forEach(t=>{const n=`${t}${e}`;Ka(n)}),a}),at()};let on=w(z).map(a=>a.axes.map(e=>e.value));z.subscribe(a=>{const e=a.map(r=>r.axes.map(i=>i.value)),t=e.findIndex((r,i)=>r.reduce(rn)!==on[i].reduce(rn));if(on=e,t===-1||typeof document>"u")return;const n=new CustomEvent("redrawQubit",{detail:t});document.dispatchEvent(n)});const yt=_(!1),er=_(),tr=_(),nr=_(),ln=_("local"),ar=X([er,tr,nr],([a,e,t])=>e>0&&t>0?60/e*t:a||1),rr=()=>{if(w(yt))return;yt.set(!0);const a=w(z)[0].axes[2].value,e=w(z)[0].axes[1].value,t=w(z)[0].axes[0].value,n=w(ln);w(ln)==="local"?ir(Math.random()<a?1:0):console.log(`send qasm string at this point! using ${n} backend, with theta: ${a}, phi: ${e}, lambda: ${t}`)};function ir(a){const e=w(z)[0].axes,t=new Date().getTime(),n=t+w(ar)*1e3,r={x:e[0].value,y:e[1].value,z:e[2].value},i={x:0,y:0,z:a},s=setInterval(()=>{const l=(new Date().getTime()-t)/(n-t);l>1&&(clearInterval(s),yt.set(!1)),z.update(f=>(f[0].axes=f[0].axes.map(c=>({...c,value:$a(Xn(l,0,1,r[c.key],i[c.key]),0,1)})),f))},10)}const Jn=["/samples/01.wav","/samples/02.wav","/samples/03.wav","/samples/04.wav","/samples/Atmos-ASceneByTheSea.wav","/samples/Atmos-ChibaCity.wav","/samples/Atmos-DystopianVibes.wav","/samples/atmos-EquestrialSwimming 1.wav","/samples/atmos-EquestrialSwimming 2.wav","/samples/atmos-GongAcid 1.wav","/samples/glass.wav","/samples/wt0.wav","/samples/wt1.wav","/samples/wt2.wav","/samples/wt3.wav","/samples/wt4.wav","/samples/wt5.wav","/samples/wt6.wav"],Bt=_([...Jn]),sr=a=>{console.log(a),Bt.set([...Jn,...a])},Re=_([{key:"amp",name:"Amp",a:.01,d:.15,s:.5,r:.125},{key:"mod",name:"Mod",a:.01,d:.15,s:.5,r:.125}]),Qn=X(Re,a=>({a:Math.floor(a[0].a*1e3),d:Math.floor(a[0].d*1e3),s:a[0].s,r:Math.floor(a[0].r*1e3),a1:Math.floor(a[1].a*1e3),d1:Math.floor(a[1].d*1e3),s1:a[1].s,r1:Math.floor(a[1].r*1e3)}));function Q(a,e,t){Re.update(n=>(n[a][e]=t,n))}const ue=_("synth"),cn=[{name:"synth",active:!0},{name:"sampler",active:!1},{name:"granular",active:!1},{name:"wavetable",active:!1}],Zn={synth:["op1fb","op2ratio","op2gain","op2fb","op3ratio","op3gain","op3fb"],sampler:["i","loop","loopsize","rate","begin","cutoff","res"],granular:["i","grainrate","grainsize","grainpan","begin","end","cutoff","res"],wavetable:["i","tablesize","rows","xlfo","ylfo","cutoff","res"]},$n=_(Zn.synth),ea=[{type:"range",key:"op1fb",name:"op1fb",rangeA:0,rangeB:1,min:0,max:1,step:.01,units:"",outmin:0,outmax:1},{type:"range",key:"op2ratio",name:"op2r",rangeA:.5,rangeB:5,min:.5,max:20,step:.5,units:""},{type:"range",key:"op2gain",name:"op2g",rangeA:0,rangeB:1,min:0,max:10,step:.01,units:""},{type:"range",key:"op2fb",name:"op2fb",rangeA:0,rangeB:1,min:0,max:1,step:.01,units:"",outmin:0,outmax:1},{type:"range",key:"op3ratio",name:"op3r",rangeA:.5,rangeB:11,min:.5,max:20,step:.25,units:""},{type:"range",key:"op3gain",name:"op3g",rangeA:.25,rangeB:1,min:0,max:1,step:.01,units:""},{type:"range",key:"op3fb",name:"op3fb",rangeA:0,rangeB:1,min:0,max:1,step:.01,units:"",outmin:0,outmax:1},{type:"select",key:"i",name:"sample",rangeA:0,rangeB:0,min:0,max:w(Bt).length,step:1,units:""},{type:"range",key:"loop",name:"loop",rangeA:1,rangeB:1,min:0,max:1,step:1,units:""},{type:"range",key:"loopsize",name:"size",rangeA:1,rangeB:1,min:.001,max:1,step:.001,units:""},{type:"range",key:"rate",name:"rate",rangeA:1,rangeB:1,min:-1,max:2,step:.125,units:""},{type:"range",key:"begin",name:"begin",rangeA:0,rangeB:1,min:0,max:1,step:.001,units:""},{type:"range",key:"end",name:"end",rangeA:1,rangeB:0,min:0,max:1,step:.001,units:""},{type:"range",key:"grainrate",name:"rate",rangeA:8,rangeB:16,min:1,max:64,step:1,units:""},{type:"range",key:"grainsize",name:"size",rangeA:.1,rangeB:1,min:.001,max:1,step:.001,units:""},{type:"range",key:"grainpan",name:"pan",rangeA:0,rangeB:1,min:0,max:1,step:.001,units:""},{type:"range",key:"cutoff",name:"cutoff",rangeA:50,rangeB:100,min:0,max:100,step:.01,units:"%",outmin:0,outmax:2e4},{type:"range",key:"res",name:"res",rangeA:0,rangeB:25,min:0,max:100,step:.01,units:"%",outmin:0,outmax:.95},{type:"range",key:"tablesize",name:"size",rangeA:256,rangeB:256,min:16,max:1024,step:1,units:""},{type:"range",key:"rows",name:"rows",rangeA:16,rangeB:16,min:2,max:64,step:1,units:""},{type:"range",key:"xlfo",name:"xlfo",rangeA:.02,rangeB:.3,min:.01,max:.5,step:.01,units:""},{type:"range",key:"ylfo",name:"ylfo",rangeA:.2,rangeB:.03,min:.01,max:1,step:.01,units:""}],ta=[{type:"range",key:"semitone",name:"dtune",rangeA:0,rangeB:0,min:-12,max:12,step:.1,units:"st"},{type:"range",key:"octave",name:"Oct",rangeA:0,rangeB:0,min:-3,max:3,step:1,units:"octs"},{type:"range",key:"vol",name:"gain",rangeA:.75,rangeB:.75,min:0,max:2,step:.01,units:"",outmin:0,outmax:2},{type:"range",key:"pan",name:"pan",rangeA:-0,rangeB:0,min:-1,max:1,step:.01,units:"",outmin:0,outmax:1}],na=[{type:"range",key:"reverb",name:"Reverb",rangeA:0,rangeB:100,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"rsize",name:"RTime",rangeA:0,rangeB:100,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"delay",name:"Delay",rangeA:0,rangeB:100,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"dtime",name:"Dtime",rangeA:10,rangeB:2e3,min:10,max:2e3,step:1,units:"ms"},{type:"range",key:"dcolour",name:"DColour",rangeA:25,rangeB:50,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"dfb",name:"Fback",rangeA:10,rangeB:50,min:0,max:100,step:.01,units:"%",outmin:0,outmax:.99},{type:"range",key:"chorus",name:"Chorus",rangeA:0,rangeB:100,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"chdepth",name:"CDepth",rangeA:0,rangeB:100,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"dist",name:"dist",rangeA:0,rangeB:10,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"crush",name:"crush",rangeA:0,rangeB:100,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"hicut",name:"hicut",rangeA:0,rangeB:0,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1},{type:"range",key:"locut",name:"locut",rangeA:0,rangeB:25,min:0,max:100,step:.01,units:"%",outmin:0,outmax:1}],Pe=_(ea);Bt.subscribe(a=>{Pe.update(e=>e.map(t=>t.key==="i"?{...t,max:a.length}:t))});const rt=_(ta),it=_(na),st=X([Pe,rt,it],([a,e,t])=>[...a,...e,...t]),or=X([st,z,H],([a,e,t])=>a.reduce((n,r)=>({...n,[r.key]:r.rangeA+(r.rangeB-r.rangeA)*lr(r.key).value||0}),{}));function lr(a){const e=Qa(a)[0]||"z0",t=e.charAt(0),n=parseInt(e.slice(1))||0,r=w(z)[n];return r.axes.find(i=>i.key===t)||r.axes[0]}const aa=()=>Ja([...ea.filter(({key:a})=>w($n).includes(a)),...ta,...na].map(({key:a})=>a),["z0","y0","x0"]);aa();ue.subscribe(a=>{$n.set(Zn[a]),aa()});function cr(a,e){const t=w(st).find(n=>n.key===a);return t&&t.outmin!==void 0&&t.outmax!==void 0?vt(e,t.min,t.max,t.outmin,t.outmax,t.step):Kn(e,t.step)}const fr={dfilter:0,dcolour:.5,drive:.5,fils:1,lthresh:.75,gain:1,dur:6e4},ur=(a,e)=>{const{a1:t,d1:n,s1:r,r1:i}=a,s=e==="synth"?"op2":"fil";return{...a,[`${s}a`]:t,[`${s}d`]:n,[`${s}s`]:r,[`${s}r`]:i}},xs=X([or,Qn,ue],([a,e,t])=>({...fr,inst:t,...ur(e,t),...Object.entries(a).reduce((n,[r,i])=>({...n,[r]:cr(r,i)}),{})}));function de(a){const e=t=>({...t,rangeA:vt(Math.random(),0,1,t.min,t.max,t.step),rangeB:vt(Math.random(),0,1,t.min,t.max,t.step)});return a==="inst"&&Pe.update(t=>t.map(e)),a==="global"&&rt.update(t=>t.map(e)),a==="fx"&&it.update(t=>t.map(e)),!0}const dr=_(!1),mr=()=>({instrument:w(ue),instrumentParameters:w(Pe),globalParameters:w(rt),fxParameters:w(it),axes:w(z)[0].axes,connections:w(H),drone:w(dr),envelopeValues:w(Qn)}),ie=_({}),$=_("");function hr(){if(typeof localStorage>"u")return;const a=JSON.parse(localStorage.getItem("q1synth-presets")||"{}");ie.update(e=>({...e,...a})),$.set("load")}hr();ie.subscribe(a=>{typeof localStorage>"u"||localStorage.setItem("q1synth-presets",JSON.stringify(a))});const fn=X(ie,a=>Object.keys(a).sort((e,t)=>e.localeCompare(t)));$.subscribe(gr);function gr(a){const e=w(ie)[a];e&&(Re.update(t=>e.envelopes.reduce((n,r,i)=>[...n,{...t[i],a:r.a,d:r.d,s:r.s,r:r.r}],[])),ue.set(e.instrument),H.set(e.connections),[Pe,rt,it].forEach(t=>t.update(n=>n.map(r=>{const i=e.params.find(s=>s.key===r.key);return i?{...r,rangeA:i.rangeA,rangeB:i.rangeB}:r}))))}function Ts(a){if(typeof localStorage>"u")return;const e=JSON.parse(localStorage.getItem("q1synth-presets")||"{}");e[a]={instrument:w(ue),envelopes:w(Re),params:w(st).map(({key:t,rangeA:n,rangeB:r})=>({key:t,rangeA:n,rangeB:r})),connections:w(H)},localStorage.setItem("q1synth-presets",JSON.stringify(e)),ie.update(t=>({...t,...e})),$.set(a)}function Os(a){if(typeof localStorage>"u")return;const e=JSON.parse(localStorage.getItem("q1synth-presets")||"{}");delete e[a],localStorage.setItem("q1synth-presets",JSON.stringify(e)),ie.set(e),$.set("load")}function Rs(a){if(typeof localStorage>"u")return;const e=w($),t=JSON.parse(localStorage.getItem("q1synth-presets")||"{}");t[e],delete t[e],t[a]={instrument:w(ue),envelopes:w(Re),params:w(st).map(({key:n,rangeA:r,rangeB:i})=>({key:n,rangeA:r,rangeB:i})),connections:w(H)},localStorage.setItem("q1synth-presets",JSON.stringify(t)),ie.set(t),$.set(a)}function pr(){typeof document>"u"||(window.electronAPI.onSetPreset(a=>$.set(a)),window.electronAPI.onSavePreset(()=>{const a=new CustomEvent("showSavePresetDialog");document.dispatchEvent(a)}),ie.subscribe(a=>window.electronAPI.syncUserPresets(a)),window.electronAPI.onExportPreset(()=>{window.electronAPI.exportPresetResponse(mr())}),window.electronAPI.onImportPreset(a=>{console.log(a)}),window.electronAPI.onUpdateSamples(sr))}const br=_(.5),un=_(!1),Ps=_(!1),vr=()=>typeof window<"u"&&!!window.isApp,ra=_(!0);ra.subscribe(()=>at());const Ls=()=>ra.update(a=>!a),yr=_(!0);yr.subscribe(()=>at());vr()&&pr();function dn(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,n)}return t}function g(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?dn(Object(t),!0).forEach(function(n){O(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):dn(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function Qe(a){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(a)}function Er(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function mn(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function wr(a,e,t){return e&&mn(a.prototype,e),t&&mn(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function O(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function zt(a,e){return Ar(a)||Sr(a,e)||ia(a,e)||Cr()}function Le(a){return Nr(a)||_r(a)||ia(a)||Mr()}function Nr(a){if(Array.isArray(a))return Et(a)}function Ar(a){if(Array.isArray(a))return a}function _r(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Sr(a,e){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var n=[],r=!0,i=!1,s,o;try{for(t=t.call(a);!(r=(s=t.next()).done)&&(n.push(s.value),!(e&&n.length===e));r=!0);}catch(l){i=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(i)throw o}}return n}}function ia(a,e){if(a){if(typeof a=="string")return Et(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Et(a,e)}}function Et(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=a[t];return n}function Mr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hn=function(){},Ut={},sa={},oa=null,la={mark:hn,measure:hn};try{typeof window<"u"&&(Ut=window),typeof document<"u"&&(sa=document),typeof MutationObserver<"u"&&(oa=MutationObserver),typeof performance<"u"&&(la=performance)}catch{}var kr=Ut.navigator||{},gn=kr.userAgent,pn=gn===void 0?"":gn,ee=Ut,k=sa,bn=oa,ze=la;ee.document;var K=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",ca=~pn.indexOf("MSIE")||~pn.indexOf("Trident/"),Ue,He,Fe,Ge,Ve,Y="___FONT_AWESOME___",wt=16,fa="fa",ua="svg-inline--fa",ce="data-fa-i2svg",Nt="data-fa-pseudo-element",Ir="data-fa-pseudo-element-pending",Ht="data-prefix",Ft="data-icon",vn="fontawesome-i2svg",xr="async",Tr=["HTML","HEAD","STYLE","SCRIPT"],da=function(){try{return!0}catch{return!1}}(),C="classic",I="sharp",Gt=[C,I];function De(a){return new Proxy(a,{get:function(t,n){return n in t?t[n]:t[C]}})}var Ce=De((Ue={},O(Ue,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(Ue,I,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ue)),ke=De((He={},O(He,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(He,I,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),He)),Ie=De((Fe={},O(Fe,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(Fe,I,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Fe)),Or=De((Ge={},O(Ge,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(Ge,I,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ge)),Rr=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ma="fa-layers-text",Pr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Lr=De((Ve={},O(Ve,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(Ve,I,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ve)),ha=[1,2,3,4,5,6,7,8,9,10],Dr=ha.concat([11,12,13,14,15,16,17,18,19,20]),Br=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xe=new Set;Object.keys(ke[C]).map(xe.add.bind(xe));Object.keys(ke[I]).map(xe.add.bind(xe));var zr=[].concat(Gt,Le(xe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(ha.map(function(a){return"".concat(a,"x")})).concat(Dr.map(function(a){return"w-".concat(a)})),_e=ee.FontAwesomeConfig||{};function Ur(a){var e=k.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function Hr(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(k&&typeof k.querySelector=="function"){var Fr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fr.forEach(function(a){var e=zt(a,2),t=e[0],n=e[1],r=Hr(Ur(t));r!=null&&(_e[n]=r)})}var ga={styleDefault:"solid",familyDefault:"classic",cssPrefix:fa,replacementClass:ua,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_e.familyPrefix&&(_e.cssPrefix=_e.familyPrefix);var ye=g(g({},ga),_e);ye.autoReplaceSvg||(ye.observeMutations=!1);var b={};Object.keys(ga).forEach(function(a){Object.defineProperty(b,a,{enumerable:!0,set:function(t){ye[a]=t,Se.forEach(function(n){return n(b)})},get:function(){return ye[a]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){ye.cssPrefix=e,Se.forEach(function(t){return t(b)})},get:function(){return ye.cssPrefix}});ee.FontAwesomeConfig=b;var Se=[];function Gr(a){return Se.push(a),function(){Se.splice(Se.indexOf(a),1)}}var Z=wt,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vr(a){if(!(!a||!K)){var e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var t=k.head.childNodes,n=null,r=t.length-1;r>-1;r--){var i=t[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=i)}return k.head.insertBefore(e,n),a}}var jr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Te(){for(var a=12,e="";a-- >0;)e+=jr[Math.random()*62|0];return e}function Ne(a){for(var e=[],t=(a||[]).length>>>0;t--;)e[t]=a[t];return e}function Vt(a){return a.classList?Ne(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function pa(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yr(a){return Object.keys(a||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(pa(a[t]),'" ')},"").trim()}function ot(a){return Object.keys(a||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(a[t].trim(),";")},"")}function jt(a){return a.size!==V.size||a.x!==V.x||a.y!==V.y||a.rotate!==V.rotate||a.flipX||a.flipY}function Wr(a){var e=a.transform,t=a.containerWidth,n=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:f}}function qr(a){var e=a.transform,t=a.width,n=t===void 0?wt:t,r=a.height,i=r===void 0?wt:r,s=a.startCentered,o=s===void 0?!1:s,l="";return o&&ca?l+="translate(".concat(e.x/Z-n/2,"em, ").concat(e.y/Z-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Z,"em), calc(-50% + ").concat(e.y/Z,"em)) "):l+="translate(".concat(e.x/Z,"em, ").concat(e.y/Z,"em) "),l+="scale(".concat(e.size/Z*(e.flipX?-1:1),", ").concat(e.size/Z*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Xr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ba(){var a=fa,e=ua,t=b.cssPrefix,n=b.replacementClass,r=Xr;if(t!==a||n!==e){var i=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(o,".".concat(n))}return r}var yn=!1;function ut(){b.autoAddCss&&!yn&&(Vr(ba()),yn=!0)}var Kr={mixout:function(){return{dom:{css:ba,insertCss:ut}}},hooks:function(){return{beforeDOMElementCreation:function(){ut()},beforeI2svg:function(){ut()}}}},W=ee||{};W[Y]||(W[Y]={});W[Y].styles||(W[Y].styles={});W[Y].hooks||(W[Y].hooks={});W[Y].shims||(W[Y].shims=[]);var F=W[Y],va=[],Jr=function a(){k.removeEventListener("DOMContentLoaded",a),Ze=1,va.map(function(e){return e()})},Ze=!1;K&&(Ze=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Ze||k.addEventListener("DOMContentLoaded",Jr));function Qr(a){K&&(Ze?setTimeout(a,0):va.push(a))}function Be(a){var e=a.tag,t=a.attributes,n=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?pa(a):"<".concat(e," ").concat(Yr(n),">").concat(i.map(Be).join(""),"</").concat(e,">")}function En(a,e,t){if(a&&a[e]&&a[e][t])return{prefix:e,iconName:t,icon:a[e][t]}}var Zr=function(e,t){return function(n,r,i,s){return e.call(t,n,r,i,s)}},dt=function(e,t,n,r){var i=Object.keys(e),s=i.length,o=r!==void 0?Zr(t,r):t,l,f,c;for(n===void 0?(l=1,c=e[i[0]]):(l=0,c=n);l<s;l++)f=i[l],c=o(c,e[f],f,e);return c};function $r(a){for(var e=[],t=0,n=a.length;t<n;){var r=a.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var i=a.charCodeAt(t++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function At(a){var e=$r(a);return e.length===1?e[0].toString(16):null}function ei(a,e){var t=a.length,n=a.charCodeAt(e),r;return n>=55296&&n<=56319&&t>e+1&&(r=a.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function wn(a){return Object.keys(a).reduce(function(e,t){var n=a[t],r=!!n.icon;return r?e[n.iconName]=n.icon:e[t]=n,e},{})}function _t(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,i=wn(e);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(a,wn(e)):F.styles[a]=g(g({},F.styles[a]||{}),i),a==="fas"&&_t("fa",e)}var je,Ye,We,me=F.styles,ti=F.shims,ni=(je={},O(je,C,Object.values(Ie[C])),O(je,I,Object.values(Ie[I])),je),Yt=null,ya={},Ea={},wa={},Na={},Aa={},ai=(Ye={},O(Ye,C,Object.keys(Ce[C])),O(Ye,I,Object.keys(Ce[I])),Ye);function ri(a){return~zr.indexOf(a)}function ii(a,e){var t=e.split("-"),n=t[0],r=t.slice(1).join("-");return n===a&&r!==""&&!ri(r)?r:null}var _a=function(){var e=function(i){return dt(me,function(s,o,l){return s[l]=dt(o,i,{}),s},{})};ya=e(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=s})}return r}),Ea=e(function(r,i,s){if(r[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=s})}return r}),Aa=e(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var t="far"in me||b.autoFetchSvg,n=dt(ti,function(r,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});wa=n.names,Na=n.unicodes,Yt=lt(b.styleDefault,{family:b.familyDefault})};Gr(function(a){Yt=lt(a.styleDefault,{family:b.familyDefault})});_a();function Wt(a,e){return(ya[a]||{})[e]}function si(a,e){return(Ea[a]||{})[e]}function le(a,e){return(Aa[a]||{})[e]}function Sa(a){return wa[a]||{prefix:null,iconName:null}}function oi(a){var e=Na[a],t=Wt("fas",a);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function te(){return Yt}var qt=function(){return{prefix:null,iconName:null,rest:[]}};function lt(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,n=t===void 0?C:t,r=Ce[n][a],i=ke[n][a]||ke[n][r],s=a in F.styles?a:null;return i||s||null}var Nn=(We={},O(We,C,Object.keys(Ie[C])),O(We,I,Object.keys(Ie[I])),We);function ct(a){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=(e={},O(e,C,"".concat(b.cssPrefix,"-").concat(C)),O(e,I,"".concat(b.cssPrefix,"-").concat(I)),e),s=null,o=C;(a.includes(i[C])||a.some(function(f){return Nn[C].includes(f)}))&&(o=C),(a.includes(i[I])||a.some(function(f){return Nn[I].includes(f)}))&&(o=I);var l=a.reduce(function(f,c){var m=ii(b.cssPrefix,c);if(me[c]?(c=ni[o].includes(c)?Or[o][c]:c,s=c,f.prefix=c):ai[o].indexOf(c)>-1?(s=c,f.prefix=lt(c,{family:o})):m?f.iconName=m:c!==b.replacementClass&&c!==i[C]&&c!==i[I]&&f.rest.push(c),!r&&f.prefix&&f.iconName){var p=s==="fa"?Sa(f.iconName):{},E=le(f.prefix,f.iconName);p.prefix&&(s=null),f.iconName=p.iconName||E||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!me.far&&me.fas&&!b.autoFetchSvg&&(f.prefix="fas")}return f},qt());return(a.includes("fa-brands")||a.includes("fab"))&&(l.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===I&&(me.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=le(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=te()||"fas"),l}var li=function(){function a(){Er(this,a),this.definitions={}}return wr(a,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){t.definitions[o]=g(g({},t.definitions[o]||{}),s[o]),_t(o,s[o]);var l=Ie[C][o];l&&_t(l,s[o]),_a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var s=r[i],o=s.prefix,l=s.iconName,f=s.icon,c=f[2];t[o]||(t[o]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(t[o][m]=f)}),t[o][l]=f}),t}}]),a}(),An=[],he={},pe={},ci=Object.keys(pe);function fi(a,e){var t=e.mixoutsTo;return An=a,he={},Object.keys(pe).forEach(function(n){ci.indexOf(n)===-1&&delete pe[n]}),An.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(t[s]=r[s]),Qe(r[s])==="object"&&Object.keys(r[s]).forEach(function(o){t[s]||(t[s]={}),t[s][o]=r[s][o]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(s){he[s]||(he[s]=[]),he[s].push(i[s])})}n.provides&&n.provides(pe)}),t}function St(a,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var i=he[a]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(n))}),e}function fe(a){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=he[a]||[];r.forEach(function(i){i.apply(null,t)})}function q(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return pe[a]?pe[a].apply(null,e):void 0}function Mt(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,t=a.prefix||te();if(e)return e=le(t,e)||e,En(Ma.definitions,t,e)||En(F.styles,t,e)}var Ma=new li,ui=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,fe("noAuto")},di={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K?(fe("beforeI2svg",e),q("pseudoElements2svg",e),q("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Qr(function(){hi({autoReplaceSvgRoot:t}),fe("watch",e)})}},mi={icon:function(e){if(e===null)return null;if(Qe(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:le(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=lt(e[0]);return{prefix:n,iconName:le(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match(Rr))){var r=ct(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||te(),iconName:le(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=te();return{prefix:i,iconName:le(i,e)||e}}}},U={noAuto:ui,config:b,dom:di,parse:mi,library:Ma,findIconDefinition:Mt,toHtml:Be},hi=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?k:t;(Object.keys(F.styles).length>0||b.autoFetchSvg)&&K&&b.autoReplaceSvg&&U.dom.i2svg({node:n})};function ft(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(n){return Be(n)})}}),Object.defineProperty(a,"node",{get:function(){if(K){var n=k.createElement("div");return n.innerHTML=a.html,n.children}}}),a}function gi(a){var e=a.children,t=a.main,n=a.mask,r=a.attributes,i=a.styles,s=a.transform;if(jt(s)&&t.found&&!n.found){var o=t.width,l=t.height,f={x:o/l/2,y:.5};r.style=ot(g(g({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function pi(a){var e=a.prefix,t=a.iconName,n=a.children,r=a.attributes,i=a.symbol,s=i===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},r),{},{id:s}),children:n}]}]}function Xt(a){var e=a.icons,t=e.main,n=e.mask,r=a.prefix,i=a.iconName,s=a.transform,o=a.symbol,l=a.title,f=a.maskId,c=a.titleId,m=a.extra,p=a.watchable,E=p===void 0?!1:p,S=n.found?n:t,y=S.width,N=S.height,A=r==="fak",x=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(L){return m.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(m.classes).join(" "),T={children:[],attributes:g(g({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(N)})},D=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(y/N*16*.0625,"em")}:{};E&&(T.attributes[ce]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(c||Te())},children:[l]}),delete T.attributes.title);var R=g(g({},T),{},{prefix:r,iconName:i,main:t,mask:n,maskId:f,transform:s,symbol:o,styles:g(g({},D),m.styles)}),v=n.found&&t.found?q("generateAbstractMask",R)||{children:[],attributes:{}}:q("generateAbstractIcon",R)||{children:[],attributes:{}},B=v.children,J=v.attributes;return R.children=B,R.attributes=J,o?pi(R):gi(R)}function _n(a){var e=a.content,t=a.width,n=a.height,r=a.transform,i=a.title,s=a.extra,o=a.watchable,l=o===void 0?!1:o,f=g(g(g({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[ce]="");var c=g({},s.styles);jt(r)&&(c.transform=qr({transform:r,startCentered:!0,width:t,height:n}),c["-webkit-transform"]=c.transform);var m=ot(c);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function bi(a){var e=a.content,t=a.title,n=a.extra,r=g(g(g({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),i=ot(n.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var mt=F.styles;function Ct(a){var e=a[0],t=a[1],n=a.slice(4),r=zt(n,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:s}}var vi={found:!1,width:512,height:512};function yi(a,e){!da&&!b.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function kt(a,e){var t=e;return e==="fa"&&b.styleDefault!==null&&(e=te()),new Promise(function(n,r){if(q("missingIconAbstract"),t==="fa"){var i=Sa(a)||{};a=i.iconName||a,e=i.prefix||e}if(a&&e&&mt[e]&&mt[e][a]){var s=mt[e][a];return n(Ct(s))}yi(a,e),n(g(g({},vi),{},{icon:b.showMissingIcons&&a?q("missingIconAbstract")||{}:{}}))})}var Sn=function(){},It=b.measurePerformance&&ze&&ze.mark&&ze.measure?ze:{mark:Sn,measure:Sn},Ae='FA "6.5.1"',Ei=function(e){return It.mark("".concat(Ae," ").concat(e," begins")),function(){return Ca(e)}},Ca=function(e){It.mark("".concat(Ae," ").concat(e," ends")),It.measure("".concat(Ae," ").concat(e),"".concat(Ae," ").concat(e," begins"),"".concat(Ae," ").concat(e," ends"))},Kt={begin:Ei,end:Ca},Xe=function(){};function Mn(a){var e=a.getAttribute?a.getAttribute(ce):null;return typeof e=="string"}function wi(a){var e=a.getAttribute?a.getAttribute(Ht):null,t=a.getAttribute?a.getAttribute(Ft):null;return e&&t}function Ni(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(b.replacementClass)}function Ai(){if(b.autoReplaceSvg===!0)return Ke.replace;var a=Ke[b.autoReplaceSvg];return a||Ke.replace}function _i(a){return k.createElementNS("http://www.w3.org/2000/svg",a)}function Si(a){return k.createElement(a)}function ka(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,n=t===void 0?a.tag==="svg"?_i:Si:t;if(typeof a=="string")return k.createTextNode(a);var r=n(a.tag);Object.keys(a.attributes||[]).forEach(function(s){r.setAttribute(s,a.attributes[s])});var i=a.children||[];return i.forEach(function(s){r.appendChild(ka(s,{ceFn:n}))}),r}function Mi(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ke={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(ka(r),t)}),t.getAttribute(ce)===null&&b.keepOriginalSource){var n=k.createComment(Mi(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Vt(t).indexOf(b.replacementClass))return Ke.replace(e);var r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(o,l){return l===b.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var s=n.map(function(o){return Be(o)}).join(`
`);t.setAttribute(ce,""),t.innerHTML=s}};function Cn(a){a()}function Ia(a,e){var t=typeof e=="function"?e:Xe;if(a.length===0)t();else{var n=Cn;b.mutateApproach===xr&&(n=ee.requestAnimationFrame||Cn),n(function(){var r=Ai(),i=Kt.begin("mutate");a.map(r),i(),t()})}}var Jt=!1;function xa(){Jt=!0}function xt(){Jt=!1}var $e=null;function kn(a){if(bn&&b.observeMutations){var e=a.treeCallback,t=e===void 0?Xe:e,n=a.nodeCallback,r=n===void 0?Xe:n,i=a.pseudoElementsCallback,s=i===void 0?Xe:i,o=a.observeMutationsRoot,l=o===void 0?k:o;$e=new bn(function(f){if(!Jt){var c=te();Ne(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Mn(m.addedNodes[0])&&(b.searchPseudoElements&&s(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&b.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Mn(m.target)&&~Br.indexOf(m.attributeName))if(m.attributeName==="class"&&wi(m.target)){var p=ct(Vt(m.target)),E=p.prefix,S=p.iconName;m.target.setAttribute(Ht,E||c),S&&m.target.setAttribute(Ft,S)}else Ni(m.target)&&r(m.target)})}}),K&&$e.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ci(){$e&&$e.disconnect()}function ki(a){var e=a.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(n,r){var i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),t}function Ii(a){var e=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),n=a.innerText!==void 0?a.innerText.trim():"",r=ct(Vt(a));return r.prefix||(r.prefix=te()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=si(r.prefix,a.innerText)||Wt(r.prefix,At(a.innerText))),!r.iconName&&b.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function xi(a){var e=Ne(a.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),t=a.getAttribute("title"),n=a.getAttribute("data-fa-title-id");return b.autoA11y&&(t?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(n||Te()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ti(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function In(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ii(a),n=t.iconName,r=t.prefix,i=t.rest,s=xi(a),o=St("parseNodeAttributes",{},a),l=e.styleParser?ki(a):[];return g({iconName:n,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Oi=F.styles;function Ta(a){var e=b.autoReplaceSvg==="nest"?In(a,{styleParser:!1}):In(a);return~e.extra.classes.indexOf(ma)?q("generateLayersText",a,e):q("generateSvgReplacementMutation",a,e)}var ne=new Set;Gt.map(function(a){ne.add("fa-".concat(a))});Object.keys(Ce[C]).map(ne.add.bind(ne));Object.keys(Ce[I]).map(ne.add.bind(ne));ne=Le(ne);function xn(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K)return Promise.resolve();var t=k.documentElement.classList,n=function(m){return t.add("".concat(vn,"-").concat(m))},r=function(m){return t.remove("".concat(vn,"-").concat(m))},i=b.autoFetchSvg?ne:Gt.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Oi));i.includes("fa")||i.push("fa");var s=[".".concat(ma,":not([").concat(ce,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(ce,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ne(a.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Kt.begin("onTree"),f=o.reduce(function(c,m){try{var p=Ta(m);p&&c.push(p)}catch(E){da||E.name==="MissingIcon"&&console.error(E)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(p){Ia(p,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(p){l(),m(p)})})}function Ri(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ta(a).then(function(t){t&&Ia([t],e)})}function Pi(a){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Mt(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Mt(r||{})),a(n,g(g({},t),{},{mask:r}))}}var Li=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?V:n,i=t.symbol,s=i===void 0?!1:i,o=t.mask,l=o===void 0?null:o,f=t.maskId,c=f===void 0?null:f,m=t.title,p=m===void 0?null:m,E=t.titleId,S=E===void 0?null:E,y=t.classes,N=y===void 0?[]:y,A=t.attributes,x=A===void 0?{}:A,T=t.styles,D=T===void 0?{}:T;if(e){var R=e.prefix,v=e.iconName,B=e.icon;return ft(g({type:"icon"},e),function(){return fe("beforeDOMElementCreation",{iconDefinition:e,params:t}),b.autoA11y&&(p?x["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(S||Te()):(x["aria-hidden"]="true",x.focusable="false")),Xt({icons:{main:Ct(B),mask:l?Ct(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:v,transform:g(g({},V),r),symbol:s,title:p,maskId:c,titleId:S,extra:{attributes:x,styles:D,classes:N}})})}},Di={mixout:function(){return{icon:Pi(Li)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=xn,t.nodeCallback=Ri,t}}},provides:function(e){e.i2svg=function(t){var n=t.node,r=n===void 0?k:n,i=t.callback,s=i===void 0?function(){}:i;return xn(r,s)},e.generateSvgReplacementMutation=function(t,n){var r=n.iconName,i=n.title,s=n.titleId,o=n.prefix,l=n.transform,f=n.symbol,c=n.mask,m=n.maskId,p=n.extra;return new Promise(function(E,S){Promise.all([kt(r,o),c.iconName?kt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var N=zt(y,2),A=N[0],x=N[1];E([t,Xt({icons:{main:A,mask:x},prefix:o,iconName:r,transform:l,symbol:f,maskId:m,title:i,titleId:s,extra:p,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,i=t.main,s=t.transform,o=t.styles,l=ot(o);l.length>0&&(r.style=l);var f;return jt(s)&&(f=q("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(f||i.icon),{children:n,attributes:r}}}},Bi={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return ft({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:t,params:n});var s=[];return t(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(Le(i)).join(" ")},children:s}]})}}}},zi={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,s=n.classes,o=s===void 0?[]:s,l=n.attributes,f=l===void 0?{}:l,c=n.styles,m=c===void 0?{}:c;return ft({type:"counter",content:t},function(){return fe("beforeDOMElementCreation",{content:t,params:n}),bi({content:t.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(Le(o))}})})}}}},Ui={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?V:r,s=n.title,o=s===void 0?null:s,l=n.classes,f=l===void 0?[]:l,c=n.attributes,m=c===void 0?{}:c,p=n.styles,E=p===void 0?{}:p;return ft({type:"text",content:t},function(){return fe("beforeDOMElementCreation",{content:t,params:n}),_n({content:t,transform:g(g({},V),i),title:o,extra:{attributes:m,styles:E,classes:["".concat(b.cssPrefix,"-layers-text")].concat(Le(f))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var r=n.title,i=n.transform,s=n.extra,o=null,l=null;if(ca){var f=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/f,l=c.height/f}return b.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,_n({content:t.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}},Hi=new RegExp('"',"ug"),Tn=[1105920,1112319];function Fi(a){var e=a.replace(Hi,""),t=ei(e,0),n=t>=Tn[0]&&t<=Tn[1],r=e.length===2?e[0]===e[1]:!1;return{value:At(r?e[0]:e),isSecondary:n||r}}function On(a,e){var t="".concat(Ir).concat(e.replace(":","-"));return new Promise(function(n,r){if(a.getAttribute(t)!==null)return n();var i=Ne(a.children),s=i.filter(function(B){return B.getAttribute(Nt)===e})[0],o=ee.getComputedStyle(a,e),l=o.getPropertyValue("font-family").match(Pr),f=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(s&&!l)return a.removeChild(s),n();if(l&&c!=="none"&&c!==""){var m=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?I:C,E=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ke[p][l[2].toLowerCase()]:Lr[p][f],S=Fi(m),y=S.value,N=S.isSecondary,A=l[0].startsWith("FontAwesome"),x=Wt(E,y),T=x;if(A){var D=oi(y);D.iconName&&D.prefix&&(x=D.iconName,E=D.prefix)}if(x&&!N&&(!s||s.getAttribute(Ht)!==E||s.getAttribute(Ft)!==T)){a.setAttribute(t,T),s&&a.removeChild(s);var R=Ti(),v=R.extra;v.attributes[Nt]=e,kt(x,E).then(function(B){var J=Xt(g(g({},R),{},{icons:{main:B,mask:qt()},prefix:E,iconName:T,extra:v,watchable:!0})),L=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore(L,a.firstChild):a.appendChild(L),L.outerHTML=J.map(function(Pa){return Be(Pa)}).join(`
`),a.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function Gi(a){return Promise.all([On(a,"::before"),On(a,"::after")])}function Vi(a){return a.parentNode!==document.head&&!~Tr.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Nt)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function Rn(a){if(K)return new Promise(function(e,t){var n=Ne(a.querySelectorAll("*")).filter(Vi).map(Gi),r=Kt.begin("searchPseudoElements");xa(),Promise.all(n).then(function(){r(),xt(),e()}).catch(function(){r(),xt(),t()})})}var ji={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Rn,t}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?k:n;b.searchPseudoElements&&Rn(r)}}},Pn=!1,Yi={mixout:function(){return{dom:{unwatch:function(){xa(),Pn=!0}}}},hooks:function(){return{bootstrap:function(){kn(St("mutationObserverCallbacks",{}))},noAuto:function(){Ci()},watch:function(t){var n=t.observeMutationsRoot;Pn?xt():kn(St("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ln=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)},Wi={mixout:function(){return{parse:{transform:function(t){return Ln(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-transform");return r&&(t.transform=Ln(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,i=t.containerWidth,s=t.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},E={outer:o,inner:m,path:p};return{tag:"g",attributes:g({},E.outer),children:[{tag:"g",attributes:g({},E.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),E.path)}]}]}}}},ht={x:0,y:0,width:"100%",height:"100%"};function Dn(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function qi(a){return a.tag==="g"?a.children:[a]}var Xi={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-mask"),i=r?ct(r.split(" ").map(function(s){return s.trim()})):qt();return i.prefix||(i.prefix=te()),t.mask=i,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,r=t.attributes,i=t.main,s=t.mask,o=t.maskId,l=t.transform,f=i.width,c=i.icon,m=s.width,p=s.icon,E=Wr({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:g(g({},ht),{},{fill:"white"})},y=c.children?{children:c.children.map(Dn)}:{},N={tag:"g",attributes:g({},E.inner),children:[Dn(g({tag:c.tag,attributes:g(g({},c.attributes),E.path)},y))]},A={tag:"g",attributes:g({},E.outer),children:[N]},x="mask-".concat(o||Te()),T="clip-".concat(o||Te()),D={tag:"mask",attributes:g(g({},ht),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,A]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:qi(p)},D]};return n.push(R,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(x,")")},ht)}),{children:n,attributes:r}}}},Ki={provides:function(e){var t=!1;ee.matchMedia&&(t=ee.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=g(g({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:g(g({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ji={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Qi=[Kr,Di,Bi,zi,Ui,ji,Yi,Wi,Xi,Ki,Ji];fi(Qi,{mixoutsTo:U});U.noAuto;U.config;var Ds=U.library;U.dom;var Zi=U.parse,$i=U.findIconDefinition;U.toHtml;var es=U.icon;U.layer;U.text;U.counter;function Bn(a){if(a===null||typeof a=="object"&&a.prefix&&a.iconName)return a;if(Array.isArray(a)&&a.length===2){const[e,t]=a;return{prefix:e,iconName:t}}if(typeof a=="string")return{prefix:"fas",iconName:a}}function ts(a){let e,t;return{c(){e=new La(!1),t=Zt(),this.h()},l(n){e=Da(n,!1),t=Zt(),this.h()},h(){e.a=t},m(n,r){e.m(a[0],n,r),j(n,t,r)},p(n,[r]){r&1&&e.p(n[0])},i:be,o:be,d(n){n&&P(t),n&&e.d()}}}function ns(a,e,t){let n,r,{border:i=!1}=e,{fixedWidth:s=!1}=e,{flip:o=null}=e,{icon:l=null}=e,{mask:f=null}=e,{listItem:c=!1}=e,{pull:m=null}=e,{pulse:p=!1}=e,{rotation:E=null}=e,{swapOpacity:S=!1}=e,{size:y=null}=e,{spin:N=!1}=e,{transform:A={}}=e,{symbol:x=!1}=e,{title:T=null}=e,{inverse:D=!1}=e,R="";return Ba(()=>{const v=Bn(l);if(!v)return;const B=$i(v),J=es(B||l,{symbol:x,title:T,styles:e.style?r:{},classes:[...Object.keys(n).map(L=>n[L]?L:null).filter(L=>!!L),(e.class||"").split(" ")],transform:{...typeof A=="string"?Zi.transform(A):A},mask:Bn(f)});if(!J){console.warn("Could not find one or more icon(s)",B||l,f);return}t(0,R=J.html)}),a.$$set=v=>{t(19,e=$t($t({},e),en(v))),"border"in v&&t(1,i=v.border),"fixedWidth"in v&&t(2,s=v.fixedWidth),"flip"in v&&t(3,o=v.flip),"icon"in v&&t(4,l=v.icon),"mask"in v&&t(5,f=v.mask),"listItem"in v&&t(6,c=v.listItem),"pull"in v&&t(7,m=v.pull),"pulse"in v&&t(8,p=v.pulse),"rotation"in v&&t(9,E=v.rotation),"swapOpacity"in v&&t(10,S=v.swapOpacity),"size"in v&&t(11,y=v.size),"spin"in v&&t(12,N=v.spin),"transform"in v&&t(13,A=v.transform),"symbol"in v&&t(14,x=v.symbol),"title"in v&&t(15,T=v.title),"inverse"in v&&t(16,D=v.inverse)},a.$$.update=()=>{a.$$.dirty&73678&&(n={"fa-spin":N,"fa-pulse":p,"fa-fw":s,"fa-border":i,"fa-li":c,"fa-inverse":D,"fa-flip-horizontal":["both","horizontal"].includes(o),"fa-flip-vertical":["both","vertical"].includes(o),[`fa-${y}`]:y!==null,[`fa-rotate-${E}`]:E!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":S}),r=(e.style||"").split(";").filter(v=>!!v).map(v=>v.split(":").map(B=>B.trim())).reduce((v,B)=>{const[J,L]=B;return v[J]=L,v},{})},e=en(e),[R,i,s,o,l,f,c,m,p,E,S,y,N,A,x,T,D]}class as extends et{constructor(e){super(),tt(this,e,ns,ts,nt,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}function zn(a){let e,t,n;return t=new as({props:{icon:a[2]}}),{c(){e=ae("span"),Ha(t.$$.fragment),this.h()},l(r){e=re(r,"SPAN",{class:!0});var i=we(e);Fa(t.$$.fragment,i),i.forEach(P),this.h()},h(){M(e,"class","btn__icon svelte-1048efx")},m(r,i){j(r,e,i),Ga(t,e,null),n=!0},p(r,i){const s={};i&4&&(s.icon=r[2]),t.$set(s)},i(r){n||(qe(t.$$.fragment,r),n=!0)},o(r){bt(t.$$.fragment,r),n=!1},d(r){r&&P(e),Va(t)}}}function Un(a){let e,t;return{c(){e=ae("img"),this.h()},l(n){e=re(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){tn(e.src,t=a[3])||M(e,"src",t),M(e,"alt",a[1]),M(e,"class","svelte-1048efx")},m(n,r){j(n,e,r)},p(n,r){r&8&&!tn(e.src,t=n[3])&&M(e,"src",t),r&2&&M(e,"alt",n[1])},d(n){n&&P(e)}}}function Hn(a){let e,t;return{c(){e=ae("span"),t=Rt(a[1]),this.h()},l(n){e=re(n,"SPAN",{class:!0});var r=we(e);t=Pt(r,a[1]),r.forEach(P),this.h()},h(){M(e,"class","btn__text svelte-1048efx"),Je(e,"has-image",a[3]||a[2])},m(n,r){j(n,e,r),Me(e,t)},p(n,r){r&2&&Lt(t,n[1]),r&12&&Je(e,"has-image",n[3]||n[2])},d(n){n&&P(e)}}}function rs(a){let e,t,n,r,i,s,o,l=a[2]&&zn(a),f=a[3]&&Un(a),c=a[1]&&Hn(a);return{c(){e=ae("button"),l&&l.c(),t=gt(),f&&f.c(),n=gt(),c&&c.c(),this.h()},l(m){e=re(m,"BUTTON",{class:!0});var p=we(e);l&&l.l(p),t=pt(p),f&&f.l(p),n=pt(p),c&&c.l(p),p.forEach(P),this.h()},h(){M(e,"class",r=ve(`btn btn--${a[7]} 
        ${a[6]?"btn--disabled":""} 
        ${a[8]==="vertical"?"btn--vertical":""} 
        ${a[9]?"btn--border":""} 
        ${a[5]?"btn--narrow":""} 
        ${a[10]?"btn--invert":""} 
        ${a[0]}`)+" svelte-1048efx"),Je(e,"active",a[4])},m(m,p){j(m,e,p),l&&l.m(e,null),Me(e,t),f&&f.m(e,null),Me(e,n),c&&c.m(e,null),i=!0,s||(o=se(e,"click",function(){Wn(a[11])&&a[11].apply(this,arguments)}),s=!0)},p(m,[p]){a=m,a[2]?l?(l.p(a,p),p&4&&qe(l,1)):(l=zn(a),l.c(),qe(l,1),l.m(e,t)):l&&(za(),bt(l,1,1,()=>{l=null}),Ua()),a[3]?f?f.p(a,p):(f=Un(a),f.c(),f.m(e,n)):f&&(f.d(1),f=null),a[1]?c?c.p(a,p):(c=Hn(a),c.c(),c.m(e,null)):c&&(c.d(1),c=null),(!i||p&2017&&r!==(r=ve(`btn btn--${a[7]} 
        ${a[6]?"btn--disabled":""} 
        ${a[8]==="vertical"?"btn--vertical":""} 
        ${a[9]?"btn--border":""} 
        ${a[5]?"btn--narrow":""} 
        ${a[10]?"btn--invert":""} 
        ${a[0]}`)+" svelte-1048efx"))&&M(e,"class",r),(!i||p&2033)&&Je(e,"active",a[4])},i(m){i||(qe(l),i=!0)},o(m){bt(l),i=!1},d(m){m&&P(e),l&&l.d(),f&&f.d(),c&&c.d(),s=!1,o()}}}function is(a,e,t){let{classes:n=""}=e,{text:r=""}=e,{icon:i=null}=e,{image:s=""}=e,{active:o=!0}=e,{narrow:l=!1}=e,{disabled:f=!1}=e,{colour:c}=e,{orientation:m="horizontal"}=e,{border:p=!1}=e,{invert:E=!1}=e,{onClick:S}=e;return a.$$set=y=>{"classes"in y&&t(0,n=y.classes),"text"in y&&t(1,r=y.text),"icon"in y&&t(2,i=y.icon),"image"in y&&t(3,s=y.image),"active"in y&&t(4,o=y.active),"narrow"in y&&t(5,l=y.narrow),"disabled"in y&&t(6,f=y.disabled),"colour"in y&&t(7,c=y.colour),"orientation"in y&&t(8,m=y.orientation),"border"in y&&t(9,p=y.border),"invert"in y&&t(10,E=y.invert),"onClick"in y&&t(11,S=y.onClick)},[n,r,i,s,o,l,f,c,m,p,E,S]}class Bs extends et{constructor(e){super(),tt(this,e,is,rs,nt,{classes:0,text:1,icon:2,image:3,active:4,narrow:5,disabled:6,colour:7,orientation:8,border:9,invert:10,onClick:11})}}const zs=_(1),Us=_("Quanta55"),Hs=_("The Quantum Realm"),Qt=_([{id:1,username:"User 1",location:"Location1",x:.5,y:.235,z:0,isActive:!1,isConnected:!1},{id:2,username:"User 2",location:"Location2",x:.3,y:.8,z:0,isActive:!0,isConnected:!0},{id:3,username:"User 3",location:"Location3",x:.1,y:.6,z:0,isActive:!0,isConnected:!1},{id:4,username:"User 4",location:"Location4",x:.9,y:.4,z:0,isActive:!1,isConnected:!0},{id:5,username:"User 5",location:"Location5",x:.7,y:.2,z:0,isActive:!0,isConnected:!1},{id:6,username:"User 6",location:"Location6",x:.2,y:.9,z:0,isActive:!1,isConnected:!0},{id:7,username:"User 7",location:"Location7",x:.4,y:.7,z:0,isActive:!1,isConnected:!1},{id:8,username:"User 8",location:"Location8",x:.6,y:.1,z:0,isActive:!0,isConnected:!0},{id:9,username:"User 9",location:"Location9",x:.8,y:.3,z:0,isActive:!1,isConnected:!1},{id:10,username:"User 10",location:"Location10",x:.235,y:.5,z:0,isActive:!1,isConnected:!0}]),ss=X(Qt,a=>a.filter(e=>e.isConnected).map((e,t)=>({...e,colour:sn[(t+1)%sn.length]}))),Fs=X(Qt,a=>a.filter(e=>!e.isConnected)),Gs=a=>{var e;return a==="you"?"var(--color-theme-1)":((e=w(ss).find(t=>t.id===+a))==null?void 0:e.colour)||"var(--color-grey-darker)"},Vs=a=>{var e;return a==="you"?"You":((e=w(Qt).find(t=>t.id===+a))==null?void 0:e.username)||"Unknown"};function Fn(a){let e,t;return{c(){e=ae("label"),t=Rt(a[3]),this.h()},l(n){e=re(n,"LABEL",{class:!0,for:!0});var r=we(e);t=Pt(r,a[3]),r.forEach(P),this.h()},h(){M(e,"class","title svelte-jn2smc"),M(e,"for",a[1])},m(n,r){j(n,e,r),Me(e,t)},p(n,r){r&8&&Lt(t,n[3]),r&2&&M(e,"for",n[1])},d(n){n&&P(e)}}}function os(a){let e,t,n,r,i,s,o=a[4]&&Fn(a);return{c(){o&&o.c(),e=gt(),t=ae("input"),this.h()},l(l){o&&o.l(l),e=pt(l),t=re(l,"INPUT",{id:!0,placeholder:!0,style:!0,class:!0}),this.h()},h(){M(t,"id",a[1]),M(t,"placeholder",a[2]),M(t,"style",n=`
        border: ${a[5]}; 
        color: ${a[6]}; 
        text-transform: ${a[8]?"uppercase":"none"};
        padding-left: ${a[4]?"0":"auto"}
        `),M(t,"class",r=ve(a[7])+" svelte-jn2smc")},m(l,f){o&&o.m(l,f),j(l,e,f),j(l,t,f),nn(t,a[0]),i||(s=[se(t,"input",a[10]),se(t,"change",a[11]),se(t,"keydown",a[12]),se(t,"keyup",a[13])],i=!0)},p(l,[f]){l[4]?o?o.p(l,f):(o=Fn(l),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),f&2&&M(t,"id",l[1]),f&4&&M(t,"placeholder",l[2]),f&368&&n!==(n=`
        border: ${l[5]}; 
        color: ${l[6]}; 
        text-transform: ${l[8]?"uppercase":"none"};
        padding-left: ${l[4]?"0":"auto"}
        `)&&M(t,"style",n),f&128&&r!==(r=ve(l[7])+" svelte-jn2smc")&&M(t,"class",r),f&1&&t.value!==l[0]&&nn(t,l[0])},i:be,o:be,d(l){o&&o.d(l),l&&P(e),l&&P(t),i=!1,qn(s)}}}function ls(a,e,t){const n=ja();let{id:r=""}=e,{placeholder:i=""}=e,{value:s=""}=e,{label:o=""}=e,{showLabel:l=!0}=e,{border:f="none"}=e,{color:c="white"}=e,{classes:m=""}=e,{uppercase:p=!1}=e;function E(){s=this.value,t(0,s)}const S=()=>n("change",s),y=A=>{un.set(!0),A.key==="Enter"&&s!==""&&n("enter",s)&&t(0,s="")},N=()=>{un.set(!1)};return a.$$set=A=>{"id"in A&&t(1,r=A.id),"placeholder"in A&&t(2,i=A.placeholder),"value"in A&&t(0,s=A.value),"label"in A&&t(3,o=A.label),"showLabel"in A&&t(4,l=A.showLabel),"border"in A&&t(5,f=A.border),"color"in A&&t(6,c=A.color),"classes"in A&&t(7,m=A.classes),"uppercase"in A&&t(8,p=A.uppercase)},[s,r,i,o,l,f,c,m,p,n,E,S,y,N]}let js=class extends et{constructor(e){super(),tt(this,e,ls,os,nt,{id:1,placeholder:2,value:0,label:3,showLabel:4,border:5,color:6,classes:7,uppercase:8})}};function Gn(a,e,t){const n=a.slice();return n[11]=e[t].name,n[12]=e[t].value,n[13]=e[t].active,n}function Vn(a){let e,t=a[11]+"",n,r,i;return{c(){e=ae("option"),n=Rt(t),this.h()},l(s){e=re(s,"OPTION",{});var o=we(e);n=Pt(o,t),o.forEach(P),this.h()},h(){e.disabled=r=!a[13],e.__value=i=a[12]||a[11],e.value=e.__value},m(s,o){j(s,e,o),Me(e,n)},p(s,o){o&4&&t!==(t=s[11]+"")&&Lt(n,t),o&4&&r!==(r=!s[13])&&(e.disabled=r),o&4&&i!==(i=s[12]||s[11])&&(e.__value=i,e.value=e.__value)},d(s){s&&P(e)}}}function cs(a){let e,t,n,r,i,s=a[2],o=[];for(let l=0;l<s.length;l+=1)o[l]=Vn(Gn(a,s,l));return{c(){e=ae("select");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){e=re(l,"SELECT",{id:!0,style:!0,class:!0});var f=we(e);for(let c=0;c<o.length;c+=1)o[c].l(f);f.forEach(P),this.h()},h(){M(e,"id",a[1]),M(e,"style",t=`background-color: ${a[4]}; color: ${a[5]}; border: ${a[6]}; text-transform: ${a[7]?"uppercase":"none"}`),e.disabled=a[8],M(e,"class",n=ve(a[9])+" svelte-v8hjr1"),a[0]===void 0&&Ya(()=>a[10].call(e))},m(l,f){j(l,e,f);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);an(e,a[0],!0),r||(i=[se(e,"change",function(){Wn(a[3])&&a[3].apply(this,arguments)}),se(e,"change",a[10])],r=!0)},p(l,[f]){if(a=l,f&4){s=a[2];let c;for(c=0;c<s.length;c+=1){const m=Gn(a,s,c);o[c]?o[c].p(m,f):(o[c]=Vn(m),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}f&2&&M(e,"id",a[1]),f&240&&t!==(t=`background-color: ${a[4]}; color: ${a[5]}; border: ${a[6]}; text-transform: ${a[7]?"uppercase":"none"}`)&&M(e,"style",t),f&256&&(e.disabled=a[8]),f&512&&n!==(n=ve(a[9])+" svelte-v8hjr1")&&M(e,"class",n),f&5&&an(e,a[0])},i:be,o:be,d(l){l&&P(e),Wa(o,l),r=!1,qn(i)}}}function fs(a,e,t){var S,y;let{id:n}=e,{options:r}=e,{onChange:i=()=>{}}=e,{selected:s=((S=r[0])==null?void 0:S.value)||((y=r[0])==null?void 0:y.name)}=e,{background:o="transparent"}=e,{color:l="white"}=e,{border:f="1px solid white"}=e,{uppercase:c=!0}=e,{disabled:m=!1}=e,{classes:p=""}=e;function E(){s=qa(this),t(0,s),t(2,r)}return a.$$set=N=>{"id"in N&&t(1,n=N.id),"options"in N&&t(2,r=N.options),"onChange"in N&&t(3,i=N.onChange),"selected"in N&&t(0,s=N.selected),"background"in N&&t(4,o=N.background),"color"in N&&t(5,l=N.color),"border"in N&&t(6,f=N.border),"uppercase"in N&&t(7,c=N.uppercase),"disabled"in N&&t(8,m=N.disabled),"classes"in N&&t(9,p=N.classes)},[s,n,r,i,o,l,f,c,m,p,E]}class Ws extends et{constructor(e){super(),tt(this,e,fs,cs,nt,{id:1,options:2,onChange:3,selected:0,background:4,color:5,border:6,uppercase:7,disabled:8,classes:9})}}var qs={prefix:"fas",iconName:"table",icon:[512,512,[],"f0ce","M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},Xs={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ks={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},Js={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Qs={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},us={prefix:"fas",iconName:"face-smile-wink",icon:[512,512,[128521,"smile-wink"],"f4da","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"]},Zs=us,$s={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},eo={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},to={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},no={prefix:"fas",iconName:"signal",icon:[640,512,[128246,"signal-5","signal-perfect"],"f012","M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},ao={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},ro={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},io={prefix:"fas",iconName:"braille",icon:[640,512,[],"f2a1","M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96zM224 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM80 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zm240 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM64 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM224 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM352 96a64 64 0 1 1 128 0A64 64 0 1 1 352 96zm240 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0A64 64 0 1 1 512 96zm64 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM416 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]},so={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},oo={prefix:"fas",iconName:"network-wired",icon:[640,512,[],"f6ff","M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"]},lo={prefix:"fas",iconName:"compact-disc",icon:[512,512,[128191,128192,128440],"f51f","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z"]},co={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},ds={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},fo=ds,Oa={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},uo=Oa,mo=Oa,ho={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},go={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};class G{constructor(e=!1){this.eventMap={},this.eventsSuspended=e==!0}addListener(e,t,n={}){if(typeof e=="string"&&e.length<1||e instanceof String&&e.length<1||typeof e!="string"&&!(e instanceof String)&&e!==G.ANY_EVENT)throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");if(typeof t!="function")throw new TypeError("The callback must be a function.");const r=new jn(e,this,t,n);return this.eventMap[e]||(this.eventMap[e]=[]),n.prepend?this.eventMap[e].unshift(r):this.eventMap[e].push(r),r}addOneTimeListener(e,t,n={}){n.remaining=1,this.addListener(e,t,n)}static get ANY_EVENT(){return Symbol.for("Any event")}hasListener(e,t){return e===void 0?this.eventMap[G.ANY_EVENT]&&this.eventMap[G.ANY_EVENT].length>0?!0:Object.entries(this.eventMap).some(([,n])=>n.length>0):this.eventMap[e]&&this.eventMap[e].length>0?t instanceof jn?this.eventMap[e].filter(r=>r===t).length>0:typeof t=="function"?this.eventMap[e].filter(r=>r.callback===t).length>0:t==null:!1}get eventNames(){return Object.keys(this.eventMap)}getListeners(e){return this.eventMap[e]||[]}suspendEvent(e){this.getListeners(e).forEach(t=>{t.suspended=!0})}unsuspendEvent(e){this.getListeners(e).forEach(t=>{t.suspended=!1})}getListenerCount(e){return this.getListeners(e).length}emit(e,...t){if(typeof e!="string"&&!(e instanceof String))throw new TypeError("The 'event' parameter must be a string.");if(this.eventsSuspended)return;let n=[],r=this.eventMap[G.ANY_EVENT]||[];return this.eventMap[e]&&(r=r.concat(this.eventMap[e])),r.forEach(i=>{if(i.suspended)return;let s=[...t];Array.isArray(i.arguments)&&(s=s.concat(i.arguments)),i.remaining>0&&(n.push(i.callback.apply(i.context,s)),i.count++),--i.remaining<1&&i.remove()}),n}removeListener(e,t,n={}){if(e===void 0){this.eventMap={};return}else if(!this.eventMap[e])return;let r=this.eventMap[e].filter(i=>t&&i.callback!==t||n.remaining&&n.remaining!==i.remaining||n.context&&n.context!==i.context);r.length?this.eventMap[e]=r:delete this.eventMap[e]}async waitFor(e,t={}){return t.duration=parseInt(t.duration),(isNaN(t.duration)||t.duration<=0)&&(t.duration=1/0),new Promise((n,r)=>{let i,s=this.addListener(e,()=>{clearTimeout(i),n()},{remaining:1});t.duration!==1/0&&(i=setTimeout(()=>{s.remove(),r("The duration expired before the event was emitted.")},t.duration))})}get eventCount(){return Object.keys(this.eventMap).length}}class jn{constructor(e,t,n,r={}){if(typeof e!="string"&&!(e instanceof String)&&e!==G.ANY_EVENT)throw new TypeError("The 'event' parameter must be a string or EventEmitter.ANY_EVENT.");if(!t)throw new ReferenceError("The 'target' parameter is mandatory.");if(typeof n!="function")throw new TypeError("The 'callback' must be a function.");r.arguments!==void 0&&!Array.isArray(r.arguments)&&(r.arguments=[r.arguments]),r=Object.assign({context:t,remaining:1/0,arguments:void 0,duration:1/0},r),r.duration!==1/0&&setTimeout(()=>this.remove(),r.duration),this.arguments=r.arguments,this.callback=n,this.context=r.context,this.count=0,this.event=e,this.remaining=parseInt(r.remaining)>=1?parseInt(r.remaining):1/0,this.suspended=!1,this.target=t}remove(){this.target.removeListener(this.event,this.callback,{context:this.context,remaining:this.remaining})}}/**
 * The `Enumerations` class contains enumerations and arrays of elements used throughout the
 * library. All its properties are static and should be referenced using the class name. For
 * example: `Enumerations.CHANNEL_MESSAGES`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class u{static get MIDI_CHANNEL_MESSAGES(){return this.validation&&console.warn("The MIDI_CHANNEL_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MESSAGES enum instead."),u.CHANNEL_MESSAGES}static get CHANNEL_MESSAGES(){return{noteoff:8,noteon:9,keyaftertouch:10,controlchange:11,programchange:12,channelaftertouch:13,pitchbend:14}}static get CHANNEL_NUMBERS(){return[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}static get MIDI_CHANNEL_NUMBERS(){return this.validation&&console.warn("The MIDI_CHANNEL_NUMBERS array has been deprecated. Use the Enumerations.CHANNEL_NUMBERS array instead."),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}static get CHANNEL_MODE_MESSAGES(){return{allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127}}static get MIDI_CHANNEL_MODE_MESSAGES(){return this.validation&&console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been deprecated. Use the Enumerations.CHANNEL_MODE_MESSAGES enum instead."),u.CHANNEL_MODE_MESSAGES}static get MIDI_CONTROL_CHANGE_MESSAGES(){return this.validation&&console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been deprecated. Use the Enumerations.CONTROL_CHANGE_MESSAGES array instead."),{bankselectcoarse:0,modulationwheelcoarse:1,breathcontrollercoarse:2,controller3:3,footcontrollercoarse:4,portamentotimecoarse:5,dataentrycoarse:6,volumecoarse:7,balancecoarse:8,controller9:9,pancoarse:10,expressioncoarse:11,effectcontrol1coarse:12,effectcontrol2coarse:13,controller14:14,controller15:15,generalpurposeslider1:16,generalpurposeslider2:17,generalpurposeslider3:18,generalpurposeslider4:19,controller20:20,controller21:21,controller22:22,controller23:23,controller24:24,controller25:25,controller26:26,controller27:27,controller28:28,controller29:29,controller30:30,controller31:31,bankselectfine:32,modulationwheelfine:33,breathcontrollerfine:34,controller35:35,footcontrollerfine:36,portamentotimefine:37,dataentryfine:38,volumefine:39,balancefine:40,controller41:41,panfine:42,expressionfine:43,effectcontrol1fine:44,effectcontrol2fine:45,controller46:46,controller47:47,controller48:48,controller49:49,controller50:50,controller51:51,controller52:52,controller53:53,controller54:54,controller55:55,controller56:56,controller57:57,controller58:58,controller59:59,controller60:60,controller61:61,controller62:62,controller63:63,holdpedal:64,portamento:65,sustenutopedal:66,softpedal:67,legatopedal:68,hold2pedal:69,soundvariation:70,resonance:71,soundreleasetime:72,soundattacktime:73,brightness:74,soundcontrol6:75,soundcontrol7:76,soundcontrol8:77,soundcontrol9:78,soundcontrol10:79,generalpurposebutton1:80,generalpurposebutton2:81,generalpurposebutton3:82,generalpurposebutton4:83,controller84:84,controller85:85,controller86:86,controller87:87,controller88:88,controller89:89,controller90:90,reverblevel:91,tremololevel:92,choruslevel:93,celestelevel:94,phaserlevel:95,databuttonincrement:96,databuttondecrement:97,nonregisteredparametercoarse:98,nonregisteredparameterfine:99,registeredparametercoarse:100,registeredparameterfine:101,controller102:102,controller103:103,controller104:104,controller105:105,controller106:106,controller107:107,controller108:108,controller109:109,controller110:110,controller111:111,controller112:112,controller113:113,controller114:114,controller115:115,controller116:116,controller117:117,controller118:118,controller119:119,allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127}}static get CONTROL_CHANGE_MESSAGES(){return[{number:0,name:"bankselectcoarse",description:"Bank Select (Coarse)",position:"msb"},{number:1,name:"modulationwheelcoarse",description:"Modulation Wheel (Coarse)",position:"msb"},{number:2,name:"breathcontrollercoarse",description:"Breath Controller (Coarse)",position:"msb"},{number:3,name:"controller3",description:"Undefined",position:"msb"},{number:4,name:"footcontrollercoarse",description:"Foot Controller (Coarse)",position:"msb"},{number:5,name:"portamentotimecoarse",description:"Portamento Time (Coarse)",position:"msb"},{number:6,name:"dataentrycoarse",description:"Data Entry (Coarse)",position:"msb"},{number:7,name:"volumecoarse",description:"Channel Volume (Coarse)",position:"msb"},{number:8,name:"balancecoarse",description:"Balance (Coarse)",position:"msb"},{number:9,name:"controller9",description:"Controller 9 (Coarse)",position:"msb"},{number:10,name:"pancoarse",description:"Pan (Coarse)",position:"msb"},{number:11,name:"expressioncoarse",description:"Expression Controller (Coarse)",position:"msb"},{number:12,name:"effectcontrol1coarse",description:"Effect Control 1 (Coarse)",position:"msb"},{number:13,name:"effectcontrol2coarse",description:"Effect Control 2 (Coarse)",position:"msb"},{number:14,name:"controller14",description:"Undefined",position:"msb"},{number:15,name:"controller15",description:"Undefined",position:"msb"},{number:16,name:"generalpurposecontroller1",description:"General Purpose Controller 1 (Coarse)",position:"msb"},{number:17,name:"generalpurposecontroller2",description:"General Purpose Controller 2 (Coarse)",position:"msb"},{number:18,name:"generalpurposecontroller3",description:"General Purpose Controller 3 (Coarse)",position:"msb"},{number:19,name:"generalpurposecontroller4",description:"General Purpose Controller 4 (Coarse)",position:"msb"},{number:20,name:"controller20",description:"Undefined",position:"msb"},{number:21,name:"controller21",description:"Undefined",position:"msb"},{number:22,name:"controller22",description:"Undefined",position:"msb"},{number:23,name:"controller23",description:"Undefined",position:"msb"},{number:24,name:"controller24",description:"Undefined",position:"msb"},{number:25,name:"controller25",description:"Undefined",position:"msb"},{number:26,name:"controller26",description:"Undefined",position:"msb"},{number:27,name:"controller27",description:"Undefined",position:"msb"},{number:28,name:"controller28",description:"Undefined",position:"msb"},{number:29,name:"controller29",description:"Undefined",position:"msb"},{number:30,name:"controller30",description:"Undefined",position:"msb"},{number:31,name:"controller31",description:"Undefined",position:"msb"},{number:32,name:"bankselectfine",description:"Bank Select (Fine)",position:"lsb"},{number:33,name:"modulationwheelfine",description:"Modulation Wheel (Fine)",position:"lsb"},{number:34,name:"breathcontrollerfine",description:"Breath Controller (Fine)",position:"lsb"},{number:35,name:"controller35",description:"Undefined",position:"lsb"},{number:36,name:"footcontrollerfine",description:"Foot Controller (Fine)",position:"lsb"},{number:37,name:"portamentotimefine",description:"Portamento Time (Fine)",position:"lsb"},{number:38,name:"dataentryfine",description:"Data Entry (Fine)",position:"lsb"},{number:39,name:"channelvolumefine",description:"Channel Volume (Fine)",position:"lsb"},{number:40,name:"balancefine",description:"Balance (Fine)",position:"lsb"},{number:41,name:"controller41",description:"Undefined",position:"lsb"},{number:42,name:"panfine",description:"Pan (Fine)",position:"lsb"},{number:43,name:"expressionfine",description:"Expression Controller (Fine)",position:"lsb"},{number:44,name:"effectcontrol1fine",description:"Effect control 1 (Fine)",position:"lsb"},{number:45,name:"effectcontrol2fine",description:"Effect control 2 (Fine)",position:"lsb"},{number:46,name:"controller46",description:"Undefined",position:"lsb"},{number:47,name:"controller47",description:"Undefined",position:"lsb"},{number:48,name:"controller48",description:"General Purpose Controller 1 (Fine)",position:"lsb"},{number:49,name:"controller49",description:"General Purpose Controller 2 (Fine)",position:"lsb"},{number:50,name:"controller50",description:"General Purpose Controller 3 (Fine)",position:"lsb"},{number:51,name:"controller51",description:"General Purpose Controller 4 (Fine)",position:"lsb"},{number:52,name:"controller52",description:"Undefined",position:"lsb"},{number:53,name:"controller53",description:"Undefined",position:"lsb"},{number:54,name:"controller54",description:"Undefined",position:"lsb"},{number:55,name:"controller55",description:"Undefined",position:"lsb"},{number:56,name:"controller56",description:"Undefined",position:"lsb"},{number:57,name:"controller57",description:"Undefined",position:"lsb"},{number:58,name:"controller58",description:"Undefined",position:"lsb"},{number:59,name:"controller59",description:"Undefined",position:"lsb"},{number:60,name:"controller60",description:"Undefined",position:"lsb"},{number:61,name:"controller61",description:"Undefined",position:"lsb"},{number:62,name:"controller62",description:"Undefined",position:"lsb"},{number:63,name:"controller63",description:"Undefined",position:"lsb"},{number:64,name:"damperpedal",description:"Damper Pedal On/Off"},{number:65,name:"portamento",description:"Portamento On/Off"},{number:66,name:"sostenuto",description:"Sostenuto On/Off"},{number:67,name:"softpedal",description:"Soft Pedal On/Off"},{number:68,name:"legatopedal",description:"Legato Pedal On/Off"},{number:69,name:"hold2",description:"Hold 2 On/Off"},{number:70,name:"soundvariation",description:"Sound Variation",position:"lsb"},{number:71,name:"resonance",description:"Resonance",position:"lsb"},{number:72,name:"releasetime",description:"Release Time",position:"lsb"},{number:73,name:"attacktime",description:"Attack Time",position:"lsb"},{number:74,name:"brightness",description:"Brightness",position:"lsb"},{number:75,name:"decaytime",description:"Decay Time",position:"lsb"},{number:76,name:"vibratorate",description:"Vibrato Rate",position:"lsb"},{number:77,name:"vibratodepth",description:"Vibrato Depth",position:"lsb"},{number:78,name:"vibratodelay",description:"Vibrato Delay",position:"lsb"},{number:79,name:"controller79",description:"Undefined",position:"lsb"},{number:80,name:"generalpurposecontroller5",description:"General Purpose Controller 5",position:"lsb"},{number:81,name:"generalpurposecontroller6",description:"General Purpose Controller 6",position:"lsb"},{number:82,name:"generalpurposecontroller7",description:"General Purpose Controller 7",position:"lsb"},{number:83,name:"generalpurposecontroller8",description:"General Purpose Controller 8",position:"lsb"},{number:84,name:"portamentocontrol",description:"Portamento Control",position:"lsb"},{number:85,name:"controller85",description:"Undefined"},{number:86,name:"controller86",description:"Undefined"},{number:87,name:"controller87",description:"Undefined"},{number:88,name:"highresolutionvelocityprefix",description:"High Resolution Velocity Prefix",position:"lsb"},{number:89,name:"controller89",description:"Undefined"},{number:90,name:"controller90",description:"Undefined"},{number:91,name:"effect1depth",description:"Effects 1 Depth (Reverb Send Level)"},{number:92,name:"effect2depth",description:"Effects 2 Depth"},{number:93,name:"effect3depth",description:"Effects 3 Depth (Chorus Send Level)"},{number:94,name:"effect4depth",description:"Effects 4 Depth"},{number:95,name:"effect5depth",description:"Effects 5 Depth"},{number:96,name:"dataincrement",description:"Data Increment"},{number:97,name:"datadecrement",description:"Data Decrement"},{number:98,name:"nonregisteredparameterfine",description:"Non-Registered Parameter Number (Fine)",position:"lsb"},{number:99,name:"nonregisteredparametercoarse",description:"Non-Registered Parameter Number (Coarse)",position:"msb"},{number:100,name:"registeredparameterfine",description:"Registered Parameter Number (Fine)",position:"lsb"},{number:101,name:"registeredparametercoarse",description:"Registered Parameter Number (Coarse)",position:"msb"},{number:102,name:"controller102",description:"Undefined"},{number:103,name:"controller103",description:"Undefined"},{number:104,name:"controller104",description:"Undefined"},{number:105,name:"controller105",description:"Undefined"},{number:106,name:"controller106",description:"Undefined"},{number:107,name:"controller107",description:"Undefined"},{number:108,name:"controller108",description:"Undefined"},{number:109,name:"controller109",description:"Undefined"},{number:110,name:"controller110",description:"Undefined"},{number:111,name:"controller111",description:"Undefined"},{number:112,name:"controller112",description:"Undefined"},{number:113,name:"controller113",description:"Undefined"},{number:114,name:"controller114",description:"Undefined"},{number:115,name:"controller115",description:"Undefined"},{number:116,name:"controller116",description:"Undefined"},{number:117,name:"controller117",description:"Undefined"},{number:118,name:"controller118",description:"Undefined"},{number:119,name:"controller119",description:"Undefined"},{number:120,name:"allsoundoff",description:"All Sound Off"},{number:121,name:"resetallcontrollers",description:"Reset All Controllers"},{number:122,name:"localcontrol",description:"Local Control On/Off"},{number:123,name:"allnotesoff",description:"All Notes Off"},{number:124,name:"omnimodeoff",description:"Omni Mode Off"},{number:125,name:"omnimodeon",description:"Omni Mode On"},{number:126,name:"monomodeon",description:"Mono Mode On"},{number:127,name:"polymodeon",description:"Poly Mode On"}]}static get REGISTERED_PARAMETERS(){return{pitchbendrange:[0,0],channelfinetuning:[0,1],channelcoarsetuning:[0,2],tuningprogram:[0,3],tuningbank:[0,4],modulationrange:[0,5],azimuthangle:[61,0],elevationangle:[61,1],gain:[61,2],distanceratio:[61,3],maximumdistance:[61,4],maximumdistancegain:[61,5],referencedistanceratio:[61,6],panspreadangle:[61,7],rollangle:[61,8]}}static get MIDI_REGISTERED_PARAMETERS(){return this.validation&&console.warn("The MIDI_REGISTERED_PARAMETERS enum has been deprecated. Use the Enumerations.REGISTERED_PARAMETERS enum instead."),u.MIDI_REGISTERED_PARAMETERS}static get SYSTEM_MESSAGES(){return{sysex:240,timecode:241,songposition:242,songselect:243,tunerequest:246,tuningrequest:246,sysexend:247,clock:248,start:250,continue:251,stop:252,activesensing:254,reset:255,midimessage:0,unknownsystemmessage:-1}}static get MIDI_SYSTEM_MESSAGES(){return this.validation&&console.warn("The MIDI_SYSTEM_MESSAGES enum has been deprecated. Use the Enumerations.SYSTEM_MESSAGES enum instead."),u.SYSTEM_MESSAGES}static get CHANNEL_EVENTS(){return["noteoff","controlchange","noteon","keyaftertouch","programchange","channelaftertouch","pitchbend","allnotesoff","allsoundoff","localcontrol","monomode","omnimode","resetallcontrollers","nrpn","nrpn-dataentrycoarse","nrpn-dataentryfine","nrpn-dataincrement","nrpn-datadecrement","rpn","rpn-dataentrycoarse","rpn-dataentryfine","rpn-dataincrement","rpn-datadecrement","nrpn-databuttonincrement","nrpn-databuttondecrement","rpn-databuttonincrement","rpn-databuttondecrement"]}}/**
 * The `Note` class represents a single musical note such as `"D3"`, `"G#4"`, `"F-1"`, `"Gb7"`, etc.
 *
 * `Note` objects can be played back on a single channel by calling
 * [`OutputChannel.playNote()`]{@link OutputChannel#playNote} or, on multiple channels of the same
 * output, by calling [`Output.playNote()`]{@link Output#playNote}.
 *
 * The note has [`attack`](#attack) and [`release`](#release) velocities set at `0.5` by default.
 * These can be changed by passing in the appropriate option. It is also possible to set a
 * system-wide default for attack and release velocities by using the
 * [`WebMidi.defaults`](WebMidi#defaults) property.
 *
 * If you prefer to work with raw MIDI values (`0` to `127`), you can use [`rawAttack`](#rawAttack) and
 * [`rawRelease`](#rawRelease) to both get and set the values.
 *
 * The note may have a [`duration`](#duration). If it does, playback will be automatically stopped
 * when the duration has elapsed by sending a `"noteoff"` event. By default, the duration is set to
 * `Infinity`. In this case, it will never stop playing unless explicitly stopped by calling a
 * method such as [`OutputChannel.stopNote()`]{@link OutputChannel#stopNote},
 * [`Output.stopNote()`]{@link Output#stopNote} or similar.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class ge{constructor(e,t={}){this.duration=d.defaults.note.duration,this.attack=d.defaults.note.attack,this.release=d.defaults.note.release,t.duration!=null&&(this.duration=t.duration),t.attack!=null&&(this.attack=t.attack),t.rawAttack!=null&&(this.attack=h.from7bitToFloat(t.rawAttack)),t.release!=null&&(this.release=t.release),t.rawRelease!=null&&(this.release=h.from7bitToFloat(t.rawRelease)),Number.isInteger(e)?this.identifier=h.toNoteIdentifier(e):this.identifier=e}get identifier(){return this._name+(this._accidental||"")+this._octave}set identifier(e){const t=h.getNoteDetails(e);if(d.validation&&!e)throw new Error("Invalid note identifier");this._name=t.name,this._accidental=t.accidental,this._octave=t.octave}get name(){return this._name}set name(e){if(d.validation&&(e=e.toUpperCase(),!["C","D","E","F","G","A","B"].includes(e)))throw new Error("Invalid name value");this._name=e}get accidental(){return this._accidental}set accidental(e){if(d.validation&&(e=e.toLowerCase(),!["#","##","b","bb"].includes(e)))throw new Error("Invalid accidental value");this._accidental=e}get octave(){return this._octave}set octave(e){if(d.validation&&(e=parseInt(e),isNaN(e)))throw new Error("Invalid octave value");this._octave=e}get duration(){return this._duration}set duration(e){if(d.validation&&(e=parseFloat(e),isNaN(e)||e===null||e<0))throw new RangeError("Invalid duration value.");this._duration=e}get attack(){return this._attack}set attack(e){if(d.validation&&(e=parseFloat(e),isNaN(e)||!(e>=0&&e<=1)))throw new RangeError("Invalid attack value.");this._attack=e}get release(){return this._release}set release(e){if(d.validation&&(e=parseFloat(e),isNaN(e)||!(e>=0&&e<=1)))throw new RangeError("Invalid release value.");this._release=e}get rawAttack(){return h.fromFloatTo7Bit(this._attack)}set rawAttack(e){this._attack=h.from7bitToFloat(e)}get rawRelease(){return h.fromFloatTo7Bit(this._release)}set rawRelease(e){this._release=h.from7bitToFloat(e)}get number(){return h.toNoteNumber(this.identifier)}getOffsetNumber(e=0,t=0){return d.validation&&(e=parseInt(e)||0,t=parseInt(t)||0),Math.min(Math.max(this.number+e*12+t,0),127)}}/**
 * The `Utilities` class contains general-purpose utility methods. All methods are static and
 * should be called using the class name. For example: `Utilities.getNoteDetails("C4")`.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class h{static toNoteNumber(e,t=0){if(t=t==null?0:parseInt(t),isNaN(t))throw new RangeError("Invalid 'octaveOffset' value");typeof e!="string"&&(e="");const n=this.getNoteDetails(e);if(!n)throw new TypeError("Invalid note identifier");const r={C:0,D:2,E:4,F:5,G:7,A:9,B:11};let i=(n.octave+1+t)*12;if(i+=r[n.name],n.accidental&&(n.accidental.startsWith("b")?i-=n.accidental.length:i+=n.accidental.length),i<0||i>127)throw new RangeError("Invalid octaveOffset value");return i}static getNoteDetails(e){Number.isInteger(e)&&(e=this.toNoteIdentifier(e));const t=e.match(/^([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)$/i);if(!t)throw new TypeError("Invalid note identifier");const n=t[1].toUpperCase(),r=parseInt(t[3]);let i=t[2].toLowerCase();return i=i===""?void 0:i,{accidental:i,identifier:n+(i||"")+r,name:n,octave:r}}static sanitizeChannels(e){let t;if(d.validation){if(e==="all")t=["all"];else if(e==="none")return[]}return Array.isArray(e)?t=e:t=[e],t.indexOf("all")>-1&&(t=u.MIDI_CHANNEL_NUMBERS),t.map(function(n){return parseInt(n)}).filter(function(n){return n>=1&&n<=16})}static toTimestamp(e){let t=!1;const n=parseFloat(e);return isNaN(n)?!1:(typeof e=="string"&&e.substring(0,1)==="+"?n>=0&&(t=d.time+n):n>=0&&(t=n),t)}static guessNoteNumber(e,t){t=parseInt(t)||0;let n=!1;if(Number.isInteger(e)&&e>=0&&e<=127)n=parseInt(e);else if(parseInt(e)>=0&&parseInt(e)<=127)n=parseInt(e);else if(typeof e=="string"||e instanceof String)try{n=this.toNoteNumber(e.trim(),t)}catch{return!1}return n}static toNoteIdentifier(e,t){if(e=parseInt(e),isNaN(e)||e<0||e>127)throw new RangeError("Invalid note number");if(t=t==null?0:parseInt(t),isNaN(t))throw new RangeError("Invalid octaveOffset value");const n=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],r=Math.floor(e/12-1)+t;return n[e%12]+r.toString()}static buildNote(e,t={}){if(t.octaveOffset=parseInt(t.octaveOffset)||0,e instanceof ge)return e;let n=this.guessNoteNumber(e,t.octaveOffset);if(n===!1)throw new TypeError(`The input could not be parsed as a note (${e})`);return t.octaveOffset=void 0,new ge(n,t)}static buildNoteArray(e,t={}){let n=[];return Array.isArray(e)||(e=[e]),e.forEach(r=>{n.push(this.buildNote(r,t))}),n}static from7bitToFloat(e){return e===1/0&&(e=127),e=parseInt(e)||0,Math.min(Math.max(e/127,0),1)}static fromFloatTo7Bit(e){return e===1/0&&(e=1),e=parseFloat(e)||0,Math.min(Math.max(Math.round(e*127),0),127)}static fromMsbLsbToFloat(e,t=0){d.validation&&(e=Math.min(Math.max(parseInt(e)||0,0),127),t=Math.min(Math.max(parseInt(t)||0,0),127));const n=((e<<7)+t)/16383;return Math.min(Math.max(n,0),1)}static fromFloatToMsbLsb(e){d.validation&&(e=Math.min(Math.max(parseFloat(e)||0,0),1));const t=Math.round(e*16383);return{msb:t>>7,lsb:t&127}}static offsetNumber(e,t=0,n=0){if(d.validation){if(e=parseInt(e),isNaN(e))throw new Error("Invalid note number");t=parseInt(t)||0,n=parseInt(n)||0}return Math.min(Math.max(e+t*12+n,0),127)}static getPropertyByValue(e,t){return Object.keys(e).find(n=>e[n]===t)}static getCcNameByNumber(e){if(!(d.validation&&(e=parseInt(e),!(e>=0&&e<=127))))return u.CONTROL_CHANGE_MESSAGES[e].name}static getCcNumberByName(e){let t=u.CONTROL_CHANGE_MESSAGES.find(n=>n.name===e);return t?t.number:u.MIDI_CONTROL_CHANGE_MESSAGES[e]}static getChannelModeByNumber(e){if(!(e>=120&&e<=127))return!1;for(let t in u.CHANNEL_MODE_MESSAGES)if(u.CHANNEL_MODE_MESSAGES.hasOwnProperty(t)&&e===u.CHANNEL_MODE_MESSAGES[t])return t;return!1}static get isNode(){return typeof process<"u"&&process.versions!=null&&process.versions.node!=null}static get isBrowser(){return typeof window<"u"&&typeof window.document<"u"}}/**
 * The `OutputChannel` class represents a single output MIDI channel. `OutputChannel` objects are
 * provided by an [`Output`](Output) port which, itself, is made available by a device. The
 * `OutputChannel` object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `OutputChannel` objects can be found inside the parent output's
 * [`channels`]{@link Output#channels} property.
 *
 * @param {Output} output The [`Output`](Output) this channel belongs to.
 * @param {number} number The MIDI channel number (`1` - `16`).
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */class ms extends G{constructor(e,t){super(),this._output=e,this._number=t,this._octaveOffset=0}destroy(){this._output=null,this._number=null,this._octaveOffset=0,this.removeListener()}send(e,t={time:0}){return this.output.send(e,t),this}sendKeyAftertouch(e,t,n={}){if(d.validation){if(n.useRawValue&&(n.rawValue=n.useRawValue),isNaN(parseFloat(t)))throw new RangeError("Invalid key aftertouch value.");if(n.rawValue){if(!(t>=0&&t<=127&&Number.isInteger(t)))throw new RangeError("Key aftertouch raw value must be an integer between 0 and 127.")}else if(!(t>=0&&t<=1))throw new RangeError("Key aftertouch value must be a float between 0 and 1.")}n.rawValue||(t=h.fromFloatTo7Bit(t));const r=d.octaveOffset+this.output.octaveOffset+this.octaveOffset;return Array.isArray(e)||(e=[e]),h.buildNoteArray(e).forEach(i=>{this.send([(u.CHANNEL_MESSAGES.keyaftertouch<<4)+(this.number-1),i.getOffsetNumber(r),t],{time:h.toTimestamp(n.time)})}),this}sendControlChange(e,t,n={}){if(typeof e=="string"&&(e=h.getCcNumberByName(e)),Array.isArray(t)||(t=[t]),d.validation){if(e===void 0)throw new TypeError("Control change must be identified with a valid name or an integer between 0 and 127.");if(!Number.isInteger(e)||!(e>=0&&e<=127))throw new TypeError("Control change number must be an integer between 0 and 127.");if(t=t.map(r=>{const i=Math.min(Math.max(parseInt(r),0),127);if(isNaN(i))throw new TypeError("Values must be integers between 0 and 127");return i}),t.length===2&&e>=32)throw new TypeError("To use a value array, the controller must be between 0 and 31")}return t.forEach((r,i)=>{this.send([(u.CHANNEL_MESSAGES.controlchange<<4)+(this.number-1),e+i*32,t[i]],{time:h.toTimestamp(n.time)})}),this}_selectNonRegisteredParameter(e,t={}){return this.sendControlChange(99,e[0],t),this.sendControlChange(98,e[1],t),this}_deselectRegisteredParameter(e={}){return this.sendControlChange(101,127,e),this.sendControlChange(100,127,e),this}_deselectNonRegisteredParameter(e={}){return this.sendControlChange(101,127,e),this.sendControlChange(100,127,e),this}_selectRegisteredParameter(e,t={}){return this.sendControlChange(101,e[0],t),this.sendControlChange(100,e[1],t),this}_setCurrentParameter(e,t={}){return e=[].concat(e),this.sendControlChange(6,e[0],t),e.length<2?this:(this.sendControlChange(38,e[1],t),this)}sendRpnDecrement(e,t={}){if(Array.isArray(e)||(e=u.REGISTERED_PARAMETERS[e]),d.validation){if(e===void 0)throw new TypeError("The specified registered parameter is invalid.");let n=!1;if(Object.getOwnPropertyNames(u.REGISTERED_PARAMETERS).forEach(r=>{u.REGISTERED_PARAMETERS[r][0]===e[0]&&u.REGISTERED_PARAMETERS[r][1]===e[1]&&(n=!0)}),!n)throw new TypeError("The specified registered parameter is invalid.")}return this._selectRegisteredParameter(e,t),this.sendControlChange(97,0,t),this._deselectRegisteredParameter(t),this}sendRpnIncrement(e,t={}){if(Array.isArray(e)||(e=u.REGISTERED_PARAMETERS[e]),d.validation){if(e===void 0)throw new TypeError("The specified registered parameter is invalid.");let n=!1;if(Object.getOwnPropertyNames(u.REGISTERED_PARAMETERS).forEach(r=>{u.REGISTERED_PARAMETERS[r][0]===e[0]&&u.REGISTERED_PARAMETERS[r][1]===e[1]&&(n=!0)}),!n)throw new TypeError("The specified registered parameter is invalid.")}return this._selectRegisteredParameter(e,t),this.sendControlChange(96,0,t),this._deselectRegisteredParameter(t),this}playNote(e,t={}){this.sendNoteOn(e,t);const n=Array.isArray(e)?e:[e];for(let r of n)if(parseInt(r.duration)>0){const i={time:(h.toTimestamp(t.time)||d.time)+parseInt(r.duration),release:r.release,rawRelease:r.rawRelease};this.sendNoteOff(r,i)}else if(parseInt(t.duration)>0){const i={time:(h.toTimestamp(t.time)||d.time)+parseInt(t.duration),release:t.release,rawRelease:t.rawRelease};this.sendNoteOff(r,i)}return this}sendNoteOff(e,t={}){if(d.validation){if(t.rawRelease!=null&&!(t.rawRelease>=0&&t.rawRelease<=127))throw new RangeError("The 'rawRelease' option must be an integer between 0 and 127");if(t.release!=null&&!(t.release>=0&&t.release<=1))throw new RangeError("The 'release' option must be an number between 0 and 1");t.rawVelocity&&(t.rawRelease=t.velocity,console.warn("The 'rawVelocity' option is deprecated. Use 'rawRelease' instead.")),t.velocity&&(t.release=t.velocity,console.warn("The 'velocity' option is deprecated. Use 'attack' instead."))}let n=64;t.rawRelease!=null?n=t.rawRelease:isNaN(t.release)||(n=Math.round(t.release*127));const r=d.octaveOffset+this.output.octaveOffset+this.octaveOffset;return h.buildNoteArray(e,{rawRelease:parseInt(n)}).forEach(i=>{this.send([(u.CHANNEL_MESSAGES.noteoff<<4)+(this.number-1),i.getOffsetNumber(r),i.rawRelease],{time:h.toTimestamp(t.time)})}),this}stopNote(e,t={}){return this.sendNoteOff(e,t)}sendNoteOn(e,t={}){if(d.validation){if(t.rawAttack!=null&&!(t.rawAttack>=0&&t.rawAttack<=127))throw new RangeError("The 'rawAttack' option must be an integer between 0 and 127");if(t.attack!=null&&!(t.attack>=0&&t.attack<=1))throw new RangeError("The 'attack' option must be an number between 0 and 1");t.rawVelocity&&(t.rawAttack=t.velocity,t.rawRelease=t.release,console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' or 'rawRelease'.")),t.velocity&&(t.attack=t.velocity,console.warn("The 'velocity' option is deprecated. Use 'attack' instead."))}let n=64;t.rawAttack!=null?n=t.rawAttack:isNaN(t.attack)||(n=Math.round(t.attack*127));const r=d.octaveOffset+this.output.octaveOffset+this.octaveOffset;return h.buildNoteArray(e,{rawAttack:n}).forEach(i=>{this.send([(u.CHANNEL_MESSAGES.noteon<<4)+(this.number-1),i.getOffsetNumber(r),i.rawAttack],{time:h.toTimestamp(t.time)})}),this}sendChannelMode(e,t=0,n={}){if(typeof e=="string"&&(e=u.CHANNEL_MODE_MESSAGES[e]),d.validation){if(e===void 0)throw new TypeError("Invalid channel mode message name or number.");if(isNaN(e)||!(e>=120&&e<=127))throw new TypeError("Invalid channel mode message number.");if(isNaN(parseInt(t))||t<0||t>127)throw new RangeError("Value must be an integer between 0 and 127.")}return this.send([(u.CHANNEL_MESSAGES.controlchange<<4)+(this.number-1),e,t],{time:h.toTimestamp(n.time)}),this}sendOmniMode(e,t={}){return e===void 0||e?this.sendChannelMode("omnimodeon",0,t):this.sendChannelMode("omnimodeoff",0,t),this}sendChannelAftertouch(e,t={}){if(d.validation){if(isNaN(parseFloat(e)))throw new RangeError("Invalid channel aftertouch value.");if(t.rawValue){if(!(e>=0&&e<=127&&Number.isInteger(e)))throw new RangeError("Channel aftertouch raw value must be an integer between 0 and 127.")}else if(!(e>=0&&e<=1))throw new RangeError("Channel aftertouch value must be a float between 0 and 1.")}return t.rawValue||(e=h.fromFloatTo7Bit(e)),this.send([(u.CHANNEL_MESSAGES.channelaftertouch<<4)+(this.number-1),Math.round(e)],{time:h.toTimestamp(t.time)}),this}sendMasterTuning(e,t={}){if(e=parseFloat(e)||0,d.validation&&!(e>-65&&e<64))throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");let n=Math.floor(e)+64,r=e-Math.floor(e);r=Math.round((r+1)/2*16383);let i=r>>7&127,s=r&127;return this.sendRpnValue("channelcoarsetuning",n,t),this.sendRpnValue("channelfinetuning",[i,s],t),this}sendModulationRange(e,t,n={}){if(d.validation){if(!Number.isInteger(e)||!(e>=0&&e<=127))throw new RangeError("The semitones value must be an integer between 0 and 127.");if(t!=null&&(!Number.isInteger(t)||!(t>=0&&t<=127)))throw new RangeError("If specified, the cents value must be an integer between 0 and 127.")}return t>=0&&t<=127||(t=0),this.sendRpnValue("modulationrange",[e,t],n),this}sendNrpnValue(e,t,n={}){if(t=[].concat(t),d.validation){if(!Array.isArray(e)||!Number.isInteger(e[0])||!Number.isInteger(e[1]))throw new TypeError("The specified NRPN is invalid.");if(!(e[0]>=0&&e[0]<=127))throw new RangeError("The first byte of the NRPN must be between 0 and 127.");if(!(e[1]>=0&&e[1]<=127))throw new RangeError("The second byte of the NRPN must be between 0 and 127.");t.forEach(r=>{if(!(r>=0&&r<=127))throw new RangeError("The data bytes of the NRPN must be between 0 and 127.")})}return this._selectNonRegisteredParameter(e,n),this._setCurrentParameter(t,n),this._deselectNonRegisteredParameter(n),this}sendPitchBend(e,t={}){if(d.validation)if(t.rawValue&&Array.isArray(e)){if(!(e[0]>=0&&e[0]<=127))throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.");if(!(e[1]>=0&&e[1]<=127))throw new RangeError("The pitch bend LSB must be an integer between 0 and 127.")}else if(t.rawValue&&!Array.isArray(e)){if(!(e>=0&&e<=127))throw new RangeError("The pitch bend MSB must be an integer between 0 and 127.")}else{if(isNaN(e)||e===null)throw new RangeError("Invalid pitch bend value.");if(!(e>=-1&&e<=1))throw new RangeError("The pitch bend value must be a float between -1 and 1.")}let n=0,r=0;if(t.rawValue&&Array.isArray(e))n=e[0],r=e[1];else if(t.rawValue&&!Array.isArray(e))n=e;else{const i=h.fromFloatToMsbLsb((e+1)/2);n=i.msb,r=i.lsb}return this.send([(u.CHANNEL_MESSAGES.pitchbend<<4)+(this.number-1),r,n],{time:h.toTimestamp(t.time)}),this}sendPitchBendRange(e,t,n={}){if(d.validation){if(!Number.isInteger(e)||!(e>=0&&e<=127))throw new RangeError("The semitones value must be an integer between 0 and 127.");if(!Number.isInteger(t)||!(t>=0&&t<=127))throw new RangeError("The cents value must be an integer between 0 and 127.")}return this.sendRpnValue("pitchbendrange",[e,t],n),this}sendProgramChange(e,t={}){if(e=parseInt(e)||0,d.validation&&!(e>=0&&e<=127))throw new RangeError("The program number must be between 0 and 127.");return this.send([(u.CHANNEL_MESSAGES.programchange<<4)+(this.number-1),e],{time:h.toTimestamp(t.time)}),this}sendRpnValue(e,t,n={}){if(Array.isArray(e)||(e=u.REGISTERED_PARAMETERS[e]),d.validation){if(!Number.isInteger(e[0])||!Number.isInteger(e[1]))throw new TypeError("The specified NRPN is invalid.");if(!(e[0]>=0&&e[0]<=127))throw new RangeError("The first byte of the RPN must be between 0 and 127.");if(!(e[1]>=0&&e[1]<=127))throw new RangeError("The second byte of the RPN must be between 0 and 127.");[].concat(t).forEach(r=>{if(!(r>=0&&r<=127))throw new RangeError("The data bytes of the RPN must be between 0 and 127.")})}return this._selectRegisteredParameter(e,n),this._setCurrentParameter(t,n),this._deselectRegisteredParameter(n),this}sendTuningBank(e,t={}){if(d.validation&&(!Number.isInteger(e)||!(e>=0&&e<=127)))throw new RangeError("The tuning bank number must be between 0 and 127.");return this.sendRpnValue("tuningbank",e,t),this}sendTuningProgram(e,t={}){if(d.validation&&(!Number.isInteger(e)||!(e>=0&&e<=127)))throw new RangeError("The tuning program number must be between 0 and 127.");return this.sendRpnValue("tuningprogram",e,t),this}sendLocalControl(e,t={}){return e?this.sendChannelMode("localcontrol",127,t):this.sendChannelMode("localcontrol",0,t)}sendAllNotesOff(e={}){return this.sendChannelMode("allnotesoff",0,e)}sendAllSoundOff(e={}){return this.sendChannelMode("allsoundoff",0,e)}sendResetAllControllers(e={}){return this.sendChannelMode("resetallcontrollers",0,e)}sendPolyphonicMode(e,t={}){return e==="mono"?this.sendChannelMode("monomodeon",0,t):this.sendChannelMode("polymodeon",0,t)}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get output(){return this._output}get number(){return this._number}}/**
 * The `Output` class represents a single MIDI output port (not to be confused with a MIDI channel).
 * A port is made available by a MIDI device. A MIDI device can advertise several input and output
 * ports. Each port has 16 MIDI channels which can be accessed via the [`channels`](#channels)
 * property.
 *
 * The `Output` object is automatically instantiated by the library according to the host's MIDI
 * subsystem and should not be directly instantiated.
 *
 * You can access all available `Output` objects by referring to the
 * [`WebMidi.outputs`](WebMidi#outputs) array or by using methods such as
 * [`WebMidi.getOutputByName()`](WebMidi#getOutputByName) or
 * [`WebMidi.getOutputById()`](WebMidi#getOutputById).
 *
 * @fires Output#opened
 * @fires Output#disconnected
 * @fires Output#closed
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */class Tt extends G{constructor(e){super(),this._midiOutput=e,this._octaveOffset=0,this.channels=[];for(let t=1;t<=16;t++)this.channels[t]=new ms(this,t);this._midiOutput.onstatechange=this._onStateChange.bind(this)}async destroy(){this.removeListener(),this.channels.forEach(e=>e.destroy()),this.channels=[],this._midiOutput&&(this._midiOutput.onstatechange=null),await this.close(),this._midiOutput=null}_onStateChange(e){let t={timestamp:d.time};e.port.connection==="open"?(t.type="opened",t.target=this,t.port=t.target,this.emit("opened",t)):e.port.connection==="closed"&&e.port.state==="connected"?(t.type="closed",t.target=this,t.port=t.target,this.emit("closed",t)):e.port.connection==="closed"&&e.port.state==="disconnected"?(t.type="disconnected",t.port={connection:e.port.connection,id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this.emit("disconnected",t)):e.port.connection==="pending"&&e.port.state==="disconnected"||console.warn("This statechange event was not caught:",e.port.connection,e.port.state)}async open(){try{return await this._midiOutput.open(),Promise.resolve(this)}catch(e){return Promise.reject(e)}}async close(){this._midiOutput?await this._midiOutput.close():await Promise.resolve()}send(e,t={time:0},n=0){if(e instanceof Ra&&(e=h.isNode?e.data:e.rawData),e instanceof Uint8Array&&h.isNode&&(e=Array.from(e)),d.validation){if(!Array.isArray(e)&&!(e instanceof Uint8Array)&&(e=[e],Array.isArray(t)&&(e=e.concat(t)),t=isNaN(n)?{time:0}:{time:n}),!(parseInt(e[0])>=128&&parseInt(e[0])<=255))throw new RangeError("The first byte (status) must be an integer between 128 and 255.");e.slice(1).forEach(r=>{if(r=parseInt(r),!(r>=0&&r<=255))throw new RangeError("Data bytes must be integers between 0 and 255.")}),t||(t={time:0})}return this._midiOutput.send(e,h.toTimestamp(t.time)),this}sendSysex(e,t=[],n={}){if(e=[].concat(e),t instanceof Uint8Array){const r=new Uint8Array(1+e.length+t.length+1);r[0]=u.SYSTEM_MESSAGES.sysex,r.set(Uint8Array.from(e),1),r.set(t,1+e.length),r[r.length-1]=u.SYSTEM_MESSAGES.sysexend,this.send(r,{time:n.time})}else{const r=e.concat(t,u.SYSTEM_MESSAGES.sysexend);this.send([u.SYSTEM_MESSAGES.sysex].concat(r),{time:n.time})}return this}clear(){return this._midiOutput.clear?this._midiOutput.clear():d.validation&&console.warn("The 'clear()' method has not yet been implemented in your environment."),this}sendTimecodeQuarterFrame(e,t={}){if(d.validation&&(e=parseInt(e),isNaN(e)||!(e>=0&&e<=127)))throw new RangeError("The value must be an integer between 0 and 127.");return this.send([u.SYSTEM_MESSAGES.timecode,e],{time:t.time}),this}sendSongPosition(e=0,t={}){e=Math.floor(e)||0;var n=e>>7&127,r=e&127;return this.send([u.SYSTEM_MESSAGES.songposition,n,r],{time:t.time}),this}sendSongSelect(e=0,t={}){if(d.validation&&(e=parseInt(e),isNaN(e)||!(e>=0&&e<=127)))throw new RangeError("The program value must be between 0 and 127");return this.send([u.SYSTEM_MESSAGES.songselect,e],{time:t.time}),this}sendTuneRequest(e={}){return this.send([u.SYSTEM_MESSAGES.tunerequest],{time:e.time}),this}sendClock(e={}){return this.send([u.SYSTEM_MESSAGES.clock],{time:e.time}),this}sendStart(e={}){return this.send([u.SYSTEM_MESSAGES.start],{time:e.time}),this}sendContinue(e={}){return this.send([u.SYSTEM_MESSAGES.continue],{time:e.time}),this}sendStop(e={}){return this.send([u.SYSTEM_MESSAGES.stop],{time:e.time}),this}sendActiveSensing(e={}){return this.send([u.SYSTEM_MESSAGES.activesensing],{time:e.time}),this}sendReset(e={}){return this.send([u.SYSTEM_MESSAGES.reset],{time:e.time}),this}sendTuningRequest(e={}){return d.validation&&console.warn("The sendTuningRequest() method has been deprecated. Use sendTuningRequest() instead."),this.sendTuneRequest(e)}sendKeyAftertouch(e,t,n={}){return n.channels==null&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].sendKeyAftertouch(e,t,n)}),this}sendControlChange(e,t,n={},r={}){if(d.validation&&(Array.isArray(n)||Number.isInteger(n)||n==="all")){const i=n;n=r,n.channels=i,n.channels==="all"&&(n.channels=u.MIDI_CHANNEL_NUMBERS)}return n.channels==null&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).forEach(i=>{this.channels[i].sendControlChange(e,t,n)}),this}sendPitchBendRange(e=0,t=0,n={}){return n.channels==null&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].sendPitchBendRange(e,t,n)}),this}setPitchBendRange(e=0,t=0,n="all",r={}){return d.validation&&(console.warn("The setPitchBendRange() method is deprecated. Use sendPitchBendRange() instead."),r.channels=n,r.channels==="all"&&(r.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendPitchBendRange(e,t,r)}sendRpnValue(e,t,n={}){return n.channels==null&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].sendRpnValue(e,t,n)}),this}setRegisteredParameter(e,t=[],n="all",r={}){return d.validation&&(console.warn("The setRegisteredParameter() method is deprecated. Use sendRpnValue() instead."),r.channels=n,r.channels==="all"&&(r.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendRpnValue(e,t,r)}sendChannelAftertouch(e,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendChannelAftertouch(e,t)}),this}sendPitchBend(e,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendPitchBend(e,t)}),this}sendProgramChange(e=0,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendProgramChange(e,t)}),this}sendModulationRange(e,t,n={}){return n.channels==null&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].sendModulationRange(e,t,n)}),this}setModulationRange(e=0,t=0,n="all",r={}){return d.validation&&(console.warn("The setModulationRange() method is deprecated. Use sendModulationRange() instead."),r.channels=n,r.channels==="all"&&(r.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendModulationRange(e,t,r)}sendMasterTuning(e,t={}){return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendMasterTuning(e,t)}),this}setMasterTuning(e,t={},n={}){return d.validation&&(console.warn("The setMasterTuning() method is deprecated. Use sendMasterTuning() instead."),n.channels=t,n.channels==="all"&&(n.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendMasterTuning(e,n)}sendTuningProgram(e,t={}){return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendTuningProgram(e,t)}),this}setTuningProgram(e,t="all",n={}){return d.validation&&(console.warn("The setTuningProgram() method is deprecated. Use sendTuningProgram() instead."),n.channels=t,n.channels==="all"&&(n.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendTuningProgram(e,n)}sendTuningBank(e=0,t={}){return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendTuningBank(e,t)}),this}setTuningBank(e,t="all",n={}){return d.validation&&(console.warn("The setTuningBank() method is deprecated. Use sendTuningBank() instead."),n.channels=t,n.channels==="all"&&(n.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendTuningBank(e,n)}sendChannelMode(e,t=0,n={},r={}){if(d.validation&&(Array.isArray(n)||Number.isInteger(n)||n==="all")){const i=n;n=r,n.channels=i,n.channels==="all"&&(n.channels=u.MIDI_CHANNEL_NUMBERS)}return n.channels==null&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).forEach(i=>{this.channels[i].sendChannelMode(e,t,n)}),this}sendAllSoundOff(e={}){return e.channels==null&&(e.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(e.channels).forEach(t=>{this.channels[t].sendAllSoundOff(e)}),this}sendAllNotesOff(e={}){return e.channels==null&&(e.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(e.channels).forEach(t=>{this.channels[t].sendAllNotesOff(e)}),this}sendResetAllControllers(e={},t={}){if(d.validation&&(Array.isArray(e)||Number.isInteger(e)||e==="all")){const n=e;e=t,e.channels=n,e.channels==="all"&&(e.channels=u.MIDI_CHANNEL_NUMBERS)}return e.channels==null&&(e.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(e.channels).forEach(n=>{this.channels[n].sendResetAllControllers(e)}),this}sendPolyphonicMode(e,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendPolyphonicMode(e,t)}),this}sendLocalControl(e,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendLocalControl(e,t)}),this}sendOmniMode(e,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendOmniMode(e,t)}),this}sendNrpnValue(e,t,n={}){return n.channels==null&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].sendNrpnValue(e,t,n)}),this}setNonRegisteredParameter(e,t=[],n="all",r={}){return d.validation&&(console.warn("The setNonRegisteredParameter() method is deprecated. Use sendNrpnValue() instead."),r.channels=n,r.channels==="all"&&(r.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendNrpnValue(e,t,r)}sendRpnIncrement(e,t={}){return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendRpnIncrement(e,t)}),this}incrementRegisteredParameter(e,t="all",n={}){return d.validation&&(console.warn("The incrementRegisteredParameter() method is deprecated. Use sendRpnIncrement() instead."),n.channels=t,n.channels==="all"&&(n.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendRpnIncrement(e,n)}sendRpnDecrement(e,t={}){return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(n=>{this.channels[n].sendRpnDecrement(e,t)}),this}decrementRegisteredParameter(e,t="all",n={}){return d.validation&&(console.warn("The decrementRegisteredParameter() method is deprecated. Use sendRpnDecrement() instead."),n.channels=t,n.channels==="all"&&(n.channels=u.MIDI_CHANNEL_NUMBERS)),this.sendRpnDecrement(e,n)}sendNoteOff(e,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendNoteOff(e,t)}),this}stopNote(e,t){return this.sendNoteOff(e,t)}playNote(e,t={},n={}){if(d.validation&&(t.rawVelocity&&console.warn("The 'rawVelocity' option is deprecated. Use 'rawAttack' instead."),t.velocity&&console.warn("The 'velocity' option is deprecated. Use 'velocity' instead."),Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].playNote(e,t)}),this}sendNoteOn(e,t={},n={}){if(d.validation&&(Array.isArray(t)||Number.isInteger(t)||t==="all")){const r=t;t=n,t.channels=r,t.channels==="all"&&(t.channels=u.MIDI_CHANNEL_NUMBERS)}return t.channels==null&&(t.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(t.channels).forEach(r=>{this.channels[r].sendNoteOn(e,t)}),this}get name(){return this._midiOutput.name}get id(){return this._midiOutput.id}get connection(){return this._midiOutput.connection}get manufacturer(){return this._midiOutput.manufacturer}get state(){return this._midiOutput.state}get type(){return this._midiOutput.type}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}}/**
 * The `Forwarder` class allows the forwarding of MIDI messages to predetermined outputs. When you
 * call its [`forward()`](#forward) method, it will send the specified [`Message`](Message) object
 * to all the outputs listed in its [`destinations`](#destinations) property.
 *
 * If specific channels or message types have been defined in the [`channels`](#channels) or
 * [`types`](#types) properties, only messages matching the channels/types will be forwarded.
 *
 * While it can be manually instantiated, you are more likely to come across a `Forwarder` object as
 * the return value of the [`Input.addForwarder()`](Input#addForwarder) method.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class Yn{constructor(e=[],t={}){this.destinations=[],this.types=[...Object.keys(u.SYSTEM_MESSAGES),...Object.keys(u.CHANNEL_MESSAGES)],this.channels=u.MIDI_CHANNEL_NUMBERS,this.suspended=!1,Array.isArray(e)||(e=[e]),t.types&&!Array.isArray(t.types)&&(t.types=[t.types]),t.channels&&!Array.isArray(t.channels)&&(t.channels=[t.channels]),d.validation&&(e.forEach(n=>{if(!(n instanceof Tt))throw new TypeError("Destinations must be of type 'Output'.")}),t.types!==void 0&&t.types.forEach(n=>{if(!u.SYSTEM_MESSAGES.hasOwnProperty(n)&&!u.CHANNEL_MESSAGES.hasOwnProperty(n))throw new TypeError("Type must be a valid message type.")}),t.channels!==void 0&&t.channels.forEach(n=>{if(!u.MIDI_CHANNEL_NUMBERS.includes(n))throw new TypeError("MIDI channel must be between 1 and 16.")})),this.destinations=e,t.types&&(this.types=t.types),t.channels&&(this.channels=t.channels)}forward(e){this.suspended||this.types.includes(e.type)&&(e.channel&&!this.channels.includes(e.channel)||this.destinations.forEach(t=>{d.validation&&!(t instanceof Tt)||t.send(e)}))}}/**
 * The `InputChannel` class represents a single MIDI input channel (1-16) from a single input
 * device. This object is derived from the host's MIDI subsystem and should not be instantiated
 * directly.
 *
 * All 16 `InputChannel` objects can be found inside the input's [`channels`](Input#channels)
 * property.
 *
 * @fires InputChannel#midimessage
 * @fires InputChannel#unknownmessage
 *
 * @fires InputChannel#noteoff
 * @fires InputChannel#noteon
 * @fires InputChannel#keyaftertouch
 * @fires InputChannel#programchange
 * @fires InputChannel#channelaftertouch
 * @fires InputChannel#pitchbend
 *
 * @fires InputChannel#allnotesoff
 * @fires InputChannel#allsoundoff
 * @fires InputChannel#localcontrol
 * @fires InputChannel#monomode
 * @fires InputChannel#omnimode
 * @fires InputChannel#resetallcontrollers
 *
 * @fires InputChannel#event:nrpn
 * @fires InputChannel#event:nrpn-dataentrycoarse
 * @fires InputChannel#event:nrpn-dataentryfine
 * @fires InputChannel#event:nrpn-dataincrement
 * @fires InputChannel#event:nrpn-datadecrement
 * @fires InputChannel#event:rpn
 * @fires InputChannel#event:rpn-dataentrycoarse
 * @fires InputChannel#event:rpn-dataentryfine
 * @fires InputChannel#event:rpn-dataincrement
 * @fires InputChannel#event:rpn-datadecrement
 *
 * @fires InputChannel#controlchange
 * @fires InputChannel#event:controlchange-controllerxxx
 * @fires InputChannel#event:controlchange-bankselectcoarse
 * @fires InputChannel#event:controlchange-modulationwheelcoarse
 * @fires InputChannel#event:controlchange-breathcontrollercoarse
 * @fires InputChannel#event:controlchange-footcontrollercoarse
 * @fires InputChannel#event:controlchange-portamentotimecoarse
 * @fires InputChannel#event:controlchange-dataentrycoarse
 * @fires InputChannel#event:controlchange-volumecoarse
 * @fires InputChannel#event:controlchange-balancecoarse
 * @fires InputChannel#event:controlchange-pancoarse
 * @fires InputChannel#event:controlchange-expressioncoarse
 * @fires InputChannel#event:controlchange-effectcontrol1coarse
 * @fires InputChannel#event:controlchange-effectcontrol2coarse
 * @fires InputChannel#event:controlchange-generalpurposecontroller1
 * @fires InputChannel#event:controlchange-generalpurposecontroller2
 * @fires InputChannel#event:controlchange-generalpurposecontroller3
 * @fires InputChannel#event:controlchange-generalpurposecontroller4
 * @fires InputChannel#event:controlchange-bankselectfine
 * @fires InputChannel#event:controlchange-modulationwheelfine
 * @fires InputChannel#event:controlchange-breathcontrollerfine
 * @fires InputChannel#event:controlchange-footcontrollerfine
 * @fires InputChannel#event:controlchange-portamentotimefine
 * @fires InputChannel#event:controlchange-dataentryfine
 * @fires InputChannel#event:controlchange-channelvolumefine
 * @fires InputChannel#event:controlchange-balancefine
 * @fires InputChannel#event:controlchange-panfine
 * @fires InputChannel#event:controlchange-expressionfine
 * @fires InputChannel#event:controlchange-effectcontrol1fine
 * @fires InputChannel#event:controlchange-effectcontrol2fine
 * @fires InputChannel#event:controlchange-damperpedal
 * @fires InputChannel#event:controlchange-portamento
 * @fires InputChannel#event:controlchange-sostenuto
 * @fires InputChannel#event:controlchange-softpedal
 * @fires InputChannel#event:controlchange-legatopedal
 * @fires InputChannel#event:controlchange-hold2
 * @fires InputChannel#event:controlchange-soundvariation
 * @fires InputChannel#event:controlchange-resonance
 * @fires InputChannel#event:controlchange-releasetime
 * @fires InputChannel#event:controlchange-attacktime
 * @fires InputChannel#event:controlchange-brightness
 * @fires InputChannel#event:controlchange-decaytime
 * @fires InputChannel#event:controlchange-vibratorate
 * @fires InputChannel#event:controlchange-vibratodepth
 * @fires InputChannel#event:controlchange-vibratodelay
 * @fires InputChannel#event:controlchange-generalpurposecontroller5
 * @fires InputChannel#event:controlchange-generalpurposecontroller6
 * @fires InputChannel#event:controlchange-generalpurposecontroller7
 * @fires InputChannel#event:controlchange-generalpurposecontroller8
 * @fires InputChannel#event:controlchange-portamentocontrol
 * @fires InputChannel#event:controlchange-highresolutionvelocityprefix
 * @fires InputChannel#event:controlchange-effect1depth
 * @fires InputChannel#event:controlchange-effect2depth
 * @fires InputChannel#event:controlchange-effect3depth
 * @fires InputChannel#event:controlchange-effect4depth
 * @fires InputChannel#event:controlchange-effect5depth
 * @fires InputChannel#event:controlchange-dataincrement
 * @fires InputChannel#event:controlchange-datadecrement
 * @fires InputChannel#event:controlchange-nonregisteredparameterfine
 * @fires InputChannel#event:controlchange-nonregisteredparametercoarse
 * @fires InputChannel#event:controlchange-registeredparameterfine
 * @fires InputChannel#event:controlchange-registeredparametercoarse
 * @fires InputChannel#event:controlchange-allsoundoff
 * @fires InputChannel#event:controlchange-resetallcontrollers
 * @fires InputChannel#event:controlchange-localcontrol
 * @fires InputChannel#event:controlchange-allnotesoff
 * @fires InputChannel#event:controlchange-omnimodeoff
 * @fires InputChannel#event:controlchange-omnimodeon
 * @fires InputChannel#event:controlchange-monomodeon
 * @fires InputChannel#event:controlchange-polymodeon
 * @fires InputChannel#event:
 *
 * @extends EventEmitter
 * @license Apache-2.0
 * @since 3.0.0
 */class hs extends G{constructor(e,t){super(),this._input=e,this._number=t,this._octaveOffset=0,this._nrpnBuffer=[],this._rpnBuffer=[],this.parameterNumberEventsEnabled=!0,this.notesState=new Array(128).fill(!1)}destroy(){this._input=null,this._number=null,this._octaveOffset=0,this._nrpnBuffer=[],this.notesState=new Array(128).fill(!1),this.parameterNumberEventsEnabled=!1,this.removeListener()}_processMidiMessageEvent(e){const t=Object.assign({},e);t.port=this.input,t.target=this,t.type="midimessage",this.emit(t.type,t),this._parseEventForStandardMessages(t)}_parseEventForStandardMessages(e){const t=Object.assign({},e);t.type=t.message.type||"unknownmessage";const n=e.message.dataBytes[0],r=e.message.dataBytes[1];if(t.type==="noteoff"||t.type==="noteon"&&r===0)this.notesState[n]=!1,t.type="noteoff",t.note=new ge(h.offsetNumber(n,this.octaveOffset+this.input.octaveOffset+d.octaveOffset),{rawAttack:0,rawRelease:r}),t.value=h.from7bitToFloat(r),t.rawValue=r,t.velocity=t.note.release,t.rawVelocity=t.note.rawRelease;else if(t.type==="noteon")this.notesState[n]=!0,t.note=new ge(h.offsetNumber(n,this.octaveOffset+this.input.octaveOffset+d.octaveOffset),{rawAttack:r}),t.value=h.from7bitToFloat(r),t.rawValue=r,t.velocity=t.note.attack,t.rawVelocity=t.note.rawAttack;else if(t.type==="keyaftertouch")t.note=new ge(h.offsetNumber(n,this.octaveOffset+this.input.octaveOffset+d.octaveOffset)),t.value=h.from7bitToFloat(r),t.rawValue=r,t.identifier=t.note.identifier,t.key=t.note.number,t.rawKey=n;else if(t.type==="controlchange"){t.controller={number:n,name:u.CONTROL_CHANGE_MESSAGES[n].name,description:u.CONTROL_CHANGE_MESSAGES[n].description,position:u.CONTROL_CHANGE_MESSAGES[n].position},t.subtype=t.controller.name||"controller"+n,t.value=h.from7bitToFloat(r),t.rawValue=r;const i=Object.assign({},t);i.type=`${t.type}-controller${n}`,delete i.subtype,this.emit(i.type,i);const s=Object.assign({},t);s.type=`${t.type}-`+u.CONTROL_CHANGE_MESSAGES[n].name,delete s.subtype,s.type.indexOf("controller")!==0&&this.emit(s.type,s),t.message.dataBytes[0]>=120&&this._parseChannelModeMessage(t),this.parameterNumberEventsEnabled&&this._isRpnOrNrpnController(t.message.dataBytes[0])&&this._parseEventForParameterNumber(t)}else t.type==="programchange"?(t.value=n,t.rawValue=t.value):t.type==="channelaftertouch"?(t.value=h.from7bitToFloat(n),t.rawValue=n):t.type==="pitchbend"?(t.value=((r<<7)+n-8192)/8192,t.rawValue=(r<<7)+n):t.type="unknownmessage";this.emit(t.type,t)}_parseChannelModeMessage(e){const t=Object.assign({},e);t.type=t.controller.name,t.type==="localcontrol"&&(t.value=t.message.data[2]===127,t.rawValue=t.message.data[2]),t.type==="omnimodeon"?(t.type="omnimode",t.value=!0,t.rawValue=t.message.data[2]):t.type==="omnimodeoff"&&(t.type="omnimode",t.value=!1,t.rawValue=t.message.data[2]),t.type==="monomodeon"?(t.type="monomode",t.value=!0,t.rawValue=t.message.data[2]):t.type==="polymodeon"&&(t.type="monomode",t.value=!1,t.rawValue=t.message.data[2]),this.emit(t.type,t)}_parseEventForParameterNumber(e){const t=e.message.dataBytes[0],n=e.message.dataBytes[1];t===99||t===101?(this._nrpnBuffer=[],this._rpnBuffer=[],t===99?this._nrpnBuffer=[e.message]:n!==127&&(this._rpnBuffer=[e.message])):t===98||t===100?t===98?(this._rpnBuffer=[],this._nrpnBuffer.length===1?this._nrpnBuffer.push(e.message):this._nrpnBuffer=[]):(this._nrpnBuffer=[],this._rpnBuffer.length===1&&n!==127?this._rpnBuffer.push(e.message):this._rpnBuffer=[]):(t===6||t===38||t===96||t===97)&&(this._rpnBuffer.length===2?this._dispatchParameterNumberEvent("rpn",this._rpnBuffer[0].dataBytes[1],this._rpnBuffer[1].dataBytes[1],e):this._nrpnBuffer.length===2?this._dispatchParameterNumberEvent("nrpn",this._nrpnBuffer[0].dataBytes[1],this._nrpnBuffer[1].dataBytes[1],e):(this._nrpnBuffer=[],this._rpnBuffer=[]))}_isRpnOrNrpnController(e){return e===6||e===38||e===96||e===97||e===98||e===99||e===100||e===101}_dispatchParameterNumberEvent(e,t,n,r){e=e==="nrpn"?"nrpn":"rpn";const i={target:r.target,timestamp:r.timestamp,message:r.message,parameterMsb:t,parameterLsb:n,value:h.from7bitToFloat(r.message.dataBytes[1]),rawValue:r.message.dataBytes[1]};e==="rpn"?i.parameter=Object.keys(u.REGISTERED_PARAMETERS).find(l=>u.REGISTERED_PARAMETERS[l][0]===t&&u.REGISTERED_PARAMETERS[l][1]===n):i.parameter=(t<<7)+n;const s=u.CONTROL_CHANGE_MESSAGES[r.message.dataBytes[0]].name;i.type=`${e}-${s}`,this.emit(i.type,i);const o=Object.assign({},i);o.type==="nrpn-dataincrement"?o.type="nrpn-databuttonincrement":o.type==="nrpn-datadecrement"?o.type="nrpn-databuttondecrement":o.type==="rpn-dataincrement"?o.type="rpn-databuttonincrement":o.type==="rpn-datadecrement"&&(o.type="rpn-databuttondecrement"),this.emit(o.type,o),i.type=e,i.subtype=s,this.emit(i.type,i)}getChannelModeByNumber(e){return d.validation&&(console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class."),e=Math.floor(e)),h.getChannelModeByNumber(e)}getCcNameByNumber(e){if(d.validation&&(console.warn("The 'getCcNameByNumber()' method has been moved to the 'Utilities' class."),e=parseInt(e),!(e>=0&&e<=127)))throw new RangeError("Invalid control change number.");return h.getCcNameByNumber(e)}getNoteState(e){e instanceof ge&&(e=e.identifier);const t=h.guessNoteNumber(e,d.octaveOffset+this.input.octaveOffset+this.octaveOffset);return this.notesState[t]}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get input(){return this._input}get number(){return this._number}get nrpnEventsEnabled(){return this.parameterNumberEventsEnabled}set nrpnEventsEnabled(e){this.validation&&(e=!!e),this.parameterNumberEventsEnabled=e}}/**
 * The `Message` class represents a single MIDI message. It has several properties that make it
 * easy to make sense of the binary data it contains.
 *
 * @license Apache-2.0
 * @since 3.0.0
 */class Ra{constructor(e){this.rawData=e,this.data=Array.from(this.rawData),this.statusByte=this.rawData[0],this.rawDataBytes=this.rawData.slice(1),this.dataBytes=this.data.slice(1),this.isChannelMessage=!1,this.isSystemMessage=!1,this.command=void 0,this.channel=void 0,this.manufacturerId=void 0,this.type=void 0,this.statusByte<240?(this.isChannelMessage=!0,this.command=this.statusByte>>4,this.channel=(this.statusByte&15)+1):(this.isSystemMessage=!0,this.command=this.statusByte),this.isChannelMessage?this.type=h.getPropertyByValue(u.CHANNEL_MESSAGES,this.command):this.isSystemMessage&&(this.type=h.getPropertyByValue(u.SYSTEM_MESSAGES,this.command)),this.statusByte===u.SYSTEM_MESSAGES.sysex&&(this.dataBytes[0]===0?(this.manufacturerId=this.dataBytes.slice(0,3),this.dataBytes=this.dataBytes.slice(3,this.rawDataBytes.length-1),this.rawDataBytes=this.rawDataBytes.slice(3,this.rawDataBytes.length-1)):(this.manufacturerId=[this.dataBytes[0]],this.dataBytes=this.dataBytes.slice(1,this.dataBytes.length-1),this.rawDataBytes=this.rawDataBytes.slice(1,this.rawDataBytes.length-1)))}}/**
 * The `Input` class represents a single MIDI input port. This object is automatically instantiated
 * by the library according to the host's MIDI subsystem and does not need to be directly
 * instantiated. Instead, you can access all `Input` objects by referring to the
 * [`WebMidi.inputs`](WebMidi#inputs) array. You can also retrieve inputs by using methods such as
 * [`WebMidi.getInputByName()`](WebMidi#getInputByName) and
 * [`WebMidi.getInputById()`](WebMidi#getInputById).
 *
 * Note that a single MIDI device may expose several inputs and/or outputs.
 *
 * **Important**: the `Input` class does not directly fire channel-specific MIDI messages
 * (such as [`noteon`](InputChannel#event:noteon) or
 * [`controlchange`](InputChannel#event:controlchange), etc.). The [`InputChannel`](InputChannel)
 * object does that. However, you can still use the
 * [`Input.addListener()`](#addListener) method to listen to channel-specific events on multiple
 * [`InputChannel`](InputChannel) objects at once.
 *
 * @fires Input#opened
 * @fires Input#disconnected
 * @fires Input#closed
 * @fires Input#midimessage
 *
 * @fires Input#sysex
 * @fires Input#timecode
 * @fires Input#songposition
 * @fires Input#songselect
 * @fires Input#tunerequest
 * @fires Input#clock
 * @fires Input#start
 * @fires Input#continue
 * @fires Input#stop
 * @fires Input#activesensing
 * @fires Input#reset
 *
 * @fires Input#unknownmidimessage
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */class gs extends G{constructor(e){super(),this._midiInput=e,this._octaveOffset=0,this.channels=[];for(let t=1;t<=16;t++)this.channels[t]=new hs(this,t);this._forwarders=[],this._midiInput.onstatechange=this._onStateChange.bind(this),this._midiInput.onmidimessage=this._onMidiMessage.bind(this)}async destroy(){this.removeListener(),this.channels.forEach(e=>e.destroy()),this.channels=[],this._forwarders=[],this._midiInput&&(this._midiInput.onstatechange=null,this._midiInput.onmidimessage=null),await this.close(),this._midiInput=null}_onStateChange(e){let t={timestamp:d.time,target:this,port:this};e.port.connection==="open"?(t.type="opened",this.emit("opened",t)):e.port.connection==="closed"&&e.port.state==="connected"?(t.type="closed",this.emit("closed",t)):e.port.connection==="closed"&&e.port.state==="disconnected"?(t.type="disconnected",t.port={connection:e.port.connection,id:e.port.id,manufacturer:e.port.manufacturer,name:e.port.name,state:e.port.state,type:e.port.type},this.emit("disconnected",t)):e.port.connection==="pending"&&e.port.state==="disconnected"||console.warn("This statechange event was not caught: ",e.port.connection,e.port.state)}_onMidiMessage(e){const t=new Ra(e.data),n={port:this,target:this,message:t,timestamp:e.timeStamp,type:"midimessage",data:t.data,rawData:t.data,statusByte:t.data[0],dataBytes:t.dataBytes};this.emit("midimessage",n),t.isSystemMessage?this._parseEvent(n):t.isChannelMessage&&this.channels[t.channel]._processMidiMessageEvent(n),this._forwarders.forEach(r=>r.forward(t))}_parseEvent(e){const t=Object.assign({},e);t.type=t.message.type||"unknownmidimessage",t.type==="songselect"&&(t.song=e.data[1]+1,t.value=e.data[1],t.rawValue=t.value),this.emit(t.type,t)}async open(){try{await this._midiInput.open()}catch(e){return Promise.reject(e)}return Promise.resolve(this)}async close(){if(!this._midiInput)return Promise.resolve(this);try{await this._midiInput.close()}catch(e){return Promise.reject(e)}return Promise.resolve(this)}getChannelModeByNumber(){d.validation&&console.warn("The 'getChannelModeByNumber()' method has been moved to the 'Utilities' class.")}addListener(e,t,n={}){if(d.validation&&typeof n=="function"){let r=t!=null?[].concat(t):void 0;t=n,n={channels:r}}if(u.CHANNEL_EVENTS.includes(e)){n.channels===void 0&&(n.channels=u.MIDI_CHANNEL_NUMBERS);let r=[];return h.sanitizeChannels(n.channels).forEach(i=>{r.push(this.channels[i].addListener(e,t,n))}),r}else return super.addListener(e,t,n)}addOneTimeListener(e,t,n={}){return n.remaining=1,this.addListener(e,t,n)}on(e,t,n,r){return this.addListener(e,t,n,r)}hasListener(e,t,n={}){if(d.validation&&typeof n=="function"){let r=[].concat(t);t=n,n={channels:r}}return u.CHANNEL_EVENTS.includes(e)?(n.channels===void 0&&(n.channels=u.MIDI_CHANNEL_NUMBERS),h.sanitizeChannels(n.channels).every(r=>this.channels[r].hasListener(e,t))):super.hasListener(e,t)}removeListener(e,t,n={}){if(d.validation&&typeof n=="function"){let r=[].concat(t);t=n,n={channels:r}}if(n.channels===void 0&&(n.channels=u.MIDI_CHANNEL_NUMBERS),e==null)return h.sanitizeChannels(n.channels).forEach(r=>{this.channels[r]&&this.channels[r].removeListener()}),super.removeListener();u.CHANNEL_EVENTS.includes(e)?h.sanitizeChannels(n.channels).forEach(r=>{this.channels[r].removeListener(e,t,n)}):super.removeListener(e,t,n)}addForwarder(e,t={}){let n;return e instanceof Yn?n=e:n=new Yn(e,t),this._forwarders.push(n),n}removeForwarder(e){this._forwarders=this._forwarders.filter(t=>t!==e)}hasForwarder(e){return this._forwarders.includes(e)}get name(){return this._midiInput.name}get id(){return this._midiInput.id}get connection(){return this._midiInput.connection}get manufacturer(){return this._midiInput.manufacturer}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get state(){return this._midiInput.state}get type(){return this._midiInput.type}get nrpnEventsEnabled(){return d.validation&&console.warn("The 'nrpnEventsEnabled' property has been moved to the 'InputChannel' class."),!1}}/**
 * The `WebMidi` object makes it easier to work with the low-level Web MIDI API. Basically, it
 * simplifies sending outgoing MIDI messages and reacting to incoming MIDI messages.
 *
 * When using the WebMidi.js library, you should know that the `WebMidi` class has already been
 * instantiated. You cannot instantiate it yourself. If you use the **IIFE** version, you should
 * simply use the global object called `WebMidi`. If you use the **CJS** (CommonJS) or **ESM** (ES6
 * module) version, you get an already-instantiated object when you import the module.
 *
 * @fires WebMidi#connected
 * @fires WebMidi#disabled
 * @fires WebMidi#disconnected
 * @fires WebMidi#enabled
 * @fires WebMidi#error
 * @fires WebMidi#midiaccessgranted
 * @fires WebMidi#portschanged
 *
 * @extends EventEmitter
 * @license Apache-2.0
 */class ps extends G{constructor(){super(),this.defaults={note:{attack:h.from7bitToFloat(64),release:h.from7bitToFloat(64),duration:1/0}},this.interface=null,this.validation=!0,this._inputs=[],this._disconnectedInputs=[],this._outputs=[],this._disconnectedOutputs=[],this._stateChangeQueue=[],this._octaveOffset=0}async enable(e={},t=!1){if(h.isNode){try{window.navigator}catch{let o=await Object.getPrototypeOf(async function(){}).constructor(`
        let jzz = await import("jzz");
        return jzz.default;
        `)();global.navigator||(global.navigator={}),Object.assign(global.navigator,o)}try{}catch{global.performance=await Object.getPrototypeOf(async function(){}).constructor(`
        let perf_hooks = await import("perf_hooks");
        return perf_hooks.performance;
        `)()}}if(this.validation=e.validation!==!1,this.validation&&(typeof e=="function"&&(e={callback:e,sysex:t}),t&&(e.sysex=!0)),this.enabled)return typeof e.callback=="function"&&e.callback(),Promise.resolve();const n={timestamp:this.time,target:this,type:"error",error:void 0},r={timestamp:this.time,target:this,type:"midiaccessgranted"},i={timestamp:this.time,target:this,type:"enabled"};try{typeof e.requestMIDIAccessFunction=="function"?this.interface=await e.requestMIDIAccessFunction({sysex:e.sysex,software:e.software}):this.interface=await navigator.requestMIDIAccess({sysex:e.sysex,software:e.software})}catch(s){return n.error=s,this.emit("error",n),typeof e.callback=="function"&&e.callback(s),Promise.reject(s)}this.emit("midiaccessgranted",r),this.interface.onstatechange=this._onInterfaceStateChange.bind(this);try{await this._updateInputsAndOutputs()}catch(s){return n.error=s,this.emit("error",n),typeof e.callback=="function"&&e.callback(s),Promise.reject(s)}return this.emit("enabled",i),typeof e.callback=="function"&&e.callback(),Promise.resolve(this)}async disable(){return this.interface&&(this.interface.onstatechange=void 0),this._destroyInputsAndOutputs().then(()=>{navigator&&typeof navigator.close=="function"&&navigator.close(),this.interface=null;let e={timestamp:this.time,target:this,type:"disabled"};this.emit("disabled",e),this.removeListener()})}getInputById(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return}if(t.disconnected){for(let n=0;n<this._disconnectedInputs.length;n++)if(this._disconnectedInputs[n].id===e.toString())return this._disconnectedInputs[n]}else for(let n=0;n<this.inputs.length;n++)if(this.inputs[n].id===e.toString())return this.inputs[n]}getInputByName(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return;e=e.toString()}if(t.disconnected){for(let n=0;n<this._disconnectedInputs.length;n++)if(~this._disconnectedInputs[n].name.indexOf(e))return this._disconnectedInputs[n]}else for(let n=0;n<this.inputs.length;n++)if(~this.inputs[n].name.indexOf(e))return this.inputs[n]}getOutputByName(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return;e=e.toString()}if(t.disconnected){for(let n=0;n<this._disconnectedOutputs.length;n++)if(~this._disconnectedOutputs[n].name.indexOf(e))return this._disconnectedOutputs[n]}else for(let n=0;n<this.outputs.length;n++)if(~this.outputs[n].name.indexOf(e))return this.outputs[n]}getOutputById(e,t={disconnected:!1}){if(this.validation){if(!this.enabled)throw new Error("WebMidi is not enabled.");if(!e)return}if(t.disconnected){for(let n=0;n<this._disconnectedOutputs.length;n++)if(this._disconnectedOutputs[n].id===e.toString())return this._disconnectedOutputs[n]}else for(let n=0;n<this.outputs.length;n++)if(this.outputs[n].id===e.toString())return this.outputs[n]}noteNameToNumber(e){return this.validation&&console.warn("The noteNameToNumber() method is deprecated. Use Utilities.toNoteNumber() instead."),h.toNoteNumber(e,this.octaveOffset)}getOctave(e){return this.validation&&(console.warn("The getOctave()is deprecated. Use Utilities.getNoteDetails() instead"),e=parseInt(e)),!isNaN(e)&&e>=0&&e<=127?h.getNoteDetails(h.offsetNumber(e,this.octaveOffset)).octave:!1}sanitizeChannels(e){return this.validation&&console.warn("The sanitizeChannels() method has been moved to the utilities class."),h.sanitizeChannels(e)}toMIDIChannels(e){return this.validation&&console.warn("The toMIDIChannels() method has been deprecated. Use Utilities.sanitizeChannels() instead."),h.sanitizeChannels(e)}guessNoteNumber(e){return this.validation&&console.warn("The guessNoteNumber() method has been deprecated. Use Utilities.guessNoteNumber() instead."),h.guessNoteNumber(e,this.octaveOffset)}getValidNoteArray(e,t={}){return this.validation&&console.warn("The getValidNoteArray() method has been moved to the Utilities.buildNoteArray()"),h.buildNoteArray(e,t)}convertToTimestamp(e){return this.validation&&console.warn("The convertToTimestamp() method has been moved to Utilities.toTimestamp()."),h.toTimestamp(e)}async _destroyInputsAndOutputs(){let e=[];return this.inputs.forEach(t=>e.push(t.destroy())),this.outputs.forEach(t=>e.push(t.destroy())),Promise.all(e).then(()=>{this._inputs=[],this._outputs=[]})}_onInterfaceStateChange(e){this._updateInputsAndOutputs();let t={timestamp:e.timeStamp,type:e.port.state,target:this};if(e.port.state==="connected"&&e.port.connection==="open"){e.port.type==="output"?t.port=this.getOutputById(e.port.id):e.port.type==="input"&&(t.port=this.getInputById(e.port.id)),this.emit(e.port.state,t);const n=Object.assign({},t);n.type="portschanged",this.emit(n.type,n)}else if(e.port.state==="disconnected"&&e.port.connection==="pending"){e.port.type==="input"?t.port=this.getInputById(e.port.id,{disconnected:!0}):e.port.type==="output"&&(t.port=this.getOutputById(e.port.id,{disconnected:!0})),this.emit(e.port.state,t);const n=Object.assign({},t);n.type="portschanged",this.emit(n.type,n)}}async _updateInputsAndOutputs(){return Promise.all([this._updateInputs(),this._updateOutputs()])}async _updateInputs(){if(!this.interface)return;for(let t=this._inputs.length-1;t>=0;t--){const n=this._inputs[t];Array.from(this.interface.inputs.values()).find(i=>i===n._midiInput)||(this._disconnectedInputs.push(n),this._inputs.splice(t,1))}let e=[];return this.interface.inputs.forEach(t=>{if(!this._inputs.find(n=>n._midiInput===t)){let n=this._disconnectedInputs.find(r=>r._midiInput===t);n||(n=new gs(t)),this._inputs.push(n),e.push(n.open())}}),Promise.all(e)}async _updateOutputs(){if(!this.interface)return;for(let t=this._outputs.length-1;t>=0;t--){const n=this._outputs[t];Array.from(this.interface.outputs.values()).find(i=>i===n._midiOutput)||(this._disconnectedOutputs.push(n),this._outputs.splice(t,1))}let e=[];return this.interface.outputs.forEach(t=>{if(!this._outputs.find(n=>n._midiOutput===t)){let n=this._disconnectedOutputs.find(r=>r._midiOutput===t);n||(n=new Tt(t)),this._outputs.push(n),e.push(n.open())}}),Promise.all(e)}get enabled(){return this.interface!==null}get inputs(){return this._inputs}get isNode(){return this.validation&&console.warn("WebMidi.isNode has been deprecated. Use Utilities.isNode instead."),h.isNode}get isBrowser(){return this.validation&&console.warn("WebMidi.isBrowser has been deprecated. Use Utilities.isBrowser instead."),h.isBrowser}get octaveOffset(){return this._octaveOffset}set octaveOffset(e){if(this.validation&&(e=parseInt(e),isNaN(e)))throw new TypeError("The 'octaveOffset' property must be an integer.");this._octaveOffset=e}get outputs(){return this._outputs}get supported(){return typeof navigator<"u"&&navigator.requestMIDIAccess}get sysexEnabled(){return!!(this.interface&&this.interface.sysexEnabled)}get time(){return performance.now()}get version(){return"3.1.8"}get flavour(){return"esm"}get CHANNEL_EVENTS(){return this.validation&&console.warn("The CHANNEL_EVENTS enum has been moved to Enumerations.CHANNEL_EVENTS."),u.CHANNEL_EVENTS}get MIDI_SYSTEM_MESSAGES(){return this.validation&&console.warn("The MIDI_SYSTEM_MESSAGES enum has been moved to Enumerations.SYSTEM_MESSAGES."),u.SYSTEM_MESSAGES}get MIDI_CHANNEL_MODE_MESSAGES(){return this.validation&&console.warn("The MIDI_CHANNEL_MODE_MESSAGES enum has been moved to Enumerations.CHANNEL_MODE_MESSAGES."),u.CHANNEL_MODE_MESSAGES}get MIDI_CONTROL_CHANGE_MESSAGES(){return this.validation&&console.warn("The MIDI_CONTROL_CHANGE_MESSAGES enum has been replaced by the Enumerations.CONTROL_CHANGE_MESSAGES array."),u.MIDI_CONTROL_CHANGE_MESSAGES}get MIDI_REGISTERED_PARAMETER(){return this.validation&&console.warn("The MIDI_REGISTERED_PARAMETER enum has been moved to Enumerations.REGISTERED_PARAMETERS."),u.REGISTERED_PARAMETERS}get NOTES(){return this.validation&&console.warn("The NOTES enum has been deprecated."),["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]}}const d=new ps;d.constructor=null;const Oe=_([]),Ee=_([]);function po(a){Ee.set([...w(Ee).filter(e=>e!==a),a]),Oe.update(e=>e.map(t=>({...t,active:t.name===a?!0:t.active})))}function bo(a){Ee.set(w(Ee).filter(e=>e!==a)),Oe.update(e=>e.map(t=>({...t,active:t.name===a?!1:t.active})))}d.enable().then(()=>{if(console.log("WebMidi enabled!"),typeof localStorage>"u")return;const a=localStorage.getItem("q.midi.activeInputs");a&&Ee.set(JSON.parse(a));const e=localStorage.getItem("q.midi.inputs")?JSON.parse(localStorage.getItem("q.midi.inputs")||""):!1;Oe.update(()=>d.inputs.map(({name:t})=>{var n;return{name:t,active:!1,channel:e&&((n=e.find(r=>r.name===t))==null?void 0:n.channel)||1}})),Oe.subscribe(t=>{localStorage.setItem("q.midi.inputs",JSON.stringify(t))}),Ee.subscribe(t=>{localStorage.setItem("q.midi.activeInputs",JSON.stringify(t))})});function bs(a){const e=d.getInputByName(a);e!=null&&e.hasListener("controlchange",Ot)||e==null||e.addListener("controlchange",Ot)}function vs(a){const e=d.getInputByName(a);e==null||e.removeListener("controlchange",Ot)}const ys={4:a=>ue.set(cn[Math.floor(a*cn.length)].name),5:a=>$.set(w(fn)[Math.floor(a*w(fn).length)]),6:a=>br.set(a),7:a=>Q(0,"a",a),8:a=>Q(0,"d",a),9:a=>Q(0,"s",a),10:a=>Q(0,"r",a),11:a=>Q(1,"a",a),12:a=>Q(1,"d",a),13:a=>Q(1,"s",a),14:a=>Q(1,"r",a),15:a=>a&&rr(),16:a=>a&&de("inst"),17:a=>a&&de("global"),18:a=>a&&de("fx"),19:a=>a&&de("inst")&&de("global")&&de("fx"),20:a=>a&&Za()};function Ot(a){const{value:e,controller:{number:t}}=a;ys[t](e)}Oe.subscribe(a=>{a.forEach(({name:e,active:t})=>t?bs(e):vs(e))});export{Ka as $,Bt as A,Bs as B,xs as C,dr as D,vt as E,as as F,Qn as G,un as H,js as I,Ts as J,$ as K,fn as L,ho as M,go as N,ao as O,ro as P,to as Q,fo as R,Ws as S,Os as T,Rs as U,Dt as V,Pe as W,H as X,Xa as Y,Ns as Z,As as _,zs as a,$n as a0,or as a1,rt as a2,it as a3,de as a4,$a as a5,d as a6,no as a7,Re as a8,$s as a9,er as aa,tr as ab,nr as ac,yt as ad,ln as ae,rr as af,Cs as ag,Ss as ah,Ms as ai,at as aj,Vs as ak,cn as al,ue as am,Zs as an,oo as ao,lo as ap,io as aq,qs as ar,_s as as,Xs as at,Ps as au,ra as av,Ds as b,ss as c,Is as d,ks as e,uo as f,Gs as g,Oe as h,vr as i,Ee as j,po as k,Hs as l,bo as m,Qs as n,Fs as o,Js as p,z as q,Ks as r,yr as s,eo as t,Us as u,so as v,co as w,mo as x,Ls as y,br as z};
