import React from "react";
import { Product, Cart } from "../../models/cart";
import { getSubTotal, getTaxes } from "../../selectors/cart";
import { connect } from "react-redux";

const OrderSummary = ({
  items,
  shippingPrice,
  subtotal,
  taxes,
}: {
  items: Product[];
  shippingPrice: number;
  subtotal: number;
  taxes: number;
}) => {
  const renderItems = () =>
    items.map((item) => (
      <li key={item.id}>
        <img src={item.imgUrl} alt="productPic" />
        <div className="product-info">
          <div className="row">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
          <span>{item.desrc}</span>
          <span>Quantity: {item.qnt}</span>
        </div>
      </li>
    ));

  return (
    <div className="OrderSummaryWrapper">
      <div className="header">
        <h3>Order Summary</h3>
        <span>edit order</span>
      </div>
      <ul>{renderItems()}</ul>
      <div className="subtotal">
        <div className="row">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="row">
          <span>Shipping</span>
          <span>{shippingPrice !== 0 ? shippingPrice : "Free"}</span>
        </div>
        <div className="row">
          <span>Taxes</span>
          <span>${taxes}</span>
        </div>
      </div>
      <div className="total">
        <div className="row">
          <span>Total</span>
          <span>${subtotal + shippingPrice + taxes}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  cart,
  cart: { items, shippingPrice },
}: {
  cart: Cart;
}) => ({
  items,
  shippingPrice,
  taxes: getTaxes(cart),
  subtotal: getSubTotal(cart),
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
