import React from "react";
import styles from "./CategoryCard.module.scss";

export const CategoryCard = (categoryProps) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={categoryProps.icon}
        alt={categoryProps.alt}
      />
      <h2 className={styles.h2}>{categoryProps.heading}</h2>
    </div>
  );
};
