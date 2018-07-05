import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import isMobile from './is-mobile'
import 'packages/wecui-css/src/index.scss'
import '../assets/docs.scss'
import wecui from '../../src/index.js'
import registerRoute from './router.config'
import navConfig from './nav.config'

const routesConfig = registerRoute(navConfig)

const router = new VueRouter({
  routes: routesConfig
})

Vue.use(VueRouter);
// 完整引用
Vue.use(wecui)

Vue.config.productionTip = false

// 是否为生产环境
const isProduction = process.env.NODE_ENV === 'production'
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0)
  }
  // 获取不同环境下，移动端Demo对应的地址
  const pathname = isProduction ? '/wecui/mobile' : '/mobile.html'
  // 如果设备环境为移动端，则直接加载移动端Demo的地址
  if (isMobile) {
    window.location.replace(pathname)
    return
  }
  document.title = route.meta.title || document.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app-container',
  router,
  components: {
    App
  },
  template: '<App/>'
})
