
<template>
  <section class="demo-picker">
    <wec-header :show-back="true" title="Picker 选择器"></wec-header>
    <wec-button @click="openPickerHandler" size="block">显示选择框</wec-button>
    <wec-picker ref="picker" title="选择方式" :slots="slots" :visiable="showPicker"></wec-picker>
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        showPicker: true,
        slots: [
          {
            options: ["武汉", "襄阳", "苏州", "上海", "南漳", "淮南", "凤台"]
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
        this.showPicker = true;
        console.log(this.$refs.picker)
        this.$refs.picker.show();
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-picker {
    padding-top: 46px;
  }
</style>
