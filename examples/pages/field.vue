
<template>
  <section class="demo-field">
    <wec-header :show-back="true" title="Field 表单编辑器"></wec-header>
    <wec-field label="用户名"></wec-field>
    <wec-field label="邮箱" state="error"></wec-field>
    <wec-field label="密码" state="warning"></wec-field>
    <wec-field label="手机号"></wec-field>
    <wec-field label="网站" placeholder="http://www.edgarhao.cn/"></wec-field>
  </section>
</template>
<script>
export default {
  props: {},
  data: function() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.demo-field{
  padding-top: 46px;
}
</style>
