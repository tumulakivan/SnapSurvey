import { useState } from "react";
import { useMockSurveys } from "../hooks/useMockSurveys";
import {
  useMockParticipants,
  type Participant,
} from "../hooks/useMockParticipants";
import ParticipantCard from "./ParticipantCard";
import ParticipantEditOverlay from "./ParticipantEditOverlay";
import ParticipantDeleteOverlay from "./ParticipantDeleteOverlay";

const ParticipantCards: React.FC = () => {
  const { participants, updateParticipant, deleteParticipant } =
    useMockParticipants();
  const { surveys } = useMockSurveys();
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [editParticipant, setEditParticipant] = useState<Participant>();
  const [editName, setEditName] = useState<string>("");
  const [editEmail, setEditEmail] = useState<string>("");

  const resetFields = () => {
    setEditName("");
    setEditEmail("");
    setEditModalStatus(false);
    setDeleteModalStatus(false);
  };

  const handleEditButton = (p: Participant) => {
    setEditModalStatus(true);
    setEditParticipant(p);
    setEditName(p.name);
    setEditEmail(p.email);
  };

  const handleSaveButton = () => {
    if (!editParticipant) return;

    const updatedParticipant: Participant = {
      ...editParticipant,
      name: editName,
      email: editEmail,
      dateUpdated: new Date().toISOString(),
    };

    updateParticipant(updatedParticipant);
    resetFields();
  };

  const handleDeleteButton = (p: Participant) => {
    setDeleteModalStatus(true);
    setEditParticipant(p);
  };

  const handleDeleteConfirmation = () => {
    if (editParticipant) {
      deleteParticipant(editParticipant.id);
      resetFields();
    }
  };

  return (
    <>
      {participants.map((participant) => (
        <ParticipantCard
          key={participant.id}
          participant={participant}
          surveys={surveys}
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
        <ParticipantEditOverlay
          actions={{
            resetFields,
            handleEditButton,
            handleSaveButton,
          }}
          states={{
            editName,
            setEditName,
            editEmail,
            setEditEmail,
          }}
        />
      )}
      {deleteModalStatus && (
        <ParticipantDeleteOverlay
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

export default ParticipantCards;
