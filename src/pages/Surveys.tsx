import SurveyCards from "../components/SurveyCards";
import SurveysTable from "../components/SurveysTable";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Surveys: React.FC = () => {
  const isLarge = useMediaQuery();

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto p-4 pb-20 bg-bg lg:h-full lg:pb-0 lg:rounded-xl gap-4 relative">
      {isLarge ? <SurveysTable /> : <SurveyCards />}
    </div>
  );
};

export default Surveys;
