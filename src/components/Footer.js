import React from "react";
import logo from "../assets/logo.jpg";

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-row justify-evenly  items-start text-md py-20">
        <div className="logo  flex flex-col">
          <img className="w-28 h-20 cursor-pointer " src={logo} alt="" />
          <h1 className="text-xl font-semibold text-center text-red-500">
            Donate blood, save a life
          </h1>
        </div>
        <ul>
          <li className="text-2xl mb-3">About Us</li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">Home</li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">About</li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">Contact</li>
        </ul>
        <ul>
          <li className="text-2xl mb-3">Looking for Blood</li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">
            Blood Availability
          </li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">
            Blood Bank Directory
          </li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">
            Thalassemia Request
          </li>
        </ul>
        <ul>
          <li className="text-2xl mb-3">Want to Donate Blood</li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">
            Blood Donation Camps
          </li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">
            Donor Login
          </li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">
            About Blood Donation
          </li>
          <li className="cursor-pointer mb-2 hover:text-[#d24e4f]">
            Register VBD Camp
          </li>
        </ul>
      </div>
    </>
  );
};
