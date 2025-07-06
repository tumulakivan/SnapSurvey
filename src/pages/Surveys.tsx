import { useState } from "react";
import { mockSurveys } from "../data/MockData";

const Surveys: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const surveysPerPage = 10;
  const lastSurveyIndex = currentPage * surveysPerPage;
  const firstSurveyIndex = lastSurveyIndex - surveysPerPage;
  const currentSurveys = mockSurveys.slice(firstSurveyIndex, lastSurveyIndex);
  const totalPages = Math.ceil(mockSurveys.length / surveysPerPage);

  return (
    <div className="flex flex-col w-full h-full p-4 bg-bg rounded-xl gap-4">
      <div className="w-full h-full rounded-sm overflow-auto">
        <table className="table-separate text-left table-auto w-full h-auto">
          <thead>
            <tr className="bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black p-2">
              <th className="p-2">Name</th>
              <th className="p-2">Description</th>
              <th className="p-2">No. of Participants</th>
              <th className="p-2">Date Created</th>
              <th className="p-2">Date Updated</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentSurveys.map((survey, index) => (
              <tr key={index} className="border-b border-btn-stop">
                <td className="pl-2 pr-2 pt-5 p-5 text-offwhite">
                  {survey.name}
                </td>
                <td className="pl-2 pr-2 pt-5 p-5 text-offwhite">
                  {survey.description}
                </td>
                <td className="pl-2 pr-2 pt-5 p-5 text-offwhite">
                  {survey.participants}
                </td>
                <td className="pl-2 pr-2 pt-5 p-5 text-offwhite">
                  {survey.dateCreated}
                </td>
                <td className="pl-2 pr-2 pt-5 p-5 text-offwhite">
                  {survey.dateUpdated}
                </td>
                <td className="pl-2 pr-2 pt-5 p-5 text-offwhite">
                  Action 1 | Action 2
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-center items-center w-full h-auto gap-2">
        <button
          className="px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black cursor-pointer rounded-sm"
          onClick={() => {
            if (currentPage - 1 > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          {"< Prev"}
        </button>
        {Array.from({ length: totalPages }, (__, index) => (
          <button
            key={index}
            className={`px-4 py-2 cursor-pointer rounded-sm transition-all duration-100 ${
              currentPage === index + 1
                ? "bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black outline-2 outline-btn-stop outline-offset-2"
                : "bg-bg text-offwhite border-2 border-btn-stop"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black cursor-pointer rounded-sm"
          onClick={() => {
            if (currentPage + 1 <= totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
};

export default Surveys;
