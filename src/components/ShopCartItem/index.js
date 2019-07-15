import React from "react";
import "./style.css";

const ShopCartItem = ({
  num,
  name,
  total,
  count,
  image,
  onClick,
  addItem,
  deleteItem
}) => (
  <li class="item">
    <img src={image} />
    <div class="item-title">
      <div class="item-name">{name}</div>
      <div class="item-id">{num}</div>
    </div>
    <div class="count">
      <div onClick={deleteItem}>-</div>
      <div class="count-window">{count}</div>
      <div onClick={addItem}>+</div>
    </div>
    <div class="price">
      <div>$</div>
      {total}
    </div>
    <div class="close" onClick={onClick}>
      x
    </div>
  </li>
);

export default ShopCartItem;
