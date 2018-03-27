## Header
**Header 组件**
### 基本用法
```html
<template>
  <div class="header-page">
    <wec-header :title="my title" @more-click="handleClick"></wec-header>
  </div>
</template>
<script>
export default {
  name: 'heaer',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClick () {
      alert('click a button');
    }
  }
}
</script>
```
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | 文本信息    | String   | — | — |
|show-more|是否显示更多按钮|Boolean|--|--|
|show-back|是否显示返回按钮|Boolean|--|--|
### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| more-click  | 点击事件    | — |
| back-click  | 点击事件    | — |