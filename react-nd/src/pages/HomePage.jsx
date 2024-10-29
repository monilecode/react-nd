import React from "react";
import { Hero } from "../components/hero/Hero";
import { ServiceSection } from "../components/services/ServiceSection";

export const HomePage = () => {
  console.log(localStorage);
  return (
    <>
      <Hero />
      <h3>Popular Businesses</h3>
      <ServiceSection isVertical={false} filterServices={false} />
    </>
  );
};
