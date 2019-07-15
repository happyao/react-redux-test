import { connect } from "react-redux";
import { removeItem, addItem, deleteItem } from "../../actions";
import ShopCartList from "../../components/ShopCartList";

const mapStateToProps = state => ({
  shopList: state.shop.shopList
});

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  addItem: id => dispatch(addItem(id)),
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCartList);
