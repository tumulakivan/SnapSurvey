import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardProtection from "./pages/DashboardProtection";

function App() {
  return (
    <div className="h-screen w-screen bg-bg flex justify-center items-center">
      <Routes>
        <Route path="/" element={<DashboardProtection />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
