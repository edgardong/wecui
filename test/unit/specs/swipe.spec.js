import { createTest, destroyVM } from '../util'
import Swipe from 'packages/swipe'
describe('Swipe', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a swipe', () => {
    vm = createTest(Swipe)
    expect(vm.$el.classList.contains('wec-swipe')).to.be.true
  })
})
