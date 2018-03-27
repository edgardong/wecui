<template>
  <div class="mobile-container">
      <div v-show="!visible" class="mobile-logo"><img src="../../src/assets/images/logo.png" alt="WECUI">{{desc}}</div>
      <router-view></router-view>
      <mobile-nav v-show="!visible" :groups="navConfig['zh-CN'][0].groups" base="/component"></mobile-nav>
  </div>
</template>
<script>
  import MobileNav from './components/mobile-nav'
  import navConfig from './nav.config.json'

  export default {
    name: 'MobileApp',
    data () {
      return {
        navConfig: navConfig,
        desc:'WECUI 移动组件库'
      }
    },
    components:{
      MobileNav
    },
    mounted() {
      // this.$root.show = true;
    },
    computed: {
      visible() {
        return ['/'].indexOf(this.$route.path) < 0;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .mobile-container
    height 100%
    width 100%
    background-color #eeeeee
    .mobile-logo
      text-align center
      padding-top 30%
      padding-bottom 20px
      img        
        display block
        margin-left 50%
        transform translateX(-50%)
        padding-bottom 10px
</style>