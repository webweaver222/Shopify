import React from "react";
import { connect } from "react-redux";

import PurchaseApp from "../PurchaseApp";

import title from "../../resources/svg/title.svg";
import logo from "../../resources/svg/logo.svg";
import cart from "../../resources/svg/cart.svg";

const AppView = ({}) => (
  <div className="AppViewWrapper">
    <header>
      <div className="line"></div>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <img src={title} alt="title" />
        </div>
        <div className="cart-icon">
          <span>cart</span>
          <img src={cart} alt="cart" />
        </div>
      </div>
    </header>
    <main>
      <div className="container">
        <PurchaseApp />
      </div>
    </main>
  </div>
);

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
