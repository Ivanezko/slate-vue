(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1127:function(e,t,r){"use strict";r.r(t);var n=r(11),o=r(51),i=r(1),a=r(0);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=new WeakMap,u=new WeakMap;class f{}class l extends f{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super();var{offset:t,path:r}=e;this.offset=t,this.path=r}}class h extends f{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super();var{offset:t,path:r}=e;this.offset=t,this.path=r}}var d=e=>u.get(e);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=new WeakSet,y=e=>{var t=[],r=e=>{if(null!=e){var n=t[t.length-1];if("string"==typeof e){var o={text:e};g.add(o),e=o}if(a.h.isText(e)){var i=e;a.h.isText(n)&&g.has(n)&&g.has(i)&&a.h.equals(n,i,{loose:!0})?n.text+=i.text:t.push(i)}else if(a.b.isElement(e))t.push(e);else{if(!(e instanceof f))throw new Error("Unexpected hyperscript child object: ".concat(e));var s=t[t.length-1];a.h.isText(s)||(r(""),s=t[t.length-1]),e instanceof l?((e,t)=>{var r=e.text.length;c.set(e,[r,t])})(s,e):e instanceof h&&((e,t)=>{var r=e.text.length;u.set(e,[r,t])})(s,e)}}};for(var n of e.flat(1/0))r(n);return t};function v(e,t,r){return b({},t,{children:y(r)})}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={anchor:function(e,t,r){return new l(t)},cursor:function(e,t,r){return[new l(t),new h(t)]},editor:function(e,t,r){var n,o=[];for(var i of r)a.g.isRange(i)?n=i:o.push(i);var s,u=y(o),f={},l=Object(a.j)();for(var[h,p]of(Object.assign(l,t),l.children=u,a.c.texts(l))){var b=(s=h,c.get(s)),g=d(h);if(null!=b){var[v]=b;f.anchor={path:p,offset:v}}if(null!=g){var[m]=g;f.focus={path:p,offset:m}}}if(f.anchor&&!f.focus)throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead.");if(!f.anchor&&f.focus)throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead.");return null!=n?l.selection=n:a.g.isRange(f)&&(l.selection=f),l},element:v,focus:function(e,t,r){return new h(t)},fragment:function(e,t,r){return y(r)},selection:function(e,t,r){var n=r.find(e=>e instanceof l),o=r.find(e=>e instanceof h);if(!n||null==n.offset||null==n.path)throw new Error("The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined.");if(!o||null==o.offset||null==o.path)throw new Error("The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined.");return b({anchor:{offset:n.offset,path:n.path},focus:{offset:o.offset,path:o.path}},t)},text:function(e,t,r){var n=y(r);if(n.length>1)throw new Error("The <text> hyperscript tag must only contain a single node's worth of children.");var[o]=n;if(null==o&&(o={text:""}),!a.h.isText(o))throw new Error("\n    The <text> hyperscript tag can only contain text content as children.");return g.delete(o),Object.assign(o,t),o}},j=e=>function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];var s=e[t];if(!s)throw new Error("No hyperscript creator found for tag: <".concat(t,">"));null==r&&(r={}),Object(i.a)(r)||(o=[r].concat(o),r={});var c=s(t,r,o=o.filter(e=>Boolean(e)).flat());return c},x=e=>{var t={},r=function(r){var n=e[r];if("object"!=typeof n)throw new Error("Properties specified for a hyperscript shorthand should be an object, but for the custom element <".concat(r,">  tag you passed: ").concat(n));t[r]=(e,t,r)=>v(0,O({},n,{},t),r)};for(var n in e)r(n);return t},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{elements:t={}}=e,r=x(t),n=O({},w,{},r,{},e.creators),o=j(n);return o}();function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S={A:function(e){return{type:"link",url:e.getAttribute("href")}},BLOCKQUOTE:function(){return{type:"quote"}},H1:function(){return{type:"heading-one"}},H2:function(){return{type:"heading-two"}},H3:function(){return{type:"heading-three"}},H4:function(){return{type:"heading-four"}},H5:function(){return{type:"heading-five"}},H6:function(){return{type:"heading-six"}},IMG:function(e){return{type:"image",url:e.getAttribute("src")}},LI:function(){return{type:"list-item"}},OL:function(){return{type:"numbered-list"}},P:function(){return{type:"paragraph"}},PRE:function(){return{type:"code"}},UL:function(){return{type:"bulleted-list"}}},T={CODE:function(){return{code:!0}},DEL:function(){return{strikethrough:!0}},EM:function(){return{italic:!0}},I:function(){return{italic:!0}},S:function(){return{strikethrough:!0}},STRONG:function(){return{bold:!0}},U:function(){return{underline:!0}}},N=function(e){var t=e.insertData,r=e.isInline,o=e.isVoid;return e.isInline=function(e){return"link"===e.type||r(e)},e.isVoid=function(e){return"image"===e.type||o(e)},e.insertData=function(r){var o=r.getData("text/html");if(o){var i=function e(t){if(3===t.nodeType)return t.textContent;if(1!==t.nodeType)return null;if("BR"===t.nodeName)return"\n";var r=t.nodeName,n=t;"PRE"===r&&t.childNodes[0]&&"CODE"===t.childNodes[0].nodeName&&(n=t.childNodes[0]);var o=Array.from(n.childNodes).map(e).flat();if("BODY"===t.nodeName)return E("fragment",{},o);if(S[r]){var i=S[r](t);return E("element",i,o)}if(T[r]){var a=T[r](t);return o.map((function(e){return E("text",a,e)}))}return o}((new DOMParser).parseFromString(o,"text/html").body);n.h.insertFragment(e,i)}else t(r)},e},L=function(e){var t=e.attributes,r=e.children,n=e.element;return{components:{ImageElement:o.a},render:function(){var e=arguments[0];switch(n.type){default:return e("p",{attrs:D({},t)},[r]);case"quote":return e("blockquote",{attrs:D({},t)},[r]);case"code":return e("pre",[e("code",{attrs:D({},t)},[r])]);case"bulleted-list":return e("ul",{attrs:D({},t)},[r]);case"heading-one":return e("h1",{attrs:D({},t)},[r]);case"heading-two":return e("h2",{attrs:D({},t)},[r]);case"heading-three":return e("h3",{attrs:D({},t)},[r]);case"heading-four":return e("h4",{attrs:D({},t)},[r]);case"heading-five":return e("h5",{attrs:D({},t)},[r]);case"heading-six":return e("h6",{attrs:D({},t)},[r]);case"list-item":return e("li",{attrs:D({},t)},[r]);case"numbered-list":return e("ol",{attrs:D({},t)},[r]);case"link":return e("a",{attrs:D({href:n.url},t)},[r]);case"image":return e(o.a,{attrs:D({},t,{element:n})},[r])}}}},H=function(e){var t=e.attributes,r=e.children,n=e.leaf;return{render:function(){var e=arguments[0];return n.bold&&(r=e("strong",[r])),n.code&&(r=e("code",[r])),n.italic&&(r=e("em",[r])),n.underlined&&(r=e("u",[r])),n.strikethrough&&(r=e("del",[r])),e("span",{attrs:D({},t)},[r])}}},M=[{children:[{text:"By default, pasting content into a Slate editor will use the clipboard's "},{text:"'text/plain'",code:!0},{text:" data. That's okay for some use cases, but sometimes you want users to be able to paste in content and have it maintaing its formatting. To do this, your editor needs to handle "},{text:"'text/html'",code:!0},{text:" data. "}]},{children:[{text:"This is an example of doing exactly that!"}]},{children:[{text:"Try it out for yourself! Copy and paste some rendered HTML rich text content (not the source code) from another site into this editor and it's formatting should be preserved."}]}],_={name:"paste-html",components:{Slate:n.e,Editable:n.a},data:function(){return{initialValue:M,renderElement:L,renderLeaf:H}},created:function(){N(this.$editor)}},B=r(5),F=Object(B.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[t("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement,renderLeaf:this.renderLeaf}})],1)}),[],!1,null,"28e57932",null);t.default=F.exports},39:function(e,t,r){var n=r(9),o=r(46);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(n(o,i),o.locals?o.locals:{});e.exports=a},45:function(e,t,r){"use strict";var n=r(39);r.n(n).a},46:function(e,t,r){(t=r(10)(!1)).push([e.i,"img[data-v-37c82c64] {\n  display: block;\n  max-width: 100%;\n  max-height: 20em;\n}\n",""]),e.exports=t},51:function(e,t,r){"use strict";var n=r(11),o={name:"imageElement",mixins:[n.d,n.b],props:{element:Object}},i=(r(45),r(5)),a=Object(i.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{contentEditable:"false"}},[t("img",{style:{boxShadow:this.selected&&this.focused?"0 0 0 3px #B4D5FF":"none"},attrs:{src:this.element.url}})]),this._t("default")],2)}),[],!1,null,"37c82c64",null);t.a=a.exports}}]);