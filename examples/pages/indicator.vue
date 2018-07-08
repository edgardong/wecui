
<template>
  <section class="demo-indicator">
    <wec-header :show-back="true" title="Indicator 提示框"></wec-header>

    <wec-button @click="clickHandler" size="block" class="flex1" type="info">点击弹出 Indicator</wec-button>
    <wec-button @click="clickHandler2" size="block" class="flex1" type="info">可配置 spinner</wec-button>
    <wec-button @click="clickHandler3" size="block" class="flex1" type="info">点击弹出带有文字的 Indicator</wec-button>
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
          // iconClass: "loading",
          // text:'测试看看',
          // spinnerClass: "fading",
          // spinnerClass: "double",
          // spinnerClass: "triple"
          spinnerClass: "snake"
        };

        this.$indicator.open(option);

        setTimeout(() => {
          this.$indicator.close();
        }, 2000);
      },
      clickHandler2() {
        let option = {
          spinnerClass: "fading"
        };

        this.$indicator.open(option);
        setTimeout(() => {
          this.$indicator.close();
        }, 2000);
      },
      clickHandler3() {
        let option = {
          spinnerClass: "fading",
          text: "拼命加载中..."
        };

        this.$indicator.open(option);
        setTimeout(() => {
          this.$indicator.close();
        }, 2000);
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-indicator {
    padding-top: 46px;
    margin: 0 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    /*水平居中*/
    align-items: center;
    flex-direction: column;
    .flex1 {
      margin: 10px 0;
      color: #656b79;
      border-color: #f6f8fa;
      background-color: #f6f8fa;
    }
  }
</style>
