import type { CardTypes } from "../types/CardTypes";

const Card: React.FC<CardTypes> = ({ survey, actions }) => {
  return (
    <div className="flex flex-col bg-gradient-to-tl from-bg via-cardstop to-cardend rounded-lg h-auto w-full p-4 shadow-login gap-2">
      <h1 className="text-white text-2xl font-bold">{survey.name}</h1>
      <p className="text-white">{survey.description}</p>
      <p className="text-white">Participants: {survey.participants}</p>
      <div className="flex flex-col">
        <p className="text-white">
          Created: {new Date(survey.dateCreated).toISOString().slice(0, 10)}
        </p>
        <p className="text-white">
          Last Updated:{" "}
          {new Date(survey.dateUpdated).toISOString().slice(0, 10)}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="px-4 py-2 rounded-sm  bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end text-black w-[50%]"
          onClick={() => actions.handleEditButton(survey)}
        >
          Update
        </button>
        <button
          className="px-4 py-2 border-2 border-btn-stop rounded-sm  bg-black text-white w-[50%]"
          onClick={() => actions.handleDeleteButton(survey)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
