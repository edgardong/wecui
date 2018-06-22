<template>
  <div class="wec-switch" @click="checkHandler" :class="{'disabled':disabled}">
    <input type="checkbox" v-model="checkValue" class="wec-switch__input">
    <span class="wec-switch__core" :class="{'checked': checkValue}"></span>
  </div>
</template>
<script>
export default {
  name: "wec-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      checkValue: false
    };
  },
  methods: {
    checkHandler() {
      if (!this.disabled) {
        this.checkValue = !this.checkValue;
        this.$emit("input", this.checkValue);
      }
    }
  },
  watch: {
    checkValue(value, oldValue) {
      this.$emit("change", value);
    }
  },
  computed: {},
  mounted() {}
};
</script>
