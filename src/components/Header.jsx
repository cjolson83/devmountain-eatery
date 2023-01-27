import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className={styles.nav_button}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={styles.nav_button}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
