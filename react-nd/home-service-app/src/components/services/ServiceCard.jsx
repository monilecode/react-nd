import React from "react";
import styles from "./ServiceCard.module.scss";

export const ServiceCard = (serviceProps) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={serviceProps.img}
        alt={serviceProps.alt}
      />

      <div className={styles.textBox}>
        <h2 className={styles.h2}>{serviceProps.heading}</h2>
        <p className={styles.name}>{serviceProps.name}</p>
        <p className={styles.address}>{serviceProps.address}</p>
      </div>
    </div>
  );
};
