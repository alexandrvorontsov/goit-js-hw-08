function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(t,e,n){var i,r,o,f,u,a,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=i,o=r;return i=r=void 0,c=e,f=t.apply(o,n)}function j(t){return c=t,u=setTimeout(h,e),l?y(t):f}function T(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=o}function h(){var t=p();if(T(t))return w(t);u=setTimeout(h,function(t){var n=e-(t-a);return s?v(n,o-(t-c)):n}(t))}function w(t){return u=void 0,m&&i?y(t):(i=r=void 0,f)}function O(){var t=p(),n=T(t);if(i=arguments,r=this,a=t,n){if(void 0===u)return j(a);if(s)return u=setTimeout(h,e),y(a)}return void 0===u&&(u=setTimeout(h,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=r=u=void 0},O.flush=function(){return void 0===u?f:w(p())},O}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(t,e,{leading:i,maxWait:e,trailing:r})};const y=document.querySelector(".feedback-form"),j={};y.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));if(t)for(const e in t)y.elements[e].value=t[e]}();
//# sourceMappingURL=03-feedback.f02059f0.js.map
