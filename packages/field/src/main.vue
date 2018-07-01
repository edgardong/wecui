<template>
  <div class="wec-field">
    <wec-cell :label="label">
      <input type="text" :placeholder="placeholderValue">
      <span class="wec-field__state">
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
        default: "success",
        validator(value) {
          return ["success", "error", "warning"].indexOf(value) !== -1;
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
