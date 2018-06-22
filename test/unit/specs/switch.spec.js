import { createTest, destroyVM } from '../util'
import Switch from 'packages/switch'
describe('Switch', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a switch', () => {
    vm = createTest(Switch)
    expect(vm.$el.classList.contains('wec-switch')).to.be.true
  })
})
