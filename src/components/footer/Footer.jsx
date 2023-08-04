import React from "react";
import ItemsContainer from "../../subSections/footerComponents/itemsContainer";
import SocialIcons from "../socialIcons/socialIcons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-indigo-50 to-indigo-200 text-white">
      <ItemsContainer />
      <div className="md:flex md:justify-around md:items-center sm:px-12 px-4  bg-gradient-to-b from-indigo-100  to-indigo-300 py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-blue-500">Free</span> until you're ready to
          launch
        </h1>
        <div class="footer-newsletter bg-blue-400 text-white rounded-lg p-5 my-4 shadow-sm">
          <h3 className="text-2xl md:text-3xl mb-4 pl">
            Subscribe to our Newsletter
          </h3>
          <form className="flex items-center">
            <input
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-64 h-10 border-none text-gray-700 px-2 mr-2 md:mr-4 text-lg rounded-md"
            />
            <button
              type="submit"
              className="h-10 bg-gray-700 text-white px-8 text-md rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-indigo-300 flex items-center justify-center">
      <h1 className="text-blue-500 text-xl mb-7 mr-1">Follow Us -{">"}</h1>
      <SocialIcons />
      </div>
        <div className="footer-bottom bg-gray-700 text-white text-center py-2">
          <p>© 2023 YBRO CORPORATIONS. All rights reserved.</p>
          <p>Terms · Privacy Policy</p>
        </div>
    </footer>
  );
};

export default Footer;
