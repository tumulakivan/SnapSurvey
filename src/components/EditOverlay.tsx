import type { EditOverlayTypes } from "../types/EditOverlayTypes";

const EditOverlay: React.FC<EditOverlayTypes> = ({ actions, states }) => {
  return (
    <div className="fixed flex justify-center items-center inset-0 w-screen h-screen bg-transparentoverlay">
      <div className="flex flex-col bg-white shadow-login rounded-lg w-[80%] h-auto">
        <h1 className="font-bold text-2xl rounded-tl-lg rounded-tr-lg bg-gradient-to-tr from-mentisbg1 via-mentisbg2 to-mentisbg3 text-white p-4">
          Edit Survey Details
        </h1>
        <div className="flex flex-col p-4">
          <p className="text-sm translate-x-2">Survey Name</p>
          <input
            type="text"
            value={states.editName}
            className="bg-bg w-full p-2 rounded-lg border border-mentisblue caret-fieldgray text-offwhite"
            onChange={(e) => states.setEditName(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-4">
          <p className="text-sm translate-x-2">Description</p>
          <textarea
            value={states.editDescription}
            className="bg-bg p-2 rounded-lg border border-mentisblue caret-fieldgray text-offwhite"
            onChange={(e) => states.setEditDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-2 p-4">
          <button
            className="w-[50%] px-4 py-2 rounded-lg bg-gradient-to-br from-mentisbg1 via-mentisbg2 to-mentisbg3 border border-mentisbg1 text-black"
            onClick={() => actions.handleSaveButton()}
          >
            Save
          </button>
          <button
            className="w-[50%] px-4 py-2 rounded-lg bg-gradient-to-br from-mentisbg1 via-mentisbg2 to-mentisbg3 border border-mentisbg1 text-black"
            onClick={() => actions.resetFields()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOverlay;
