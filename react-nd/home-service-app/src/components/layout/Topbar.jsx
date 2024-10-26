import React from "react";
import styles from "./Topbar.module.scss";

export function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.nav__box}>
        <img
          className={styles.logo}
          src="./src/components/layout/logo.svg"
          alt="logo"
        />
        <nav className={styles.nav}>
          <a className={styles.a} to="#">
            Home
          </a>
          <a className={styles.a} to="#">
            Services
          </a>
          <a className={styles.a} to="#">
            About Us
          </a>
        </nav>
      </div>
      <button className={styles.btn}>Login/Sign Up</button>
    </header>
  );
}
