import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigateToLogin = useNavigate();

  const handleLogin = async () => {
    navigateToLogin("/login");
  };

  return <button onClick={handleLogin}>Login/Sign Up</button>;
};
