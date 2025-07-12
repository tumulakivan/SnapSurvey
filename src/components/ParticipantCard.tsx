import type { ParticipantCardTypes } from "../types/CardTypes";

const ParticipantCard: React.FC<ParticipantCardTypes> = ({
  participant,
  surveys,
  actions,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-brcorner rounded-lg h-auto w-full p-4 gap-2">
      <h1 className="text-black text-2xl font-bold">{participant.name}</h1>
      <p className="text-black">{participant.email}</p>
      <p className="text-black">
        Surveys Taken:{" "}
        {participant.surveys
          .map((surveyId) => {
            const survey = surveys.find((s) => s.id === surveyId);
            return survey?.name || `Unknown Survey (${surveyId})`;
          })
          .join(", ")}
      </p>
      <div className="flex flex-col">
        <p className="text-black">
          Joined:{" "}
          {new Date(participant.dateSubmitted).toISOString().slice(0, 10)}
        </p>
        <p className="text-black">
          Last Updated:{" "}
          {new Date(participant.dateUpdated).toISOString().slice(0, 10)}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="px-4 py-2 rounded-sm  bg-gradient-to-br from-mentisbg1 via-mentisbg2 to-mentisbg3 border border-mentisbg1 text-black w-[50%]"
          onClick={() => actions.handleEditButton(participant)}
        >
          Update
        </button>
        <button
          className="px-4 py-2 rounded-sm bg-gradient-to-br from-mentisred to-mentisdarkred border border-mentisdarkred text-black w-[50%]"
          onClick={() => actions.handleDeleteButton(participant)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ParticipantCard;
