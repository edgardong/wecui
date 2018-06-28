<template>
  <div class="wec-checklist" @change="$emit('change', currentValue)" :class="{ 'is-limit': max <= currentValue.length }">
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
        type: Array
      },
      align: {
        type: String,
        default: "left",
        required: false,
        validator: value => {
          return ["left", "right"].includes(value);
        }
      },
      max: {
        type: Number
      }
    },
    data() {
      return {
        currentValue: this.value
      };
    },
    computed: {
      limit() {
        return this.max < this.currentValue.length;
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      currentValue(val) {
        if (this.limit) val.pop();
        this.$emit("input", val);
      }
    },
    methods: {
      clickHandler(option) {
        // console.log(option);
        if (option.disabled) {
          return;
        }

        // 如果已存在该数，删除，否则添加进入数组中
        if (this.currentValue.includes(option.value)) {
          let index = this.currentValue.indexOf(option.value);
          this.currentValue.splice(index, 1);
        } else {
          this.currentValue.push(option.value);
        }
      }
    },
    mounted() {}
  };
</script>
