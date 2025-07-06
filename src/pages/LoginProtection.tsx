import PublicRoute from "../components/PublicRoute";
import LoginPage from "./LoginPage";

const DashboardProtection = () => {
  return (
    <PublicRoute>
      <LoginPage />
    </PublicRoute>
  );
};

export default DashboardProtection;
