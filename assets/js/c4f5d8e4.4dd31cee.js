(self.webpackChunkgastrostock_landingpage=self.webpackChunkgastrostock_landingpage||[]).push([[634],{4042:function(e){e.exports=function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="dist/",t(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=(n(i(1)),i(6)),r=n(a),s=n(i(7)),d=n(i(8)),l=n(i(9)),c=n(i(10)),u=n(i(11)),p=n(i(14)),m=[],f=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return m=(0,u.default)(m,g),(0,c.default)(m,g.once),m},x=function(){m=(0,p.default)(),h()},b=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},v=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},y=function(e){g=o(g,e),m=(0,p.default)();var t=document.all&&!window.atob;return v(g.disable)||t?b():(g.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),"DOMContentLoaded"===g.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?h(!0):"load"===g.startEvent?window.addEventListener(g.startEvent,(function(){h(!0)})):document.addEventListener(g.startEvent,(function(){h(!0)})),window.addEventListener("resize",(0,s.default)(h,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(h,g.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,c.default)(m,g.once)}),g.throttleDelay)),g.disableMutationObserver||d.default.ready("[data-aos]",x),m)};e.exports={init:y,refresh:h,refreshHard:x}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function i(e,t,i){function n(t){var i=g,n=h;return g=h=void 0,A=t,b=e.apply(n,i)}function a(e){return A=e,v=setTimeout(c,t),N?n(e):b}function r(e){var i=t-(e-y);return T?w(i,x-(e-A)):i}function d(e){var i=e-y;return void 0===y||i>=t||i<0||T&&e-A>=x}function c(){var e=k();return d(e)?u(e):void(v=setTimeout(c,r(e)))}function u(e){return v=void 0,S&&g?n(e):(g=h=void 0,b)}function p(){void 0!==v&&clearTimeout(v),A=0,g=y=h=v=void 0}function m(){return void 0===v?b:u(k())}function f(){var e=k(),i=d(e);if(g=arguments,h=this,y=e,i){if(void 0===v)return a(y);if(T)return v=setTimeout(c,t),n(y)}return void 0===v&&(v=setTimeout(c,t)),b}var g,h,x,b,v,y,A=0,N=!1,T=!1,S=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,o(i)&&(N=!!i.leading,x=(T="maxWait"in i)?j(s(i.maxWait)||0,t):x,S="trailing"in i?!!i.trailing:S),f.cancel=p,f.flush=m,f}function n(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(l);return o(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),i(e,t,{leading:a,maxWait:t,trailing:r})}function o(e){var t=void 0===e?"undefined":d(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==(void 0===e?"undefined":d(e))}function r(e){return"symbol"==(void 0===e?"undefined":d(e))||a(e)&&y.call(e)==u}function s(e){if("number"==typeof e)return e;if(r(e))return c;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var i=f.test(e);return i||g.test(e)?h(e.slice(2),i?2:8):m.test(e)?c:+e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",c=NaN,u="[object Symbol]",p=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,g=/^0o[0-7]+$/i,h=parseInt,x="object"==(void 0===t?"undefined":d(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":d(self))&&self&&self.Object===Object&&self,v=x||b||Function("return this")(),y=Object.prototype.toString,j=Math.max,w=Math.min,k=function(){return v.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function i(e,t,i){function o(t){var i=g,n=h;return g=h=void 0,A=t,b=e.apply(n,i)}function a(e){return A=e,v=setTimeout(c,t),N?o(e):b}function s(e){var i=t-(e-k);return T?j(i,x-(e-A)):i}function l(e){var i=e-k;return void 0===k||i>=t||i<0||T&&e-A>=x}function c(){var e=w();return l(e)?u(e):void(v=setTimeout(c,s(e)))}function u(e){return v=void 0,S&&g?o(e):(g=h=void 0,b)}function p(){void 0!==v&&clearTimeout(v),A=0,g=k=h=v=void 0}function m(){return void 0===v?b:u(w())}function f(){var e=w(),i=l(e);if(g=arguments,h=this,k=e,i){if(void 0===v)return a(k);if(T)return v=setTimeout(c,t),o(k)}return void 0===v&&(v=setTimeout(c,t)),b}var g,h,x,b,v,k,A=0,N=!1,T=!1,S=!0;if("function"!=typeof e)throw new TypeError(d);return t=r(t)||0,n(i)&&(N=!!i.leading,x=(T="maxWait"in i)?y(r(i.maxWait)||0,t):x,S="trailing"in i?!!i.trailing:S),f.cancel=p,f.flush=m,f}function n(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function a(e){return"symbol"==(void 0===e?"undefined":s(e))||o(e)&&v.call(e)==c}function r(e){if("number"==typeof e)return e;if(a(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=m.test(e);return i||f.test(e)?g(e.slice(2),i?2:8):p.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",l=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,f=/^0o[0-7]+$/i,g=parseInt,h="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,x="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,b=h||x||Function("return this")(),v=Object.prototype.toString,y=Math.max,j=Math.min,w=function(){return b.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){"use strict";function i(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&i(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!n()}function a(e,t){var i=window.document,o=new(n())(r);s=t,o.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(i(t.concat(n)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:o,ready:a}},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){i(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!s.test(e)&&!d.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t,i){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!i&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,a){i(e,o+n,t)}))};t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(12)),a=function(e,t){return e.forEach((function(e,i){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(13)),a=function(e,t){var i=0,n=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),i=(0,o.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=e.offsetHeight/2;break;case"bottom-bottom":i+=e.offsetHeight;break;case"top-center":i+=a/2;break;case"bottom-center":i+=a/2+e.offsetHeight;break;case"center-center":i+=a/2+e.offsetHeight/2;break;case"top-top":i+=a;break;case"bottom-top":i+=e.offsetHeight+a;break;case"center-top":i+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),i+n};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=i}])},9216:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(6540),o=i(1410);const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var r=i(4042),s=i.n(r),d=i(4848);function l(){return(0,n.useEffect)((()=>{s().init({duration:1e3,once:!0})}),[]),(0,d.jsxs)(o.A,{title:"GastroStock",description:"Optimiza tu inventario con IA",children:[(0,d.jsx)("header",{className:a.hero,style:{paddingTop:"100px",paddingBottom:"150px",backgroundImage:"url(/img/hero-bg.jpg)",backgroundSize:"cover",backgroundPosition:"center"},children:(0,d.jsxs)("div",{className:"container","data-aos":"fade-up",style:{textAlign:"center"},children:[(0,d.jsx)("img",{src:"/img/logo_letras.png",alt:"GastroStock Logo",className:a.logo,style:{width:"250px",marginBottom:"20px"}}),(0,d.jsx)("h1",{children:"Almac\xe9n en orden, \xa1cocina en marcha! \ud83c\udf7d\ufe0f\ud83d\udce6"}),(0,d.jsx)("p",{children:"Optimiza tu inventario, reduce desperdicios y aumenta tus beneficios con GastroStock."}),(0,d.jsx)("div",{className:a.buttons,children:(0,d.jsx)("a",{className:"button button--primary",href:"#contact",children:"Solicita una demo"})})]})}),(0,d.jsx)("section",{className:a.features,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"left",paddingTop:"120px",paddingBottom:"120px"},children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h2",{"data-aos":"fade-right",children:"\xbfPor qu\xe9 elegir GastroStock? \ud83e\udd14"}),(0,d.jsxs)("div",{className:a.grid,children:[(0,d.jsxs)("div",{className:a.feature,"data-aos":"fade-right",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",textAlign:"left"},children:[(0,d.jsx)("img",{src:"/img/ia.jpg",alt:"IA Predictiva",style:{width:"400px",marginBottom:"15px"}}),(0,d.jsx)("h3",{children:"IA Predictiva"}),(0,d.jsx)("p",{children:"Antic\xedpate a la demanda y optimiza compras con inteligencia artificial."})]}),(0,d.jsxs)("div",{className:a.feature,"data-aos":"fade-up","data-aos-delay":"200",style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,d.jsx)("img",{src:"/img/tpv.jpg",alt:"TPV Integrado",style:{width:"400px",marginBottom:"15px"}}),(0,d.jsx)("h3",{children:"TPV Integrado"}),(0,d.jsx)("p",{children:"Gesti\xf3n de cobros y stock en un solo lugar."})]}),(0,d.jsxs)("div",{className:a.feature,"data-aos":"fade-left","data-aos-delay":"400",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right"},children:[(0,d.jsx)("img",{src:"/img/alerta.jpg",alt:"Alertas Inteligentes",style:{width:"400px",marginBottom:"15px"}}),(0,d.jsx)("h3",{children:"Alertas Inteligentes"}),(0,d.jsx)("p",{children:"Recibe avisos antes de que te quedes sin ingredientes clave."})]})]})]})}),(0,d.jsx)("section",{className:a.team,style:{backgroundColor:"#ffffff",textAlign:"center",paddingTop:"120px",paddingBottom:"120px"},children:(0,d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,d.jsx)("h2",{children:"\ud83d\udc68\u200d\ud83d\udcbc Nuestro Equipo"}),(0,d.jsx)("p",{children:"Conoce a las personas que hacen posible GastroStock"}),(0,d.jsx)("div",{className:a.teamGrid,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px",marginTop:"40px"},children:[{title:"Project Manager \ud83d\udc54",members:[{name:"Ra\xfal Toro",role:"",img:"/img/team/raul.jpg"}]},{title:"Relaciones P\xfablicas \ud83d\udcde",members:[{name:"Jes\xfas Salas",role:"TM",img:"/img/team/jesus.jpg"},{name:"Alonso Portillo",role:"",img:"/img/team/alonso.jpg"},{name:"Alexis Molins",role:"",img:"/img/team/alexis.jpg"}]},{title:"Android \ud83d\udcf1",members:[{name:"Carlos Mart\xedn de Prado",role:"TM",img:"/img/team/carlos.jpg"},{name:"\xd3scar Men\xe9ndez",role:"",img:"/img/team/oscar.jpg"},{name:"Lidia Jim\xe9nez",role:"",img:"/img/team/lidia.jpg"},{name:"\xc1lvaro Ruiz",role:"",img:"/img/team/alvaro.jpg"}]},{title:"QA/Testing \ud83e\uddea",members:[{name:"Julio Sol\xeds",role:"TM",img:"/img/team/julio.jpg"},{name:"Mario Zambrano",role:"",img:"/img/team/mario.jpg"}]},{title:"FullStack \ud83d\udcbb",members:[{name:"Alejandro Vargas",role:"TM",img:"/img/team/alejandro.jpg"},{name:"Jos\xe9 Miguel Iborra",role:"",img:"/img/team/josibocon.jpg"},{name:"Ibai P\xe9rez",role:"",img:"/img/team/ibai.jpg"},{name:"Francisco Manuel Sabido",role:"",img:"/img/team/fran.jpg"},{name:"David Vicente",role:"",img:"/img/team/david.jpg"}]},{title:"Inteligencia Artificial \ud83e\udd16",members:[{name:"Pablo Rufi\xe1n",role:"TM",img:"/img/team/pablo.jpg"},{name:"Rafael Molina",role:"",img:"/img/team/rafa.jpg"}]}].map(((e,t)=>(0,d.jsxs)("div",{style:{width:"100%",marginBottom:"40px"},children:[(0,d.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold"},children:e.title}),(0,d.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px",marginTop:"20px"},children:e.members.map(((e,t)=>(0,d.jsxs)("div",{className:a.teamMember,style:{width:"200px",textAlign:"center"},children:[(0,d.jsx)("img",{src:e.img,alt:e.name,style:{width:"180px",height:"180px",objectFit:"cover",borderRadius:"50%",marginBottom:"10px"}}),(0,d.jsx)("h4",{children:e.name}),(0,d.jsx)("p",{children:e.role})]},t)))})]},t)))})]})}),(0,d.jsx)("section",{className:a.testimonials,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"left",paddingTop:"120px",paddingBottom:"120px"},children:(0,d.jsxs)("div",{className:"container","data-aos":"fade-left",style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("img",{src:"/img/mascota.png",alt:"Mascota GastroStock",className:a.mascota,style:{width:"300px",marginRight:"30px"}}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Lo que dicen nuestros clientes \u2b50"}),(0,d.jsxs)("div",{className:a.testimonial,children:[(0,d.jsx)("p",{children:'"Desde que usamos GastroStock, nuestro desperdicio ha bajado un 30% y siempre sabemos qu\xe9 comprar."'}),(0,d.jsx)("h4",{children:"- Restaurante La Parrilla"})]}),(0,d.jsxs)("div",{className:a.testimonial,children:[(0,d.jsx)("p",{children:'"El TPV integrado nos ha ahorrado mucho tiempo y nos permite controlar las ventas y el stock en tiempo real."'}),(0,d.jsx)("h4",{children:"- Bar El Buen Sabor"})]})]})]})}),(0,d.jsx)("section",{className:a.comparisonTable,style:{backgroundColor:"#ffffff",textAlign:"center",paddingTop:"120px",paddingBottom:"120px"},children:(0,d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,d.jsx)("h2",{children:"\ud83d\udcca \xbfEn qu\xe9 se diferencia GastroStock?"}),(0,d.jsxs)("table",{style:{width:"100%",maxWidth:"500px",margin:"0 auto",borderCollapse:"collapse",background:"#a92e4f",color:"#fff",borderRadius:"10px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"},children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{style:{background:"#000",color:"white"},children:[(0,d.jsx)("th",{style:{padding:"15px",textAlign:"center",width:"40%"},children:"Caracter\xedstica"}),(0,d.jsx)("th",{style:{padding:"15px",textAlign:"center",width:"30%"},children:"GastroStock"}),(0,d.jsx)("th",{style:{padding:"15px",textAlign:"center",width:"30%"},children:"Otras soluciones"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{style:{background:"#a92e4f"},children:[(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\ud83e\udde0 IA predictiva"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\u2705 S\xed"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\u274c No"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\ud83d\udd14 Alertas personalizadas"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\u2705 S\xed"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\ud83d\udd36 Parcial"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\ud83d\udce6 Reabastecimiento y control de p\xe9rdidas"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\u2705 S\xed"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\u274c No"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\ud83d\udd2e Predicci\xf3n de oferta y demanda"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\u2705 S\xed"}),(0,d.jsx)("td",{style:{padding:"15px",textAlign:"center",borderBottom:"1px solid #ddd"},children:"\u274c No"})]})]})]})]})}),(0,d.jsx)("section",{className:a.pricing,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"center",paddingTop:"120px",paddingBottom:"120px"},children:(0,d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,d.jsx)("h2",{children:"\ud83d\udcb0 Elige tu plan"}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"40px"},children:[(0,d.jsxs)("div",{style:{background:"white",color:"#000",padding:"20px",borderRadius:"10px",width:"30%"},children:[(0,d.jsx)("h3",{children:"FREE"}),(0,d.jsx)("p",{children:"\ud83d\udcb5 Gratis"}),(0,d.jsx)("p",{children:"\u2714 Gesti\xf3n de stock b\xe1sico"}),(0,d.jsx)("p",{children:"\u2714 Gesti\xf3n de la oferta y demanda b\xe1sico"}),(0,d.jsx)("p",{children:"\u2714 Gesti\xf3n de la base de datos b\xe1sico"})]}),(0,d.jsxs)("div",{style:{background:"white",color:"#000",padding:"20px",borderRadius:"10px",width:"30%"},children:[(0,d.jsx)("h3",{children:"PREMIUM"}),(0,d.jsx)("p",{children:"\ud83d\udcb5 25\u20ac/mes"}),(0,d.jsx)("p",{children:"\u2714 Gesti\xf3n de stock con implementaci\xf3n de IA"}),(0,d.jsx)("p",{children:"\u2714 Gesti\xf3n de proveedores"}),(0,d.jsx)("p",{children:"\u2714 Mejora significativa de las funciones FREE"})]})]})]})}),(0,d.jsx)("section",{className:a.social,style:{backgroundColor:"#ffffff",textAlign:"center",paddingTop:"120px",paddingBottom:"120px"},children:(0,d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,d.jsx)("h2",{children:"\xa1S\xedguenos en redes sociales! \ud83d\udcf1"}),(0,d.jsx)("p",{children:"Con\xe9ctate con nosotros en Instagram y TikTok para m\xe1s novedades."}),(0,d.jsxs)("div",{className:a.qrContainer,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"50px"},children:[(0,d.jsx)("img",{src:"/img/qr_insta.png",alt:"QR Instagram",className:a.qr,style:{width:"100px",marginRight:"15px"}}),(0,d.jsx)("div",{className:a.qrArrow,children:(0,d.jsx)("svg",{width:"50",height:"20",viewBox:"0 0 50 20",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0 10h40l-5-5m5 5l-5 5",stroke:"black",strokeWidth:"3",fill:"none"})})}),(0,d.jsx)("p",{children:"Instagram"})]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("img",{src:"/img/qr_tiktok.png",alt:"QR TikTok",className:a.qr,style:{width:"100px",marginRight:"15px"}}),(0,d.jsx)("div",{className:a.qrArrow,children:(0,d.jsx)("svg",{width:"50",height:"20",viewBox:"0 0 50 20",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0 10h40l-5-5m5 5l-5 5",stroke:"black",strokeWidth:"3",fill:"none"})})}),(0,d.jsx)("p",{children:"TikTok"})]})]})]})}),(0,d.jsx)("section",{id:"contact",className:a.contact,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"center",paddingTop:"120px",paddingBottom:"120px"},children:(0,d.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,d.jsx)("h2",{children:"\ud83d\udce9 \xbfTienes dudas? Cont\xe1ctanos"}),(0,d.jsxs)("form",{style:{maxWidth:"500px",margin:"0 auto"},children:[(0,d.jsx)("input",{type:"text",placeholder:"Tu nombre",required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px"}}),(0,d.jsx)("input",{type:"email",placeholder:"Tu correo",required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px"}}),(0,d.jsx)("textarea",{placeholder:"Tu mensaje",required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px"}}),(0,d.jsx)("button",{type:"submit",style:{padding:"10px 20px",cursor:"pointer"},children:"Enviar"})]})]})})]})}}}]);