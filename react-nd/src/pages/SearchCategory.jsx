import React from "react";
import { useParams } from "react-router-dom";
import { CategorySection } from "../components/categories/CategorySection";
import { ServiceSection } from "../components/services/ServiceSection";

export const SearchCategory = () => {
  const { category } = useParams();

  return (
    <section className="searchCategory">
      <CategorySection isVertical={true} />
      <ServiceSection filterServices={true} selectedCategory={category} />
    </section>
  );
};
