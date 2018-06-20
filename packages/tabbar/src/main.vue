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
    methods: {},
    computed: {},
    mounted() {}
  };
</script>
