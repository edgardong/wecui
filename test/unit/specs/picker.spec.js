import { createTest, destroyVM } from '../util'
import Picker from 'packages/picker'
describe('Picker', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a picker', () => {
    vm = createTest(Picker)
    expect(vm.$el.classList.contains('wec-picker')).to.be.true
  })
})
