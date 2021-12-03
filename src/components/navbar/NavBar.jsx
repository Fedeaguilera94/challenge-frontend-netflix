import React from "react";
import netflix from "../../img/logo.png";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <div className={styles.navbar_bg}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={netflix} alt="logo" />
        <ul className={styles.menu}>
          <a>
            <li>Inicio</li>
          </a>
          <a>
            <li>Ver de nuevo</li>
          </a>
          <a>
            <li>Series</li>
          </a>
          <a>
            <li>Peliculas</li>
          </a>
          <a>
            <li>Novedades populares</li>
          </a>
          <a>
            <li>Mi lista</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
