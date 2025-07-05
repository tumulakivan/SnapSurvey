import LogoCombo from "./LogoCombo";
import activeDoor from "../assets/icons/activedoor.png";
import inactiveDoor from "../assets/icons/inactivedoor.png";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import type { NavbarTypes } from "../types/NavbarTypes";

const Navbar: React.FC<NavbarTypes> = ({ handleMenu }) => {
  const [doorStatus, setDoorStatus] = useState(false);
  const [doorHovered, setDoorHovered] = useState(false);

  const { logout } = useAuth();

  const handleExit = () => {
    setDoorStatus(!doorStatus);
    logout();
  };

  return (
    <div className="flex justify-between items-center p-4 mt-4 ml-4 mr-4 rounded-xl h-[7%] shadow-login bg-black border border-btn-stop">
      <LogoCombo onClick={handleMenu} />
      <img
        src={doorStatus || doorHovered ? activeDoor : inactiveDoor}
        alt="exit"
        className={`w-[2.5%] -mr-[7px] rounded-lg p-2 cursor-pointer ${
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

export default Navbar;
