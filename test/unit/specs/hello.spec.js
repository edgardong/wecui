// import Vue from 'vue' // 导入Vue用于生成Vue实例
// import Hello from 'packages/hello' // 导入组件
// // 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
// describe('hello.vue', () => {
//   // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
//   it('render default classList in hello', () => {
//     const Constructor = Vue.extend(Hello) // 获得Hello组件实例
//     const vm = new Constructor().$mount() // 将组件挂在到DOM上
//     // 断言：DOM中包含class为v-hello的元素
//     expect(vm.$el.classList.contains('wec-hello')).to.be.true
//     const message = vm.$el.querySelector('.wec-hello__message')
//     // 断言：DOM中包含class为v-hello__message的元素
//     expect(message.classList.contains('wec-hello__message')).to.be.true
//   })
// })

import { destroyVM, createTest,createVue } from '../utils'
import Hello from 'packages/hello'

describe('hello.vue', () => {
  let vm
  // 测试用例执行之后销毁实例
  afterEach(() => {
    destroyVM(vm)
  })
  it('render default classList in hello', () => {
    vm = createTest(Hello)
    expect(vm.$el.classList.contains('wec-hello')).to.be.true
    const message = vm.$el.querySelector('.wec-hello__message')
    expect(message.classList.contains('wec-hello__message')).to.be.true
  })

  // it('create a hello for click with promise', (done) => {
  //   let result
  //   vm = createVue({
  //     template: `<wec-hello @click="handleClick"></wec-hello>`,
  //     methods: {
  //       handleClick (msg) {
  //         result = msg
  //       }
  //     }
  //   }, true)
  //   vm.$el.click()
  //   // 断言消息是异步emit出去的
  //   expect(result).to.not.exist
  //   setTimeout(_ => {
  //     expect(result).to.exist
  //     expect(result).to.equal('this is click emit')
  //     done()
  //   }, 20)
  // })
})
