import React from "react";
import { connect } from "react-redux";

import lock from "../../resources/svg/lock.svg";
import { Field, ErrorMessage } from "formik";

const PaymentForm = () => {
  return (
    <div className="PaymentFormWrapper">
      <h2>Payment</h2>
      <div className="row">
        <div className="img-wrapper">
          <img src={lock} alt="lock" />
        </div>
        <span>This is a secure 128-bit SSL encrypted payment</span>
      </div>

      <div className="form-group">
        <label>Cardholder Name</label>
        <Field
          type="text"
          name="paymentCardName"
          placeholder="Name as it appears on your card"
        />
      </div>

      <div className="form-group">
        <label>Card Number</label>
        <Field
          type="text"
          name="paymentCardNumber"
          placeholder="XXXX XXXX XXXX XXXX XXXX"
        />
      </div>

      <div className="form-row">
        <div>
          <label>Expire Date</label>
          <Field type="text" name="paymentCardDate" placeholder="MM / YY" />
        </div>
        <div>
          <label>Security Code</label>
          <Field type="text" name="paymentCardCode" placeholder="" />
        </div>
      </div>
      <button>Pay Securely</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
