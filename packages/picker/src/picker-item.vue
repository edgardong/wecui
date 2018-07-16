<template>
  <div class="wec-pickerslot" ref="scrollwrapper">
    <!-- 内容滑块 -->
    <div class="picker-slot--item" :class="{'picker-selected':0}" v-if="!slotObj.divider" v-for="(option,optionIndex) in slotObj.options" :key="optionIndex">
      {{option.label||option}}
    </div>
    <!-- 分隔符模块 -->
    <div class="picker-slot--item" v-if="slotObj.divider">{{slotObj.content}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      slotObj: {
        type: Object,
        required: true
      }
    },
    data() {
      return {};
    },
    methods: {},
    computed: {},
    mounted() {
      this.$nextTick(() => {
        let scroll = this.$refs.scrollwrapper;
        console.log(scroll);
        scroll.style.transform = "translate(0,72px)";
      });
    }
  };
</script>