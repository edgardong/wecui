<template>
  <span class="wec-spinner">
    <component :is="componentText"></component>
  </span>
</template>
<script>
export default {
  name: "wec-spinner",
  props: {
    type: {
      type: String,
      default: "snake",
      validator(value) {
        return ["snake", "double", "triple", "fading"].indexOf(value) !== -1;
      }
    },
    color: {
      type: String
    },
    size: {
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    componentText: {
      get() {
        return `wec-${this.type}`;
      },
      set(value) {}
    }
  },
  mounted() {},
  components: {
    WecSnake: require("./spinner/snake.vue").default,
    WecDouble: require("./spinner/double.vue").default,
    WecTriple: require("./spinner/triple.vue").default,
    WecFading: require("./spinner/fading.vue").default
  }
};
</script>
