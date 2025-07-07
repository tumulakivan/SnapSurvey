import LogoCombo from "./LogoCombo";
import type { NavbarTypes } from "../types/NavbarTypes";

const Navbar: React.FC<NavbarTypes> = ({ handleMenu }) => {
  return (
    <div className="flex justify-between items-center lg:p-4 lg:mt-4 lg:ml-4 lg:mr-4 lg:rounded-xl h-[7%] shadow-login bg-black border-b lg:border border-btn-stop">
      <LogoCombo onClick={handleMenu} />
    </div>
  );
};

export default Navbar;
