import type { Survey } from "../hooks/useMockSurveys";

export type DeleteOverlayTypes = {
  actions: {
    resetFields: () => void;
    handleDeleteButton: (s: Survey) => void;
    handleDeleteConfirmation: () => void;
  };
};
