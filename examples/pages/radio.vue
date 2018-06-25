
<template>
  <section class="demo-radio">
    <wec-header :show-back="true" title="Radio 单选框"></wec-header>
    <wec-radio v-model="value" :title="label" :options="options"></wec-radio>
    <wec-cell label="城市">{{value +' , '+(value?options[value-1].label:'')}}</wec-cell>

    <wec-radio v-model="value1" :title="label1" :options="options1" align="right"></wec-radio>
    <wec-cell label="性别">{{value1 +' , '+ (value1?options1[value1-1].label:'')}}</wec-cell>
  </section>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: "",
      label: "选择区域",
      label1: "选择性别",
      options: [
        {
          label: "武汉市",
          value: "1",
          disabled: false
        },
        {
          label: "襄阳市",
          value: "2",
          disabled: false
        },
        {
          label: "其他",
          value: "3",
          disabled: true
        }
      ],      
      options1: [
        {
          label: "男",
          value: "1",
          disabled: false
        },
        {
          label: "女",
          value: "2",
          disabled: false
        },
        {
          label: "其他",
          value: "3",
          disabled: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.demo-radio {
  padding-top: 46px;
}
</style>
