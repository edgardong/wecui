## Tabbar 底部Tab
### 基本用法
###### 底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。
  ```html
    <wec-tabbar v-model="tab">
      <wec-tab-item id="first">第一个tab</wec-tab-item>
      <wec-tab-item id="second">第二个tab</wec-tab-item>
      <wec-tab-item id="third">第三个tab</wec-tab-item>
    </wec-tabbar>
  ```
### Attributes

#### tabbar
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| —  | —    | —   | — | — |

#### tabitem
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| id  | tabitem的id    | *   | — | — |


### Events

#### tabbar
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| —  | —    | — |

#### tabitem
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| —  | —    | — |
