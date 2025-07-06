import { Routes, Route } from "react-router-dom";
import LoginProtection from "./pages/LoginProtection";
import DashboardProtection from "./pages/DashboardProtection";

function App() {
  return (
    <div className="h-screen w-screen bg-bg flex justify-center items-center">
      <Routes>
        <Route path="/*" element={<DashboardProtection />} />
        <Route path="/login" element={<LoginProtection />} />
      </Routes>
    </div>
  );
}

export default App;
