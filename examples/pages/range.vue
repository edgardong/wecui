
<template>
  <section class="demo-range">
    <wec-header :show-back="true" title="Range 滑动"></wec-header>
    <wec-range :step="11" :min="min" :max="max">
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
        min: 10,
        max: 100
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
</style>
