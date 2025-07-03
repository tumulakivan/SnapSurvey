import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="h-screen w-screen bg-bg flex justify-center items-center">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
