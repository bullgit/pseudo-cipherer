(this["webpackJsonppseudo-cipherer"]=this["webpackJsonppseudo-cipherer"]||[]).push([[0],[,,,,,,,,function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(e){return e.split("").reverse().sort((function(){return Math.random()<.5?-1:1})).join("")};e.default=t})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(e){return e.split("").reverse().join("")};e.default=t})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.split("");return a.unshift.apply(a,t(a.splice(n%e.length))),a.join("")};e.default=n})?a.apply(t,r):a)||(e.exports=o)},,function(e,t,n){e.exports=n(19)},,function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n(20),n(21),n(22),n(23),n(9),n(24),n(25),n(26),n(8),n(10),n(27),n(28)],void 0===(o="function"===typeof(a=function(e,t,n,a,r,o,i,l,u,c,s,f,p){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function v(e){if(e&&e.__esModule)return e;var t=m();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}}return n.default=e,t&&t.set(e,n),n}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"flipBits",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"jumble",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"reverse",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"reverseBits",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"rockdotize",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"rot13",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"scramble",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"shift",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"shiftBits",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"toMANS",{enumerable:!0,get:function(){return p.default}}),e.compressor=e.charCase=e.default=void 0,t=v(t),e.charCase=t,n=v(n),e.compressor=n,a=d(a),r=d(r),o=d(o),i=d(i),l=d(l),u=d(u),c=d(c),s=d(s),f=d(f),p=d(p);var h={charCase:t,compressor:n,flipBits:a.default,jumble:r.default,reverse:o.default,reverseBits:i.default,rockdotize:l.default,rot13:u.default,scramble:c.default,shift:s.default,shiftBits:f.default,toMANS:p.default};e.default=h})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.invert=e.default=void 0;var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.replace(/[a-z]/gi,(function(e,n){return String.fromCharCode(e.charCodeAt()^32*+(!t||n%t===0))}))};e.invert=t;var n={invert:t};e.default=n})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.signature=e.unpack=e.pack=e.default=void 0;var n=function(e){return String.fromCharCode.apply(String,t(e.match(/[\S\s]{1,2}/g).map((function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1);if(t>255||n>255)throw new TypeError("Non ASCII character ".concat(t+", "+n," detected!"));return t<<8|n}))))};e.pack=n;var a=function(e){return unescape(escape(e).replace(/u(..)/g,"$1%"))};e.unpack=a;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(t?"eval(%s);":"%s;").replace("%s",'unescape(escape("'.concat(e,'").replace(/u(..)/g, "$1%"))'))};e.signature=r;var o={pack:n,unpack:a,signature:r};e.default=o})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(e){return e.split("").map((function(e){return String.fromCodePoint(parseInt(e.charCodeAt().toString(2).padStart(16,0).replace(/./g,(function(e){return"0"===e?"1":"0"})),2))})).join("")};e.default=t})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n(8)],void 0===(o="function"===typeof(a=function(e,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=(a=t)&&a.__esModule?a:{default:a};var r=function(e){return e.slice(0,1)+(0,t.default)(e.slice(1,-1))+e.slice(-1)},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return e.replace(/\w{4,}/gi,(function(e){return n(Array(t)).map((function(t){return r(e)})).find((function(t){return t!==e}))||e}))};e.default=o})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n(9)],void 0===(o="function"===typeof(a=function(e,t){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=(n=t)&&n.__esModule?n:{default:n};var a=function(e){return e.split("").map((function(e){return String.fromCodePoint(parseInt((0,t.default)(e.charCodeAt().toString(2).padStart(16,"0")),2))})).join("")};e.default=a})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/\w/gi;return e.replace(t,"$&\u0308")};e.default=t})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(e){return e.replace(/[a-z]/gi,(function(e){return String.fromCharCode(e.charCodeAt(0)+13-26*/[n-z]/i.test(e))}))};e.default=t})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n(10)],void 0===(o="function"===typeof(a=function(e,t){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=(n=t)&&n.__esModule?n:{default:n};var a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.replace(/./g,(function(e){return String.fromCodePoint(parseInt((0,t.default)(e.charCodeAt(0).toString(2).padStart(16,"0"),n),2))}))};e.default=a})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){var a,r,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t],void 0===(o="function"===typeof(a=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.replace(/[a-z]/gi,(function(e){return String.fromCodePoint(119808+52*t+e.charCodeAt(0)-(e.charCodeAt()<97?65:71))}))};e.default=t})?a.apply(t,r):a)||(e.exports=o)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(13),o=n(6),i=n(1),l=n(2),u=n(3),c=n(4),s=n(0),f=n.n(s),p=n(11),d=n.n(p),m=n(12),v=n.n(m),h={"charCase.invert":[{name:"string",type:"string"},{name:"every",type:"number",default:0}],"compressor.pack":[{name:"string",type:"string"}],"compressor.unpack":[{name:"string",type:"string"}],"compressor.signature":[{name:"string",type:"string"},{name:"withEval",type:"boolean",default:!1}],flipBits:[{name:"string",type:"string"}],jumble:[{name:"string",type:"string"},{name:"runs",type:"number",default:3}],reverseBits:[{name:"string",type:"string"}],reverse:[{name:"string",type:"string"}],rockdotize:[{name:"string",type:"string"},{name:"regexp",type:"regexp",default:"/\\w/gi"}],rot13:[{name:"string",type:"string"}],scramble:[{name:"string",type:"string"}],shiftBits:[{name:"string",type:"string"},{name:"n",type:"number",default:1}],shift:[{name:"string",type:"string"},{name:"n",type:"number",default:1}],toMANS:[{name:"string",type:"string"},{name:"type",type:"number",default:0,min:0,max:12}]},g=(n(29),f.a.createContext()),y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(e=t.call.apply(t,[this].concat(l))).state={input:"",sequences:[],definitions:h,definitionLabels:[""].concat(Object(o.a)(Object.keys(h))),setInput:function(t){return e.setState({input:t})},getDefinition:function(t){if(!(t in e.state.definitions))throw new TypeError("Unknown definition '".concat(t,"'!"));return e.state.definitions[t]},getSequenceDefaults:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=t?e.state.getDefinition(t):[],a=n.slice(1).map((function(e){return e.default}));return{name:t,args:a}},createSequence:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.sequences.length,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t<0||t>e.state.sequences.length)throw new TypeError("Invalid index ".concat(t,"!"));var a=e.state.sequences.concat();a.splice(t,0,e.state.getSequenceDefaults(n)),e.setState({sequences:a})},updateSequence:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(t<0||t>=e.state.sequences.length)throw new TypeError("Invalid index ".concat(t,"!"));var o=e.state.sequences.concat(),i=Object(r.a)({},o[t],{name:n,args:a});o[t].name!==n&&(i.args=e.state.getSequenceDefaults(n).args),o.splice(t,1,i),e.setState({sequences:o})},deleteSequence:function(t){if(t<0||t>=e.state.sequences.length)throw new TypeError("Invalid index ".concat(t,"!"));var n=e.state.sequences.concat();n.splice(t,1),e.setState({sequences:n})},clearSequences:function(){e.setState({sequences:[]})},execute:function(e,t){return e.split(".").reduce((function(e,t){return e[t]}),v.a).apply(null,t)},proceed:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.sequences.length-1;return e.state.sequences.reduce((function(n,a,r){return a.name&&t>=r?e.state.execute(a.name,[n].concat(Object(o.a)(a.args))):n}),e.state.input)}},e}return Object(l.a)(n,[{key:"render",value:function(){return f.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),n}(f.a.Component),b=function(){return f.a.createElement(y,null,f.a.createElement("div",{className:"app-component"},f.a.createElement("h1",{className:"title"},"Pseudo Cipherer"),f.a.createElement("div",{className:"description"},f.a.createElement("p",null,"A demonstration of the ",f.a.createElement("code",null,f.a.createElement("a",{href:"https://github.com/0x04/string-mutilator",target:"_blank",rel:"noopener noreferrer"},"@0x04/string-mutilator"))," package."),f.a.createElement("p",null,"Enter some text or use the ",f.a.createElement(g.Consumer,null,(function(e){return f.a.createElement("button",{className:"action-link",onClick:function(t){t.preventDefault(),e.setInput("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo nesciunt nulla? Adipisci consequuntur cum debitis enim exercitationem ipsa minima natus nulla, obcaecati porro provident quia quo ullam vel voluptate.")}},"blind text")}))," and add a function to see the result in the output pane.")),f.a.createElement(g.Consumer,null,(function(e){return f.a.createElement(f.a.Fragment,null,f.a.createElement(E,{id:"string-input",label:"Input",value:e.input,onChange:function(t){return e.setInput(t.target.value)},onClear:function(){return e.setInput("")}}),function(e){return f.a.createElement("div",{className:"action-container"},f.a.createElement("div",{className:"spacer"}),f.a.createElement("button",{className:"action action-clear",onClick:function(){return e.clearSequences()}},"Clear Functions"),f.a.createElement("button",{className:"action action-create",onClick:function(){return e.createSequence(0)}},"Add Function"))}(e),function(e){var t=e.sequences.map((function(e,t){return f.a.createElement(C,{key:t,index:t,name:e.name})}));return f.a.createElement("div",{className:"functions-container"},t)}(e),f.a.createElement(k,{label:"Output",value:e.proceed(),collapsable:!1}))}))))};function E(e){return f.a.createElement("div",{className:"input-component"},f.a.createElement("label",{htmlFor:e.id},e.label),f.a.createElement("div",{className:"horizontal-container"},f.a.createElement("textarea",{id:e.id,className:"input",value:e.value,onChange:e.onChange,placeholder:"Please enter text\u2026"}),f.a.createElement("input",{type:"reset",value:"Clear",onClick:e.onClear})))}var C=function(e){return f.a.createElement("div",{className:"function-component"},f.a.createElement(g.Consumer,null,(function(t){return f.a.createElement("div",{className:"horizontal-container"},f.a.createElement("div",{className:"function-container"},f.a.createElement(j,{index:e.index,name:e.name}),e.name in t.definitions&&t.definitions[e.name].length>1?f.a.createElement(O,{index:e.index,name:e.name}):null,f.a.createElement(k,{label:"Output",value:t.proceed(e.index)})),f.a.createElement("div",{className:"action-container"},f.a.createElement("button",{className:"action action-delete",onClick:function(){return t.deleteSequence(e.index)}},"Remove Function"),f.a.createElement("button",{className:"action action-create",onClick:function(){return t.createSequence(e.index+1)}},"Add Function")))})))},j=function(e){return f.a.createElement("div",{className:"function-select-component"},f.a.createElement("label",null,f.a.createElement("span",null,"Function"),f.a.createElement(g.Consumer,null,(function(t){return f.a.createElement("select",{value:e.name,onChange:function(n){return t.updateSequence(e.index,n.target.value)}},t.definitionLabels.map((function(e,t){return f.a.createElement("option",{key:t,value:e},e)})))}))))},O=function(e){return f.a.createElement("div",{className:"function-params-component"},f.a.createElement("table",{className:"function-params"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Argument"),f.a.createElement("th",null,"Type"),f.a.createElement("th",null,"Value"))),f.a.createElement(g.Consumer,null,(function(t){var n=t.sequences[e.index].args,a=t.getDefinition(e.name).slice(1).map((function(a,r){return f.a.createElement("tr",{key:r},f.a.createElement("td",null,a.name),f.a.createElement("td",null,a.type),f.a.createElement("td",null,f.a.createElement(x,Object.assign({onChange:function(a){var o=n.concat();o.splice(r,1,a),t.updateSequence(e.index,e.name,o)}},a,{value:n[r]}))))}));return f.a.createElement("tbody",null,a)}))))},x=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={valid:!0},r.handleChange=r.handleChange.bind(Object(a.a)(r)),r}return Object(l.a)(n,[{key:"getRealValue",value:function(e){switch(this.props.type){default:return e;case"number":var t=parseInt(e,10);if(isNaN(t))throw new TypeError;return t;case"boolean":return/^(1|true|y(es)|on?)$/.test(e);case"regexp":var n=e.slice(1,e.lastIndexOf(e[0])),a=e.slice(e.lastIndexOf(e[0])+1);return new RegExp(n,a)}}},{key:"handleChange",value:function(e){var t=!0,n="checkbox"===e.target.type?e.target.checked:e.target.value;try{n=this.getRealValue(n)}catch(a){t=!1}this.setState({valid:t}),t&&this.props.onChange&&this.props.onChange(n)}},{key:"render",value:function(){var e=f.a.createElement("div",null);switch(this.props.type){default:case"number":e=f.a.createElement("input",{type:"number",min:this.props.min,max:this.props.max,value:this.props.value,onChange:this.handleChange});break;case"boolean":e=f.a.createElement("input",{type:"checkbox",checked:this.props.value,onChange:this.handleChange});break;case"regexp":e=f.a.createElement("input",{type:"text",value:this.props.value,className:this.state.valid?null:"invalid",onChange:this.handleChange})}return f.a.createElement("div",{className:"function-param-renderer type-".concat(this.props.type)},e)}}]),n}(f.a.Component),k=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:"output-component"+(this.props.collapsable&&this.state.collapsed?" collapsed":"")},f.a.createElement("div",{className:"label"},this.props.collapsable?f.a.createElement("button",{className:"action-link",onClick:function(){return e.setState({collapsed:!e.state.collapsed})}},this.props.label):f.a.createElement("span",null,this.props.label)),f.a.createElement("div",{className:"content",style:{display:this.props.collapsable&&this.state.collapsed?"none":"block"}},f.a.createElement("div",{className:"horizontal-container"},f.a.createElement("pre",{className:"output"},this.props.value),f.a.createElement(S,{value:this.props.value}))))}}]),n}(f.a.Component);k.defaultProps={collapsable:!0};var S=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"copyToClipboard",value:function(e){var t=window.activeElement,n=document.createElement("textarea");n.className="copy-button-helper",n.value=e,document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),document.execCommand("copy"),n.remove(),t&&t.focus()}},{key:"render",value:function(){var e=this;return f.a.createElement("button",{className:"action action-copy",onClick:function(){return e.copyToClipboard(e.props.value)}},"Copy")}}]),n}(f.a.Component);S.defaultProps={value:""};var w=document.getElementById("root");d.a.render(f.a.createElement(b,null),w)}],[[14,1,2]]]);
//# sourceMappingURL=main.6eee2155.chunk.js.map