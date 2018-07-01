import { createTest, destroyVM } from '../util'
import Field from 'packages/field'
describe('Field', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a field', () => {
    vm = createTest(Field)
    expect(vm.$el.classList.contains('wec-field')).to.be.true
  })
})
