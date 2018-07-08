<template>
  <div class="wec-popup" v-show="currentValue">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "wec-popup",
    props: {
      value: {},
      modal: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    methods: {},
    computed: {
      currentValue: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        }
      }
    },
    mounted() {}
  };
</script>
