import type { Participant } from "../hooks/useMockParticipants";
import type { Survey } from "../hooks/useMockSurveys";

export type DeleteOverlayTypes = {
  actions: {
    resetFields: () => void;
    handleDeleteButton: (s: Survey) => void;
    handleDeleteConfirmation: () => void;
  };
};

export type ParticipantDeleteOverlayTypes = {
  actions: {
    resetFields: () => void;
    handleDeleteButton: (p: Participant) => void;
    handleDeleteConfirmation: () => void;
  };
};
