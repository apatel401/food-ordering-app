import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ap-logo-1.png";
import { BiFoodMenu, BiCart, BiNotepad, BiCaretDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline"
const Header = ({ loggedIn, setLoggedIn }) => {
  const cartItems = useSelector(store => store.cart.items)
 const isOnline = useOnline()
  return (
    <header className="h-16 w-5/6 mx-auto bg-white flex justify-between items-center ">
        <img  className="h-12 my-auto" data-testid={"logo"} src={logo} alt="" />
      <nav className="flex justify-between my-5">
        <ul className="nav-list list-none flex">
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link to="/" className=" flex items-center text-black hover:text-pinky no-underline">
              Home
            </Link>
          </li>
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link
              to="/about"
              className=" flex items-center text-black hover:text-pinky no-underline"
            >
              <BiNotepad className="mr-1.5" /> About
            </Link>
          </li>
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link
              to="/menu"
              className=" flex items-center text-black hover:text-pinky no-underline"
            >
              <BiFoodMenu className="mr-1.5" /> Menu
            </Link>
          </li>
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link
              to="/cart"
              className=" flex items-center text-black hover:text-pinky no-underline"
            >
              <BiCart className="mr-1.5" /> Cart - <span data-testid={"cart"}>{cartItems.length}</span>
            </Link>
          </li>
          {loggedIn ? (
            <li className="flex items-center ml-6 h-16 text-base font-semibold">
              <Link
                to="/account"
                className=" flex items-center text-black hover:text-pinky no-underline"
              >
                <FaRegUser className="mr-1.5" />
                {user}
                <BiCaretDown className="mr-1.5" />{" "}
              </Link>
            </li>
          ) : null}
          {loggedIn ? (
            <li
              className="flex items-center ml-6 h-16 text-base font-semibold"
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </li>
          ) : (
            <li className="flex items-center ml-6 h-16 text-base font-semibold">
              <Link
                to="/login"
                className=" flex items-center text-black hover:text-pinky no-underline"
              >
                Login
                <span className="sr-only" data-testid={"online"}>{isOnline ? "online" : "offline"}</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
