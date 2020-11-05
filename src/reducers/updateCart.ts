import { Cart } from "../models/cart";
import { Action, ActionTypes } from "../actions/cart";

const initialCart: Cart = {
  items: [
    {
      id: 0,
      name: "The Chelsea Boot",
      price: 235,
      desrc: "Black",
      qnt: 1,
      imgUrl: "src/resources/img/shoe.png",
    },
    {
      id: 1,
      name: "The Twill Snap Backpack",
      price: 65,
      desrc: "Reverse Denim + Brown leather",
      qnt: 1,
      imgUrl: "src/resources/img/bag.png",
    },
    {
      id: 2,
      name: "The Twill Zip Tote",
      price: 48,
      desrc: "Reverse Denim + Brown leather",
      qnt: 1,
      imgUrl: "src/resources/img/bag2.png",
    },
  ],
  shippingPrice: 0,
  taxRate: 3,
};

const updateCart = (cart: Cart, action: Action) => {
  if (typeof cart === "undefined") return initialCart;

  switch (action.type) {
    default:
      return cart;
  }
};

export default updateCart;
