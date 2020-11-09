import { State } from "../reducers/index";
import DefaultApi from "../services/defaultApi";
import Validator, { PunchaseValidator } from "../services/validator";
import { Action, ActionTypes, ValidationFail, FetchSuccess } from "./auth";

import { PunchaseFormValues } from "../models/puchase";
import {
  ValidationFail as PunchaseValidationFail,
  changeStage,
} from "../actions/punchase";
import { filterObjectProps } from "../utils";

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

const changePunchaseForm = (idx: number) => (values: PunchaseFormValues) => (
  dispatch,
  getState
) => {
  const {
    punchase: { stage },
  } = getState();

  const v = new PunchaseValidator();

  let validValues: PunchaseFormValues;

  switch (stage) {
    case 0:
      validValues = filterObjectProps(values, "shipping");
      break;
    case 1:
      validValues = filterObjectProps(values, "billing");
      break;
    case 2:
      validValues = filterObjectProps(values, "payment");
      break;
  }

  v.validateFields(validValues);

  if (Object.keys(v.valid_errors).length > 0) {
    return dispatch(PunchaseValidationFail(v.valid_errors));
  }

  return dispatch(changeStage(idx));
};

export { auth, googleLogIn, changePunchaseForm };
