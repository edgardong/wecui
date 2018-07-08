<template>
  <div class="wec-swipe">
    <div class="wec-swipe__itemswrapper" ref="wecswipewrapper">      
      <slot></slot>
    </div>
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
        timer: null
      };
    },
    methods: {},
    computed: {},
    created() {
      this.$nextTick(() => {
        let dom = this.$refs.wecswipewrapper.children;
        this.childLength = dom.length;

        addClass(dom[this.currentIndex], "is-active");

        if (!this.timer && this.duration > 0 && this.childLength > 1) {
          this.timer = setInterval(() => {
            removeClass(dom[this.currentIndex], "is-active");

            if (this.currentIndex < this.childLength - 1) {
              ++this.currentIndex;
            } else {
              this.currentIndex = 0;
            }
            addClass(dom[this.currentIndex], "is-active");
          }, this.duration);
        }
      });
    },
    mounted() {}
  };
</script>
