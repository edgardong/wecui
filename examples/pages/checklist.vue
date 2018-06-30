
<template>
  <section class="demo-checklist">
    <wec-header :show-back="true" title="Checklist 复选框"></wec-header>

    <wec-checklist v-model="value" :title="label" :options="options"></wec-checklist>
    <wec-cell label="城市">{{valueText}}</wec-cell>

    <wec-checklist v-model="value1" :title="label1" :options="options1" align="right"></wec-checklist>
    <wec-cell label="性别">{{valueText1}}</wec-cell>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        value1: [],
        label: "选择区域",
        label1: "选择性别",
        options: [
          {
            label: "武汉市",
            value: "1",
            disabled: false
          },
          {
            label: "襄阳市",
            value: "2",
            disabled: false
          },
          {
            label: "其他",
            value: "3",
            disabled: false
          }
        ],
        options1: [
          {
            label: "男",
            value: "1",
            disabled: false
          },
          {
            label: "女",
            value: "2",
            disabled: false
          },
          {
            label: "其他",
            value: "3",
            disabled: true
          }
        ]
      };
    },
    computed: {
      valueText: {
        get() {
          let text = "";
          this.value.forEach(v => {
            text += v.label + ",";
          });

          return text;
        },
        set(value) {
          console.log(value);
        }
      },
      valueText1: {
        get() {
          let text = "";
          this.value1.forEach(v => {
            text += v.label + ",";
          });

          return text;
        },
        set(value) {
          console.log(value);
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .demo-checklist {
    padding-top: 46px;
  }
</style>
