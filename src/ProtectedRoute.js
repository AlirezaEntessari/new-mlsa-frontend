import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // Or return a loading spinner
  }

  if (!isSignedIn) {
    return <Navigate to="/login-page" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;


