import React from "react";
import TopbarSCSS from "./Topbar.module.scss";

export function Topbar() {
  return (
    <header className={TopbarSCSS.topbar}>
      <div className={TopbarSCSS.nav__box}>
        <img
          className={TopbarSCSS.logo}
          src="src/assets/images/logo.svg"
          alt="logo"
        />
        <nav className={TopbarSCSS.nav}>
          <a className="nav__link" href="#">
            Home
          </a>
          <a className="nav__link" href="#">
            Services
          </a>
          <a className="nav__link" href="#">
            About Us
          </a>
        </nav>
      </div>
      <button className={TopbarSCSS.btn}>Login/Sign Up</button>
    </header>
  );
}
