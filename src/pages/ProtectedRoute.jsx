import React, { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticited } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticited) return navigate("/");
  }, [isAuthenticited, navigate]);
  
  return isAuthenticited ? children : null;
};

export default ProtectedRoute;
