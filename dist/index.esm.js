var e={getSavedData:e=>{if(e)return e.data.heading}};const t=new WeakMap,n=(e,...n)=>{const{t:a,v:o}=((e,t)=>{const n=[e[0]],a=[];for(let o=0,i=0,s=0,{length:l}=t;i<l;i++)t[i]instanceof r?n[o]+=t[i].v+e[i+1]:(a[s++]=i,n[++o]=e[i+1]);return{t:n,v:a}})(e,n),i=t.get(e)||t.set(e,{}).get(e);return(i[a]||(i[a]=[a])).concat(o.map(e=>n[e]))};function r(e){this.v=e}var a=Object.freeze({__proto__:null,asStatic:e=>new r(e),asParams:n,asTag:e=>function(){return e.apply(this,n.apply(null,arguments))}}),o={};try{o.WeakMap=WeakMap}catch(e){o.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var i,s=o.WeakMap,l="-"+Math.random().toFixed(6)+"%",c=!1;try{"content"in(i=document.createElement("template"))&&(i.innerHTML='<p tabindex="'+l+'"></p>',i.content.childNodes[0].getAttribute("tabindex")==l)||(l="_dt: "+l.slice(1,-1)+";",c=!0)}catch(e){}var u="\x3c!--"+l+"--\x3e",f=/^(?:style|textarea)$/i,h=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function p(e){return e.join(u).replace(w,k).replace(b,N)}var d=" \\f\\n\\r\\t",v="[^ \\f\\n\\r\\t\\/>\"'=]+",g="[ \\f\\n\\r\\t]+"+v,m="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",y="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+v.replace("\\/","")+"))?)",b=new RegExp(m+g+y+"+)(["+d+"]*/?>)","g"),w=new RegExp(m+g+y+"*)(["+d+"]*/>)","g"),x=new RegExp("("+g+"\\s*=\\s*)(['\"]?)"+u+"\\2","gi");function N(e,t,n,r){return"<"+t+n.replace(x,C)+r}function C(e,t,n){return t+(n||'"')+l+(n||'"')}function k(e,t,n){return h.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:S}=Array,{indexOf:E,slice:M}=[];var _=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const T=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,A=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const r=M.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}};var L=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),a=r("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;a.innerHTML="<table>"+e+"</table>",o=a.querySelectorAll(i)}else a.innerHTML=e,o=a.childNodes;return n(t,o),t};return function(e,n){return("svg"===n?a:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function a(e){var t=r("fragment"),a=r("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,a.firstChild.childNodes),t}}(document),j=(e,t,n,r,a)=>{const o=n.length;let i=t.length,s=o,l=0,c=0,u=null;for(;l<i||c<s;)if(i===l){const t=s<o?c?r(n[c-1],-0).nextSibling:r(n[s-c],0):a;for(;c<s;)e.insertBefore(r(n[c++],1),t)}else if(s===c)for(;l<i;)u&&u.has(t[l])||e.removeChild(r(t[l],-1)),l++;else if(t[l]===n[c])l++,c++;else if(t[i-1]===n[s-1])i--,s--;else if(t[l]===n[s-1]&&n[c]===t[i-1]){const a=r(t[--i],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[l++],-1).nextSibling),e.insertBefore(r(n[--s],1),a),t[i]=n[s]}else{if(!u){u=new Map;let e=c;for(;e<s;)u.set(n[e],e++)}if(u.has(t[l])){const a=u.get(t[l]);if(c<a&&a<s){let o=l,f=1;for(;++o<i&&o<s&&u.get(t[o])===a+f;)f++;if(f>a-c){const o=r(t[l],0);for(;c<a;)e.insertBefore(r(n[c++],1),o)}else e.replaceChild(r(n[c++],1),r(t[l++],-1))}else l++}else e.removeChild(r(t[l++],-1))}return n},O={};try{O.WeakMap=WeakMap}catch(e){O.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var $=O.WeakMap,H=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),a=r("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;a.innerHTML="<table>"+e+"</table>",o=a.querySelectorAll(i)}else a.innerHTML=e,o=a.childNodes;return n(t,o),t};return function(e,n){return("svg"===n?a:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function a(e){var t=r("fragment"),a=r("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,a.firstChild.childNodes),t}}(document),W=function(e,t,n,r,a){var o="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(o?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,i=0;n&&i<o;i++)r.appendChild(e(a[i],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),D="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},P=c?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function R(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function z(e,t,n,r){for(var a=e.attributes,o=[],i=[],s=P(a,n),f=s.length,h=0;h<f;){var p,d=s[h++],v=d.value===l;if(v||1<(p=d.value.split(u)).length){var g=d.name;if(o.indexOf(g)<0){o.push(g);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=a[m]||a[m.toLowerCase()];if(v)t.push(F(y,r,m,null));else{for(var b=p.length-2;b--;)n.shift();t.push(F(y,r,m,p))}}i.push(d)}}h=0;for(var w=(0<(f=i.length)&&c&&!("ownerSVGElement"in e));h<f;){var x=i[h++];w&&(x.value=""),e.removeAttribute(x.name)}var N=e.nodeName;if(/^script$/i.test(N)){var C=document.createElement(N);for(f=a.length,h=0;h<f;)C.setAttributeNode(a[h++].cloneNode(!0));C.textContent=e.textContent,e.parentNode.replaceChild(C,e)}}function B(e,t){return{type:"any",node:e,path:t}}function F(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Z(e,t){return{type:"text",node:e,path:t}}var q=_(new $);function G(e,t){var n=(e.convert||p)(t),r=e.transform;r&&(n=r(n));var a=H(n,e.type);I(a);var o=[];return function e(t,n,r,a){for(var o=t.childNodes,i=o.length,s=0;s<i;){var c=o[s];switch(c.nodeType){case 1:var h=a.concat(s);z(c,n,r,h),e(c,n,r,h);break;case 8:var p=c.textContent;if(p===l)r.shift(),n.push(f.test(t.nodeName)?Z(t,a):B(c,a.concat(s)));else switch(p.slice(0,2)){case"/*":if("*/"!==p.slice(-2))break;case"👻":t.removeChild(c),s--,i--}break;case 3:f.test(t.nodeName)&&D.call(c.textContent)===u&&(r.shift(),n.push(Z(t,a)))}s++}}(a,o,t.slice(0),[]),{content:a,updates:function(n){for(var r=[],a=o.length,i=0,s=0;i<a;){var l=o[i++],c=R(n,l.path);switch(l.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var u=l.sparse,f=e.attribute(c,l.name,l.node);null===u?r.push({fn:f,sparse:!1}):(s+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return a+=s,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,i=1;o<e;){var s=r[o-i];if(s.sparse){var l=s.values,c=l[0],u=1,f=l.length;for(i+=f-2;u<f;)c+=arguments[o++]+l[u++];s.fn(c)}else s.fn(arguments[o++])}return n}}}}function V(e,t){var n=q.get(t)||q.set(t,G(e,t));return n.updates(W.call(document,n.content,!0))}var U=[];function I(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===D.call(r.textContent).length&&e.removeChild(r)}}var J=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(s){var l,c,u,f;switch(typeof s){case"object":if(s){if("object"===o){if(!a&&i!==s)for(c in i)c in s||(r[c]="")}else a?r.value="":r.cssText="";for(c in l=a?{}:r,s)u="number"!=typeof(f=s[c])||e.test(c)?f:f+"px",!a&&/^--/.test(c)?l.setProperty(c,u):l[c]=u;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=l):i=s;break}default:i!=s&&(o="string",i=s,a?r.value=s||"":r.cssText=s||"")}}}}();const K=(e,t)=>{let n,r=!0;const a=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(a),r=!0):(a.value=t,r&&(e.setAttributeNodeNS(a),r=!1)))}},Q=(e,t)=>n=>{e[t]=n},X=/^(?:form|list)$/i,Y=(e,t)=>e.ownerDocument.createTextNode(t);function ee(e){return this.type=e,t=this,n=U,r=I,function(e){return n!==e&&(r=V(t,n=e)),r.apply(null,arguments)};var t,n,r}function te(e){return e(this)}ee.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return K(e,t);t="className";case"props":return Q(e,t);case"aria":return(e=>t=>{for(const n in t)e.setAttribute("role"===n?n:"aria-"+n,t[n])})(e);case"style":return J(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case".dataset":return(({dataset:e})=>t=>{for(const n in t)e[n]=t[n]})(e);default:return"."===t.slice(0,1)?Q(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const a=S(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}})(e,t):!(t in e)||r||X.test(t)?K(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const{type:n}=this;let r,a=!1;const o=i=>{switch(typeof i){case"string":case"number":case"boolean":a?r!==i&&(r=i,t[0].textContent=i):(a=!0,r=i,t=j(e.parentNode,t,[Y(e,i)],T,e));break;case"function":o(i(e));break;case"object":case"undefined":if(null==i){a=!1,t=j(e.parentNode,t,[],T,e);break}default:if(a=!1,r=i,S(i))if(0===i.length)t.length&&(t=j(e.parentNode,t,[],T,e));else switch(typeof i[0]){case"string":case"number":case"boolean":o(String(i));break;case"function":o(i.map(te,e));break;case"object":S(i[0])&&(i=i.concat.apply([],i));default:t=j(e.parentNode,t,i,T,e)}else"ELEMENT_NODE"in i?t=j(e.parentNode,t,11===i.nodeType?M.call(i.childNodes):[i],T,e):"text"in i?o(String(i.text)):"any"in i?o(i.any):"html"in i?t=j(e.parentNode,t,M.call(L([].concat(i.html).join(""),n).childNodes),T,e):"length"in i&&o(M.call(i))}};return o},text(e){let t;const n=r=>{if(t!==r){t=r;const a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(M.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:ne,freeze:re,keys:ae}=Object,oe=ee.prototype,ie=_(new s),se=e=>({html:ce("html",e),svg:ce("svg",e),render(t,n){const r="function"==typeof n?n():n,a=ie.get(t)||ie.set(t,le()),o=r instanceof he?ue(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf())),t}}),le=()=>({stack:[],entry:null,wire:null}),ce=(e,t)=>{const n=_(new s);return r.for=(e,a)=>{const o=n.get(e)||n.set(e,ne(null));return o[a]||(o[a]=(i=le(),function(){return ue(t,i,r.apply(null,arguments))}));var i},r.node=function(){return ue(t,le(),r.apply(null,arguments)).valueOf()},r;function r(){return new he(e,me.apply(null,arguments))}},ue=(e,t,{type:n,template:r,values:a})=>{const{length:o}=a;fe(e,t,a,o);let{entry:i}=t;if(i&&i.template===r&&i.type===n)i.tag(r,...a);else{const o=new e(n);t.entry=i={type:n,template:r,tag:o,wire:A(o(r,...a))}}return i.wire},fe=(e,{stack:t},n,r)=>{for(let a=0;a<r;a++){const r=n[a];r instanceof pe?n[a]=ue(e,t[a]||(t[a]=le()),r):S(r)?fe(e,t[a]||(t[a]=le()),r,r.length):t[a]=null}r<t.length&&t.splice(r)};function he(e,t){this.type=e,this.template=t.shift(),this.values=t}re(he);const pe=he,{render:de,html:ve,svg:ge}=se(ee);function me(){let e=[],t=0,{length:n}=arguments;for(;t<n;)e.push(arguments[t++]);return e}var ye=Object.freeze({__proto__:null,Hole:pe,custom:e=>{const t=ne(oe);return ae(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?p:String))}),n.prototype=t,se(n);function n(){return ee.apply(this,arguments)}},render:de,html:ve,svg:ge});const{getSavedData:be}=e,{asStatic:we,asParams:xe,asTag:Ne}=a,{render:Ce,html:ke,svg:Se}=ye;var Ee={Heading:class{constructor(e){this.options={i18n:{locale:"en-US",rtl:"ltr",translations:{}},controllers:[],defaultHeadingLevel:"h1",...e}}render(e,t,n){const r=Ne(ke.node),a=we(n||this.options.defaultHeadingLevel),o=void 0!==e.rtl?e.rtl:this.options.i18n.rtl;return r`<div class="freedom-editor-blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
    <${a} class="heading-field" contenteditable dir="${o}">${be(t)}</${a}>
    </div>`}save(e){const t=e.querySelector(".heading-field");if(""!==t.textContent)return{type:this.constructor.name,data:{heading:t.textContent}}}}};export default Ee;
