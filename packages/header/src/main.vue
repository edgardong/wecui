<template>
  <div class="wec-header">
    <!-- 左侧返回按钮 -->
    <i v-if="showBack" @click="backClick" class="icon iconfont icon-xiangzuo1 left-icon"></i>
    <!-- 标题 -->
    <span>{{title}}</span>
    <!-- 是否显示更多按钮 -->
    <i v-if="showMore" @click="moreClick" class="icon iconfont icon-gengduo right-icon"></i>
  </div>
</template>

<script>
  export default {
    name:'wecHeader',
    props:{
      title: String,
      showMore: {
        type: Boolean,
        default: false
      },
      showBack:{
        type:Boolean,
        default: false
      }
    },
    methods: {
      backClick() {
        this.$emit('back-click',{})
      },
      moreClick() {
        this.$emit('more-click',{})
      }
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
  color #ffffff
  .left-icon
    font-size 16px
    position absolute
    left 10px
  .right-icon
    font-size 16px
    position absolute
    right 10px
</style>