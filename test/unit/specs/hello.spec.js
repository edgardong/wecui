import Vue from 'vue' // 导入Vue用于生成Vue实例
import Hello from 'packages/hello' // 导入组件
// 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
describe('hello.vue', () => {
  // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
  it('render default classList in hello', () => {
    const Constructor = Vue.extend(Hello) // 获得Hello组件实例
    const vm = new Constructor().$mount() // 将组件挂在到DOM上
    // 断言：DOM中包含class为v-hello的元素
    expect(vm.$el.classList.contains('wec-hello')).to.be.true
    const message = vm.$el.querySelector('.wec-hello__message')
    // 断言：DOM中包含class为v-hello__message的元素
    expect(message.classList.contains('wec-hello__message')).to.be.true
  })
})