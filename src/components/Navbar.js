import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const items = useSelector((state) => state.cart);
  let cartItems = 0;
  items.forEach((item) => (cartItems += item.qty));
  return (
    <div className="flex flex-row justify-center items-center py-0 px-8">
      <Link to="/">
        <div className="logo">
          <img className="w-28 cursor-pointer" src={logo} alt="" />
        </div>
      </Link>
      <div className="searchBar border w-4/6 rounded-xl mx-auto flex flex-row items-center ">
        <img
          className="h-6 w-6 ml-2"
          src="https://img.icons8.com/ios/50/null/search--v1.png"
          alt="search icon"
        />
        <input
          className="w-full py-3 px-4 outline-none text-md rounded-xl "
          placeholder="Search for Bloods..."
          type="text"
        />
      </div>
      <Link className="mx-auto" to="/cart">
        <p className="font-semibold text-xl cursor-pointer">
          Cart: {cartItems}
        </p>
      </Link>
      <div className="user-img flex flex-row items-center gap-2">
        <Link to="/admin">
          <img
            className="rounded-full w-10 h-10"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="user img"
          />
        </Link>
        <p className="text-xl font-semibold cursor-pointer ">Hello, Aryan</p>
        <img
          className="h-5 cursor-pointer"
          src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/null/external-down-arrows-inkubators-detailed-outline-inkubators-4.png"
          alt=""
        />
      </div>
    </div>
  );
};
