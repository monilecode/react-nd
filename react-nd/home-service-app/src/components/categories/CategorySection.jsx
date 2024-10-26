import React from "react";
import styles from "./CategorySection.module.scss";
import { CategoryCard } from "./CategoryCard";
import { categoryData } from "../../data/Data";

export function CategorySection() {
  return (
    <section className={styles.categorySection}>
      {categoryData.map((category) => (
        <CategoryCard key={category.id} heading={category.heading} />
      ))}
    </section>
  );
}
