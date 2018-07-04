<template>
  <div class="wec-field">
    <wec-cell :label="label">
      <!-- 多行文本 -->
      <textarea @blur="blurHandler" @focus="focusHandler" :placeholder="placeholderValue" v-model="currentValue" :rows="rows" v-if="type=='textarea'"></textarea>
      <!-- 单行文本显示 -->
      <input @blur="blurHandler" @focus="focusHandler" :type="type" :placeholder="placeholderValue" v-else v-model="currentValue" :value="currentValue">
      <span class="wec-field__state" :class="['is-'+currentState]">
        <i class="icon iconfont" :class="['is-'+ currentState,'icon-'+currentState]"></i>
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
      default: "text"
    },
    state: {
      type: String,
      validator(value) {
        return ["success", "error", "warning", "loading"].indexOf(value) !== -1;
      }
    },
    value: {}
  },
  data() {
    return {
      currentValue: "",
      currentState: this.state
    };
  },
  methods: {
    blurHandler() {
      this.currentState = this.state;
      this.$emit("input", this.currentValue);
    },
    focusHandler() {
      this.currentState = "loading";
    }
  },
  computed: {
    placeholderValue: {
      get() {
        return this.placeholder || "请输入" + this.label;
      },
      set(value) {}
    }
  },
  mounted() {},
  watch: {
    value(val) {
      this.currentValue = val;
    }
    // currentValue(val) {
    //   this.$emit("input", val);
    // }
  }
};
</script>
