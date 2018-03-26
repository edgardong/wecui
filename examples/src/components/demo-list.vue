<template>
  <div class="side-nav">
    <h1 class="wecui-title"></h1>
    <h2 class="wecui-desc">WECUI 移动组件库</h2>
    <div class="mobile-navs">
      <div v-for="(item, index) in data" :key="index">
        <div class="mobile-nav-item" v-if="item.showInMobile">
          <mobile-nav v-for="(group, s) in item.groups" :group="group" :base="base" :key="s"></mobile-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConfig from '../nav.config.json';
import MobileNav from './mobile-nav';

export default {
  data() {
    return {
      data: navConfig['zh-CN'],
      base: '/component'
    };
  },

  components: {
    MobileNav
  }
};
</script>

<style lang="postcss">
.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 90px 15px 20px;
  position: relative;
  z-index: 1;

  .wecui-title,
  .wecui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .wecui-title {
    padding-top: 40px;
    height: 0;
    overflow: hidden;
    background: url(https://raw.githubusercontent.com/xuqiang521/wecui/master/src/assets/logo.png) center center no-repeat;
    background-size: 40px 40px;
    margin-bottom: 10px;
  }

  .wecui-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 50px;
  }
}
</style>