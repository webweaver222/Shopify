import React from "react";
import Validator from "../../services/validator";

const withValidator = (Wrapped: Function) => props => (
  <Wrapped {...props} validator={new Validator()} />
);

export default withValidator;
