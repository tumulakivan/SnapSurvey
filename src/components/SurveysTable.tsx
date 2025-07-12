import { useState } from "react";
import { useMockSurveys, type Survey } from "../hooks/useMockSurveys";
import pencil from "../assets/icons/pencil96.png";
import trash from "../assets/icons/trash96.png";
import search from "../assets/icons/searchbar96.png";

const SurveysTable: React.FC = () => {
  const { surveys, updateSurvey, deleteSurvey } = useMockSurveys();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredSurveys = surveys.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const surveysPerPage = 10;
  const lastSurveyIndex = currentPage * surveysPerPage;
  const firstSurveyIndex = lastSurveyIndex - surveysPerPage;
  const currentSurveys = filteredSurveys.slice(
    firstSurveyIndex,
    lastSurveyIndex
  );
  const totalPages = Math.ceil(filteredSurveys.length / surveysPerPage);
  const [editSurvey, setEditSurvey] = useState<Survey>();
  const [editName, setEditName] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");

  const handleEditButton = (s: Survey) => {
    setEditModalStatus(true);
    setEditSurvey(s);
    setEditName(s.name);
    setEditDescription(s.description);
  };

  const handleSaveButton = () => {
    if (!editSurvey) return;

    const updatedSurvey: Survey = {
      ...editSurvey,
      name: editName,
      description: editDescription,
      dateUpdated: new Date().toISOString(),
    };

    updateSurvey(updatedSurvey);
    setEditName("");
    setEditDescription("");
    setEditModalStatus(false);
  };

  const handleCancelButton = () => {
    setEditName("");
    setEditDescription("");
    setEditModalStatus(false);
    setDeleteStatus(false);
  };

  const handleDeleteButton = (s: Survey) => {
    setDeleteStatus(true);
    setEditSurvey(s);
  };

  const handleDeleteConfirmation = () => {
    if (editSurvey) {
      deleteSurvey(editSurvey.id);
      setEditName("");
      setEditDescription("");
      setDeleteStatus(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-fit gap-2 relative flex flex-row items-center">
        <h2>Filter Surveys: </h2>
        <input
          type="text"
          placeholder="Title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-bg p-2 h-8 rounded-lg border border-fieldgray focus:outline-none text-fieldgray focus:text-black focus:border-mentisblue caret-fieldgray transition-all duration-500"
        />
        <img
          src={search}
          alt="search bar"
          className="absolute w-[1.5rem] left-67.5 top-1"
        />
      </div>
      <div className="w-full h-full lg:overflow-auto">
        <table className="hidden lg:table table-separate text-left table-auto w-full h-auto">
          <thead>
            <tr className="bg-mentisblue text-white p-2">
              <th className="p-2 w-[17.5%] rounded-tl-sm">Name</th>
              <th className="p-2 w-[30%]">Description</th>
              <th className="text-center p-2">No. of Participants</th>
              <th className="text-center p-2">Date Created</th>
              <th className="text-center p-2">Date Updated</th>
              <th className="text-center p-2 rounded-tr-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentSurveys.map((survey, index) => (
              <tr
                key={index}
                className={`${index % 2 !== 0 ? "bg-gray-300" : ""}`}
              >
                <td className="p-1.5 text-offwhite">{survey.name}</td>
                <td className="p-1.5 text-offwhite">{survey.description}</td>
                <td className="p-1.5 text-offwhite text-center">
                  {survey.participants}
                </td>
                <td className="p-1.5 text-offwhite text-center">
                  {new Date(survey.dateCreated).toISOString().slice(0, 10)}
                </td>
                <td className="p-1.5 text-offwhite text-center">
                  {new Date(survey.dateUpdated).toISOString().slice(0, 10)}
                </td>
                <td className="flex gap-2 justify-center items-center p-1.5 text-offwhite text-center">
                  <button
                    className="group p-4 rounded-sm bg-mentiscyan cursor-pointer hover:bg-gradient-to-tr hover:from-mentisbg1 hover:via-mentisbg2 hover:to-mentisbg3"
                    onClick={() => handleEditButton(survey)}
                  >
                    <img
                      src={pencil}
                      alt="update/edit"
                      className="transition-all duration-100 w-[18px] group-hover:hidden"
                    />
                    <img
                      src={pencil}
                      alt="update/edit hover"
                      className="transition-all duration-100 w-[18px] hidden group-hover:block"
                    />
                  </button>
                  <button
                    className="group p-4 rounded-sm bg-mentisred cursor-pointer hover:bg-gradient-to-tr hover:from-mentisbg1 hover:via-mentisbg2 hover:to-mentisbg3"
                    onClick={() => handleDeleteButton(survey)}
                  >
                    <img
                      src={trash}
                      alt="delete"
                      className="transition-all duration-100 w-[18px] group-hover:hidden"
                    />
                    <img
                      src={trash}
                      alt="delete hover"
                      className="transition-all duration-100 w-[18px] hidden group-hover:block"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-center items-center w-full h-auto gap-2">
        <button
          className="px-4 py-2 bg-mentisblue hover:bg-gradient-to-tl hover:from-mentisbg1 hover:via-mentisbg2 hover:to-mentisbg3 text-white cursor-pointer rounded-sm"
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
            className={`px-4 py-2 cursor-pointer rounded-sm hover:bg-gradient-to-tl hover:from-mentisbg1 hover:via-mentisbg2 hover:to-mentisbg3 ${
              currentPage === index + 1
                ? "bg-mentisblue text-white outline-2 outline-mentisblue outline-offset-2"
                : "bg-bg text-offwhite border-2 border-mentisblue"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-mentisblue hover:bg-gradient-to-tl hover:from-mentisbg1 hover:via-mentisbg2 hover:to-mentisbg3 text-white cursor-pointer rounded-sm"
          onClick={() => {
            if (currentPage + 1 <= totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          {"Next >"}
        </button>
      </div>
      {editModalStatus && (
        <div className="absolute inset-0 w-full h-full bg-transparentoverlay">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-auto flex flex-col gap-2 overflow-hidden bg-gradient-to-tl from-bg via-cardstop to-cardend shadow-login rounded-lg">
            <div className="flex flex-row w-full h-auto p-4 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black justify-between">
              <h1 className="font-bold text-2xl">Edit Survey Details</h1>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <p className="text-sm text-btn-stop">Survey Name</p>
              <input
                type="text"
                value={editName}
                className="bg-bg w-full p-2 rounded-lg border border-fieldgray focus:outline-none text-fieldgray focus:text-offwhite focus:border-emphasizedtext caret-fieldgray transition-all duration-500"
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <p className="text-sm text-btn-stop">Survey Description</p>
              <input
                type="text"
                value={editDescription}
                className="bg-bg w-full p-2 rounded-lg border border-fieldgray focus:outline-none text-fieldgray focus:text-offwhite focus:border-emphasizedtext caret-fieldgray transition-all duration-500"
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-2 p-4 mb-2">
              <button
                className="w-[50%] px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end hover:outline hover:outline-emphasizedtext hover:outline-offset-1 rounded-lg cursor-pointer"
                onClick={() => {
                  if (editSurvey) handleSaveButton();
                }}
              >
                Save Changes
              </button>
              <button
                className="w-[50%] px-4 py-2 bg-bg border border-btn-stop text-emphasizedtext hover:text-bg hover:bg-gradient-to-tr hover:from-btn-start hover:via-btn-stop hover:to-btn-end hover:outline hover:outline-emphasizedtext hover:outline-offset-1 rounded-lg cursor-pointer"
                onClick={() => handleCancelButton()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {deleteStatus && (
        <div className="absolute inset-0 w-full h-full bg-transparentoverlay">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-auto flex flex-col gap-2 overflow-hidden bg-gradient-to-tl from-bg via-cardstop to-cardend shadow-login rounded-lg">
            <div className="flex flex-row w-full h-auto p-4 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black justify-between">
              <h1 className="font-bold text-2xl">Confirm Survey Delete</h1>
            </div>
            <div className="flex flex-row gap-2 p-4 mb-2">
              <button
                className="w-[50%] px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end hover:outline hover:outline-emphasizedtext hover:outline-offset-1 rounded-lg cursor-pointer"
                onClick={() => {
                  if (editSurvey) handleDeleteConfirmation();
                }}
              >
                Delete
              </button>
              <button
                className="w-[50%] px-4 py-2 bg-bg border border-btn-stop text-emphasizedtext hover:text-bg hover:bg-gradient-to-tr hover:from-btn-start hover:via-btn-stop hover:to-btn-end hover:outline hover:outline-emphasizedtext hover:outline-offset-1 rounded-lg cursor-pointer"
                onClick={() => handleCancelButton()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveysTable;
