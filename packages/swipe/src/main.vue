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
  import { addClass, removeClass, once } from "../../../src/utils/dom.js";
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
        if (speed) {
          // this.animating = true;
          element.style.webkitTransition =
            "-webkit-transform " + speed + "ms ease-in-out";
          setTimeout(() => {
            element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
          }, 50);

          var called = false;

          var transitionEndCallback = () => {
            if (called) return;
            called = true;
            // this.animating = false;
            element.style.webkitTransition = "";
            element.style.webkitTransform = "";
            if (callback) {
              callback.apply(this, arguments);
            }
          };

          once(element, "webkitTransitionEnd", transitionEndCallback);
          setTimeout(transitionEndCallback, speed + 100);
        } else {
          element.style.webkitTransition = "";
          element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
        }
      },
      changePage(direction) {
        let currentIndex = this.currentIndex;
        let preIndex,
          nextIndex,
          prePage,
          nextPage,
          currentPage,
          pageWidth,
          speedX;
        var speed = this.speed || 300;
        let pages = this.pages;
        // 获取页面的宽度
        pageWidth = this.$el.clientWidth;
        // 上一页
        prePage = pages[currentIndex - 1];
        // 当前页
        currentPage = pages[currentIndex];
        // 下一页
        nextPage = pages[currentIndex + 1];

        // 如果上一页不存在，则index=0, 上一页为最后一页
        if (!prePage) {
          prePage = pages[pages.length - 1];
          preIndex = pages.length - 1;
        } else {
          preIndex = currentIndex - 1;
        }

        // 如果没有下一页，则index = pages.length; 下一页为第一页
        if (!nextPage) {
          nextPage = pages[0];
          nextIndex = 0;
        } else {
          nextIndex = currentIndex + 1;
        }

        // 把前一张移动到左侧
        if (prePage) {
          prePage.style.display = "block";
          this.translate(prePage, -pageWidth);
        }
        // 把后一张移动到右侧
        if (nextPage) {
          nextPage.style.display = "block";
          this.translate(nextPage, pageWidth);
        }

        let newIndex = nextIndex;

        // 回调方法
        let callback = () => {
          if (newIndex !== undefined) {
            var newPage = this.$children[newIndex].$el;
            removeClass(currentPage, "is-active");
            addClass(nextPage, "is-active");

            this.currentIndex = newIndex;
          }

          if (prePage) {
            prePage.style.display = "";
          }

          if (nextPage) {
            nextPage.style.display = "";
          }
        };

        // 开始执行动画
        setTimeout(() => {
          if (direction === "right") {
            this.translate(currentPage, -pageWidth, speed, callback);
            if (nextPage) {
              this.translate(nextPage, 0, speed);
            }
          }
        }, 10);
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
              _this.changePage("right");
            } else {
              _this.changePage("left");
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

          removeClass(child.$el, 'is-active');

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
