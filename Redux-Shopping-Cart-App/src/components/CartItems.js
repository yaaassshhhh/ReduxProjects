import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
      {/* { name, quantity, total, price, id } */}
        {cartItems.map((item) => (
          <li key={item.id}>
          {" "}
          <CartItem name={item.name} id={item.id} quantity={item.quantity} price={item.price} total={item.totalPrice} />
          {" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
