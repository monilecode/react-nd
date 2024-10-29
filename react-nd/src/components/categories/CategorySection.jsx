import React from "react";
import styles from "./CategorySection.module.scss";
import { CategoryCard } from "./CategoryCard";
import { categoryData } from "../../data/Data";

export const CategorySection = ({ isVertical }) => {
  return (
    <div className="container">
      <section
        className={`${styles.categorySection} ${
          isVertical ? styles.vertical : ""
        }`}
      >
        {categoryData.map((item) => (
          <CategoryCard
            key={item.id}
            category={item.category}
            icon={item.icon}
            alt={item.alt}
          />
        ))}
      </section>
    </div>
  );
};
