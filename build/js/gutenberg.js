!function(){"use strict";var e,t={325:function(){var e=window.wp.i18n,t=window.wp.blocks;function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return r(e)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}var u=window.wp.element,s=window.wp.blockEditor,p=window.wp.components,f=window.wp.data,d=window.lodash,m=[[[12,0,4,0,0],[12,0,8,0,0]],[[12,0,8,0,0],[12,0,4,0,0]],[[12,0,6,0,0],[12,0,6,0,0]],[[12,0,4,0,0],[12,0,4,0,0],[12,0,4,0,0]],[[12,0,8,0,0],[12,0,4,0,0],[12,0,4,0,0],[12,0,8,0,0]]];function y(e){var t=e.layout,n=e.onClick;return(0,u.createElement)("div",{className:"row ized-section-layout-row",onClick:function(){return n(t)}},t.map((function(e){return(0,u.createElement)("div",{className:"col-"+e[2]+" ized-section-layout-col"})})))}function b(e){var t=e.setLayout;function n(e){t({layout:e,columns:e.length,settingLayout:!0})}return(0,u.createElement)("div",{className:"ized-section-layout-container"},m.map((function(e){return(0,u.createElement)("div",{className:"ized-section-layout ized-section-row"},(0,u.createElement)(y,{layout:e,onClick:n}))})))}var v=(0,f.select)("core/block-editor").getBlocks,g=(0,f.dispatch)("core/block-editor").replaceInnerBlocks,h=function(a){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(E,a);var f,m,y,h,k=(y=E,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(y);if(h){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function E(){var e;return n(this,E),(e=k.apply(this,arguments)).ButtonType=e.ButtonType.bind(r(e)),e.layoutBlocks=e.layoutBlocks.bind(r(e)),e.setEtat=e.setEtat.bind(r(e)),e.setLayout=e.setLayout.bind(r(e)),e.state={layout:!1},e}return f=E,(m=[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){}},{key:"ButtonType",value:function(e){var t=e.typeB,n=this.props,o=n.setAttributes,r="ized-section-type";return n.attributes.type===t&&(r="ized-section-type active"),(0,u.createElement)("span",{className:r,onClick:function(){return o({type:t})}},t)}},{key:"layoutBlocks",value:function(e){for(var n=this.state.layout,o=v(e),r=0;r<n.length;r++)void 0!==o[r]?o[r].attributes.bootstrapSize=n[r]:o.push((0,t.createBlock)("ized-gutenberg/section-col",{bootstrapSize:n[r]}));if(o.length>n.length){for(var l=!0,a=n.length;a<o.length;a++)o[a].innerBlocks.length>0&&(l=!1);l&&o.splice(n.length)}g(e,o,!1),this.setEtat({layout:!1})}},{key:"setEtat",value:function(e){this.setState(e)}},{key:"setLayout",value:function(e){this.props.attributes.columns=e.columns,this.setState(e)}},{key:"render",value:function(){var t=this.props,n=t.attributes,o=t.className,r=t.clientId,l=t.setAttributes,a=this.state.layout,c=n.columns,i=n.fullWidth,f=o+" ized-section-row";return a&&this.layoutBlocks(r),(0,u.createElement)(u.Fragment,null,(0,u.createElement)(s.InspectorControls,null,(0,u.createElement)(p.PanelBody,null,(0,u.createElement)("div",null,"Type d'élément :"),(0,u.createElement)("div",{className:"ized-section-type-container"},(0,u.createElement)(this.ButtonType,{typeB:"div"}),(0,u.createElement)(this.ButtonType,{typeB:"section"})),(0,u.createElement)(p.ToggleControl,{label:"Full Width",checked:i,onChange:function(e){return l({fullWidth:e})}})),(0,u.createElement)(p.PanelBody,{title:(0,e.__)("Layout","ized-gutenberg")},(0,u.createElement)(b,{setLayout:this.setLayout}))),(0,u.createElement)("div",{className:f},(0,u.createElement)(s.InnerBlocks,{template:(0,d.times)(c,(function(){return["ized-gutenberg/section-col"]})),templateLock:"all",allowedBlocks:["ized-gutenberg/section-col"]})))}}])&&o(f.prototype,m),E}(u.Component);function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},k.apply(this,arguments)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(l.push(o.value),!t||l.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,t.registerBlockType)("ized-gutenberg/section-row",{title:(0,e.__)("Section","ized-gutenberg"),icon:"layout",description:(0,e.__)("Une section pouvant recevoir divers colonnes pour agrémenter vos mise-en-page.","ized-gutenberg"),category:"layout",supports:{html:!1,className:!1},attributes:{className:{type:"string"},type:{type:"string",default:"div"},fullWidth:{type:"boolean",default:!1},columns:{type:"number",default:2}},example:null,edit:h,save:function(e){var t=e.attributes,n="row",o="div";return t.fullWidth&&(n="row full-width"),"section"===t.type&&(o="section"),(0,u.createElement)(o,{className:n},(0,u.createElement)(s.InnerBlocks.Content,null))}});var B=window.wp.compose,z=(0,f.select)("core/block-editor"),O=z.getBlockCount,C=z.getBlockRootClientId,_=z.getBlocks,S=z.getBlockAttributes,x=(0,f.dispatch)("core/block-editor"),A=x.replaceInnerBlocks,N=x.updateBlockAttributes,j={xs:0,sm:1,md:2,lg:3,xl:4},T=["xs","sm","md","lg","xl"],I=[12,"auto",6,"auto","auto"],P={className:{type:"string"},bootstrapSize:{type:"array",default:I},bootstrapOffset:{type:"array",default:["auto","auto","auto","auto","auto"]}},L=function(e){for(var t=e.size,n=e.value,o=e.bootstrapArray,r=e.setAttributes,l=e.type,a=[{label:"auto",value:"auto"}],c=0;c<=12;c++)a.push({label:c,value:c});return(0,u.createElement)("div",{className:"ized-bootstrap-size"},(0,u.createElement)("div",{className:"ized-bootstrap-size-label"},t),(0,u.createElement)(p.SelectControl,{value:n,className:"ized-bootstrap-size-select",options:a,onChange:function(e){for(var n=[],a=0;a<o.length;a++)n[a]=a===j[t]?e:o[a];r(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"bootstrap"+l,n))}}))},R=(0,B.createHigherOrderComponent)((function(e){return function(t){if("ized-gutenberg/section-col"===t.name){var n=t.attributes,o=n.bootstrapSize,r=n.bootstrapOffset,l="";return!o||"auto"===o[2]&&0===o[2]||(l="col-md-"+o[2]),!r||"auto"===r[2]&&0===r[2]||(l+=" order-md-"+r[2]),(0,u.createElement)(e,k({},t,{className:l}))}return(0,u.createElement)(e,t)}}),"HOCbootstrap");(0,t.registerBlockType)("ized-gutenberg/section-col",{apiVersion:2,title:(0,e.__)("Colonne","ized-gutenberg"),parent:["ized-gutenberg/section-row"],description:(0,e.__)("Une colonne avec pleins de propriétés","ized-gutenberg"),icon:"archive",category:"layout",supports:{inserter:!1,reusable:!1,html:!1,className:!1},attributes:P,example:{},edit:function(n){var o=n.attributes,r=n.setAttributes,l=(n.className,n.clientId),a=o.bootstrapSize,c=o.bootstrapOffset,i=(0,s.useBlockProps)(),d=(0,f.useDispatch)("core/block-editor").removeBlock,m=w((0,u.useState)(!1),2),y=m[0],b=m[1],v=w((0,u.useState)(!1),2),g=v[0],h=v[1],k=O(l)>0,E=y?["xs","sm","md","lg","xl"]:["xs","md","xl"],B=g?["xs","sm","md","lg","xl"]:["xs","md","xl"],z=function(e){for(var t=e.mapArray,n=e.bootstrapArray,o=e.type,l=[],a=0;a<t.length;a++){var c=t[a],i=n[j[c]];l.push((0,u.createElement)(L,{size:c,value:i,bootstrapArray:n,type:o,setAttributes:r}))}return l},x=function(e,n){var o=C(e),r=O(o),l=S(o),a=_(o);if("add"===n?r++:r--,l.columns=r,0===r)d(o);else{for(var c=0;c<a.length;c++)if(a[c].clientId===e){"add"===n?a.splice(c+1,0,(0,t.createBlock)("ized-gutenberg/section-col",{bootstrapSize:I})):a.splice(c,1);break}A(o,a,!1),N(o,l)}};return(0,u.createElement)(u.Fragment,null,(0,u.createElement)("div",i,(0,u.createElement)(s.InnerBlocks,{templateLock:!1,renderAppender:k?null:function(){return(0,u.createElement)(s.InnerBlocks.ButtonBlockAppender,null)}})),(0,u.createElement)(s.InspectorControls,null,(0,u.createElement)(p.PanelBody,{title:(0,e.__)("Column Size")},(0,u.createElement)(z,{mapArray:E,bootstrapArray:a,type:"Size"}),(0,u.createElement)(p.CheckboxControl,{label:"Toutes les tailles",checked:y,onChange:function(e){return b(e)}})),(0,u.createElement)(p.PanelBody,{title:(0,e.__)("Column Order")},(0,u.createElement)(z,{mapArray:B,bootstrapArray:c,type:"Offset"}),(0,u.createElement)(p.CheckboxControl,{label:"Toutes les tailles",checked:g,onChange:function(e){return h(e)}}))),(0,u.createElement)(s.BlockControls,null,(0,u.createElement)(p.ToolbarGroup,null,(0,u.createElement)(p.ToolbarButton,{icon:"minus",label:(0,e.__)("supprimer la colonne"),onClick:function(){return x(l,"remove")},className:""}),(0,u.createElement)(p.ToolbarButton,{icon:"plus",label:(0,e.__)("ajouter une colonne"),onClick:function(){return x(l,"add")},className:""}))))},save:function(e){var t=e.attributes,n=t.bootstrapSize,o=t.bootstrapOffset,r="";function l(e,t){e.map((function(e,n){"auto"===e||0===e&&"col-"===t||(r+=" "+(0===n?t:t+T[n]+"-")+e)}))}return l(n,"col-"),l(o,"order-"),e.className&&(r+=" "+e.className),(0,u.createElement)("div",{className:r},(0,u.createElement)(s.InnerBlocks.Content,null))}}),wp.hooks.addFilter("editor.BlockListBlock","ized-gutenberg/section-col",R)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=function(t,n,r,l){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],l=e[s][2];for(var c=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(c=!1,l<a&&(a=l));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,r,l]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0,532:0,853:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,a=n[0],c=n[1],i=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var s=i(o)}for(t&&t(n);u<a.length;u++)l=a[u],o.o(e,l)&&e[l]&&e[l][0](),e[a[u]]=0;return o.O(s)},n=self.webpackChunkgutenberg_columns_block=self.webpackChunkgutenberg_columns_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[532,853],(function(){return o(325)}));r=o.O(r)}();