import { connect } from 'react-redux'
import {
  removeItemFunction,
  addItemFunction,
  deleteItemFunction,
  editItemFunction
} from '../../actions'
import ShopCartList from '../../components/ShopCartList'

const mapStateToProps = state => ({
  shopList: state.shop.shopList
})

const mapDispatchToProps = dispatch => ({
  removeItemFunction: id => dispatch(removeItemFunction(id)),
  addItemFunction: id => dispatch(addItemFunction(id)),
  deleteItemFunction: id => dispatch(deleteItemFunction(id)),
  editItemFunction: (id, num) => dispatch(editItemFunction(id, num))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCartList)
