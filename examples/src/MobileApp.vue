<template>
  <div class="mobile-container">
      <router-view></router-view>
      <mobile-nav :group="navConfig['zh-CN'][0].groups[0]"></mobile-nav>
  </div>
</template>
<script>
  import MobileNav from './components/mobile-nav'
  import navConfig from './nav.config.json'

  export default {
    name: 'MobileApp',
    data () {
      return {
        navConfig: navConfig
      }
    },
    components:{
      MobileNav
    }
  }
</script>
<style lang="postcss">
  
</style>