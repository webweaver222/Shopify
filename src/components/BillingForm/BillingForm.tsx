import React from "react";
import { connect } from "react-redux";
import { Field, ErrorMessage } from "formik";
import countries from "../../services/states";

const BillingForm = () => (
  <div className="BillingFormWrapper">
    <h2>Billing Information</h2>
    <div className="form-group">
      <label>Billing Contact</label>
      <Field type="text" name="billingName" placeholder="Full Name" />

      <Field type="text" name="billingEmail" placeholder="Email Address" />
    </div>
    <div className="form-group">
      <label>Billing Address</label>
      <Field type="text" name="billingStreet" placeholder="Street Address" />
      <Field
        type="text"
        name="billingDetails"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
      />
      <div className="input-wrapper">
        <Field type="text" name="billingCity" placeholder="City" />
        <div className="target-icon"></div>
      </div>
      <div className="form-row">
        <Field as="select" name="billingCountry">
          <option value="Country" hidden>
            Country
          </option>
          {countries.map((c, i) => (
            <option key={i} value={c.name}>
              {c.name}
            </option>
          ))}
        </Field>
        <Field type="text" name="billingZip" placeholder="ZIP" />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BillingForm);
