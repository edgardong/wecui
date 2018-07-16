
<template>
  <section class="demo-picker">
    <wec-header :show-back="true" title="Picker 选择器"></wec-header>
    <wec-picker title="选择方式" :slots="slots"></wec-picker>
  </section>
</template>
<script>
export default {
  props: {},
  data() {
    return {
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
  methods: {},
  computed: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.demo-picker {
  padding-top: 46px;
}
</style>
