<template>
  <div class="wec-hello" @click="handleClick">
    <p class="wec-hello__message">{{ message }}</p> 
  </div>
</template>

<script>
export default {
  name: 'wecHello',
  props: {
    message: String
  },
  methods: {
    handleClick () {
      return new Promise((resolve) => {
        resolve()
      }).then(() => {
        this.$emit('click', 'this is click emit')
      })
    }
  }
}
</script>