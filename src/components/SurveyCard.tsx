import type { CardTypes } from "../types/CardTypes";

const Card: React.FC<CardTypes> = ({ survey, actions }) => {
  return (
    <div className="flex flex-col bg-white shadow-brcorner rounded-lg h-auto w-full p-4 gap-2">
      <h1 className="text-black text-2xl font-bold">{survey.name}</h1>
      <p className="text-black">{survey.description}</p>
      <p className="text-black">Participants: {survey.participants}</p>
      <div className="flex flex-col">
        <p className="text-black">
          Created: {new Date(survey.dateCreated).toISOString().slice(0, 10)}
        </p>
        <p className="text-black">
          Last Updated:{" "}
          {new Date(survey.dateUpdated).toISOString().slice(0, 10)}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="px-4 py-2 rounded-sm  bg-gradient-to-br from-mentisbg1 via-mentisbg2 to-mentisbg3 border border-mentisbg1 text-black w-[50%]"
          onClick={() => actions.handleEditButton(survey)}
        >
          Update
        </button>
        <button
          className="px-4 py-2 rounded-sm bg-gradient-to-br from-mentisred to-mentisdarkred border border-mentisdarkred text-black w-[50%]"
          onClick={() => actions.handleDeleteButton(survey)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
