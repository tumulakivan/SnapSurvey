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
      className={`flex flex-col gap-4 h-full border shadow-login border-btn-stop bg-black rounded-xl transition-all duration-500 ${
        status
          ? "opacity-100 scale-100 max-w-[640px] min-w-[200px] w-[320px] ml-4 p-4"
          : "opacity-0 scale-0 w-0 ml-0 p-0"
      }`}
    >
      <button
        className={`text-xl p-2 rounded-lg transition-all duration-200 hover:bg-btn-hovered cursor-pointer ${
          selectedPage === "surveys"
            ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black outline-2 outline-btn-stop outline-offset-4"
            : "text-emphasizedtext"
        }`}
        onClick={() => handleChangePage("surveys")}
      >
        Surveys
      </button>
      <button
        className={`text-xl p-2 rounded-lg transition-all duration-200 hover:bg-btn-hovered cursor-pointer ${
          selectedPage === "participants"
            ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black outline-2 outline-btn-stop outline-offset-4"
            : "text-emphasizedtext"
        }`}
        onClick={() => handleChangePage("participants")}
      >
        Participants
      </button>
      <button
        className={`text-xl p-2 rounded-lg transition-all duration-200 hover:bg-btn-hovered cursor-pointer ${
          selectedPage === "results"
            ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black outline-2 outline-btn-stop outline-offset-4"
            : "text-emphasizedtext"
        }`}
        onClick={() => handleChangePage("results")}
      >
        Results
      </button>
    </div>
  );
};

export default Menu;
