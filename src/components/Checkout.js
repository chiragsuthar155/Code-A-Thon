import React from "react";
import { ExportCSV } from "./ExportCSV";
export const Checkout = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="w-4/6 mx-auto border px-8 py-32 rounded-xl bg-green-400 text-white text-3xl flex flex-col justify-center items-center">
          <img
            className="w-32 mb-8"
            src="https://img.icons8.com/fluency/144/null/checked.png"
            alt="Order Successful Logo"
          />
          <h1 className="font-semibold text-center">
            Your Order Has Been Placed Successfully...😄😄
          </h1>
        </div>
      </div>
    </>
  );
};
