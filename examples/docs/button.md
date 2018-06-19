## Button 按钮
**Header 组件**
### 基本用法
```html
  <wec-button></wec-button>

  <wec-button @click="test" size="mini">mini</wec-button>
```
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | 类型    | 按钮类型   | small,medium,large,mini,block | medium |
| size  | 大小    | 按钮大小   | primary, warning, info, success, error, text | primary |
### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击事件    | — |
