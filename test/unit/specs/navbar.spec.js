import { createTest, destroyVM } from '../util'
import Navbar from 'packages/navbar'
describe('Navbar', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a navbar', () => {
    vm = createTest(Navbar)
    expect(vm.$el.classList.contains('wec-navbar')).to.be.true
  })
})
