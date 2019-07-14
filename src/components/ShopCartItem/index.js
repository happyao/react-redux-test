import React from 'react'
import PropTypes from 'prop-types'
const ShopCartItem = ({ id, name, price, count, onClick }) => (
  <li style={{ display: 'flex' }} onClick={onClick}>
    {' '}
    {name} {price} {count}{' '}
  </li>
)

ShopCartItem.protoTypes = {
  deleteItem: PropTypes.func.isRequired
}
export default ShopCartItem
