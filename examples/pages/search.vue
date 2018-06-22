
<template>
  <section class="demo-search">
    <wec-header :show-back="true" title="Search 搜索"></wec-header>
    <wec-search @search="searchHandler" ></wec-search>

    <wec-cell v-for="(data, index) in dataList" :key="index" :label="data">
      {{data}}
    </wec-cell>
  </section>
</template>
<script>
export default {
  data() {
    return {
      sourceList: [
        "吃饭",
        "睡觉",
        "打豆豆",
        "湖北省",
        "襄阳市",
        "apple",
        "banala"
      ],
      dataList: []
    };
  },
  methods: {
    searchHandler(value) {
      let _this = this;
      if (!value) {
        this.dataList = [];
        return;
      }
      this.dataList = [];
      let newArr = this.sourceList.concat(this.dataList);

      newArr.forEach(source => {
        if (value && source.indexOf(value) !== -1) {
          if (!_this.dataList.includes(source)) {
            _this.dataList.push(source);
          }
        }
      });

      console.log(_this.dataList);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-search {
  padding-top: 46px;
}
</style>
