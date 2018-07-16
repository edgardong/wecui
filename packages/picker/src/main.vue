<template>
  <div class="wec-picker" v-show="visiable">
    <div class="wec-picker__wrapper">
      <!-- 顶部操作区域 -->
      <div class="wec-picker__wrapper--toolbar">
        <wec-button type="text">取消</wec-button>
        <span v-if="title">{{title}}</span>
        <wec-button type="text">确定</wec-button>
      </div>
      <!-- 选择区域 -->
      <div class="wec-picker__wrapper--content">
        <div class="picker-wrapper">
          <div class="picker-slot" :class="{'divider-item':slot.divider,'content-item': !slot.divider}" v-for="(slot,index) in slots" :key="index">
            <!-- 内容滑块 -->
            <div class="picker-slot--item" 
              :class="{'picker-selected':values[index]==option || values[index]==option.label}" 
              v-if="!slot.divider" v-for="(option,optionIndex) in slot.options" :key="optionIndex">
              {{option.label||option}}
            </div>
            <!-- 分隔符模块 -->
            <div class="picker-slot--item" v-if="slot.divider">{{slot.content}}</div>
          </div>
          <div class="picker-slot--highlight"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    }
  },
  data() {
    return {
      values: ['武汉','','南京']
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>
