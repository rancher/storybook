(self.webpackChunkstyleguide=self.webpackChunkstyleguide||[]).push([[947,5968],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Form/Select.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Select_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Form/Select.stories.ts"),_LabeledSelect_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Form/LabeledSelect.stories.ts");function _createMdxContent(props){const _components={h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"select",children:"Select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The select element represents a control that allows the user to choose from a number of options. The single selection element is represented visually by a dropdown."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Always associate a label to every select element for good accessibility. Do not include a colon at the end of the label."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Dropdown select lists allow users to select one item at a time, multiple select boxes (aka list boxes) allow users to select multiple items at a time."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"labeled-select",children:"Labeled Select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_LabeledSelect_stories__WEBPACK_IMPORTED_MODULE_3__.Default})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./src/stories/Form/LabeledSelect.stories.ts":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=void 0;var LabeledSelect_1=__webpack_require__("../shell/components/form/LabeledSelect.vue"),meta={component:LabeledSelect_1.default,argTypes:{label:{control:"text"},options:{control:"array"},placeholder:{control:"text"}}};exports.default=meta,exports.Default={render:function(args){return{components:{LabeledSelect:LabeledSelect_1.default},setup:function(){return{args}},template:'<LabeledSelect v-bind="args" />'}},args:{label:"System",options:["System01","System02","System03","System04"],placeholder:"Select option"}},module.exports.__namedExportsOrder=["Default"]},"./src/stories/Form/Select.stories.ts":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=void 0;var Select_vue_1=__webpack_require__("../shell/components/form/Select.vue"),meta={component:Select_vue_1.default,argTypes:{label:{control:"text"},options:{control:"array"},placeholder:{control:"text"}}};exports.default=meta,exports.Default={render:function(args){return{components:{Select:Select_vue_1.default},setup:function(){return{args}},template:'<Select v-bind="args" />'}},args:{label:"Select",options:["value01","value02","value03","value04"],placeholder:"Select option"}},module.exports.__namedExportsOrder=["Default"]},"../shell/config/query-params.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AS:()=>AS,AUTH_TEST:()=>AUTH_TEST,BACK_TO:()=>BACK_TO,CATEGORY:()=>CATEGORY,CHART:()=>CHART,CLOUD_CREDENTIAL:()=>CLOUD_CREDENTIAL,DEPRECATED:()=>DEPRECATED,DESCENDING:()=>DESCENDING,DESCRIPTION:()=>DESCRIPTION,DIFF:()=>DIFF,FLAT_VIEW:()=>FLAT_VIEW,FOCUS:()=>FOCUS,FROM_CLUSTER:()=>FROM_CLUSTER,FROM_TOOLS:()=>FROM_TOOLS,GITHUB_CODE:()=>GITHUB_CODE,GITHUB_NONCE:()=>GITHUB_NONCE,GITHUB_REDIRECT:()=>GITHUB_REDIRECT,GITHUB_SCOPE:()=>GITHUB_SCOPE,HIDDEN:()=>HIDDEN,HIDE_SIDE_NAV:()=>HIDE_SIDE_NAV,IS_SLO:()=>IS_SLO,IS_SSO:()=>IS_SSO,LOCAL:()=>LOCAL,LOGGED_OUT:()=>LOGGED_OUT,MODE:()=>MODE,NAME:()=>NAME,NAMESPACE:()=>NAMESPACE,OPERATING_SYSTEM:()=>OPERATING_SYSTEM,PAGE:()=>PAGE,PREVIEW:()=>PREVIEW,PROJECT_ID:()=>PROJECT_ID,PROVIDER:()=>PROVIDER,REPO:()=>REPO,REPO_TYPE:()=>REPO_TYPE,RKE_TYPE:()=>RKE_TYPE,SEARCH_QUERY:()=>SEARCH_QUERY,SETUP:()=>SETUP,SORT_BY:()=>SORT_BY,SPA:()=>SPA,STEP:()=>STEP,SUB_TYPE:()=>SUB_TYPE,TIMED_OUT:()=>TIMED_OUT,UPGRADED:()=>UPGRADED,VERSION:()=>VERSION,_CLONE:()=>_CLONE,_CONFIG:()=>_CONFIG,_CREATE:()=>_CREATE,_DETAIL:()=>_DETAIL,_EDIT:()=>_EDIT,_FLAGGED:()=>_FLAGGED,_GRAPH:()=>_GRAPH,_IMPORT:()=>_IMPORT,_LIST:()=>_LIST,_SPLIT:()=>_SPLIT,_STAGE:()=>_STAGE,_UNFLAG:()=>_UNFLAG,_UNIFIED:()=>_UNIFIED,_VIEW:()=>_VIEW,_YAML:()=>_YAML});const SPA="spa",LOCAL="local",SETUP="setup",STEP="step",LOGGED_OUT="logged-out",IS_SSO="is-sso",IS_SLO="is-slo",UPGRADED="upgraded",TIMED_OUT="timed-out",AUTH_TEST="test",BACK_TO="back-to",GITHUB_CODE="code",GITHUB_NONCE="state",GITHUB_SCOPE="scope",GITHUB_REDIRECT="redirect_uri",_FLAGGED=null,_UNFLAG=void 0,SEARCH_QUERY="q",SORT_BY="sort",DESCENDING="desc",PAGE="page",MODE="mode",_CREATE="create",_VIEW="view",_EDIT="edit",_LIST="list",_CLONE="clone",_STAGE="stage",_IMPORT="import",AS="as",_DETAIL="detail",_CONFIG="config",_YAML="yaml",_GRAPH="graph",FOCUS="focus",PREVIEW="preview",DIFF="diff",_UNIFIED="unified",_SPLIT="split",SUB_TYPE="type",RKE_TYPE="rkeType",REPO_TYPE="repo-type",REPO="repo",CHART="chart",VERSION="version",NAME="name",NAMESPACE="namespace",DESCRIPTION="description",CATEGORY="category",OPERATING_SYSTEM="os",DEPRECATED="deprecated",HIDDEN="hidden",FROM_TOOLS="tools",FROM_CLUSTER="cluster",HIDE_SIDE_NAV="hide-side-nav",PROVIDER="provider",CLOUD_CREDENTIAL="cloud",PROJECT_ID="projectId",FLAT_VIEW="flatView"},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/getUrl.js":module=>{"use strict";module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"../node_modules/@rancher/icons/fonts/icons.svg?1716459855219":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icons.9d30ff51.svg"},"../node_modules/@rancher/icons/fonts/icons.ttf?1716459855219":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icons.7bd2decf.ttf"},"../node_modules/@rancher/icons/fonts/icons.woff?1716459855219":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/icons.ea6757bd.woff"}}]);