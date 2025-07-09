import type { ParticipantDeleteOverlayTypes } from "../types/DeleteOverlayTypes";

const DeleteOverlay: React.FC<ParticipantDeleteOverlayTypes> = ({
  actions,
}) => {
  return (
    <div className="fixed flex justify-center items-center inset-0 w-screen h-screen bg-transparentoverlay">
      <div className="flex flex-col p-4 gap-4 bg-gradient-to-tl from-bg via-cardstop to-cardend shadow-login rounded-lg w-[80%] h-auto">
        <h1 className="font-bold text-2xl text-offwhite">
          Confirm Participant Delete
        </h1>
        <div className="flex flex-row gap-2">
          <button
            className="w-[50%] px-4 py-2 bg-gradient-to-tr from-btn-start via-btn-stop to-btn-end rounded-lg text-bg"
            onClick={() => actions.handleDeleteConfirmation()}
          >
            Delete
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

export default DeleteOverlay;
