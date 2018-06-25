<template>
  <div class="wec-checklist" @change="$emit('change', currentValue)">
    <span class="wec-checklist__title">{{title}}</span>
    <wec-cell v-for="(op,index) in options" :key="index" :label="op.label" @click="clickHandler(op)">
      <span slot="left" class="wec-checklist__core"
       :class="{'checked': currentValue.includes(op.value),'disabled':op.disabled,'right':align=='right'}">
        <input type="checkbox" :value="op.value" class="wec-checklist__core--input" v-model="currentValue">
      </span>
    </wec-cell>
  </div>
</template>
<script>
  export default {
    name: "wec-checklist",
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
        this.$emit("input", val);
      }
    },
    methods: {
      clickHandler(option) {
        if (option.disabled) {
          return;
        }
        this.currentValue += option.value;
      }
    },
    computed: {},
    mounted() {}
  };
</script>
