<template>
  <div class="wec-range">
    <wec-cell :label="label">
      <div class="wec-range__content">
        <!-- 左侧显示 -->
        <slot name="left" v-if="showLable"></slot>
        <!-- 中间滑块部分 -->
        <div class="wec-range__content--wrapper" ref="content">
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
        default: "滑块"
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
    methods: {},
    computed: {
      sliderClass() {
        if (this.sliderType == "circle") {
        }
        return "wrapper-slider--cicle";
      },
      // 计算刻度尺的数量
      scaleCount() {
        return Math.ceil((this.max - this.min) / this.step);
      }
    },
    mounted() {
      let _this = this;
      this.$nextTick(() => {
        this.slider = this.$refs.slider;

        let parent = this.$refs.content.getBoundingClientRect();
        let sliderObj = this.slider.getBoundingClientRect();
        console.log(this.slider);
        // 开始移动
        this.slider.addEventListener("touchstart", function(event) {
          let touch = event.touches[0];
          _this.dragState.startX = touch.pageX;
          _this.dragState.sliderStartX = sliderObj.left;
        });

        // 移动过程中
        this.slider.addEventListener("touchmove", function(event) {
          let touch = event.touches[0];
          _this.dragState.endX = touch.pageX;

          let sliderHalfWidth = sliderObj.width / 2;

          // 获取每一步的步长
          let stepWidth = Math.ceil(sliderObj.width / _this.step);
          // 移动的距离
          let moveX = _this.dragState.endX - _this.dragState.startX;
          let leftOffset = 0;
          // console.group("slider...");
          // console.log(parent);
          // console.log(sliderObj);
          // console.groupEnd();
          // // 获取滑动的距离，最小为0，最大为父级元素的宽度
          // console.group("juli....");
          // console.log(_this.slider.style.left);
          console.log(_this.dragState.sliderStartX);
          // console.log("移动距离moveX.... " + moveX);
          // console.log("父元素left.... " + parent.left);
          // console.log("slider  left .... " + sliderObj.left);
          // // console.log("..........+++  " + sliderStartX);

          console.log(moveX);
          if (moveX > 0) {
            leftOffset = Math.min(
              moveX,
              parent.width - sliderHalfWidth - (sliderObj.left - parent.left)
            );
          } else {
            leftOffset = Math.max(
              -sliderHalfWidth,
              Math.max(-sliderHalfWidth, _this.dragState.sliderStartX + moveX)
            );
          }

          // consolo.log();

          _this.slider.style.left =
            _this.dragState.sliderStartX - parent.left + leftOffset + "px";
        });

        this.slider.addEventListener("touchend", function(event) {
          // 获取父元素，根据父元素来确定可以滑动的距离
          // let parent = _this.$refs.content.getBoundingClientRect();
          // let moveX = _this.dragState.endX - _this.dragState.startX;
          // let leftOffset = 0;
          // leftOffset = Math.min(Math.max(-7, moveX), parent.left);
          // _this.slider.style.left = leftOffset + "px";
        });
      });
    },
    watch: {
      value(value) {
        this.$emit("input", value);
      }
    }
  };
</script>
