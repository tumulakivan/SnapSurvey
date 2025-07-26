import { useState, useEffect } from "react";
// import { mockParticipants } from "../data/MockParticipants";

export type Participant = {
  id: number;
  name: string;
  email: string;
  dateSubmitted: string;
  dateUpdated: string;
  surveys: number[];
};

// const STORAGE_KEY = "participants";

export function useMockParticipants() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = "http://localhost:3000";

  useEffect(() => {
    // const stored = localStorage.getItem(STORAGE_KEY);
    // const parsed = stored ? JSON.parse(stored) : null;

    // if (parsed && Array.isArray(parsed) && parsed.length > 0) {
    //   setParticipants(parsed);
    // } else {
    //   localStorage.setItem(STORAGE_KEY, JSON.stringify(mockParticipants));
    //   setParticipants(mockParticipants);

    //   setTimeout(() => {
    //     localStorage.setItem(STORAGE_KEY, JSON.stringify(mockParticipants));
    //   }, 0);
    // }

    const fetchParticipants = async () => {
      try {
        const response = await fetch(`${BASE_URL}/participants`);

        if (!response.ok) throw new Error("Failed to fetch participants.");

        const data = await response.json();
        setParticipants(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error has occurred :(");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  // useEffect(() => {
  //   if (participants.length > 0) {
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
  //   }
  // }, [participants]);

  const updateParticipant = async (updatedParticipant: Participant) => {
    try {
      const response = await fetch(
        `${BASE_URL}/participants/${updatedParticipant.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedParticipant),
        }
      );

      if (!response.ok)
        throw new Error(
          `Failed to update participant with ID ${updatedParticipant.id}`
        );

      setParticipants((prev) =>
        prev.map((p) =>
          p.id === updatedParticipant.id ? updatedParticipant : p
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
      else console.log("Unknown error occurred.");
    }
  };

  const deleteParticipant = async (id: number) => {
    try {
      const response = await fetch(`${BASE_URL}/participants/${id}`, {
        method: "DELETE",
      });

      if (!response.ok)
        throw new Error(
          `No participant with ID ${id} exists. Delete unsuccessful.`
        );

      setParticipants((prev) => prev.filter((p) => p.id != id));
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
      else console.log("Unknown error occurred.");
    }
  };

  return {
    participants,
    updateParticipant,
    deleteParticipant,
  };
}
