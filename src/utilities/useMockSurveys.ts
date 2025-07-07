import { useState, useEffect } from "react";
import { mockSurveys } from "../data/MockData";

export type Survey = {
  id: number;
  name: string;
  description: string;
  participants: number;
  dateCreated: string;
  dateUpdated: string;
};

const STORAGE_KEY = "surveys";

export function useMockSurveys() {
  console.log(mockSurveys);
  const [surveys, setSurveys] = useState<Survey[]>([]);

  // load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : null;

    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
      setSurveys(parsed);
    } else {
      setSurveys(mockSurveys);
    }
  }, []);

  // saves to localStorage whenever a change occurs in the survey list; updated/deleted a survey
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(surveys));
  }, [surveys]);

  // s == placeholder for selected survey
  const updateSurvey = (updatedSurvey: Survey) => {
    setSurveys((prev) =>
      prev.map((s) => (s.id === updatedSurvey.id ? updatedSurvey : s))
    );
  };

  const deleteSurvey = (id: number) => {
    setSurveys((prev) => prev.filter((s) => s.id !== id));
  };

  return {
    surveys,
    setSurveys,
    updateSurvey,
    deleteSurvey,
  };
}
