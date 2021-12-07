import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import netflix from "../../img/logo.png";
import "./NavBar.css";

export default function NavBar() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header.classList.toggle("active", this.window.scrollY > 0);
  });
  const [width, setWidth] = useState(window.innerWidth);
  const size = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", size);
  }, []);

  return (
    <div className="navbar_bg">
      <div className="navbar">
        <img className="logo" src={netflix} alt="logo" />
        {width > "425" ? (
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
        ) : (
          <ul className="menu">
            <a>
              <li> Inicio</li>
            </a>
            <a>
              <li> Peliculas</li>
            </a>
            <a>
              <li> Ver de nuevo</li>
            </a>
            <a>
              <li> Ver mas 🡓</li>
            </a>
          </ul>
        )}
      </div>
    </div>
  );
}
