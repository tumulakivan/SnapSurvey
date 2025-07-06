import { Routes, Route } from "react-router-dom";
import Surveys from "../pages/Surveys";

const Dashboard: React.FC = () => {
  return (
    <div className="h-full w-full ml-4 mr-4 border shadow-login border-btn-stop bg-black rounded-xl transition-all duration-500">
      <Routes>
        <Route path="/surveys" element={<Surveys />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
