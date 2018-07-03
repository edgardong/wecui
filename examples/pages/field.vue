
<template>
  <section class="demo-field">
    <wec-header :show-back="true" title="Field 表单编辑器"></wec-header>
    <wec-field label="用户名" type="text" v-model="userName"></wec-field>
    {{userName}}
    <wec-field label="邮箱" state="error" type="email" v-model="userEmail"></wec-field>
    {{userEmail}}
    <wec-field label="密码" state="warning" type="password"></wec-field>
    <wec-field label="手机号" type="tel"></wec-field>
    <wec-field label="网站" placeholder="http://www.edgarhao.cn/" type="url"></wec-field>
    <wec-field type="textarea" v-model="textarea"  label="网站" placeholder="http://www.edgarhao.cn/"></wec-field>
    {{textarea}}
  </section>
</template>
<script>
  export default {
    props: {},
    data: function() {
      return {
        userName:'',
        userEmail:'',
        textarea:''
      };
    },
    methods: {},
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-field {
    padding-top: 46px;
  }
</style>
