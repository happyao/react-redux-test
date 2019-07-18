import React from 'react'
import PropTypes from 'prop-types'
import ShopCartItem from '../ShopCartItem'
import './style.css'
const ShopCartList = ({
  shopList,
  removeItem,
  addItem,
  deleteItem,
  editItem
}) => (
  <ul class='shop-list'>
    {shopList.map(shop => (
      <ShopCartItem
        data-test='items'
        key={shop.id}
        {...shop}
        onClick={() => {
          removeItem(shop.id)
        }}
        addItem={() => {
          addItem(shop.id)
        }}
        deleteItem={() => {
          if (shop.count > 0) {
            deleteItem(shop.id)
          }
        }}
        editItem={num => editItem(shop.id, num)}
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
  removeItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
}

export default ShopCartList
