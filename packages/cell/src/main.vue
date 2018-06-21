<template>
  <div class="wec-cell">
    <span class="wec-cell--label">{{label}}</span>
    <span class="wec-cell--value">{{value}}</span>
  </div>
</template>
<script>
export default {
  name: "wec-cell",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
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
