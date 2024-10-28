import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../abstracts/Button";
import styles from "../abstracts/Button.module.scss";

export const Login = () => {
  const navigateToLogin = useNavigate();

  const handleLogin = async () => {
    navigateToLogin("/login");
  };

  return (
    <Button className={styles.btn} event={handleLogin} text="Login / Sign Up" />
  );
};
