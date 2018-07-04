<template>
  <transition name="fade">
    <div class="wec-toast" v-show="visiable" :class="['is-' + position]">
      <i class="icon iconfont" :class="'icon-' + iconClass" :style="{color:iconColor}" v-if="iconClass !== ''"></i>
      <span class="wec-toast__message">{{message}}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    props: {
      message: {
        type: String
      },
      visiable: {
        type: Boolean,
        default: false
      },
      iconClass: {
        type: String
      },
      iconColor: {
        type: String
      },
      position: {
        type: String,
        default: "middle",
        validator(value) {
          return ["top", "middle", "bottom"].indexOf(value) !== -1;
        }
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
