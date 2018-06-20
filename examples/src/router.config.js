// import Vue from 'vue'
// import Router from 'vue-router'
import hello from '../docs/hello.md'
import MobileNav from '../src/components/mobile-nav'
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

    // 配置默认路由
    route.push({
      path: '/',
      component: isMobile ? MobileNav:hello
    })
  }

  return route
}

export default registerRoute