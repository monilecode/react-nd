import React from "react";
import "./App.scss";
import { Topbar } from "./components/layout/Topbar";
import { Hero } from "./components/hero/Hero";
import { CategorySection } from "./components/categories/CategorySection";

function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <CategorySection />
    </>
  );
}

export default App;
