<template>
    <button class="wec-button" :class="[type?'wec-button--' + type:'', size? 'wec-button--'+ size:'']">
      <!-- 用来显示按钮文字 -->
      <span v-if="$slots.default"><slot></slot></span>
    </button>
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
          return ["small", "middle", "large","mini"].indexOf(value) !== -1;
        }
      },
      // 类型
      type: {
        type: String,
        default: "primary",
        validator: function(value) {
          return (
            ["primary", "warn", "info", "success", "error", "text"].indexOf(
              value
            ) !== -1
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
