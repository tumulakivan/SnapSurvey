import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type Props = {
  children: React.ReactElement;
};

const ProtectedDashboard = ({ children }: Props) => {
  const { loginStatus } = useAuth();

  if (!loginStatus) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedDashboard;
