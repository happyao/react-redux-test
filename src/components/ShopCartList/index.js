import React from 'react'
import PropTypes from 'prop-types'
import ShopCartItem from '../ShopCartItem'
const ShopCartList = ({ shopList, deleteItem }) => (
  <ul>
    {shopList.map(shop => (
      <ShopCartItem
        key={shop.id}
        {...shop}
        onClick={() => {
          deleteItem(shop.id)
        }}
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
      count: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  deleteItem: PropTypes.deleteItem
}

export default ShopCartList
