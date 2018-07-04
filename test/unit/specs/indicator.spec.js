import { createTest, destroyVM } from '../util'
import Indicator from 'packages/indicator'
describe('Indicator', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a indicator', () => {
    vm = createTest(Indicator)
    expect(vm.$el.classList.contains('wec-indicator')).to.be.true
  })
})
