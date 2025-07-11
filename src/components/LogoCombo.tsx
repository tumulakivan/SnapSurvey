import { useState } from "react";
import burger from "../assets/icons/menu96.png";
import type { DashboardTypes } from "../types/DashboardTypes";
import door from "../assets/icons/door96.png";
import { useAuth } from "../contexts/AuthContext";
import { useMediaQuery } from "../hooks/useMediaQuery";

const LogoCombo: React.FC<DashboardTypes> = ({ onClick }) => {
  const isLarge = useMediaQuery();
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [burgerHovered, setBurgerHovered] = useState(false);
  const [doorStatus, setDoorStatus] = useState(false);
  const [doorHovered, setDoorHovered] = useState(false);

  const { logout } = useAuth();

  const handleBurger = () => {
    setBurgerStatus(!burgerStatus);
    onClick();
  };

  const handleExit = () => {
    setDoorStatus(!doorStatus);
    logout();
  };

  return (
    <div className="flex flex-row items-center justify-between w-full">
      <img
        src={burger}
        alt="menu burger"
        className={`scale-[50%] cursor-pointer rounded-lg transition-all duration-500 ${
          isLarge
            ? burgerStatus || burgerHovered
              ? "shadow-floatleft"
              : ""
            : ""
        }`}
        onClick={handleBurger}
        onMouseEnter={() => setBurgerHovered(true)}
        onMouseLeave={() => setBurgerHovered(false)}
      />
      <h1 className="text-7xl lg:text-5xl font-company">
        <span className="bg-gradient-to-tl from-mentisbg1 via-mentisbg2 to-mentisbg3 bg-clip-text text-transparent">
          S
        </span>
        {isLarge ? "NAPSURVEY" : ""}
      </h1>
      <img
        src={door}
        alt="exit"
        className={`scale-[50%] cursor-pointer rounded-lg transition-all duration-500 ${
          doorHovered ? "shadow-floatright" : ""
        }`}
        onClick={handleExit}
        onMouseEnter={() => setDoorHovered(true)}
        onMouseLeave={() => setDoorHovered(false)}
      />
    </div>
  );
};

export default LogoCombo;
