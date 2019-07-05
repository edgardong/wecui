<template>
  <div class="wec-pickerslot" ref="scrollwrapper">
    <!-- 内容滑块 -->
    <div
      class="picker-slot--item"
      :class="{'picker-selected':(pickerObj && labelKey  &&currentValue? currentValue[labelKey]: currentValue) ==(pickerObj && labelKey? option[labelKey]: option)}"
      v-if="!slotObj.divider"
      v-for="(option,optionIndex) in slotObj.options"
      :key="optionIndex"
    >{{pickerObj && labelKey? option[labelKey]: option}}</div>
    <!-- 分隔符模块 -->
    <div class="picker-slot--item" v-if="slotObj.divider">{{slotObj.content}}</div>
  </div>
</template>
<script>
export default {
  props: {
    slotObj: {
      type: Object,
      required: true
    },
    itemHeight: {
      type: Number,
      default: 36
    },
    itemCount: {
      type: Number,
      default: 5
    },
    value: {}
  },
  data() {
    return {
      pickerObj: this.slotObj.labelKey && this.slotObj.valueKey,
      labelKey: this.slotObj.labelKey,
      valueKey: this.slotObj.valueKey,
      currentIndex: this.slotObj.defaultIndex || 0,
      tmpValue: ""
    };
  },
  methods: {
    // 获取指定元素translate距离
    getTranslatePosition(el) {
      let style = el.style.transform;
      let position = { top: 0, left: 0 };
      let matches = /translate\(\s*(\-?\d+)px,\s*(\-?\d+)px\)\s*/g.exec(style);
      if (matches) {
        position.left = +matches[1];
        position.top = +matches[2];
        return position;
      }
    },
    getCurrentValue(index) {
      return this.slotObj && this.slotObj.options
        ? this.slotObj.options[index]
        : "";
    }
  },
  created() {
    let value = this.value;
    if (!value) {
      value = this.getCurrentValue(this.currentIndex);
    }
    if (value) {
      this.currentValue = value;
    }
  },
  watch: {
    currentValue(value) {
      // this.$emit("input", value);
    },
    options(value) {
      console.log(value);
      // 设置当前索引
      this.currentIndex = 0;
      this.currentValue = this.getCurrentValue(this.currentIndex);
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(value) {
        // console.log(value)
        this.$emit("input", value);
      }
    }
  },
  mounted() {
    let _this = this;
    let offsetTopHeight = this.itemHeight * Math.floor(this.itemCount / 2);
    let drag = {};
    this.$nextTick(() => {
      let scroll = this.$refs.scrollwrapper;
      if (this.slotObj.divider) {
        return;
      }
      // 默认平移到第一个选择项处
      scroll.style.transform = `translate(0,${offsetTopHeight}px)`;
      // 获取默认选择的选项
      let pickerItems = scroll.querySelector(".picker-selected");
      // 把选项平移到中间的位置
      if (pickerItems) {
        scroll.style.transform = `translate(0,${offsetTopHeight -
          pickerItems.offsetTop}px)`;
        scroll.style.transition = `transform 0.5s ease-in-out`;
      }

      // 滑动开始移动事件
      scroll.addEventListener("touchstart", function(event) {
        let touch = event.touches[0];
        let scroll = _this.$refs.scrollwrapper;
        drag.startY = touch.pageY;
        drag.scrollTop = _this.getTranslatePosition(scroll).top;
      });

      // 滑动移动过程中的事件
      scroll.addEventListener("touchmove", function(event) {
        let touch = event.touches[0];
        drag.endY = touch.pageY;
        // 计算移动的距离
        let moveY = drag.endY - drag.startY;
        // 计算移动的个数
        let moveIndex = Math.round(moveY / _this.itemHeight);

        // 计算顶部的滚动距离
        let offsetTop = drag.scrollTop + moveIndex * _this.itemHeight;

        // 设置可以滚动的最大和最小距离
        if (
          offsetTop <=
          offsetTopHeight -
            (_this.slotObj.options.length - 1) * _this.itemHeight
        ) {
          offsetTop =
            offsetTopHeight -
            (_this.slotObj.options.length - 1) * _this.itemHeight;
        } else if (offsetTop >= offsetTopHeight) {
          offsetTop = offsetTopHeight;
        }

        scroll.style.transform = `translate(0,${offsetTop}px)`;

        scroll.addEventListener("transitionend", function(event) {
          let newIndex = (offsetTopHeight - offsetTop) / _this.itemHeight;

          // 设置当前索引
          _this.currentIndex = Math.max(
            0,
            Math.min(newIndex, _this.slotObj.options.length - 1)
          );

          _this.currentValue = _this.getCurrentValue(_this.currentIndex);
        });

        scroll.removeEventListener("transitionend", function(event) {});
      });

      // 滑动移动结束后事件
      scroll.addEventListener("touchend", function(event) {});
    });
  }
};
</script>