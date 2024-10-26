import React from "react";
import styles from "./CategoryCard.module.scss";

export function CategoryCard(categoryProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.h2}>{categoryProps.heading}</h2>
    </div>
  );
}
