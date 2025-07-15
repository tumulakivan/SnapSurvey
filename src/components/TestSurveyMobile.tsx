import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SurveyNext from "./SurveyNext";
import AboutSurvey from "./AboutSurvey";
import SurveyPrev from "./SurveyPrev";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import SurveyComplete from "./SurveyComplete";

const TestSurveyMobile = () => {
  const [email, setEmail] = useState<string | "">("");
  const [name, setName] = useState<string | "">("");
  const [q1Node, setQ1Node] = useState<number | null>(null);
  const [q2Node, setQ2Node] = useState<number | null>(null);
  const [q3Text, setQ3Text] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const progress = Math.floor(((pageNumber - 1) / 5) * 100);

  const handleNext = () => {
    if (pageNumber < 6) setPageNumber((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPageNumber((prev) => prev - 1);
  };

  let content;
  let buttons;

  switch (pageNumber) {
    case 1:
      content = (
        <PersonalInfo
          states={{ email, name }}
          actions={{ setEmail, setName }}
        />
      );

      buttons = <SurveyNext buttons={{ handleNext }} />;
      break;
    case 2:
      content = <AboutSurvey />;

      buttons = (
        <div className="flex flex-row gap-2">
          <SurveyPrev buttons={{ handlePrev }} width={"w-1/2"} />
          <SurveyNext buttons={{ handleNext }} width={"w-1/2"} />
        </div>
      );
      break;
    case 3:
      content = (
        <Question1 states={{ node: q1Node }} actions={{ setNode: setQ1Node }} />
      );
      buttons = (
        <div className="flex flex-row gap-2">
          <SurveyPrev buttons={{ handlePrev }} width={"w-1/2"} />
          <SurveyNext buttons={{ handleNext }} width={"w-1/2"} />
        </div>
      );
      break;
    case 4:
      content = (
        <Question2 states={{ node: q2Node }} actions={{ setNode: setQ2Node }} />
      );
      buttons = (
        <div className="flex flex-row gap-2">
          <SurveyPrev buttons={{ handlePrev }} width={"w-1/2"} />
          <SurveyNext buttons={{ handleNext }} width={"w-1/2"} />
        </div>
      );
      break;
    case 5:
      content = (
        <Question3 states={{ text: q3Text }} actions={{ setText: setQ3Text }} />
      );
      buttons = (
        <div className="flex flex-row gap-2">
          <SurveyPrev buttons={{ handlePrev }} width={"w-1/2"} />
          <SurveyNext buttons={{ handleNext }} width={"w-1/2"} />
        </div>
      );
      break;
    case 6:
      content = (
        <SurveyComplete details={{ name, email, q1Node, q2Node, q3Text }} />
      );
      break;
  }

  return (
    <div className="flex flex-col h-[100vh] w-full bg-white p-4 rounded-lg shadow-survey">
      <div className="flex flex-col h-fit w-full gap-4 border-b border-gray-400 pb-4">
        <div className="text-5xl font-bold">Lorem? Ipsum.</div>
        <div className="flex flex-row gap-2 w-full h-fit relative justify-center items-center">
          <div className="h-[5px] w-[75%] rounded-lg bg-gray-400 relative">
            <div
              className="h-full rounded-lg bg-gradient-to-r from-mentisbg1 via-mentisbg2 to-mentisbg3 absolute transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="h-fit w-[25%] p-1 bg-black rounded-lg text-center text-white font-bold">
            {progress}%
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-4 h-full w-full gap-4">{content}</div>

      {buttons}
    </div>
  );
};

export default TestSurveyMobile;
