import { createTest, destroyVM } from '../util'
import Range from 'packages/range'
describe('Range', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a range', () => {
    vm = createTest(Range)
    expect(vm.$el.classList.contains('wec-range')).to.be.true
  })
})
