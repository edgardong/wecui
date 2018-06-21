<template>
  <div class="wec-tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "wec-tabbar",
    props: {
      value: {
        type: String,
        required: true
      }
    },
    data: function() {
      return {};
    },
    watch: {
      value(val,oldVal) {
        console.log('wec-tabbar...');
        console.log(this.value)
      }
    },
    methods: {},
    computed: {},
    mounted() {}
  };
</script>
