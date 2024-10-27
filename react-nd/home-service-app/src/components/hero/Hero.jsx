import React from "react";
import { Search } from "./Search";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <>
      <h1 className={styles.h1}>
        Find Home Service/Repair <br /> Near You
      </h1>
      <Search />
    </>
  );
};
