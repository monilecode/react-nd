import React from "react";
import styles from "./ServiceCard.module.scss";
import { Button } from "../abstracts/Button";

export const ServiceCard = (serviceProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={serviceProps.img}
          alt={serviceProps.alt}
        />
      </div>

      <div className={styles.textBox}>
        <p className={styles.categoryTag}>{serviceProps.categoryTag}</p>
        <h2 className={styles.h2}>{serviceProps.heading}</h2>
        <p className={styles.name}>{serviceProps.name}</p>
        <p className={styles.address}>{serviceProps.address}</p>
        <Button className={styles.btn} text="Book now" />
      </div>
    </div>
  );
};
