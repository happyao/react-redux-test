import { connect } from "react-redux";
import SubFooter from "../../components/SubFooter";
const mapStateToProps = state => ({
  subTotal: state.shop.subTotal
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubFooter);
