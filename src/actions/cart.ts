export enum ActionTypes {
  GET_CART_SUBTOTAL = "GET_CART_SUBTOTAL",
  GET_CART_TOTAL = "GET_CART_TOTAL",
}

export type Action = getCartSubtotal | getCartTotal;

export interface getCartSubtotal {
  type: ActionTypes.GET_CART_SUBTOTAL;
}
export interface getCartTotal {
  type: ActionTypes.GET_CART_TOTAL;
}
