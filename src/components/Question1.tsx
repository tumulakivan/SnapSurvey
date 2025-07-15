import type { QuestionTypes } from "../types/QuestionTypes";
import LikertScale from "./LikertScale";

const Question1: React.FC<QuestionTypes> = ({ states, actions }) => {
  const texts = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];

  return (
    <>
      <h1 className="text-3xl font-bold">Question 1</h1>
      <div className="w-full h-auto p-2">
        How do you feel about nulla nisl justo, sodales faucibus aliquet id,
        laoreet a felis. Mauris id commodo nisi, vel condimentum metus. Donec
        elementum hendrerit nisi vitae condimentum. Phasellus condimentum nibh
        risus, a dictum ante varius ultricies?
      </div>

      <div className="w-full p-4">
        <LikertScale node={states?.node ?? null} setNode={actions.setNode!} />
      </div>
      <div className="w-full -mt-5 lg:-mt-0">
        <div className="flex justify-center text-center gap-7 lg:gap-40 text-xs w-full">
          {texts.map((text, index) => (
            <div key={index} className="w-[20%] break-words">
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question1;
