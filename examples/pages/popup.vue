
<template>
  <section class="demo-popup">
    <wec-header :show-back="true" title="Popup 弹出框"></wec-header>

    <wec-button @click="clickHandler" size="block" class="flex1" type="info">点击弹出 Indicator</wec-button>
    <wec-button @click="clickHandler2" size="block" class="flex1" type="info">可配置 spinner</wec-button>

    <wec-popup v-model="visiable">
      <wec-button>这里有个按钮</wec-button>
    </wec-popup>
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        visiable: false
      };
    },
    methods: {
      clickHandler() {
        this.visiable = true;
      },
      clickHandler2() {}
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-popup {
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
