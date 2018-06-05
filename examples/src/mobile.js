import Vue from 'vue'
import VueRouter from 'vue-router'
import MobileApp from './MobileApp'
import wecui from 'src/index.js'
import isMobile from './is-mobile.js'
import Hello from '../pages/hello.vue'
import 'src/assets/fonts/iconfont.css'
import '../../src/style/reset.css'
import 'packages/wecui-css/src/index.scss'

import registerRoute from './router.config'
import navConfig from './nav.config'

const routesConfig = registerRoute(navConfig)

Vue.use(wecui)
Vue.use(VueRouter)

const isProduction = process.env.NODE_ENV === 'production'
const router = new VueRouter({
  base: isProduction ? '/wecui/' : __dirname,
  routes: routesConfig
})
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    window.scrollTo(0, 0)
  }
  const pathname = isProduction ? '/wecui/' : '/'
  if (!isMobile) {
    window.location.replace(pathname)
    return
  }
  document.title = route.meta.title || document.title
  next()
})

new Vue({
  el: '#app-container',
  data: {
    show: true
  },
  router,
  components: { MobileApp },
  template: '<MobileApp/>'
})