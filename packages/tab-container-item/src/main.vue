<template>
  <div class="wec-tab-container-item" :class="{ 'is-selected': $parent.value === id }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "wec-tab-container-item",
  props: {
    id: {
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
