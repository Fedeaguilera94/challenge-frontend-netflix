import React from "react";
import "./Card.css";

export default function Card({ src, alt }) {
  return (
    <div>
      <img className="movie_imga" src={src} alt={alt} />
    </div>
  );
}
