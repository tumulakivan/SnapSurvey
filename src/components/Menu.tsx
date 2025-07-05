import { useState } from "react";
import type { MenuTypes } from "../types/MenuTypes";

const Menu: React.FC<MenuTypes> = ({ status }) => {
  const [surveysStatus, setSurveysStatus] = useState(false);
  const [participantsStatus, setParticipantsStatus] = useState(false);
  const [resultsStatus, setResultsStatus] = useState(false);

  const onSurveySelect = () => {
    setSurveysStatus(true);
    setParticipantsStatus(false);
    setResultsStatus(false);
  };

  const onParticipantSelect = () => {
    setSurveysStatus(false);
    setParticipantsStatus(true);
    setResultsStatus(false);
  };

  const onResultsSelect = () => {
    setSurveysStatus(false);
    setParticipantsStatus(false);
    setResultsStatus(true);
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
          surveysStatus
            ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black outline-2 outline-btn-stop outline-offset-4"
            : "text-emphasizedtext"
        }`}
        onClick={onSurveySelect}
      >
        Surveys
      </button>
      <button
        className={`text-xl p-2 rounded-lg transition-all duration-200 hover:bg-btn-hovered cursor-pointer ${
          participantsStatus
            ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black outline-2 outline-btn-stop outline-offset-4"
            : "text-emphasizedtext"
        }`}
        onClick={onParticipantSelect}
      >
        Participants
      </button>
      <button
        className={`text-xl p-2 rounded-lg transition-all duration-200 hover:bg-btn-hovered cursor-pointer ${
          resultsStatus
            ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black outline-2 outline-btn-stop outline-offset-4"
            : "text-emphasizedtext"
        }`}
        onClick={onResultsSelect}
      >
        Results
      </button>
    </div>
  );
};

export default Menu;
