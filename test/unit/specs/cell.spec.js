import { createTest, destroyVM } from '../util'
import Cell from 'packages/cell'
describe('Cell', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a cell', () => {
    vm = createTest(Cell)
    expect(vm.$el.classList.contains('wec-cell')).to.be.true
  })
})
