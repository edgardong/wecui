<template>
  <div class="wec-tab-item" @click="$parent.$emit('input', id)" :class="{ 'is-selected': $parent.value === id }">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "wec-tab-item",
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      };
    },
    methods: {},
    computed: {},
    mounted() {}
  };
</script>
