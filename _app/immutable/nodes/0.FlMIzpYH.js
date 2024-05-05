import{s as x,n as A,c as Z,o as ee,q as P,u as R,v as U,w as F}from"../chunks/scheduler.Ce_0Mfso.js";import{S as L,i as T,e as _,c as v,f as p,d as u,p as h,b as k,s as D,g as G,a as E,j as b,z as J,A as K,t as Q,h as X,k as Y,o as V,m as I,v as M,w as z,x as S,y as H}from"../chunks/index.BPQxOEsI.js";import{r as te}from"../chunks/index.CYjaDuOE.js";function C(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const le=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:le},Symbol.toStringTag,{value:"Module"})),se=te([{name:"Home",url:"/"},{name:"About",url:"/about"},{name:"Resume",url:"/resume"},{name:"Portfolio",url:"/portfolio"},{name:"Contact",url:"/contact"}]);function N(r,e,s){const l=r.slice();return l[6]=e[s],l}function O(r,e,s){const l=r.slice();return l[6]=e[s],l}function ne(r){let e,s,l,t="Michael Tolsma",n,a,c,i,o;function m($,y){return $[1]?ie:re}let f=m(r),g=f(r),d=r[1]&&W(r);return{c(){e=_("div"),s=_("div"),l=_("div"),l.textContent=t,n=D(),a=_("button"),g.c(),c=D(),d&&d.c(),this.h()},l($){e=v($,"DIV",{class:!0});var y=p(e);s=v(y,"DIV",{class:!0});var w=p(s);l=v(w,"DIV",{"data-svelte-h":!0}),G(l)!=="svelte-1ab6xon"&&(l.textContent=t),n=E(w),a=v(w,"BUTTON",{class:!0});var j=p(a);g.l(j),j.forEach(u),w.forEach(u),c=E(y),d&&d.l(y),y.forEach(u),this.h()},h(){h(a,"class","flex justify-end items-center"),h(s,"class","px-2 flex justify-between items-center"),h(e,"class","nav-bar flex flex-col")},m($,y){k($,e,y),b(e,s),b(s,l),b(s,n),b(s,a),g.m(a,null),b(e,c),d&&d.m(e,null),i||(o=J(a,"click",r[3]),i=!0)},p($,y){f!==(f=m($))&&(g.d(1),g=f($),g&&(g.c(),g.m(a,null))),$[1]?d?d.p($,y):(d=W($),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d($){$&&u(e),g.d(),d&&d.d(),i=!1,o()}}}function ae(r){let e,s,l='<img src="/profile-pic.png" class="my-3 rounded w-32 h-32" alt="Michael Tolsma smiling"/>',t,n,a,c=C(r[2]),i=[];for(let o=0;o<c.length;o+=1)i[o]=B(O(r,c,o));return{c(){e=_("div"),s=_("div"),s.innerHTML=l,t=D(),n=_("div"),a=_("nav");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=v(o,"DIV",{class:!0});var m=p(e);s=v(m,"DIV",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-15h0eus"&&(s.innerHTML=l),t=E(m),n=v(m,"DIV",{});var f=p(n);a=v(f,"NAV",{class:!0});var g=p(a);for(let d=0;d<i.length;d+=1)i[d].l(g);g.forEach(u),f.forEach(u),m.forEach(u),this.h()},h(){h(s,"class","flex flex-col items-center"),h(a,"class","grid grid-cols-1"),h(e,"class","nav-card")},m(o,m){k(o,e,m),b(e,s),b(e,t),b(e,n),b(n,a);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(a,null)},p(o,m){if(m&4){c=C(o[2]);let f;for(f=0;f<c.length;f+=1){const g=O(o,c,f);i[f]?i[f].p(g,m):(i[f]=B(g),i[f].c(),i[f].m(a,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=c.length}},d(o){o&&u(e),K(i,o)}}}function re(r){let e;return{c(){e=_("div"),this.h()},l(s){e=v(s,"DIV",{class:!0}),p(e).forEach(u),this.h()},h(){h(e,"class","p-3 fa fa-bars text-2xl hover:bg-gray-700")},m(s,l){k(s,e,l)},d(s){s&&u(e)}}}function ie(r){let e;return{c(){e=_("div"),this.h()},l(s){e=v(s,"DIV",{class:!0}),p(e).forEach(u),this.h()},h(){h(e,"class","p-3 fa fa-xmark text-2xl hover:bg-gray-700")},m(s,l){k(s,e,l)},d(s){s&&u(e)}}}function W(r){let e,s=C(r[2]),l=[];for(let t=0;t<s.length;t+=1)l[t]=q(N(r,s,t));return{c(){e=_("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var n=p(e);for(let a=0;a<l.length;a+=1)l[a].l(n);n.forEach(u),this.h()},h(){h(e,"class","absolute right-0 mt-14 mr-2 w-48 bg-[#538374] space-y-1 py-2 px-2")},m(t,n){k(t,e,n);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(t,n){if(n&20){s=C(t[2]);let a;for(a=0;a<s.length;a+=1){const c=N(t,s,a);l[a]?l[a].p(c,n):(l[a]=q(c),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},d(t){t&&u(e),K(l,t)}}}function q(r){let e,s=r[6].name+"",l,t,n,a;return{c(){e=_("a"),l=Q(s),this.h()},l(c){e=v(c,"A",{href:!0,class:!0});var i=p(e);l=X(i,s),i.forEach(u),this.h()},h(){h(e,"href",t=r[6].url),h(e,"class","text-white hover:bg-gray-700 block px-3 py-2 text-base font-medium")},m(c,i){k(c,e,i),b(e,l),n||(a=J(e,"click",r[4]),n=!0)},p(c,i){i&4&&s!==(s=c[6].name+"")&&Y(l,s),i&4&&t!==(t=c[6].url)&&h(e,"href",t)},d(c){c&&u(e),n=!1,a()}}}function B(r){let e,s=r[6].name+"",l,t;return{c(){e=_("a"),l=Q(s),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var a=p(e);l=X(a,s),a.forEach(u),this.h()},h(){h(e,"href",t=r[6].url),h(e,"class","button mb-2 text-center hover:bg-gray-700")},m(n,a){k(n,e,a),b(e,l)},p(n,a){a&4&&s!==(s=n[6].name+"")&&Y(l,s),a&4&&t!==(t=n[6].url)&&h(e,"href",t)},d(n){n&&u(e)}}}function oe(r){let e;function s(n,a){return n[0]>=768?ae:ne}let l=s(r),t=l(r);return{c(){e=_("div"),t.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var a=p(e);t.l(a),a.forEach(u),this.h()},h(){h(e,"class","bg-[#183D3D] rounded-lg min-w-[250px]")},m(n,a){k(n,e,a),t.m(e,null)},p(n,[a]){l===(l=s(n))&&t?t.p(n,a):(t.d(1),t=l(n),t&&(t.c(),t.m(e,null)))},i:A,o:A,d(n){n&&u(e),t.d()}}}function ce(r,e,s){let l;Z(r,se,o=>s(2,l=o));let t,n=!1;function a(){s(0,t=window.innerWidth)}return ee(()=>(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[t,n,l,()=>{s(1,n=!n)},()=>{s(1,n=!1)}]}class fe extends L{constructor(e){super(),T(this,e,ce,oe,x,{})}}function ue(r){let e,s;const l=r[1].default,t=P(l,r,r[0],null);return{c(){e=_("div"),t&&t.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var a=p(e);t&&t.l(a),a.forEach(u),this.h()},h(){h(e,"class","body-card bg-[#183D3D] rounded-lg min-w-[800px]")},m(n,a){k(n,e,a),t&&t.m(e,null),s=!0},p(n,[a]){t&&t.p&&(!s||a&1)&&R(t,l,n,n[0],s?F(l,n[0],a,null):U(n[0]),null)},i(n){s||(V(t,n),s=!0)},o(n){I(t,n),s=!1},d(n){n&&u(e),t&&t.d(n)}}}function de(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=n=>{"$$scope"in n&&s(0,t=n.$$scope)},[t,l]}class he extends L{constructor(e){super(),T(this,e,de,ue,x,{})}}function me(r){let e;const s=r[0].default,l=P(s,r,r[1],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&2)&&R(l,s,t,t[1],e?F(s,t[1],n,null):U(t[1]),null)},i(t){e||(V(l,t),e=!0)},o(t){I(l,t),e=!1},d(t){l&&l.d(t)}}}function _e(r){let e,s,l,t,n,a,c;return l=new fe({}),a=new he({props:{$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){e=_("div"),s=_("div"),M(l.$$.fragment),t=D(),n=_("div"),M(a.$$.fragment),this.h()},l(i){e=v(i,"DIV",{class:!0});var o=p(e);s=v(o,"DIV",{class:!0});var m=p(s);z(l.$$.fragment,m),m.forEach(u),t=E(o),n=v(o,"DIV",{class:!0});var f=p(n);z(a.$$.fragment,f),f.forEach(u),o.forEach(u),this.h()},h(){h(s,"class","nav-card"),h(n,"class","body-card"),h(e,"class","grid grid-cols-1 gap-5 justify-center md:mt-10 md:flex md:flex-row md:gap-5")},m(i,o){k(i,e,o),b(e,s),S(l,s,null),b(e,t),b(e,n),S(a,n,null),c=!0},p(i,[o]){const m={};o&2&&(m.$$scope={dirty:o,ctx:i}),a.$set(m)},i(i){c||(V(l.$$.fragment,i),V(a.$$.fragment,i),c=!0)},o(i){I(l.$$.fragment,i),I(a.$$.fragment,i),c=!1},d(i){i&&u(e),H(l),H(a)}}}function ve(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=n=>{"$$scope"in n&&s(1,t=n.$$scope)},[l,t]}class ke extends L{constructor(e){super(),T(this,e,ve,_e,x,{})}}export{ke as component,$e as universal};
