"use strict";(self.webpackChunkdashboard_storybook=self.webpackChunkdashboard_storybook||[]).push([[6894],{"./stories/components/BadgeState.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,error:()=>error,info:()=>info,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_pkg_rancher_components_src_components_BadgeState_BadgeState__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../pkg/rancher-components/src/components/BadgeState/BadgeState.vue"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=(args,{argTypes})=>({components:{BadgeState:_pkg_rancher_components_src_components_BadgeState_BadgeState__WEBPACK_IMPORTED_MODULE_2__.A},props:Object.keys(argTypes),template:'<BadgeState v-bind="$props" />'});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li"},(0,_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Badge",component:_pkg_rancher_components_src_components_BadgeState_BadgeState__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{color:{description:"Overwritten description",control:{type:"select",options:["bg-info","bg-warning","bg-error"]}}}}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Badges are used to highlight important changes of state in an element, mark them, or draw attention to counters."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Use badges to highlight or differentiate key elements. However, do it with caution. Drawing attention to many pieces may result in creating much noise."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Badges are good for counters, for example, to show the number of new messages."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Badges should not provide interaction. However, its parent element may."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:"Don't use long texts within a badge. Whenever possible, limit it to a maximum of 3 words or less."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Different contextual variations of the badge can be used to communicate the different states of an element or the content: Blue for information, yellow for warning and red for errors."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Info",args:{label:"Hello world",color:"bg-info"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Warning",args:{label:"Hello World",color:"bg-warning"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Error",args:{label:"Hello World",color:"bg-error"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.kL,{language:"js",light:!0,format:!1,code:"\n     import BadgeState from '@/pkg/rancher-components/src/components/BadgeState/BadgeState';\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"props-table",children:"Props table"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.uY,{of:_pkg_rancher_components_src_components_BadgeState_BadgeState__WEBPACK_IMPORTED_MODULE_2__.A})]})}const info=Template.bind({});info.storyName="Info",info.args={label:"Hello world",color:"bg-info"},info.parameters={storySource:{source:'(args, {\n  argTypes\n}) => ({\n  components: {\n    BadgeState\n  },\n  props: Object.keys(argTypes),\n  template: "<BadgeState v-bind=\\"$props\\" />"\n})'}};const warning=Template.bind({});warning.storyName="Warning",warning.args={label:"Hello World",color:"bg-warning"},warning.parameters={storySource:{source:'(args, {\n  argTypes\n}) => ({\n  components: {\n    BadgeState\n  },\n  props: Object.keys(argTypes),\n  template: "<BadgeState v-bind=\\"$props\\" />"\n})'}};const error=Template.bind({});error.storyName="Error",error.args={label:"Hello World",color:"bg-error"},error.parameters={storySource:{source:'(args, {\n  argTypes\n}) => ({\n  components: {\n    BadgeState\n  },\n  props: Object.keys(argTypes),\n  template: "<BadgeState v-bind=\\"$props\\" />"\n})'}};const componentMeta={title:"Components/Badge",component:_pkg_rancher_components_src_components_BadgeState_BadgeState__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{color:{description:"Overwritten description",control:{type:"select",options:["bg-info","bg-warning","bg-error"]}}},tags:["stories-mdx"],includeStories:["info","warning","error"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_dashboard_dashboard_storybook_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","info","warning","error"]}}]);