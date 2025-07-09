import type { Participant } from "../hooks/useMockParticipants";
import type { Survey } from "../hooks/useMockSurveys";

export type CardTypes = {
  survey: Survey;
  actions: {
    handleEditButton: (s: Survey) => void;
    handleSaveButton: () => void;
    resetFields: () => void;
    handleDeleteButton: (s: Survey) => void;
    handleDeleteConfirmation: () => void;
  };
};

export type ParticipantCardTypes = {
  participant: Participant;
  surveys: Survey[];
  actions: {
    handleEditButton: (p: Participant) => void;
    handleSaveButton: () => void;
    resetFields: () => void;
    handleDeleteButton: (p: Participant) => void;
    handleDeleteConfirmation: () => void;
  };
};
