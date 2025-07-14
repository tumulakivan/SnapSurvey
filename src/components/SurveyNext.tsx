import type { SurveyButtonTypes } from "../types/SurveyButtonTypes";

const SurveyNext: React.FC<SurveyButtonTypes> = ({ buttons, width }) => {
  return (
    <>
      <button
        className={`px-4 py-2 rounded-sm bg-gradient-to-br from-mentisbg1 via-mentisbg2 to-mentisbg3 border border-mentisbg1 text-black ${width}`}
        onClick={() => buttons.handleNext?.()}
      >
        Next
      </button>
    </>
  );
};

export default SurveyNext;
