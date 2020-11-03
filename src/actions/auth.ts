import Validator from "../services/validator";

export enum ActionTypes {
  CHANGE_LOGIN_INPUT = "CHANGE_LOGIN_INPUT",
  CHANGE_EMAIL_INPUT = "CHANGE_EMAIL_INPUT",
  CHANGE_PASSWORD_INPUT = "CHANGE_PASSWORD_INPUT",
  CHANGE_AUTH_TYPE = "CHANGE_AUTH_TYPE",
  CLICK_LOGIN = "CLICK_LOGIN",
  FETCH_START = "FETCH_START",
  VALIDATION_FAIL = "VALIDATION_FAIL",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAIL = "FETCH_FAIL",
}

export type Action =
  | ChangeAuthInputAction
  | ChangeAuthType
  | clickLogin
  | FetchStart
  | ValidationFail
  | FetchSuccess
  | FetchFail;

export interface ChangeAuthInputAction {
  type:
    | ActionTypes.CHANGE_LOGIN_INPUT
    | ActionTypes.CHANGE_EMAIL_INPUT
    | ActionTypes.CHANGE_PASSWORD_INPUT;
  payload: { email?: string; password?: string; login?: string };
}

export interface ChangeAuthType {
  type: ActionTypes.CHANGE_AUTH_TYPE;
}

export interface clickLogin {
  type: ActionTypes.CLICK_LOGIN;
}

export interface FetchStart {
  type: ActionTypes.FETCH_START;
}

export interface FetchSuccess {
  type: ActionTypes.FETCH_SUCCESS;
  payload: {
    user: any;
  };
}

export interface FetchFail {
  type: ActionTypes.FETCH_FAIL;
}

export interface ValidationFail {
  type: ActionTypes.VALIDATION_FAIL;
  payload: {
    errors: Validator;
  };
}

export function changeLogin(text: string): ChangeAuthInputAction {
  return {
    type: ActionTypes.CHANGE_LOGIN_INPUT,
    payload: {
      login: text,
    },
  };
}

export function changeEmail(text: string): ChangeAuthInputAction {
  return {
    type: ActionTypes.CHANGE_EMAIL_INPUT,
    payload: {
      email: text,
    },
  };
}

export function changePassword(text: string): ChangeAuthInputAction {
  return {
    type: ActionTypes.CHANGE_PASSWORD_INPUT,
    payload: {
      password: text,
    },
  };
}

export function changeType(): ChangeAuthType {
  return {
    type: ActionTypes.CHANGE_AUTH_TYPE,
  };
}

export function clickLogin(): clickLogin {
  return {
    type: ActionTypes.CLICK_LOGIN,
  };
}

export function FetchSuccess(user: any): FetchSuccess {
  return {
    type: ActionTypes.FETCH_SUCCESS,
    payload: {
      user,
    },
  };
}

export function ValidationFail(errors: Validator): ValidationFail {
  return {
    type: ActionTypes.VALIDATION_FAIL,
    payload: {
      errors,
    },
  };
}
