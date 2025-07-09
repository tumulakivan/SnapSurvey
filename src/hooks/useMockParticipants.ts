import { useState, useEffect } from "react";
import { mockParticipants } from "../data/MockParticipants";

export type Participant = {
  id: number;
  name: string;
  email: string;
  dateSubmitted: string;
  dateUpdated: string;
  surveys: number[];
};

const STORAGE_KEY = "participants";

export function useMockParticipants() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : null;

    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
      setParticipants(parsed);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockParticipants));
      setParticipants(mockParticipants);

      setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mockParticipants));
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (participants.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
    }
  }, [participants]);

  const updateParticipant = (updatedParticipant: Participant) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === updatedParticipant.id ? updatedParticipant : p))
    );
  };

  const deleteParticipant = (id: number) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    participants,
    updateParticipant,
    deleteParticipant,
  };
}
