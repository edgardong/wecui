
<template>
  <section class="demo-actionsheet">
    <wec-header :show-back="true" title="Actionsheet 操作表"></wec-header>

    <wec-button @click="visiable1=true"  size="block" class="flex1" type="info">点击弹出 Indicator</wec-button>
    <wec-button @click="visiable2=true"  size="block" class="flex1" type="info">可配置 spinner</wec-button>

    <wec-actionsheet :actions="actions" :on-modal-close="false" cancel-text="还没想好呢" v-model="visiable1"></wec-actionsheet>
    <wec-actionsheet :actions="actions2" :cancel-text="cancelText" v-model="visiable2"></wec-actionsheet>
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        visiable1: false,
        visiable2: false,
        cancelText: "下次吧",
        actions: [
          {
            text: "第一个action",
            action: this.actionClick
          },
          {
            text: "第一个action",
            action: this.actionClick
          },
          {
            text: "第一个action",
            action: this.actionClick
          }
        ],
        actions2: [
          {
            text: "第二个action",
            action: this.sureClick
          }
        ]
      };
    },
    methods: {
      actionClick(value) {
        console.group("actionClick...");
        console.log(value);
        console.groupEnd();
      },
      sureClick(index) {
        this.$messagebox.alert("好像还挺好玩的呢。。。" + index);
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-actionsheet {
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
