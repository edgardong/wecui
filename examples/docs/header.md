## Hello
**Hello 组件**
### 基本用法
```html
<template>
  <div class="hello-page">
    <wec-hello message="my component library" @click="handleClick"></wec-hello>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClick (msg) {
      this.msg = msg
    }
  }
}
</script>
```
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message  | 文本信息    | String   | — | — |
### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击操作    | — |