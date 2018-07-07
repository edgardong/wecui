import { createTest, destroyVM } from '../util'
import Actionsheet from 'packages/actionsheet'
describe('Actionsheet', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a actionsheet', () => {
    vm = createTest(Actionsheet)
    expect(vm.$el.classList.contains('wec-actionsheet')).to.be.true
  })
})
