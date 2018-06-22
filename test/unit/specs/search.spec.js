import { createTest, destroyVM } from '../util'
import Search from 'packages/search'
describe('Search', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create a search', () => {
    vm = createTest(Search)
    expect(vm.$el.classList.contains('wec-search')).to.be.true
  })
})
