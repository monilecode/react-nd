import React from "react";
import styles from "./Topbar.module.scss";
import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.nav__box}>
        <img
          className={styles.logo}
          src="./src/components/layout/logo.svg"
          alt="logo"
        />
        <nav className={styles.nav}>
          <Link className={styles.a} to="/">
            Home
          </Link>
          <Link className={styles.a} to="services">
            Services
          </Link>
          <Link className={styles.a} to="about">
            About Us
          </Link>
        </nav>
      </div>
      <button className={styles.btn}>Login/Sign Up</button>
    </header>
  );
};
