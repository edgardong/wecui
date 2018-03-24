webpackJsonp([1],{

/***/ "bwR9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./examples/src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App',
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-99a8604c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./examples/src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_App = (esExports);
// CONCATENATED MODULE: ./examples/src/App.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var examples_src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c251617","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./examples/pages/hello.vue
var hello_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('w-hello',{attrs:{"message":"my component library"}})],1)}
var hello_staticRenderFns = []
var hello_esExports = { render: hello_render, staticRenderFns: hello_staticRenderFns }
/* harmony default export */ var hello = (hello_esExports);
// CONCATENATED MODULE: ./examples/pages/hello.vue
var hello_normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var hello___vue_template_functional__ = false
/* styles */
var hello___vue_styles__ = null
/* scopeId */
var hello___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var hello___vue_module_identifier__ = null
var hello_Component = hello_normalizeComponent(
  __vue_script__,
  hello,
  hello___vue_template_functional__,
  hello___vue_styles__,
  hello___vue_scopeId__,
  hello___vue_module_identifier__
)

/* harmony default export */ var pages_hello = (hello_Component.exports);

// CONCATENATED MODULE: ./examples/src/router.config.js


  // 请自行去pages下面创建一个hello.vue，以方便之后的测试

vue_esm["default"].use(vue_router_esm["default"])

/* harmony default export */ var router_config = (new vue_router_esm["default"]({
    routes: [
        {
            path: '/',
            component: pages_hello
        }
    ]
}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/hello/src/main.vue
//
//
//
//
//
//

/* harmony default export */ var main = ({
  name: 'w-hello',
  props: {
    message: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c17fbf6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/hello/src/main.vue
var main_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-hello"},[_vm._v("\n  hello "+_vm._s(_vm.message)+"\n")])}
var main_staticRenderFns = []
var main_esExports = { render: main_render, staticRenderFns: main_staticRenderFns }
/* harmony default export */ var src_main = (main_esExports);
// CONCATENATED MODULE: ./packages/hello/src/main.vue
var main_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var main___vue_template_functional__ = false
/* styles */
var main___vue_styles__ = null
/* scopeId */
var main___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var main___vue_module_identifier__ = null
var main_Component = main_normalizeComponent(
  main,
  src_main,
  main___vue_template_functional__,
  main___vue_styles__,
  main___vue_scopeId__,
  main___vue_module_identifier__
)

/* harmony default export */ var hello_src_main = (main_Component.exports);

// CONCATENATED MODULE: ./packages/hello/index.js


/* istanbul ignore next */
hello_src_main.install = function(Vue) {
  Vue.component(hello_src_main.name, hello_src_main);
};

/* harmony default export */ var packages_hello = (hello_src_main);

// CONCATENATED MODULE: ./src/index.js
// 引入公用组件


// 定义公用组件
var components = [packages_hello];

// 提供plugins的install方法
var install = function install(Vue) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // if (install.installed) return

  components.map(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src = ({
  // install,
  Hello: packages_hello
});
// CONCATENATED MODULE: ./examples/src/index.js






// 完整引用
vue_esm["default"].use(src)
// 独立引用
const { Hello } = src
vue_esm["default"].component(Hello.name, Hello)

vue_esm["default"].config.productionTip = false

/* eslint-disable no-new */
new vue_esm["default"]({
    el: '#app-container',
    router: router_config,
    components: { App: examples_src_App },
    template: '<App/>'
})

/***/ })

},["bwR9"]);