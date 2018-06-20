<template>
  <section class="demo-button">

    <wec-header class="header1" :show-back="true" title="按钮demo"></wec-header>

    <div class="button-item first-item">
      <wec-button plain>default</wec-button>
    </div>
    <div class="button-item">
      <wec-button size="block">block</wec-button>
    </div>
    <div class="button-item">
      <wec-button @click="test" size="mini">mini</wec-button>
    </div>
    <div class="button-item">
      <wec-button size="small">small</wec-button>
    </div>
    <div class="button-item">
      <wec-button size="medium">middle</wec-button>
    </div>
    <div class="button-item">
      <wec-button size="large">large</wec-button>
    </div>

    <div class="button-item">
      <wec-button type="primary">primary</wec-button>
    </div>
    <div class="button-item">
      <wec-button type="info">info</wec-button>
    </div>
    <div class="button-item">
      <wec-button type="warning">warning</wec-button>
    </div>
    <div class="button-item">
      <wec-button @click="test" disabled type="success">success</wec-button>
    </div>
    <div class="button-item">
      <wec-button type="error">error</wec-button>
    </div>
    <div class="button-item">
      <wec-button type="text">text</wec-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    test(evt) {
      console.log(evt);
      alert("12345");
    },
    backClick1() {
      console.log('button header click....');
    }
  }
};
</script>


<style lang="scss" scoped>
.demo-button {
  // text-align: center;
  // margin: 0 20px;
  .header1 {
  }
  .first-item {
    padding-top: 60px;
  }
  .button-item {
    margin-bottom: 10px;
  }
}
</style>
