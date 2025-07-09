import type { ParticipantEditOverlayTypes } from "../types/EditOverlayTypes";

const EditOverlay: React.FC<ParticipantEditOverlayTypes> = ({
  actions,
  states,
}) => {
  return (
    <div className="fixed flex justify-center items-center inset-0 w-screen h-screen bg-transparentoverlay">
      <div className="flex flex-col p-4 gap-4 bg-gradient-to-tl from-bg via-cardstop to-cardend shadow-login rounded-lg w-[80%] h-auto">
        <h1 className="font-bold text-2xl text-offwhite">
          Edit Survey Details
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-emphasizedtext">Survey Name</p>
          <input
            type="text"
            value={states.editName}
            className="bg-bg w-full p-2 rounded-lg border border-emphasizedtext caret-fieldgray text-offwhite"
            onChange={(e) => states.setEditName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-emphasizedtext">Description</p>
          <textarea
            value={states.editEmail}
            className="bg-bg p-2 rounded-lg border border-emphasizedtext caret-fieldgray text-offwhite"
            onChange={(e) => states.setEditEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-2">
          <button
            className="w-[50%] px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end rounded-lg text-bg"
            onClick={() => actions.handleSaveButton()}
          >
            Save
          </button>
          <button
            className="w-[50%] px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end rounded-lg text-bg"
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
