import Vue from 'vue'
import App from './App'
import router from './router.config'
import 'packages/wecui-css/src/index.css'

import {Hello} from '../../src/index.js'
// import wecui from '../../src/index.js'

// console.log(Hello)
// console.log(wecui)

// 完整引用
// Vue.use(wecui)
// 独立引用
Vue.component(Hello.name, Hello)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app-container',
    router,
    components: { App },
    template: '<App/>'
})