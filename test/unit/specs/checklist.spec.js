import { createTest, destroyVM } from '../util'
import Checklist from 'packages/checklist'
describe('Checklist', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a checklist', () => {
    vm = createTest(Checklist)
    expect(vm.$el.classList.contains('wec-checklist')).to.be.true
  })
})
