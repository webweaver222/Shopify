import React from "react";
import { connect } from "react-redux";
import Form from "../Form";

import arrow from "../../resources/svg/arrowR.svg";

const PurchasePhase = () => {
  return (
    <div className="PurchasePhaseWrapper">
      <ul className="phase-menu">
        <li className="active">Shipping</li>
        <img src={arrow} alt="arrow" />
        <li>Billing</li>
        <img src={arrow} alt="arrow" />
        <li>Payment</li>
      </ul>
      <Form /* stage={...}*/ />
      <button>Continue</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchasePhase);
