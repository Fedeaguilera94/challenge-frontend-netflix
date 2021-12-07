import React from "react";
import netflix from "../../img/logo.png";
import "./NavBar.css";

export default function NavBar() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header.classList.toggle("active", this.window.scrollY > 0);
  });

  return (
    <div className="navbar_bg">
      <div className="navbar">
        <img className="logo" src={netflix} alt="logo" />

        <>
          <ul className="menu">
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
        </>
      </div>
    </div>
  );
}
