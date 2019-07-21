import { types } from '../../actions/types'
import dumplings from '../../assets/dumplings.png'
import potatos from '../../assets/potatos.png'
import cakes from '../../assets/cakes.png'
import calculate from '../../Utils/helper'
export const initialState = {
  shopList: [
    {
      id: 0,
      num: '#4231648',
      name: 'Chicken momo',
      price: (10.5).toFixed(2),
      count: 1,
      image: dumplings,
      total: (10.5).toFixed(2)
    },
    {
      id: 1,
      num: '#4231648',
      name: 'Spicy Mexican potatoes',
      price: (8.5).toFixed(2),
      count: 1,
      image: potatos,
      total: (8.5).toFixed(2)
    },
    {
      id: 2,
      num: '#4231648',
      name: 'Breakfast',
      price: (5.9).toFixed(2),
      count: 1,
      image: cakes,
      total: (5.9).toFixed(2)
    }
  ],
  subTotal: (24.9).toFixed(2)
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.REMOVE_ITEM:
      return Object.assign({}, state, {
        shopList: state.shopList.filter(item => item.id !== action.id)
      })
    case types.ADD_ITEM:
      return Object.assign({}, state, {
        shopList: state.shopList.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              count: item.count + 1,
              total: calculate(item.total, item.price, '+')
            }
          } else {
            return item
          }
        })
      })
    case types.DELETE_ITEM:
      return Object.assign({}, state, {
        shopList: state.shopList.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              count: item.count - 1,
              total: calculate(item.total, item.price, '-')
            }
          } else {
            return item
          }
        })
      })
    case types.EDIT_ITEM:
      return Object.assign({}, state, {
        shopList: state.shopList.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              count: item.count + action.num,
              total: calculate(item.total, action.num * item.price, '+')
            }
          } else {
            return item
          }
        })
      })

    case types.COUNT_ALL:
      return Object.assign({}, state, {
        subTotal: state.shopList.reduce((subtotal, item) => {
          return (subtotal = calculate(subtotal, item.total, '+'))
        }, 0)
      })
    default:
      return state
  }
}
