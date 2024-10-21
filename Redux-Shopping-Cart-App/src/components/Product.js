import React from "react";
import { useDispatch} from "react-redux"
import "./Product.css";
import { cartActions } from "../store/cart-slice";

const Product = ({ name, id, imgURL, price }) => {
  
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
