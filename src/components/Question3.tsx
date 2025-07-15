import type { QuestionTypes } from "../types/QuestionTypes";

const Question3: React.FC<QuestionTypes> = ({ states, actions }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Question 3</h1>
      <div className="w-full h-auto p-2">
        Explain how you deal with situation where aenean finibus sed nunc non
        hendrerit. Vivamus varius congue pellentesque.
      </div>
      <div className="flex flex-col h-full pb-4">
        <textarea
          value={states?.text}
          onChange={(e) => actions?.setText?.(e.target.value)}
          className="bg-bg w-full h-full p-2 rounded-lg border border-mentisblue caret-fieldgray"
        />
      </div>
    </>
  );
};

export default Question3;
