(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{194:function(t,e,n){var r=n(185)(Object,"create");t.exports=r},195:function(t,e,n){var r=n(300);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},196:function(t,e,n){var r=n(306);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},206:function(t,e,n){"use strict";n(207)("fixed",function(t){return function(){return t(this,"tt","","")}})},207:function(t,e,n){var r=n(11),i=n(18),o=n(19),a=/"/g,s=function(t,e,n,r){var i=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},209:function(t,e,n){"use strict";var r=n(8);e.__esModule=!0,e.default=void 0;var i,o=r(n(7)),a=r(n(35)),s=r(n(75)),u=r(n(76)),l=r(n(0)),c=r(n(4)),d=function(t){var e=(0,u.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},f=Object.create({}),p=function(t){var e=d(t),n=e.fluid?e.fluid.src:e.fixed.src;return f[n]||!1},h=new WeakMap;var g=function(t,e){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(t){t.forEach(function(t){if(h.has(t.target)){var e=h.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(t.target),h.delete(t.target),e())}})},{rootMargin:"200px"})),i);return n&&(n.observe(t),h.set(t,e)),function(){n.unobserve(t),h.delete(t)}},m=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.sizes?'sizes="'+t.sizes+'" ':"",r=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+n+"/>":"",i=t.srcSet?'srcset="'+t.srcSet+'" ':"",o=t.title?'title="'+t.title+'" ':"",a=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",u=t.height?'height="'+t.height+'" ':"",l=t.opacity?t.opacity:"1",c=t.transitionDelay?t.transitionDelay:"0.5s";return"<picture>"+r+"<img "+s+u+n+i+e+a+o+(t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=l.default.forwardRef(function(t,e){var n=t.sizes,r=t.srcSet,i=t.src,o=t.style,a=t.onLoad,c=t.onError,d=(0,s.default)(t,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,u.default)({sizes:n,srcSet:r,src:i},d,{onLoad:a,onError:c,ref:e,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(t){function e(e){var n;n=t.call(this,e)||this;var r=!0,i=!1,o=e.fadeIn,s=p(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),e.critical&&(r=!0,i=!1);var u=!(e.critical&&!e.fadeIn);return n.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:o,hasNoScript:u,seenBefore:s},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)((0,a.default)(n))),n.handleRef=n.handleRef.bind((0,a.default)((0,a.default)(n))),n}(0,o.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(t){var e=this;this.state.IOSupported&&t&&(this.cleanUpListeners=g(t,function(){var t=p(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0,imgLoaded:t})}))},n.handleImageLoaded=function(){var t,e,n;t=this.props,e=d(t),n=e.fluid?e.fluid.src:e.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var t=d(this.props),e=t.title,n=t.alt,r=t.className,i=t.style,o=void 0===i?{}:i,a=t.imgStyle,s=void 0===a?{}:a,c=t.placeholderStyle,f=void 0===c?{}:c,p=t.placeholderClassName,h=t.fluid,g=t.fixed,y=t.backgroundColor,b=t.Tag,_=t.itemProp,S="boolean"==typeof y?"lightgray":y,w=(0,u.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),E=(0,u.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:e,alt:this.state.isVisible?"":n,style:w,className:p};if(h){var L=h;return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),S&&l.default.createElement(b,{title:e,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),L.base64&&l.default.createElement(v,(0,u.default)({src:L.base64},x)),L.tracedSVG&&l.default.createElement(v,(0,u.default)({src:L.tracedSVG},x)),this.state.isVisible&&l.default.createElement("picture",null,L.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),l.default.createElement(v,{alt:n,title:e,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,u.default)({alt:n,title:e},L))}}))}if(g){var O=g,I=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},o);return"inherit"===o.display&&delete I.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},S&&l.default.createElement(b,{title:e,style:{backgroundColor:S,width:O.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:O.height}}),O.base64&&l.default.createElement(v,(0,u.default)({src:O.base64},x)),O.tracedSVG&&l.default.createElement(v,(0,u.default)({src:O.tracedSVG},x)),this.state.isVisible&&l.default.createElement("picture",null,O.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),l.default.createElement(v,{alt:n,title:e,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,u.default)({alt:n,title:e,width:O.width,height:O.height},O))}}))}return null},e}(l.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),_=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:_,fixed:b,fluid:_,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=y;e.default=S},211:function(t,e,n){(function(n){var r,i;i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}}),t},r=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),r=n.length,i=-1,o="",a=n.charCodeAt(0);++i<r;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=e&&e<=31||127==e||0===i&&48<=e&&e<=57||1===i&&48<=e&&e<=57&&45===a?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+o},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},o=function(e,n,r,i){if(n.emitEvents&&"function"==typeof t.CustomEvent){var o=new CustomEvent(e,{bubbles:!0,detail:{anchor:r,toggle:i}});document.dispatchEvent(o)}};return function(a,s){var u,l,c,d,f={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||o("scrollCancel",u)},animateScroll:function(r,a,s){f.cancelScroll();var l=n(u||e,s||{}),p="[object Number]"===Object.prototype.toString.call(r),h=p||!r.tagName?null:r;if(p||h){var g=t.pageYOffset;l.header&&!c&&(c=document.querySelector(l.header));var m,v,y,b,_,S,w,E,x=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(c),L=p?r:function(e,n,r,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-n-r,0),o&&(a=Math.min(a,i()-t.innerHeight)),a}(h,x,parseInt("function"==typeof l.offset?l.offset(r,a):l.offset,10),l.clip),O=L-g,I=i(),z=0,R=(m=O,y=(v=l).speedAsDuration?v.speed:Math.abs(m/1e3*v.speed),v.durationMax&&y>v.durationMax?v.durationMax:v.durationMin&&y<v.durationMin?v.durationMin:parseInt(y,10)),C=function(e){var n,i,s;b||(b=e),z+=e-b,S=g+O*(i=_=1<(_=0===R?0:z/R)?1:_,"easeInQuad"===(n=l).easing&&(s=i*i),"easeOutQuad"===n.easing&&(s=i*(2-i)),"easeInOutQuad"===n.easing&&(s=i<.5?2*i*i:(4-2*i)*i-1),"easeInCubic"===n.easing&&(s=i*i*i),"easeOutCubic"===n.easing&&(s=--i*i*i+1),"easeInOutCubic"===n.easing&&(s=i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1),"easeInQuart"===n.easing&&(s=i*i*i*i),"easeOutQuart"===n.easing&&(s=1- --i*i*i*i),"easeInOutQuart"===n.easing&&(s=i<.5?8*i*i*i*i:1-8*--i*i*i*i),"easeInQuint"===n.easing&&(s=i*i*i*i*i),"easeOutQuint"===n.easing&&(s=1+--i*i*i*i*i),"easeInOutQuint"===n.easing&&(s=i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i),n.customEasing&&(s=n.customEasing(i)),s||i),t.scrollTo(0,Math.floor(S)),function(e,n){var i,s,u,c=t.pageYOffset;if(e==n||c==n||(g<n&&t.innerHeight+c)>=I)return f.cancelScroll(!0),s=n,u=p,0===(i=r)&&document.body.focus(),u||(i.focus(),document.activeElement!==i&&(i.setAttribute("tabindex","-1"),i.focus(),i.style.outline="none"),t.scrollTo(0,s)),o("scrollStop",l,r,a),!(d=b=null)}(S,L)||(d=t.requestAnimationFrame(C),b=e)};0===t.pageYOffset&&t.scrollTo(0,0),w=r,E=l,p||history.pushState&&E.updateURL&&history.pushState({smoothScroll:JSON.stringify(E),anchor:w.id},document.title,w===document.documentElement?"#top":"#"+w.id),o("scrollStart",l,r,a),f.cancelScroll(!0),t.requestAnimationFrame(C)}}},p=function(e){if(!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(l=e.target.closest(a))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(u.ignore)&&l.hostname===t.location.hostname&&l.pathname===t.location.pathname&&/#/.test(l.href)){var n=r(l.hash),i=u.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(i=i||"#top"!==n?i:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(u),f.animateScroll(i,l))}},h=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(r(history.state.anchor)))||f.animateScroll(e,null,{updateURL:!1})}};return f.destroy=function(){u&&(document.removeEventListener("click",p,!1),t.removeEventListener("popstate",h,!1),f.cancelScroll(),d=c=l=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),u=n(e,s||{}),c=u.header?document.querySelector(u.header):null,document.addEventListener("click",p,!1),u.updateURL&&u.popstate&&t.addEventListener("popstate",h,!1)}(),f}}(i)}.apply(e,[]))||(t.exports=r)}).call(this,n(74))},231:function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}},286:function(t,e,n){var r=n(287);t.exports=function(t){return t&&t.length?r(t):[]}},287:function(t,e,n){var r=n(288),i=n(229),o=n(312),a=n(313),s=n(314),u=n(231),l=200;t.exports=function(t,e,n){var c=-1,d=i,f=t.length,p=!0,h=[],g=h;if(n)p=!1,d=o;else if(f>=l){var m=e?null:s(t);if(m)return u(m);p=!1,d=a,g=new r}else g=e?[]:h;t:for(;++c<f;){var v=t[c],y=e?e(v):v;if(v=n||0!==v?v:0,p&&y==y){for(var b=g.length;b--;)if(g[b]===y)continue t;e&&g.push(y),h.push(v)}else d(g,y,n)||(g!==h&&g.push(y),h.push(v))}return h}},288:function(t,e,n){var r=n(289),i=n(310),o=n(311);function a(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}a.prototype.add=a.prototype.push=i,a.prototype.has=o,t.exports=a},289:function(t,e,n){var r=n(290),i=n(305),o=n(307),a=n(308),s=n(309);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},290:function(t,e,n){var r=n(291),i=n(297),o=n(304);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},291:function(t,e,n){var r=n(292),i=n(293),o=n(294),a=n(295),s=n(296);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},292:function(t,e,n){var r=n(194);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},293:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},294:function(t,e,n){var r=n(194),i="__lodash_hash_undefined__",o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===i?void 0:n}return o.call(e,t)?e[t]:void 0}},295:function(t,e,n){var r=n(194),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}},296:function(t,e,n){var r=n(194),i="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?i:e,this}},297:function(t,e,n){var r=n(298),i=n(299),o=n(301),a=n(302),s=n(303);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=o,u.prototype.has=a,u.prototype.set=s,t.exports=u},298:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},299:function(t,e,n){var r=n(195),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}},300:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},301:function(t,e,n){var r=n(195);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},302:function(t,e,n){var r=n(195);t.exports=function(t){return r(this.__data__,t)>-1}},303:function(t,e,n){var r=n(195);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},304:function(t,e,n){var r=n(185)(n(177),"Map");t.exports=r},305:function(t,e,n){var r=n(196);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},306:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},307:function(t,e,n){var r=n(196);t.exports=function(t){return r(this,t).get(t)}},308:function(t,e,n){var r=n(196);t.exports=function(t){return r(this,t).has(t)}},309:function(t,e,n){var r=n(196);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},310:function(t,e){var n="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,n),this}},311:function(t,e){t.exports=function(t){return this.__data__.has(t)}},312:function(t,e){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}},313:function(t,e){t.exports=function(t,e){return t.has(e)}},314:function(t,e,n){var r=n(315),i=n(223),o=n(231),a=r&&1/o(new r([,-0]))[1]==1/0?function(t){return new r(t)}:i;t.exports=a},315:function(t,e,n){var r=n(185)(n(177),"Set");t.exports=r}}]);
//# sourceMappingURL=11-d09a62ed2f4ce7d4fa7a.js.map