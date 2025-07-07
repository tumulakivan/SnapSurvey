import { useState } from "react";
import inactiveBurger from "../assets/icons/inactiveburger.png";
import activeBurger from "../assets/icons/activeburger.png";
import type { DashboardTypes } from "../types/DashboardTypes";

const LogoCombo: React.FC<DashboardTypes> = ({ onClick }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [burgerHovered, setBurgerHovered] = useState(false);

  const handleBurger = () => {
    setBurgerStatus(!burgerStatus);
    onClick();
  };

  return (
    <div className="flex flex-row items-center">
      <img
        src="./snaplogo.png"
        alt="SnapSurvey"
        className="w-[4%] -ml-[20px] select-none"
      />
      <img
        src={burgerStatus || burgerHovered ? activeBurger : inactiveBurger}
        alt="menu burger"
        className="w-[1.5%] -ml-[10px] cursor-pointer"
        onClick={handleBurger}
        onMouseEnter={() => setBurgerHovered(true)}
        onMouseLeave={() => setBurgerHovered(false)}
      />
    </div>
  );
};

export default LogoCombo;
