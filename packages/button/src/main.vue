<template>
  <div class="wec-button">
    <button class="button" :class="[type?'button-' + type:'', size? 'button-'+ size:'']">
      <!-- 用来显示按钮文字 -->
      <span v-if="$slots.default"><slot></slot></span>
    </button>
  </div>
</template>
<script>
export default {
  name: "wec-button",
  props: {
    // 尺寸
    size: {
      type: String,
      default: "middle",
      validator: function(value) {
        // 值必须是这些字符串中的一个
        return ["small", "middle", "large"].indexOf(value) !== -1;
      }
    },
    // 类型
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        return (
          ["primary", "warn", "success", "error", "text"].indexOf(value) !== -1
        );
      }
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>
