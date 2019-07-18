import React, { Component } from 'react'
import './style.css'

class ShopCartItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  render () {
    return (
      <li class='item'>
        <img src={this.props.image} />
        <div class='item-title'>
          <div class='item-name'>{this.props.name}</div>
          <div class='item-id'>{this.props.num}</div>
        </div>
        <div class='count'>
          <div
            onClick={() => {
              if (this.state.count > 0) {
                this.props.deleteItem()
                this.setState({
                  count: parseInt(this.state.count) - 1
                })
              }
            }}
          >
            -
          </div>
          <input
            class='count-window'
            type='number'
            value={this.state.count}
            onChange={e => {
              console.log(e.target.value)
              this.props.editItem(e.target.value - this.state.count)
              this.setState({
                count: e.target.value
              })
            }}
          />
          <div
            onClick={() => {
              this.props.addItem()
              this.setState({
                count:
                  this.state.count === '' ? 1 : parseInt(this.state.count) + 1
              })
            }}
          >
            +
          </div>
        </div>
        <div class='price'>
          <div>$</div>
          {this.props.total}
        </div>
        <div class='close' onClick={this.props.onClick}>
          x
        </div>
      </li>
    )
  }
}
export default ShopCartItem
