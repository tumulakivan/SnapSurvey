import TestSurveyLarge from "../components/TestSurveyLarge";
import TestSurveyMobile from "../components/TestSurveyMobile";
import { useMediaQuery } from "../hooks/useMediaQuery";

const TestSurvey: React.FC = () => {
  const isLarge = useMediaQuery();

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto p-4 bg-white lg:h-full lg:rounded-xl relative">
      {isLarge ? <TestSurveyLarge /> : <TestSurveyMobile />}
    </div>
  );
};

export default TestSurvey;
