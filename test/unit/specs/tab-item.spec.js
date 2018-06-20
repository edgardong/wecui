import { createTest, destroyVM } from '../util'
import TabItem from 'packages/tab-item'
describe('TabItem', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a tab-item', () => {
    vm = createTest(TabItem)
    expect(vm.$el.classList.contains('wec-tab-item')).to.be.true
  })
})
