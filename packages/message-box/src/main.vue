<template>
<transition name="fade">
  <div class="wec-messagebox" v-show="visiable">
    <div class="wec-messagebox__dialog">
      <div class="wec-messagebox__dialog--title">{{title}}</div>
      <div class="wec-messagebox__dialog--message">{{message}}</div>
      <div class="wec-messagebox__dialog--buttons">
        <wec-button size="block" @click.native="okHandler" type="text">{{okText}}</wec-button>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
  export default {
    name: "wec-message-box",
    props: {
      title: {
        type: String
      },
      okText: {
        type: String
      },
      message: {
        type: String
      },
      visiable: {
        type: Boolean
      },
      okHandler: {
        type: Function
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
