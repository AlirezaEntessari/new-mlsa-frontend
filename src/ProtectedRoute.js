import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // Or return a loading spinner
  }

  if (!isSignedIn) {
    return <Navigate to="/login-page" replace />
  }

  return children;
};

export default ProtectedRoute;

