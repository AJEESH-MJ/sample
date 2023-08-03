import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../../components/socialIcons/socialIcons";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

 
  const [showPassword, setShowPassword] = useState(false);

  const [LoginUsername, setLoginUsername] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission
    // You can add your authentication logic here
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Handle register form submission
    // You can add your registration logic here
  };

  const LoginForm = () => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full max-w-md items-center mt-20 transition duration-1000 ease-out">
        <h2 className="p-3 text-4xl font-bold text-gray-600 mb-4">YBRO</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid -mt-6"></div>
        <h3 className="text-2xl font-semibold text-blue-400 pt-2">Sign In!</h3>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleLoginSubmit}
        >
          <div className="w-full bg-gray-200 h-12 my-4 rounded-full px-4 flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-500 text-2xl mr-2"
            />
            <input
              type="text"
              name="loginUsername"
              placeholder="Username"
              className="bg-transparent outline-none flex-1 text-gray-700"
              value={LoginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="w-full bg-gray-200 h-12 my-4 rounded-full px-4 flex items-center">
            <FontAwesomeIcon
              icon={faLock}
              className="text-gray-500 text-2xl mr-2"
            />
            <div className="flex-1">
              <input
                type={showPassword ? "text" : "password"}
                name="loginPassword"
                placeholder="Password"
                className="bg-transparent outline-none w-full text-gray-700"
                value={loginpassword}
                onChange={(e) => setLoginpassword(e.target.value)}
              />
            </div>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="text-gray-500 text-lg ml-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button className="w-40 h-10 bg-blue-400 border-none outline-none rounded-full text-white uppercase font-semibold my-4 cursor-pointer transition duration-500 hover:bg-blue-700">
            Sign In
          </button>
        </form>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
        <p
          className="text-blue-400 mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account
        </p>
        <SocialIcons />
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="bg-gray-700 text-white rounded-2xl shadow-2xl flex flex-col w-full max-w-md items-center mt-20 transition duration-1000 ease-in">
        <h2 className="p-3 text-3xl font-bold text-white">YBRO</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className="text-2xl font-semibold text-blue-400 pt-2">
          Create Account!
        </h3>
        <form
          className="flex flex-col items-center justify-center mt-2"
          onSubmit={handleRegisterSubmit}
        >
          <div className="w-full bg-gray-200 h-12 my-4 rounded-full px-4 flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-500 text-lg mr-2"
            />
            <input
              type="text"
              name="registerUsername"
              placeholder="Username"
              className="bg-transparent outline-none flex-1 text-gray-700"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
          </div>
          <div className="w-full bg-gray-200 h-12 my-4 rounded-full px-4 flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-500 text-lg mr-2"
            />
            <input
              type="email"
              name="registerEmail"
              placeholder="Email"
              className="bg-transparent outline-none flex-1 text-gray-700"
              value={registerEmail} 
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="w-full bg-gray-200 h-12 my-4 rounded-full px-4 flex items-center">
            <FontAwesomeIcon
              icon={faLock}
              className="text-gray-500 text-lg mr-2"
            />
            <div className="flex-1">
              <input
                type={showPassword ? "text" : "password"}
                name="registerPassword"
                placeholder="Password"
                className="bg-transparent outline-none w-full text-gray-700"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="text-gray-500 text-lg ml-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button className="w-40 h-10 bg-white border-none outline-none rounded-full text-blue-400 uppercase font-semibold my-4 cursor-pointer transition duration-500 hover:bg-blue-400 hover:text-white">
            Sign Up
          </button>
        </form>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className="text-white mt-4 text-sm">Already have an account?</p>
        <p
          className="text-white mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Sign In to your Account
        </p>
        <SocialIcons color1="text-white"/>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col mb-52 md:flex-row items-center justify-center w-full px-2 md:px-20">
        {/* <div className="-mb-24 md:flex-1 hidden md:flex justify-center">
            <img
              src={image}
              alt="Authentication"
              className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl object-contain img"
            />
          </div> */}
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default Login;
