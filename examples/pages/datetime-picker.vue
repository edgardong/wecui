
<template>
  <section class="demo-datetime-picker">
    <wec-header :show-back="true" title="DatetimePicker 时间选择器"></wec-header>
    <!-- 日期选择器 -->
    <wec-button @click="openPickerHandler" size="block" class="flex1" type="success">打开日期选择器</wec-button>
    <wec-datetime-picker ref="datepicker" v-model="pickerDate" ></wec-datetime-picker>
    <div>选择的日期： {{pickerDate}}</div> 

    <!-- 日期时间选择器 -->
    <wec-button @click="openPickerHandler1" size="block" class="flex1" type="success">打开日期时间选择器</wec-button>
    <wec-datetime-picker ref="datepicker1" v-model="pickerDate1" ></wec-datetime-picker>
    <div>选择的日期： {{pickerDate1}}</div> 
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        pickerDate:null,
        pickerDate1:null
      };
    },
    methods: {
      openPickerHandler() {
        this.$refs.datepicker.show();
      },
      openPickerHandler1() {
        this.$refs.datepicker1.show();
      },
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
