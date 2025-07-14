import { Routes, Route } from "react-router-dom";
import Surveys from "../pages/Surveys";
import Participants from "../pages/Participants";
import TestSurvey from "../pages/TestSurvey";

const Dashboard: React.FC = () => {
  return (
    <div className="h-full w-full lg:ml-4 lg:mr-4 lg:shadow-login bg-white lg:rounded-xl transition-all duration-500">
      <Routes>
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/test" element={<TestSurvey />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
