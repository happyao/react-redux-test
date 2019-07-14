import { types } from './types'
export const deleteItem = id => ({
  type: types.DELETE_ITEM,
  id
})
