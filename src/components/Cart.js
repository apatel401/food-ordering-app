import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import FoodItemCard from "./FoodItemCard";
function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItems());
  };
  return (
    <div>
      <h1>Cart items</h1>
      <button
        className="bg-red-600 text-white py-2 px-3 m-2"
        onClick={() => handleClear()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
