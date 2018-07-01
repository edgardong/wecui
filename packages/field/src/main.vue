<template>
  <div class="wec-field">
    <wec-cell :label="label">
      <!-- 多行文本 -->
      <textarea  :placeholder="placeholderValue" :rows="rows" v-if="type=='textarea'"></textarea>
      <!-- 单行文本显示 -->
      <input :type="type" :placeholder="placeholderValue" v-else >
      <span class="wec-field__state" :class="['is-'+state]">
        <i class="icon iconfont" :class="['is-'+ state,'icon-'+state]"></i>
      </span>
    </wec-cell>
  </div>
</template>
<script>
  export default {
    name: "wec-field",
    props: {
      label: {
        type: String,
        required: true
      },
      rows: {
        type: Number,
        default: 4
      },
      placeholder: {
        type: String
      },
      type: {
        type: String,
        default: "text",
        validator: function(value) {
          return (
            [
              "text",
              "number",
              "tel",
              "email",
              "password",
              "url",
              "textarea"
            ].indexOf(value) !== -1
          );
        }
      },
      state: {
        type: String,
        default: "loading",
        validator(value) {
          return ["success", "error", "warning", "loading"].indexOf(value) !== -1;
        }
      }
    },
    data: function() {
      return {};
    },
    methods: {},
    computed: {
      placeholderValue: {
        get() {
          return this.placeholder || "请输入" + this.label;
        },
        set(value) {}
      }
    },
    mounted() {}
  };
</script>
