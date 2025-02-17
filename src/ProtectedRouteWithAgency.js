import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRouteWithAgency = ({ children }) => {
  const { user } = useUser();
  const [hasAgency, setHasAgency] = useState(null); // null means loading

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5001/api/check-agency?email=${user.primaryEmailAddress?.emailAddress}`)
        .then((response) => {
          setHasAgency(response.data.hasAgency);
        })
        .catch((error) => {
          console.error("Error checking agency:", error);
          setHasAgency(false);
        });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login-page" replace />;
  }

  if (hasAgency === null) {
    return <div>Loading...</div>; // Prevents flickering
  }

  if (!hasAgency) {
    return <Navigate to="/agency-information-page" replace />;
  }

  return children;
};

export default ProtectedRouteWithAgency;
