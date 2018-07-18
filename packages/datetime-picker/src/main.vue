<template>
  <div class="wec-datetime-picker" v-if="visiable">
    <wec-picker :slots="dateData" v-model="values" :title="title" ref="wecdatetimepickerpicker">

    </wec-picker>
  </div>
</template>
<script>
  export default {
    name: "wec-datetime-picker",
    props: {
      type: {
        type: String,
        default: "date",
        validator(value) {
          return ["date", "datetime", "time", "month"].indexOf(value) !== -1;
        }
      },
      title: {
        type: String,
        default: "选择时间"
      },
      value: {}
    },
    data() {
      return {
        visiable: false,
        dateData: [],
        values: []
      };
    },
    methods: {
      show() {
        this.visiable = true;
        this.$nextTick(() => {
          this.$refs.wecdatetimepickerpicker.show();
        });
      },
      initDateData() {
        let _this = this;
        let currentValue = this.value || new Date();
        this.values[0] = currentValue.getFullYear();
        this.values[1] = currentValue.getMonth() + 1;
        this.values[2] = currentValue.getDate();

        // this.dateData[0].options = _this.getPickerYears();
        // this.$set(this.dateData[0],'options',_this.getPickerYears());
        let obj = {
          options: this.getPickerYears()
        };
        this.dateData[0] = obj;
        let months = {
          options: this.getPickerMonths()
        };
        this.dateData[1] = months;

        let date = {
          options: this.getPickerDates()
        };
        this.dateData[2] = date;
      },
      /**获取数字数组 */
      getNumberArray(start, end) {
        let numberArr = [];
        for (let i = start; i <= end; i++) {
          numberArr.push(i);
        }
        return numberArr;
      },
      /**获取选择的年份 */
      getPickerYears(start, end) {
        let currentYear = new Date().getFullYear();
        let startYear = start || currentYear - 10;
        let endYear = end || currentYear + 10;

        return this.getNumberArray(startYear, endYear);
      },
      /**获取选择的月份 */
      getPickerMonths() {
        return this.getNumberArray(1, 12);
      },
      /**获取选择的日期 */
      getPickerDates() {
        let year = this.values[0];
        let month = this.values[1];

        return this.getNumberArray(1, 31);
      }
    },
    computed: {
      currentValue: {
        get() {
          return this.value || new Date();
        },
        set(value) {
          this.$emit("input", value);
        }
      }
    },
    mounted() {
      switch (this.type) {
        case "date":
          this.initDateData();
          break;
        case "datetime":
          this.initDateTimeData();
          break;
        case "month":
          this.initMonthData();
          break;
        case "time":
          this.initTimeData();
          break;
      }
    }
  };
</script>
