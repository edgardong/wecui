
<template>
  <section class="demo-picker">
    <wec-header :show-back="true" title="Picker 选择器"></wec-header>

    <wec-button @click="openPickerHandler" size="block" class="flex1" type="success"> 显示选择框</wec-button>

    <wec-picker ref="picker" v-model="values" @pickok="changeHandler" title="选择方式" :slots="slots"></wec-picker>

    {{values.join('')}}


    <wec-button @click="openPickerHandler1" size="block" class="flex1" type="success"> 显示选择框1</wec-button>

    <wec-picker ref="picker1" :item-count="3" v-model="values1" @pickok="changeHandler1" title="选择方式" :slots="slots1"></wec-picker>

    {{values1.join(' · ')}}
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        values: ["襄阳", "广州"],
        values1: ["武汉", "杭州"],
        slots: [
          {
            options: ["武汉", "襄阳", "苏州", "上海", "南漳", "淮南", "凤台"],
            defaultIndex: 4
          },
          {
            divider: true,
            content: "-"
          },
          {
            options: ["杭州", "南京", "常州", "深圳", "广州"]
          }
        ],
        slots1: [
          {
            options: ["武汉", "襄阳", "苏州", "上海", "南漳", "淮南", "凤台"],
            defaultIndex: 4
          },
          {
            divider: true,
            content: "-"
          },
          {
            options: ["杭州", "南京", "常州", "深圳", "广州"]
          }
        ]
      };
    },
    methods: {
      openPickerHandler() {
        this.$refs.picker.show();
      },
      changeHandler(picker, values) {
        this.values = values;
      },
      openPickerHandler1() {
        this.$refs.picker1.show();
      },
      changeHandler1(picker, values) {
        this.values = values;
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-picker {
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
