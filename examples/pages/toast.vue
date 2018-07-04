
<template>
  <section class="demo-toast">
    <wec-header :show-back="true" title="Toast 提示框"></wec-header>

    <wec-button @click="clickHandler" size="block" class="flex1" type="success">点击弹出 Toast</wec-button>
    <wec-button @click="clickHandler2" size="block" class="flex1" type="success">点击弹出带有 icon 的 Toast</wec-button>
    <wec-button @click="clickHandler3" size="block" class="flex1" type="success">自定义 Toast 位置</wec-button>
  </section>
</template>
<script>
export default {
  props: {},
  data: function() {
    return {};
  },
  methods: {
    clickHandler() {
      let option = {
        message: "toast弹出框"
      };

      this.$toast(option);
    },
    clickHandler2() {
      let option = {
        message: "toast弹出框2",
        duration: 1500,
        // position: "top",
        iconClass: "success",
        iconColor: '#0099ff'
      };

      this.$toast(option);
    },
    clickHandler3() {
      let option = {
        message: "toast弹出框3",
        position: "bottom"
      };

      this.$toast(option);
    }
  },
  computed: {},
  mounted() {
    // console.log(this.$toast);
  }
};
</script>
<style lang="scss" scoped>
.demo-toast {
  // padding-top: 46px;
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
    border-color:#f6f8fa;
    background-color: #f6f8fa;
  }
}
</style>
