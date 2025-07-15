import type { QuestionTypes } from "../types/QuestionTypes";
import LikertScale from "./LikertScale";

const Question2: React.FC<QuestionTypes> = ({ states, actions }) => {
  const texts = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];

  return (
    <>
      <h1 className="text-3xl font-bold">Question 2</h1>
      <div className="w-full h-auto p-2">
        Whenever you lorem ipsum dolor sit amet, consectetur adipiscing elit?
        Curabitur auctor euismod molestie. Nullam tortor nisi, convallis ut
        pellentesque ut, maximus ut elit. Aenean finibus sed nunc non hendrerit.
        Vivamus varius congue pellentesque. Donec venenatis volutpat dui.
        Suspendisse ut purus non dui congue feugiat. Nulla id posuere leo. Nunc
        at varius lacus. Etiam pellentesque, arcu id rhoncus auctor, magna dolor
        commodo est, quis porta lacus leo sit amet ligula. Nam sit amet tempor
        lorem. Vestibulum pellentesque ultricies ante, eget elementum ante
        pellentesque et. Cras iaculis dolor sed quam placerat fermentum.
        Praesent cursus metus eget rutrum tincidunt.
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

export default Question2;
