<template>
  <div class="wec-swipe">
    <!-- 轮播图内容 -->
    <div class="wec-swipe__itemswrapper" ref="wecswipewrapper">
      <slot></slot>
    </div>
    <!-- 底部点 -->
    <div class="wec-swipe__indicators" v-if="indicators">
      <span class="indicator" :class="{'is-active': index ==currentIndex}" v-for="(n,index) in childLength" :key="index"></span>
    </div>
  </div>
</template>
<script>
  import { addClass, removeClass } from "../../../src/utils/dom.js";
  export default {
    name: "wec-swipe",
    props: {
      initIndex: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 3000
      },
      speed: {
        type: Number,
        default: 300
      },
      indicators: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        childLength: 0,
        currentIndex: this.initIndex,
        timer: null,
        pages: null,
        moveObj: {},
        draging: false
      };
    },
    watch: {
      currentIndex(value) {
        this.$emit("change", value);
      }
    },
    methods: {
      changePage(direction) {
        let oldIndex = this.currentIndex;
        // removeClass(this.pages[this.currentIndex], "is-active");

        // 向左移动
        if (direction === "left") {
          if (this.currentIndex > 0) {
            this.currentIndex--;
          } else {
            this.currentIndex = this.childLength - 1;
          }
        } else if (direction === "right") {
          // 向右移动
          if (this.currentIndex < this.childLength - 1) {
            this.currentIndex++;
          } else {
            this.currentIndex = 0;
          }
        }
        addClass(this.pages[this.currentIndex], "is-active");
        setTimeout(() => {
          removeClass(this.pages[oldIndex], "is-active");
        }, 3000);
      },
      // 添加触摸监听事件
      addTouchEventListener(element) {
        let _this = this;
        let moveObj = this.moveObj;
        // 监听鼠标事件
        element.addEventListener("touchstart", function(event) {
          let touch = event.touches[0];

          _this.draging = true;
          // event.preventDefault();

          moveObj.startX = touch.pageX;
          moveObj.startY = touch.pageY;
          moveObj.startTime = new Date();
        });

        //触摸过程中的事件
        element.addEventListener("touchmove", function(event) {
          if (!_this.draging) {
            return;
          }

          if (_this.timer) {
            _this.clearTimer();
          }

          let touch = event.touches[0];

          moveObj.endX = touch.pageX;
          moveObj.endY = touch.pageY;
        });

        // 磋磨结束事件
        element.addEventListener("touchend", function(event) {
          moveObj.endTime = new Date();

          _this.draging = false;

          moveObj.moveX = moveObj.endX - moveObj.startX;
          moveObj.moveY = moveObj.endY - moveObj.startY;

          // 横向滚动距离大于垂直方向的滚动距离
          if (Math.abs(moveObj.moveX) > Math.abs(moveObj.moveY)) {
            if (moveObj.moveX < 0) {
              _this.changePage("left");
            } else {
              _this.changePage("right");
            }
          }
        });
      },
      clearTimer() {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    computed: {},
    mounted() {
      let _this = this;
      this.$nextTick(() => {
        this.pages = this.$refs.wecswipewrapper.children;
        this.childLength = this.pages.length;

        // 给默认的页面赋值
        addClass(this.pages[this.currentIndex], "is-active");
        // 设置定时器
        if (!this.timer && this.duration > 0 && this.childLength > 1) {
          _this.timer = setInterval(() => {
            if (!_this.draging) {
              _this.changePage("right"); //默认向右移动
            }
          }, this.duration);
        }
      });

      // 监听鼠标的移动事件
      this.addTouchEventListener(this.$el);
    },
    created() {}
  };
</script>
