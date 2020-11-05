import React from "react";
import { Product, Cart } from "../../models/cart";
import { connect } from "react-redux";

const OrderSummary = ({ items, shippingPrice }: { items: Product[] }) => {
  return (
    <div className="OrderSummaryWrapper">
      <div className="header">
        <h3>Order Summary</h3>
        <span>edit order</span>
      </div>
      <ul>
        {items.map((item) => (
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
        ))}
      </ul>
      <div className="subtotal">
        <div className="row">
          <span>Subtotal</span>
          <span>$398</span>
        </div>
        <div className="row">
          <span>Shipping</span>
          <span>{shippingPrice !== 0 ? shippingPrice : "Free"}</span>
        </div>
        <div className="row">
          <span>Taxes</span>
          <span>$12.12</span>
        </div>
      </div>
      <div className="total">
        <div className="row">
          <span>Total</span>
          <span>$410.12</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  cart: { items, shippingPrice },
}: {
  cart: Cart;
}) => ({
  items,
  shippingPrice,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
