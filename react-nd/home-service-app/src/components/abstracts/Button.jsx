import React from "react";
import styles from "./Button.module.scss";

export const Button = (btnProps) => {
  return (
    <button className={styles.btn} onClick={btnProps.event}>
      {btnProps.text}
    </button>
  );
};
