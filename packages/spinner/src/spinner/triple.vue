<template>
  <div class="wec-triple" :style="{ 'height': spinnerSize, 'width': spinnerSize}">
    <div class="wec-triple__left" :style="{'background-color': spinnerColor }"></div>
    <div class="wec-triple__center" :style="{'background-color': spinnerColor }"></div>
    <div class="wec-triple__right" :style="{'background-color': spinnerColor }"></div>
  </div>
</template>
<script>
import common from "./common.vue";
export default {
  name: "wec-triple",
  mixins: [common]
};
</script>

<style lang="scss" scoped>
.wec-triple {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .wec-triple__left,
  .wec-triple__center, .wec-triple__right {
    width: 30%;
    height: 30%;
    border-radius: 50%;
    opacity: 0.6;
    animation: wec-spinner-triple-rotate 1.4s infinite ease-in-out;
  }

  .wec-triple__left {
    animation-delay: -0.32s;
  }

  .wec-triple__center {
    animation-delay: -0.16s;
  }
}

@keyframes wec-spinner-triple-rotate {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
