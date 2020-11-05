import { combineReducers } from "redux";
import updateAuth from "./updateAuth";
import updateCart from "./updateCart";
import { Auth } from "../models/auth";
import { Cart } from "../models/cart";

export interface State {
  auth: Auth;
  cart: Cart;
}

const reducer = combineReducers<State>({ auth: updateAuth, cart: updateCart });

export default reducer;
