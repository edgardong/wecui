<template>
  <transition name="fade">
    <div class="wec-messagebox" v-show="visiable">
      <div class="wec-messagebox__dialog">
        <div class="wec-messagebox__dialog--title">{{title}}</div>
        <div class="wec-messagebox__dialog--content">
          <div class="wec-messagebox__dialog--message" v-if="type!='prompt'" v-html="message"></div>
          <div class="wec-messagebox__dialog--input" v-if="type=='prompt'">
            <input :type="inputType" v-model="inputValue">
            <div class="wec-messagebox__dialog--errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="wec-messagebox__dialog--buttons">
          <wec-button size="block" class="wec-messagebox__dialog--buttons--cancel" @click.native="actionHandler('cancel')" color="#ccc" type="text" v-if="type!=='alert'">{{cancelText}}</wec-button>
          <wec-button size="block" @click.native="actionHandler('ok')" type="text">{{okText}}</wec-button>
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
    }
  },
  data() {
    return {
      callback: null,
      cancelText: "",
      type: "",
      inputType: "",
      inputValue: "",
      editorErrorMessage: ""
    };
  },
  methods: {
    actionHandler(action) {
      let callback = this.callback;
      this.visiable = false;

      this.type === "prompt"
        ? callback(action, this.inputValue)
        : callback(action);
    }
  },
  computed: {},
  mounted() {}
};
</script>
