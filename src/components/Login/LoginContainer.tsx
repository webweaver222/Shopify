import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { auth, googleLogIn } from "../../actions";
import { compose, renderErrors } from "../../utils";
import { withRouter } from "react-router-dom";
import withService from "../hoc/withService";

import {
  changeEmail,
  changeLogin,
  changePassword,
  changeType,
} from "../../actions/auth";

//import ggl from "../../resources/svg/google.svg";
import "./Login.sass";

const LoginContainer = ({
  user,
  signup,
  login,
  email,
  password,
  valid_errors,
  onLoginChange,
  onEmailChange,
  onPasswordChange,
  onClickLogin,
  onChangeAuthType,
  onGoogleLogIn,
}) => {
  const render = (spinner: JSX.Element, error: JSX.Element) => {
    const header = spinner ? (
      <span className="pulsing">Fetching</span>
    ) : (
      <span>Login Console</span>
    );

    const footer = !signup ? (
      <span>
        Don't have an account yet?{" "}
        <a href="#" onClick={onChangeAuthType}>
          Sign Up
        </a>
      </span>
    ) : (
      <span>
        Already have an account?{" "}
        <a href="#" onClick={onChangeAuthType}>
          Log In
        </a>
      </span>
    );

    return (
      <div className="login">
        <div className="login-header">{header}</div>
        <div className="login-body">
          {!spinner ? (
            <React.Fragment>
              {signup ? (
                <div className="login-body-field">
                  {valid_errors.login ? (
                    <ul className="error">
                      {renderErrors(valid_errors.login)}
                    </ul>
                  ) : null}
                  <label htmlFor="login-label">Login:</label>
                  <input
                    type="text"
                    id="login-label"
                    className={valid_errors.login ? "withError" : ""}
                    value={login}
                    onChange={(e) => onLoginChange(e.target.value)}
                  />
                </div>
              ) : null}

              <div className="login-body-field">
                {valid_errors.email ? (
                  <ul className="error">{renderErrors(valid_errors.email)}</ul>
                ) : null}
                <label htmlFor="email-label">Email:</label>
                <input
                  type="text"
                  id="email-label"
                  className={valid_errors.email ? "withError" : ""}
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                />
              </div>

              <div className="login-body-field">
                {valid_errors.password ? (
                  <ul className="error">
                    {renderErrors(valid_errors.password)}
                  </ul>
                ) : null}
                <label htmlFor="password-label">Password:</label>
                <input
                  type="password"
                  id="password-label"
                  className={valid_errors.email ? "withError" : ""}
                  value={password}
                  onChange={(e) => onPasswordChange(e.target.value)}
                />
              </div>
              {error}
              <div className="buttons-wrapper">
                <button onClick={onClickLogin}>
                  {signup ? "Signup" : "Login"}
                </button>
                {!signup ? (
                  <div className="googleBtn" onClick={onGoogleLogIn}>
                    <span>Google LogIn</span>
                  </div>
                ) : null}
              </div>
            </React.Fragment>
          ) : (
            spinner
          )}
        </div>
        <div className="login-footer">{footer}</div>
      </div>
    );
  };
  return <Login render={render} />;
};

const mapStateToProps = ({
  auth: { user, signup, login, email, password, valid_errors },
}) => ({
  user,
  signup,
  login,
  email,
  password,
  valid_errors,
});

const mapDispatchToProps = (dispatch, { service, history }) => ({
  onLoginChange: (login: string) => dispatch(changeLogin(login)),
  onEmailChange: (email: string) => dispatch(changeEmail(email)),
  onPasswordChange: (password: string) => dispatch(changePassword(password)),
  onChangeAuthType: () => dispatch(changeType()),
  onClickLogin: () => dispatch(auth(service)),
  onGoogleLogIn: () => dispatch(googleLogIn(service)),
});

export default compose(
  withRouter,
  withService,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);
