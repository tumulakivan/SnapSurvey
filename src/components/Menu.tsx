import { useState } from "react";
import type { MenuTypes } from "../types/MenuTypes";
import { useNavigate } from "react-router-dom";

const Menu: React.FC<MenuTypes> = ({ status }) => {
  const [selectedPage, setSelectedPage] = useState<
    "surveys" | "participants" | "results"
  >("surveys");
  const navigate = useNavigate();

  const handleChangePage = (page: "surveys" | "participants" | "results") => {
    setSelectedPage(page);
    navigate(`/${page}`);
  };

  return (
    <div
      className={`flex flex-col gap-4 h-full absolute lg:relative shadow-login bg-white lg:rounded-xl transition-all duration-500 ${
        status
          ? "opacity-100 scale-100 w-screen z-9999 lg:max-w-[640px] lg:min-w-[200px] lg:w-[320px] lg:ml-4 p-4"
          : "opacity-0 scale-0 w-0 ml-0 p-0"
      }`}
    >
      <button
        className={`text-xl p-2 rounded-sm transition-all duration-200  cursor-pointer ${
          selectedPage === "surveys"
            ? "bg-mentisblue text-white outline-2 outline-mentisblue outline-offset-4"
            : "text-black hover:bg-btn-hovered"
        }`}
        onClick={() => handleChangePage("surveys")}
      >
        Surveys
      </button>
      <button
        className={`text-xl p-2 rounded-sm transition-all duration-200  cursor-pointer ${
          selectedPage === "participants"
            ? "bg-mentisblue text-white outline-2 outline-mentisblue outline-offset-4"
            : "text-black hover:bg-btn-hovered"
        }`}
        onClick={() => handleChangePage("participants")}
      >
        Participants
      </button>
      <button
        className={`text-xl p-2 rounded-sm transition-all duration-200 hover:bg-btn-hovered cursor-pointer ${
          selectedPage === "results"
            ? "bg-mentisblue text-white outline-2 outline-mentisblue outline-offset-4"
            : "text-black hover:bg-btn-hovered"
        }`}
        onClick={() => handleChangePage("results")}
      >
        Results
      </button>
    </div>
  );
};

export default Menu;
