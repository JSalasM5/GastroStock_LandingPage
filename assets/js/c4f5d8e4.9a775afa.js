(self.webpackChunkgastrostock_landingpage=self.webpackChunkgastrostock_landingpage||[]).push([[634],{4042:function(e){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=(i(n(1)),n(6)),r=i(o),s=i(n(7)),c=i(n(8)),d=i(n(9)),l=i(n(10)),u=i(n(11)),m=i(n(14)),p=[],f=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return p=(0,u.default)(p,g),(0,l.default)(p,g.once),p},b=function(){p=(0,m.default)(),h()},x=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},v=function(e){return!0===e||"mobile"===e&&d.default.mobile()||"phone"===e&&d.default.phone()||"tablet"===e&&d.default.tablet()||"function"==typeof e&&!0===e()},y=function(e){g=a(g,e),p=(0,m.default)();var t=document.all&&!window.atob;return v(g.disable)||t?x():(g.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),"DOMContentLoaded"===g.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?h(!0):"load"===g.startEvent?window.addEventListener(g.startEvent,(function(){h(!0)})):document.addEventListener(g.startEvent,(function(){h(!0)})),window.addEventListener("resize",(0,s.default)(h,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(h,g.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,l.default)(p,g.once)}),g.throttleDelay)),g.disableMutationObserver||c.default.ready("[data-aos]",b),p)};e.exports={init:y,refresh:h,refreshHard:b}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=g,i=h;return g=h=void 0,S=t,x=e.apply(i,n)}function o(e){return S=e,v=setTimeout(l,t),_?i(e):x}function r(e){var n=t-(e-y);return P?w(n,b-(e-S)):n}function c(e){var n=e-y;return void 0===y||n>=t||n<0||P&&e-S>=b}function l(){var e=k();return c(e)?u(e):void(v=setTimeout(l,r(e)))}function u(e){return v=void 0,A&&g?i(e):(g=h=void 0,x)}function m(){void 0!==v&&clearTimeout(v),S=0,g=y=h=v=void 0}function p(){return void 0===v?x:u(k())}function f(){var e=k(),n=c(e);if(g=arguments,h=this,y=e,n){if(void 0===v)return o(y);if(P)return v=setTimeout(l,t),i(y)}return void 0===v&&(v=setTimeout(l,t)),x}var g,h,b,x,v,y,S=0,_=!1,P=!1,A=!0;if("function"!=typeof e)throw new TypeError(d);return t=s(t)||0,a(n)&&(_=!!n.leading,b=(P="maxWait"in n)?j(s(n.maxWait)||0,t):b,A="trailing"in n?!!n.trailing:A),f.cancel=m,f.flush=p,f}function i(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(d);return a(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),n(e,t,{leading:o,maxWait:t,trailing:r})}function a(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function r(e){return"symbol"==(void 0===e?"undefined":c(e))||o(e)&&y.call(e)==u}function s(e){if("number"==typeof e)return e;if(r(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=f.test(e);return n||g.test(e)?h(e.slice(2),n?2:8):p.test(e)?l:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",l=NaN,u="[object Symbol]",m=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,g=/^0o[0-7]+$/i,h=parseInt,b="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,x="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,v=b||x||Function("return this")(),y=Object.prototype.toString,j=Math.max,w=Math.min,k=function(){return v.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function a(t){var n=g,i=h;return g=h=void 0,S=t,x=e.apply(i,n)}function o(e){return S=e,v=setTimeout(l,t),_?a(e):x}function s(e){var n=t-(e-k);return P?j(n,b-(e-S)):n}function d(e){var n=e-k;return void 0===k||n>=t||n<0||P&&e-S>=b}function l(){var e=w();return d(e)?u(e):void(v=setTimeout(l,s(e)))}function u(e){return v=void 0,A&&g?a(e):(g=h=void 0,x)}function m(){void 0!==v&&clearTimeout(v),S=0,g=k=h=v=void 0}function p(){return void 0===v?x:u(w())}function f(){var e=w(),n=d(e);if(g=arguments,h=this,k=e,n){if(void 0===v)return o(k);if(P)return v=setTimeout(l,t),a(k)}return void 0===v&&(v=setTimeout(l,t)),x}var g,h,b,x,v,k,S=0,_=!1,P=!1,A=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,i(n)&&(_=!!n.leading,b=(P="maxWait"in n)?y(r(n.maxWait)||0,t):b,A="trailing"in n?!!n.trailing:A),f.cancel=m,f.flush=p,f}function i(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function o(e){return"symbol"==(void 0===e?"undefined":s(e))||a(e)&&v.call(e)==l}function r(e){if("number"==typeof e)return e;if(o(e))return d;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=p.test(e);return n||f.test(e)?g(e.slice(2),n?2:8):m.test(e)?d:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",d=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,f=/^0o[0-7]+$/i,g=parseInt,h="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,x=h||b||Function("return this")(),v=Object.prototype.toString,y=Math.max,j=Math.min,w=function(){return x.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((i=e[t]).dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!i()}function o(e,t){var n=window.document,a=new(i())(r);s=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(i)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:a,ready:o}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function e(){n(this,e)}return a(e,[{key:"phone",value:function(){var e=i();return!(!o.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new d},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,o){n(e,a+i,t)}))};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(12)),o=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=o},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(13)),o=function(e,t){var n=0,i=0,o=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(i=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,a.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+e.offsetHeight;break;case"center-center":n+=o/2+e.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=e.offsetHeight+o;break;case"center-top":n+=e.offsetHeight/2+o}return r.anchorPlacement||r.offset||isNaN(t)||(i=t),n+i};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},9216:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var i=n(6540),a=n(1410);const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var r=n(4042),s=n.n(r),c=n(4848);function d(){return(0,i.useEffect)((()=>{s().init({duration:1e3,once:!0})}),[]),(0,c.jsxs)(a.A,{title:"GastroStock",description:"Optimiza tu inventario con IA",children:[(0,c.jsx)("style",{children:"\n          html, body {\n            overflow-x: hidden;\n            max-width: 100%;\n            width: 100%;\n          }\n\n          .container {\n            max-width: 100%;\n            width: 100%;\n            box-sizing: border-box;\n          }\n\n          * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n          }\n        "}),(0,c.jsx)("header",{className:o.hero,style:{paddingTop:"100px",paddingBottom:"150px",backgroundImage:"url(/img/hero-bg.jpg)",backgroundSize:"cover",backgroundPosition:"center"},children:(0,c.jsxs)("div",{className:"container","data-aos":"fade-up",style:{textAlign:"center"},children:[(0,c.jsx)("img",{src:"/GastroStock_LandingPage/img/logo_letras.png",alt:"Logo Letras GastroStock",style:{maxWidth:"100%",height:"auto"}}),(0,c.jsx)("h1",{children:"Almac\xe9n en orden, \xa1cocina en marcha! \ud83c\udf7d\ufe0f\ud83d\udce6"}),(0,c.jsx)("p",{children:"Optimiza tu inventario, reduce desperdicios y aumenta tus beneficios con GastroStock."}),(0,c.jsx)("div",{className:o.buttons,children:(0,c.jsx)("a",{className:"button button--primary",href:"#contact",children:"Solicita una demo"})})]})}),(0,c.jsx)("section",{className:o.features,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"center",padding:"120px 0"},children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h2",{"data-aos":"fade-right",children:"\xbfPor qu\xe9 elegir GastroStock? \ud83e\udd14"}),(0,c.jsx)("div",{className:o.grid,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"},children:[{title:"IA Predictiva",text:"Antic\xedpate a la demanda y optimiza compras con inteligencia artificial.",img:"/GastroStock_LandingPage/img/ia.jpg"},{title:"TPV Integrado",text:"Gesti\xf3n de cobros y stock en un solo lugar.",img:"/GastroStock_LandingPage/img/tpv.jpg"},{title:"Alertas Inteligentes",text:"Recibe avisos antes de que te quedes sin ingredientes clave.",img:"/GastroStock_LandingPage/img/alerta.jpg"}].map(((e,t)=>(0,c.jsxs)("div",{className:o.feature,"data-aos":"fade-up",style:{flex:"1 1 300px",textAlign:"center"},children:[(0,c.jsx)("img",{src:e.img,alt:e.title,style:{maxWidth:"100%",height:"auto",borderRadius:"10px"}}),(0,c.jsx)("h3",{children:e.title}),(0,c.jsx)("p",{children:e.text})]},t)))})]})}),(0,c.jsx)("section",{className:o.team,style:{backgroundColor:"#ffffff",textAlign:"center",padding:"120px 0"},children:(0,c.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,c.jsx)("h2",{children:"\ud83d\udc68\u200d\ud83d\udcbc Nuestro Equipo"}),(0,c.jsx)("p",{children:"Conoce a las personas que hacen posible GastroStock"}),(0,c.jsx)("div",{className:o.teamGrid,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px",marginTop:"40px"},children:[{title:"Project Manager \ud83d\udc54",members:[{name:"Ra\xfal Toro",role:"",img:"/GastroStock_LandingPage/img/team/raul.jpg"}]},{title:"Relaciones P\xfablicas \ud83d\udcde",members:[{name:"Jes\xfas Salas",role:"TM",img:"/GastroStock_LandingPage/img/team/jesus.jpg"},{name:"Alonso Portillo",role:"",img:"/GastroStock_LandingPage/img/team/alonso.jpg"},{name:"Alexis Molins",role:"",img:"/GastroStock_LandingPage/img/team/alexis.jpg"}]},{title:"Android \ud83d\udcf1",members:[{name:"Carlos Mart\xedn de Prado",role:"TM",img:"/GastroStock_LandingPage/img/team/carlos.jpg"},{name:"\xd3scar Men\xe9ndez",role:"",img:"/GastroStock_LandingPage/img/team/oscar.jpg"},{name:"Lidia Jim\xe9nez",role:"",img:"/GastroStock_LandingPage/img/team/lidia.jpg"},{name:"\xc1lvaro Ruiz",role:"",img:"/GastroStock_LandingPage/img/team/alvaro.jpg"}]},{title:"QA/Testing \ud83e\uddea",members:[{name:"Julio Sol\xeds",role:"TM",img:"/GastroStock_LandingPage/img/team/julio.jpg"},{name:"Mario Zambrano",role:"",img:"/GastroStock_LandingPage/img/team/mario.jpg"}]},{title:"FullStack \ud83d\udcbb",members:[{name:"Alejandro Vargas",role:"TM",img:"/GastroStock_LandingPage/img/team/alejandro.jpg"},{name:"Jos\xe9 Miguel Iborra",role:"",img:"/GastroStock_LandingPage/img/team/josibocon.jpg"},{name:"Ibai P\xe9rez",role:"",img:"/GastroStock_LandingPage/img/team/ibai.jpg"},{name:"Francisco Manuel Sabido",role:"",img:"/GastroStock_LandingPage/img/team/fran.jpg"},{name:"David Vicente",role:"",img:"/GastroStock_LandingPage/img/team/david.jpg"}]},{title:"Inteligencia Artificial \ud83e\udd16",members:[{name:"Pablo Rufi\xe1n",role:"TM",img:"/GastroStock_LandingPage/img/team/pablo.jpg"},{name:"Rafael Molina",role:"",img:"/GastroStock_LandingPage/img/team/rafa.jpg"}]}].map(((e,t)=>(0,c.jsxs)("div",{style:{width:"100%",marginBottom:"40px"},children:[(0,c.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold"},children:e.title}),(0,c.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px",marginTop:"20px"},children:e.members.map(((e,t)=>(0,c.jsxs)("div",{className:o.teamMember,style:{width:"200px",textAlign:"center"},children:[(0,c.jsx)("img",{src:e.img,alt:e.name,style:{width:"150px",height:"150px",objectFit:"cover",borderRadius:"50%"}}),(0,c.jsx)("h4",{children:e.name}),(0,c.jsx)("p",{children:e.role})]},t)))})]},t)))})]})}),(0,c.jsx)("section",{className:o.testimonials,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"center",padding:"120px 0"},children:(0,c.jsxs)("div",{className:"container","data-aos":"fade-left",style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",textAlign:"center",gap:"30px"},children:[(0,c.jsx)("img",{src:"/GastroStock_LandingPage/img/mascota.png",alt:"Mascota GastroStock",className:o.mascota,style:{width:"250px",maxWidth:"100%"}}),(0,c.jsxs)("div",{style:{maxWidth:"600px"},children:[(0,c.jsx)("h2",{children:"Lo que dicen nuestros clientes \u2b50"}),(0,c.jsxs)("div",{className:o.testimonial,style:{marginTop:"20px"},children:[(0,c.jsx)("p",{children:'"Desde que usamos GastroStock, nuestro desperdicio ha bajado un 30% y siempre sabemos qu\xe9 comprar."'}),(0,c.jsx)("h4",{children:"- Restaurante La Parrilla"})]}),(0,c.jsxs)("div",{className:o.testimonial,style:{marginTop:"20px"},children:[(0,c.jsx)("p",{children:'"El TPV integrado nos ha ahorrado mucho tiempo y nos permite controlar las ventas y el stock en tiempo real."'}),(0,c.jsx)("h4",{children:"- Bar El Buen Sabor"})]})]})]})}),(0,c.jsx)("section",{className:o.comparisonSection,style:{backgroundColor:"#ffffff",textAlign:"center",padding:"120px 0"},children:(0,c.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,c.jsx)("h2",{children:"\ud83d\udcca \xbfEn qu\xe9 se diferencia GastroStock?"}),(0,c.jsx)("p",{children:"Beneficios exclusivos que ofrecemos a nuestros clientes."}),(0,c.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"40px",marginTop:"40px"},children:[(0,c.jsxs)("div",{style:{background:"#a92e4f",color:"white",padding:"20px",borderRadius:"10px",width:"350px",textAlign:"center",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"},children:[(0,c.jsx)("h3",{children:"\u2705 GastroStock"}),(0,c.jsxs)("ul",{style:{listStyle:"none",padding:"0"},children:[(0,c.jsx)("li",{children:"\u2714 IA predictiva"}),(0,c.jsx)("li",{children:"\u2714 Alertas personalizadas e inteligentes"}),(0,c.jsx)("li",{children:"\u2714 Control sobre el reabastecimiento y control de p\xe9rdidas"}),(0,c.jsx)("li",{children:"\u2714 Predicci\xf3n de oferta y demanda y planificaci\xf3n de pedidos"})]})]}),(0,c.jsxs)("div",{style:{background:"#666",color:"white",padding:"20px",borderRadius:"10px",width:"350px",textAlign:"center",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"},children:[(0,c.jsx)("h3",{children:"\u274c Otras Soluciones"}),(0,c.jsxs)("ul",{style:{listStyle:"none",padding:"0"},children:[(0,c.jsx)("li",{children:"\u2716 Sin IA predictiva"}),(0,c.jsx)("li",{children:"\u2716 Alertas personalizadas, pero b\xe1sicas"}),(0,c.jsx)("li",{children:"\u2716 Sin control eficiente de p\xe9rdidas y reabastecimiento"}),(0,c.jsx)("li",{children:"\u2716 No predicen la demanda ni ayudan a planificar pedidos"})]})]})]})]})}),(0,c.jsx)("section",{className:o.pricing,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"center",padding:"120px 0"},children:(0,c.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,c.jsx)("h2",{children:"\ud83d\udcb0 Elige tu plan"}),(0,c.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"},children:[(0,c.jsxs)("div",{style:{background:"white",color:"#000",padding:"30px",borderRadius:"10px",width:"300px"},children:[(0,c.jsx)("h3",{children:"FREE"}),(0,c.jsx)("p",{children:"\ud83d\udcb5 Gratis"}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"\u2714 Gesti\xf3n de stock b\xe1sico"})," \u2192 Permite registrar manualmente entradas y salidas de productos, ayudando a controlar el inventario sin automatizaci\xf3n."]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"\u2714 Gesti\xf3n de la oferta y demanda b\xe1sico"})," \u2192 Ofrece estad\xedsticas b\xe1sicas sobre consumo y disponibilidad de productos sin predicci\xf3n avanzada."]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"\u2714 Gesti\xf3n de la base de datos b\xe1sico"})," \u2192 Permite almacenar y consultar informaci\xf3n esencial sobre productos y proveedores con funcionalidades limitadas."]})]}),(0,c.jsxs)("div",{style:{background:"white",color:"#000",padding:"30px",borderRadius:"10px",width:"300px"},children:[(0,c.jsx)("h3",{children:"PREMIUM"}),(0,c.jsx)("p",{children:"\ud83d\udcb5 25\u20ac/mes"}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"\u2714 Gesti\xf3n de stock con implementaci\xf3n de IA"})," \u2192 Automatiza el control del inventario, reduciendo desperdicios y optimizando las compras bas\xe1ndose en patrones de consumo."]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"\u2714 Gesti\xf3n de proveedores"})," \u2192 Permite registrar m\xfaltiples proveedores, gestionar pedidos y recibir alertas sobre los mejores momentos para abastecerse."]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"\u2714 Mejora significativa de las funciones FREE"})," \u2192 Incluye herramientas avanzadas como informes detallados y recomendaciones de compra basado en predicci\xf3n, todo ello con la mejora y ayuda de nuestra IA para maximizar la automatizaci\xf3n y la optimizaci\xf3n."]})]})]})]})}),(0,c.jsx)("section",{className:o.social,style:{backgroundColor:"#ffffff",textAlign:"center",padding:"120px 0"},children:(0,c.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,c.jsx)("h2",{children:"\xa1S\xedguenos en redes sociales! \ud83d\udcf1"}),(0,c.jsx)("p",{children:"Con\xe9ctate con nosotros en Instagram y TikTok para m\xe1s novedades."}),(0,c.jsxs)("div",{className:o.qrContainer,style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"30px",marginTop:"40px"},children:[(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[(0,c.jsx)("img",{src:"/GastroStock_LandingPage/img/qr_insta.png",alt:"QR Instagram",className:o.qr,style:{width:"120px",maxWidth:"100%"}}),(0,c.jsx)("div",{className:o.qrArrow,children:(0,c.jsx)("svg",{width:"50",height:"20",viewBox:"0 0 50 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M0 10h40l-5-5m5 5l-5 5",stroke:"black",strokeWidth:"3",fill:"none"})})}),(0,c.jsx)("p",{children:"Instagram"})]}),(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[(0,c.jsx)("img",{src:"/GastroStock_LandingPage/img/qr_tiktok.png",alt:"QR TikTok",className:o.qr,style:{width:"120px",maxWidth:"100%"}}),(0,c.jsx)("div",{className:o.qrArrow,children:(0,c.jsx)("svg",{width:"50",height:"20",viewBox:"0 0 50 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M0 10h40l-5-5m5 5l-5 5",stroke:"black",strokeWidth:"3",fill:"none"})})}),(0,c.jsx)("p",{children:"TikTok"})]})]})]})}),(0,c.jsx)("section",{id:"contact",className:o.contact,style:{backgroundColor:"#a92e4f",color:"white",textAlign:"center",padding:"120px 0"},children:(0,c.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,c.jsx)("h2",{children:"\ud83d\udce9 \xbfTienes dudas? Cont\xe1ctanos"}),(0,c.jsxs)("form",{style:{maxWidth:"500px",margin:"0 auto"},children:[(0,c.jsx)("input",{type:"text",placeholder:"Tu nombre",required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px"}}),(0,c.jsx)("input",{type:"email",placeholder:"Tu correo",required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px"}}),(0,c.jsx)("textarea",{placeholder:"Tu mensaje",required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px"}}),(0,c.jsx)("button",{type:"submit",style:{padding:"10px 20px",cursor:"pointer"},children:"Enviar"})]})]})})]})}}}]);