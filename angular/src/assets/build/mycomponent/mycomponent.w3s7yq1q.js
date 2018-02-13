/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='mycomponent']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c){let l=t.n+(e||k),f=t[l];if(f||(f=t[l=t.n+k]),f){let e=n.t;if(n.e)if(1===t.encapsulation)e=o.shadowRoot;else for(;o=n.o(o);)if(o.host&&o.host.shadowRoot){e=o.host.shadowRoot;break}const i=e.i=e.i||{};if(!i[l]){c=f.content.cloneNode(!0);const t=e.querySelectorAll("[data-styles]");n.c(e,c,t.length&&t[t.length-1].nextSibling||e.l),i[l]=!0}}}function l(n){return{f:n[0],u:n[1],r:!!n[2],s:!!n[3],a:!!n[4]}}function f(n,t){if(T(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function u(n,t,e){n.d&&((e=n.d.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.d.$initLoad()),n.d=null)}function r(n,t,e){let o,i=!1,c=!1;for(var l=arguments.length;l-- >2;)L.push(arguments[l]);for(;L.length;)if((e=L.pop())&&void 0!==e.pop)for(l=e.length;l--;)L.push(e[l]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].p+=e:void 0===o?o=[c?s(e):e]:o.push(c?s(e):e),i=c;const f=new B;if(f.m=n,f.y=o,t&&(f.v=t,f.b=t.w,f.g=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(l in t.class)t.class[l]&&L.push(l);t.class=L.join(" "),L.length=0}return f}function s(n){const t=new B;return t.p=n,t}function a(n,t){t.C||(t.C=!0,n.N.add(()=>{t.C=!1,function n(t,e){if(!e.j){const o=!e.k;let i;if(o){const o=e.d;if(o&&!o.$rendered)return void(o.$onRender=o.$onRender||[]).push(()=>{n(t,e)});(function o(n,t,e){try{e=n.O(t).x,t.k=new e,function o(n,t,e,i,c,l){for(l in i.S=e,e.T=e.T||{},(c=Object.assign({color:{type:String}},t.properties)).mode={type:String},c)p(n,c[l],e,i,l)}(n,e,t,t.k)}catch(e){t.k={},n.M(e,7,t,!0)}})(t,e)}i&&i.then?i.then(()=>d(t,e,o)):d(t,e,o)}}(n,t)}))}function d(n,t,e){(function o(n,t,e,i){try{const o=t.k,c=e.x.host;if(o.render||o.hostData||c){n.A=!0;const c=o.render&&o.render();let l;n.A=!1;const f=t.P||new B;f.B=t,t.P=n.render(f,r(null,l,c),i,t.L,e.x.encapsulation)}n.R(n.q,e,o.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}catch(e){n.A=!1,n.M(e,8,t,!0)}})(n,t,n.O(t),!e);try{e&&t.$initLoad()}catch(e){n.M(e,6,t,!0)}}function p(n,t,e,o,i){if(t.type||t.state){if(!t.state){if(t.attr&&(void 0===e.T[i]||""===e.T[i])){const o=n.q.D(e,t.attr);null!=o&&(e.T[i]=f(t.type,o))}e.hasOwnProperty(i)&&(void 0===e.T[i]&&(e.T[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===e.T[i]&&(e.T[i]=o[i]),t.watchCallbacks&&(e.T[R+i]=t.watchCallbacks.slice()),h(o,i,function c(n){return(n=this.S)&&n.T&&n.T[i]},function l(e,o){(o=this.S)&&(t.state||t.mutable)&&m(n,o,i,e)})}}function m(n,t,e,o,i,c,l){o!==(i=t.T=t.T||{})[e]&&(i[e]=o,t.k&&(i[R+e],n.A||a(n,t)))}function h(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function y(n,t,e,o,i){const c=11===e.B.nodeType&&e.B.host?e.B.host:e.B,l=t&&t.v||x,f=e.v||x;for(i in l)f&&null!=f[i]||null==l[i]||v(n,c,i,l[i],void 0,o);for(i in f)i in l&&f[i]===("value"===i||"checked"===i?c[i]:l[i])||v(n,c,i,l[i],f[i],o)}function v(n,t,e,o,i,c,l,f){if("class"!==e||c)if("style"===e){for(l in o=o||x,i=i||x,o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.O(t);o&&o.H&&o.H[e]?b(t,e,i):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==q[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(D,A(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(D,A(e)):t.removeAttribute(e));else e=A(e.substring(2)),i?o||n.q.z(t,e,i):n.q.F(t,e);else if(o!==i){const n=null==o||""===o?O:o.trim().split(/\s+/),e=null==i||""===i?O:i.trim().split(/\s+/);let c=null==t.className||""===t.className?O:t.className.trim().split(/\s+/);for(l=0,f=n.length;l<f;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,f=e.length;l<f;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function b(n,t,e){try{n[t]=e}catch(n){}}function $(n,t){function e(o,i,c){let l=0;if("function"==typeof o.m&&(o=o.m(Object.assign({},o.v,{I:o.y}))),!r&&"slot"===o.m){if(u){s&&t.W(i,s+"-slot","");const e=o.v&&o.v.name;let c;if(c=T(e)?u.G&&u.G[e]:u.J,T(c)){for(n.K=!0;l<c.length;l++)t.Q(c[l]),t.U(i,c[l]);n.K=!1}}return null}if(T(o.p))o.B=t.V(o.p);else{const i=o.B=t.X(o.m);y(n,null,o,H),null!==s&&i.Y!==s&&t.W(i,i.Y=s,"");const c=o.y;let f;if(c)for(;l<c.length;++l)(f=e(c[l],i))&&t.U(i,f);"svg"===o.m&&(H=!1)}return o.B}function o(n,o,i,c,l,f,u){const r=n.$defaultHolder&&t.o(n.$defaultHolder)||n;for(;c<=l;++c)u=i[c],T(u)&&(f=T(u.p)?t.V(u.p):e(u,n),T(f)&&(u.B=f,t.c(r,f,o)))}function i(n,e,o){for(;e<=o;++e)T(n[e])&&t.Q(n[e].B)}function c(n,t){return n.m===t.m&&n.b===t.b}function l(n,t,e){const o={};let i,c,l;for(i=t;i<=e;++i)null!=(l=n[i])&&void 0!==(c=l.b)&&(o.Z=i);return o}let f,u,r,s;return function a(d,p,m,h,v,b){return f=m,u=h,s="scoped"===v||"shadow"===v&&!t.e?"data-"+t._(d.B):null,r="shadow"===v&&t.e,f||(r?d.B=t.nn(d.B,{mode:"open"}):s&&t.W(d.B,s+"-host","")),function f(u,r){const s=r.B=u.B,a=u.y,d=r.y;if(M(r.p))"slot"!==r.m&&y(n,u,r,H),T(a)&&T(d)?function p(n,u,r){let s,a,d,p,m=0,h=0,y=u.length-1,v=u[0],b=u[y],$=r.length-1,w=r[0],g=r[$];for(;m<=y&&h<=$;)null==v?v=u[++m]:null==b?b=u[--y]:null==w?w=r[++h]:null==g?g=r[--$]:c(v,w)?(f(v,w),v=u[++m],w=r[++h]):c(b,g)?(f(b,g),b=u[--y],g=r[--$]):c(v,g)?(f(v,g),t.c(n,v.B,t.tn(b.B)),v=u[++m],g=r[--$]):c(b,w)?(f(b,w),t.c(n,b.B,v.B),b=u[--y],w=r[++h]):(M(s)&&(s=l(u,m,y)),a=s[w.b],M(a)?(p=e(w,n),w=r[++h]):((d=u[a]).m!==w.m?p=e(w,n):(f(d,w),u[a]=void 0,p=d.B),w=r[++h]),p&&t.c(v.B&&v.B.parentNode||n,p,v.B));m>y?o(n,null==r[$+1]?null:r[$+1].B,r,h,$):h>$&&i(u,m,y)}(s,a,d):T(d)?(T(u.p)&&t.en(s,""),o(s,null,d,0,d.length-1)):T(a)&&i(a,0,a.length-1);else if(s.L&&s.L.J){const n=s.L.J[0].parentElement;t.en(n,r.p),s.L.J=[n.childNodes[0]]}else u.p!==r.p&&t.en(s,r.p);"svg"===r.m&&H&&(H=!1)}(d,p),p}}function w(n,t){n&&(n.g&&n.g(t?null:n.B),n.y&&n.y.forEach(n=>{w(n,t)}))}function g(n,t,e,o,i){const c=n.on(t);let l,f,u,r;if(i&&1===c){(f=n.D(t,E))&&(u=f.split("."))[0]===o&&((r=new B).m=n._(r.B=t),e.y||(e.y=[]),e.y[u[1]]=r,e=r,i=""!==u[2]);for(let c=0;c<t.childNodes.length;c++)g(n,t.childNodes[c],e,o,i)}else 3===c&&(l=t.previousSibling)&&8===n.on(l)&&"s"===(u=n.in(l).split("."))[0]&&u[1]===o&&((r=s(n.in(t))).B=t,e.y||(e.y=[]),e.y[u[2]]=r)}function C(n,t,e,o){e.connectedCallback=function(){(function e(n,t,o){o.$connected||(o.$connected=!0,o.j=null,function i(n,t,e){for(e=t;e=n.q.cn(e);)if(n.ln(e)){e.fn||(t.d=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.N.add(()=>{n.un(t,o),n.loadBundle(t,o.mode,()=>a(n,o))},3))})(n,t,this)},e.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,l){if(o!==c&&n)for(l in e=A(e),n)if(n[l].rn===e){t[l]=f(n[l].sn,c);break}})(t.H,this,n,e,o)},e.disconnectedCallback=function(){(function t(n,e){!n.K&&function o(n,t){for(;t;){if(!n.o(t))return 9!==n.on(t);t=n.o(t)}}(n.q,e)&&(e.j=!0,u(e),w(e.P,!0),n.q.F(e),e.L&&(e.L=e.L.J=e.L.G=null),e.k&&(e.k=e.k.S=null),e.$activeLoading=e.$connected=e.$defaultHolder=e.an=e.T=e.P=e.d=e.fn=e.C=e.dn=null)})(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),function e(n,t){n.j||(n.fn?t(n):(n.pn=n.pn||[]).push(t))}(this,n),t},e.$initLoad=function(){(function t(n,e,o){if(e.k&&!e.j&&(!e.$activeLoading||!e.$activeLoading.length)){e.$activeLoading=null,e.fn=!0;try{w(e.P),e.pn&&(e.pn.forEach(n=>n(e)),e.pn=null)}catch(t){n.M(t,4,e)}e.classList.add(o),u(e)}})(n,this,o)},e.mn=function(){a(n,this)},function i(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].hn;1===i||2===i?h(e,o,function n(){return(this.T=this.T||{})[o]},function t(e){m(n,this,o,e)}):6===i&&function c(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}(e,o,P)})}(n,t.H,e)}function N(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.yn.querySelector(e)),i||(i=t[e]=n.X(e),n.U(n.yn,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const j="data-ssrv",E="data-ssrc",k="$",x={},O=[],S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},T=n=>void 0!==n&&null!==n,M=n=>void 0===n||null===n,A=n=>n.toLowerCase(),P=()=>{};class B{}const L=[],R="wc-",q={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},D="http://www.w3.org/1999/xlink";let H=!1;const z=n[o]=n[o]||{};{const o=function F(t,e,o,i,f,u){const s={html:{}},a={},d=function p(n,t){const e=new WeakMap,o={vn:t.documentElement,t:t.head,yn:t.body,bn:!1,on:n=>n.nodeType,X:n=>t.createElement(n),$n:(n,e)=>t.createElementNS(n,e),V:n=>t.createTextNode(n),wn:n=>t.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),Q:n=>n.remove(),U:(n,t)=>n.appendChild(t),gn:n=>n.childNodes,o:n=>n.parentNode,tn:n=>n.nextSibling,_:n=>A(n.tagName),in:n=>n.textContent,en:(n,t)=>n.textContent=t,D:(n,t)=>n.getAttribute(t),W:(n,t,e)=>n.setAttribute(t,e),Cn:(n,t,e,o)=>n.setAttributeNS(t,e,o),Nn:(n,t)=>n.removeAttribute(t),jn:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.cn(e):"body"===i?o.yn:"document"===i?t:"window"===i?n:e,z:(n,t,i,c,l,f,u,r)=>{const s=t;let a=n,d=e.get(n);if(d&&d[s]&&d[s](),"string"==typeof f?a=o.jn(n,f):"object"==typeof f?a=f:(r=t.split(":")).length>1&&(a=o.jn(n,r[0]),t=r[1]),!a)return;let p=i;(r=t.split(".")).length>1&&(t=r[0],p=(n=>{n.keyCode===S[r[1]]&&i(n)})),u=o.bn?{capture:!!c,passive:!!l}:!!c,a.addEventListener(t,p,u),d||e.set(n,d={}),d[s]=(()=>{a&&a.removeEventListener(t,p,u),d[s]=null})},F:(n,t)=>{const o=e.get(n);o&&(t?o[t]&&o[t]():(Object.keys(o).forEach(n=>{o[n]&&o[n]()}),e.delete(n)))},nn:(n,t)=>n.attachShadow(t)};return o.e=!!o.vn.attachShadow,o.cn=((n,t)=>(t=o.o(n))&&11===o.on(t)?t.host:t),o}(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=f,e.h=r,e.Context=t;const m=o.$definedCmps=o.$definedCmps||{},h={un:function y(n,e){e.mode||(e.mode=d.D(e,"mode")||t.mode),d.D(e,j)||function o(n,t){return n&&1===t.encapsulation}(d.e,n)||function i(n,t,e,o){let i,c,l;t.$defaultHolder||n.c(t,t.$defaultHolder=n.wn(""),e[0]);let f=0;for(;f<e.length;f++)o=e[f],1===n.on(o)&&null!=(i=n.D(o,"slot"))?(l=l||{})[i]?l[i].push(o):l[i]=[o]:c?c.push(o):c=[o];t.L={J:c,G:l}}(d,e,e.childNodes),d.e||1!==n.encapsulation||(e.shadowRoot=e)},q:d,En:function v(n,t){if(!m[n.n]){m[n.n]=!0,C(h,n,t.prototype,u);{const e=[];for(const o in n.H)n.H[o].rn&&e.push(n.H[o].rn),t.observedAttributes=e}o.customElements.define(n.n,t)}},kn:t.emit,O:n=>s[d._(n)],xn:n=>t[n],isClient:!0,ln:n=>!(!m[d._(n)]&&!h.O(n)),loadBundle:function b(n,t,e){if(n.x)e();else{const o="string"==typeof n.On?n.On:n.On[t],i=f+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(d.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.x=t[(n=>A(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||k);if(!t[i]){const e=n.X("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.U(n.t,e)}}}(d,n,n.x)}catch(t){n.x=class{}}e()}).catch(n=>void 0)}},M:(n,t,e)=>void 0,Sn:n=>(function t(n,e,o){return{create:N(n,e,o,"create"),componentOnReady:N(n,e,o,"componentOnReady")}})(d,a,n),N:function w(t,e,o){function i(){for(;s.length>0;)s.shift()();e=!1}function c(n){for(n=f(),i();a.length>0&&f()-n<40;)a.shift()();(o=a.length>0)&&u(l)}function l(n){for(i(),n=4+f();a.length>0&&f()<n;)a.shift()();(o=a.length>0)&&u(c)}const f=()=>t.performance.now(),u=t=>n.requestAnimationFrame(t),r=Promise.resolve(),s=[],a=[];return{add:(n,t)=>{3===t?(s.push(n),e||(e=!0,r.then(i))):(a.push(n),o||(o=!0,u(c)))}}}(o),Tn:n=>(n||[]).map(n=>(function t(n,e,o,i){const c={n:n[0],H:{color:{rn:"color"}}};c.On=n[1];const f=n[3];if(f)for(o=0;o<f.length;o++)i=f[o],c.H[i[0]]={hn:i[1],rn:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,sn:i[3]};return c.encapsulation=n[4],n[5]&&(c.Mn=n[5].map(l)),e[c.n]=c})(n,s))};h.render=$(h,d);const E=d.vn;return E.$rendered=!0,E.$activeLoading=[],E.$initLoad=(()=>E.fn=!0),function x(n,t){const e=t.querySelectorAll(`[${j}]`),o=e.length;let i,c,l,f,u,r;if(t.fn=o>0)for(f=0;f<o;f++)for(i=e[f],c=n.D(i,j),(l=i.P=new B).m=n._(l.B=i),u=0,r=i.childNodes.length;u<r;u++)g(n,i.childNodes[u],l,c,!0)}(d,E),h.R=c,h}(e,z,n,t,i,hydratedCssClass);o.Tn(z.components).forEach(n=>o.En(n,class extends HTMLElement{}))}})(window,document,Context,appNamespace,publicPath);
})({},"mycomponent","hydrated","/angular/src/assets/build/mycomponent/");