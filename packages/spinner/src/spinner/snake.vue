<template>
  <div class="wec-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': spinnerSize,
    'width': spinnerSize
    }">
  </div>
</template>
<script>
import common from "./common.vue";
export default {
  name: "wec-snake",
  mixins: [common]
};
</script>

<style lang="scss" scoped>
.wec-snake {
  animation: wec-spinner-rotate 0.8s infinite linear;
  border: 4px solid transparent;
  border-radius: 50%;
}

@keyframes wec-spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
