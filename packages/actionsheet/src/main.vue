<template>
<div>
<transition name="bottomtop">
  <div class="wec-actionsheet" v-show="currentValue" >
    <div class="wec-actionsheet__content">
      <div class="wec-actionsheet__content--item" :class="{'item-last': index== actions.length-1}" @click="itemClickHandler(action.action,index)" v-for="(action,index) in actions" :key="index">{{action.text}}</div>
      <div class="wec-actionsheet__content--divider" v-if="cancelText"></div>
      <div v-if="cancelText" class="wec-actionsheet__content--item item-cancel" @click="itemClickHandler('cancel')" >{{cancelText}}</div>
    </div>
  </div>  
</transition>
<!--遮罩层-->
<div class="wec-modal" v-show="currentValue" @click.stop="modalClickHandler"></div>

</div>
</template>
<script>
  export default {
    name: "wec-actionsheet",
    props: {
      actions: {
        type: Array,
        required: true
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      onModalClose: {
        type: Boolean,
        default: true
      },
      value: {}
    },
    data() {
      return {};
    },
    methods: {
      modalClickHandler() {
        if (this.onModalClose) {
          this.currentValue = false;
        }
      },
      itemClickHandler(action, index) {
        if (typeof action == "function") {
          action(index);
        }
        this.currentValue = false;
      }
    },
    computed: {
      currentValue: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        }
      }
    },
    mounted() {}
  };
</script>
