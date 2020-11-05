import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { connect } from "react-redux";

import ShippingForm from "../ShippingForm";
import BillingForm from "../BillingForm";

const Form = ({ onSubmit }) => {
  return (
    <div className="FormWrapper">
      <Formik
        initialValues={{
          shippingName: "",
          shippingPhone: "",
          shippingStreet: "",
          shippingDetails: "",
          shippingCity: "",
          shippingCountry: "",
          shippingZip: "",
          billingName: "",
          billingEmail: "",
          billingStreet: "",
          billingDetails: "",
          billingCity: "",
          billingCountry: "",
          billingZip: "",
          paymentCardNane: "",
          paymentCardNumber: "",
          paymentCardDate: "",
          paymentCardCode: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <ShippingForm />
            {/*<button type="submit">click</button>*/}
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
