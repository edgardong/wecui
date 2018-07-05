
<template>
  <section class="demo-spinner">
    <wec-header :show-back="true" title="Spinner 加载动画"></wec-header>
    <wec-cell label="snake">
      <wec-spinner type="snake"></wec-spinner>
    </wec-cell>

    <wec-cell label="double">
      <wec-spinner type="double"></wec-spinner>
    </wec-cell>

    <wec-cell label="triple">
      <wec-spinner type="triple"></wec-spinner>
    </wec-cell>

    <wec-cell label="fading">
      <wec-spinner type="fading"></wec-spinner>
    </wec-cell>
  </section>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.demo-spinner {
  padding-top: 46px;
}
</style>
