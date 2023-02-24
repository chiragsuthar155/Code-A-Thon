import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

export const BloodGroups = () => {
  const[color,setColor]=useState("false");
  const dispatch = useDispatch();
  function handleClick(product,event) {
    dispatch(add(product));
    event.preventDefault();
    setColor("true");
    setTimeout(()=>{
      setColor("false");
    },1000);

  }





  
  return (
    <>
      <div className="flex flex-col px-16 py-20 bg-slate-100">
        <h1 className="font-semibold text-3xl mb-6">Choose blood group</h1>
        <div className="flex flex-row items-center justify-center flex-wrap gap-8 ">
          <div className="h-40 w-40 gap-4 border flex flex-col items-center font-semibold text-lg text-slate-500 rounded-xl bg-white justify-center  hover:scale-125 cursor-pointer transition-transform" onClick={()=>handleClick({bloodGroup: "O+"})}>
            <img
              className="w-20 rounded-xl hover:invert-0"
              src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
              alt=""
            />

            <p className="absolute top-13 text-[#d24e4f]">O+</p>
          </div>
          <div  className={color=="false"?"h-40  w-40 gap-4 border flex flex-col items-center font-semibold text-lg text-slate-500 rounded-xl bg-white justify-center  hover:scale-125 cursor-pointer transition-transform":"h-40  w-40 gap-4 border flex flex-col items-center font-semibold text-lg text-slate-500 rounded-xl bg-green-500 justify-center  hover:scale-125 cursor-pointer transition-transform"} onClick={()=>handleClick({bloodGroup: "AB+"})}>
            <img
              className=" w-20 rounded-xl hover:invert-0"
              src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
              alt=""
            />
            <p className="absolute top-13 text-[#d24e4f]">AB+</p>
          </div>

          <div className="h-40 w-40 gap-4 rounded-xl border flex flex-col items-center font-semibold hover:scale-125    bg-white cursor-pointer transition-transform text-lg text-slate-500 relative justify-center" onClick={()=>handleClick({bloodGroup: "AB-"})}>
            <img
              className="w-20 rounded-xl  hover:invert-0"
              src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
              alt=""
            />
            <p className="absolute top-13 text-[#d24e4f]">AB-</p>
          </div>
          <div className="h-40 w-40 gap-4 border rounded-xl flex flex-col items-center font-semibold  hover:scale-125   cursor-pointer transition-transform bg-white text-lg text-slate-500 justify-center" onClick={()=>handleClick({bloodGroup: "A+"})}>
            <img
              className="w-20 rounded-xl  hover:invert-0"
              src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
              alt=""
            />
            <p className="absolute top-13 text-[#d24e4f]">A+</p>
          </div>
          <div className="h-40 w-40 gap-4 border rounded-xl flex flex-col items-center font-semibold hover:scale-125 cursor-pointer transition-transform bg-white text-lg text-slate-500 justify-center" onClick={()=>handleClick({bloodGroup: "A-"})}>
            <img
              className="w-20 rounded-xl  hover:invert-0"
              src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
              alt=""
            />
            <p className="absolute top-13 text-[#d24e4f]">A-</p>
          </div>
          <div className="h-40 w-40 gap-4 border rounded-xl flex flex-col items-center font-semibold  hover:scale-125 cursor-pointer transition-transform bg-white text-lg text-slate-500 justify-center" onClick={()=>handleClick({bloodGroup: "B+"})}>
            <img
              className="w-20 rounded-xl hover:invert-0"
              src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
              alt=""
            />
            <p className="absolute top-13 text-[#d24e4f]">B+</p>
          </div>
          <div className="h-40 w-40 gap-4 border rounded-xl flex flex-col items-center font-semibold hover:scale-125   cursor-pointer transition-transform bg-white text-lg text-slate-500 justify-center" onClick={()=>handleClick({bloodGroup: "B-"})}>
            <img
              className="w-20 rounded-xl hover:invert-0"
              src="https://img.icons8.com/ios/50/null/drop-of-blood--v2.png"
              alt=""
            />
            <p className="absolute top-13 text-[#d24e4f]">B-</p>
          </div>
        </div>
        
      </div>
    </>
  );
};
