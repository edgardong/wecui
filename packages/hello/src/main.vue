<template>
  <div class="wec-hello">
    <p class="wec-hello__message">{{ message }}</p> 
  </div>
</template>

<script>
export default {
  name: 'wecHello',
  props: {
    message: String
  }
}
</script>