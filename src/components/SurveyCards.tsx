import { useState } from "react";
import { useMockSurveys, type Survey } from "../hooks/useMockSurveys";
import Card from "./SurveyCard";
import EditOverlay from "./EditOverlay";
import DeleteOverlay from "./DeleteOverlay";

const SurveyCards: React.FC = () => {
  const { surveys, updateSurvey, deleteSurvey } = useMockSurveys();
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [editSurvey, setEditSurvey] = useState<Survey>();
  const [editName, setEditName] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");

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

  return (
    <>
      {surveys.map((survey) => (
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
    </>
  );
};

export default SurveyCards;
