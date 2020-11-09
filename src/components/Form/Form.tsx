import React from "react";
import { State } from "../../reducers";
import { changePunchaseForm } from "../../actions";

import { Formik, Form as FormikForm } from "formik";
import { connect } from "react-redux";

const Form = ({
  onSubmit,
  stageIdx,
  children,
  onChangeStage,
  valid_errors,
}) => {
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
          paymentCardName: "",
          paymentCardNumber: "",
          paymentCardDate: "",
          paymentCardCode: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, values }) => {
          return (
            <>
              <FormikForm>
                {React.cloneElement(children, { valid_errors })}
              </FormikForm>
              {stageIdx < 2 && (
                <button onClick={() => onChangeStage(stageIdx + 1)(values)}>
                  Continue
                </button>
              )}
            </>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ punchase: { stage, valid_errors } }: State) => ({
  stageIdx: stage,
  valid_errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeStage: (stageIdx: number) => (values) =>
    dispatch(changePunchaseForm(stageIdx)(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
