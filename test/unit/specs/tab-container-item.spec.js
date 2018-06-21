import { createTest, destroyVM } from '../util'
import TabContainerItem from 'packages/tab-container-item'
describe('TabContainerItem', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a tab-container-item', () => {
    vm = createTest(TabContainerItem)
    expect(vm.$el.classList.contains('wec-tab-container-item')).to.be.true
  })
})
