import React from "react";
import styles from "./CategorySection.module.scss";
import { CategoryCard } from "./CategoryCard";
import { categoryData } from "../../data/Data";

export const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      {categoryData.map((item) => (
        <CategoryCard
          key={item.id}
          heading={item.category}
          icon={item.icon}
          alt={item.alt}
        />
      ))}
    </section>
  );
};
