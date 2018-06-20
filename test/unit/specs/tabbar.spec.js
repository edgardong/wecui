import { createTest, destroyVM } from '../util'
import Tabbar from 'packages/tabbar'
describe('Tabbar', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a tabbar', () => {
    vm = createTest(Tabbar)
    expect(vm.$el.classList.contains('wec-tabbar')).to.be.true
  })
})
