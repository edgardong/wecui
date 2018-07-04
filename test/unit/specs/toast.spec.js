import { createTest, destroyVM } from '../util'
import Toast from 'packages/toast'
describe('Toast', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a toast', () => {
    vm = createTest(Toast)
    expect(vm.$el.classList.contains('wec-toast')).to.be.true
  })
})
