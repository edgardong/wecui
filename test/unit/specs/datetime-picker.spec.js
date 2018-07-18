import { createTest, destroyVM } from '../util'
import DatetimePicker from 'packages/datetime-picker'
describe('DatetimePicker', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a datetime-picker', () => {
    vm = createTest(DatetimePicker)
    expect(vm.$el.classList.contains('wec-datetime-picker')).to.be.true
  })
})
