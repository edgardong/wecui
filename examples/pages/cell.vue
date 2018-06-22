
<template>
  <section class="demo-cell">
    <wec-header :show-back="true" title="Cell 单元格"></wec-header>
    <!-- 有icon的单元格 -->
    <wec-cell label="左边的label" icon="icon-help" value="带 icon" link @click="clickHandler"></wec-cell>
    <!-- 有注释的单元格 -->
    <wec-cell label="左边的label" value="右边的值" comment="label注释"></wec-cell>
    <!--  -->
    <wec-cell label="左边的label" comment="label注释" icon="icon-more">
      <div style="color:red;">这里是html元素</div>
    </wec-cell>

    <!--  -->
    <wec-cell label="左边的label" comment="label注释" icon="icon-more">
      <wec-button @click="buttonHandler">按钮哦</wec-button>
    </wec-cell>
    <!-- 带连接的单元格 -->
    <wec-cell label="有链接哦" link value="带链接" to="http://blog.edgarhao.cn/" comment="连接到http://blog.edgarhao.cn"></wec-cell>
    <wec-cell label="有链接哦" link value="带链接" :to="{path: '/component/tabbar'}" comment="连接到tabbar组件"></wec-cell>
  </section>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      console.log('点击了单元格。。。')
    },
    buttonHandler() {
      console.log('点击了按钮。。。')
    }
  }
}
</script>


<style lang="scss" scoped>
.demo-cell{
  padding-top: 46px;
}
</style>
