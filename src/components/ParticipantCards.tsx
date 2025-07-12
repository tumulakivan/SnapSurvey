import { useState } from "react";
import { useMockSurveys } from "../hooks/useMockSurveys";
import {
  useMockParticipants,
  type Participant,
} from "../hooks/useMockParticipants";
import ParticipantCard from "./ParticipantCard";
import ParticipantEditOverlay from "./ParticipantEditOverlay";
import ParticipantDeleteOverlay from "./ParticipantDeleteOverlay";
import search from "../assets/icons/search96.png";
import ParticipantSearch from "./ParticipantSearch";

const ParticipantCards: React.FC = () => {
  const { participants, updateParticipant, deleteParticipant } =
    useMockParticipants();
  const { surveys } = useMockSurveys();
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [searchModalStatus, setSearchModalStatus] = useState(false);
  const [editParticipant, setEditParticipant] = useState<Participant>();
  const [editName, setEditName] = useState<string>("");
  const [editEmail, setEditEmail] = useState<string>("");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredParticipants = participants.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleSearchButton = () => {
    setSearchModalStatus((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 pb-20">
      {filteredParticipants.map((participant) => (
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
      {searchModalStatus && (
        <ParticipantSearch
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

export default ParticipantCards;
