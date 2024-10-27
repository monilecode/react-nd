import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../abstract/Button";
import styles from "../abstract/Button.module.scss";

export const Login = () => {
  const navigateToLogin = useNavigate();

  const handleLogin = async () => {
    navigateToLogin("/login");
  };

  return (
    <Button
      className={styles.btn}
      onClick={handleLogin}
      text="Login / Sign Up"
      navigateTo="/login"
    />
  );
};
