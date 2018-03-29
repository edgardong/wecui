import { createTest, destroyVM } from '../util'
import Button from 'packages/button'
describe('Button', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a button', () => {
    vm = createTest(Button)
    expect(vm.$el.classList.contains('wec-button')).to.be.true
  })
})
