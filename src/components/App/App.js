import React, { Component } from "react";
import "./App.css";
import ShopCart from "../../containers/ShopCart";
import Footer from "../../containers/Footer";
import Card from "../Card";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          class="row"
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            justifyContent: "space-around"
          }}
        >
          <div class="col-sm-10 col-md-7">
            <div className="title"> Shopping Cart</div>
            <ShopCart />
            <Footer />
          </div>
          <div class="col-sm-10 col-md-4 d-flex align-items-center justify-content-center">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
