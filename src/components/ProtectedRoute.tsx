import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type Props = {
  children: React.ReactElement;
};

const ProtectedRoute = ({ children }: Props) => {
  const { loginStatus, loading } = useAuth();

  if (loading) {
    console.log("loading...");
    return null;
  }

  if (!loginStatus) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
