import React from "react";
import { connect } from "react-redux";

import Spinner from "../minor-components/Spinner";
import ErrorIndicator from "../error-indicator";

const Login = ({ render, login_fetching, auth_error }) => {
  const error = auth_error ? <ErrorIndicator message={auth_error} /> : null;
  const spinner = login_fetching ? <Spinner /> : null;

  return render(spinner, error);
};

export default connect(
  ({ auth: { login_fetching, auth_error } }) => ({
    login_fetching,
    auth_error,
  }),

  null
)(Login);
