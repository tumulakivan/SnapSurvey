import { useState } from "react";

import fingerprint from "../assets/icons/fingerprint48.png";
import locked from "../assets/icons/locked48.png";
import unlocked from "../assets/icons/altunlocked48.png";

const LoginPage: React.FC = () => {
  const [btnHovered, setBtnHovered] = useState<boolean>(false);
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-bg to-cardend h-fit w-fit rounded-2xl p-8 shadow-login shadow-loginbg">
      <div className="h-1/2 w-full flex items-center justify-center relative">
        <img
          src="/snaplogo.png"
          alt="company logo"
          className="w-[10rem] -translate-x-4"
        />
        <h1 className="text-emphasizedtext text-4xl font-company -translate-x-6">
          SNAPSURVEY
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center h-1/2 w-full gap-4">
        {/* <div className="flex flex-row w-full gap-2">
          <img src={fingerprint} alt="fingerprint" className="w-6" />
          <h2 className="text-offwhite text-xl">Login</h2>
        </div> */}
        <form className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-bg p-2 rounded-lg border border-fieldgray focus:outline-none text-fieldgray focus:text-offwhite focus:border-emphasizedtext caret-fieldgray transition-all duration-500"
          />
          <div className="w-full h-fit relative flex flex-row">
            <input
              type={btnStatus ? "text" : "password"}
              placeholder="Password"
              className="bg-bg w-full p-2 rounded-lg border border-fieldgray focus:outline-none text-fieldgray focus:text-offwhite focus:border-emphasizedtext caret-fieldgray transition-all duration-500"
            />
            <img
              src={btnHovered || btnStatus ? unlocked : locked}
              alt="locked"
              className="absolute w-[1.5rem] right-2 top-1/5 cursor-pointer"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              onClick={() => setBtnStatus(!btnStatus)}
            />
          </div>
          <button className="w-full px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end hover:outline hover:outline-emphasizedtext hover:outline-offset-1 rounded-lg cursor-pointer">
            Sign in
          </button>
          <div className="flex flex-row justify-between items-center w-full h-fit">
            <p className="text-fieldgray hover:text-emphasizedtext text-xs transition-all duration-500 cursor-pointer">
              Forgot password
            </p>
            <p className="text-fieldgray hover:text-emphasizedtext text-xs transition-all duration-500 cursor-pointer">
              Create an account
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
