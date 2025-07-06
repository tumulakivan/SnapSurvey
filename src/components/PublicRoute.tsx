import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type Props = {
  children: React.ReactElement;
};

const PublicRoute = ({ children }: Props) => {
  const { loginStatus, loading } = useAuth();

  if (loading) {
    console.log("loading...");
    return null;
  }

  if (loginStatus) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
