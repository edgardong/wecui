import Vue from 'vue'
import Router from 'vue-router'
import hello from '../pages/hello'  // 请自行去pages下面创建一个hello.vue，以方便之后的测试

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: hello
        }
    ]
})