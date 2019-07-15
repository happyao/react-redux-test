import "./style.css";
import { months, years } from "../../Utils/helper";
import React, { Component } from "react";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
class Card extends Component {
  inputNumber = e => {
    var number = e.target.value;
    number = number.replace(/(\d{4})(?=\d)/g, "$1  ");
    e.target.value = number;
  };

  render() {
    return (
      <div class="card">
        <div class="card-detail">Card Details</div>
        <div class="card-type">
          <div style={{ height: "20%" }}>Card Type</div>
          <div class="image-wrapper">
            <img class="visa" src={visa} />
            <img src={master} style={{ width: "35%", marginLeft: "-15%" }} />
          </div>
        </div>

        <form style={{ height: "60%" }}>
          <div class="form-group">
            <label for="name">Name on Card</label>
            <input type="name" id="name" placeholder="Giga Tamarashvili" />
          </div>
          <div class="form-group">
            <label for="cardnumber">Card Number</label>
            <input
              onChange={this.inputNumber}
              type="text"
              maxLength="22"
              id="cardnumber"
              placeholder="****  ****  ****  ****"
            />
          </div>

          <div
            class="form-group"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div class="exp-wrapper">
              <label for="expiratoin">Expiratoin data</label>
              <div class="select-wrapper">
                <select>
                  {months.map(m => {
                    return <option value={m.key}>{m.value}</option>;
                  })}
                </select>
                <select>
                  {years.map(y => {
                    return <option value={y.key}>{y.value}</option>;
                  })}
                </select>
              </div>
            </div>
            <div class="cvv-wrapper">
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" maxLength="3" placeholder="XXX" />
            </div>
          </div>
          <div class="form-group" style={{ alignItems: "center" }}>
            <button type="submit" class="btn btn-primary">
              Check Out
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Card;
