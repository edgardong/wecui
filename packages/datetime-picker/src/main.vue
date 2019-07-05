<template>
  <div class="wec-datetime-picker" v-if="visiable">
    <wec-picker
      :slots="dateData"
      @pickok="sureHandler"
      @pickedchange="changeHandler"
      v-model="values"
      :title="title"
      ref="wecdatetimepickerpicker"
    ></wec-picker>
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
      values: [],
      monthPickers: this.getPickerMonths()
    };
  },
  methods: {
    show() {
      this.visiable = true;
      this.$nextTick(() => {
        this.$refs.wecdatetimepickerpicker.show();
      });
    },
    initDateData(year, month) {
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
        options: this.monthPickers
      };
      this.dateData[1] = months;

      let date = {
        options: this.getPickerDates(year, month)
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
    sureHandler(picker, value) {
      if (this.type == "date") {
        this.$emit("input", value.join("-"));
      }
    },
    changeHandler(values) {
      console.log("changehandler....");
      console.log(values);

      console.log(values[2]);

      if (values[2] != 1) {
        console.log("..........change......");
        this.$set(
          this.dateData[2],
          "options",
          this.getPickerDates(values[0], values[1])
        );

        this.$refs.wecdatetimepickerpicker.setValue(2, 1);
      } else {
        console.log("false...........");
        return false;
      }

      // console.log(this.dateData[2].options)
    },
    getPickerDates(syear, smonth) {
      let endDate = 31;
      let year = syear || this.values[0];
      let month = smonth || this.values[1];

      let TODAYS = [1, 3, 5, 7, 8, 10, 12];
      let TTDAYS = [4, 6, 9, 11];
      if (TODAYS.indexOf(month) !== -1) {
        endDate = 31;
      } else if (TTDAYS.indexOf(month) !== -1) {
        endDate = 30;
      } else {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
          endDate = 29;
        } else {
          endDate = 28;
        }
      }

      let tmpArr = this.getNumberArray(1, endDate);
      return tmpArr;
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value || new Date();
      },
      set(value) {
        this.$emit("input", value);
        // console.log(value);
        // this.initDateData();
      }
    }
  },
  mounted() {
    this.initDateData();
  }
};
</script>
