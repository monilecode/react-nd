import React from "react";
import styles from "./Topbar.module.scss";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";

export const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.navBlock}>
        <img
          className={styles.logo}
          src="./src/components/layout/images/logo.svg"
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
      <Login />
    </header>
  );
};
