import LogoCombo from "./LogoCombo";
import type { NavbarTypes } from "../types/NavbarTypes";

const Navbar: React.FC<NavbarTypes> = ({ handleMenu }) => {
  return (
    <div className="flex bg-white shadow-mdnavbar lg:shadow-login lg:p-0 lg:mt-4 lg:ml-4 lg:mr-4 lg:rounded-xl h-[7%]">
      <LogoCombo onClick={handleMenu} />
    </div>
  );
};

export default Navbar;
