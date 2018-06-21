
<template>
  <section class="demo-tab-container">
    <wec-header :show-back="true" title="TabContainer Tab面板"></wec-header>
    <wec-tab-container v-model="index">请配合Tabbar使用</wec-tab-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      index: "1"
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-tab-container{
  padding-top: 60px;
}
</style>
