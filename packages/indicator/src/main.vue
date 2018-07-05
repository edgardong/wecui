<template>
  <transition name="fade">
    <div class="wec-indicator" v-show="visiable">
      <span class="wec-indicator__img" v-if="iconClass">
        <i class="icon iconfont" :class="['icon-' + iconClass]"></i>
      </span>
      <wec-spinner :type="spinnerClass" v-if="spinnerClass"></wec-spinner>
      <span class="wec-indicator__text" v-if="text">{{text}}</span>
    </div>
  </transition>
</template>
<script type="text/bable">
export default {
  name: "wec-indicator",
  props: {
    text: {
      type: String
    },
    iconClass: {
      type: String
    },
    spinnerClass: {
      type: String,
      default: "snake"
    },
    visiable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>
