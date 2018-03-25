import Vue from 'vue'
import App from './App'
import router from './router.config'
import isMobile from './is-mobile'
import 'packages/wecui-css/src/index.css'
import '../assets/docs.css'

// import { Hello } from '../../src/index.js'
import wecui from '../../src/index.js'

// console.log(Hello)
// console.log(wecui)

// 完整引用
Vue.use(wecui)
// 独立引用
// Vue.component(Hello.name, Hello)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//     el: '#app-container',
//     router,
//     components: { App },
//     template: '<App/>'
// })

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


new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app-container');