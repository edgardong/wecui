import { createTest, destroyVM } from '../util'
import TabContainer from 'packages/tab-container'
describe('TabContainer', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a tab-container', () => {
    vm = createTest(TabContainer)
    expect(vm.$el.classList.contains('wec-tab-container')).to.be.true
  })
})
