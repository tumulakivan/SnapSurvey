import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SurveyNext from "./SurveyNext";
import AboutSurvey from "./AboutSurvey";
import SurveyPrev from "./SurveyPrev";
import Question1 from "./Question1";

const TestSurveyMobile = () => {
  const [email, setEmail] = useState<string | "">("");
  const [name, setName] = useState<string | "">("");
  const [progress, setProgress] = useState<number>(20);
  const [pageNumber, setPageNumber] = useState(1);

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
      content = <Question1 />;
      buttons = (
        <div className="flex flex-row gap-2">
          <SurveyPrev buttons={{ handlePrev }} width={"w-1/2"} />
          <SurveyNext buttons={{ handleNext }} width={"w-1/2"} />
        </div>
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
              className={`h-full w-[${progress}%] rounded-lg bg-gradient-to-r from-mentisbg1 via-mentisbg2 to-mentisbg3 absolute transition-all duration-500`}
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
