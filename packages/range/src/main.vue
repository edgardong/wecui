<template>
  <div class="wec-range">
    <wec-cell :label="label">
      <div class="wec-range__content">
        <div class="wec-range__content--masker" v-show="disabled"></div>
        <!-- 左侧显示 -->
        <slot name="left" v-if="showLable"></slot>
        <!-- 中间滑块部分 -->
        <div class="wec-range__content--wrapper" ref="content">
          
          <!-- 进度条 -->
          <span class="wrapper--progress" :style="{width: (slider?slider.style.left: 0)}"></span>
          <!-- 中间的滑块 -->
          <span class="wrapper--slider" ref="slider" :class="[sliderClass]"></span>
          <span class="wrapper--scale" :class="{'first--scale':index==0}" v-for="(n,index) in scaleCount" :key="index"></span>
        </div>
        <!-- 右侧显示 -->
        <slot name="right" v-if="showLable"></slot>
      </div>
    </wec-cell>
  </div>
</template>
<script>
export default {
  name: "wec-range",
  props: {
    label: {
      type: String,
      default: ""
    },
    step: {
      type: Number,
      default: 10
    },
    sliderType: {
      type: [String, Number],
      default: "circle"
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    showLable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  data() {
    return {
      slider: null,
      dragState: {
        startX: 0,
        endX: 0,
        sliderStartX: 0
      }
    };
  },
  methods: {
    setSlider(value) {
      let _this = this;

      this.slider = this.$refs.slider;

      let parent = _this.$refs.content.getBoundingClientRect();
      let sliderObj = _this.slider.getBoundingClientRect();

      let sliderHalfWidth = sliderObj.width / 2;

      let progress = Math.floor(
        (value - _this.min) / (_this.max - _this.min) * 100
      );
      _this.slider.style.left =
        progress / 100 * parent.width - sliderHalfWidth + "px";
    }
  },
  computed: {
    // 滑块样式，暂时只提供圆形一种
    sliderClass() {
      if (this.sliderType == "circle") {
      }
      return "wrapper-slider--cicle";
    },
    // 计算刻度尺的数量
    scaleCount() {
      return Math.ceil((this.max - this.min) / this.step);
    },
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
    // 设置默认刻度值
    this.setSlider(this.currentValue);

    this.$nextTick(() => {
      this.slider = this.$refs.slider;

      let getSliderPosition = () => {
        let parent = this.$refs.content.getBoundingClientRect();
        let sliderObj = this.slider.getBoundingClientRect();

        return {
          left: sliderObj.left - parent.left
        };
      };

      // 开始移动
      this.slider.addEventListener("touchstart", function(event) {
        if (_this.disabled) {
          return;
        }

        let parent = _this.$refs.content.getBoundingClientRect();
        let sliderObj = _this.slider.getBoundingClientRect();

        let touch = event.touches[0];
        // let position = getSliderPosition();
        // 定义鼠标开始移动时的起点
        _this.dragState.startX = touch.pageX;
        // 获取滑块开始移动式的left值
        _this.dragState.sliderStartX = sliderObj.left - parent.left;
      });

      // 移动过程中
      this.slider.addEventListener("touchmove", function(event) {
        if (_this.disabled) {
          return;
        }

        let parent = _this.$refs.content.getBoundingClientRect();
        let sliderObj = _this.slider.getBoundingClientRect();

        let touch = event.touches[0];
        _this.dragState.endX = touch.pageX;

        let sliderHalfWidth = sliderObj.width / 2;

        // 获取每一步的步长
        let stepWidth = Math.ceil(sliderObj.width / _this.step);
        // 移动的距离
        let moveX = _this.dragState.endX - _this.dragState.startX;
        let leftOffset = moveX + _this.dragState.sliderStartX;

        let newPosition = Math.max(0, Math.min(leftOffset, parent.width - 7));

        let newProgress = newPosition / (parent.width - sliderHalfWidth * 2);

        if (newProgress < 0) {
          newProgress = 0;
        } else if (newProgress > 1) {
          newProgress = 1;
        }

        let value = Math.round(
          _this.min + newProgress * (_this.max - _this.min)
        );

        // 回传数量
        _this.$emit("input", value);

        let progress = Math.floor(
          (value - _this.min) / (_this.max - _this.min) * 100
        );
        _this.slider.style.left =
          progress / 100 * parent.width - sliderHalfWidth + "px";
      });

      this.slider.addEventListener("touchend", function(event) {
        if (_this.disabled) {
          return;
        }
        // 获取父元素，根据父元素来确定可以滑动的距离
        // let parent = _this.$refs.content.getBoundingClientRect();
        // let moveX = _this.dragState.endX - _this.dragState.startX;
        // let leftOffset = 0;
        // leftOffset = Math.min(Math.max(-7, moveX), parent.left);
        // _this.slider.style.left = leftOffset + "px";
      });
    });
  }
};
</script>
