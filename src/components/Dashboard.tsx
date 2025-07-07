import { Routes, Route } from "react-router-dom";
import Surveys from "../pages/Surveys";
import Participants from "../pages/Participants";

const Dashboard: React.FC = () => {
  return (
    <div className="h-full w-full lg:ml-4 lg:mr-4 lg:border lg:shadow-login lg:border-btn-stop bg-bg lg:rounded-xl transition-all duration-500">
      <Routes>
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/participants" element={<Participants />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
