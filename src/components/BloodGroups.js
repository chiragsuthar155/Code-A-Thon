import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

export const BloodGroups = () => {
  const dispatch = useDispatch();
  const bloods = [
    {
      imgLink: "https://img.icons8.com/ios/50/null/drop-of-blood--v2.png",
      bloodType: "O+",
    },
    {
      imgLink: "https://img.icons8.com/ios/50/null/drop-of-blood--v2.png",
      bloodType: "AB+",
    },
    {
      imgLink: "https://img.icons8.com/ios/50/null/drop-of-blood--v2.png",
      bloodType: "AB-",
    },
    {
      imgLink: "https://img.icons8.com/ios/50/null/drop-of-blood--v2.png",
      bloodType: "A+",
    },
    {
      imgLink: "https://img.icons8.com/ios/50/null/drop-of-blood--v2.png",
      bloodType: "A-",
    },
    {
      imgLink: "https://img.icons8.com/ios/50/null/drop-of-blood--v2.png",
      bloodType: "B+",
    },
    {
      imgLink: "https://img.icons8.com/ios/50/null/drop-of-blood--v2.png",
      bloodType: "B-",
    },
  ];
  function handleClick(product, event) {
    dispatch(add(product));
    const item = event.target;
    console.log(event);
    console.log(item);
    item.classList.add("bg-green-400");
    setTimeout(() => {
      item.classList.remove("bg-green-400");
    }, 1000);
  }

  return (
    <>
      <div className="flex flex-col px-16 py-32 bg-slate-100">
        <h1 className="font-semibold text-3xl mb-6">Choose blood group</h1>
        <div className="flex flex-row items-center justify-center flex-wrap gap-8 ">
          {bloods.map((item, i) => (
            <div
              className="h-40 w-40 gap-4 border flex flex-col items-center font-semibold text-lg text-slate-500 rounded-xl bg-white justify-center  hover:scale-125 cursor-pointer transition-transform"
              onClick={(e) => {
                item.code = i;
                handleClick(item, e);
              }}
              key={i}
            >
              <img
                className="w-20 rounded-xl hover:invert-0"
                src={item.imgLink}
                alt=""
              />
              <p className="absolute top-13 text-[#d24e4f]">{item.bloodType}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
