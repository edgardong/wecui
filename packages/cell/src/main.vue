<template>
  <div class="wec-cell" @click="clickHandler">
    <div class="wec-cell__label">
      <span>
        <slot name="icon">
          <i class="icon iconfont" :class="icon" v-if="icon"></i>
        </slot>
      </span>
      <div class="wec-cell__label--label">
        <span>{{label}}</span>
        <span class="wec-cell__label--comment" v-if="comment">{{comment}}</span>
      </div>
    </div>
    <div class="wec-cell__value" :class="{'has-link': link}">
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <!-- 右侧箭头部分 -->
    <i class="icon link-icon iconfont icon-more" v-if="link"></i>
  </div>
</template>
<script>
export default {
  name: "wec-cell",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    comment: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    link: {
      type: Boolean,
      default: false,
      required: false
    },
    to: {
      type: [String, Object],
      required: false
    }
  },
  data: function() {
    return {};
  },
  methods: {
    clickHandler($event) {
      if (!this.link) {
        $event.preventDefault();
        return;
      } else {
        if (this.to) {
          const resolved = this.$router.match(this.to);
          if (!resolved.matched.length) {
            location.href = this.to;
            return;
          }
          this.$router.push(resolved.fullPath || resolved.path);
        } else {
          this.$emit("click");
        }
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>
