import React from 'react'
import PropTypes from 'prop-types'
import ShopCartItem from '../ShopCartItem'
import './style.css'
const ShopCartList = ({
  shopList,
  removeItemFunction,
  addItemFunction,
  deleteItemFunction,
  editItemFunction
}) => (
  <ul class='shop-list'>
    {shopList.map(shop => (
      <ShopCartItem
        data-test='items'
        key={shop.id}
        {...shop}
        onClick={() => {
          removeItemFunction(shop.id)
        }}
        addItem={() => {
          addItemFunction(shop.id)
        }}
        deleteItem={() => {
          if (shop.count > 0) {
            deleteItemFunction(shop.id)
          }
        }}
        editItem={num => editItemFunction(shop.id, num)}
      />
    ))}
  </ul>
)

ShopCartList.protoTypes = {
  shopList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      num: PropTypes.string.isRequired,
      total: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeItemFunction: PropTypes.func.isRequired,
  addItemFunction: PropTypes.func.isRequired,
  deleteItemFunction: PropTypes.func.isRequired,
  editItemFunction: PropTypes.func.isRequired
}

export default ShopCartList
