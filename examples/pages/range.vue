
<template>
  <section class="demo-range">
    <wec-header :show-back="true" title="Range 滑动"></wec-header>

    <h2>基本用法</h2>
    <wec-range :step="11" :min="min" :max="max" v-model="value" :label="'滑块 ' + value">
      <span slot="left">{{min}}</span>
      <span slot="right">{{max}}</span>
    </wec-range>

    <h2>禁用状态</h2>
    <wec-range :step="11" :min="min" :max="max" :disabled="true" v-model="value1" :label="'滑块 ' + value1">
      <span slot="left">{{min}}</span>
      <span slot="right">{{max}}</span>
    </wec-range>
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {
        value:40,
        min: 10,
        max: 100,
        value1:30
      };
    },
    methods: {},
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-range {
    padding-top: 46px;
  }

  h2 {
    text-align: center;
    margin: 15px 0;
  }
</style>
