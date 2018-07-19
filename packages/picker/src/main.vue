<template>
  <div class="wec-picker" v-if="currentVisiable" @click="maskerHandler">
    <div class="wec-picker__wrapper" @click.stop>
      <!-- 顶部操作区域 -->
      <div class="wec-picker__wrapper--toolbar">
        <wec-button type="text" @click="cancelHandler">取消</wec-button>
        <span v-if="title">{{title}}</span>
        <wec-button type="text" @click="sureHandler">确定</wec-button>
      </div>
      <!-- 选择区域 -->
      <div class="wec-picker__wrapper--content" :style="{height:itemCount*itemHeight+'px'}">
        <div class="picker-wrapper">
          <div class="scroll-wrapper">
            <div class="picker-slot">
              <picker-item :slotObj="slot" v-model="pickerValues[slot.slotIndex]" :class="{'divider-item':slot.divider,'content-item': !slot.divider}" v-for="(slot,index) in slots" :key="index"></picker-item>
              <!-- 中部高亮区域 -->
              <div class="picker-slot--highlight" ref="highlight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PickerItem from "./picker-item";
  export default {
    name: "wec-picker",
    props: {
      title: {
        type: String
      },
      slots: {
        type: Array,
        required: true
      },
      onModalClose: {
        type: Boolean,
        default: false
      },
      itemCount: {
        type: Number,
        default: 5
      },
      itemHeight: {
        type: Number,
        default: 36
      },
      value: {
        type: Array
      }
    },
    data() {
      return {
        pickerValues: [],
        currentVisiable: false
      };
    },
    created() {
      this.value.forEach((val, index) => {
        this.pickerValues[index] = val;
      });
    },
    methods: {
      getValues() {
        // return this.pickerValues.concat();
      },
      cancelHandler() {
        this.currentVisiable = false;
      },
      sureHandler() {
        // this.values1 = this.pickerValues;
        this.$emit("input", this.pickerValues.concat());
        this.$emit("pickok", this, this.pickerValues.concat());
        this.currentVisiable = false;
        // this.$destroy();
      },
      show() {
        this.currentVisiable = true;
      },
      maskerHandler() {
        if (!this.onModalClose) {
          return;
        }
        this.currentVisiable = false;
      }
    },
    watch: {
      pickerValues(value) {
        this.$emit("change", value[1]);
      }
    },
    computed: {},
    mounted() {
      let highlight = this.$refs.highlight;
      // slots动态添加slotIndex元素,去掉divider的Index
      let _this = this;
      let count = 0;
      this.slots.forEach((slot, index) => {
        if (!slot.divider) {
          _this.$set(_this.slots[index], "slotIndex", count);
          count++;
        }
      });
    },
    components: {
      PickerItem
    }
  };
</script>
