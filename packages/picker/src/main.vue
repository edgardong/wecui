<template>
  <div class="wec-picker" v-show="visiable && currentVisiable" @click="maskerHandler">
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
            <div class="picker-slot" :class="{'divider-item':slot.divider,'content-item': !slot.divider}" v-for="(slot,index) in slots" :key="index">
              <picker-item :slotObj="slot"></picker-item>
            </div>
            <div class="picker-slot--highlight" ref="highlight"></div>
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
      visiable: {
        type: Boolean,
        default: true
      },
      title: {
        type: String
      },
      slots: {
        type: Array,
        required: true
      },
      onModalClose: {
        type: Boolean,
        default: true
      },
      itemCount: {
        type: Number,
        default: 5
      },
      itemHeight: {
        type: Number,
        default: 36
      }
    },
    data() {
      return {
        values: ["武汉", "", "南京"],
        currentVisiable: this.visiable
      };
    },
    methods: {
      cancelHandler() {
        this.currentVisiable = false;
      },
      sureHandler() {},
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
    computed: {},
    mounted() {
      let highlight = this.$refs.highlight;
      let centerPosition = highlight.getBoundingClientRect();
      console.log(centerPosition);
    },
    components: {
      PickerItem
    }
  };
</script>
