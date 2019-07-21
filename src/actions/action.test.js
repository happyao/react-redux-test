import { initialState } from '../reducers/shop/reducer'
import { addItemFunction } from '.'

const setup = () => {
  const store = initialState
  const getState = () => store
  return {
    dispatch: jest.fn(),
    getState
  }
}

describe('actions', () => {
  describe('addItemFunction', () => {
    it('should dispatch addItem and countAll actions', () => {
      const id = 0
      const { dispatch } = setup()
      addItemFunction(id)(dispatch)
      expect(dispatch).toHaveBeenCalledTimes(2)
    })
  })
})
