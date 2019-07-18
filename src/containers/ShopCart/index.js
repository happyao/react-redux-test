import { connect } from 'react-redux'
import { removeItem, addItem, deleteItem, editItem } from '../../actions'
import ShopCartList from '../../components/ShopCartList'

const mapStateToProps = state => ({
  shopList: state.shop.shopList
})

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  addItem: id => dispatch(addItem(id)),
  deleteItem: id => dispatch(deleteItem(id)),
  editItem: (id, num) => dispatch(editItem(id, num))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCartList)
