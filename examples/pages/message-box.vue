
<template>
  <section class="demo-message-box">
    <wec-header :show-back="true" title="MessageBox 弹出式提示框"></wec-header>
    
    <wec-button @click="clickHandler" size="block" class="flex1" type="info">点击弹出 Indicator</wec-button>
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
          message: "我知道了"
        };

        // console.log(this.$messagebox)

        this.$messagebox
          .alert(option)
          .then(res => {
            // debugger;
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-message-box {
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
