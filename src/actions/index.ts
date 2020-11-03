import { State } from "../reducers/index";
import DefaultApi from "../services/defaultApi";
import Validator from "../services/validator";
import { Action, ActionTypes, ValidationFail, FetchSuccess } from "./auth";

const auth = (service: DefaultApi) => async (dispatch, getState) => {
  const v = new Validator();
  const {
    auth: { login, email, password, signup },
  }: State = getState();

  signup
    ? v.validateFields({ login, email, password })
    : v.validateFields({ email, password });

  if (Object.keys(v.errors).length > 0) {
    return dispatch(ValidationFail(v));
  }

  dispatch(ActionTypes.FETCH_START);

  try {
    return dispatch(ActionTypes.FETCH_SUCCESS);
  } catch (e) {}
};

const googleLogIn = (service: DefaultApi) => async (dispatch) => {
  const popup = window.open(
    service.googleAuthUrl,
    "googleAuth",
    "width=500,height=500"
  );

  const pollTimer = window.setInterval(async function () {
    try {
      if (popup.closed) {
        window.clearInterval(pollTimer);
      }

      if (popup.document.URL.indexOf(service.getBase()) != -1) {
        window.clearInterval(pollTimer);

        const token = new URLSearchParams(popup.location.hash.substr(1)).get(
          "access_token"
        );

        const res = await service.getGoogleProfile(token);

        dispatch(FetchSuccess(await res.json()));
        popup.close();
      }
    } catch (e) {}
  }, 100);
};

export { auth, googleLogIn };
