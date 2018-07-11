
<template>
  <section class="demo-swipe">
    <wec-header :show-back="true" title="Swipe 轮播图"></wec-header>

    <h2>基础用法</h2>
    <wec-swipe @change="changeHadler" :duration="5000">
      <wec-swipe-item class="slide1">1</wec-swipe-item>
      <wec-swipe-item class="slide2">2</wec-swipe-item>
      <wec-swipe-item class="slide3">3</wec-swipe-item>
    </wec-swipe>

    <h2  v-if="false">隐藏indicators</h2>
    <wec-swipe :indicators="false" v-if="false">
      <wec-swipe-item class="slide1">1</wec-swipe-item>
      <wec-swipe-item class="slide2">2</wec-swipe-item>
      <wec-swipe-item class="slide3">3</wec-swipe-item>
    </wec-swipe>

    <h2>不自动播放</h2>
     <wec-swipe :duration="0">
      <wec-swipe-item class="slide1">1</wec-swipe-item>
      <wec-swipe-item class="slide2">2</wec-swipe-item>
      <wec-swipe-item class="slide3">3</wec-swipe-item>
    </wec-swipe>

    <h2  v-if="false">默认显示页</h2>
     <wec-swipe :init-index="2"  v-if="false">
      <wec-swipe-item class="slide1">1</wec-swipe-item>
      <wec-swipe-item class="slide2">2</wec-swipe-item>
      <wec-swipe-item class="slide3">3</wec-swipe-item>
    </wec-swipe>

    <h2>单个幻灯片</h2>
     <wec-swipe>
      <wec-swipe-item class="slide1">SINGLE PAGE</wec-swipe-item>
    </wec-swipe>
  </section>
</template>
<script>
  export default {
    props: {},
    data() {
      return {};
    },
    methods: {
      changeHadler(index) {
        // console.log("currentIndex: " + index);
      }
    },
    computed: {},
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .demo-swipe {
    padding-top: 46px;

    h2 {
      text-align: center;
      margin-bottom: 8px;
    }
    .slide1 {
      background-color: #0089dc;
      color: #fff;
    }

    .slide2 {
      background-color: #ffd705;
      color: #000;
    }

    .slide3 {
      background-color: #ff2d4b;
      color: #fff;
    }
  }
</style>
