import type { ParticipantCardTypes } from "../types/CardTypes";

const ParticipantCard: React.FC<ParticipantCardTypes> = ({
  participant,
  surveys,
  actions,
}) => {
  return (
    <div className="flex flex-col bg-gradient-to-tl from-bg via-cardstop to-cardend rounded-lg h-auto w-full p-4 shadow-login gap-2">
      <h1 className="text-white text-2xl font-bold">{participant.name}</h1>
      <p className="text-white">{participant.email}</p>
      <p className="text-white">
        Surveys Taken:{" "}
        {participant.surveys
          .map((surveyId) => {
            const survey = surveys.find((s) => s.id === surveyId);
            return survey?.name || `Unknown Survey (${surveyId})`;
          })
          .join(", ")}
      </p>
      <div className="flex flex-col">
        <p className="text-white">
          Joined:{" "}
          {new Date(participant.dateSubmitted).toISOString().slice(0, 10)}
        </p>
        <p className="text-white">
          Last Updated:{" "}
          {new Date(participant.dateUpdated).toISOString().slice(0, 10)}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="px-4 py-2 rounded-sm  bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black w-[50%]"
          onClick={() => actions.handleEditButton(participant)}
        >
          Update
        </button>
        <button
          className="px-4 py-2 border-2 border-btn-stop rounded-sm  bg-black text-white w-[50%]"
          onClick={() => actions.handleDeleteButton(participant)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ParticipantCard;
