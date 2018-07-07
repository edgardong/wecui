import { createTest, destroyVM } from '../util'
import Popup from 'packages/popup'
describe('Popup', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a popup', () => {
    vm = createTest(Popup)
    expect(vm.$el.classList.contains('wec-popup')).to.be.true
  })
})
