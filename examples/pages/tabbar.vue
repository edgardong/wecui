
<template>
  <section class="demo-tabbar">
    <wec-header :show-back="true" title="Tabbar 底部Tab"></wec-header>
    <wec-tabbar v-model="selected">
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
  .demo-tabbar {
    padding-top: 60px;
  }
</style>
