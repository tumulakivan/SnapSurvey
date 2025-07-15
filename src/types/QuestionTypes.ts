import type React from "react";

export type QuestionTypes = {
  states?: {
    node?: number | null;
    text?: string;
  };

  actions: {
    setNode?: React.Dispatch<React.SetStateAction<number | null>>;
    setText?: React.Dispatch<React.SetStateAction<string>>;
  };
};
