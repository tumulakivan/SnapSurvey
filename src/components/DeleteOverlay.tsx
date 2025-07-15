import type { DeleteOverlayTypes } from "../types/DeleteOverlayTypes";

const DeleteOverlay: React.FC<DeleteOverlayTypes> = ({ actions }) => {
  return (
    <div className="fixed flex justify-center items-center inset-0 w-screen h-screen bg-transparentoverlay">
      <div className="flex flex-col gap-2 bg-white shadow-login rounded-lg w-[80%] h-auto">
        <h1 className="font-bold text-2xl rounded-tl-lg rounded-tr-lg bg-gradient-to-tr from-mentisbg1 via-mentisbg2 to-mentisbg3 text-white p-4">
          Confirm Survey Delete
        </h1>
        <div className="flex flex-row gap-2 p-4">
          <button
            className="w-[50%] px-4 py-2 bg-gradient-to-br from-mentisred to-mentisdarkred border border-mentisdarkred text-black rounded-lg"
            onClick={() => actions.handleDeleteConfirmation()}
          >
            Delete
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

export default DeleteOverlay;
