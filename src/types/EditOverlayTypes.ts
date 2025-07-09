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
