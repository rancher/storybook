(self.webpackChunkstyleguide=self.webpackChunkstyleguide||[]).push([[7473,8131],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Form/FileSelector.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_FileSelector_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Form/FileSelector.stories.ts");function _createMdxContent(props){const _components={h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_FileSelector_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"file-selector",children:"File Selector"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Input elements with type ‘file’ allows the user to select files from their file system or device storage."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Associate a label to every file input for good accessibility. Do not include a colon at the end of the label."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use only to upload file."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Set a maximum file size in order to prevent a potential service outage."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_FileSelector_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_FileSelector_stories__WEBPACK_IMPORTED_MODULE_2__.Disabled})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./src/stories/Form/FileSelector.stories.ts":function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Disabled=exports.Default=void 0;var FileSelector_1=__webpack_require__("../shell/components/form/FileSelector.vue"),meta={component:FileSelector_1.default,argTypes:{label:{control:"text"},disabled:{control:"boolean"}}};exports.default=meta,exports.Default={render:function(args){return{components:{FileSelector:FileSelector_1.default},setup:function(){return{args}},template:'<FileSelector v-bind="args" />'}},description:"Default FileSelector",args:{label:"Choose file"}},exports.Disabled=__assign(__assign({},exports.Default),{args:{label:"Choose file",disabled:!0}}),module.exports.__namedExportsOrder=["Disabled","Default"]},"../shell/config/query-params.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AS:()=>AS,AUTH_TEST:()=>AUTH_TEST,BACK_TO:()=>BACK_TO,CATEGORY:()=>CATEGORY,CHART:()=>CHART,CLOUD_CREDENTIAL:()=>CLOUD_CREDENTIAL,DEPRECATED:()=>DEPRECATED,DESCENDING:()=>DESCENDING,DESCRIPTION:()=>DESCRIPTION,DIFF:()=>DIFF,FLAT_VIEW:()=>FLAT_VIEW,FOCUS:()=>FOCUS,FROM_CLUSTER:()=>FROM_CLUSTER,FROM_TOOLS:()=>FROM_TOOLS,GITHUB_CODE:()=>GITHUB_CODE,GITHUB_NONCE:()=>GITHUB_NONCE,GITHUB_REDIRECT:()=>GITHUB_REDIRECT,GITHUB_SCOPE:()=>GITHUB_SCOPE,HIDDEN:()=>HIDDEN,HIDE_SIDE_NAV:()=>HIDE_SIDE_NAV,IS_SLO:()=>IS_SLO,IS_SSO:()=>IS_SSO,LOCAL:()=>LOCAL,LOGGED_OUT:()=>LOGGED_OUT,MODE:()=>MODE,NAME:()=>NAME,NAMESPACE:()=>NAMESPACE,OPERATING_SYSTEM:()=>OPERATING_SYSTEM,PAGE:()=>PAGE,PREVIEW:()=>PREVIEW,PROJECT_ID:()=>PROJECT_ID,PROVIDER:()=>PROVIDER,REPO:()=>REPO,REPO_TYPE:()=>REPO_TYPE,RKE_TYPE:()=>RKE_TYPE,SEARCH_QUERY:()=>SEARCH_QUERY,SETUP:()=>SETUP,SORT_BY:()=>SORT_BY,SPA:()=>SPA,STEP:()=>STEP,SUB_TYPE:()=>SUB_TYPE,TIMED_OUT:()=>TIMED_OUT,UPGRADED:()=>UPGRADED,VERSION:()=>VERSION,_CLONE:()=>_CLONE,_CONFIG:()=>_CONFIG,_CREATE:()=>_CREATE,_DETAIL:()=>_DETAIL,_EDIT:()=>_EDIT,_FLAGGED:()=>_FLAGGED,_GRAPH:()=>_GRAPH,_IMPORT:()=>_IMPORT,_LIST:()=>_LIST,_SPLIT:()=>_SPLIT,_STAGE:()=>_STAGE,_UNFLAG:()=>_UNFLAG,_UNIFIED:()=>_UNIFIED,_VIEW:()=>_VIEW,_YAML:()=>_YAML});const SPA="spa",LOCAL="local",SETUP="setup",STEP="step",LOGGED_OUT="logged-out",IS_SSO="is-sso",IS_SLO="is-slo",UPGRADED="upgraded",TIMED_OUT="timed-out",AUTH_TEST="test",BACK_TO="back-to",GITHUB_CODE="code",GITHUB_NONCE="state",GITHUB_SCOPE="scope",GITHUB_REDIRECT="redirect_uri",_FLAGGED=null,_UNFLAG=void 0,SEARCH_QUERY="q",SORT_BY="sort",DESCENDING="desc",PAGE="page",MODE="mode",_CREATE="create",_VIEW="view",_EDIT="edit",_LIST="list",_CLONE="clone",_STAGE="stage",_IMPORT="import",AS="as",_DETAIL="detail",_CONFIG="config",_YAML="yaml",_GRAPH="graph",FOCUS="focus",PREVIEW="preview",DIFF="diff",_UNIFIED="unified",_SPLIT="split",SUB_TYPE="type",RKE_TYPE="rkeType",REPO_TYPE="repo-type",REPO="repo",CHART="chart",VERSION="version",NAME="name",NAMESPACE="namespace",DESCRIPTION="description",CATEGORY="category",OPERATING_SYSTEM="os",DEPRECATED="deprecated",HIDDEN="hidden",FROM_TOOLS="tools",FROM_CLUSTER="cluster",HIDE_SIDE_NAV="hide-side-nav",PROVIDER="provider",CLOUD_CREDENTIAL="cloud",PROJECT_ID="projectId",FLAT_VIEW="flatView"},"../shell/components/form/FileSelector.vue":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{createOnSelected:()=>createOnSelected,default:()=>FileSelector});var vue_esm_bundler=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");const _hoisted_1=["disabled"],_hoisted_2=["multiple","webkitdirectory","accept"];var query_params=__webpack_require__("../shell/config/query-params.js"),object=__webpack_require__("../shell/utils/object.js");function createOnSelected(field){return function(contents){(0,object.set)(this,field,contents)}}const FileSelectorvue_type_script_lang_js={emits:["error","selected"],props:{label:{type:String,required:!0},mode:{type:String,default:query_params._EDIT},disabled:{type:Boolean,default:!1},includeFileName:{type:Boolean,default:!1},showGrowlError:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},byteLimit:{type:Number,default:0},readAsDataUrl:{type:Boolean,default:!1},directory:{type:Boolean,default:!1},rawData:{type:Boolean,default:!1},accept:{type:String,default:"*"}},computed:{isView(){return this.mode===query_params._VIEW}},methods:{selectFile(){this.$refs.uploader.value=null,this.$refs.uploader.click()},async fileChange(event){const input=event.target,files=Array.from(input.files||[]);if(this.byteLimit)for(const file of files)if(file.size>this.byteLimit)return void this.$emit("error",`${file.name} exceeds the file size limit of ${this.byteLimit} bytes`);if(this.rawData){const unboxedContents=this.multiple||1!==files.length?files:files[0];this.$emit("selected",unboxedContents)}else try{const asyncFileContents=files.map(this.getFileContents),fileContents=await Promise.all(asyncFileContents),unboxedContents=this.multiple||1!==fileContents.length?fileContents:fileContents[0];this.$emit("selected",unboxedContents)}catch(error){this.$emit("error",error),this.showGrowlError&&this.$store.dispatch("growl/fromError",{title:"Error reading file",error},{root:!0})}},getFileContents(file){return new Promise(((resolve,reject)=>{const reader=new FileReader;reader.onload=ev=>{const value=ev.target.result,name=file.name,fileContents=this.includeFileName?{value,name}:value;resolve(fileContents)},reader.onerror=err=>{reject(err)},this.readAsDataUrl?reader.readAsDataURL(file):reader.readAsText(file)}))}}};const __exports__=(0,__webpack_require__("./node_modules/vue-loader/dist/exportHelper.js").A)(FileSelectorvue_type_script_lang_js,[["render",function render(_ctx,_cache,$props,$setup,$data,$options){return $options.isView?(0,vue_esm_bundler.createCommentVNode)("",!0):((0,vue_esm_bundler.openBlock)(),(0,vue_esm_bundler.createElementBlock)("button",{key:0,disabled:$props.disabled,type:"button",class:"file-selector btn","data-testid":"file-selector__uploader-button",onClick:_cache[1]||(_cache[1]=(...args)=>$options.selectFile&&$options.selectFile(...args))},[(0,vue_esm_bundler.createElementVNode)("span",null,(0,vue_esm_bundler.toDisplayString)($props.label),1),(0,vue_esm_bundler.createElementVNode)("input",{ref:"uploader",type:"file",class:"hide",multiple:$props.multiple,webkitdirectory:$props.directory,accept:$props.accept,onChange:_cache[0]||(_cache[0]=(...args)=>$options.fileChange&&$options.fileChange(...args))},null,40,_hoisted_2)],8,_hoisted_1))}]]),FileSelector=__exports__;__exports__.__docgenInfo={exportName:"default",displayName:"FileSelector",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"mode",type:{name:"string"},defaultValue:{func:!1,value:"_EDIT"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"includeFileName",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showGrowlError",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"byteLimit",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"readAsDataUrl",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"directory",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rawData",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:"'*'"}}],events:[{name:"error",type:{names:["undefined"]}},{name:"selected",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/dashboard/dashboard/shell/components/form/FileSelector.vue"]}},"./node_modules/vue-loader/dist/exportHelper.js":(__unused_webpack_module,exports)=>{"use strict";exports.A=(sfc,props)=>{const target=sfc.__vccOpts||sfc;for(const[key,val]of props)target[key]=val;return target}}}]);