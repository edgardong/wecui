import { createTest, destroyVM } from '../util'
import MessageBox from 'packages/message-box'
describe('MessageBox', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a message-box', () => {
    vm = createTest(MessageBox)
    expect(vm.$el.classList.contains('wec-message-box')).to.be.true
  })
})
