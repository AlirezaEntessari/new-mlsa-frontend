import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // Or return a loading spinner
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectIfAuthenticated;



