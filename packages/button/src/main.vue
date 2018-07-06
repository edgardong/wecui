<template>
  <button class="wec-button" :disabled="disabled" @click="handleClick" :style="{'color':color}" :class="[type?'wec-button--' + type:'', size? 'wec-button--'+ size:'', {'is-disabled':disabled,'is-plain': plain}]">
    <!-- 用来显示按钮文字 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "wec-button",
  props: {
    color: {
      type: String,
      required: false
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    },
    plain: {
      // 是否显示为平滑按钮
      type: Boolean,
      default: false
    },
    // 尺寸
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        // 值必须是这些字符串中的一个
        return (
          ["small", "medium", "large", "mini", "block"].indexOf(value) !== -1
        );
      }
    },
    // 类型
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        return (
          ["primary", "warning", "info", "success", "error", "text"].indexOf(
            value
          ) !== -1
        );
      }
    }
  },
  data() {
    return {};
  },
  created: function() {
    // console.log(this.plain)
  },
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
