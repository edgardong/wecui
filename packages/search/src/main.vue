<template>
  <div class="wec-search">
    <div class="wec-search__inner">
      <i class="icon iconfont icon-search"></i>
      <input @keydown.enter="searchHandler" type="search" placeholder="搜索" v-model="queryValue" class="wec-search__core">
    </div>
    <wec-button class="wec-search__cancel" @click="cancleHandler" type="text" size="mini" v-if="showCancel">取消</wec-button>
  </div>
</template>
<script>
export default {
  name: "wec-search",
  props: {
    autoSearch: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      showCancel: false,
      showSearch: false,
      queryValue: ""
    };
  },
  watch: {
    queryValue(val, oldValue) {
      // 根据是否有值判断取消按钮是否显示
      if (val) {
        this.showCancel = true;
      } else {
        this.showCancel = false;
      }
      // 是否执行自动搜索
      if (this.autoSearch) {
        if (val !== oldValue) {
          this.searchHandler();
        }
      }
    }
  },
  methods: {
    // 取消按钮点击事件
    cancleHandler() {
      this.queryValue = "";
    },
    searchHandler() {
      console.log("search...");
      this.$emit("search", this.queryValue);
    }
  },
  computed: {},
  mounted() {}
};
</script>
