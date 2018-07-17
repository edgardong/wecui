<template>
  <div class="wec-pickerslot" ref="scrollwrapper">
    <!-- 内容滑块 -->
    <div class="picker-slot--item" :class="{'picker-selected':currentValue==(option.label||option)}" v-if="!slotObj.divider" v-for="(option,optionIndex) in slotObj.options" :key="optionIndex">
      {{option.label||option}}
    </div>
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
      value: {}
    },
    data() {
      return {
        currentIndex: this.slotObj.defaultIndex || 0,
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
    },
    computed: {
      currentValue: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        }
      }
    },
    mounted() {
      let _this = this;
      let drag = {};
      this.$nextTick(() => {
        let scroll = this.$refs.scrollwrapper;
        if (this.slotObj.divider) {
          return;
        }
        // 默认平移到第一个选择项处
        scroll.style.transform = "translate(0,72px)";
        // 获取默认选择的选项
        let pickerItems = scroll.querySelector(".picker-selected");
        // 把选项平移到中间的位置
        if (pickerItems) {
          scroll.style.transform = `translate(0,${72 - pickerItems.offsetTop}px)`;
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
          let moveIndex = Math.round(moveY / 36);

          // 计算顶部的滚动距离
          let offsetTop = drag.scrollTop + moveIndex * 36;

          // 设置可以滚动的最大和最小距离
          if (offsetTop <= 72 - (_this.slotObj.options.length - 1) * 36) {
            offsetTop = 72 - (_this.slotObj.options.length - 1) * 36;
          } else if (offsetTop >= 72) {
            offsetTop = 72;
          }

          scroll.style.transform = `translate(0,${offsetTop}px)`;

          scroll.addEventListener("transitionend", function(event) {
            let newIndex = (72 - offsetTop) / 36;

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