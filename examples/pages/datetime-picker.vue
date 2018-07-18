
<template>
  <section class="demo-datetime-picker">
    <wec-header :show-back="true" title="DatetimePicker 时间选择器"></wec-header>

    <wec-button @click="openPickerHandler" size="block" class="flex1" type="success">打开时间选择器</wec-button>

    <wec-datetime-picker ref="datepicker"></wec-datetime-picker>
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {};
    },
    methods: {
      openPickerHandler() {
        this.$refs.datepicker.show();
      },
      changeHandler(picker, values) {
        this.values = values;
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-datetime-picker {
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
