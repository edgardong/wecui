<template>
  <div class="wec-header">
      <span>{{title}}</span>
  </div>
</template>

<script>
  export default {
    name:'wecHeader',
    props:{
      title: String
    }
  }
</script>
<style lang="stylus">
@import '../../../src/style/var.styl'

.wec-header
  position fixed
  top 0
  left 0
  right 0
  height 46px
  line-height 46px
  background-color $color-blue
  text-align center
  display inline-block
</style>