import React, { useState } from "react";

import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={getImageUrl("navbar/logo.png")}/>
      <div className={styles.menu}>
      <ul className={styles.menuItems}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/facilities">Facilities</a>
          </li>
          <li>
            <a href="/rooms">Rooms</a>
          </li>
          <li>
            <a href="/contacts">Contact us</a>
          </li>
        </ul>
        </div>
    </nav>
  );
};