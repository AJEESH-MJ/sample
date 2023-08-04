import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../../assets/index";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (index) => {
    setActiveLink(index);
    setShowMenu(false);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-indigo-100 shadow-lg px-2 py-3 relative z-10">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/Y_BRO/" className="flex items-center">
            <img src={logo} alt="" className="h-12 ml-2 md:ml-14" />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-3xl leading-20 cursor-pointer mr-4"
            onClick={handleMenuToggle}
          >
            {showMenu ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          <form
            className={`navform flex items-center bg-white rounded-full px-2 py-1 absolute -ml-64 -mt-10 ${
              showMenu ? "visible" : "hidden"
            }`}
            action="/Y_BRO/products"
          >
            <input
              name="search"
              className="search border-none bg-transparent text-md px-2 py-1 focus:outline-indigo-200"
              type="text"
              placeholder="Search..."
            />
            <button
              className="border-none bg-transparent text-lg text-blue-400 ml-2 cursor-pointer"
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>

        <div
          className={`hidden gap-8 justify-center md:flex flex-grow md:ml-8 items-center ${
            showMenu ? "hidden" : ""
          }`}
        >
          <Link
            to="/Y_BRO/"
            className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-500 ipad ${
              activeLink === 0 ? "activate" : ""
            }`}
            onClick={() => handleClick(0)}
          >
            Home
          </Link>
          <Link
            to="/Y_BRO/products"
            className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-500 ipad ${
              activeLink === 1 ? "activate" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            Products
          </Link>
          <Link
            to="/Y_BRO/design"
            className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-500 ipad ${
              activeLink === 2 ? "activate" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            Design
          </Link>
          <Link
            to="/Y_BRO/about"
            className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-
            500 ipad ${activeLink === 3 ? "activate" : ""}`}
            onClick={() => handleClick(3)}
          >
            About
          </Link>
          <form
            id="searchForm"
            className={`flex items-center bg-white rounded-full px-3 py-1 ml-4 md:ml-6 ${
              showMenu ? "hidden" : ""
            }`}
            action="/Y_BRO/products"
          >
            <input
              name="search"
              className="border-none bg-transparent text-lg px-2 py-1 focus:outline-indigo-200"
              type="text"
              placeholder="Search..."
            />
            <button
              className="border-none bg-transparent text-lg text-blue-400 ml-2 cursor-pointer"
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div
          className={`hidden md:flex gap-4 items-center relative right-20 lap ${
            showMenu ? "hidden" : ""
          }`}
        >
          <Link
            to="/Y_BRO/Auth"
            className="text-blue-500 text-2xl no-underline transition-colors duration-200 ease-in-out hover:text-blue-400 "
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link
            to="/Y_BRO/cart"
            className="text-blue-500 text-2xl no-underline transition-colors duration-200 ease-in-out hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="absolute -top-2 -right-2 bg-gray-600 rounded-full w-5 h-5 text-white text-center text-xs">
              1
            </div>
          </Link>
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden mt-4">
          <ul className="bg-white shadow rounded p-4 flex flex-col gap-4">
            <li>
              <Link
                to="/Y_BRO/"
                className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-500 ipad  ${
                  activeLink === 0 ? "activate" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Y_BRO/products"
                className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-500 ipad  ${
                  activeLink === 1 ? "activate" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/Y_BRO/design"
                className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-500 ipad  ${
                  activeLink === 2 ? "activate" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                to="/Y_BRO/about"
                className={`text-blue-700 text-lg font-medium relative transition-colors duration-200 mr-2 hover:text-blue-500 ipad  ${
                  activeLink === 3 ? "activate" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                About
              </Link>
            </li>
          </ul>
          <div className="flex justify-center gap-4 mt-3">
            <Link
              to="/Y_BRO/Auth"
              className="text-blue-500 text-2xl no-underline transition-colors duration-200 ease-in-out hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link
              to="/Y_BRO/cart"
              className="text-blue-500 text-2xl no-underline transition-colors duration-200 ease-in-out hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
