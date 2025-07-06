import { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";

const DashboardLayout: React.FC = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Navbar handleMenu={handleMenu} />
      <div className="flex flex-row w-full h-full overflow-hidden pb-4 pt-4">
        <Menu status={menuStatus} />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
