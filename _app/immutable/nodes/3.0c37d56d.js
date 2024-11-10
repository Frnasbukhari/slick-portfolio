import{s as Ce,f as b,g as D,h as x,d as p,j as _,i as M,a as I,e as he,c as C,I as Ee,K as m,n as xe,l as Q,m as W,T as $e,p as X,M as Ve}from"../chunks/scheduler.7a274a43.js";import{S as ye,i as Ae,b as S,d as j,m as z,a as k,t as E,e as U,g as de,c as me}from"../chunks/index.28409b7f.js";import{A as Le,e as re,u as Se,U as le,b as je,g as _e}from"../chunks/UIcon.d20a157c.js";import{C as ze}from"../chunks/Card.df04f237.js";import{C as Ue}from"../chunks/Chip.859331eb.js";import{S as Be}from"../chunks/SearchPage.d305a8d3.js";import{c as pe}from"../chunks/app.9485cadf.js";import{C as ue}from"../chunks/CardDivider.09b854d8.js";const ve=[{degree:"Bachelor’s of Science degree in Artificial Intelligence and Computer Science",description:"Relevant Coursework: Data Structures & Algorithms, Artificial Intelligence, Intelligent Data Analysis, Software Engineering ",location:"Birmingham, UK",logo:Le.UoB,name:"",organization:"University of Birmingham",period:{from:new Date(2021,9,1),to:new Date(2025,8,30)},shortDescription:"",slug:"education",subjects:["Python","Java","C","Algorithms","Data Analysis","AI","LLMs","NLP"]}],Pe="Education";function we(f,t,r){const e=f.slice();return e[2]=t[r],e[4]=r,e}function be(f,t,r){const e=f.slice();return e[5]=t[r],e}function Me(f){let t,r,e=[],o=new Map,u,a,c=re(f[0]);const i=l=>l[2].slug;for(let l=0;l<c.length;l+=1){let n=we(f,c,l),v=i(n);o.set(v,e[l]=ke(v,n))}return{c(){t=b("div"),r=I();for(let l=0;l<e.length;l+=1)e[l].c();u=he(),this.h()},l(l){t=D(l,"DIV",{class:!0}),x(t).forEach(p),r=C(l);for(let n=0;n<e.length;n+=1)e[n].l(l);u=he(),this.h()},h(){_(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,n){M(l,t,n),M(l,r,n);for(let v=0;v<e.length;v+=1)e[v]&&e[v].m(l,n);M(l,u,n),a=!0},p(l,n){n&1&&(c=re(l[0]),de(),e=Se(e,n,i,1,l,c,o,u.parentNode,je,ke,u,we),me())},i(l){if(!a){for(let n=0;n<c.length;n+=1)k(e[n]);a=!0}},o(l){for(let n=0;n<e.length;n+=1)E(e[n]);a=!1},d(l){l&&(p(t),p(r),p(u));for(let n=0;n<e.length;n+=1)e[n].d(l)}}}function qe(f){let t,r,e,o,u="Could not find anything...",a;return r=new le({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=b("div"),S(r.$$.fragment),e=I(),o=b("p"),o.textContent=u,this.h()},l(c){t=D(c,"DIV",{class:!0});var i=x(t);j(r.$$.fragment,i),e=C(i),o=D(i,"P",{class:!0,["data-svelte-h"]:!0}),Ee(o)!=="svelte-1jyyf6v"&&(o.textContent=u),i.forEach(p),this.h()},h(){_(o,"class","font-300"),_(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,i){M(c,t,i),z(r,t,null),m(t,e),m(t,o),a=!0},p:xe,i(c){a||(k(r.$$.fragment,c),a=!0)},o(c){E(r.$$.fragment,c),a=!1},d(c){c&&p(t),U(r)}}}function Ke(f){let t=f[5]+"",r;return{c(){r=Q(t)},l(e){r=W(e,t)},m(e,o){M(e,r,o)},p(e,o){o&1&&t!==(t=e[5]+"")&&X(r,t)},d(e){e&&p(r)}}}function De(f){let t,r;return t=new Ue({props:{$$slots:{default:[Ke]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,o){z(t,e,o),r=!0},p(e,o){const u={};o&257&&(u.$$scope={dirty:o,ctx:e}),t.$set(u)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function Ne(f){let t,r,e,o,u,a,c=f[2].degree+"",i,l,n,v=f[2].organization+"",y,w,g,V,T,B,q,ae,F=f[2].location+"",Y,ne,K,se,P,N,oe,H=pe(f[2].period.from,f[2].period.to)+"",Z,ie,R,ce,G,A;V=new ue({}),q=new le({props:{icon:"i-carbon-location"}}),K=new ue({}),N=new le({props:{icon:"i-carbon-time"}}),R=new ue({});let J=re(f[2].subjects),h=[];for(let s=0;s<J.length;s+=1)h[s]=De(be(f,J,s));const Ie=s=>E(h[s],1,1,()=>{h[s]=null});return{c(){t=b("div"),r=b("img"),u=I(),a=b("div"),i=Q(c),l=I(),n=b("div"),y=Q(v),w=I(),g=b("div"),S(V.$$.fragment),T=I(),B=b("div"),S(q.$$.fragment),ae=I(),Y=Q(F),ne=I(),S(K.$$.fragment),se=I(),P=b("div"),S(N.$$.fragment),oe=I(),Z=Q(H),ie=I(),S(R.$$.fragment),ce=I(),G=b("div");for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){t=D(s,"DIV",{class:!0});var d=x(t);r=D(d,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),u=C(d),a=D(d,"DIV",{class:!0});var $=x(a);i=W($,c),$.forEach(p),l=C(d),n=D(d,"DIV",{});var O=x(n);y=W(O,v),O.forEach(p),w=C(d),g=D(d,"DIV",{class:!0});var L=x(g);j(V.$$.fragment,L),T=C(L),B=D(L,"DIV",{class:!0});var ee=x(B);j(q.$$.fragment,ee),ae=C(ee),Y=W(ee,F),ee.forEach(p),ne=C(L),j(K.$$.fragment,L),se=C(L),P=D(L,"DIV",{class:!0});var te=x(P);j(N.$$.fragment,te),oe=C(te),Z=W(te,H),te.forEach(p),ie=C(L),j(R.$$.fragment,L),L.forEach(p),ce=C(d),G=D(d,"DIV",{class:!0});var ge=x(G);for(let fe=0;fe<h.length;fe+=1)h[fe].l(ge);ge.forEach(p),d.forEach(p),this.h()},h(){$e(r.src,e=_e(f[2].logo))||_(r,"src",e),_(r,"alt",o=f[2].organization),_(r,"height","50"),_(r,"width","50"),_(r,"class","mb-5"),_(a,"class","text-[1.3em]"),_(B,"class","row items-center gap-2"),_(P,"class","row items-center gap-2"),_(g,"class","col text-[0.9em]"),_(G,"class","row flex-wrap gap-1"),_(t,"class","flex-1 col gap-2 items-stretch")},m(s,d){M(s,t,d),m(t,r),m(t,u),m(t,a),m(a,i),m(t,l),m(t,n),m(n,y),m(t,w),m(t,g),z(V,g,null),m(g,T),m(g,B),z(q,B,null),m(B,ae),m(B,Y),m(g,ne),z(K,g,null),m(g,se),m(g,P),z(N,P,null),m(P,oe),m(P,Z),m(g,ie),z(R,g,null),m(t,ce),m(t,G);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(G,null);A=!0},p(s,d){if((!A||d&1&&!$e(r.src,e=_e(s[2].logo)))&&_(r,"src",e),(!A||d&1&&o!==(o=s[2].organization))&&_(r,"alt",o),(!A||d&1)&&c!==(c=s[2].degree+"")&&X(i,c),(!A||d&1)&&v!==(v=s[2].organization+"")&&X(y,v),(!A||d&1)&&F!==(F=s[2].location+"")&&X(Y,F),(!A||d&1)&&H!==(H=pe(s[2].period.from,s[2].period.to)+"")&&X(Z,H),d&1){J=re(s[2].subjects);let $;for($=0;$<J.length;$+=1){const O=be(s,J,$);h[$]?(h[$].p(O,d),k(h[$],1)):(h[$]=De(O),h[$].c(),k(h[$],1),h[$].m(G,null))}for(de(),$=J.length;$<h.length;$+=1)Ie($);me()}},i(s){if(!A){k(V.$$.fragment,s),k(q.$$.fragment,s),k(K.$$.fragment,s),k(N.$$.fragment,s),k(R.$$.fragment,s);for(let d=0;d<J.length;d+=1)k(h[d]);A=!0}},o(s){E(V.$$.fragment,s),E(q.$$.fragment,s),E(K.$$.fragment,s),E(N.$$.fragment,s),E(R.$$.fragment,s),h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)E(h[d]);A=!1},d(s){s&&p(t),U(V),U(q),U(K),U(N),U(R),Ve(h,s)}}}function ke(f,t){let r,e,o,u,a,c,i,l,n,v,y;return a=new le({props:{icon:"i-carbon-condition-point"}}),l=new ze({props:{$$slots:{default:[Ne]},$$scope:{ctx:t}}}),{key:f,first:null,c(){r=b("div"),e=b("div"),o=I(),u=b("div"),S(a.$$.fragment),c=I(),i=b("div"),S(l.$$.fragment),n=I(),this.h()},l(w){r=D(w,"DIV",{class:!0});var g=x(r);e=D(g,"DIV",{class:!0}),x(e).forEach(p),o=C(g),u=D(g,"DIV",{class:!0});var V=x(u);j(a.$$.fragment,V),V.forEach(p),c=C(g),i=D(g,"DIV",{class:!0});var T=x(i);j(l.$$.fragment,T),T.forEach(p),n=C(g),g.forEach(p),this.h()},h(){_(e,"class","flex-1 hidden lg:flex"),_(u,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),_(i,"class","col flex-1 items-stretch"),_(r,"class",v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(w,g){M(w,r,g),m(r,e),m(r,o),m(r,u),z(a,u,null),m(r,c),m(r,i),z(l,i,null),m(r,n),y=!0},p(w,g){t=w;const V={};g&257&&(V.$$scope={dirty:g,ctx:t}),l.$set(V),(!y||g&1&&v!==(v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&_(r,"class",v)},i(w){y||(k(a.$$.fragment,w),k(l.$$.fragment,w),y=!0)},o(w){E(a.$$.fragment,w),E(l.$$.fragment,w),y=!1},d(w){w&&p(r),U(a),U(l)}}}function Re(f){let t,r,e,o;const u=[qe,Me],a=[];function c(i,l){return i[0].length===0?0:1}return r=c(f),e=a[r]=u[r](f),{c(){t=b("div"),e.c(),this.h()},l(i){t=D(i,"DIV",{class:!0});var l=x(t);e.l(l),l.forEach(p),this.h()},h(){_(t,"class","col items-center relative mt-10 flex-1")},m(i,l){M(i,t,l),a[r].m(t,null),o=!0},p(i,l){let n=r;r=c(i),r===n?a[r].p(i,l):(de(),E(a[n],1,1,()=>{a[n]=null}),me(),e=a[r],e?e.p(i,l):(e=a[r]=u[r](i),e.c()),k(e,1),e.m(t,null))},i(i){o||(k(e),o=!0)},o(i){E(e),o=!1},d(i){i&&p(t),a[r].d()}}}function Ge(f){let t,r;return t=new Be({props:{title:Pe,search:Je,$$slots:{default:[Re]},$$scope:{ctx:f}}}),t.$on("search",f[1]),{c(){S(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,o){z(t,e,o),r=!0},p(e,[o]){const u={};o&257&&(u.$$scope={dirty:o,ctx:e}),t.$set(u)},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}let Je="";function Te(f,t,r){let e=ve;return[e,u=>{const a=u.detail.search;r(0,e=ve.filter(c=>c.degree.toLowerCase().includes(a)||c.description.toLowerCase().includes(a)||c.location.toLowerCase().includes(a)||c.name.toLowerCase().includes(a)||c.organization.toLowerCase().includes(a)||c.subjects.some(i=>i.toLowerCase().includes(a))))}]}class et extends ye{constructor(t){super(),Ae(this,t,Te,Ge,Ce,{})}}export{et as component};
