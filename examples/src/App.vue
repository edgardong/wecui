<template>
  <div class="app">
    <page-header></page-header>
    <div class="main-content">
      <div class="page-container clearfix">
        <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/atom-one-light.css'
import navConfig from './nav.config.json'
import PageHeader from './components/page-header'
import SideNav from './components/side-nav'

export default {
  name: 'App',
  components: { PageHeader, SideNav },
  data () {
    return {
      navConfig: navConfig
    }
  }
}
</script>