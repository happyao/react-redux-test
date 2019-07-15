import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import left from "../../assets/left.png";
const SubFooter = ({ subTotal }) => (
  <div class="footer">
    <div class="contine">
      <img src={left} />
      Continue Shopping
    </div>
    <div class="subtotal">
      Subtotal:
      <div style={{ color: "black", fontSize: "1.3em" }}>${subTotal}</div>
    </div>
  </div>
);
SubFooter.protoTypes = {
  subTotal: PropTypes.string.isRequired
};

export default SubFooter;
