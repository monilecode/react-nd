import React from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Hero from "./components/hero/Hero";
import CategoriesSection from "./components/categories-section/CategoriesSection";

function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <CategoriesSection />
    </>
  );
}

export default App;
