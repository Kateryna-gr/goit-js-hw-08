!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,l=setTimeout(T,t),s?y(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function T(){var e=p();if(O(e))return h(e);l=setTimeout(T,function(e){var n=t-(e-f);return d?m(n,a-(e-c)):n}(e))}function h(e){return l=void 0,v&&o?y(e):(o=i=void 0,u)}function w(){var e=p(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return S(f);if(d)return l=setTimeout(T,t),y(f)}return void 0===l&&(l=setTimeout(T,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},w.flush=function(){return void 0===l?u:h(p())},w}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),O=document.querySelector(".js-email"),T=document.querySelector(".js-message"),h="feedback-form-state",w={storEmail:"",storMessage:""},E=JSON.parse(localStorage.getItem(h));console.log(E),E&&(O.value=E.storEmail,T.value=E.storMessage),S.addEventListener("input",n((function(){console.log("email:",O.value),w.storEmail=O.value,console.log("message:",T.value),w.storMessage=T.value,localStorage.setItem(h,JSON.stringify(w)),console.log(localStorage.getItem(h))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),O.value&&T.value?(console.log({Email:O.value,Message:T.value}),e.currentTarget.reset(),localStorage.removeItem(h)):alert("Незаповнені поля!")}))}();
//# sourceMappingURL=03-feedback.6d2b5255.js.map