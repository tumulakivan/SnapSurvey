import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AboutSurvey from "./AboutSurvey";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import SurveyComplete from "./SurveyComplete";

const TestSurveyLarge = () => {
  const [email, setEmail] = useState<string | "">("");
  const [name, setName] = useState<string | "">("");
  const [q1Node, setQ1Node] = useState<number | null>(null);
  const [q2Node, setQ2Node] = useState<number | null>(null);
  const [q3Text, setQ3Text] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const disablePrev = pageNumber === 1;
  const disableNext = pageNumber === 6;

  const handleNext = () => {
    if (pageNumber < 6) setPageNumber((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (pageNumber > 1) setPageNumber((prev) => prev - 1);
  };

  let content;

  switch (pageNumber) {
    case 1:
      content = (
        <PersonalInfo
          states={{ email, name }}
          actions={{ setEmail, setName }}
        />
      );

      break;
    case 2:
      content = <AboutSurvey />;
      break;
    case 3:
      content = (
        <Question1 states={{ node: q1Node }} actions={{ setNode: setQ1Node }} />
      );
      break;
    case 4:
      content = (
        <Question2 states={{ node: q2Node }} actions={{ setNode: setQ2Node }} />
      );
      break;
    case 5:
      content = (
        <Question3 states={{ text: q3Text }} actions={{ setText: setQ3Text }} />
      );
      break;
    case 6:
      content = (
        <SurveyComplete details={{ name, email, q1Node, q2Node, q3Text }} />
      );
      break;
  }

  return (
    <div className="flex flex-col h-[100vh] w-full">
      <div className="flex flex-col h-fit w-full gap-4 border-b border-gray-400 pb-6">
        <div className="text-5xl font-bold">Lorem? Ipsum.</div>
        <div className="flex flex-row gap-2 w-full h-fit relative items-center">
          <div className="h-[5px] w-[80%] rounded-lg bg-gray-400 relative">
            <div
              className="flex flex-col h-full rounded-lg bg-gradient-to-r from-mentisbg1 via-mentisbg2 to-mentisbg3 absolute transition-all duration-500"
              style={{ width: `0%` }}
            ></div>
          </div>
          <div className="flex flex-row gap-2 w-[20%]">
            <button
              className={`w-[50%] px-4 py-2 rounded-lg text-white ${
                disablePrev
                  ? "bg-gray-400"
                  : "bg-mentisblue cursor-pointer hover:outline outline-mentisblue outline-offset-2"
              }`}
              disabled={disablePrev}
              onClick={() => handlePrev()}
            >
              Prev
            </button>
            <button
              className={`w-[50%] px-4 py-2 rounded-lg text-white ${
                disableNext
                  ? "bg-gray-400"
                  : "bg-mentisblue cursor-pointer hover:outline outline-mentisblue outline-offset-2"
              }`}
              disabled={disableNext}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-10 px-96 h-full w-full gap-4">
        {content}
      </div>
    </div>
  );
};

export default TestSurveyLarge;
