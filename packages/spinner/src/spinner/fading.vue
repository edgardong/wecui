<template>
  <div class="wec-fading" :style="{ 'height': spinnerSize, 'width': spinnerSize}">
    <span v-for="(n,index) in 12" class="wec-fading__circle" :key="index" :class="['is-circle' + (n)]"></span>
  </div>
</template>
<script>
import common from "./common.vue";
export default {
  name: "wec-fading",
  created() {
    if (this.$isServer) {
      return;
    }
    this.styleNode = document.createElement("style");
    const css = `.wec-fading > span::before { background-color: ${
      this.spinnerColor
    }; }`;

    this.styleNode.type = "text/css";
    this.styleNode.rel = "stylesheet";
    this.styleNode.title = "fading circle style";
    document.getElementsByTagName("head")[0].appendChild(this.styleNode);
    this.styleNode.appendChild(document.createTextNode(css));
  },
  destroyed() {
    if (this.styleNode) {
      this.styleNode.parentNode.removeChild(this.styleNode);
    }
  },
  mixins: [common]
};
</script>

<style lang="scss" scoped>
.wec-fading {
  position: relative;
  // border-radius: 100%;
  // animation: wec-spinner-fading-rotate 1.4s infinite ease-in-out;
  .wec-fading__circle {
    display: inline-block;
    border-radius: 100%;
    size: 100%;
    position: absolute;
    left: 0;
    top: 0;
    &::before {
      content: " ";
      display: block;
      margin: 0 auto;
      size: 15%;
      border-radius: 100%;
      animation: wec-fading-circle 1.2s infinite ease-in-out both;
    }
  }

  @for $i from 2 to 12 {
    .is-circle#{$i} {
      transform: rotate(calc(360deg / 12 * (#{$i} - 1)));

      &::before {
        animation-delay: calc(-1.2s + 1.2s / 12 * (#{$i} - 1));
      }
    }
  }
}

@keyframes wec-fading-circle {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
