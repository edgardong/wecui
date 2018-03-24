import Vue from 'vue'
import App from './App'
import router from './router.config'

import wui from '../../src/index.js'

// 完整引用
Vue.use(wui)
// 独立引用
const { Hello } = wui
Vue.component(Hello.name, Hello)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app-container',
    router,
    components: { App },
    template: '<App/>'
})