<template>
  <div class="wec-indicator" v-show="visiable">
    <span class="wec-indicator__img"><i class="icon iconfont" :class="['icon-' + iconClass]"></i></span>
    <span class="wec-indicator__text" v-if="text">{{text}}</span>
  </div>
</template>
<script>
  export default {
    name: "wec-indicator",
    props: {
      text: {
        type: String
      },
      iconClass: {
        type: String
      },
      visiable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    methods: {},
    computed: {},
    mounted() {}
  };
</script>
