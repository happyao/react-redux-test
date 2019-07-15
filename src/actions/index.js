import { types } from "./types";
export const removeItem = id => ({
  type: types.REMOVE_ITEM,
  id
});

export const addItem = id => ({
  type: types.ADD_ITEM,
  id
});

export const deleteItem = id => ({
  type: types.DELETE_ITEM,
  id
});
