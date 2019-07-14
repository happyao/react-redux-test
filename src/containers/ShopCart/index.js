import { connect } from 'react-redux'
import { deleteItem } from '../../actions'
import ShopCartList from '../../components/ShopCartList'

const mapStateToProps = state => ({
  shopList: state.shop.shopList
})

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCartList)
