
<template>
  <section class="demo-indicator">
    <wec-header :show-back="true" title="Indicator 提示框"></wec-header>

    <wec-button @click="clickHandler" type="info">点击弹出 Indicator</wec-button>
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {};
    },
    methods: {
      clickHandler() {
        let option = {
          iconClass: "loading",
          // text:'测试看看'
        };

        this.$indicator(option);
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-indicator {
    padding-top: 46px;
  }
</style>
