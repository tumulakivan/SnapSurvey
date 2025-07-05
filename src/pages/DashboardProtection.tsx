import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "./DashboardLayout";

const DashboardProtection = () => {
  return (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  );
};

export default DashboardProtection;
