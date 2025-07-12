import { useState } from "react";
import { useMockSurveys, type Survey } from "../hooks/useMockSurveys";
import Card from "./SurveyCard";
import EditOverlay from "./EditOverlay";
import DeleteOverlay from "./DeleteOverlay";
import search from "../assets/icons/search96.png";
import SurveySearch from "./SurveySearch";

const SurveyCards: React.FC = () => {
  const { surveys, updateSurvey, deleteSurvey } = useMockSurveys();
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [searchModalStatus, setSearchModalStatus] = useState(false);
  const [editSurvey, setEditSurvey] = useState<Survey>();
  const [editName, setEditName] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredSurveys = surveys.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetFields = () => {
    setEditName("");
    setEditDescription("");
    setEditModalStatus(false);
    setDeleteModalStatus(false);
  };

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
    resetFields();
  };

  const handleDeleteButton = (s: Survey) => {
    setDeleteModalStatus(true);
    setEditSurvey(s);
  };

  const handleDeleteConfirmation = () => {
    if (editSurvey) {
      deleteSurvey(editSurvey.id);
      resetFields();
    }
  };

  const handleSearchButton = () => {
    setSearchModalStatus((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 pb-20 relative">
      {filteredSurveys.map((survey) => (
        <Card
          key={survey.id}
          survey={survey}
          actions={{
            handleEditButton,
            handleSaveButton,
            resetFields,
            handleDeleteButton,
            handleDeleteConfirmation,
          }}
        />
      ))}
      {editModalStatus && (
        <EditOverlay
          actions={{
            resetFields,
            handleEditButton,
            handleSaveButton,
          }}
          states={{
            editName,
            setEditName,
            editDescription,
            setEditDescription,
          }}
        />
      )}
      {deleteModalStatus && (
        <DeleteOverlay
          actions={{
            resetFields,
            handleDeleteButton,
            handleDeleteConfirmation,
          }}
        />
      )}
      {searchModalStatus && (
        <SurveySearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}
      <img
        src={search}
        alt="search list"
        className="fixed p-4 h-16 w-16 bg-gradient-to-tr from-mentisbg1 via-mentisbg2 to-mentisbg3 border border-mentisblue m-4 bottom-0 right-0 rounded-full"
        onClick={() => handleSearchButton()}
      ></img>
    </div>
  );
};

export default SurveyCards;
