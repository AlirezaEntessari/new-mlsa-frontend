import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

const RedirectIfAuthenticated = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // Or return a loading spinner
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // Render the child route that matches
};

export default RedirectIfAuthenticated;
