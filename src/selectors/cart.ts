import { Cart, Product } from "../models/cart";
import { createSelector } from "reselect";

const calculatePrice = (items: Product[]) =>
  items.reduce((acc: number, item: Product) => acc + item.price * item.qnt, 0);

export const getSubTotal = createSelector(
  (cart: Cart) => cart.items,
  (items: Product[]): number => calculatePrice(items)
);

export const getTaxes = createSelector(
  [(cart: Cart) => cart.items, (cart: Cart) => cart.taxRate],
  (items: Product[], rate: number): number =>
    (calculatePrice(items) * rate) / 100
);
