<template>
  <div class="w-hello">
    hello {{ message }}
  </div>
</template>

<script>
export default {
  name: 'w-hello',
  props: {
    message: String
  }
}
</script>