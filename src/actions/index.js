import { types } from './types'
export const removeItem = id => ({
  type: types.REMOVE_ITEM,
  id
})

export const addItem = id => ({
  type: types.ADD_ITEM,
  id
})

export const deleteItem = id => ({
  type: types.DELETE_ITEM,
  id
})

export const editItem = (id, num) => ({
  type: types.EDIT_ITEM,
  id,
  num
})

export const countAll = () => ({
  type: types.COUNT_ALL
})

export const editItemFunction = (id, num) => {
  return function (dispatch) {
    dispatch(editItem(id, num))
    dispatch(countAll())
  }
}

export const deleteItemFunction = id => {
  return function (dispatch) {
    dispatch(deleteItem(id))
    dispatch(countAll())
  }
}

export const addItemFunction = id => {
  return function (dispatch) {
    dispatch(addItem(id))
    dispatch(countAll())
    // setTimeout(() => {
    //   dispatch(countAll())
    // }, 100)
  }
}

export const removeItemFunction = id => {
  return function (dispatch) {
    dispatch(removeItem(id))
    dispatch(countAll())
  }
}
