import { combineReducers } from "redux";
import updateAuth from "./updateAuth";
import updateCart from "./updateCart";
import updatePunchase from "./updatePunchase";

import { Auth } from "../models/auth";
import { Cart } from "../models/cart";
import { Punchase } from "../models/puchase";

export interface State {
  auth: Auth;
  cart: Cart;
  punchase: Punchase;
}

const reducer = combineReducers<State>({
  auth: updateAuth,
  cart: updateCart,
  punchase: updatePunchase,
});

export default reducer;
