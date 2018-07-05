<template>
  <div class="wec-double" :style="{ 'height': spinnerSize, 'width': spinnerSize}">
    <div class="wec-double__outer" :style="{'background-color': spinnerColor }"></div>
    <div class="wec-double__inner" :style="{'background-color': spinnerColor }"></div>
  </div>
</template>
<script>
import common from "./common.vue";
export default {
  name: "wec-double",
  mixins: [common]
};
</script>

<style lang="scss" scoped>
.wec-double {
  position: relative;
  .wec-double__outer,
  .wec-double__inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: wec-spinner-double-rotate 2s infinite ease-in-out;
  }

  .wec-double__inner {
    animation-delay: -1s;
  }
}

@keyframes wec-spinner-double-rotate {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
