// import Vue from 'vue'
// import Router from 'vue-router'
// import hello from '../pages/hello'  // 请自行去pages下面创建一个hello.vue，以方便之后的测试

// Vue.use(Router)

// export default new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   component: hello
//     // },
//     {
//       path: '/',
//       component: require('../docs/hello.md').default
//     }
//   ]
// })

import isMobile from './is-mobile'

const registerRoute = (navConfig) => {
  let route = []
  // 目前只有中文版的文档
  let navs = navConfig['zh-CN']
  // 遍历路由文件，逐一进行路由注册
  navs.forEach(nav => {
    if (isMobile && !nav.showInMobile) {
      return;
    }

    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })
  // 进行路由注册
  function addRoute(page) {
    // 不同的设备环境引入对应的路由文件
    const component = isMobile
      ? require(`../pages${page.path}.vue`)
      : require(`../docs${page.path}.md`)
    route.push({
      path: '/component' + page.path,
      component: component.default || component
    })

    route.push({
      path: '/',
      redirect: '/component/index'
    })
  }

  return route
}

export default registerRoute