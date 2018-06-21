<template>
  <div class="wec-navbar" ref="wecnavbar" :style="getStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wec-navbar",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    getStyle: {
      cache: false,
      get() {
        this.$nextTick(() => {
          let header = document.querySelector(".wec-header");
          let oldClassName = this.$refs.wecnavbar.className;
          let className = "";
          if (header && oldClassName.indexOf("has-header") == -1) {
            className += " has-header ";
          }
          this.$refs.wecnavbar.className += className;
        });
      }
    }
  },
  mounted() {}
};
</script>
