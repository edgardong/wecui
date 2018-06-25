<template>
  <div class="wec-radio" @change="$emit('change', currentValue)">
    <span class="wec-radio__title">{{title}}</span>
    <wec-cell v-for="(op,index) in options" :key="index" :label="op.label" @click="clickHandler(op)">
      <span slot="left" class="wec-radio__core"
       :class="{'checked': currentValue==op.value,'disabled':op.disabled,'right':align=='right'}">
        <input type="radio" :value="op.value" class="wec-radio__core--input" v-model="currentValue">
      </span>
    </wec-cell>
  </div>
</template>
<script>
export default {
  name: "wec-radio",
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: [Array, Object],
      required: true
    },
    value: {
      type: [String, Object]
    },
    align: {
      type: String,
      default: "left",
      required: false,
      validator: value => {
        return ["left", "right"].includes(value);
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      // console.log(val);
      this.$emit("input", val);
    }
  },
  methods: {
    clickHandler(option) {
      // console.log(option);
      if (option.disabled) {
        return;
      }
      this.currentValue = option.value;
    }
  },
  computed: {},
  mounted() {}
};
</script>
