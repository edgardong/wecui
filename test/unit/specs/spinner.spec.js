import { createTest, destroyVM } from '../util'
import Spinner from 'packages/spinner'
describe('Spinner', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a spinner', () => {
    vm = createTest(Spinner)
    expect(vm.$el.classList.contains('wec-spinner')).to.be.true
  })
})
