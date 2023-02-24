import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../redux/cartSlice";

export const Cart = () => {
  const items = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(items);

  function handleRemove(productId) {
    dispatch(remove(productId));
  }
  return (
    <>
      <div className="flex flex-col items-center">
        {items.length != 0 ? (
          <h1 className="text-3xl mb-10 font-semibold">
            Your Cart Items: {items.length}
          </h1>
        ) : (
          ""
        )}
        <div className="flex flex-col w-full gap-5 mb-10">
          {items.map((item, i) => (
            <div className="w-4/5 mx-auto rounded-xl py-8 px-2 bg-red-500 flex flex-row items-center justify-evenly text-white font-semibold text-3xl">
              <h1>{item.bloodType}</h1>
              <p>{item.qty} litres</p>
              <button
                className="py-3 px-9 text-white font-semibold bg-red-700 rounded-xl"
                onClick={() => handleRemove(item.code)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        {items.length != 0 ? (
          <Link to="/checkoutForm">
            <button className="px-9 py-3 text-xl hover:bg-green-400 bg-green-500 rounded-xl text-white font-semibold mb-10">
              Proceed to Checkout
            </button>
          </Link>
        ) : (
          <p className="text-4xl font-semibold">Your Cart is Empty! 😥</p>
        )}
      </div>
    </>
  );
};
