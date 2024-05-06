import{s as C,n as M,c as Z,o as ee,q as P,u as R,v as U,w as F}from"../chunks/scheduler.Ce_0Mfso.js";import{S as L,i as T,e as _,c as v,f as g,d as u,p as h,b as k,s as D,g as G,a as E,j as b,z as J,A as K,t as Q,h as X,k as Y,o as w,m as V,v as j,w as z,x as S,y as H}from"../chunks/index.BPQxOEsI.js";import{r as te}from"../chunks/index.CYjaDuOE.js";function I(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const le=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:le},Symbol.toStringTag,{value:"Module"})),se=te([{name:"Home",url:"/"},{name:"About",url:"/about"},{name:"Resume",url:"/resume"},{name:"Portfolio",url:"/portfolio"},{name:"Contact",url:"/contact"}]);function N(r,e,s){const l=r.slice();return l[6]=e[s],l}function O(r,e,s){const l=r.slice();return l[6]=e[s],l}function ne(r){let e,s,l,t="Michael Tolsma",n,a,f,o,i;function m($,y){return $[1]?ie:re}let c=m(r),p=c(r),d=r[1]&&W(r);return{c(){e=_("div"),s=_("div"),l=_("div"),l.textContent=t,n=D(),a=_("button"),p.c(),f=D(),d&&d.c(),this.h()},l($){e=v($,"DIV",{class:!0});var y=g(e);s=v(y,"DIV",{class:!0});var x=g(s);l=v(x,"DIV",{"data-svelte-h":!0}),G(l)!=="svelte-1ab6xon"&&(l.textContent=t),n=E(x),a=v(x,"BUTTON",{class:!0});var A=g(a);p.l(A),A.forEach(u),x.forEach(u),f=E(y),d&&d.l(y),y.forEach(u),this.h()},h(){h(a,"class","flex justify-end items-center"),h(s,"class","px-2 flex justify-between items-center"),h(e,"class","nav-bar flex flex-col")},m($,y){k($,e,y),b(e,s),b(s,l),b(s,n),b(s,a),p.m(a,null),b(e,f),d&&d.m(e,null),o||(i=J(a,"click",r[3]),o=!0)},p($,y){c!==(c=m($))&&(p.d(1),p=c($),p&&(p.c(),p.m(a,null))),$[1]?d?d.p($,y):(d=W($),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d($){$&&u(e),p.d(),d&&d.d(),o=!1,i()}}}function ae(r){let e,s,l='<img src="/profile-pic.png" class="my-3 rounded w-32 h-32" alt="Michael Tolsma smiling"/>',t,n,a,f=I(r[2]),o=[];for(let i=0;i<f.length;i+=1)o[i]=B(O(r,f,i));return{c(){e=_("div"),s=_("div"),s.innerHTML=l,t=D(),n=_("div"),a=_("nav");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var m=g(e);s=v(m,"DIV",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-e2xcmk"&&(s.innerHTML=l),t=E(m),n=v(m,"DIV",{});var c=g(n);a=v(c,"NAV",{class:!0});var p=g(a);for(let d=0;d<o.length;d+=1)o[d].l(p);p.forEach(u),c.forEach(u),m.forEach(u),this.h()},h(){h(s,"class","flex flex-col items-center"),h(a,"class","grid grid-cols-1"),h(e,"class","nav-card")},m(i,m){k(i,e,m),b(e,s),b(e,t),b(e,n),b(n,a);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(a,null)},p(i,m){if(m&4){f=I(i[2]);let c;for(c=0;c<f.length;c+=1){const p=O(i,f,c);o[c]?o[c].p(p,m):(o[c]=B(p),o[c].c(),o[c].m(a,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=f.length}},d(i){i&&u(e),K(o,i)}}}function re(r){let e;return{c(){e=_("div"),this.h()},l(s){e=v(s,"DIV",{class:!0}),g(e).forEach(u),this.h()},h(){h(e,"class","p-3 fa fa-bars text-2xl hover:bg-gray-700")},m(s,l){k(s,e,l)},d(s){s&&u(e)}}}function ie(r){let e;return{c(){e=_("div"),this.h()},l(s){e=v(s,"DIV",{class:!0}),g(e).forEach(u),this.h()},h(){h(e,"class","p-3 fa fa-xmark text-2xl hover:bg-gray-700")},m(s,l){k(s,e,l)},d(s){s&&u(e)}}}function W(r){let e,s=I(r[2]),l=[];for(let t=0;t<s.length;t+=1)l[t]=q(N(r,s,t));return{c(){e=_("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var n=g(e);for(let a=0;a<l.length;a+=1)l[a].l(n);n.forEach(u),this.h()},h(){h(e,"class","absolute right-0 mt-14 mr-2 w-48 bg-[#538374] space-y-1 py-2 px-2")},m(t,n){k(t,e,n);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(t,n){if(n&20){s=I(t[2]);let a;for(a=0;a<s.length;a+=1){const f=N(t,s,a);l[a]?l[a].p(f,n):(l[a]=q(f),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},d(t){t&&u(e),K(l,t)}}}function q(r){let e,s=r[6].name+"",l,t,n,a;return{c(){e=_("a"),l=Q(s),this.h()},l(f){e=v(f,"A",{href:!0,class:!0});var o=g(e);l=X(o,s),o.forEach(u),this.h()},h(){h(e,"href",t=r[6].url),h(e,"class","text-white hover:bg-gray-700 block px-3 py-2 text-base font-medium")},m(f,o){k(f,e,o),b(e,l),n||(a=J(e,"click",r[4]),n=!0)},p(f,o){o&4&&s!==(s=f[6].name+"")&&Y(l,s),o&4&&t!==(t=f[6].url)&&h(e,"href",t)},d(f){f&&u(e),n=!1,a()}}}function B(r){let e,s=r[6].name+"",l,t;return{c(){e=_("a"),l=Q(s),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var a=g(e);l=X(a,s),a.forEach(u),this.h()},h(){h(e,"href",t=r[6].url),h(e,"class","button mb-2 text-center hover:bg-gray-700")},m(n,a){k(n,e,a),b(e,l)},p(n,a){a&4&&s!==(s=n[6].name+"")&&Y(l,s),a&4&&t!==(t=n[6].url)&&h(e,"href",t)},d(n){n&&u(e)}}}function oe(r){let e;function s(n,a){return n[0]>=768?ae:ne}let l=s(r),t=l(r);return{c(){e=_("div"),t.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var a=g(e);t.l(a),a.forEach(u),this.h()},h(){h(e,"class","rounded-lg min-w-[250px] bg-[#183D3D] h-full")},m(n,a){k(n,e,a),t.m(e,null)},p(n,[a]){l===(l=s(n))&&t?t.p(n,a):(t.d(1),t=l(n),t&&(t.c(),t.m(e,null)))},i:M,o:M,d(n){n&&u(e),t.d()}}}function ce(r,e,s){let l;Z(r,se,i=>s(2,l=i));let t,n=!1;function a(){s(0,t=window.innerWidth)}return ee(()=>(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[t,n,l,()=>{s(1,n=!n)},()=>{s(1,n=!1)}]}class fe extends L{constructor(e){super(),T(this,e,ce,oe,C,{})}}function ue(r){let e,s;const l=r[1].default,t=P(l,r,r[0],null);return{c(){e=_("div"),t&&t.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var a=g(e);t&&t.l(a),a.forEach(u),this.h()},h(){h(e,"class","body-card bg-[#183D3D] rounded-lg flex flex-col h-full")},m(n,a){k(n,e,a),t&&t.m(e,null),s=!0},p(n,[a]){t&&t.p&&(!s||a&1)&&R(t,l,n,n[0],s?F(l,n[0],a,null):U(n[0]),null)},i(n){s||(w(t,n),s=!0)},o(n){V(t,n),s=!1},d(n){n&&u(e),t&&t.d(n)}}}function de(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=n=>{"$$scope"in n&&s(0,t=n.$$scope)},[t,l]}class he extends L{constructor(e){super(),T(this,e,de,ue,C,{})}}function me(r){let e;const s=r[0].default,l=P(s,r,r[1],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&2)&&R(l,s,t,t[1],e?F(s,t[1],n,null):U(t[1]),null)},i(t){e||(w(l,t),e=!0)},o(t){V(l,t),e=!1},d(t){l&&l.d(t)}}}function _e(r){let e,s,l,t,n,a,f,o;return t=new fe({}),f=new he({props:{$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){e=_("div"),s=_("div"),l=_("div"),j(t.$$.fragment),n=D(),a=_("div"),j(f.$$.fragment),this.h()},l(i){e=v(i,"DIV",{class:!0});var m=g(e);s=v(m,"DIV",{class:!0});var c=g(s);l=v(c,"DIV",{class:!0});var p=g(l);z(t.$$.fragment,p),p.forEach(u),n=E(c),a=v(c,"DIV",{class:!0});var d=g(a);z(f.$$.fragment,d),d.forEach(u),c.forEach(u),m.forEach(u),this.h()},h(){h(l,"class","nav-card"),h(a,"class","body-card flex-1"),h(s,"class","flex flex-col flex-1 gap-5 md:flex-row md:flex-1 md:gap-5"),h(e,"class","flex flex-col min-h-screen md:container md:py-10 md:mx-auto transition-all")},m(i,m){k(i,e,m),b(e,s),b(s,l),S(t,l,null),b(s,n),b(s,a),S(f,a,null),o=!0},p(i,[m]){const c={};m&2&&(c.$$scope={dirty:m,ctx:i}),f.$set(c)},i(i){o||(w(t.$$.fragment,i),w(f.$$.fragment,i),o=!0)},o(i){V(t.$$.fragment,i),V(f.$$.fragment,i),o=!1},d(i){i&&u(e),H(t),H(f)}}}function ve(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=n=>{"$$scope"in n&&s(1,t=n.$$scope)},[l,t]}class ke extends L{constructor(e){super(),T(this,e,ve,_e,C,{})}}export{ke as component,$e as universal};
