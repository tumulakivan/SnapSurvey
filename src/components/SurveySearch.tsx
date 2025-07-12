import type React from "react";

type SurveySearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SurveySearch: React.FC<SurveySearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="fixed flex justify-center items-center inset-0 w-screen h-screen bg-transparentoverlay">
      <div className="flex flex-col bg-white shadow-login rounded-lg w-[80%] h-auto">
        <h1 className="font-bold text-2xl rounded-tl-lg rounded-tr-lg bg-gradient-to-tr from-mentisbg1 via-mentisbg2 to-mentisbg3 text-white p-4">
          Filter Surveys
        </h1>
        <div className="flex flex-col p-4">
          <p className="text-sm translate-x-2">Survey Title</p>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-bg w-full p-2 rounded-lg border border-mentisblue caret-fieldgray"
          />
        </div>
      </div>
    </div>
  );
};

export default SurveySearch;
