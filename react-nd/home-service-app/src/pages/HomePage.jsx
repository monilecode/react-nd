import React from "react";
import { Hero } from "../components/hero/Hero";
import { CategorySection } from "../components/categories/CategorySection";
import { ServiceSection } from "../components/services/ServiceSection";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceSection />
    </>
  );
};
