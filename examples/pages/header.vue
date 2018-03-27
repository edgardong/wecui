<template>
  <div class="wec-header-demo">
    <wec-header class="header1" :show-back="true" title="显示返回按钮" @back-click="backClick1"></wec-header>
    <wec-header class="header2" title="WECUI Hedaer"></wec-header>
    <wec-header class="header3" :show-more="true" title="显示更多按钮" @more-click="showMore"></wec-header>
    <wec-header class="header4" @back-click="backClick" :show-back="true" :show-more="true" title="显示左右按钮"></wec-header>
  </div>
</template>
<script>
  export default {
    methods: {
      showMore() {
        alert('点了更多的按钮')
      },
      backClick() {
        alert('点了返回按钮')
      },
      backClick1() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="stylus" scoped>
.wec-header-demo
  display flex
  flex-direction row
  align-items center
  .header2
    top 80px
  .header3
    top 160px
  .header4
    top 240px
</style>
