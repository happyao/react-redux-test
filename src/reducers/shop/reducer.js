import { types } from '../../actions/types'
const initialState = {
  shopList: [
    { id: 1, name: 'a', price: 10, count: 0 },
    { id: 2, name: 'b', price: 20, count: 0 },
    { id: 3, name: 'c', price: 30, count: 0 }
  ],
  subTotal: 0
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_ITEM:
      return Object.assign({}, state, {
        shopList: state.shopList.filter(item => item.id !== action.id)
      })
    default:
      return state
  }
}
