import React from "react";
import HeroSCSS from "./Hero.module.scss";
import Search from "../search/Search.jsx";

export default function Hero() {
  return (
    <>
      <h1>
        Find Home Service/Repair <br /> Near You
      </h1>
      <Search />
    </>
  );
}
