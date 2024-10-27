import React from "react";
import styles from "./Topbar.module.scss";
import { NavLink } from "react-router-dom";

export const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.navBox}>
        <img
          className={styles.logo}
          src="./src/components/layout/logo.svg"
          alt="logo"
        />
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About Us
          </NavLink>
        </nav>
      </div>
      <button className={styles.btn}>Login/Sign Up</button>
    </header>
  );
};
