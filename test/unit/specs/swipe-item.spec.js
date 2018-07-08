import { createTest, destroyVM } from '../util'
import SwipeItem from 'packages/swipe-item'
describe('SwipeItem', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a swipe-item', () => {
    vm = createTest(SwipeItem)
    expect(vm.$el.classList.contains('wec-swipe-item')).to.be.true
  })
})
