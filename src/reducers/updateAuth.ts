import { ActionTypes, Action } from "../actions/auth";
import { Auth } from "../models/auth";

const initialAuth: Auth = {
  session_key: undefined,
  signup: false,
  login: "",
  email: "",
  password: "",
  login_fetching: false,
  auth_error: undefined,
  valid_errors: {},
  user: null,
};

const updateAuth = (auth: Auth, action: Action): Auth => {
  if (typeof auth === "undefined") {
    return initialAuth;
  }

  const { signup } = auth;

  switch (action.type) {
    case ActionTypes.CHANGE_LOGIN_INPUT: {
      return {
        ...auth,
        login: action.payload.login,
      };
    }

    case ActionTypes.CHANGE_EMAIL_INPUT: {
      return {
        ...auth,
        email: action.payload.email,
      };
    }

    case ActionTypes.CHANGE_PASSWORD_INPUT: {
      return {
        ...auth,
        password: action.payload.password,
      };
    }

    case ActionTypes.CHANGE_AUTH_TYPE: {
      return {
        ...auth,
        signup: !signup,
      };
    }

    case ActionTypes.CLICK_LOGIN: {
      return {
        ...auth,
        login_fetching: !auth.login_fetching,
      };
    }

    case ActionTypes.VALIDATION_FAIL: {
      const {
        errors: { errors },
      } = action.payload;
      return {
        ...auth,
        valid_errors: errors,
      };
    }

    case ActionTypes.FETCH_START: {
      return {
        ...auth,
        login_fetching: true,
      };
    }

    case ActionTypes.FETCH_SUCCESS: {
      return {
        ...auth,
        login_fetching: false,
        user: action.payload.user,
      };
    }

    case ActionTypes.FETCH_FAIL: {
      return {
        ...auth,
        login_fetching: false,
      };
    }

    default:
      return auth;
  }
};

export default updateAuth;
