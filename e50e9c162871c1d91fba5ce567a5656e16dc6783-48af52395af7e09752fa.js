(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=function(e){var t=e.activeClass,n=e.click;return a.a.createElement("div",{className:t,onClick:n})},c=function(e){var t=e.siteTitle,n=Object(r.useState)(!1),c=n[0],u=n[1],s=function(){return u(!c)},l="nav-links",f="nav-link-item",p="burger",d="backdrop";return c&&(l="nav-links nav-active",f="nav-link-item-active",p="burger toggle",d="backdrop backdrop-active"),a.a.createElement("header",null,a.a.createElement(o,{activeClass:d,click:s}),a.a.createElement("nav",{className:"navbar"},a.a.createElement("div",{className:"nav-belt"},a.a.createElement("div",null,a.a.createElement("h4",null,a.a.createElement(i.Link,{className:"logo",to:"/"},a.a.createElement("div",{className:"logo-image"}),t))),a.a.createElement("ul",{className:l},a.a.createElement("li",{className:f},a.a.createElement("a",{href:"#"},"About")),a.a.createElement("li",{className:f},a.a.createElement("a",{href:"#"},"Pricing")),a.a.createElement("li",{className:f},a.a.createElement("a",{href:"#"},"Login")),a.a.createElement("li",{className:f+" nav-item-bold"},a.a.createElement("a",{href:"#"},"Sign Up"))),a.a.createElement("div",{className:p,onClick:s},a.a.createElement("div",{className:"burger-line-1"}),a.a.createElement("div",{className:"burger-line-2"}),a.a.createElement("div",{className:"burger-line-3"})))))};c.defaultProps={siteTitle:""};var u=c,s=function(e){var t=e.siteTitle;return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"footer-belt"},a.a.createElement("div",{className:"company-sign"},"© 2020 ",t),a.a.createElement("div",{className:"social-media"},a.a.createElement("a",{href:"https://www.facebook.com"},a.a.createElement("div",{className:"social-facebook"},"Facebook")),a.a.createElement("a",{href:"https://www.twitter.com"},a.a.createElement("div",{className:"social-twitter"},"Twitter")),a.a.createElement("a",{href:"https://www.instagram.com"},a.a.createElement("div",{className:"social-instagram"},"Instagram")))))};n("sg+I"),t.a=function(e){var t=e.children,n=Object(i.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,{siteTitle:n.site.siteMetadata.title}),a.a.createElement("div",{className:"container"},a.a.createElement("main",{className:"container-main"},t),a.a.createElement(s,{siteTitle:n.site.siteMetadata.title})))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},EYWl:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("qhky"),o=n("Wbzz");function c(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,u=Object(o.useStaticQuery)("63159454").site,s=t||u.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(!e(t[u],o[u]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],o.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(t[u]!==o[u])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],o[s[u]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("E9XD");var r,a,i,o,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("YVoz"),y=n.n(h),b="bodyAttributes",v="htmlAttributes",T="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",A="href",O="http-equiv",C="innerHTML",S="itemprop",k="name",j="property",N="rel",P="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",_="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=G(e,g.TITLE),n=G(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,x);return t||r||void 0},J=function(e){return G(e,q)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===N&&"canonical"===e[n].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=y()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,a),ce(f,p);var d={baseTag:se(g.BASE,n),linkTags:se(g.LINK,i),metaTags:se(g.META,o),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,a,r),link:pe(g.LINK,i,r),meta:pe(g.META,o,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,s,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:$([A,I],e),bodyAttributes:Q(b,e),defer:G(e,M),encode:G(e,R),htmlAttributes:Q(v,e),linkTags:X(g.LINK,[N,A],e),metaTags:X(g.META,[k,w,O,j,S],e),noscriptTags:X(g.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:X(g.SCRIPT,[P,C],e),styleTags:X(g.STYLE,[E],e),title:V(e),titleAttributes:Q(T,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),he=(a=me,o=i=function(e){function t(){return Y(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case g.TITLE:return U({},a,((t={})[r.type]=o,t.titleAttributes=U({},i),t));case g.BODY:return U({},a,{bodyAttributes:U({},i)});case g.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,n("yLpj"))},"sg+I":function(e,t,n){}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-48af52395af7e09752fa.js.map