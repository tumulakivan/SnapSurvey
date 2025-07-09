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
