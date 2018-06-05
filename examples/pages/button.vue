<template>
  <section class="demo-button">
      <div class="button-item"><wec-button>默认按钮</wec-button></div>
      <div class="button-item"><wec-button size="mini">小按钮</wec-button></div>
      <div class="button-item"><wec-button size="middle">常规按钮</wec-button></div>
      <div class="button-item"><wec-button size="large">大按钮</wec-button></div>


      <div class="button-item"><wec-button type="primary">primary</wec-button></div>
      <div class="button-item"><wec-button type="info">info</wec-button></div>
      <div class="button-item"><wec-button type="warn">warn</wec-button></div>
      <div class="button-item"><wec-button type="success">success</wec-button></div>
      <div class="button-item"><wec-button type="error">error</wec-button></div>
      <div class="button-item"><wec-button type="text">text</wec-button></div>
  </section>
</template>

<style lang="scss" scoped>
.demo-button {
  .button-item {
    margin-bottom: 10px;
  }
}
</style>
