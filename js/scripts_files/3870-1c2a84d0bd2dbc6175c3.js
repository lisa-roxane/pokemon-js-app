(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3870],{57221:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(19013),i=r(13882);function o(t,e){(0,i.Z)(2,arguments);var r=(0,n.Z)(t),o=(0,n.Z)(e);return r.getTime()-o.getTime()}function s(t,e){(0,i.Z)(2,arguments);var r=o(t,e)/1e3;return r>0?Math.floor(r):Math.ceil(r)}},36502:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var n=r(49474),i=r(19013),o=r(13882);function s(t,e){(0,o.Z)(2,arguments);var r=(0,i.Z)(t),n=(0,i.Z)(e),s=r.getFullYear()-n.getFullYear(),a=r.getMonth()-n.getMonth();return 12*s+a}function a(t){(0,o.Z)(1,arguments);var e=(0,i.Z)(t);return e.setHours(23,59,59,999),e}function u(t){(0,o.Z)(1,arguments);var e=(0,i.Z)(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function c(t){(0,o.Z)(1,arguments);var e=(0,i.Z)(t);return a(e).getTime()===u(e).getTime()}function f(t,e){(0,o.Z)(2,arguments);var r,a=(0,i.Z)(t),u=(0,i.Z)(e),f=(0,n.Z)(a,u),l=Math.abs(s(a,u));if(l<1)r=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-f*l);var h=(0,n.Z)(a,u)===-f;c((0,i.Z)(t))&&1===l&&1===(0,n.Z)(t,u)&&(h=!1),r=f*(l-h)}return 0===r?0:r}var l=r(57221),h=r(4958),d=r(74385),p=r(24262),g=1440,v=43200;function b(t,e,r){(0,o.Z)(2,arguments);var s=r||{},a=s.locale||h.Z;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=(0,n.Z)(t,e);if(isNaN(u))throw new RangeError("Invalid time value");var c,b,m=(0,d.Z)(s);m.addSuffix=Boolean(s.addSuffix),m.comparison=u,u>0?(c=(0,i.Z)(e),b=(0,i.Z)(t)):(c=(0,i.Z)(t),b=(0,i.Z)(e));var y,x=(0,l.Z)(b,c),E=((0,p.Z)(b)-(0,p.Z)(c))/1e3,M=Math.round((x-E)/60);if(M<2)return s.includeSeconds?x<5?a.formatDistance("lessThanXSeconds",5,m):x<10?a.formatDistance("lessThanXSeconds",10,m):x<20?a.formatDistance("lessThanXSeconds",20,m):x<40?a.formatDistance("halfAMinute",null,m):x<60?a.formatDistance("lessThanXMinutes",1,m):a.formatDistance("xMinutes",1,m):0===M?a.formatDistance("lessThanXMinutes",1,m):a.formatDistance("xMinutes",M,m);if(M<45)return a.formatDistance("xMinutes",M,m);if(M<90)return a.formatDistance("aboutXHours",1,m);if(M<g){var _=Math.round(M/60);return a.formatDistance("aboutXHours",_,m)}if(M<2520)return a.formatDistance("xDays",1,m);if(M<v){var w=Math.round(M/g);return a.formatDistance("xDays",w,m)}if(M<86400)return y=Math.round(M/v),a.formatDistance("aboutXMonths",y,m);if((y=f(b,c))<12){var k=Math.round(M/v);return a.formatDistance("xMonths",k,m)}var O=y%12,C=Math.floor(y/12);return O<3?a.formatDistance("aboutXYears",C,m):O<9?a.formatDistance("overXYears",C,m):a.formatDistance("almostXYears",C+1,m)}},76884:function(t,e,r){var n="[object Symbol]",i=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s="\\u0300-\\u036f\\ufe20-\\ufe23",a="\\u2700-\\u27bf",u="a-z\\xdf-\\xf6\\xf8-\\xff",c="A-Z\\xc0-\\xd6\\xd8-\\xde",f="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="['\u2019]",h="[\\ud800-\\udfff]",d="["+f+"]",p="["+s+"\\u20d0-\\u20f0]",g="\\d+",v="[\\u2700-\\u27bf]",b="["+u+"]",m="[^\\ud800-\\udfff"+f+g+a+u+c+"]",y="\\ud83c[\\udffb-\\udfff]",x="[^\\ud800-\\udfff]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",_="["+c+"]",w="(?:"+b+"|"+m+")",k="(?:"+_+"|"+m+")",O="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",C="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",j="(?:"+p+"|"+y+")"+"?",Z="[\\ufe0e\\ufe0f]?",T=Z+j+("(?:\\u200d(?:"+[x,E,M].join("|")+")"+Z+j+")*"),D="(?:"+[v,E,M].join("|")+")"+T,A="(?:"+[x+p+"?",p,E,M,h].join("|")+")",P=RegExp(l,"g"),R=RegExp(p,"g"),L=RegExp(y+"(?="+y+")|"+A+T,"g"),S=RegExp([_+"?"+b+"+"+O+"(?="+[d,_,"$"].join("|")+")",k+"+"+C+"(?="+[d,_+w,"$"].join("|")+")",_+"?"+w+"+"+O,_+"+"+C,g,D].join("|"),"g"),W=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,q="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,I="object"==typeof self&&self&&self.Object===Object&&self,X=q||I||Function("return this")();var Y,z=(Y={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"ss"},function(t){return null==Y?void 0:Y[t]});function U(t){return W.test(t)}function H(t){return U(t)?function(t){return t.match(L)||[]}(t):function(t){return t.split("")}(t)}var F=Object.prototype.toString,J=X.Symbol,K=J?J.prototype:void 0,B=K?K.toString:void 0;function G(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&F.call(t)==n}(t))return B?B.call(t):"";var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}function $(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(r=r>i?i:r)<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}(t,e,r)}function V(t){return null==t?"":G(t)}var Q,tt=(Q=function(t,e,r){return e=e.toLowerCase(),t+(r?rt(V(e).toLowerCase()):e)},function(t){return function(t,e,r,n){var i=-1,o=t?t.length:0;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}(function(t,e,r){return t=V(t),void 0===(e=r?void 0:e)?function(t){return N.test(t)}(t)?function(t){return t.match(S)||[]}(t):function(t){return t.match(i)||[]}(t):t.match(e)||[]}(function(t){return(t=V(t))&&t.replace(o,z).replace(R,"")}(t).replace(P,"")),Q,"")});var et,rt=(et="toUpperCase",function(t){var e=U(t=V(t))?H(t):void 0,r=e?e[0]:t.charAt(0),n=e?$(e,1).join(""):t.slice(1);return r[et]()+n});t.exports=tt},18454:function(t,e,r){"use strict";var n=r(67294),i=r(45697),o=Math.sqrt(2);function s(t){var e="top"===t.direction||"bottom"===t.direction,r="left"===t.direction||"top"===t.direction,i=t.borderWidth*o,s=i/2,a=2*t.size+2*i,u=t.size+i,c=r?u:0,f=r?s:u-s,l=a/2,h=a-s,d=e?["M",s,c,"L",l,f,"L",h,c]:["M",c,s,"L",f,l,"L",c,h];return n.createElement("svg",{xmlns:"http://www.w3.org/svg/2000",width:e?a:u,height:e?u:a,style:t.style,className:t.className},n.createElement("path",{d:d.join(" "),fill:t.color,stroke:t.borderColor,strokeWidth:t.borderWidth,strokeLinecap:"square"}))}s.propTypes={color:i.string.isRequired,size:i.number.isRequired,direction:i.oneOf(["top","right","bottom","left"]).isRequired,borderWidth:i.number,borderColor:i.string,style:i.object,className:i.string},s.defaultProps={borderWidth:0,borderColor:"transparent"},t.exports=s},23680:function(t,e,r){"use strict";var n=r(25108);Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.create=function(t){return{dispose:t}}}(e.Disposable||(e.Disposable={})),function(t){var e={dispose:function(){}};t.None=function(){return e}}(e.Event||(e.Event={}));var i=function(){function t(){}return t.prototype.add=function(t,e,r){var n=this;void 0===e&&(e=null),this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(t),this._contexts.push(e),Array.isArray(r)&&r.push({dispose:function(){return n.remove(t,e)}})},t.prototype.remove=function(t,e){if(void 0===e&&(e=null),this._callbacks){for(var r=!1,n=0,i=this._callbacks.length;n<i;n++)if(this._callbacks[n]===t){if(this._contexts[n]===e)return this._callbacks.splice(n,1),void this._contexts.splice(n,1);r=!0}if(r)throw new Error("When adding a listener with a context, you should remove it with the same context")}},t.prototype.invoke=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!this._callbacks)return[];for(var r=[],i=this._callbacks.slice(0),o=this._contexts.slice(0),s=0,a=i.length;s<a;s++)try{r.push(i[s].apply(o[s],t))}catch(u){n.error(u)}return r},t.prototype.isEmpty=function(){return!this._callbacks||0===this._callbacks.length},t.prototype.dispose=function(){this._callbacks=void 0,this._contexts=void 0},t}(),o=function(){function t(t){this._options=t}return Object.defineProperty(t.prototype,"event",{get:function(){var e=this;return this._event||(this._event=function(r,n,o){var s;return e._callbacks||(e._callbacks=new i),e._options&&e._options.onFirstListenerAdd&&e._callbacks.isEmpty()&&e._options.onFirstListenerAdd(e),e._callbacks.add(r,n),s={dispose:function(){e._callbacks.remove(r,n),s.dispose=t._noop,e._options&&e._options.onLastListenerRemove&&e._callbacks.isEmpty()&&e._options.onLastListenerRemove(e)}},Array.isArray(o)&&o.push(s),s}),this._event},enumerable:!0,configurable:!0}),t.prototype.fire=function(t){this._callbacks&&this._callbacks.invoke.call(this._callbacks,t)},t.prototype.dispose=function(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)},t._noop=function(){},t}();e.Emitter=o},62593:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.prototype.toString;function n(t){return"[object String]"===r.call(t)}function i(t){return Array.isArray(t)}e.boolean=function(t){return!0===t||!1===t},e.string=n,e.number=function(t){return"[object Number]"===r.call(t)},e.error=function(t){return"[object Error]"===r.call(t)},e.func=function(t){return"[object Function]"===r.call(t)},e.array=i,e.stringArray=function(t){return i(t)&&t.every((function(t){return n(t)}))}},26386:function(t,e,r){"use strict";var n=r(48764).Buffer,i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(23680),s=r(62593),a=8192,u=new n("\r","ascii")[0],c=new n("\n","ascii")[0],f=function(){function t(t){void 0===t&&(t="utf8"),this.encoding=t,this.index=0,this.buffer=new n(a)}return t.prototype.append=function(t){var e=t;if("string"===typeof t){var r=t,i=n.byteLength(r,this.encoding);(e=new n(i)).write(r,0,i,this.encoding)}if(this.buffer.length-this.index>=e.length)e.copy(this.buffer,this.index,0,e.length);else{var o=(Math.ceil((this.index+e.length)/a)+1)*a;0===this.index?(this.buffer=new n(o),e.copy(this.buffer,0,0,e.length)):this.buffer=n.concat([this.buffer.slice(0,this.index),e],o)}this.index+=e.length},t.prototype.tryReadHeaders=function(){for(var t=void 0,e=0;e+3<this.index&&(this.buffer[e]!==u||this.buffer[e+1]!==c||this.buffer[e+2]!==u||this.buffer[e+3]!==c);)e++;if(e+3>=this.index)return t;t=Object.create(null),this.buffer.toString("ascii",0,e).split("\r\n").forEach((function(e){var r=e.indexOf(":");if(-1===r)throw new Error("Message header must separate key and value using :");var n=e.substr(0,r),i=e.substr(r+1).trim();t[n]=i}));var r=e+4;return this.buffer=this.buffer.slice(r),this.index=this.index-r,t},t.prototype.tryReadContent=function(t){if(this.index<t)return null;var e=this.buffer.toString(this.encoding,0,t),r=t;return this.buffer.copy(this.buffer,0,r),this.index=this.index-r,e},Object.defineProperty(t.prototype,"numberOfBytes",{get:function(){return this.index},enumerable:!0,configurable:!0}),t}();!function(t){t.is=function(t){var e=t;return e&&s.func(e.listen)&&s.func(e.dispose)&&s.func(e.onError)&&s.func(e.onClose)&&s.func(e.onPartialMessage)}}(e.MessageReader||(e.MessageReader={}));var l=function(){function t(){this.errorEmitter=new o.Emitter,this.closeEmitter=new o.Emitter,this.partialMessageEmitter=new o.Emitter}return t.prototype.dispose=function(){this.errorEmitter.dispose(),this.closeEmitter.dispose()},Object.defineProperty(t.prototype,"onError",{get:function(){return this.errorEmitter.event},enumerable:!0,configurable:!0}),t.prototype.fireError=function(t){this.errorEmitter.fire(this.asError(t))},Object.defineProperty(t.prototype,"onClose",{get:function(){return this.closeEmitter.event},enumerable:!0,configurable:!0}),t.prototype.fireClose=function(){this.closeEmitter.fire(void 0)},Object.defineProperty(t.prototype,"onPartialMessage",{get:function(){return this.partialMessageEmitter.event},enumerable:!0,configurable:!0}),t.prototype.firePartialMessage=function(t){this.partialMessageEmitter.fire(t)},t.prototype.asError=function(t){return t instanceof Error?t:new Error("Reader recevied error. Reason: "+(s.string(t.message)?t.message:"unknown"))},t}();e.AbstractMessageReader=l;var h=function(t){function e(e,r){void 0===r&&(r="utf8");var n=t.call(this)||this;return n.readable=e,n.buffer=new f(r),n._partialMessageTimeout=1e4,n}return i(e,t),Object.defineProperty(e.prototype,"partialMessageTimeout",{get:function(){return this._partialMessageTimeout},set:function(t){this._partialMessageTimeout=t},enumerable:!0,configurable:!0}),e.prototype.listen=function(t){var e=this;this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=t,this.readable.on("data",(function(t){e.onData(t)})),this.readable.on("error",(function(t){return e.fireError(t)})),this.readable.on("close",(function(){return e.fireClose()}))},e.prototype.onData=function(t){for(this.buffer.append(t);;){if(-1===this.nextMessageLength){var e=this.buffer.tryReadHeaders();if(!e)return;var r=e["Content-Length"];if(!r)throw new Error("Header must provide a Content-Length property.");var n=parseInt(r);if(isNaN(n))throw new Error("Content-Length value must be a number.");this.nextMessageLength=n}var i=this.buffer.tryReadContent(this.nextMessageLength);if(null===i)return void this.setPartialMessageTimer();this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.messageToken++;var o=JSON.parse(i);this.callback(o)}},e.prototype.clearPartialMessageTimer=function(){this.partialMessageTimer&&(clearTimeout(this.partialMessageTimer),this.partialMessageTimer=void 0)},e.prototype.setPartialMessageTimer=function(){var t=this;this.clearPartialMessageTimer(),this._partialMessageTimeout<=0||(this.partialMessageTimer=setTimeout((function(e,r){t.partialMessageTimer=void 0,e===t.messageToken&&(t.firePartialMessage({messageToken:e,waitingTime:r}),t.setPartialMessageTimer())}),this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))},e}(l);e.StreamMessageReader=h;var d=function(t){function e(e){var r=t.call(this)||this;r.process=e;var n=r.process;return n.on("error",(function(t){return r.fireError(t)})),n.on("close",(function(){return r.fireClose()})),r}return i(e,t),e.prototype.listen=function(t){this.process.on("message",t)},e}(l);e.IPCMessageReader=d;var p=function(t){function e(e,r){return void 0===r&&(r="utf-8"),t.call(this,e,r)||this}return i(e,t),e}(h);e.SocketMessageReader=p},59725:function(t,e,r){"use strict";var n=r(48764).Buffer,i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(23680),s=r(62593),a="Content-Length: ",u="\r\n";!function(t){t.is=function(t){var e=t;return e&&s.func(e.dispose)&&s.func(e.onClose)&&s.func(e.onError)&&s.func(e.write)}}(e.MessageWriter||(e.MessageWriter={}));var c=function(){function t(){this.errorEmitter=new o.Emitter,this.closeEmitter=new o.Emitter}return t.prototype.dispose=function(){this.errorEmitter.dispose(),this.closeEmitter.dispose()},Object.defineProperty(t.prototype,"onError",{get:function(){return this.errorEmitter.event},enumerable:!0,configurable:!0}),t.prototype.fireError=function(t,e,r){this.errorEmitter.fire([this.asError(t),e,r])},Object.defineProperty(t.prototype,"onClose",{get:function(){return this.closeEmitter.event},enumerable:!0,configurable:!0}),t.prototype.fireClose=function(){this.closeEmitter.fire(void 0)},t.prototype.asError=function(t){return t instanceof Error?t:new Error("Writer recevied error. Reason: "+(s.string(t.message)?t.message:"unknown"))},t}();e.AbstractMessageWriter=c;var f=function(t){function e(e,r){void 0===r&&(r="utf8");var n=t.call(this)||this;return n.writable=e,n.encoding=r,n.errorCount=0,n.writable.on("error",(function(t){return n.fireError(t)})),n.writable.on("close",(function(){return n.fireClose()})),n}return i(e,t),e.prototype.write=function(t){var e=JSON.stringify(t),r=n.byteLength(e,this.encoding),i=[a,r.toString(),u,u];try{this.writable.write(i.join(""),"ascii"),this.writable.write(e,this.encoding),this.errorCount=0}catch(o){this.errorCount++,this.fireError(o,t,this.errorCount)}},e}(c);e.StreamMessageWriter=f;var l=function(t){function e(e){var r=t.call(this)||this;r.process=e,r.errorCount=0,r.queue=[],r.sending=!1;var n=r.process;return n.on("error",(function(t){return r.fireError(t)})),n.on("close",(function(){return r.fireClose})),r}return i(e,t),e.prototype.write=function(t){this.sending||0!==this.queue.length?this.queue.push(t):this.doWriteMessage(t)},e.prototype.doWriteMessage=function(t){var e=this;try{this.process.send&&(this.sending=!0,this.process.send(t,void 0,void 0,(function(r){e.sending=!1,r?(e.errorCount++,e.fireError(r,t,e.errorCount)):e.errorCount=0,e.queue.length>0&&e.doWriteMessage(e.queue.shift())})))}catch(r){this.errorCount++,this.fireError(r,t,this.errorCount)}},e}(c);e.IPCMessageWriter=l;var h=function(t){function e(e,r){void 0===r&&(r="utf8");var n=t.call(this)||this;return n.socket=e,n.queue=[],n.sending=!1,n.encoding=r,n.errorCount=0,n.socket.on("error",(function(t){return n.fireError(t)})),n.socket.on("close",(function(){return n.fireClose()})),n}return i(e,t),e.prototype.write=function(t){this.sending||0!==this.queue.length?this.queue.push(t):this.doWriteMessage(t)},e.prototype.doWriteMessage=function(t){var e=this,r=JSON.stringify(t),i=n.byteLength(r,this.encoding),o=[a,i.toString(),u,u];try{this.sending=!0,this.socket.write(o.join(""),"ascii",(function(n){n&&e.handleError(n,t);try{e.socket.write(r,e.encoding,(function(r){e.sending=!1,r?e.handleError(r,t):e.errorCount=0,e.queue.length>0&&e.doWriteMessage(e.queue.shift())}))}catch(n){e.handleError(n,t)}}))}catch(s){this.handleError(s,t)}},e.prototype.handleError=function(t,e){this.errorCount++,this.fireError(t,e,this.errorCount)},e}(c);e.SocketMessageWriter=h},62808:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=r(47421),i=r(78120);const o=n.p.mark({class:"cm-interact"}),s=i.Py.define(),a=n.tk.theme({".cm-interact":{background:"rgba(128, 128, 255, 0.2)",borderRadius:"4px"}}),u=i.r$.define(),c=n.lg.define((t=>({dragging:null,hovering:null,mouseX:0,mouseY:0,deco:n.p.none,getMatch(){const e=t.state.facet(u),r=t.posAtCoords({x:this.mouseX,y:this.mouseY});if(!r)return null;const n=t.state.doc.lineAt(r),i=r-n.from;let o=null;for(const t of e)for(const e of n.text.matchAll(t.regexp)){if(void 0===e.index)continue;const r=e[0];if(!r)continue;const s=e.index,a=e.index+r.length;i<s||i>a||(!o||r.length<o.text.length)&&(o={rule:t,pos:n.from+s,text:r})}return o},updateText:e=>r=>{t.dispatch({changes:{from:e.pos,to:e.pos+e.text.length,insert:r}}),e.text=r},highlight(e){e.rule.cursor&&(document.body.style.cursor=e.rule.cursor),t.dispatch({effects:s.of(e)})},unhighlight(){document.body.style.cursor="auto",t.dispatch({effects:s.of(null)})},update(t){for(const e of t.transactions)for(const t of e.effects)if(t.is(s)){const e=t.value?o.range(t.value.pos,t.value.pos+t.value.text.length):[];this.deco=n.p.set(e)}}})),{decorations:t=>t.deco,eventHandlers:{mousedown(t,e){if(!t.altKey)return;const r=this.getMatch();r&&(t.preventDefault(),r.rule.onClick&&r.rule.onClick(r.text,this.updateText(r),t),r.rule.onDrag&&(this.dragging={rule:r.rule,pos:r.pos,text:r.text}))},mousemove(t,e){this.mouseX=t.clientX,this.mouseY=t.clientY,t.altKey&&(this.dragging?(this.highlight(this.dragging),this.dragging.rule.onDrag&&this.dragging.rule.onDrag(this.dragging.text,this.updateText(this.dragging),t)):(this.hovering=this.getMatch(),this.hovering?this.highlight(this.hovering):this.unhighlight()))},mouseup(t,e){this.dragging=null,this.hovering||this.unhighlight()},keydown(t,e){t.altKey&&(this.hovering=this.getMatch(),this.hovering&&this.highlight(this.hovering))},keyup(t,e){t.altKey||this.unhighlight()}}}),f=(t={})=>{var e;return[a,c,(null!==(e=t.rules)&&void 0!==e?e:[]).map((t=>u.of(t)))]}},159:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},21719:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(92953);function i(t,e,r){return(i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=(0,n.Z)(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}}}]);
//# sourceMappingURL=3870-1c2a84d0bd2dbc6175c3.js.map