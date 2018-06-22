
<template>
  <section class="demo-switch">
    <wec-header :show-back="true" title="Switch 开关"></wec-header>
    <wec-switch v-model="switchValue" @change="changeHadler" disabled></wec-switch>
    <wec-switch v-model="switchValue" @change="changeHadler"></wec-switch>
    {{switchValue}}

    <wec-cell :label="'值'+switchValue">
      <wec-switch v-model="switchValue" @change="changeHadler"></wec-switch>
    </wec-cell>
  </section>
</template>
<script>
export default {
  data() {
    return {
      switchValue: ""
    };
  },
  methods: {
    changeHadler(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-switch {
  padding-top: 46px;
}
</style>
