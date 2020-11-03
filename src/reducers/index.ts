import { combineReducers } from "redux";
import updateAuth from "./updateAuth";
import { Auth } from "../models/auth";

export interface State {
  auth: Auth;
}

const reducer = combineReducers<State>({ auth: updateAuth });

export default reducer;
