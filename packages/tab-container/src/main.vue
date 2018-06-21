<template>
  <div class="wec-tab-container" :class="{'has-header': getHeader,'has-footer':getFooter}">
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
    return {};
  },
  methods: {
    getHeader: function() {
      this.$nextTick(() => {
        let header = document.querySelector(".wec-header");
        return header !== null;
      });
    },
    getFooter: function() {
      this.$nextTick(() => {
        let tabbar = document.querySelector(".wec-tabbar");
        return tabbar !== null;
      });
    }
  },
  computed: {},
  mounted() {}
};
</script>
