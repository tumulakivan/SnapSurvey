import type { Participant } from "../hooks/useMockParticipants";
import type { Survey } from "../hooks/useMockSurveys";

export type EditOverlayTypes = {
  actions: {
    resetFields: () => void;
    handleEditButton: (s: Survey) => void;
    handleSaveButton: () => void;
  };
  states: {
    editName: string;
    setEditName: React.Dispatch<React.SetStateAction<string>>;
    editDescription: string;
    setEditDescription: React.Dispatch<React.SetStateAction<string>>;
  };
};

export type ParticipantEditOverlayTypes = {
  actions: {
    resetFields: () => void;
    handleEditButton: (p: Participant) => void;
    handleSaveButton: () => void;
  };
  states: {
    editName: string;
    setEditName: React.Dispatch<React.SetStateAction<string>>;
    editEmail: string;
    setEditEmail: React.Dispatch<React.SetStateAction<string>>;
  };
};
