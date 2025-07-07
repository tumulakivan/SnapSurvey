import { useState } from "react";
import inactiveBurger from "../assets/icons/inactiveburger.png";
import activeBurger from "../assets/icons/activeburger.png";
import type { DashboardTypes } from "../types/DashboardTypes";
import activeDoor from "../assets/icons/activedoor.png";
import inactiveDoor from "../assets/icons/inactivedoor.png";
import { useAuth } from "../contexts/AuthContext";

const LogoCombo: React.FC<DashboardTypes> = ({ onClick }) => {
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
    <div className="flex flex-row items-center justify-between">
      <img
        src={activeBurger}
        alt="menu burger"
        className="w-[10%] ml-2 lg:w-[1.5%] lg:-ml-[10px] lg:cursor-pointer block md:hidden"
        onClick={handleBurger}
      />
      <img
        src={burgerStatus || burgerHovered ? activeBurger : inactiveBurger}
        alt="menu burger"
        className="w-[10%] ml-2 lg:w-[2.5%] lg:-ml-[10px] lg:cursor-pointer hidden lg:block"
        onClick={handleBurger}
        onMouseEnter={() => setBurgerHovered(true)}
        onMouseLeave={() => setBurgerHovered(false)}
      />
      <img
        src="./snaplogo.png"
        alt="SnapSurvey"
        className="w-[20%] lg:w-[4%] lg:-ml-[20px] select-none"
      />
      <img
        src={doorStatus || doorHovered ? activeDoor : inactiveDoor}
        alt="exit"
        className={`w-[10%] mr-2 lg:w-[2.5%] lg:-mr-[7px] rounded-lg lg:cursor-pointer ${
          doorStatus || doorHovered
            ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end"
            : ""
        }`}
        onClick={handleExit}
        onMouseEnter={() => setDoorHovered(true)}
        onMouseLeave={() => setDoorHovered(false)}
      />
    </div>
  );
};

export default LogoCombo;
