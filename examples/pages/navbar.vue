
<template>
  <section class="demo-navbar">
    <wec-header :show-back="true" title="Navbar 顶部选项卡"></wec-header>

    <wec-navbar v-model="selected">
      <wec-tab-item id="first">第一个tab</wec-tab-item>
      <wec-tab-item id="second">第二个tab</wec-tab-item>
      <wec-tab-item id="third">第三个tab</wec-tab-item>
    </wec-navbar>

    <!-- 中间内容Tab -->
    <wec-tab-container v-model="selected">
      <wec-tab-container-item id="first">
        <div v-for="(n,index) in 100" :key="index" class="item">第一个container-
          <span>{{n}}</span>
        </div>
      </wec-tab-container-item>
      <wec-tab-container-item id="second">第二个container</wec-tab-container-item>
      <wec-tab-container-item id="third">第三个container</wec-tab-container-item>
    </wec-tab-container>

    <!-- 底部tab选项卡 -->
    <wec-tabbar v-model="selected" v-if="false">
      <wec-tab-item id="first">第一个tab</wec-tab-item>
      <wec-tab-item id="second">第二个tab</wec-tab-item>
      <wec-tab-item id="third">第三个tab</wec-tab-item>
    </wec-tabbar>

  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: "first"
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.demo-navbar {
  padding-top: 60px;
}
</style>
