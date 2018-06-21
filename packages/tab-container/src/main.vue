<template>
  <div class="wec-tab-container" :style="getStyle" ref="wectabcontainer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wec-tab-container",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      hasFooter: false,
      hasHeader: false
    };
  },
  methods: {},
  computed: {
    getClass() {},
    getStyle: {
      cache: false,
      get() {
        this.$nextTick(() => {
          let header = document.querySelector(".wec-header");
          let tabbar = document.querySelector(".wec-tabbar");
          let navbar = document.querySelector(".wec-navbar");
          let oldClassName = this.$refs.wectabcontainer.className;
          let className = "";
          if (header && oldClassName.indexOf("has-header") == -1) {
            className += " has-header ";
          }
          if (tabbar && oldClassName.indexOf("has-footer") == -1) {
            className += " has-footer ";
          }
          if (navbar) {
            className += " has-navbar";
          }
          this.$refs.wectabcontainer.className += className;
        });
      }
    }
  },
  mounted() {}
};
</script>
