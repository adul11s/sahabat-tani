import React from "react";
import "../style/carousel.css";
const CartContent = (props) => {
  return (
    <div class="card bg-category">
      <div class="card-header">My Order</div>
      <div class="card-body">
        <table className="text-left">
          <tr>
            <td>Courier ID</td>
            <td>: {props.cart.shipping_id}</td>
          </tr>
          <tr>
            <td>Payment ID</td>
            <td>: {props.cart.payment_id}</td>
          </tr>
          <tr>
            <td>Total Quantity</td>
            <td>: {props.cart.total_qty}</td>
          </tr>
          <tr>
            <td>Total Price</td>
            <td>: {props.cart.total_price}</td>
          </tr>
        </table>

        <div class="btn btn-primary">Checkout</div>
      </div>
    </div>
  );
};
export default CartContent;
