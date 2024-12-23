import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../storeContexts/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
