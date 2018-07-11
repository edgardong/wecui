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
      default: 2000
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
      pages: [],
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
    translate(element, offset, speed, callback) {
      element.style.webkitTransition = "";
      element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
    },

    changePage(direction) {
      let currentIndex = this.currentIndex;
      let preIndex, nextIndex, prePage, nextPage, currentPage, pageWidth;
      let pages = this.pages;
      pageWidth = this.$el.clientWidth;
      prePage = pages[currentIndex - 1];
      currentPage = pages[currentIndex];
      nextPage = pages[currentIndex + 1];

      if (!prePage) {
        prePage = pages[pages.length - 1];
        preIndex = pages.length - 1;
      } else {
        preIndex = currentIndex - 1;
      }

      if (!nextPage) {
        nextPage = pages[0];
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }

      // 把前一张移动到左侧
      if (prePage) {
        console.log(prePage);
        prePage.style.display = "block";
        this.translate(prePage, -pageWidth);
      }
      // 把后一张移动到右侧
      if (nextPage) {
        nextPage.style.display = "block";
        this.translate(nextPage, pageWidth);
      }

      let newIndex = nextIndex;

      // 向左移动
      if (direction === "left") {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.childLength - 1;
        }
      } else if (direction === "right") {
        // 向右移动
        // if (this.currentIndex < this.childLength - 1) {
        //   this.currentIndex++;
        // } else {
        //   this.currentIndex = 0;
        // }
      }

      removeClass(prePage, "is-active");
      addClass(currentPage, "is-active");

      console.log("newIndex..." + newIndex);
      this.currentIndex = newIndex;

      // let newIndex = 0;
      // if (currentIndex >= pages.length - 1) {
      //   newIndex = 0;
      // } else {
      //   newIndex++;
      // }
      // setTimeout(() => {
      //   this.currentIndex = newIndex;
      // }, 50);
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
    },
    reInitPages() {
      let _this = this;
      var children = this.$children;
      children.forEach((child, index) => {
        _this.pages.push(child.$el);

        if (index === _this.currentIndex) {
          addClass(child.$el, "is-active");
        }
      });
    }
  },
  computed: {},
  mounted() {
    let _this = this;
    this.reInitPages();
    this.$nextTick(() => {
      this.childLength = this.pages.length;

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
