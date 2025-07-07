import { useEffect, useState } from "react";

import locked from "../assets/icons/locked48.png";
import unlocked from "../assets/icons/altunlocked48.png";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [btnHovered, setBtnHovered] = useState<boolean>(false);
  const [btnStatus, setBtnStatus] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(""); // any for now
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      setError(String(err));
    }
  };

  useEffect(() => {
    if (error) {
      const errorTimeout = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(errorTimeout);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-bg to-cardend h-[60%] w-[80%] md:h-[40%] md:w-[40%] lg:h-[60%] lg:w-[20%] rounded-2xl p-8 shadow-login shadow-loginbg">
      <div className="h-1/2 w-full flex flex-col items-center justify-center">
        <img
          src="/snaplogo.png"
          alt="company logo"
          className="w-[10rem] -translate-y-4"
        />
        <h1 className="text-emphasizedtext text-3xl md:text-4xl font-company">
          SNAPSURVEY
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center h-1/2 w-full gap-4">
        <form className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-bg p-2 rounded-lg border border-fieldgray focus:outline-none text-fieldgray focus:text-offwhite focus:border-emphasizedtext caret-fieldgray transition-all duration-500"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="w-full h-fit relative flex flex-row">
            <input
              type={btnStatus ? "text" : "password"}
              placeholder="Password"
              className="bg-bg w-full p-2 rounded-lg border border-fieldgray focus:outline-none text-fieldgray focus:text-offwhite focus:border-emphasizedtext caret-fieldgray transition-all duration-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={btnHovered || btnStatus ? unlocked : locked}
              alt={btnStatus ? "unlocked" : "locked"}
              className="absolute w-[1.5rem] right-2 top-1/5 cursor-pointer"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              onClick={() => setBtnStatus(!btnStatus)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end hover:outline hover:outline-emphasizedtext hover:outline-offset-1 rounded-lg cursor-pointer"
            onClick={handleSubmit}
          >
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
          <div className="w-full flex justify-center items-center">
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
