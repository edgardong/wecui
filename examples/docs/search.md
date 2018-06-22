## Search 搜索
### 基本用法
###### 搜索框，点击**回车**搜索
  ```html
    <wec-search @search="searchHandler" autoSearch></wec-search>
  ```
### Attributes
| 参数       | 说明         | 类型    | 可选值     | 默认值 |
| ---------- | ------------ | ------- | ---------- | ------ |
| autoSearch | 开启自动搜索 | Boolean | true,false | false  |
### Events
| 事件名称 | 说明                 | 回调参数     |
| -------- | -------------------- | ------------ |
| search   | 点击回车后执行的搜索 | 查询条件的值 |
